import { Loader } from "components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getQuiz } from "Redux/Reducers/quizSlice";
import { RootState } from "Redux/Store";
import { useAppDispatch, useAppSelector } from "Redux/Type";
import "./QuestionPage.css";

type QuizParams = {
  quizId: string;
};

export const QuestionPage = () => {
  const { quizId } = useParams<QuizParams>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>("");

  useEffect(() => {
    quizId && dispatch(getQuiz(quizId));
  }, []);

  const quiz = useAppSelector((state: RootState) => state.quiz.quiz);
  const loading = useAppSelector((state: RootState) => state.quiz.loading);

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <div className="question-wrapper">
          <h2 className="question-subtitle">{quiz.title}</h2>
          <div className="cta-btns">
            <h1 onClick={() => navigate("/")} className="exit">
              Quit
            </h1>
            {questionNumber + 1 === quiz?.mcqs?.length ? (
              <h1
                onClick={() => navigate("/result", { state: { quiz, score } })}
                className="next"
              >
                Result
              </h1>
            ) : (
              <h1
                onClick={() => {
                  setQuestionNumber((prev: number) => prev + 1);
                  setUserAnswer("");
                }}
                className="next"
              >
                Next
              </h1>
            )}
          </div>
          <div className="marking">
            <h2 className="subtitle">
              Question:{" "}
              <span className="bold">
                {questionNumber + 1}/{quiz?.mcqs?.length}
              </span>
            </h2>
            <h2 className="subtitle">
              Score: <span className="bold">{score}</span>
            </h2>
          </div>
          <h2 className="question">
            {Object.keys(quiz).length !== 0 &&
              quiz.mcqs[questionNumber]?.question}
          </h2>
          <div className="answers-container">
            {Object.keys(quiz).length !== 0 &&
              quiz?.mcqs[questionNumber]?.options.map((option: string) => {
                return (
                  <p
                    key={option}
                    className={`answers card-shadow ${
                      userAnswer &&
                      Object.keys(quiz).length !== 0 &&
                      quiz.mcqs[questionNumber].answer === option
                        ? "correct"
                        : userAnswer === option && "wrong"
                    }`}
                    onClick={() => {
                      if (!userAnswer) {
                        setUserAnswer(option);
                        if (
                          Object.keys(quiz).length !== 0 &&
                          quiz.mcqs[questionNumber].answer === option
                        ) {
                          setScore((score: number) => score + 4);
                        }
                      }
                    }}
                  >
                    {option}
                  </p>
                );
              })}
          </div>
        </div>
      )}
    </section>
  );
};
