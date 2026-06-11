import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { investmentTypes } from "../data/types";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {};
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 400);
    return () => clearTimeout(timer);
  }, []);

  if (!result || !result.type) {
    navigate("/");
    return null;
  }

  const { type, scores } = result;
  const c = type.color;

  const compatibleKey = Object.keys(investmentTypes).find(
    (k) => investmentTypes[k].name === type.compatible
  );
  const compatibleType = compatibleKey ? investmentTypes[compatibleKey] : null;

  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 sm:px-6 py-16"
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

      {/* 상단 컬러 바 */}
      <div
        className="fixed top-0 left-0 right-0 h-2 z-20"
        style={{ background: c.primary }}
      />

      {/* 헤더 */}
      <div className="text-center mb-10 relative z-10 mt-4">
        <p
          className="text-xs tracking-[0.25em] uppercase font-medium mb-3 flex items-center justify-center gap-2"
          style={{ color: "#1A1A2E40" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ background: c.primary }}
          />
          당신의 투자 DNA는
          <span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ background: c.primary }}
          />
        </p>
        <h1
          className="text-5xl sm:text-6xl font-black mb-2"
          style={{
            color: "#1A1A2E",
            fontFamily: "'Noto Serif KR', serif",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          {type.name}
        </h1>
        <p
          className="text-base font-medium tracking-wider"
          style={{ color: c.primary }}
        >
          {type.english}
        </p>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="max-w-lg w-full relative z-10 flex flex-col gap-4">

        {/* 핵심 철학 */}
        <div
          className="rounded-2xl p-5 text-center"
          style={{
            background: "#FFFFFF",
            border: `2px solid ${c.primary}`,
            boxShadow: `0 4px 20px ${c.primary}20`,
          }}
        >
          <p
            className="text-xs uppercase tracking-widest mb-2 font-semibold"
            style={{ color: c.primary }}
          >
            핵심 철학
          </p>
          <p
            className="font-bold text-base leading-relaxed"
            style={{
              color: "#1A1A2E",
              wordBreak: "keep-all",
            }}
          >
            "{type.philosophy}"
          </p>
        </div>

        {/* 유형 설명 */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #1A1A2E08",
            boxShadow: "0 2px 12px rgba(26,26,46,0.05)",
          }}
        >
          <p
            className="font-bold text-base leading-relaxed mb-3"
            style={{
              color: "#1A1A2E",
              wordBreak: "keep-all",
            }}
          >
            {type.description.split(". ")[0] + "."}
          </p>
          <p
            className="text-sm leading-loose"
            style={{
              color: "#1A1A2E60",
              wordBreak: "keep-all",
            }}
          >
            {type.description.split(". ").slice(1).join(". ")}
          </p>
        </div>

        {/* DNA 분석 바 */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #1A1A2E08",
            boxShadow: "0 2px 12px rgba(26,26,46,0.05)",
          }}
        >
          <p
            className="text-xs uppercase tracking-widest mb-5 font-semibold"
            style={{ color: "#1A1A2E35" }}
          >
            나의 투자 DNA 분석
          </p>
          <div className="flex flex-col gap-5">
            {[
              { label: "시간 지평", score: scores.time, left: "단기", right: "장기" },
              { label: "분석 방식", score: scores.analysis, left: "정량", right: "정성" },
              { label: "리스크 태도", score: scores.risk, left: "방어", right: "공격" },
            ].map((axis) => {
              const percentage = ((axis.score + 10) / 20) * 100;
              return (
                <div key={axis.label}>
                  <div className="flex justify-between text-xs mb-2">
                    <span style={{ color: "#1A1A2E35" }}>{axis.left}</span>
                    <span
                      className="font-semibold text-xs"
                      style={{ color: c.primary }}
                    >
                      {axis.label}
                    </span>
                    <span style={{ color: "#1A1A2E35" }}>{axis.right}</span>
                  </div>
                  <div
                    className="w-full rounded-full"
                    style={{
                      height: "6px",
                      background: "#1A1A2E08",
                    }}
                  >
                    <div
                      className="rounded-full"
                      style={{
                        height: "6px",
                        width: animated ? `${percentage}%` : "0%",
                        background: c.primary,
                        transition: animated ? "width 1s ease-out" : "none",
                        boxShadow: animated ? `0 0 6px ${c.primary}50` : "none",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 강점 / 약점 */}
        <div className="grid grid-cols-2 gap-3">
          <div
            className="rounded-2xl p-5"
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #1A1A2E08",
              boxShadow: "0 2px 12px rgba(26,26,46,0.05)",
            }}
          >
            <div className="flex items-center gap-1.5 mb-3">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#16A34A" }}
              />
              <p
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: "#16A34A" }}
              >
                강점
              </p>
            </div>
            <p
              className="text-xs leading-loose"
              style={{
                color: "#1A1A2E70",
                wordBreak: "keep-all",
              }}
            >
              {type.strength}
            </p>
          </div>
          <div
            className="rounded-2xl p-5"
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #1A1A2E08",
              boxShadow: "0 2px 12px rgba(26,26,46,0.05)",
            }}
          >
            <div className="flex items-center gap-1.5 mb-3">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#DC2626" }}
              />
              <p
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: "#DC2626" }}
              >
                약점
              </p>
            </div>
            <p
              className="text-xs leading-loose"
              style={{
                color: "#1A1A2E70",
                wordBreak: "keep-all",
              }}
            >
              {type.weakness}
            </p>
          </div>
        </div>

        {/* 대표 투자자 */}
        <div
          className="rounded-2xl p-5 flex items-center justify-between"
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #1A1A2E08",
            boxShadow: "0 2px 12px rgba(26,26,46,0.05)",
          }}
        >
          <p
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: "#1A1A2E30" }}
          >
            대표 투자자
          </p>
          <p
            className="font-bold text-sm"
            style={{ color: c.primary }}
          >
            {type.representative}
          </p>
        </div>

        {/* 궁합 유형 */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #1A1A2E08",
            boxShadow: "0 2px 12px rgba(26,26,46,0.05)",
          }}
        >
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-4"
            style={{ color: "#1A1A2E30" }}
          >
            궁합 유형
          </p>

          {compatibleType && (
            <div className="flex items-center gap-3 mb-4">
              {/* 케미스트리 블록 */}
              <div
                className="w-10 h-10 rounded-xl flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${c.primary}, ${compatibleType.color.primary})`,
                  boxShadow: `0 2px 8px ${compatibleType.color.primary}30`,
                }}
              />
              <div>
                <p
                  className="font-bold text-base"
                  style={{ color: "#1A1A2E" }}
                >
                  {type.compatible}
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: compatibleType.color.primary }}
                >
                  {compatibleType.english}
                </p>
              </div>
            </div>
          )}

          {/* 케미스트리 바 */}
          {compatibleType && (
            <div
              className="w-full h-0.5 rounded-full mb-4"
              style={{
                background: `linear-gradient(90deg, ${c.primary}, ${compatibleType.color.primary})`,
              }}
            />
          )}

          <p
            className="text-xs leading-loose mb-4"
            style={{
              color: "#1A1A2E60",
              wordBreak: "keep-all",
            }}
          >
            {type.compatibleReason}
          </p>

          <button
            onClick={() => navigate("/types")}
            className="w-full py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: "#F7F5F0",
              border: `1.5px solid ${c.primary}30`,
              color: "#1A1A2E60",
            }}
          >
            모든 유형 간 관계 탐색하기 →
          </button>
        </div>

        {/* 구분선 */}
        <div
          className="w-full my-1"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #1A1A2E10, transparent)",
          }}
        />

        {/* 버튼 */}
        <div className="flex flex-col gap-3 pb-8">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "InvestDNA",
                  text: `나의 투자 DNA는 ${type.name} (${type.english})!\n"${type.philosophy}"`,
                  url: window.location.origin,
                });
              } else {
                navigator.clipboard.writeText(
                  `나의 투자 DNA는 ${type.name} (${type.english})!\n"${type.philosophy}"\n\n${window.location.origin}`
                );
                alert("링크가 복사됐습니다!");
              }
            }}
            className="w-full font-black py-4 rounded-2xl text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: c.primary,
              color: "#FFFFFF",
              boxShadow: `0 4px 20px ${c.primary}35`,
              letterSpacing: "0.01em",
            }}
          >
            결과 공유하기 🔗
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full font-medium py-4 rounded-2xl text-sm transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: "transparent",
              border: "1.5px solid #1A1A2E12",
              color: "#1A1A2E50",
            }}
          >
            다시 테스트하기
          </button>
        </div>
      </div>

      {/* 면책 문구 */}
      <p
      className="text-xs text-center leading-relaxed"
      style={{ color: "#1A1A2E22", wordBreak: "keep-all" }}
      >
      본 테스트는 교육 및 오락 목적으로 제공되며,
      <br />
      투자 권유 또는 투자 자문이 아닙니다.
      </p>
        <p className="text-xs" style={{ color: "#1A1A2E18" }}>
          © 2026 InvestDNA. All rights reserved.
      </p>
    </div>
  );
}