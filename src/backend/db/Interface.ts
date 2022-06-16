export interface Mcqs {
  _id: string;
  question: string;
  options: string[];
  answer: string;
};

export interface Quizzes {
  _id: string;
  title: string;
  totalScore: number;
  mcqs: Mcqs[];
  categoryName: string;
};

export interface Categories {
  _id: string;
  categoryName: string;
  description: string;
};

export interface Users {
  _id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};
