import { useNavigate } from "react-router-dom";
import { investmentTypes } from "../data/types";

export default function LandingPage() {
  const navigate = useNavigate();

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
      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
        {typeList.map(({ key }) => {
          const type = investmentTypes[key];
          return (
            <div
              key={key}
              className="flex-1 h-full"
              style={{ background: type.color.primary }}
            />
          );
        })}
      </div>

      {/* 좌측 세로 장식선 */}
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 w-px hidden lg:block"
        style={{
          height: "200px",
          background: "linear-gradient(180deg, transparent, #1A1A2E15, transparent)",
        }}
      />
      {/* 우측 세로 장식선 */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 w-px hidden lg:block"
        style={{
          height: "200px",
          background: "linear-gradient(180deg, transparent, #1A1A2E15, transparent)",
        }}
      />

      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg py-16">

        {/* 상단 레이블 */}
        <div
          className="flex items-center gap-2 mb-8"
        >
          <div
            className="h-px w-8"
            style={{ background: "#1A1A2E30" }}
          />
          <p
            className="text-xs tracking-[0.25em] uppercase font-medium"
            style={{ color: "#1A1A2E50" }}
          >
            Investment Personality Test
          </p>
          <div
            className="h-px w-8"
            style={{ background: "#1A1A2E30" }}
          />
        </div>

        {/* 로고 */}
        <h1
          className="text-6xl sm:text-7xl font-black tracking-tight mb-1 text-center"
          style={{
            color: "#1A1A2E",
            fontFamily: "'Noto Serif KR', serif",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Invest<span style={{ color: "#D97706" }}>DNA</span>
        </h1>

        {/* 서브타이틀 */}
        <p
          className="text-base text-center mt-5 mb-1"
          style={{
            color: "#1A1A2E80",
            lineHeight: 1.8,
            letterSpacing: "0.01em",
          }}
        >
          당신 안에 잠든 투자자의 DNA를 발견하세요.
        </p>
        <p
          className="text-sm text-center mb-10"
          style={{ color: "#1A1A2E40" }}
        >
          8가지 투자자 유형 중 당신은 누구입니까?
        </p>

        {/* 유형 카드 그리드 */}
        <div className="grid grid-cols-4 gap-2.5 w-full mb-10">
          {typeList.map(({ key }) => {
            const type = investmentTypes[key];
            return (
              <div
                key={key}
                className="rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-default"
                style={{
                  background: "#FFFFFF",
                  border: `1.5px solid ${type.color.primary}25`,
                  boxShadow: `0 2px 16px ${type.color.primary}12, 0 1px 4px rgba(0,0,0,0.04)`,
                  minHeight: "88px",
                  padding: "14px 8px",
                }}
              >
                {/* 컬러 닷 */}
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: type.color.primary,
                    boxShadow: `0 0 6px ${type.color.primary}60`,
                  }}
                />
                <span
                  className="font-bold text-center leading-tight"
                  style={{
                    color: type.color.primary,
                    fontSize: "11px",
                  }}
                >
                  {type.name}
                </span>
                <span
                  className="text-center leading-tight"
                  style={{
                    color: `${type.color.primary}60`,
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
          className="w-full mb-8"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #1A1A2E12, transparent)",
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
          <span className="relative">나의 투자 DNA 분석하기</span>
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
          투자자 유형 탐색하기
        </button>

        {/* 메타 정보 */}
        <div className="flex items-center justify-center gap-5 mt-6">
          <span
            className="text-xs flex items-center gap-1.5"
            style={{ color: "#1A1A2E35" }}
          >
            <span
              className="w-1 h-1 rounded-full inline-block"
              style={{ background: "#1A1A2E25" }}
            />
            약 3분 소요
          </span>
          <span
            className="text-xs flex items-center gap-1.5"
            style={{ color: "#1A1A2E35" }}
          >
            <span
              className="w-1 h-1 rounded-full inline-block"
              style={{ background: "#1A1A2E25" }}
            />
            15문항
          </span>
          <span
            className="text-xs flex items-center gap-1.5"
            style={{ color: "#1A1A2E35" }}
          >
            <span
              className="w-1 h-1 rounded-full inline-block"
              style={{ background: "#1A1A2E25" }}
            />
            무료
          </span>
        </div>

        {/* 면책 문구 */}
        <p
          className="text-xs mt-10 text-center leading-relaxed"
          style={{ color: "#1A1A2E25" }}
        >
          본 테스트는 교육 및 오락 목적으로 제공되며,
          투자 권유 또는 투자 자문이 아닙니다.
        </p>
          <p className="text-xs" style={{ color: "#1A1A2E20" }}>
            © 2026 InvestDNA. All rights reserved.
        </p>
      </div>
    </div>
  );
}