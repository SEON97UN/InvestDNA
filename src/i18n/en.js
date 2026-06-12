import { investmentTypes } from "../data/types";

export const en = {
  // 랜딩 페이지
  landing: {
    badge: "Investment Personality Test",
    subtitle: "Discover the investor you were always meant to be.",
    subtitleSub: "Which of 8 investor archetypes are you?",
    cta: "Discover My Investment DNA",
    explore: "Explore Investor Types",
    meta: ["~3 min", "15 questions", "Free"],
    disclaimer: "This test is for educational and entertainment purposes only and does not constitute investment advice.",
    copyright: "© 2026 InvestDNA. All rights reserved.",
  },

  // 테스트 페이지
  test: {
    prev: "Previous",
    first: "Home",
    next: "Next",
    result: "See My Results",
    axisLabel: {
      time: "Time Horizon",
      analysis: "Analytical Style",
      risk: "Risk Attitude",
    },
    disclaimer: "This test is for educational and entertainment purposes only and does not constitute investment advice.",
    copyright: "© 2026 InvestDNA. All rights reserved.",
  },

  // 결과 페이지
  result: {
    eyebrow: "Your investment DNA is",
    philosophyLabel: "Core Philosophy",
    dnaLabel: "Your Investment DNA",
    dnaAxes: [
      { label: "Time Horizon", left: "Short-term", right: "Long-term" },
      { label: "Analytical Style", left: "Quantitative", right: "Qualitative" },
      { label: "Risk Attitude", left: "Defensive", right: "Aggressive" },
    ],
    strengthLabel: "Strengths",
    weaknessLabel: "Weaknesses",
    representativeLabel: "Notable Investor",
    compatibleLabel: "Best Match",
    exploreRelations: "Explore all type relationships →",
    share: "Share My Results 🔗",
    retake: "Take the Test Again",
    disclaimer: "This test is for educational and entertainment purposes only and does not constitute investment advice.",
    copyright: "© 2026 InvestDNA. All rights reserved.",
  },

  // 유형 탐색 페이지
  types: {
    back: "Home",
    badge: "Investor Archetypes",
    title: "Explore Investor Types",
    subtitle: "Select an archetype and explore how each type relates to the others.",
    selectLabel: "Select a Type",
    relationsLabel: "Relationships with Other Types",
    cta: "Discover My Investment DNA",
    empty: "Select a type above to begin the relationship analysis.",
    disclaimer: "This test is for educational and entertainment purposes only and does not constitute investment advice.",
    copyright: "© 2026 InvestDNA. All rights reserved.",
  },

  // 영어 유형 데이터
  types_data: {
    "long-qualitative-aggressive": {
      id: "wise-investor",
      color: investmentTypes["long-qualitative-aggressive"].color,
      name: "The Wise Investor",
      english: "The Wise Investor",
      philosophy: "The right business, at a fair price, held forever.",
      description: "The Wise Investor sees investing as something far more than making money — it's about becoming a true partner to a business. Price swings don't rattle you. If anything, a turbulent market is when you do your clearest thinking. Your starting question is always the same: \"Will this company still be here in ten years?\" Short-term gains don't tempt you, and the slow magic of compounding is something you understand not just intellectually, but deeply. As the saying goes, the stock market is a device for transferring money from the impatient to the patient. You are, above all, patient.",
      strength: "Unshakeable long-term conviction. Because your decisions are grounded in business fundamentals rather than price movements, emotional mistakes are rare. You also understand the power of compounding better than almost anyone — and you let it work.",
      weakness: "The world moves faster than it used to. Industries can be disrupted almost overnight, and a long-term mindset can quietly become an unwillingness to admit when a thesis no longer holds. Patience is a virtue — until it becomes an excuse.",
      representative: "Warren Buffett, Charlie Munger",
      compatible: "The Cycle Watcher",
      compatibleReason: "You know what to buy. They know when. The Cycle Watcher brings the market timing instinct that you've never needed — until now. When your conviction in a great business meets their read on the right moment, you get what every investor is looking for: the right company at the right price.",
    },
    "long-qualitative-defensive": {
      id: "global-explorer",
      color: investmentTypes["long-qualitative-defensive"].color,
      name: "The Global Explorer",
      english: "The Global Explorer",
      philosophy: "When fear is at its peak, opportunity is somewhere on the globe.",
      description: "The Global Explorer refuses to be confined to a single market. Where others see risk and uncertainty, you see the setup for a contrarian bet. When a market is being abandoned, you're the one quietly stepping in. Your instinct is to go where the pessimism is loudest — because that's often where the best valuations hide. You're not reckless; you're patient in a different way. You wait for the moment when fear has done its job of driving prices down, and then you move. History tends to reward those who are willing to go where others won't. You believe that too.",
      strength: "A contrarian mindset and a genuinely global perspective. Because you're not anchored to a single market, a crisis in one region doesn't shake your whole portfolio. You have the temperament to buy when others are running — and that's a rare edge.",
      weakness: "Information asymmetry is real. Foreign markets come with language barriers, different regulatory environments, and cultural nuances that are easy to underestimate. Currency risk and geopolitical volatility can introduce variables that even the most thorough research can't fully account for.",
      representative: "John Templeton",
      compatible: "The Safety Guardian",
      compatibleReason: "You find the opportunities. They validate them. The Safety Guardian's rigorous quantitative analysis is exactly the filter your globe-spanning instincts need. You bring the vision; they bring the verification. It's the balance of boldness and discipline that makes the combination so powerful.",
    },
    "long-quantitative-defensive": {
      id: "safety-guardian",
      color: investmentTypes["long-quantitative-defensive"].color,
      name: "The Safety Guardian",
      english: "The Safety Guardian",
      philosophy: "If the numbers don't prove it, I don't move.",
      description: "The Safety Guardian believes that the first rule of investing is not to lose money — and every decision flows from that principle. No matter how compelling a story sounds, if the margin of safety isn't there in the numbers, you pass. You trust data over narratives, spreadsheets over sentiment. Before making any move, you've already stress-tested the downside. To some, this looks like excessive caution. To you, it's the only rational approach. You'd rather miss a ten-bagger than take an unquantified risk.",
      strength: "Exceptional downside protection. Because every position is backed by a genuine margin of safety, your portfolio tends to hold up better when markets fall apart. Emotional decision-making is rare — you've already done the work before the volatility starts.",
      weakness: "Opportunity cost is the silent enemy. Your high bar for entry means you'll sometimes watch fast-moving growth stocks or momentum plays run without you. In a bull market driven by narrative rather than fundamentals, strict valuation discipline can feel like a handicap.",
      representative: "Benjamin Graham, Seth Klarman",
      compatible: "The Global Explorer",
      compatibleReason: "The Global Explorer expands your universe of possibilities. Left to your own filters, you might only ever look at familiar, well-covered markets. They bring you opportunities you'd never have found on your own — and you bring the rigorous analysis that turns a promising idea into a defensible investment.",
    },
    "long-quantitative-aggressive": {
      id: "market-companion",
      color: investmentTypes["long-quantitative-aggressive"].color,
      name: "The Market Companion",
      english: "The Market Companion",
      philosophy: "Don't try to beat the market. Become it.",
      description: "The Market Companion starts from a place of genuine humility: most active investors, most of the time, don't beat the market net of fees and taxes. Rather than fighting that reality, you've made it work for you. You don't pick stocks. You buy the market, reinvest consistently, and let time do the heavy lifting. It sounds simple — because it is. And that simplicity is the point. In investing, complexity is usually the enemy of returns, and consistency is usually the friend.",
      strength: "Near-zero emotional error. Without individual stocks to agonize over, you sidestep most of the behavioral traps that cost other investors dearly. Low costs, broad diversification, and disciplined reinvestment compound quietly into something most active managers fail to match.",
      weakness: "FOMO has a way of finding everyone. When people around you are posting double-digit gains on individual names, settling for market returns can feel like settling. The discipline to stay the course — especially during euphoric markets — is harder than it sounds.",
      representative: "John Bogle",
      compatible: "The Market Hunter",
      compatibleReason: "Your stable, diversified core gives The Market Hunter a foundation to work from. Their high-conviction tactical bets carry real risk — but with your steady base underneath, a bad call doesn't sink the whole ship. You provide the floor; they go for the ceiling.",
    },
    "short-qualitative-aggressive": {
      id: "market-hunter",
      color: investmentTypes["short-qualitative-aggressive"].color,
      name: "The Market Hunter",
      english: "The Market Hunter",
      philosophy: "A trend is true until it isn't. Ride it while it lasts.",
      description: "The Market Hunter doesn't wait for the perfect valuation. You wait for the perfect moment — and when momentum builds, you move fast and you move decisively. You read price action and market psychology with a trader's eye. When a trend is forming, you're often already in it. When it starts to break, you're already thinking about the exit. That same orientation — toward speed, conviction, and action — defines The Market Hunter.",
      strength: "Speed and upside capture. In strong trending markets, your ability to get in early and size up confidently can generate returns that longer-term strategies simply can't match in the short run. You're also genuinely responsive to change — you don't hold losers out of stubbornness.",
      weakness: "Trend reversals are brutal if you're late to see them. Frequent trading also compounds costs and taxes in ways that quietly erode performance. And when conviction tips into overconfidence, the same decisiveness that creates big wins can create big losses.",
      representative: "George Soros, William O'Neil",
      compatible: "The Market Companion",
      compatibleReason: "The Market Companion gives you something you didn't know you needed: a stable anchor. Your high-octane approach works — until it doesn't. With a diversified core in place, a bad trade is just a bad trade, not a portfolio-level event.",
    },
    "short-qualitative-defensive": {
      id: "cycle-watcher",
      color: investmentTypes["short-qualitative-defensive"].color,
      name: "The Cycle Watcher",
      english: "The Cycle Watcher",
      philosophy: "Markets don't lie. Timing does.",
      description: "The Cycle Watcher doesn't read balance sheets first — they read people. You understand that markets are, at their core, driven by human emotion: greed and fear cycling endlessly in patterns that repeat across decades. When euphoria is at its peak, you're quietly stepping back. When panic sets in, you're the one looking for what's been thrown out with the bathwater. You don't try to call the exact top or bottom — you try to know which half of the cycle you're in.",
      strength: "Crowd psychology awareness and contrarian instinct. Your ability to sense when sentiment has reached an extreme — in either direction — gives you a timing edge that pure fundamental analysts rarely have. You buy with a cushion of pessimism beneath you and sell into optimism.",
      weakness: "Cycles are easier to identify in hindsight than in real time. \"Selling too early and buying too early\" is the classic trap for cycle-aware investors — and sitting on the sidelines while a market keeps running is its own kind of painful. When your read is wrong, it can be expensively wrong.",
      representative: "Howard Marks",
      compatible: "The Wise Investor",
      compatibleReason: "The Wise Investor knows what to own. You know when. Their deep conviction in great businesses, combined with your instinct for market timing, creates something neither of you could achieve alone: buying genuinely great companies at genuinely great prices.",
    },
    "short-quantitative-aggressive": {
      id: "quant-alchemist",
      color: investmentTypes["short-quantitative-aggressive"].color,
      name: "The Quant Alchemist",
      english: "The Quant Alchemist",
      philosophy: "The alpha is already in the data. You just have to find it.",
      description: "The Quant Alchemist doesn't trust stories. You trust signals. Where other investors see a chart, you see a dataset. Where they see a narrative, you see noise to be filtered out. Your edge is pattern recognition at scale — finding statistical relationships that human intuition would never catch and turning them into systematic strategies. You backtest relentlessly. You refine constantly. And you never let emotion override a model that the evidence supports.",
      strength: "Emotional neutrality and systematic consistency. Because your decisions are driven by models rather than moods, you sidestep the behavioral biases that quietly destroy most investors' returns. You also have access to insights that are simply invisible to the naked eye.",
      weakness: "Models are built on history — and history doesn't always repeat. Black swan events, regime changes, and genuine structural breaks can expose the limits of even the most sophisticated backtested strategy. Over-reliance on a model that's no longer valid is a risk that's hard to see until it's too late.",
      representative: "Jim Simons, Edward Thorp",
      compatible: "The Cycle Watcher",
      compatibleReason: "Your models are exceptional at finding patterns in price and data. What they can't fully capture is human sentiment — the irrational, emotional dimension of markets that The Cycle Watcher reads instinctively. Together, you cover both sides of the market: the quantifiable and the psychological.",
    },
    "short-quantitative-defensive": {
      id: "risk-architect",
      color: investmentTypes["short-quantitative-defensive"].color,
      name: "The Risk Architect",
      english: "The Risk Architect",
      philosophy: "Design the downside first. The upside takes care of itself.",
      description: "The Risk Architect begins every investment decision with a single question: how much can I lose? Not how much can I make — how much can I lose? Only once you've stress-tested the worst case do you consider whether the upside is worth pursuing. You build portfolios the way engineers build structures: with redundancy, load distribution, and failure scenarios already accounted for. A single position, no matter how compelling, never has the power to take down the whole.",
      strength: "Resilience across market environments. Because your portfolio is engineered to absorb shocks, extreme market events that devastate others tend to leave you relatively intact. Surviving intact through downturns is what allows you to compound over the long run.",
      weakness: "In a raging bull market, defensive construction looks like a drag. While others are capturing the full upside, your built-in hedges and diversification can make returns feel frustratingly muted. Over the long term the math works in your favor — but the short term can test your conviction.",
      representative: "Ken Griffin, Ray Dalio",
      compatible: "The Quant Alchemist",
      compatibleReason: "You build the fortress. They find the alpha inside it. The Quant Alchemist's data-driven strategies give your carefully constructed portfolio a systematic engine for generating returns — while your risk architecture ensures that when their models are wrong, the damage stays contained.",
    },
  },

  // 영어 질문 데이터
  questions_data: [
    {
      id: 1, axis: "time", direction: "forward",
      question: "When you find a stock you like, what's the first thing on your mind?",
      options: [
        { text: "How long am I willing to hold this?", score: 2 },
        { text: "When would be the right time to sell for a solid return?", score: 1 },
        { text: "Where is the market heading right now?", score: -1 },
        { text: "What's the best entry point today?", score: -2 },
      ],
    },
    {
      id: 2, axis: "time", direction: "forward",
      question: "Your position has been going nowhere for a while — no news, no movement. What do you honestly feel?",
      options: [
        { text: "This is just part of the waiting game. I'm not worried.", score: 2 },
        { text: "A little restless, but I trust my own judgment.", score: 1 },
        { text: "I can't help wondering if I'm missing better opportunities elsewhere.", score: -1 },
        { text: "I'd rather put this money to work somewhere more active.", score: -2 },
      ],
    },
    {
      id: 3, axis: "time", direction: "forward",
      question: "What role does \"time\" play in investing, in your view?",
      options: [
        { text: "The most powerful compounding force available to any investor.", score: 2 },
        { text: "A necessary wait for undervaluation to correct itself.", score: 1 },
        { text: "The backdrop against which you spot and ride the right trends.", score: -1 },
        { text: "A resource — use it fast and move on to the next opportunity.", score: -2 },
      ],
    },
    {
      id: 4, axis: "time", direction: "reverse",
      question: "Your position has surged. What's the first question that crosses your mind?",
      options: [
        { text: "Have I hit my target return?", score: -2 },
        { text: "Could this be near a peak?", score: -1 },
        { text: "Is the current price still justified by its intrinsic value?", score: 1 },
        { text: "Is this company still positioned to grow from here?", score: 2 },
      ],
    },
    {
      id: 5, axis: "time", direction: "forward",
      question: "Ten years from now, what does your ideal portfolio look like?",
      options: [
        { text: "Capital I grew aggressively through fast, decisive moves.", score: -2 },
        { text: "A portfolio that rode the right waves at the right times.", score: -1 },
        { text: "Steady, compounding wealth built through disciplined reinvestment.", score: 1 },
        { text: "Companies I believed in for years — and they proved me right.", score: 2 },
      ],
    },
    {
      id: 6, axis: "analysis", direction: "forward",
      question: "When you first research a company, where do you start?",
      options: [
        { text: "Price charts and trading volume patterns.", score: -2 },
        { text: "Financial statements and valuation metrics.", score: -1 },
        { text: "Industry trends and what competitors are doing.", score: 1 },
        { text: "The product or service itself — I try it firsthand.", score: 2 },
      ],
    },
    {
      id: 7, axis: "analysis", direction: "forward",
      question: "Two stocks. Company A has mediocre financials but exceptional leadership and a clear vision. Company B has strong financials but unremarkable management. Which appeals to you more?",
      options: [
        { text: "Strongly B", score: -2 },
        { text: "Leaning B, but A is worth considering", score: -1 },
        { text: "Leaning A, but B has its merits", score: 1 },
        { text: "Strongly A", score: 2 },
      ],
    },
    {
      id: 8, axis: "analysis", direction: "forward",
      question: "Bad news just hit one of your holdings. What's your first instinct?",
      options: [
        { text: "Pull up the chart — see how price and volume are reacting.", score: -2 },
        { text: "Quantify the financial damage as precisely as possible.", score: -1 },
        { text: "Find out what analysts and industry insiders are saying.", score: 1 },
        { text: "Ask whether the company's fundamental value has actually changed.", score: 2 },
      ],
    },
    {
      id: 9, axis: "analysis", direction: "reverse",
      question: "What role does intuition play in your investment decisions?",
      options: [
        { text: "Data is consistently more reliable than gut feeling.", score: -2 },
        { text: "Worth noting, but I always verify with hard numbers.", score: -1 },
        { text: "The best decisions come from data and intuition working together.", score: 1 },
        { text: "Seasoned intuition can be faster and sharper than any model.", score: 2 },
      ],
    },
    {
      id: 10, axis: "analysis", direction: "forward",
      question: "A company you love and use all the time just went public. How much does that personal connection factor into your decision?",
      options: [
        { text: "Barely at all. Emotions and investing don't mix.", score: -2 },
        { text: "It gets me interested, but the numbers have to back it up.", score: -1 },
        { text: "Quite a bit — if I love it, others probably will too.", score: 1 },
        { text: "Enormously. Living with a product is the best research there is.", score: 2 },
      ],
    },
    {
      id: 11, axis: "risk", direction: "reverse",
      question: "How do you think about risk in investing?",
      options: [
        { text: "Something to be minimized at every turn.", score: -2 },
        { text: "A variable to be carefully calculated and controlled.", score: -1 },
        { text: "An unavoidable cost of generating meaningful returns.", score: 1 },
        { text: "Where the most interesting opportunities tend to hide.", score: 2 },
      ],
    },
    {
      id: 12, axis: "risk", direction: "reverse",
      question: "Your portfolio is down — unexpectedly and across the board. What's your gut reaction?",
      options: [
        { text: "I want to cut exposure and move somewhere safer.", score: -2 },
        { text: "Unsettled, but I'll stick to my principles and watch closely.", score: -1 },
        { text: "I get calmer, actually. This is when opportunities emerge.", score: 1 },
        { text: "My first thought: where's the best place to average down?", score: 2 },
      ],
    },
    {
      id: 13, axis: "risk", direction: "forward",
      question: "What's your honest take on diversification?",
      options: [
        { text: "The single most sensible way to manage risk.", score: -2 },
        { text: "Important — but over-diversifying just dilutes your returns.", score: -1 },
        { text: "Knowing a few things deeply beats knowing many things broadly.", score: 1 },
        { text: "Diversification is a bet on mediocrity.", score: 2 },
      ],
    },
    {
      id: 14, axis: "risk", direction: "reverse",
      question: "If you had to choose between returns and stability, where do you honestly land?",
      options: [
        { text: "Stability, even if it means leaving returns on the table.", score: -2 },
        { text: "A stable foundation, with room for reasonable upside.", score: -1 },
        { text: "Returns first — with risk managed within acceptable limits.", score: 1 },
        { text: "I'll take real volatility for a real shot at outsized returns.", score: 2 },
      ],
    },
    {
      id: 15, axis: "risk", direction: "forward",
      question: "What's the one outcome you'd hate most as an investor?",
      options: [
        { text: "Losing principal.", score: -2 },
        { text: "An unexpected loss that derails my plan.", score: -1 },
        { text: "Trailing the market average year after year.", score: 1 },
        { text: "Watching a major opportunity pass me by.", score: 2 },
      ],
    },
  ],

  // 영어 관계 데이터
  relations_data: {
    "wise-investor_global-explorer": {
      grade: 3,
      title: "Same philosophy, different stages.",
      description: "Both are long-term, qualitative investors who look for the substance behind a business. Where the Wise Investor goes deep into a select few companies, the Global Explorer casts the net wider — scanning markets the rest of the world has overlooked. When one asks \"is this company the real thing?\" and the other asks \"where in the world is the opportunity?\", the result is a portfolio with both depth and breadth. The philosophical alignment makes trust come naturally.",
    },
    "wise-investor_safety-guardian": {
      grade: 2,
      title: "The same destination, but different maps.",
      description: "Both are long-term investors, but they read companies in fundamentally different languages. The Wise Investor weighs management vision, brand equity, and customer loyalty. The Safety Guardian runs the numbers — intrinsic value, margin of safety, valuation ratios. One might say \"I love the culture of this company.\" The other replies \"the PBR hasn't entered safe territory yet.\" When they respect each other's method, the qualitative and quantitative combine into something more powerful than either alone.",
    },
    "wise-investor_market-companion": {
      grade: 2,
      title: "Long-term in common, but different beliefs.",
      description: "Both think in years, not days. But the Wise Investor trusts a carefully chosen handful of great businesses, while the Market Companion trusts the average growth of the entire market. To one, the other looks either too passive or too concentrated. But that tension is healthy — it pushes the Wise Investor to ask whether they can truly beat the market, and reminds the Market Companion that the effort of finding genuinely great businesses has its own kind of value.",
    },
    "wise-investor_market-hunter": {
      grade: 2,
      title: "The same conviction, a very different clock.",
      description: "Both back their judgment with real commitment. But the Wise Investor's time horizon stretches years into the future, while the Market Hunter's runs weeks at most. One is painting a picture of a company in ten years; the other is calculating next week's momentum. If they can bridge that gap, the Wise Investor gains a timing instinct they've never needed — and the Market Hunter gains access to a quality of fundamental analysis they've never had.",
    },
    "wise-investor_cycle-watcher": {
      grade: 3,
      title: "The eye that sees value, and the ear that hears timing.",
      description: "The Wise Investor knows what to own. The Cycle Watcher knows when. Together, they answer both of investing's most important questions — \"what?\" and \"when?\" — at the same time. Alone, one might buy a great company too early or too late; the other might read the moment perfectly but climb aboard the wrong vehicle. Together, they can do what every investor dreams of: buy the best businesses at the best prices, precisely when fear has made them cheapest.",
    },
    "wise-investor_quant-alchemist": {
      grade: 1,
      title: "Two entirely different languages for the same market.",
      description: "One asks \"can I trust this company's leadership?\" The other asks \"is this pattern statistically significant?\" The Wise Investor's qualitative conviction can look like unverified intuition to the Quant Alchemist, and the Quant's algorithmic framework can look like it misses what actually makes a business great. But that's exactly what makes this pairing valuable as a learning relationship — the Wise Investor discovers the discipline of testing conviction with data, and the Quant Alchemist begins to see what numbers alone can never capture.",
    },
    "wise-investor_risk-architect": {
      grade: 0,
      title: "What happens when opposites meet.",
      description: "On every axis — time horizon, analytical style, risk attitude — these two sit at opposite ends. One says \"one great company is enough.\" The other says \"concentrating in one basket is the definition of risk.\" And yet, paradoxically, if these two can genuinely understand each other, they have the most to gain from the encounter. The Wise Investor's deep conviction, combined with the Risk Architect's structural thinking, could produce something rare: an investor who picks great businesses and manages risk with precision.",
    },
    "global-explorer_safety-guardian": {
      grade: 3,
      title: "Bold discovery and rigorous validation — a perfect division of labor.",
      description: "The Global Explorer ranges across markets, lands on an opportunity by instinct, and says \"this is it.\" The Safety Guardian opens the financial statements and starts calculating. Without the Explorer, the Guardian's universe shrinks to familiar, well-covered ground. Without the Guardian, the Explorer risks trusting a story that the numbers don't support. Together, the discovery and the verification happen in sequence — which is exactly how it should work. The fact that both are long-term investors makes the trust between them easier to build.",
    },
    "global-explorer_market-companion": {
      grade: 2,
      title: "Two different kinds of humility.",
      description: "Both are humble investors, in their own way. The Global Explorer's humility says: \"the best opportunities are probably somewhere I haven't looked yet.\" The Market Companion's humility says: \"I probably can't beat the market, so I won't try.\" The philosophies point in different directions, but the underlying temperament is similar — both acknowledge the limits of what they know. Each has something to teach the other: the Explorer shows that betting on an entire overlooked market is its own form of exploration, and the Companion shows that sometimes the best opportunity is simply the one everyone else is ignoring.",
    },
    "global-explorer_market-hunter": {
      grade: 2,
      title: "Two hunters, but very different prey.",
      description: "Both have the instinct to find opportunities before others do. But the Global Explorer is playing a long game — identifying markets that will emerge over years — while the Market Hunter is looking for momentum that can be captured in days or weeks. \"This market will shine in five years\" meets \"if nothing is moving right now, what's the point?\" If they can respect the difference, the Explorer can borrow the Hunter's entry-timing instinct, and the Hunter can borrow the Explorer's broader market perspective.",
    },
    "global-explorer_cycle-watcher": {
      grade: 3,
      title: "Two contrarians who find opportunity in fear.",
      description: "Both share the instinct to move toward what others are fleeing. The Global Explorer reads a market and says: \"the pessimism here is overdone — it's time to go in.\" The Cycle Watcher reads the sentiment data and says: \"fear is at a historical extreme — the bottom is close.\" When these two find each other, the Explorer's global reach and the Cycle Watcher's psychological cycle analysis combine to do something precise: identify the exact moment when fear has peaked in an overlooked market. That's contrarian investing at its most powerful.",
    },
    "global-explorer_quant-alchemist": {
      grade: 1,
      title: "Intuition and algorithm — a gap that won't quite close.",
      description: "The Global Explorer reads opportunity through culture, political climate, and historical context — things that don't fit neatly into a dataset. The Quant Alchemist doesn't trust what can't be quantified. To the Explorer, algorithmic models can feel like they strip away the very context that makes global investing meaningful. To the Quant, the Explorer's thesis can sound like a story in search of data. But if the Explorer's discoveries become inputs for the Quant's validation process, the combination starts to look less like a disagreement and more like a pipeline.",
    },
    "global-explorer_risk-architect": {
      grade: 2,
      title: "A shared language: diversification.",
      description: "Both believe in spreading risk — they just do it differently. The Global Explorer diversifies across geographies; the Risk Architect diversifies across asset classes and strategies. The underlying philosophy — that concentration is dangerous — gives them an immediate common ground. When the Explorer's global opportunity set is filtered through the Risk Architect's structural risk management, the result is a portfolio with genuine upside potential and the downside controls to protect it.",
    },
    "safety-guardian_market-companion": {
      grade: 3,
      title: "Two rationalists who trust numbers above all.",
      description: "Both make decisions through data and logic rather than emotion. The Safety Guardian calculates intrinsic value company by company. The Market Companion trusts the long-run average return of the entire market. The methods differ, but the principle is the same: don't move without evidence. The Guardian can show the Companion that deep individual analysis sometimes genuinely earns above-average returns. The Companion can show the Guardian that the complexity of stock-picking sometimes costs more than it returns.",
    },
    "safety-guardian_market-hunter": {
      grade: 0,
      title: "The same market, completely different languages.",
      description: "These two clash on nearly every dimension. The Safety Guardian waits for the numbers to confirm a sufficient margin of safety. The Market Hunter moves the moment momentum forms. To one, the other looks like reckless guesswork — or like an inability to act. But the sharpness of the contrast is what makes it instructive. The Guardian learns that markets don't always wait for intrinsic value to be recognized. The Hunter learns that momentum without a foundation can collapse without warning.",
    },
    "safety-guardian_cycle-watcher": {
      grade: 2,
      title: "Two different ways to protect the downside.",
      description: "Both are fundamentally defensive investors — loss prevention comes first. The Safety Guardian protects the downside through margin-of-safety analysis; the Cycle Watcher protects it by reading when sentiment has pushed prices too high. The approaches are different, but the underlying philosophy — \"don't lose\" — is identical. When the Guardian's quantitative margin-of-safety work meets the Cycle Watcher's read on market psychology, the result can be exceptional: buying undervalued companies at precisely the moment when pessimism is at its peak.",
    },
    "safety-guardian_quant-alchemist": {
      grade: 3,
      title: "Two analysts who let numbers do the talking.",
      description: "Both trust data. Both distrust stories. The Safety Guardian excels at fundamental analysis — calculating what a company is truly worth. The Quant Alchemist excels at pattern recognition — identifying statistical regularities in how prices move. When one calculates intrinsic value and the other tests whether prices statistically converge toward it, the combination of fundamental and quantitative analysis produces something neither could achieve working alone.",
    },
    "safety-guardian_risk-architect": {
      grade: 3,
      title: "Two architects of the same thing: protection.",
      description: "Both place risk management above everything else. The Safety Guardian controls downside at the individual security level through margin of safety. The Risk Architect controls it at the portfolio level through structural diversification. One asks \"is this company cheap enough relative to what it's worth?\" The other asks \"what does adding this company do to the overall risk profile of the portfolio?\" Individual margin of safety combined with portfolio-level risk architecture creates one of the most resilient investment structures imaginable.",
    },
    "market-companion_market-hunter": {
      grade: 3,
      title: "Stability and aggression — each other's best buffer.",
      description: "These two look like opposites, but they may be the most practically complementary pairing of all. The Market Companion's diversified, stable core gives the Market Hunter a foundation to work from. The Hunter's high-conviction tactical bets add an upside that the Companion's index approach can never generate on its own. When the Hunter takes a loss, the Companion's core holds the portfolio together. When the Companion is quietly tracking the market average, the Hunter is generating the alpha. Offense and defense, each in its proper role.",
    },
    "market-companion_cycle-watcher": {
      grade: 2,
      title: "The one who follows the market, and the one who reads it.",
      description: "The Market Companion moves with the market; the Cycle Watcher tries to stay one step ahead of it. To the Companion, the Watcher's timing efforts can look like unnecessary complexity. To the Watcher, the Companion's passive approach can look like leaving money on the table. But the tension between them generates a genuinely important question: is the effort to read market cycles worth more than the simplicity of just staying invested? Both perspectives sharpen when they push against each other.",
    },
    "market-companion_quant-alchemist": {
      grade: 2,
      title: "Two rationalists who trust data — but reach opposite conclusions.",
      description: "Both rely on evidence rather than emotion. But the Companion's evidence says \"beating the market consistently isn't possible,\" while the Quant's evidence says \"repeatable patterns that beat the market do exist.\" Same data, different conclusions — which makes for a genuinely interesting relationship. The Companion challenges the Quant to account for the full cost of finding alpha. The Quant challenges the Companion to consider that edges do exist for those disciplined enough to find them.",
    },
    "market-companion_risk-architect": {
      grade: 3,
      title: "The two wisest diversifiers in the room.",
      description: "Both treat diversification as a core principle, not a compromise. The Market Companion eliminates individual stock risk by owning the whole market. The Risk Architect eliminates systemic risk by distributing across asset classes and strategies. The Companion's low-cost index exposure plus the Risk Architect's sophisticated hedging structure creates a portfolio that's both efficient and resilient — one that can weather extreme market environments without requiring its owners to make heroic decisions under pressure.",
    },
    "market-hunter_cycle-watcher": {
      grade: 3,
      title: "The one who rides the trend, and the one who sees where it ends.",
      description: "The Market Hunter gets in when momentum forms. The Cycle Watcher gets out when the cycle turns. Alone, the Hunter risks missing the reversal and giving back hard-won gains. Alone, the Cycle Watcher risks exiting a trend too early and leaving returns behind. Together, their roles divide naturally and cleanly: the Hunter captures the entry; the Cycle Watcher calls the exit. It's one of the most efficient uses of two complementary market instincts.",
    },
    "market-hunter_quant-alchemist": {
      grade: 2,
      title: "Fast instinct versus cold algorithm — a productive rivalry.",
      description: "Both are aggressive short-term players who look for edges in the market. But the Hunter uses feel, and the Quant uses models. To the Hunter, the algorithm can feel slow and mechanical — missing the moment. To the Quant, the Hunter's instinct looks like an untested hypothesis. But when the Hunter's speed and market feel are combined with the Quant's data validation, the result is a strategy that moves fast and moves smart — intuition with a statistical backbone.",
    },
    "market-hunter_risk-architect": {
      grade: 2,
      title: "Firepower and structure.",
      description: "The Market Hunter takes on risk to generate returns. The Risk Architect takes on returns only after designing the risk. One sees the other as too cautious; the other sees the first as too exposed. But when the Hunter's offensive capabilities are paired with the Risk Architect's defensive structure, the outcome is something neither could build alone: a strategy that pursues high returns while keeping catastrophic losses structurally off the table. Attack and defense, each doing what it does best.",
    },
    "cycle-watcher_quant-alchemist": {
      grade: 3,
      title: "Psychology and algorithm together complete the full picture.",
      description: "The Cycle Watcher reads the emotional undercurrent of markets — the greed and fear that drive cycles. The Quant Alchemist finds the statistical patterns those emotions leave behind in price data. When the Cycle Watcher says \"the market is deep in fear territory,\" the Quant can confirm: \"the fear index is in the bottom 5% of its historical range.\" Qualitative psychological analysis and quantitative data analysis pointing to the same conclusion is one of the strongest signals an investor can have. Together, these two cover both dimensions of market behavior: the emotional and the empirical.",
    },
    "cycle-watcher_risk-architect": {
      grade: 2,
      title: "Two investors who fear the downside — in different ways.",
      description: "Both are defensively oriented. Both are loss-sensitive. The Cycle Watcher sends the warning signal when sentiment overheats. The Risk Architect has already built the structure to absorb the impact. When the Watcher says \"this market is running too hot, be careful,\" the Risk Architect's hedges are already in place. The combination of psychological early warning and structural defense creates an investor who is not just cautious by temperament, but protected by design.",
    },
    "quant-alchemist_risk-architect": {
      grade: 3,
      title: "Algorithmic offense and risk architecture defense — the ultimate quant team.",
      description: "Both are data-driven, quantitatively oriented investors working on shorter time horizons. The Quant Alchemist builds the offensive engine — systematic strategies designed to generate alpha. The Risk Architect builds the defensive structure — ensuring that when a model fails, the damage stays contained. Without the Risk Architect, a black swan event can break even the most sophisticated model. Without the Quant, the Risk Architect's defensive structure has no engine to drive returns. Together, they maximize alpha while systematically controlling for extreme risk — which is precisely the operating model of the world's best quantitative funds.",
    },
  },

  // 등급 레이블
  gradeConfig_data: {
    3: { label: "Perfect Match", color: "from-yellow-400 to-amber-500" },
    2: { label: "Strong Ally", color: "from-blue-400 to-cyan-500" },
    1: { label: "Worth Learning From", color: "from-slate-400 to-slate-500" },
    0: { label: "Polar Opposites", color: "from-red-400 to-orange-500" },
  },
};