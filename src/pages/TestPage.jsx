import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage.jsx";
import { calculateResult } from "../utils/scoring";

export default function TestPage() {
  const navigate = useNavigate();
  const { lang, toggleLang, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [cardState, setCardState] = useState("enter"); // "enter" | "idle" | "exit-left" | "exit-right"
  const [mounted, setMounted] = useState(false);
  const [optionsMounted, setOptionsMounted] = useState(false);

  const questions = t.questions_data;
  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;
  const progressFull = ((currentIndex + 1) / questions.length) * 100;

  // 첫 진입 애니메이션
  useEffect(() => {
    const t1 = setTimeout(() => setMounted(true), 50);
    const t2 = setTimeout(() => setCardState("idle"), 50);
    const t3 = setTimeout(() => setOptionsMounted(true), 200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const getCardStyle = () => {
    switch (cardState) {
      case "enter":
        return { opacity: 0, transform: "translateY(24px) scale(0.98)" };
      case "idle":
        return {
          opacity: 1,
          transform: "translateY(0px) scale(1)",
          transition: "opacity 0.45s ease, transform 0.45s ease",
        };
      case "exit-left":
        return {
          opacity: 0,
          transform: "translateX(-32px) scale(0.97)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        };
      case "exit-right":
        return {
          opacity: 0,
          transform: "translateX(32px) scale(0.97)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        };
      default:
        return {};
    }
  };

  const transitionTo = (direction, callback) => {
    setAnimating(true);
    setOptionsMounted(false);
    setCardState(direction === "forward" ? "exit-left" : "exit-right");
    setTimeout(() => {
      callback();
      setCardState("enter");
      setTimeout(() => {
        setCardState("idle");
        setTimeout(() => {
          setOptionsMounted(true);
          setAnimating(false);
        }, 100);
      }, 30);
    }, 220);
  };

  const handleSelect = (option) => {
    if (animating) return;
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === null || animating) return;
    const newAnswers = [
      ...answers,
      { axis: currentQuestion.axis, score: selected.score },
    ];
    if (currentIndex + 1 >= questions.length) {
      const result = calculateResult(newAnswers);
      navigate(`/result/${result.type.id}`, { state: { scores: result.scores } });
    } else {
      transitionTo("forward", () => {
        setAnswers(newAnswers);
        setCurrentIndex(currentIndex + 1);
        setSelected(null);
      });
    }
  };

  const handleBack = () => {
    if (animating) return;
    if (currentIndex === 0) {
      navigate("/");
    } else {
      transitionTo("backward", () => {
        setAnswers(answers.slice(0, -1));
        setCurrentIndex(currentIndex - 1);
        setSelected(null);
      });
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12"
      style={{ background: "#F7F5F0" }}
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #1A1A2E0A 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* 언어 토글 */}
      <button
        onClick={toggleLang}
        className="fixed top-6 right-6 z-20 font-semibold px-3 py-1.5 rounded-xl text-xs transition-all duration-200 hover:scale-105"
        style={{
          background: "#FFFFFF",
          border: "1.5px solid #1A1A2E12",
          color: "#1A1A2E60",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.4s ease 0.3s",
        }}
      >
        {lang === "ko" ? "EN" : "KR"}
      </button>

      {/* 헤더 */}
      <div
        className="w-full max-w-lg mb-6 relative z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0px)" : "translateY(-12px)",
          transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleBack}
            className="font-medium px-4 py-2 rounded-xl text-sm"
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #1A1A2E12",
              color: "#1A1A2E60",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
            }}
          >
            {currentIndex === 0 ? t.test.first : t.test.prev}
          </button>
          <span className="text-sm font-semibold" style={{ color: "#1A1A2E50" }}>
            {currentIndex + 1}
            <span style={{ color: "#1A1A2E25" }}> / {questions.length}</span>
          </span>
          <span
            className="text-sm font-black"
            style={{ color: "#1A1A2E25", fontFamily: "'Noto Serif KR', serif" }}
          >
            Invest<span style={{ color: "#D97706" }}>DNA</span>
          </span>
        </div>

        {/* 프로그레스 바 */}
        <div
          className="w-full rounded-full overflow-hidden relative"
          style={{ height: "3px", background: "#1A1A2E08" }}
        >
          {/* 완료된 구간 */}
          <div
            className="h-full rounded-full absolute left-0 top-0"
            style={{
              width: `${progress}%`,
              background: "#D9770640",
              transition: "width 0.4s ease",
            }}
          />
          {/* 현재 진행 */}
          <div
            className="h-full rounded-full absolute left-0 top-0"
            style={{
              width: `${progressFull}%`,
              background: "#D97706",
              transition: "width 0.4s ease",
              boxShadow: "0 0 6px #D9770660",
            }}
          />
        </div>
      </div>

      {/* 질문 카드 */}
      <div
        className="max-w-lg w-full relative z-10"
        style={getCardStyle()}
      >
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "#FFFFFF",
            boxShadow: "0 4px 24px rgba(26,26,46,0.07), 0 1px 4px rgba(26,26,46,0.04)",
            border: "1.5px solid #1A1A2E08",
          }}
        >
          {/* 질문 영역 */}
          <div className="px-7 pt-7 pb-6" style={{ borderBottom: "1px solid #1A1A2E06" }}>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#D97706", boxShadow: "0 0 4px #D9770680" }}
              />
              <span
                className="text-xs font-medium uppercase tracking-widest"
                style={{ color: "#1A1A2E35" }}
              >
                {t.test.axisLabel[currentQuestion.axis]}
              </span>
            </div>
            <p
              className="font-bold leading-relaxed"
              style={{
                color: "#1A1A2E",
                fontSize: "17px",
                lineHeight: 1.65,
                wordBreak: "keep-all",
                overflowWrap: "break-word",
              }}
            >
              {currentQuestion.question}
            </p>
          </div>

          {/* 옵션 — 스태거 애니메이션 */}
          <div className="p-4 flex flex-col gap-2">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selected?.text === option.text;
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="w-full text-left rounded-2xl flex items-center gap-3"
                  style={{
                    padding: "14px 16px",
                    background: isSelected ? "#FEF3C7" : "#F7F5F0",
                    border: isSelected ? "1.5px solid #D97706" : "1.5px solid transparent",
                    transform: optionsMounted
                      ? isSelected ? "scale(1.01)" : "scale(1)"
                      : "translateY(10px)",
                    opacity: optionsMounted ? 1 : 0,
                    transition: `opacity 0.3s ease ${index * 0.06}s, transform 0.3s ease ${index * 0.06}s, background 0.15s ease, border-color 0.15s ease`,
                    boxShadow: isSelected ? "0 2px 12px rgba(217,119,6,0.15)" : "none",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center"
                    style={{
                      borderColor: isSelected ? "#D97706" : "#1A1A2E20",
                      background: isSelected ? "#D97706" : "transparent",
                      transition: "all 0.15s ease",
                      flexShrink: 0,
                    }}
                  >
                    {isSelected && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span
                    className="text-sm leading-relaxed font-medium"
                    style={{
                      color: isSelected ? "#92400E" : "#1A1A2E70",
                      wordBreak: "keep-all",
                      transition: "color 0.15s ease",
                    }}
                  >
                    {option.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 다음 버튼 */}
          <div className="px-4 pb-4">
            <button
              onClick={handleNext}
              disabled={selected === null || animating}
              className="w-full py-4 rounded-2xl font-bold text-base"
              style={{
                background: selected !== null ? "#1A1A2E" : "#1A1A2E08",
                color: selected !== null ? "#F7F5F0" : "#1A1A2E25",
                cursor: selected !== null ? "pointer" : "not-allowed",
                boxShadow: selected !== null ? "0 4px 16px rgba(26,26,46,0.2)" : "none",
                transform: "scale(1)",
                transition: "background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease",
              }}
              onMouseEnter={e => {
                if (selected !== null) {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(26,26,46,0.28)";
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = selected !== null
                  ? "0 4px 16px rgba(26,26,46,0.2)"
                  : "none";
              }}
              onMouseDown={e => {
                if (selected !== null) e.currentTarget.style.transform = "scale(0.98)";
              }}
              onMouseUp={e => {
                if (selected !== null) e.currentTarget.style.transform = "scale(1.02)";
              }}
            >
              {currentIndex + 1 === questions.length ? t.test.result : t.test.next}
            </button>
          </div>
        </div>
      </div>

      <div
        className="mt-8 text-center flex flex-col gap-1 relative z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.4s ease 0.5s",
        }}
      >
        <p className="text-xs" style={{ color: "#1A1A2E25" }}>
          {t.test.disclaimer}
        </p>
        <p className="text-xs" style={{ color: "#1A1A2E20" }}>
          {t.test.copyright}
        </p>
      </div>
    </div>
  );
}