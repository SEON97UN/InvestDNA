import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage.jsx";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { typeKey } = useParams();
  const { lang, toggleLang, t } = useLanguage();
  const [animated, setAnimated] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const type = Object.values(t.types_data).find((tp) => tp.id === typeKey);
  const scores = location.state?.scores || null;

  if (!type) {
    navigate("/");
    return null;
  }

  const c = type.color;

  const compatibleKey = Object.keys(t.types_data).find(
    (k) => t.types_data[k].name === type.compatible
  );
  const compatibleType = compatibleKey ? t.types_data[compatibleKey] : null;

  // ── 이미지 저장 ──────────────────────────────────────────────────
  const downloadShareCard = async () => {
    setSaving(true);

    const S = 1080;
    const canvas = document.createElement("canvas");
    canvas.width = S;
    canvas.height = S;
    const ctx = canvas.getContext("2d");

    const hex = c.primary;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const alpha = (a) => `rgba(${r},${g},${b},${a})`;
    const dark = "#1A1A2E";
    const darkAlpha = (a) => {
      const dr = 26, dg = 26, db = 46;
      return `rgba(${dr},${dg},${db},${a})`;
    };

    // ── 배경: 유형 색상 ──
    ctx.fillStyle = hex;
    ctx.fillRect(0, 0, S, S);

    // 배경 오버레이 (어둡게)
    ctx.fillStyle = "rgba(0,0,0,0.35)";
    ctx.fillRect(0, 0, S, S);

    // 배경 도트 패턴
    ctx.fillStyle = "rgba(255,255,255,0.04)";
    for (let x = 0; x < S; x += 36) {
      for (let y = 0; y < S; y += 36) {
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // ── 상단 로고 영역 ──
    ctx.font = `900 40px 'Noto Serif KR', Georgia, serif`;
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.textAlign = "center";
    ctx.fillText("Invest DNA", S / 2, 96);

    // ── 중앙 메인 카드 ──
    const cardX = 72, cardY = 140, cardW = S - 144, cardH = S - 340;
    ctx.fillStyle = "rgba(255,255,255,0.12)";
    roundRect(ctx, cardX, cardY, cardW, cardH, 32);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.2)";
    ctx.lineWidth = 1.5;
    roundRect(ctx, cardX, cardY, cardW, cardH, 32);
    ctx.stroke();

    // 유형명
    ctx.textAlign = "center";
    ctx.font = `900 88px 'Noto Serif KR', Georgia, serif`;
    ctx.fillStyle = "#FFFFFF";
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    ctx.shadowBlur = 20;
    ctx.fillText(type.name, S / 2, cardY + 160);
    ctx.shadowBlur = 0;

    // 영문명
    ctx.font = `500 32px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fillText(type.english, S / 2, cardY + 222);

    // 구분선
    ctx.strokeStyle = "rgba(255,255,255,0.2)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cardX + 80, cardY + 260);
    ctx.lineTo(cardX + cardW - 80, cardY + 260);
    ctx.stroke();

    // 철학 레이블
    ctx.font = `500 22px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.fillText(lang === "ko" ? "핵심 철학" : "CORE PHILOSOPHY", S / 2, cardY + 312);

    // 철학 텍스트
    ctx.font = `700 36px 'Noto Serif KR', Georgia, serif`;
    ctx.fillStyle = "#FFFFFF";
    const philosophy = `"${type.philosophy}"`;
    wrapText(ctx, philosophy, S / 2, cardY + 390, cardW - 120, 52);

    // ── 하단 정보 영역 ──
    const bottomY = cardY + cardH + 48;

    // 대표 투자자
    ctx.textAlign = "left";
    ctx.font = `400 22px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.45)";
    ctx.fillText(lang === "ko" ? "대표 투자자" : "Notable Investor", cardX, bottomY);

    ctx.font = `700 28px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.fillText(type.representative, cardX, bottomY + 42);

    // URL
    ctx.textAlign = "right";
    ctx.font = `400 22px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.fillText("investdna.pages.dev", cardX + cardW, bottomY + 42);

    // ── 하단 CTA 바 ──
    ctx.fillStyle = "rgba(255,255,255,0.1)";
    ctx.fillRect(0, S - 100, S, 100);
    ctx.textAlign = "center";
    ctx.font = `500 24px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.fillText(
      lang === "ko"
        ? "나의 투자 DNA를 분석해보세요  ·  investdna.pages.dev"
        : "Discover your investment DNA  ·  investdna.pages.dev",
      S / 2,
      S - 38
    );

    // ── 다운로드 ──
    const link = document.createElement("a");
    link.download = `InvestDNA_${type.name}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();

    setSaving(false);
  };

  // Canvas 유틸
  const roundRect = (ctx, x, y, w, h, r) => {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  };

  const wrapText = (ctx, text, x, y, maxWidth, lineHeight) => {
    const chars = text.split("");
    let line = "";
    const lines = [];
    for (let i = 0; i < chars.length; i++) {
      const test = line + chars[i];
      if (ctx.measureText(test).width > maxWidth && line !== "") {
        lines.push(line);
        line = chars[i];
      } else {
        line = test;
      }
    }
    lines.push(line);
    const startY = y - ((lines.length - 1) * lineHeight) / 2;
    lines.forEach((l, i) => ctx.fillText(l, x, startY + i * lineHeight));
  };

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

      {/* 언어 토글 */}
      <button
        onClick={toggleLang}
        className="fixed top-6 right-6 z-20 font-semibold px-3 py-1.5 rounded-xl text-xs transition-all duration-200 hover:scale-105"
        style={{
          background: "#FFFFFF",
          border: "1.5px solid #1A1A2E12",
          color: "#1A1A2E60",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        {lang === "ko" ? "EN" : "KR"}
      </button>

      {/* 상단 컬러 바 */}
      <div className="w-full h-2 flex-shrink-0" style={{ background: c.primary }} />

      {/* 헤더 */}
      <div className="text-center mt-12 mb-10 relative z-10">
        <p
          className="text-xs tracking-[0.25em] uppercase font-medium mb-3 flex items-center justify-center gap-2"
          style={{ color: "#1A1A2E40" }}
        >
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: c.primary }} />
          {t.result.eyebrow}
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
            {t.result.philosophyLabel}
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
          <p className="font-bold text-base leading-relaxed mb-3" style={{ color: "#1A1A2E", wordBreak: "keep-all" }}>
            {type.description.split(". ")[0] + "."}
          </p>
          <p className="text-sm leading-loose" style={{ color: "#1A1A2E55", wordBreak: "keep-all" }}>
            {type.description.split(". ").slice(1).join(". ")}
          </p>
        </div>

        {/* DNA 분석 바 */}
        {scores && (
          <div
            className="rounded-2xl p-6"
            style={{ background: "#FFFFFF", border: "1.5px solid #1A1A2E08", boxShadow: "0 2px 12px rgba(26,26,46,0.05)" }}
          >
            <p className="text-xs uppercase tracking-widest mb-5 font-semibold" style={{ color: "#1A1A2E35" }}>
              {t.result.dnaLabel}
            </p>
            <div className="flex flex-col gap-5">
              {t.result.dnaAxes.map((axis) => {
                const scoreKey = axis.label === t.result.dnaAxes[0].label ? "time"
                  : axis.label === t.result.dnaAxes[1].label ? "analysis" : "risk";
                const percentage = ((scores[scoreKey] + 10) / 20) * 100;
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
              <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#16A34A" }}>
                {t.result.strengthLabel}
              </p>
            </div>
            <p className="text-xs leading-loose" style={{ color: "#1A1A2E80", wordBreak: "keep-all" }}>
              {type.strength}
            </p>
          </div>
          <div className="rounded-2xl p-5" style={{ background: "#FFFFFF", border: "1.5px solid #1A1A2E08", boxShadow: "0 2px 12px rgba(26,26,46,0.05)" }}>
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#DC2626" }} />
              <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#DC2626" }}>
                {t.result.weaknessLabel}
              </p>
            </div>
            <p className="text-xs leading-loose" style={{ color: "#1A1A2E80", wordBreak: "keep-all" }}>
              {type.weakness}
            </p>
          </div>
        </div>

        {/* 대표 투자자 */}
        <div
          className="rounded-2xl p-5 flex items-center justify-between"
          style={{ background: "#FFFFFF", border: "1.5px solid #1A1A2E08", boxShadow: "0 2px 12px rgba(26,26,46,0.05)" }}
        >
          <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#1A1A2E50" }}>
            {t.result.representativeLabel}
          </p>
          <p className="font-bold text-sm" style={{ color: c.primary }}>{type.representative}</p>
        </div>

        {/* 궁합 유형 */}
        <div
          className="rounded-2xl p-5"
          style={{ background: "#FFFFFF", border: "1.5px solid #1A1A2E08", boxShadow: "0 2px 12px rgba(26,26,46,0.05)" }}
        >
          <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "#1A1A2E50" }}>
            {t.result.compatibleLabel}
          </p>
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
                <p className="text-xs font-medium" style={{ color: compatibleType.color.primary }}>
                  {compatibleType.english}
                </p>
              </div>
            </div>
          )}
          {compatibleType && (
            <div className="w-full h-px mb-4" style={{
              background: `linear-gradient(90deg, ${c.primary}, ${compatibleType.color.primary})`
            }} />
          )}
          <p className="text-xs leading-loose mb-4" style={{ color: "#1A1A2E75", wordBreak: "keep-all" }}>
            {type.compatibleReason}
          </p>
          <button
            onClick={() => navigate("/types")}
            className="w-full py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-[1.02]"
            style={{ background: "#F7F5F0", border: `1.5px solid ${c.primary}25`, color: "#1A1A2E65" }}
          >
            {t.result.exploreRelations}
          </button>
        </div>

        {/* 구분선 */}
        <div className="w-full" style={{ height: "1px", background: "linear-gradient(90deg, transparent, #1A1A2E10, transparent)" }} />

        {/* 버튼 */}
        <div className="flex flex-col gap-3">
          {/* 공유 버튼 */}
          <button
            onClick={() => {
              const shareUrl = `${window.location.origin}/result/${typeKey}`;
              if (navigator.share) {
                navigator.share({
                  title: "InvestDNA",
                  text: `${type.name} (${type.english})\n"${type.philosophy}"`,
                  url: shareUrl,
                });
              } else {
                navigator.clipboard.writeText(
                  `${type.name} (${type.english})\n"${type.philosophy}"\n\n${shareUrl}`
                );
                alert(lang === "ko" ? "링크가 복사됐습니다!" : "Link copied!");
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
            {t.result.share}
          </button>

          {/* 이미지 저장 버튼 */}
          <button
            onClick={downloadShareCard}
            disabled={saving}
            className="w-full font-bold py-4 rounded-2xl text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: saving ? "#1A1A2E08" : "#FFFFFF",
              color: saving ? "#1A1A2E35" : c.primary,
              border: `1.5px solid ${c.primary}40`,
              letterSpacing: "0.01em",
            }}
          >
            {saving
              ? (lang === "ko" ? "저장 중..." : "Saving...")
              : t.result.saveImage}
          </button>

          {/* 다시 테스트 */}
          <button
            onClick={() => navigate("/")}
            className="w-full font-medium py-4 rounded-2xl text-sm transition-all duration-200 hover:scale-[1.02]"
            style={{ background: "transparent", border: "1.5px solid #1A1A2E12", color: "#1A1A2E65" }}
          >
            {t.result.retake}
          </button>
        </div>

        {/* 면책 문구 */}
        <div className="text-center flex flex-col gap-1">
          <p className="text-xs" style={{ color: "#1A1A2E40" }}>
            {t.result.disclaimer}
          </p>
          <p className="text-xs" style={{ color: "#1A1A2E30" }}>
            {t.result.copyright}
          </p>
        </div>
      </div>
    </div>
  );
}