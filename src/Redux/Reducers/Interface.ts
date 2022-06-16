export interface Categories {
  id: string;
  _id: string;
  categoryName: string;
  description: string;
}

export interface Quizes {
  _id: string;
  title: string;
  totalScore: number;
  mcqs: [
    {
      _id: string;
      question: string;
      options: string[];
      answer: string;
    }
  ];
  categoryName: string;
}

export interface QuizState {
  categories: Categories[];
  quizes: Quizes[];
}
