import { investmentTypes } from "../data/types";

export const calculateResult = (answers) => {
  // 축별 점수 합산
  let timeScore = 0;
  let analysisScore = 0;
  let riskScore = 0;

  answers.forEach(({ axis, score }) => {
    if (axis === "time") timeScore += score;
    else if (axis === "analysis") analysisScore += score;
    else if (axis === "risk") riskScore += score;
  });

  // 축별 방향 결정
  const time = timeScore >= 0 ? "long" : "short";
  const analysis = analysisScore >= 0 ? "qualitative" : "quantitative";
  const risk = riskScore >= 0 ? "aggressive" : "defensive";

  // 유형 키 생성
  const key = `${time}-${analysis}-${risk}`;

  return {
    type: investmentTypes[key],
    scores: {
      time: timeScore,
      analysis: analysisScore,
      risk: riskScore,
    },
  };
};