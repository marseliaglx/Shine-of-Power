export interface Framework {
  id: number;
  title: string;
  summary: string;
  category: string;
  concept: string;
  reality: string;
  quiz: {
    question: string;
    options: string[];
    correctIndex: number;
    takeaway: string;
  };
  xp: number;
}

export type AppView = 'home' | 'quest-list' | 'quest-detail' | 'quiz' | 'success';
