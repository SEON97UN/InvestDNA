import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage.jsx";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { typeKey } = useParams();
  const { lang, toggleLang, t } = useLanguage();
  const [animated, setAnimated] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setMounted(true), 50);
    const t2 = setTimeout(() => setAnimated(true), 600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
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

  const cardAnim = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0px)" : "translateY(20px)",
    transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
  });

  // ── Canvas 유틸 ──────────────────────────────────────────────────
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

  // ── 이미지 저장 ──────────────────────────────────────────────────
  const downloadShareCard = async () => {
    setSaving(true);

    try {
      await Promise.all([
        document.fonts.load(`900 88px 'Noto Serif KR'`),
        document.fonts.load(`700 36px 'Noto Serif KR'`),
        document.fonts.load(`500 32px 'Noto Sans KR'`),
        document.fonts.load(`400 22px 'Noto Sans KR'`),
      ]);
    } catch (e) {
      console.warn("Font load warning:", e);
    }

    const SIZE = 1080;
    const DPR = 2;
    const canvas = document.createElement("canvas");
    canvas.width = SIZE * DPR;
    canvas.height = SIZE * DPR;
    const ctx = canvas.getContext("2d");
    ctx.scale(DPR, DPR);

    const hex = c.primary;
    const rr = parseInt(hex.slice(1, 3), 16);
    const gg = parseInt(hex.slice(3, 5), 16);
    const bb = parseInt(hex.slice(5, 7), 16);
    const rgba = (a) => `rgba(${rr},${gg},${bb},${a})`;

    const bgGrad = ctx.createRadialGradient(SIZE / 2, SIZE * 0.35, 0, SIZE / 2, SIZE / 2, SIZE * 0.75);
    bgGrad.addColorStop(0, rgba(0.9));
    bgGrad.addColorStop(1, rgba(1));
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, SIZE, SIZE);

    ctx.fillStyle = "rgba(0,0,0,0.38)";
    ctx.fillRect(0, 0, SIZE, SIZE);

    ctx.fillStyle = "rgba(255,255,255,0.05)";
    for (let x = 18; x < SIZE; x += 36) {
      for (let y = 18; y < SIZE; y += 36) {
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const logoY = 78;
    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(255,255,255,0.07)";
    roundRect(ctx, SIZE / 2 - 100, logoY - 28, 200, 44, 22);
    ctx.fill();

    ctx.font = `400 22px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.45)";
    ctx.fillText("INVEST", SIZE / 2 - 34, logoY);

    ctx.font = `900 22px 'Noto Serif KR', Georgia, serif`;
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.fillText("DNA", SIZE / 2 + 38, logoY);

    const cX = 60, cY = 128, cW = SIZE - 120, cH = SIZE - 300;

    ctx.fillStyle = "rgba(255,255,255,0.10)";
    roundRect(ctx, cX, cY, cW, cH, 28);
    ctx.fill();

    ctx.strokeStyle = "rgba(255,255,255,0.18)";
    ctx.lineWidth = 1;
    roundRect(ctx, cX, cY, cW, cH, 28);
    ctx.stroke();

    ctx.strokeStyle = rgba(0.7);
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cX + 28, cY);
    ctx.lineTo(cX + cW - 28, cY);
    ctx.stroke();

    const nameY = cY + 168;
    ctx.textAlign = "center";
    ctx.font = `900 80px 'Noto Serif KR', Georgia, serif`;
    ctx.fillStyle = "#FFFFFF";
    ctx.shadowColor = rgba(0.4);
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 4;
    ctx.fillText(type.name, SIZE / 2, nameY);
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;

    ctx.font = `400 28px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillStyle = rgba(0.75);
    ctx.fillText(type.english, SIZE / 2, nameY + 52);

    const divY = nameY + 88;
    const grad = ctx.createLinearGradient(cX + 60, 0, cX + cW - 60, 0);
    grad.addColorStop(0, "rgba(255,255,255,0)");
    grad.addColorStop(0.3, "rgba(255,255,255,0.25)");
    grad.addColorStop(0.7, "rgba(255,255,255,0.25)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cX + 60, divY);
    ctx.lineTo(cX + cW - 60, divY);
    ctx.stroke();

    const philoLabelY = divY + 44;
    ctx.font = `400 18px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.42)";
    ctx.fillText(lang === "ko" ? "핵심  철학" : "CORE  PHILOSOPHY", SIZE / 2, philoLabelY);

    ctx.font = `700 32px 'Noto Serif KR', Georgia, serif`;
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    wrapText(ctx, `"${type.philosophy}"`, SIZE / 2, philoLabelY + 84, cW - 100, 48);

    const bottomY = cY + cH + 44;

    ctx.textAlign = "left";
    ctx.font = `400 18px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.38)";
    ctx.fillText(lang === "ko" ? "대표 투자자" : "Notable Investor", cX + 4, bottomY);

    ctx.font = `700 24px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.82)";
    ctx.fillText(type.representative, cX + 4, bottomY + 36);

    ctx.textAlign = "right";
    ctx.font = `400 18px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.28)";
    ctx.fillText("investdna.pages.dev", cX + cW - 4, bottomY + 36);

    const ctaGrad = ctx.createLinearGradient(0, SIZE - 88, 0, SIZE);
    ctaGrad.addColorStop(0, "rgba(0,0,0,0)");
    ctaGrad.addColorStop(1, "rgba(0,0,0,0.25)");
    ctx.fillStyle = ctaGrad;
    ctx.fillRect(0, SIZE - 88, SIZE, 88);

    ctx.textAlign = "center";
    ctx.font = `400 20px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.38)";
    ctx.fillText(
      lang === "ko"
        ? "나의 투자 DNA를 분석해보세요  ·  investdna.pages.dev"
        : "Discover your investment DNA  ·  investdna.pages.dev",
      SIZE / 2,
      SIZE - 32
    );

    const link = document.createElement("a");
    link.download = `InvestDNA_${type.name}.png`;
    link.href = canvas.toDataURL("image/png", 1.0);
    link.click();

    setSaving(false);
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
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.4s ease 0.8s",
        }}
      >
        {lang === "ko" ? "EN" : "KR"}
      </button>

      {/* 상단 컬러 바 */}
      <div className="w-full h-2 flex-shrink-0 overflow-hidden">
        <div
          style={{
            height: "100%",
            background: c.primary,
            width: mounted ? "100%" : "0%",
            transition: "width 0.6s ease 0.1s",
            boxShadow: `0 0 12px ${c.primary}60`,
          }}
        />
      </div>

      {/* 헤더 */}
      <div className="text-center mt-12 mb-10 relative z-10">
        <p
          className="text-xs tracking-[0.25em] uppercase font-medium mb-3 flex items-center justify-center gap-2"
          style={{
            color: "#1A1A2E40",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0px)" : "translateY(12px)",
            transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{
              background: c.primary,
              boxShadow: `0 0 6px ${c.primary}`,
              transform: mounted ? "scale(1)" : "scale(0)",
              transition: "transform 0.4s ease 0.3s",
            }}
          />
          {t.result.eyebrow}
          <span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{
              background: c.primary,
              boxShadow: `0 0 6px ${c.primary}`,
              transform: mounted ? "scale(1)" : "scale(0)",
              transition: "transform 0.4s ease 0.4s",
            }}
          />
        </p>

        <h1
          className="text-4xl sm:text-5xl font-black mb-2"
          style={{
            color: "#1A1A2E",
            fontFamily: "'Noto Serif KR', serif",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            wordBreak: "keep-all",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
          }}
        >
          {type.name}
        </h1>

        <p
          className="text-base font-medium tracking-wider"
          style={{
            color: c.primary,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0px)" : "translateY(12px)",
            transition: "opacity 0.5s ease 0.45s, transform 0.5s ease 0.45s",
          }}
        >
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
            ...cardAnim(0.5),
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
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #1A1A2E08",
            boxShadow: "0 2px 12px rgba(26,26,46,0.05)",
            ...cardAnim(0.6),
          }}
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
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #1A1A2E08",
              boxShadow: "0 2px 12px rgba(26,26,46,0.05)",
              ...cardAnim(0.7),
            }}
          >
            <p className="text-xs uppercase tracking-widest mb-5 font-semibold" style={{ color: "#1A1A2E35" }}>
              {t.result.dnaLabel}
            </p>
            <div className="flex flex-col gap-5">
              {t.result.dnaAxes.map((axis, i) => {
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
                          background: `linear-gradient(90deg, ${c.primary}90, ${c.primary})`,
                          transition: animated ? `width 0.9s cubic-bezier(0.4,0,0.2,1) ${i * 0.15}s` : "none",
                          boxShadow: animated ? `0 0 8px ${c.primary}60` : "none",
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
        <div
          className="grid grid-cols-2 gap-3"
          style={cardAnim(scores ? 0.85 : 0.7)}
        >
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
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #1A1A2E08",
            boxShadow: "0 2px 12px rgba(26,26,46,0.05)",
            ...cardAnim(scores ? 0.95 : 0.8),
          }}
        >
          <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#1A1A2E50" }}>
            {t.result.representativeLabel}
          </p>
          <p className="font-bold text-sm" style={{ color: c.primary }}>
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
            ...cardAnim(scores ? 1.05 : 0.9),
          }}
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
            className="w-full py-2.5 rounded-xl text-xs font-semibold"
            style={{
              background: "#F7F5F0",
              border: `1.5px solid ${c.primary}25`,
              color: "#1A1A2E65",
              transition: "transform 0.15s ease, border-color 0.15s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.borderColor = `${c.primary}50`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.borderColor = `${c.primary}25`;
            }}
          >
            {t.result.exploreRelations}
          </button>
        </div>

        {/* 구분선 */}
        <div
          className="w-full"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #1A1A2E10, transparent)",
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.5s ease 1.1s",
          }}
        />

        {/* 버튼들 */}
        <div
          className="flex flex-col gap-3"
          style={cardAnim(scores ? 1.15 : 1.0)}
        >
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
            className="w-full font-black py-4 rounded-2xl text-base"
            style={{
              background: c.primary,
              color: "#FFFFFF",
              boxShadow: `0 4px 20px ${c.primary}30`,
              letterSpacing: "0.01em",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = `0 8px 28px ${c.primary}45`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = `0 4px 20px ${c.primary}30`;
            }}
            onMouseDown={e => { e.currentTarget.style.transform = "scale(0.98)"; }}
            onMouseUp={e => { e.currentTarget.style.transform = "scale(1.02)"; }}
          >
            {t.result.share}
          </button>

          <button
            onClick={downloadShareCard}
            disabled={saving}
            className="w-full font-bold py-4 rounded-2xl text-base"
            style={{
              background: saving ? "#1A1A2E08" : "#FFFFFF",
              color: saving ? "#1A1A2E35" : c.primary,
              border: `1.5px solid ${c.primary}40`,
              letterSpacing: "0.01em",
              transition: "transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease",
            }}
            onMouseEnter={e => {
              if (!saving) {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.borderColor = `${c.primary}70`;
                e.currentTarget.style.boxShadow = `0 4px 16px ${c.primary}20`;
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.borderColor = `${c.primary}40`;
              e.currentTarget.style.boxShadow = "none";
            }}
            onMouseDown={e => { if (!saving) e.currentTarget.style.transform = "scale(0.98)"; }}
            onMouseUp={e => { if (!saving) e.currentTarget.style.transform = "scale(1.02)"; }}
          >
            {saving
              ? (lang === "ko" ? "저장 중..." : "Saving...")
              : t.result.saveImage}
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full font-medium py-4 rounded-2xl text-sm"
            style={{
              background: "transparent",
              border: "1.5px solid #1A1A2E12",
              color: "#1A1A2E65",
              transition: "transform 0.15s ease, border-color 0.15s ease, color 0.15s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.borderColor = "#1A1A2E25";
              e.currentTarget.style.color = "#1A1A2E90";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.borderColor = "#1A1A2E12";
              e.currentTarget.style.color = "#1A1A2E65";
            }}
          >
            {t.result.retake}
          </button>
        </div>

        {/* 면책 문구 */}
        <div
          className="text-center flex flex-col gap-1"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.5s ease 1.2s",
          }}
        >
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