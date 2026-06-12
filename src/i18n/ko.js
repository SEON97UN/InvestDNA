import { investmentTypes } from "../data/types";
import { questions } from "../data/questions";
import { relations, gradeConfig } from "../data/relations";

export const ko = {
  // 랜딩 페이지
  landing: {
    badge: "Investment Personality Test",
    subtitle: "당신 안에 잠든 투자자의 DNA를 발견하세요.",
    subtitleSub: "8가지 투자자 유형 중 당신은 누구입니까?",
    cta: "나의 투자 DNA 분석하기",
    explore: "투자자 유형 탐색하기",
    meta: ["약 3분 소요", "15문항", "무료"],
    disclaimer: "본 테스트는 교육 및 오락 목적으로 제공되며, 투자 권유 또는 투자 자문이 아닙니다.",
    copyright: "© 2026 InvestDNA. All rights reserved.",
  },

  // 테스트 페이지
  test: {
    prev: "이전 질문",
    first: "처음으로",
    next: "다음",
    result: "결과 보기",
    axisLabel: {
      time: "시간 지평",
      analysis: "분석 방식",
      risk: "리스크 태도",
    },
    disclaimer: "본 테스트는 교육 및 오락 목적으로 제공되며, 투자 권유 또는 투자 자문이 아닙니다.",
    copyright: "© 2026 InvestDNA. All rights reserved.",
  },

  // 결과 페이지
  result: {
    eyebrow: "당신의 투자 DNA는",
    philosophyLabel: "핵심 철학",
    dnaLabel: "나의 투자 DNA 분석",
    dnaAxes: [
      { label: "시간 지평", left: "단기", right: "장기" },
      { label: "분석 방식", left: "정량", right: "정성" },
      { label: "리스크 태도", left: "방어", right: "공격" },
    ],
    strengthLabel: "강점",
    weaknessLabel: "약점",
    representativeLabel: "대표 투자자",
    compatibleLabel: "궁합 유형",
    exploreRelations: "모든 유형 간 관계 탐색하기 →",
    share: "결과 공유하기 🔗",
    retake: "다시 테스트하기",
    disclaimer: "본 테스트는 교육 및 오락 목적으로 제공되며, 투자 권유 또는 투자 자문이 아닙니다.",
    copyright: "© 2026 InvestDNA. All rights reserved.",
  },

  // 유형 탐색 페이지
  types: {
    back: "처음으로",
    badge: "Investor Archetypes",
    title: "투자자 유형 탐색",
    subtitle: "8가지 투자자 유형을 선택하고, 유형 간의 관계를 탐색해보세요.",
    selectLabel: "유형 선택",
    relationsLabel: "다른 유형과의 관계",
    cta: "나의 투자 DNA 분석하기",
    empty: "위에서 유형을 선택하면 관계 분석이 시작됩니다.",
    disclaimer: "본 테스트는 교육 및 오락 목적으로 제공되며, 투자 권유 또는 투자 자문이 아닙니다.",
    copyright: "© 2026 InvestDNA. All rights reserved.",
  },

  // 데이터 참조
  types_data: investmentTypes,
  questions_data: questions,
  relations_data: relations,
  gradeConfig_data: gradeConfig,
};