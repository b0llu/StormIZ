import { useState } from "react";
import { useParams } from "react-router-dom";
import { RootState } from "Redux/Store";
import { useAppSelector } from "Redux/Type";
import "./CategoryPage.css";

type QuizParams = {
  category: string;
};

export const CategoryPage = () => {
  const { category } = useParams<QuizParams>();
  const quizes = useAppSelector((state: RootState) => state.quiz.quizes);

  return (
    <section>
      <h2 className="subtitle">{category}</h2>
      <div className="quiz-item">
        {quizes
          .filter((quiz) => quiz.categoryName === category)
          .map((quiz) => {
            return (
              <div
                key={quiz._id}
                className="card-container product-card card-shadow"
              >
                <div className="quiz-img">
                  <img
                    className="card-img"
                    src={quiz.image}
                    alt="Quiz Image"
                  />
                </div>
                <h1 className="card-subtitle">{quiz.title}</h1>
                <h2 className="card-title">{quiz.aboutQuiz}</h2>
                <p className="card-description">
                  {quiz.mcqs.length} Questions
                  <a href="../rule-page/rule.html">
                    <span className="take-quiz">
                      Take Quiz <i className="fas fa-chevron-right"></i>
                    </span>
                  </a>
                </p>
              </div>
            );
          })}
        ;
      </div>
    </section>
  );
};
