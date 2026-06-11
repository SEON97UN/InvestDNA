export const questions = [
  // 축 1: 시간 지평 (장기 ↔ 단기)
  {
    id: 1,
    axis: "time",
    direction: "forward",
    question: "처음 투자를 시작할 때 가장 먼저 정하고 싶은 것은 무엇입니까?",
    options: [
      { text: "이 종목을 얼마나 오래 보유할지", score: 2 },
      { text: "언제 팔면 적절한 수익이 될지", score: 1 },
      { text: "지금 시장의 흐름이 어디로 향하는지", score: -1 },
      { text: "오늘 당장 진입할 가장 좋은 타이밍", score: -2 },
    ],
  },
  {
    id: 2,
    axis: "time",
    direction: "forward",
    question: "투자한 종목이 한동안 별다른 움직임 없이 횡보 중입니다. 이때 드는 가장 솔직한 감정은?",
    options: [
      { text: "이 시간도 기다림의 과정이다. 불안하지 않다.", score: 2 },
      { text: "조금 답답하지만 내 판단을 믿기로 한다.", score: 1 },
      { text: "다른 곳에서 기회를 놓치고 있는 건 아닐까 신경 쓰인다.", score: -1 },
      { text: "지금 이 자금으로 더 활발하게 움직이고 싶다.", score: -2 },
    ],
  },
  {
    id: 3,
    axis: "time",
    direction: "forward",
    question: "투자에서 \"시간\"의 역할은 무엇이라고 생각하십니까?",
    options: [
      { text: "복리가 쌓이는 가장 강력한 무기다.", score: 2 },
      { text: "저평가가 해소될 때까지 기다리는 수단이다.", score: 1 },
      { text: "흐름을 읽고 기회를 포착하는 배경이다.", score: -1 },
      { text: "빠르게 활용하고 다음 기회로 넘어가는 도구다.", score: -2 },
    ],
  },
  {
    id: 4,
    axis: "time",
    direction: "reverse",
    question: "보유 중인 종목이 크게 올랐습니다. 매도 여부를 결정할 때 가장 먼저 드는 생각은?",
    options: [
      { text: "목표한 수익률에 도달했는가", score: -2 },
      { text: "지금이 고점일 가능성이 있는가", score: -1 },
      { text: "지금 이 가격이 내재 가치 대비 적정한가", score: 1 },
      { text: "이 기업이 앞으로도 계속 성장할 수 있는가", score: 2 },
    ],
  },
  {
    id: 5,
    axis: "time",
    direction: "forward",
    question: "10년 후 나의 투자 포트폴리오가 어떤 모습이기를 바랍니까?",
    options: [
      { text: "빠른 판단과 실행으로 단기간에 크게 불린 모습", score: -2 },
      { text: "시장 흐름을 잘 타서 수익을 극대화한 모습", score: -1 },
      { text: "꾸준히 재투자해 복리로 불어난 안정적인 자산", score: 1 },
      { text: "오랫동안 믿어온 기업들이 크게 성장해 있는 모습", score: 2 },
    ],
  },

  // 축 2: 분석 방식 (정성/직관 ↔ 정량/데이터)
  {
    id: 6,
    axis: "analysis",
    direction: "forward",
    question: "처음 보는 기업에 대해 알아볼 때 가장 먼저 찾아보는 것은?",
    options: [
      { text: "주가 차트와 거래량 패턴", score: -2 },
      { text: "재무제표와 밸류에이션 지표", score: -1 },
      { text: "업계 동향과 경쟁사 뉴스", score: 1 },
      { text: "이 기업의 제품이나 서비스를 직접 경험해보는 것", score: 2 },
    ],
  },
  {
    id: 7,
    axis: "analysis",
    direction: "forward",
    question: "두 종목이 있습니다. A는 재무 지표는 평범하지만 경영진이 탁월하고 비전이 명확합니다. B는 경영진은 무난하지만 재무 지표가 매우 우수합니다. 어떤 종목이 더 끌립니까?",
    options: [
      { text: "압도적으로 B", score: -2 },
      { text: "B 쪽이지만 A도 고려한다.", score: -1 },
      { text: "A 쪽이지만 B도 무시 못 한다.", score: 1 },
      { text: "압도적으로 A", score: 2 },
    ],
  },
  {
    id: 8,
    axis: "analysis",
    direction: "forward",
    question: "투자한 종목에서 악재 뉴스가 나왔습니다. 가장 먼저 하고 싶은 것은?",
    options: [
      { text: "주가 차트와 거래량 변화를 확인한다.", score: -2 },
      { text: "재무적으로 실질적인 타격이 얼마나 되는지 계산해본다.", score: -1 },
      { text: "같은 업계 전문가나 애널리스트의 의견을 찾아본다.", score: 1 },
      { text: "이 악재가 기업의 본질 가치를 훼손하는지 생각해본다.", score: 2 },
    ],
  },
  {
    id: 9,
    axis: "analysis",
    direction: "reverse",
    question: "투자 판단에서 \"직관\"의 역할을 어떻게 생각하십니까?",
    options: [
      { text: "직관보다 데이터가 일관되게 더 신뢰할 수 있다.", score: -2 },
      { text: "참고는 하되 숫자로 반드시 확인해야 한다.", score: -1 },
      { text: "데이터와 직관이 함께 작용할 때 좋은 결정이 나온다.", score: 1 },
      { text: "오랜 경험에서 나온 직관은 데이터보다 빠르고 정확할 수 있다.", score: 2 },
    ],
  },
  {
    id: 10,
    axis: "analysis",
    direction: "forward",
    question: "내가 좋아하고 자주 쓰는 서비스의 기업이 상장되었습니다. 투자를 고려할 때 이 \"좋아함\"은 어느 정도 영향을 줍니까?",
    options: [
      { text: "거의 없다. 감정과 투자는 철저히 분리해야 한다.", score: -2 },
      { text: "관심의 계기가 되지만 숫자로 검증해야 투자한다.", score: -1 },
      { text: "상당한 영향을 준다. 내가 좋아하면 남도 좋아할 가능성이 높다.", score: 1 },
      { text: "매우 크다. 직접 경험한 것이 가장 좋은 리서치다.", score: 2 },
    ],
  },

  // 축 3: 리스크 태도 (공격 ↔ 방어)
  {
    id: 11,
    axis: "risk",
    direction: "reverse",
    question: "투자에서 \"리스크\"를 어떻게 바라보십니까?",
    options: [
      { text: "최소화해야 할 위협이다.", score: -2 },
      { text: "감수하되 철저히 계산하고 통제해야 할 변수다.", score: -1 },
      { text: "수익을 위해 어느 정도 감내해야 할 요소다.", score: 1 },
      { text: "높은 수익의 기회가 숨어 있는 곳이다.", score: 2 },
    ],
  },
  {
    id: 12,
    axis: "risk",
    direction: "reverse",
    question: "포트폴리오 전체가 예상치 못한 이유로 손실 구간에 접어들었습니다. 이때 드는 가장 솔직한 감정은?",
    options: [
      { text: "지금이라도 손실을 줄이고 안전한 곳으로 이동하고 싶다.", score: -2 },
      { text: "불안하지만 원칙을 지키며 상황을 지켜본다.", score: -1 },
      { text: "오히려 냉정해진다. 이럴 때일수록 기회를 본다.", score: 1 },
      { text: "저가 매수의 기회가 왔다는 생각이 먼저 든다.", score: 2 },
    ],
  },
  {
    id: 13,
    axis: "risk",
    direction: "forward",
    question: "분산 투자에 대한 나의 생각은?",
    options: [
      { text: "리스크를 줄이는 가장 기본적이고 현명한 방법이다.", score: -2 },
      { text: "중요하지만 너무 많이 분산하면 수익도 희석된다.", score: -1 },
      { text: "깊이 아는 소수에 집중하는 것이 넓게 아는 다수보다 낫다.", score: 1 },
      { text: "분산은 평균을 향한 선택이다.", score: 2 },
    ],
  },
  {
    id: 14,
    axis: "risk",
    direction: "reverse",
    question: "투자 수익률과 안정성 중 하나를 선택해야 한다면 어느 쪽에 더 가깝습니까?",
    options: [
      { text: "수익률이 다소 낮아도 안정성이 훨씬 중요하다.", score: -2 },
      { text: "안정성을 기반으로 하되 적절한 수익률을 추구한다.", score: -1 },
      { text: "수익률을 우선하되 감당 가능한 리스크 안에서 관리한다.", score: 1 },
      { text: "높은 수익률을 위해 상당한 변동성도 감수할 수 있다.", score: 2 },
    ],
  },
  {
    id: 15,
    axis: "risk",
    direction: "forward",
    question: "투자에서 가장 피하고 싶은 상황은 무엇입니까?",
    options: [
      { text: "원금 손실이 발생하는 것", score: -2 },
      { text: "예상치 못한 손실로 계획이 흔들리는 것", score: -1 },
      { text: "시장 평균보다 낮은 수익률에 머무는 것", score: 1 },
      { text: "큰 수익 기회를 놓치는 것", score: 2 },
    ],
  },
];