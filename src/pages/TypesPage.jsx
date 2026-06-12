import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage.jsx";

const typeList = [
  { key: "long-qualitative-aggressive", id: "wise-investor" },
  { key: "long-qualitative-defensive", id: "global-explorer" },
  { key: "long-quantitative-defensive", id: "safety-guardian" },
  { key: "long-quantitative-aggressive", id: "market-companion" },
  { key: "short-qualitative-aggressive", id: "market-hunter" },
  { key: "short-qualitative-defensive", id: "cycle-watcher" },
  { key: "short-quantitative-aggressive", id: "quant-alchemist" },
  { key: "short-quantitative-defensive", id: "risk-architect" },
];

export default function TypesPage() {
  const navigate = useNavigate();
  const { lang, toggleLang, t } = useLanguage();
  const [selectedType, setSelectedType] = useState(null);
  const [selectedRelation, setSelectedRelation] = useState(null);

  const selectedTypeData = selectedType ? t.types_data[selectedType] : null;

  const getRelation = (id1, id2) => {
    const key1 = `${id1}_${id2}`;
    const key2 = `${id2}_${id1}`;
    return t.relations_data[key1] || t.relations_data[key2] || null;
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 sm:px-6"
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

      {/* 상단 8색 레인보우 바 */}
      <div className="w-full h-2 flex-shrink-0 flex">
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

      {/* 헤더 */}
      <div className="w-full max-w-2xl mt-10 mb-8 relative z-10">
        <button
          onClick={() => navigate("/")}
          className="font-medium px-4 py-2 rounded-xl text-sm transition-all duration-200 hover:scale-105 mb-6 block"
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #1A1A2E12",
            color: "#1A1A2E60",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          {t.types.back}
        </button>

        <div className="flex items-center gap-2 mb-3">
          <div className="h-px w-6" style={{ background: "#1A1A2E25" }} />
          <p
            className="text-xs tracking-[0.25em] uppercase font-medium"
            style={{ color: "#1A1A2E40" }}
          >
            {t.types.badge}
          </p>
        </div>
        <h1
          className="text-3xl sm:text-4xl font-black mb-2"
          style={{
            color: "#1A1A2E",
            fontFamily: "'Noto Serif KR', serif",
            letterSpacing: "-0.02em",
          }}
        >
          {t.types.title}
        </h1>
        <p className="text-sm" style={{ color: "#1A1A2E65", wordBreak: "keep-all" }}>
          {t.types.subtitle}
        </p>
      </div>

      {/* 유형 선택 그리드 */}
      <div className="w-full max-w-2xl mb-8 relative z-10">
        <p
          className="text-xs uppercase tracking-widest mb-3 font-semibold"
          style={{ color: "#1A1A2E50" }}
        >
          {t.types.selectLabel}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {typeList.map(({ key }) => {
            const type = t.types_data[key];
            const isSelected = selectedType === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setSelectedType(key);
                  setSelectedRelation(null);
                }}
                className="rounded-2xl p-3 flex flex-col items-center gap-1.5 transition-all duration-200 hover:scale-105"
                style={{
                  background: "#FFFFFF",
                  border: isSelected
                    ? `2px solid ${type.color.primary}`
                    : "1.5px solid #1A1A2E08",
                  boxShadow: isSelected
                    ? `0 4px 16px ${type.color.primary}20`
                    : "0 1px 4px rgba(26,26,46,0.04)",
                  minHeight: "72px",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: type.color.primary }}
                />
                <span
                  className="text-xs font-bold text-center leading-tight"
                  style={{ color: isSelected ? type.color.primary : "#1A1A2E65" }}
                >
                  {type.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 선택된 유형 상세 */}
      {selectedTypeData && (
        <div className="w-full max-w-2xl relative z-10 pb-6">

          {/* 유형 헤더 카드 */}
          <div
            className="rounded-2xl p-5 mb-4"
            style={{
              background: "#FFFFFF",
              border: `2px solid ${selectedTypeData.color.primary}`,
              boxShadow: `0 4px 20px ${selectedTypeData.color.primary}15`,
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: selectedTypeData.color.primary }}
              />
              <p
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: selectedTypeData.color.primary }}
              >
                {selectedTypeData.english}
              </p>
            </div>
            <h2
              className="text-2xl font-black mb-1"
              style={{
                color: "#1A1A2E",
                fontFamily: "'Noto Serif KR', serif",
                letterSpacing: "-0.02em",
              }}
            >
              {selectedTypeData.name}
            </h2>
            <p
              className="text-sm"
              style={{ color: "#1A1A2E65", wordBreak: "keep-all" }}
            >
              "{selectedTypeData.philosophy}"
            </p>
          </div>

          {/* 관계 목록 */}
          <p
            className="text-xs uppercase tracking-widest mb-3 font-semibold"
            style={{ color: "#1A1A2E50" }}
          >
            {t.types.relationsLabel}
          </p>
          <div className="flex flex-col gap-2.5 mb-6">
            {typeList
              .filter(({ key }) => key !== selectedType)
              .sort((a, b) => {
                const relationA = getRelation(
                  typeList.find((tp) => tp.key === selectedType)?.id, a.id
                );
                const relationB = getRelation(
                  typeList.find((tp) => tp.key === selectedType)?.id, b.id
                );
                return (relationB?.grade ?? 2) - (relationA?.grade ?? 2);
              })
              .map(({ key, id }) => {
                const type = t.types_data[key];
                const relation = getRelation(
                  typeList.find((tp) => tp.key === selectedType)?.id, id
                );
                const grade = t.gradeConfig_data[relation?.grade ?? 2];
                const isSelected = selectedRelation === key;

                return (
                  <button
                    key={key}
                    onClick={() => setSelectedRelation(isSelected ? null : key)}
                    className="rounded-2xl transition-all duration-200 text-left overflow-hidden"
                    style={{
                      background: "#FFFFFF",
                      border: isSelected
                        ? `1.5px solid ${type.color.primary}50`
                        : "1.5px solid #1A1A2E08",
                      boxShadow: isSelected
                        ? `0 4px 16px ${type.color.primary}15`
                        : "0 1px 4px rgba(26,26,46,0.04)",
                    }}
                  >
                    {isSelected && (
                      <div
                        className="w-full h-0.5"
                        style={{
                          background: `linear-gradient(90deg, ${selectedTypeData.color.primary}, ${type.color.primary})`,
                        }}
                      />
                    )}

                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-xl flex-shrink-0"
                            style={{
                              background: `linear-gradient(135deg, ${selectedTypeData.color.primary}, ${type.color.primary})`,
                              boxShadow: `0 2px 6px ${type.color.primary}25`,
                            }}
                          />
                          <div>
                            <p className="font-bold text-sm" style={{ color: "#1A1A2E" }}>
                              {type.name}
                            </p>
                            <p className="text-xs font-medium" style={{ color: type.color.primary }}>
                              {relation?.title || "—"}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1.5 ml-2">
                          <span
                            className="text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap"
                            style={{
                              background: `${type.color.primary}12`,
                              color: type.color.primary,
                            }}
                          >
                            {grade.label}
                          </span>
                          <div
                            className="rounded-full overflow-hidden"
                            style={{ width: "80px", height: "4px", background: "#1A1A2E08" }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${((relation?.grade ?? 2) / 3) * 100}%`,
                                background: `linear-gradient(90deg, ${selectedTypeData.color.primary}, ${type.color.primary})`,
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {isSelected && relation && (
                        <div
                          className="mt-4 pt-4"
                          style={{ borderTop: "1px solid #1A1A2E06" }}
                        >
                          <p
                            className="text-sm leading-loose"
                            style={{ color: "#1A1A2E75", wordBreak: "keep-all" }}
                          >
                            {relation.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
          </div>

          {/* 테스트 유도 버튼 */}
          <button
            onClick={() => navigate("/test")}
            className="w-full font-black py-4 rounded-2xl text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "#1A1A2E",
              color: "#F7F5F0",
              boxShadow: "0 4px 20px rgba(26,26,46,0.2)",
              letterSpacing: "0.01em",
            }}
          >
            {t.types.cta}
          </button>
        </div>
      )}

      {/* 유형 미선택 상태 */}
      {!selectedType && (
        <div className="w-full max-w-2xl relative z-10 text-center py-6">
          <div
            className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center"
            style={{ background: "#1A1A2E08" }}
          >
            <div className="grid grid-cols-2 gap-1">
              {typeList.slice(0, 4).map(({ key }) => (
                <div
                  key={key}
                  className="w-2 h-2 rounded-full"
                  style={{ background: t.types_data[key].color.primary }}
                />
              ))}
            </div>
          </div>
          <p className="text-sm" style={{ color: "#1A1A2E50" }}>
            {t.types.empty}
          </p>
        </div>
      )}

      {/* 면책 문구 */}
      <div className="text-center flex flex-col gap-1 relative z-10 mt-4 mb-8">
        <p className="text-xs" style={{ color: "#1A1A2E40", wordBreak: "keep-all" }}>
          {t.types.disclaimer}
        </p>
        <p className="text-xs" style={{ color: "#1A1A2E30" }}>
          {t.types.copyright}
        </p>
      </div>
    </div>
  );
}