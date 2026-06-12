import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { investmentTypes } from "../data/types";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { typeKey } = useParams();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const type = Object.values(investmentTypes).find((t) => t.id === typeKey);
  const scores = location.state?.scores || null;

  if (!type) {
    navigate("/");
    return null;
  }

  const c = type.color;

  const compatibleKey = Object.keys(investmentTypes).find(
    (k) => investmentTypes[k].name === type.compatible
  );
  const compatibleType = compatibleKey ? investmentTypes[compatibleKey] : null;

  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 sm:px-6"
      style={{ background: "#F7F5F0" }}
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #1A1A2E0A 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="w-full h-2 flex-shrink-0" style={{ background: c.primary }} />

      {/* 헤더 */}
      <div className="text-center mt-12 mb-10 relative z-10">
        <p
          className="text-xs tracking-[0.25em] uppercase font-medium mb-3 flex items-center justify-center gap-2"
          style={{ color: "#1A1A2E40" }}
        >
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: c.primary }} />
          당신의 투자 DNA는
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: c.primary }} />
        </p>
        <h1
          className="text-4xl sm:text-5xl font-black mb-2"
          style={{
            color: "#1A1A2E",
            fontFamily: "'Noto Serif KR', serif",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            wordBreak: "keep-all",
          }}
        >
          {type.name}
        </h1>
        <p className="text-base font-medium tracking-wider" style={{ color: c.primary }}>
          {type.english}
        </p>
      </div>

      <div className="max-w-lg w-full relative z-10 flex flex-col gap-4 pb-16">

        {/* 핵심 철학 */}
        <div
          className="rounded-2xl p-5 text-center"
          style={{
            background: "#FFFFFF",
            border: `2px solid ${c.primary}`,
            boxShadow: `0 4px 20px ${c.primary}15`,
          }}
        >
          <p className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: c.primary }}>
            핵심 철학
          </p>
          <p className="font-bold text-base leading-relaxed" style={{ color: "#1A1A2E", wordBreak: "keep-all" }}>
            "{type.philosophy}"
          </p>
        </div>

        {/* 유형 설명 */}
        <div
          className="rounded-2xl p-6"
          style={{ background: "#FFFFFF", border: "1.5px solid #1A1A2E08", boxShadow: "0 2px 12px rgba(26,26,46,0.05)" }}
        >
          <p className="font-bold text-base leading-relaxed mb-3" style={{ color: "#1A1A2E", wordBreak: "keep-all", overflowWrap: "break-word" }}>
            {type.description.split(". ")[0] + "."}
          </p>
          <p className="text-sm leading-loose" style={{ color: "#1A1A2E80", wordBreak: "keep-all", overflowWrap: "break-word" }}>
            {type.description.split(". ").slice(1).join(". ")}
          </p>
        </div>

        {/* DNA 분석 바 — scores 있을 때만 표시 */}
        {scores && (
          <div
            className="rounded-2xl p-6"
            style={{ background: "#FFFFFF", border: "1.5px solid #1A1A2E08", boxShadow: "0 2px 12px rgba(26,26,46,0.05)" }}
          >
            <p className="text-xs uppercase tracking-widest mb-5 font-semibold" style={{ color: "#1A1A2E35" }}>
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
                      <span className="font-semibold text-xs" style={{ color: c.primary }}>{axis.label}</span>
                      <span style={{ color: "#1A1A2E35" }}>{axis.right}</span>
                    </div>
                    <div className="w-full rounded-full" style={{ height: "6px", background: "#1A1A2E08" }}>
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
        )}

        {/* 강점 / 약점 */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl p-5" style={{ background: "#FFFFFF", border: "1.5px solid #1A1A2E08", boxShadow: "0 2px 12px rgba(26,26,46,0.05)" }}>
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#16A34A" }} />
              <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#16A34A" }}>강점</p>
            </div>
            <p className="text-xs leading-loose" style={{ color: "#1A1A2E80", wordBreak: "keep-all" }}>{type.strength}</p>
          </div>
          <div className="rounded-2xl p-5" style={{ background: "#FFFFFF", border: "1.5px solid #1A1A2E08", boxShadow: "0 2px 12px rgba(26,26,46,0.05)" }}>
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#DC2626" }} />
              <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#DC2626" }}>약점</p>
            </div>
            <p className="text-xs leading-loose" style={{ color: "#1A1A2E80", wordBreak: "keep-all" }}>{type.weakness}</p>
          </div>
        </div>

        {/* 대표 투자자 */}
        <div
          className="rounded-2xl p-5 flex items-center justify-between"
          style={{ background: "#FFFFFF", border: "1.5px solid #1A1A2E08", boxShadow: "0 2px 12px rgba(26,26,46,0.05)" }}
        >
          <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#1A1A2E50" }}>대표 투자자</p>
          <p className="font-bold text-sm" style={{ color: c.primary }}>{type.representative}</p>
        </div>

        {/* 궁합 유형 */}
        <div
          className="rounded-2xl p-5"
          style={{ background: "#FFFFFF", border: "1.5px solid #1A1A2E08", boxShadow: "0 2px 12px rgba(26,26,46,0.05)" }}
        >
          <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "#1A1A2E50" }}>궁합 유형</p>

          {compatibleType && (
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-xl flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${c.primary}, ${compatibleType.color.primary})`,
                  boxShadow: `0 2px 8px ${compatibleType.color.primary}25`,
                }}
              />
              <div>
                <p className="font-bold text-base" style={{ color: "#1A1A2E" }}>{type.compatible}</p>
                <p className="text-xs font-medium" style={{ color: compatibleType.color.primary }}>{compatibleType.english}</p>
              </div>
            </div>
          )}

          {compatibleType && (
            <div className="w-full h-px mb-4" style={{ background: `linear-gradient(90deg, ${c.primary}, ${compatibleType.color.primary})` }} />
          )}

          <p className="text-xs leading-loose mb-4" style={{ color: "#1A1A2E80", wordBreak: "keep-all" }}>
            {type.compatibleReason}
          </p>

          <button
            onClick={() => navigate("/types")}
            className="w-full py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-[1.02]"
            style={{ background: "#F7F5F0", border: `1.5px solid ${c.primary}25`, color: "#1A1A2E65" }}
          >
            모든 유형 간 관계 탐색하기 →
          </button>
        </div>

        {/* 구분선 */}
        <div className="w-full" style={{ height: "1px", background: "linear-gradient(90deg, transparent, #1A1A2E10, transparent)" }} />

        {/* 버튼 */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => {
              const shareUrl = `${window.location.origin}/result/${typeKey}`;
              if (navigator.share) {
                navigator.share({
                  title: "InvestDNA",
                  text: `나의 투자 DNA는 ${type.name} (${type.english})!\n"${type.philosophy}"`,
                  url: shareUrl,
                });
              } else {
                navigator.clipboard.writeText(
                  `나의 투자 DNA는 ${type.name} (${type.english})!\n"${type.philosophy}"\n\n${shareUrl}`
                );
                alert("링크가 복사됐습니다!");
              }
            }}
            className="w-full font-black py-4 rounded-2xl text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: c.primary,
              color: "#FFFFFF",
              boxShadow: `0 4px 20px ${c.primary}30`,
              letterSpacing: "0.01em",
            }}
          >
            결과 공유하기 🔗
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full font-medium py-4 rounded-2xl text-sm transition-all duration-200 hover:scale-[1.02]"
            style={{ background: "transparent", border: "1.5px solid #1A1A2E12", color: "#1A1A2E45" }}
          >
            다시 테스트하기
          </button>
        </div>

        {/* 면책 문구 */}
        <div className="text-center flex flex-col gap-1">
          <p className="text-xs" style={{ color: "#1A1A2E22" }}>
            본 테스트는 교육 및 오락 목적으로 제공되며,
            <br />
            투자 권유 또는 투자 자문이 아닙니다.
          </p>
          <p className="text-xs" style={{ color: "#1A1A2E30" }}>
            © 2026 InvestDNA. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}