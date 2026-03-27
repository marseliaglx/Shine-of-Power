import { Framework } from './types';

export const FRAMEWORKS: Framework[] = [
  {
    id: 1,
    title: "Inversion",
    summary: "Think about how to fail, then avoid those things.",
    category: "Clear Thinking",
    concept: "Originating from Stoic philosophy and popularized by Charlie Munger, Inversion is the practice of approaching a problem from the opposite end. Instead of asking how to achieve success, you ask how to guarantee failure. This bypasses optimism bias and forces you to confront the obstacles you would otherwise avoid. It is a form of risk management before you even define the project.",
    reality: "For a knowledge management initiative, asking 'How do we ensure no one ever uses this?' yields concrete insights:\n\n1. Make the search useless by cluttering it with noise.\n2. Require three separate logins to access a single document.\n3. Fill the repository with outdated, unverified content.\n\nBy avoiding these pitfalls, you create a 'stop-doing' list that is often more valuable than a 'start-doing' list, ensuring your system remains lean and user-centric.",
    quiz: {
      question: "You want to improve the onboarding experience for new hires. What is the inversion approach?",
      options: [
        "Ask new hires what they liked most about onboarding.",
        "Ask “What would make onboarding a complete disaster?” then avoid those things.",
        "Benchmark onboarding practices at competitor companies."
      ],
      correctIndex: 1,
      takeaway: "Approach problems from the opposite end to identify and avoid failure modes."
    },
    xp: 150
  },
  {
    id: 2,
    title: "Second-Order Thinking",
    summary: "Consider the consequences of the consequences.",
    category: "Clear Thinking",
    concept: "Rooted in systems thinking and popularized by Howard Marks, Second-Order Thinking is the ability to visualize the chain reaction of a decision over time. First-order thinking is simplistic and obvious ('We need to cut costs'). Second-order thinking is complex and powerful ('If we cut this cost, what will happen to the teams that depend on it, and then what will the impact be on our customers?').",
    reality: "A company decides to 'democratize content creation' (First-order: more content!). \n\nSecond-order: Every employee publishes unvetted content, leading to a massive volume of low-quality data.\nThird-order: Customers find conflicting information, get frustrated, and lose trust in the brand.\nFourth-order: The KM team is overwhelmed cleaning up the mess, and the cost of maintenance far exceeds the original benefit of 'more content'.",
    quiz: {
      question: "Your company cuts the training budget to save money. A second‑order effect might be:",
      options: [
        "The company saves exactly the budgeted amount.",
        "New hires take longer to become productive, increasing burden on experienced staff.",
        "Employees appreciate the lean approach."
      ],
      correctIndex: 1,
      takeaway: "Extraordinary performance comes from seeing the ripple effects others miss."
    },
    xp: 150
  },
  {
    id: 3,
    title: "The Map Is Not the Territory",
    summary: "Don't mistake the model for reality.",
    category: "Clear Thinking",
    concept: "Introduced by Alfred Korzybski, this framework reminds us that any abstraction—an org chart, a dashboard, a project plan—is a simplification. It is a model that omits reality's messiness and nuance. The error is not in using maps; it's in mistaking the map for the territory. Great leaders go to the 'territory' to recalibrate their maps.",
    reality: "A 'Velocity' chart in Agile is a map, not the actual work. A team fixated on it might inflate story points to maintain a perfect line on a graph, creating an illusion of productivity.\n\nThe real territory is sustainable delivery, code quality, and customer value—none of which are captured in a single velocity metric. Great leaders go to the 'territory' (the daily stand-ups and code reviews) to recalibrate their maps.",
    quiz: {
      question: "Your dashboard shows 98% knowledge base satisfaction. To test if this matches reality, you should:",
      options: [
        "Increase the sample size of the survey.",
        "Go sit with a support agent and watch them search for answers.",
        "Create a new dashboard with more metrics."
      ],
      correctIndex: 1,
      takeaway: "Always remember that your models are simplifications of a complex reality."
    },
    xp: 150
  },
  {
    id: 4,
    title: "Hanlon’s Razor",
    summary: "Assume mistakes over malice.",
    category: "Clear Thinking",
    concept: "Hanlon’s Razor is a cognitive step: 'What else could explain this?' It suggests that we should never attribute to malice that which is adequately explained by neglect, incompetence, or simple mistakes. It is the antidote to the fundamental attribution error, where we over-attribute others' actions to their character.",
    reality: "Your manager rejects your proposal without detailed feedback. Instead of thinking 'They don't trust me' (malice), consider they might be stressed, read it quickly between meetings, or simply didn't understand the key benefit (neglect/incompetence).\n\nBy assuming the latter, you can approach them with a helpful follow-up: 'I noticed you had some concerns—would a 5-minute walkthrough of the core benefits help clarify things?'",
    quiz: {
      question: "A stakeholder missed a deadline that affects your work. Hanlon’s Razor suggests you first consider:",
      options: [
        "They are sabotaging your project.",
        "They are overwhelmed with other priorities or misunderstood the deadline.",
        "They lack the competence for their role."
      ],
      correctIndex: 1,
      takeaway: "Assuming positive intent or simple error saves you from unnecessary conflict."
    },
    xp: 150
  },
  {
    id: 5,
    title: "The Empty Boat",
    summary: "Don't take things personally.",
    category: "Clear Thinking",
    concept: "From the ancient Taoist philosopher Zhuangzi, The Empty Boat is an emotional regulation practice. If a boat hits yours and it's empty, you aren't angry. If there's a person in it, you shout. The boat is the same; your reaction changes based on your perception of intent. It teaches that others' reactions are a reflection of their state, not a judgment of you.",
    reality: "When someone is rude in a meeting, imagine their 'boat' is empty—perhaps they are dealing with a personal crisis, a lack of sleep, or are just overwhelmed by their own deadlines.\n\nYour next step shifts from defensive justification to a collaborative inquiry. You might say, 'It seems like we're under a lot of pressure right now. How can we simplify this decision?'",
    quiz: {
      question: "You receive a curt email from a colleague. Applying the Empty Boat parable, you would:",
      options: [
        "Assume they are angry and reply defensively.",
        "Reframe the event as a reflection of their circumstances, not personal malice, and respond calmly.",
        "Escalate the issue to their manager."
      ],
      correctIndex: 1,
      takeaway: "Others' reactions are often a reflection of their internal state, not a judgment of you."
    },
    xp: 150
  },
  {
    id: 6,
    title: "The Cobra Effect",
    summary: "Beware of perverse incentives.",
    category: "Clear Thinking",
    concept: "The Cobra Effect is a dramatic manifestation of perverse incentives. A seemingly logical solution backfires because it fails to account for human behavior within the incentive structure. It occurs when an incentive for a specific problem actually makes the problem worse.",
    reality: "In colonial India, a bounty was placed on cobra skins to reduce the population. People started breeding cobras to collect the bounty. When the bounty was cancelled, breeders released the cobras, making the population higher than before.\n\nIn modern business, rewarding developers solely for 'lines of code' leads to bloated, unmaintainable software. The incentive for 'productivity' actually creates 'technical debt'.",
    quiz: {
      question: "A call center rewards agents for the highest number of calls handled per hour. What unintended consequence is likely?",
      options: [
        "Customer satisfaction increases.",
        "Agents rush calls, hang up prematurely, or create repeat contacts to inflate numbers.",
        "Agents focus on solving complex problems thoroughly."
      ],
      correctIndex: 1,
      takeaway: "Always consider how humans will game an incentive structure before implementing it."
    },
    xp: 150
  },
  {
    id: 7,
    title: "Goodhart’s Law",
    summary: "When a measure becomes a target, it ceases to be a good measure.",
    category: "Clear Thinking",
    concept: "Goodhart’s Law explains why metrics fail: they cease to be good measures when targeted. People will optimize for the metric itself, often at the expense of the actual goal. The solution is to use a balanced scorecard of metrics that are hard to game simultaneously.",
    reality: "A company wants to reduce 'time-to-hire'. Recruiters start filling roles with the first minimally viable candidate to hit their target. Quality drops and attrition increases.\n\nA better system measures 'time-to-hire' alongside '6-month retention rate' and 'hiring manager satisfaction'. This prevents the measure from becoming a target that destroys the actual mission of finding great talent.",
    quiz: {
      question: "A content team is measured solely on “articles published per week.” What is the most likely outcome?",
      options: [
        "Article quality improves because the team is focused.",
        "Quantity goes up while quality collapses, and readers stop using the content.",
        "The team publishes fewer articles but spends more time on each."
      ],
      correctIndex: 1,
      takeaway: "Metrics are indicators, not the goal itself. Don't let the measure destroy the mission."
    },
    xp: 150
  },
  {
    id: 8,
    title: "The Decision Journal",
    summary: "Track decisions, reasoning, and outcomes.",
    category: "Decision Making",
    concept: "A cornerstone of Daniel Kahneman's work, the Decision Journal is a calibration tool for your judgment. By recording your decision-making process before you know the outcome, you defeat 'hindsight bias.' It helps you identify patterns: Are you overconfident when tired? Do you underestimate complexity in Q4?",
    reality: "Entry: 'Confidence 80%. Reason: Standard taxonomy will improve findability. Risks: Migration effort is underestimated.' \n\nPost-Mortem: Migration was a nightmare. You see your diagnosis was correct, but your risk assessment was wrong. Your learning is 'my risk estimates are systematically too optimistic.' This insight allows you to add a 20% 'buffer' to all future project estimates.",
    quiz: {
      question: "After a project that took longer than expected but succeeded, your decision journal would help you:",
      options: [
        "Avoid making similar decisions in the future.",
        "Distinguish between a flawed decision process and an underestimated timeline, so you can improve estimation without becoming risk‑averse.",
        "Justify the delay to stakeholders."
      ],
      correctIndex: 1,
      takeaway: "Defeat hindsight bias by recording your exact thoughts at the moment of decision."
    },
    xp: 150
  },
  {
    id: 9,
    title: "Fear-Setting",
    summary: "Define worst fears, prevention, and recovery plans.",
    category: "Decision Making",
    concept: "Popularized by Tim Ferriss, Fear-Setting is a structured exercise in risk analysis. It forces you to define the vague, terrifying specter of a decision into concrete, manageable problems. It reveals that the cost of inaction is often higher and more certain than the cost of failure.",
    reality: "Asking for a promotion. \n\nDefine: 'They say no, I look foolish.' \nPrevent: 'Build a business case with data and testimonials.' \nRepair: 'Ask for feedback on the gap, create a 6-month growth plan.' \nCost of Inaction: 'Resentment, stagnant skills, and a year of missed salary.' \n\nUsually, the cost of inaction is far higher than the risk of a temporary 'no'.",
    quiz: {
      question: "You are considering asking for a promotion. According to fear‑setting, after defining worst‑case scenarios, you should:",
      options: [
        "Avoid asking for the promotion if any risk exists.",
        "Identify steps to prevent each scenario and how you would recover if they occurred.",
        "Compare your situation to others who were promoted."
      ],
      correctIndex: 1,
      takeaway: "The unknown nightmare is usually a survivable setback. Define it, prevent it, repair it."
    },
    xp: 150
  },
  {
    id: 10,
    title: "Pre-mortem",
    summary: "Imagine the project failed. Write down what went wrong.",
    category: "Decision Making",
    concept: "A pre-mortem legitimizes dissent. By asking a team to 'look into the future and write the history of this failure,' you give people permission to voice concerns they might have suppressed. It transforms anxiety into a productive diagnostic tool.",
    reality: "For a 'Global SharePoint Migration.' \n\nPre-mortem: 'We failed because we told everyone it would be the same but better. When it wasn't, trust was broken.' \n\nOutcome: The focus shifts to 'How do we handle the delta between the same and the better?' You decide to launch with a 'Beta' label and a dedicated feedback channel to manage expectations.",
    quiz: {
      question: "Your team is about to launch a new portal. A pre‑mortem asks:",
      options: [
        "What is the budget for this project?",
        "“It is six months later and the portal is a failure. What went wrong?”",
        "Who will be the project sponsor?"
      ],
      correctIndex: 1,
      takeaway: "Solve the failure in your imagination before it happens in reality."
    },
    xp: 150
  },
  {
    id: 11,
    title: "The Five Whys",
    summary: "Ask 'why?' five times to reach the root cause.",
    category: "Decision Making",
    concept: "Developed by Taiichi Ohno at Toyota, this is a disciplined technique for root cause analysis. The goal is to move from a symptom (the problem) to a process failure (the root cause). The fifth 'why' often reveals a broken process or an organizational design flaw.",
    reality: "Problem: The wrong article went live on the portal.\n\nWhy? The writer used an outdated draft.\nWhy? The folder structure is a mess and confusing.\nWhy? No one has owned the Information Architecture for 18 months.\nWhy? The Knowledge Manager role has been vacant.\nWhy? KM was seen as a 'nice-to-have' rather than a core business function.\n\nSolution: Instead of just scolding the writer, the business backfills the KM role with a clear mandate to fix the architecture.",
    quiz: {
      question: "A customer received an outdated article. The fifth “why” reveals that no process links product releases to content updates. This suggests the root cause is:",
      options: [
        "The writer was careless.",
        "An organizational design gap between product and content teams.",
        "The content management system is outdated."
      ],
      correctIndex: 1,
      takeaway: "Don't just treat the symptom; aggressively cure the underlying disease."
    },
    xp: 150
  },
  {
    id: 12,
    title: "The 3-1-1 Method",
    summary: "One problem, three solutions, one recommendation.",
    category: "Decision Making",
    concept: "The 3-1-1 method formalizes the best practice of never bringing a problem without a solution. You present a curated set of choices, becoming a decision-enabler for your stakeholders. The 'one recommendation' signals you have a considered point of view.",
    reality: "Problem: The new AI tool is hallucinating and providing incorrect answers.\n\nSolution A: Implement mandatory human-fact-checking for every response.\nSolution B: Switch to a more expensive, enterprise-grade vendor.\nSolution C: Implement prompt-engineering guardrails and a feedback loop.\n\nRecommendation: Start with Solution C, as it balances speed, cost, and risk while allowing us to gather data on common failure modes.",
    quiz: {
      question: "You discover a critical software tool will be discontinued in 60 days. Using 3‑1‑1, you should present:",
      options: [
        "Only the problem and ask your manager what to do.",
        "One problem, three possible solutions, and one recommendation.",
        "A detailed history of how the tool was originally selected."
      ],
      correctIndex: 1,
      takeaway: "Be a solution-bringer, not a problem-dumper."
    },
    xp: 150
  },
  {
    id: 13,
    title: "DACI",
    summary: "Driver, Approver, Contributors, Informed. Clarify who decides.",
    category: "Decision Making",
    concept: "DACI is a RACI matrix for a single decision. Its power lies in the singularity of the Approver. In the absence of a single accountable person, the path of least resistance wins. By naming a Driver, you ensure someone is responsible for moving the process forward.",
    reality: "Deciding on a new Project Management tool for the entire department.\n\nD (Driver): PMO Lead (manages the evaluation process).\nA (Approver): Head of Engineering (the single person who makes the final call).\nC (Contributors): Senior Developers, Team Leads, and Ops (provide technical input).\nI (Informed): The entire engineering organization (notified once the decision is made).\n\nThis prevents 'decision by committee' where no one is truly accountable.",
    quiz: {
      question: "Your intranet redesign is stalled because six people think they have veto power. To resolve this, you need to assign:",
      options: [
        "Six Approvers to share accountability.",
        "One Driver to manage the process and one Approver with final decision authority.",
        "The most senior person as Driver and everyone else as Informed."
      ],
      correctIndex: 1,
      takeaway: "Clear roles prevent endless meetings and eliminate decision paralysis."
    },
    xp: 150
  },
  {
    id: 14,
    title: "Bias for Action",
    summary: "Most decisions are reversible. Decide fast, learn, adjust.",
    category: "Decision Making",
    concept: "Popularized by Jeff Bezos, this framework distinguishes between Type 1 (irreversible) and Type 2 (reversible) decisions. Most decisions are reversible; for these, speed is more valuable than perfection. For Type 1 decisions, slow down and be meticulous.",
    reality: "Type 2 (Reversible): Which logo variant to use for the new internal portal? Pick one and launch. If it doesn't resonate with users, you can change it in an hour.\n\nType 1 (Irreversible): Restructuring your entire team from a centralized model to a federated one. This impacts careers, budgets, and reporting lines. This requires months of consultation, planning, and careful execution because 'undoing' it is incredibly costly.",
    quiz: {
      question: "Your team is choosing between two similar project‑tracking apps. According to Jeff Bezos’s framework, this is a:",
      options: [
        "Type 1 (one‑way door) decision that requires months of analysis.",
        "Type 2 (two‑way door) decision that should be made quickly, as it’s reversible.",
        "Decision that should be escalated to senior leadership."
      ],
      correctIndex: 1,
      takeaway: "Speed matters in business. Move fast on reversible choices."
    },
    xp: 150
  },
  {
    id: 15,
    title: "KWL",
    summary: "What I Know, What I Wonder, What I Learned.",
    category: "Decision Making",
    concept: "KWL structures your inquiry to combat confirmation bias. It forces you to articulate what you already believe (Know) and what you genuinely want to learn (Wonder) before you gather evidence. The 'Learned' column reconciles assumptions with reality.",
    reality: "Evaluating a new AI-powered search engine for the company.\n\nK (Know): Current search is slow; the vendor claims 99% accuracy.\nW (Wonder): How does it handle our specific industry jargon? What is the real-world accuracy for our most common queries?\nL (Learned): It's 95% accurate for top queries, but we discovered it needs a custom synonym glossary to handle our internal project names effectively.",
    quiz: {
      question: "You are evaluating a new AI tool. The “W” in KWL stands for:",
      options: [
        "What I Will Do.",
        "What I Wonder – specific questions to answer before deciding.",
        "What Went Wrong."
      ],
      correctIndex: 1,
      takeaway: "Structure your curiosity to get actual, measurable results."
    },
    xp: 150
  },
  {
    id: 16,
    title: "The Personal README",
    summary: "A one-page user manual for working with you.",
    category: "Communication",
    concept: "A Personal README is a radical act of transparency. It pre-negotiates a working relationship by providing a set of instructions to help colleagues interact with you most effectively. It reduces friction, sets expectations, and builds psychological safety.",
    reality: "A Personal README might include:\n\n- Communication: 'I prefer Slack for quick questions and Email for deep-dive topics.'\n- Work Style: 'I batch all my 1:1 meetings on Tuesdays to protect my deep-work time on Wednesdays.'\n- Feedback: 'I value direct, kind feedback. Please don't sugarcoat problems.'\n- Pet Peeves: 'Messages that just say \"Hi\" and wait for a reply before stating the purpose.'",
    quiz: {
      question: "A Personal README is primarily intended to:",
      options: [
        "Show your manager how hard you work.",
        "Help colleagues understand your communication preferences and working style to reduce friction.",
        "Replace your resume."
      ],
      correctIndex: 1,
      takeaway: "Don't make people guess how to interact with you; give them the manual."
    },
    xp: 150
  },
  {
    id: 17,
    title: "FLIP It Email",
    summary: "Put the ask first, context second.",
    category: "Communication",
    concept: "The FLIP It structure mirrors an executive's information processing. They want the ask first. Only after they know what's required can they decide how much context to consume. It respects time and cognitive load.",
    reality: "Action: 'Please approve the €15k budget for the advanced AI training by this Friday.'\n\nContext: This training will upskill 20 senior team members on our new LLM framework, which is projected to reduce manual data entry errors by 30%.\n\nDetails: The vendor's early-bird discount expires this Friday, saving us €3k if we act now.",
    quiz: {
      question: "Which email opening best follows the FLIP structure?",
      options: [
        "“Hi, I’ve been thinking about our project…”",
        "“Action needed: Please approve budget by Friday so we can book the vendor.”",
        "“As you may recall, last quarter we discussed…”"
      ],
      correctIndex: 1,
      takeaway: "Respect people's time by getting to the point in the first sentence."
    },
    xp: 150
  },
  {
    id: 18,
    title: "The One-Pager",
    summary: "Condense updates to one page for executives.",
    category: "Communication",
    concept: "The constraint of one page forces ruthless prioritization. It’s a test: if you can’t explain it on one page, you don’t understand it well enough. It is not a summary; it is the artifact of your strategic thinking.",
    reality: "A One-Pager for a project proposal might look like:\n\n- The Situation: Our current onboarding process takes 4 weeks.\n- The Complication: 20% of new hires quit within the first 90 days due to confusion.\n- The Question: How can we reduce time-to-productivity to 1 week?\n- The Answer: Implement a 'Buddy System' and a centralized 'Knowledge Hub'.\n- Key Supporting Points: Benchmarking shows 40% higher retention with buddies.\n- Risks: Manager buy-in for buddy time. Mitigation: Buddies get a small bonus.",
    quiz: {
      question: "A one‑pager for executives should include all of the following EXCEPT:",
      options: [
        "A clear recommendation.",
        "Risks and mitigations.",
        "Every detail from the supporting research."
      ],
      correctIndex: 2,
      takeaway: "Clarity forces brevity; if you can't say it briefly, you don't understand it yet."
    },
    xp: 150
  },
  {
    id: 19,
    title: "The Weekly Update",
    summary: "52 weekly summaries = your annual review, pre-written.",
    category: "Communication",
    concept: "This is a self-documentation tool. By saving every update, you build a granular, time-stamped log of your work. Your annual performance review becomes a simple act of curation. It also provides a shield of transparency.",
    reality: "A Weekly Update structure that builds your career narrative:\n\n- This Week's Wins: Completed the migration of 500 legacy documents (Link to report).\n- Next Week's Focus: Finalizing the user training manual.\n- Blockers: Waiting on IT for API access to the new search tool.\n- Learnings: Users prefer video tutorials over long text articles.\n\nBy the end of the year, you have 52 pre-written summaries for your performance review.",
    quiz: {
      question: "Saving weekly updates is valuable because:",
      options: [
        "They prove you were busy every week.",
        "They create a searchable log that pre‑writes your performance review and makes accomplishments visible.",
        "Your manager requires them."
      ],
      correctIndex: 1,
      takeaway: "Make your accomplishments relentlessly visible and searchable."
    },
    xp: 150
  },
  {
    id: 20,
    title: "Skip-Level Meetings",
    summary: "Align your work to the skip-level person’s goals.",
    category: "Communication",
    concept: "A skip-level (your manager's manager) is interested in how your work contributes to their strategic goals. The goal is to align your narrative with their priorities. Frame your work in terms of business outcomes.",
    reality: "Bad Approach: 'I added 50 new articles to the Knowledge Base this month.'\n\nGood Approach: 'My work to streamline the Knowledge Base is on track to cut average search time by 50% for the support team. This frees up roughly 100 hours of capacity per quarter. Given this success, what other high-friction points should I tackle next?'\n\nThis frames your output in terms of business value, not just activity.",
    quiz: {
      question: "In a skip‑level meeting, you should focus on:",
      options: [
        "Your daily tasks and challenges.",
        "How your work aligns with the skip‑level leader’s strategic goals.",
        "Asking for a promotion directly."
      ],
      correctIndex: 1,
      takeaway: "Speak the language and address the goals of the level above you."
    },
    xp: 150
  },
  {
    id: 21,
    title: "Blue/Green/Red Speakers",
    summary: "Categorise meeting contributions by value.",
    category: "Communication",
    concept: "A framework for managing meeting dynamics. Blue (nodders/supportive), Green (drivers/constructive), Red (drains/critical). By categorizing contributions, you can manage the energy in a room and redirect dysfunctional behavior.",
    reality: "Handling a Red Speaker in a meeting:\n\nRed: 'This new portal will never work. It's too complex.'\nFacilitator: 'It sounds like you see a significant risk. What specific complexity would need to be removed for you to support this? Can you propose a simpler alternative by tomorrow?'\n\nThis forces the Red speaker to shift from destructive criticism to constructive problem-solving.",
    quiz: {
      question: "In a meeting, a participant repeatedly says “This won’t work” without offering alternatives. They are a:",
      options: [
        "Blue speaker.",
        "Green speaker.",
        "Red speaker."
      ],
      correctIndex: 2,
      takeaway: "Manage the energy in the room, not just the agenda."
    },
    xp: 150
  },
  {
    id: 22,
    title: "The Teach-Back Method",
    summary: "Ask them to explain it back to confirm understanding.",
    category: "Communication",
    concept: "A check for understanding that puts the burden on the explainer. It exposes the 'illusion of explanatory depth,' where we think we've explained something well, but the listener hasn't grasped it.",
    reality: "Instead of asking 'Do you understand?', which often gets a reflexive 'Yes', try:\n\n'To make sure I've explained this clearly, could you walk me through the steps you'd take when you get a product update notification tomorrow? Where do you go first and what do you check?'\n\nTheir struggle or ease in explaining reveals exactly where your communication was effective or where it failed.",
    quiz: {
      question: "Instead of “Do you understand?”, a teach‑back question would be:",
      options: [
        "“Does that make sense?”",
        "“Walk me through how you would handle this scenario.”",
        "“Any questions?”"
      ],
      correctIndex: 1,
      takeaway: "True understanding is being able to explain it back clearly."
    },
    xp: 150
  },
  {
    id: 23,
    title: "Working Out Loud",
    summary: "Make work visible, narrate it, frame it as contribution.",
    category: "Communication",
    concept: "WOL is the practice of making your work visible and narrating your process. It shifts your mindset from 'doing work' to 'contributing to a network.' It turns your work from a black box into a source of collaboration and feedback.",
    reality: "Before WOL: You spend a week perfecting a complex dashboard in isolation, only to find out on launch day that the team actually needed different metrics.\n\nAfter WOL: Day 1: 'I'm starting on the new dashboard. Here's a rough sketch of the 3 metrics I'm planning to track. Does this align with what you need for the Q3 report?' \n\nYou get immediate course-correction and build buy-in before investing significant effort.",
    quiz: {
      question: "Starting a project by posting a rough wireframe and asking for input is an example of:",
      options: [
        "Showing incompetence.",
        "Making work visible early to get feedback and avoid wasted effort.",
        "Delaying real work."
      ],
      correctIndex: 1,
      takeaway: "Great work does not happen in a silo; invite the organization into your process early."
    },
    xp: 150
  },
  {
    id: 24,
    title: "The ONE Thing",
    summary: "The one task that makes everything else easier or unnecessary.",
    category: "Personal Output",
    concept: "When everything feels urgent, nothing actually is. The ONE Thing forces extreme prioritization through a single Focusing Question: 'What is the ONE Thing I can do, such that by doing it, everything else will be easier or unnecessary?'",
    reality: "It's Monday morning and you have 23 items on your to-do list. You feel overwhelmed.\n\nYou ask the Focusing Question: 'What is the ONE Thing I can do, such that by doing it, everything else will be easier or unnecessary?'\n\nYou realize that finishing the 'Team Migration Plan' is the ONE Thing, because three other departments are currently blocked until that plan is approved. Everything else can wait.",
    quiz: {
      question: "The focusing question “What is the ONE Thing I can do such that by doing it everything else will be easier or unnecessary?” helps you:",
      options: [
        "Create a long to‑do list.",
        "Identify the highest‑leverage task that dominoes others.",
        "Balance work and life."
      ],
      correctIndex: 1,
      takeaway: "Extreme prioritization starts with one question that renders other tasks easier or unnecessary."
    },
    xp: 150
  },
  {
    id: 25,
    title: "Energy-Based Scheduling",
    summary: "Schedule against energy, not just time.",
    category: "Personal Output",
    concept: "Not all hours are created equal. Your cognitive ability fluctuates throughout the day in predictable patterns (Peak, Trough, Rebound). Scheduling against energy is a bio-hack that yields higher quality output in less time.",
    reality: "Lark (Morning Person): \n- Peak 8am-12pm: Deep work, strategy, complex coding.\n- Trough 1pm-3pm: Admin, email, filing expenses.\n- Rebound 3pm-5pm: Creative brainstorming, 1:1 meetings.\n\nOwl (Night Person): \n- Do not schedule your most difficult task at 9am. Use your morning 'trough' for low-cognitive load tasks and save your 'peak' for later in the day.",
    quiz: {
      question: "If your energy peaks at 9‑11 AM and slumps after lunch, you should:",
      options: [
        "Schedule all meetings in the morning.",
        "Schedule deep work in the morning and low‑cognition tasks in the afternoon slump.",
        "Work the same schedule every day regardless of energy."
      ],
      correctIndex: 1,
      takeaway: "Work with your biology, not against it, to maximize quality and minimize burnout."
    },
    xp: 150
  },
  {
    id: 26,
    title: "Parkinson’s Law",
    summary: "Work expands to fill the time available for its completion.",
    category: "Personal Output",
    concept: "A task with a generous deadline will expand in complexity and duration to fill it. Setting shorter, more aggressive (yet realistic) deadlines forces ruthless prioritization and eliminates scope creep.",
    reality: "A one-hour meeting scheduled to 'discuss the project' will almost always fill the full hour with circular talk.\n\nBy intentionally shortening the meeting to 25 minutes, you force a tight agenda: 'What is the current status? What is the single biggest blocker? What is the next immediate action?' The same amount of *useful* work gets done in half the time.",
    quiz: {
      question: "To counteract Parkinson’s Law, you might:",
      options: [
        "Add more people to a project.",
        "Set a shorter, realistic deadline to force focus.",
        "Remove deadlines entirely."
      ],
      correctIndex: 1,
      takeaway: "Constraints create focus. Use tight deadlines to your advantage."
    },
    xp: 150
  },
  {
    id: 27,
    title: "The Two-Minute Rule",
    summary: "If it takes less than 2 minutes, do it now.",
    category: "Personal Output",
    concept: "From David Allen's GTD. If a task takes less than 120 seconds, doing it immediately is more efficient than storing it. Every small, deferred task creates mental overhead and the risk of forgetting.",
    reality: "You receive an email asking for a quick 'yes' or 'no'. Instead of flagging it for 'later' (which adds mental load), you reply immediately. Task done, mental RAM freed.",
    quiz: {
      question: "You receive an email asking for a simple piece of information that will take 90 seconds to provide. You should:",
      options: [
        "Mark it as unread and handle it at the end of the day.",
        "Do it immediately, because deferring creates more overhead.",
        "Ask the sender to find it themselves."
      ],
      correctIndex: 1,
      takeaway: "Stop managing small tasks; just finish them."
    },
    xp: 150
  },
  {
    id: 28,
    title: "Breaking Down the Boxes",
    summary: "Don't let small tasks pile up into a crisis.",
    category: "Personal Output",
    concept: "A companion to the Two-Minute Rule. It visualizes deferred tasks as small boxes that eventually collapse and create a crisis. The cost of 'doing it later' almost always exceeds the cost of 'doing it now.'",
    reality: "A colleague asks for a simple piece of information. You say 'I'll get back to you.' \n\nNow you have an 'open loop' in your brain. If you forget, you look unreliable. If you remember later, you have to switch contexts again to find the info. The 90 seconds it would have taken to reply immediately was far 'cheaper' than the cumulative cost of deferring it.",
    quiz: {
      question: "A 5‑minute task that is repeatedly deferred eventually causes a crisis. This illustrates:",
      options: [
        "The importance of multitasking.",
        "The hidden cost of deferring small tasks – they accumulate friction debt.",
        "The need for better tools."
      ],
      correctIndex: 1,
      takeaway: "Deferred small tasks create friction debt. Pay it off immediately."
    },
    xp: 150
  },
  {
    id: 29,
    title: "Fire and Forget",
    summary: "Operate with high agency and autonomy.",
    category: "Personal Output",
    concept: "A 'Fire and Forget' employee is someone you can give a mission to, not a set of instructions. They absorb the objective, define the plan, execute, and communicate outcomes without needing hand-holding.",
    reality: "Manager: 'Why is traffic low on the new portal?'\n\nLow Agency: 'I don't know, I'll look into it.' (Requires follow-up).\n\nHigh Agency: 'I've already pulled the traffic data for the last 30 days. I'm going to survey 50 users and interview 5 new hires to find the friction points. I'll have a report with 3 concrete recommendations on your desk by Friday.'",
    quiz: {
      question: "When given a mission, a high‑agency “fire and forget” employee would:",
      options: [
        "Wait for detailed instructions.",
        "Absorb the objective, define a plan, execute, and communicate outcomes and risks.",
        "Escalate every decision to the manager."
      ],
      correctIndex: 1,
      takeaway: "High agency is the ultimate career multiplier."
    },
    xp: 150
  },
  {
    id: 30,
    title: "The Don’t-Do-It List",
    summary: "Set proactive boundaries with negative commitments.",
    category: "Personal Output",
    concept: "A 'not-to-do' list is a proactive boundary. It’s a set of explicit commitments to not engage in behaviors that are unproductive or a drain on energy. Positive intentions are weak; negative commitments (rules) are strong.",
    reality: "Your 'Not-To-Do' Rules:\n\n1. 'I will not check Slack or Email before 10 AM to protect my deep-work time.'\n2. 'I will not attend any meeting that does not have a clear, written agenda.'\n3. 'I will not say \"yes\" to a new project request without explicitly identifying which current project I will stop or delay.'",
    quiz: {
      question: "A “don’t‑do” commitment is generally more effective than a positive intention because:",
      options: [
        "It is easier to remember.",
        "It creates a clear boundary and eliminates decision fatigue.",
        "It sounds more impressive."
      ],
      correctIndex: 1,
      takeaway: "Protect your time by deciding what you will NOT do."
    },
    xp: 150
  },
  {
    id: 31,
    title: "Map Then Automate",
    summary: "Simplify the process before you scale it.",
    category: "Personal Output",
    concept: "Automation scales a process. If the process is broken, automation scales the brokenness. The first step is always to map the current workflow, identify waste, and simplify before you consider a tool.",
    reality: "Without Mapping: You buy a complex automation tool that formalizes a broken 6-person review step, resulting in a 3-week cycle that is now 'automated' but still slow.\n\nWith Mapping: You map the process, realize 3 of the reviews add no value, and remove them. You then automate the remaining 3 steps, resulting in a 3-day cycle. You simplified the process before scaling it with technology.",
    quiz: {
      question: "Before buying automation tools, you should first:",
      options: [
        "Calculate the ROI of the tool.",
        "Map the current process to identify waste and simplify.",
        "Train your team on the new tool."
      ],
      correctIndex: 1,
      takeaway: "Simplify before you scale. Don't automate a mess."
    },
    xp: 150
  },
  {
    id: 32,
    title: "Kaizen",
    summary: "Pursue perfection through daily, incremental improvements.",
    category: "Continuous Improvement",
    concept: "Kaizen means 'change for good.' It's the pursuit of perfection through small, daily, low-cost changes made by the people doing the work. Compounded over time, these lead to transformative results. It's a mindset, not a project.",
    reality: "Instead of a massive, risky 6-month intranet redesign, you commit to 30 minutes of Kaizen every Friday.\n\nWeek 1: Fix 5 broken links on the homepage.\nWeek 2: Rename 10 confusing document titles.\nWeek 3: Create a simple 'Start Here' guide for new users.\n\nAfter a year of these tiny, incremental improvements, the intranet is significantly more useful than any 'big bang' redesign could have achieved.",
    quiz: {
      question: "Kaizen emphasizes improvement through:",
      options: [
        "Large, transformational projects led by executives.",
        "Small, daily, incremental changes made by the people doing the work.",
        "Benchmarking against competitors."
      ],
      correctIndex: 1,
      takeaway: "Compounding works for improvement just as it does for money."
    },
    xp: 150
  },
  {
    id: 33,
    title: "Go to Gemba",
    summary: "Go to where the value is created to understand the process.",
    category: "Continuous Improvement",
    concept: "Gemba means 'the real place.' It involves structured observations to see the process without the filters of dashboards or reports. It’s about watching, asking 'what are you working on?', and 'is there anything in your way?'",
    reality: "Dashboard says the new portal is fine. You go to Gemba (new hire orientation). You see a facilitator spend 10 mins explaining it to a confused hire. You see others skip it. The 'territory' is a disaster.",
    quiz: {
      question: "A “Gemba walk” means:",
      options: [
        "Walking through the office to say hello to everyone.",
        "Going to where the work happens to observe processes without filters.",
        "Reviewing process documentation."
      ],
      correctIndex: 1,
      takeaway: "Dashboards are maps; the Gemba is the territory. Go there to see the truth."
    },
    xp: 150
  },
  {
    id: 34,
    title: "The Feedback Flywheel",
    summary: "Build self-reinforcing cycles of improvement.",
    category: "Continuous Improvement",
    concept: "A flywheel is a system where small inputs build momentum. The Feedback Flywheel is a closed loop: Do Work → Get Feedback → Analyze → Improve → Do Better Work. Build feedback mechanisms into everything so the cycle is continuous.",
    reality: "KM Content: Publish article → Include 'Was this helpful?' button → Analyze data weekly → Investigate 'No' answers and improve article → Republish → 'Yes' rate goes up.",
    quiz: {
      question: "To create a feedback flywheel, you need to:",
      options: [
        "Collect feedback annually in a survey.",
        "Embed feedback mechanisms so every output leads to an improvement loop.",
        "Hire an external consultant."
      ],
      correctIndex: 1,
      takeaway: "Turn feedback from a sporadic event into a natural, constant part of work."
    },
    xp: 150
  },
  {
    id: 35,
    title: "The Experiment Log",
    summary: "Combat confirmation bias with documented hypotheses.",
    category: "Continuous Improvement",
    concept: "An experiment log is a tool to combat confirmation bias. By writing down your hypothesis before you run a test, you force yourself to articulate what you believe will happen. It turns guesswork into evidence.",
    reality: "Hypothesis: 'Related articles widget will increase session duration by 20%.' Method: Implement on 10 articles (test) vs 10 unchanged (control). Result: Test group increased 30%. Learning: The widget works.",
    quiz: {
      question: "The primary purpose of an experiment log is to:",
      options: [
        "Prove you were right.",
        "Record hypotheses and results to build evidence and counter confirmation bias.",
        "Document failures to assign blame."
      ],
      correctIndex: 1,
      takeaway: "Documentation is the difference between 'messing around' and 'science'."
    },
    xp: 150
  },
  {
    id: 36,
    title: "Shu-Ha-Ri",
    summary: "A model for skill acquisition: Obey, Detach, Transcend.",
    category: "Continuous Improvement",
    concept: "Shu (Obey): Follow the rules exactly. Ha (Detach): Understand why rules exist and break them intentionally when needed. Ri (Transcend): Rules are internalized; you act intuitively and create new methods.",
    reality: "Writer. Shu: Follows style guide to the letter. Ha: Breaks structure for a technical guide because a step-by-step format is better. Ri: Doesn't need the guide; they are rewriting it for the organization.",
    quiz: {
      question: "A junior employee who follows the template rigidly is in which stage?",
      options: [
        "Ha",
        "Shu",
        "Ri"
      ],
      correctIndex: 1,
      takeaway: "Master the rules before you seek to break them."
    },
    xp: 150
  },
  {
    id: 37,
    title: "Rapid Prototyping",
    summary: "Learn quickly and cheaply with minimum viable prototypes.",
    category: "Continuous Improvement",
    concept: "The goal is to learn quickly and cheaply. Instead of investing months in a polished final product that might be wrong, you build a 'minimum viable prototype' (MVP) to test core assumptions. Errors cost less when found early.",
    reality: "Want a 'knowledge base chatbot.' Rapid way: Week 1: Use a no-code tool to build a clunky bot that just returns search results. Test with 20 power users. They say 'This is slower than search.' Assumption proven wrong cheaply.",
    quiz: {
      question: "Building a rough, low‑fidelity version to test an idea quickly is valuable because:",
      options: [
        "It produces a final product faster.",
        "It allows you to learn cheaply before investing heavily.",
        "It avoids the need for stakeholder approval."
      ],
      correctIndex: 1,
      takeaway: "Fail fast, fail cheap, and learn quickly."
    },
    xp: 150
  },
  {
    id: 38,
    title: "Red Teaming & Dogfooding",
    summary: "Attack your own work and use your own product.",
    category: "Continuous Improvement",
    concept: "Red Teaming: Assign a colleague to find flaws and stress-test assumptions. Dogfooding: Use what you've built yourself. Both methods overcome the 'curse of knowledge' (inability to see work from a novice's perspective).",
    reality: "New IT support form. Red Team: Sales colleague tries to use it and finds 'cost code' confusing. Dogfooding: Project lead tries to request a mouse and finds the 'submit' button buried in a 10-step wizard.",
    quiz: {
      question: "Assigning a colleague to “attack” your work before launch is an example of:",
      options: [
        "Dogfooding.",
        "Red teaming.",
        "Peer review."
      ],
      correctIndex: 1,
      takeaway: "If you don't use your own product, you'll never truly understand your users' pain."
    },
    xp: 150
  },
  {
    id: 39,
    title: "Customer Journey Mapping",
    summary: "Visualize the narrative of a person's experience.",
    category: "Continuous Improvement",
    concept: "A journey map is a visual narrative of an experience. It includes thoughts, feelings, and pain points. It builds empathy and identifies systemic, cross-departmental friction that is invisible in any single silo's dashboard.",
    reality: "Map the journey for a new hire's laptop. Steps: HR ticket → IT order → Asset tag → Ship. Feelings: New hire feels anxiety ('Will I have a computer?'). Pain point: HR and IT systems don't talk to each other.",
    quiz: {
      question: "A journey map includes all of the following EXCEPT:",
      options: [
        "Steps the user takes.",
        "Thoughts and feelings.",
        "Internal team meeting minutes."
      ],
      correctIndex: 2,
      takeaway: "Empathy is a diagnostic tool. See the system through the user's eyes."
    },
    xp: 150
  },
  {
    id: 40,
    title: "The Johari Window",
    summary: "Understand self-awareness and interpersonal dynamics.",
    category: "Continuous Improvement",
    concept: "Four quadrants: Open (Known to self/others), Blind Spot (Known to others only), Hidden (Known to self only), Unknown (Known to no one). Greater effectiveness comes from soliciting feedback and self-disclosure.",
    reality: "You think you're direct (Open). Team thinks you're blunt (Blind Spot). You hide anxiety about a deadline (Hidden). By asking for feedback, you discover the blind spot. By disclosing anxiety, you build trust.",
    quiz: {
      question: "To shrink your “blind spot” (what others see but you don’t), you should:",
      options: [
        "Actively seek specific feedback from colleagues.",
        "Share more about your personal life.",
        "Ignore criticism."
      ],
      correctIndex: 0,
      takeaway: "Expand your 'Open' area through feedback and transparency to build high-trust collaboration."
    },
    xp: 150
  },
  {
    id: 41,
    title: "The Swipe File",
    summary: "A curated collection of exceptional work to learn from.",
    category: "Career Building",
    concept: "A swipe file is a collection of exceptional work—emails, presentations, code—that you collect to learn from their patterns. It’s not about plagiarism; it's about building a library of proven patterns to adapt and remix.",
    reality: "You receive a beautifully written kick-off email. You save it in 'Swipe File / Communication'. Later, you launch an initiative. You use that structure (Problem → Vision → Team → Call to Action) as a template.",
    quiz: {
      question: "You receive an exceptionally well‑structured presentation. To use it as a swipe file entry, you would:",
      options: [
        "Copy the slides and present them as your own.",
        "Save it, analyze its structure, and later adapt that structure for your own presentations.",
        "Share it with your team without comment."
      ],
      correctIndex: 1,
      takeaway: "Don't start from a blank page; borrow the patterns of excellence."
    },
    xp: 150
  },
  {
    id: 42,
    title: "The Parking Lot",
    summary: "A repository for valuable but not immediately actionable ideas.",
    category: "Career Building",
    concept: "A parking lot prevents good ideas from being lost because they don't fit the current scope. It's not a graveyard; it's a nursery for future work. Revisiting it regularly ensures that ideas are executed at the right time.",
    reality: "During a session, someone suggests a 'power user KB'. It's a great idea but not a priority now. The leader parks it in 'Future Initiatives'. Three months later, they review the lot and it's the next project.",
    quiz: {
      question: "A great idea emerges that is out of scope for the current quarter. You should:",
      options: [
        "Drop it because it’s not a priority now.",
        "Capture it in a “parking lot” and revisit it when priorities shift.",
        "Force it into the current plan anyway."
      ],
      correctIndex: 1,
      takeaway: "Good ideas deserve a home, even if they don't have a timeline yet."
    },
    xp: 150
  },
  {
    id: 43,
    title: "The Work-Sharing Buddy",
    summary: "A peer review system for low-stakes feedback.",
    category: "Career Building",
    concept: "A work-sharing buddy is a mutual, low-stakes accountability and feedback partnership with a peer. You exchange work before it goes to high-stakes stakeholders to catch blind spots and improve quality.",
    reality: "You share a proposal with your buddy. They say 'Lead with the recommendation on page 4. Also, quantify the resource impact.' You restructure and add the estimate. You both go into meetings with better materials.",
    quiz: {
      question: "A work‑sharing buddy is different from a mentor because:",
      options: [
        "A buddy gives better feedback.",
        "It is a reciprocal peer relationship focused on catching blind spots before high‑stakes delivery.",
        "A buddy has more authority."
      ],
      correctIndex: 1,
      takeaway: "A second pair of eyes is the simplest form of quality assurance."
    },
    xp: 150
  }
];
