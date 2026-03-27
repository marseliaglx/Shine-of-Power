import { Framework } from './types';

export const FRAMEWORKS: Framework[] = [
  {
    id: 1,
    title: "Inversion",
    summary: "Think about how to fail, then avoid those things.",
    category: "Clear Thinking",
    concept: "Originating from Stoic philosophy and popularized by Charlie Munger, Inversion is the practice of approaching a problem from the opposite end. Instead of asking how to achieve success, you ask how to guarantee failure. This bypasses optimism bias and forces you to confront the obstacles you would otherwise avoid. It is a form of risk management before you even define the project.",
    reality: "For a knowledge management initiative, asking 'How do we ensure no one ever uses this?' yields concrete insights: Make the search useless. Require three logins. Fill it with outdated content. This creates a 'stop-doing' list that is more valuable than a 'start-doing' list.",
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
    reality: "A company decides to 'democratize content creation' (First-order: more content!). Second-order: Every employee publishes unvetted content. Third-order: Customers find conflicting information and lose trust. Fourth-order: The KM team is overwhelmed cleaning up the mess.",
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
    reality: "A 'Velocity' chart in Agile is a map. A team fixated on it might inflate story points to maintain a line on a graph. The real territory is sustainable delivery and quality—none of which are captured in a single velocity metric.",
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
    reality: "Your manager rejects your proposal without detailed feedback. Instead of thinking 'They don't trust me,' consider they might be stressed, read it quickly between meetings, or simply didn't understand the key benefit.",
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
    reality: "When someone is rude in a meeting, imagine their 'boat' is empty—perhaps they are dealing with a personal crisis or are just overwhelmed. Your next step shifts from defensive justification to a collaborative inquiry.",
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
    reality: "In colonial India, a bounty was placed on cobra skins to reduce the population. People started breeding cobras to collect the bounty. When the bounty was cancelled, breeders released the cobras, making the population higher than before.",
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
    reality: "A company wants to reduce 'time-to-hire'. Recruiters start filling roles with the first minimally viable candidate. Quality drops and attrition increases. A better system measures 'time-to-hire' alongside '6-month retention rate'.",
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
    reality: "Entry: 'Confidence 80%. Reason: Standard taxonomy will improve findability. Risks: Migration effort is underestimated.' Post-Mortem: Migration was a nightmare. You see your diagnosis was correct, but your risk assessment was wrong. Your learning is 'my risk estimates are systematically too optimistic.'",
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
    reality: "Asking for a promotion. Define: 'They say no, I look foolish.' Prevent: 'Build a business case with data.' Repair: 'Ask for feedback on the gap, create a 6-month plan.' Cost of Inaction: 'Resentment, stagnant skills, and a year of missed salary.'",
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
    reality: "For a 'Global SharePoint Migration.' Pre-mortem: 'We failed because we told everyone it would be the same but better. When it wasn't, trust was broken.' Outcome: The focus shifts to 'How do we handle the delta between the same and the better?'",
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
    reality: "Problem: Wrong article went live. Why? Writer used outdated draft. Why? Folder structure is a mess. Why? No one owned the IA for 18 months. Why? KM role was vacant. Why? KM seen as 'nice-to-have'. Solution: Backfill KM role with a clear mandate.",
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
    reality: "Problem: AI tool is hallucinating. Solution A: Mandatory human-fact-checking. Solution B: Switch to new vendor. Solution C: Implement prompt-engineering guardrails. Recommendation: Start with Solution C, as it balances speed, cost, and risk.",
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
    reality: "Deciding on a new PM tool. D (Driver): PMO Lead. A (Approver): Head of Engineering (One person, final call). C (Contributors): Senior dev, senior ops, team lead. I (Informed): Entire engineering org.",
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
    reality: "Type 2: Which logo variant to use for the new portal? Pick one. If it doesn't resonate, change it. Type 1: Restructuring your team from a centralized to a federated model. This requires months of consultation and planning.",
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
    reality: "Evaluating an AI search engine. K: Current search sucks, vendor claims 99% accuracy. W: How does it handle our jargon? What's the real accuracy? L: 95% accurate for top queries, but needs a synonym glossary for jargon.",
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
    reality: "Includes: Communication preferences ('Slack for quick questions'), Work Style ('I batch meetings on Tuesdays'), Feedback ('I value direct, kind feedback'), and Pet Peeves ('Messages that just say Hi and wait for a reply').",
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
    reality: "Action: Please approve the €15k budget for training by Friday. Context: The training will upskill 20 team members on the new tool, projected to reduce errors by 30%. Details: Vendor discount expires Friday.",
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
    reality: "Structure: The Situation (1 sentence), The Complication (1 sentence), The Question (1 sentence), The Answer (1 paragraph), Key Supporting Points (3-5 bullets), Risks & Mitigations (1-2 bullets).",
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
    reality: "Structure: This Week's Wins (Link to work), Next Week's Focus, Blockers/Help Needed (Most important), Learnings/Metrics. No one can accuse you of not working when your contributions are documented.",
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
    reality: "Bad: 'I added 50 new articles to the KB.' Good: 'My work to streamline the KB is on track to cut search time by 50%, freeing up 100 hours of selling capacity per quarter. What other friction points should I tackle?'",
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
    reality: "To a Red: 'It sounds like you see a big problem. What would need to change for you to support this? Can you propose an alternative?' This forces them to turn criticism into a constructive proposal.",
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
    reality: "Instead of 'Do you understand?', ask: 'Walk me through the steps you'd take when you get a product update notification tomorrow. Where do you go first?' Their struggle reveals exactly where the explanation is broken.",
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
    reality: "Before WOL: You spend a week perfecting a dashboard in isolation. After WOL: Day 1: 'I'm starting on a dashboard. Who uses this data? What's the most important metric?' You get immediate input and build buy-in.",
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
    reality: "Monday morning, 23 items on your to-do list. You ask the Focusing Question and realize finishing the team migration plan is the ONE Thing, because three other departments are blocked until it is done.",
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
    reality: "Lark (morning person): Peak 8-12 (Deep work/strategy). Trough 1-3 (Admin/email). Rebound 3-5 (Creative/1:1s). Owl: Do not schedule deep work at 9am; use mornings for low-cognitive load tasks.",
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
    reality: "A one-hour meeting to 'discuss the project' will fill the hour. By shortening it to 25 minutes, you force an agenda: 'What's the status? What's the blocker? What's the next action?' The necessary work gets done.",
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
    reality: "A colleague asks for one piece of info. You say 'I'll get back to you.' Now you have an open loop. If you forget, you look unreliable. The 90 seconds it would have taken to reply immediately was far cheaper.",
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
    reality: "Manager: 'Why is traffic low on the portal?' High Agency: 'I'll pull traffic data, survey 50 people, and interview 5 new hires. I'll have a report with 3 recommendations by Friday.'",
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
    reality: "Rules: 'I will not check Slack before 10 AM.' 'I will not attend any meeting without an agenda.' 'I will not say yes to a new request without saying no to something else.'",
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
    reality: "Without Mapping: Buy a tool that formalizes a 6-person review step (3-week cycle). With Mapping: Remove redundant reviews and non-value-adding steps. Automate the remaining 3 steps (3-day cycle).",
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
    reality: "Instead of a 6-month intranet redesign, spend 30 minutes every Friday. Week 1: Fix 5 broken links. Week 2: Rename confusing titles. Week 3: Create a 'start here' page. After a year, the intranet is unrecognizable.",
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
