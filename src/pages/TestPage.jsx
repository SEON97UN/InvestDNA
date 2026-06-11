import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import { calculateResult } from "../utils/scoring";

export default function TestPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  const currentQuestion = questions[currentIndex];
  const progress = (currentIndex / questions.length) * 100;

  const axisLabel = {
    time: "시간 지평",
    analysis: "분석 방식",
    risk: "리스크 태도",
  };

  const transitionTo = (callback) => {
    setAnimating(true);
    setFadeIn(false);
    setTimeout(() => {
      callback();
      setFadeIn(true);
      setAnimating(false);
    }, 250);
  };

  const handleSelect = (option) => {
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
      navigate("/result", { state: { result } });
    } else {
      transitionTo(() => {
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
      transitionTo(() => {
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
      {/* 배경 도트 패턴 */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #1A1A2E0A 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* 헤더 */}
      <div className="w-full max-w-lg mb-6 relative z-10">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleBack}
            className="font-medium px-4 py-2 rounded-xl text-sm transition-all duration-200 hover:scale-105"
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #1A1A2E12",
              color: "#1A1A2E60",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            {currentIndex === 0 ? "처음으로" : "이전 질문"}
          </button>
          <span
            className="text-sm font-semibold"
            style={{ color: "#1A1A2E50" }}
          >
            {currentIndex + 1}
            <span style={{ color: "#1A1A2E25" }}> / {questions.length}</span>
          </span>
          <span
            className="text-sm font-black"
            style={{
              color: "#1A1A2E25",
              fontFamily: "'Noto Serif KR', serif",
            }}
          >
            Invest<span style={{ color: "#D97706" }}>DNA</span>
          </span>
        </div>

        {/* 프로그레스 바 */}
        <div
          className="w-full rounded-full overflow-hidden"
          style={{
            height: "3px",
            background: "#1A1A2E08",
          }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
              background: "#D97706",
            }}
          />
        </div>
      </div>

      {/* 질문 카드 */}
      <div
        className="max-w-lg w-full relative z-10"
        style={{
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0px)" : "translateY(10px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
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
          <div
            className="px-7 pt-7 pb-6"
            style={{
              borderBottom: "1px solid #1A1A2E06",
            }}
          >
            {/* 축 레이블 */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#D97706" }}
              />
              <span
                className="text-xs font-medium uppercase tracking-widest"
                style={{ color: "#1A1A2E35" }}
              >
                {axisLabel[currentQuestion.axis]}
              </span>
            </div>

            {/* 질문 텍스트 — 왼쪽 정렬, 적절한 크기 */}
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

          {/* 선택지 영역 */}
          <div className="p-4 flex flex-col gap-2">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selected?.text === option.text;
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="w-full text-left rounded-2xl transition-all duration-200 flex items-center gap-3"
                  style={{
                    padding: "14px 16px",
                    background: isSelected ? "#FEF3C7" : "#F7F5F0",
                    border: isSelected
                      ? "1.5px solid #D97706"
                      : "1.5px solid transparent",
                    transform: isSelected ? "scale(1.01)" : "scale(1)",
                  }}
                >
                  {/* 체크 */}
                  <span
                    className="w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200"
                    style={{
                      borderColor: isSelected ? "#D97706" : "#1A1A2E20",
                      background: isSelected ? "#D97706" : "transparent",
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
              className="w-full py-4 rounded-2xl font-bold text-base transition-all duration-200"
              style={{
                background: selected !== null ? "#1A1A2E" : "#1A1A2E08",
                color: selected !== null ? "#F7F5F0" : "#1A1A2E25",
                cursor: selected !== null ? "pointer" : "not-allowed",
                boxShadow: selected !== null
                  ? "0 4px 16px rgba(26,26,46,0.2)"
                  : "none",
              }}
            >
              {currentIndex + 1 === questions.length ? "결과 보기" : "다음"}
            </button>
          </div>
        </div>
      </div>

      {/* 면책 문구 */}
      <p
        className="text-xs mt-8 text-center relative z-10"
        style={{ color: "#1A1A2E25" }}
      >
        본 테스트는 교육 및 오락 목적으로 제공되며,
        투자 권유 또는 투자 자문이 아닙니다.
      </p>
        <p className="text-xs" style={{ color: "#1A1A2E18" }}>
          © 2026 InvestDNA. All rights reserved.
      </p>
    </div>
  );
}