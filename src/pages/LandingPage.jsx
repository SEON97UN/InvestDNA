import { useNavigate } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

export default function LandingPage() {
  const navigate = useNavigate();
  const { lang, toggleLang, t } = useLanguage();

  const typeList = [
    { key: "long-qualitative-aggressive" },
    { key: "long-qualitative-defensive" },
    { key: "long-quantitative-defensive" },
    { key: "long-quantitative-aggressive" },
    { key: "short-qualitative-aggressive" },
    { key: "short-qualitative-defensive" },
    { key: "short-quantitative-aggressive" },
    { key: "short-quantitative-defensive" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{ background: "#F7F5F0" }}
    >
      {/* 배경 도트 패턴 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #1A1A2E0A 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* 상단 8색 레인보우 바 */}
      <div className="absolute top-0 left-0 right-0 h-2 flex">
        {typeList.map(({ key }) => {
          const type = t.types_data[key];
          return (
            <div
              key={key}
              className="flex-1 h-full"
              style={{ background: type.color.primary }}
            />
          );
        })}
      </div>

      {/* 언어 토글 */}
      <button
        onClick={toggleLang}
        className="absolute top-6 right-6 z-20 font-semibold px-3 py-1.5 rounded-xl text-xs transition-all duration-200 hover:scale-105"
        style={{
          background: "#FFFFFF",
          border: "1.5px solid #1A1A2E12",
          color: "#1A1A2E60",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        {lang === "ko" ? "EN" : "KR"}
      </button>

      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg py-14">

        {/* 상단 레이블 */}
        <div className="flex items-center gap-2 mb-7">
          <div className="h-px w-8" style={{ background: "#1A1A2E30" }} />
          <p
            className="text-xs tracking-[0.25em] uppercase font-medium"
            style={{ color: "#1A1A2E50" }}
          >
            {t.landing.badge}
          </p>
          <div className="h-px w-8" style={{ background: "#1A1A2E30" }} />
        </div>

        {/* 로고 */}
        <h1
          className="text-6xl sm:text-7xl tracking-tight mb-1 text-center"
          style={{
            color: "#1A1A2E",
            fontFamily: "'Noto Serif KR', serif",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            fontWeight: 900,
          }}
        >
          Invest<span style={{ color: "#D97706" }}>DNA</span>
        </h1>

        {/* 서브타이틀 */}
        <p
          className="text-base text-center mt-5 mb-1"
          style={{ color: "#1A1A2E75", lineHeight: 1.8, letterSpacing: "0.01em" }}
        >
          {t.landing.subtitle}
        </p>
        <p
          className="text-sm text-center mb-9"
          style={{ color: "#1A1A2E40" }}
        >
          {t.landing.subtitleSub}
        </p>

        {/* 유형 카드 그리드 */}
        <div className="grid grid-cols-4 gap-2.5 w-full mb-7">
          {typeList.map(({ key }) => {
            const type = t.types_data[key];
            const isCharcoal = type.color.primary === "#374151";
            const displayColor = isCharcoal ? "#4B5563" : type.color.primary;

            return (
              <div
                key={key}
                className="rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-default"
                style={{
                  background: isCharcoal ? "#F8F8F8" : "#FFFFFF",
                  border: `1.5px solid ${displayColor}30`,
                  boxShadow: `0 2px 16px ${displayColor}15, 0 1px 4px rgba(0,0,0,0.05)`,
                  minHeight: "96px",
                  padding: "16px 8px",
                }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: displayColor, boxShadow: `0 0 6px ${displayColor}50` }}
                />
                <span
                  className="font-bold text-center leading-tight"
                  style={{ color: displayColor, fontSize: "11px" }}
                >
                  {type.name}
                </span>
                <span
                  className="text-center leading-tight"
                  style={{
                    color: `${displayColor}65`,
                    fontSize: "9px",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  {type.english.replace("The ", "")}
                </span>
              </div>
            );
          })}
        </div>

        {/* 구분선 */}
        <div
          className="w-full mb-6"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #1A1A2E10, transparent)",
          }}
        />

        {/* 시작 버튼 */}
        <button
          onClick={() => navigate("/test")}
          className="w-full relative overflow-hidden font-black py-4 sm:py-5 px-8 rounded-2xl text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
          style={{
            background: "#1A1A2E",
            color: "#F7F5F0",
            boxShadow: "0 4px 24px rgba(26,26,46,0.2), 0 1px 4px rgba(26,26,46,0.1)",
            letterSpacing: "0.01em",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          <span className="relative">{t.landing.cta}</span>
        </button>

        {/* 유형 탐색 버튼 */}
        <button
          onClick={() => navigate("/types")}
          className="w-full font-medium py-3.5 rounded-2xl text-sm transition-all duration-200 hover:scale-[1.02] mt-3"
          style={{
            background: "transparent",
            border: "1.5px solid #1A1A2E15",
            color: "#1A1A2E60",
            letterSpacing: "0.01em",
          }}
        >
          {t.landing.explore}
        </button>

        {/* 메타 정보 */}
        <div className="flex items-center justify-center gap-5 mt-5">
          {t.landing.meta.map((text) => (
            <span
              key={text}
              className="text-xs flex items-center gap-1.5"
              style={{ color: "#1A1A2E35" }}
            >
              <span
                className="w-1 h-1 rounded-full inline-block"
                style={{ background: "#1A1A2E20" }}
              />
              {text}
            </span>
          ))}
        </div>

        {/* 면책 문구 */}
        <div className="mt-8 text-center flex flex-col gap-1">
          <p className="text-xs leading-relaxed" style={{ color: "#1A1A2E25" }}>
            {t.landing.disclaimer}
          </p>
          <p className="text-xs" style={{ color: "#1A1A2E20" }}>
            {t.landing.copyright}
          </p>
        </div>
      </div>
    </div>
  );
}