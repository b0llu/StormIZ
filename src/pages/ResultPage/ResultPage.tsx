import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ResultPage.css";

export const ResultPage = () => {
  const { state }: any = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="result-wrapper">
        <h2 className="subtitle">Result</h2>
        <h2 className="subtitle">{`Final Score : ${state?.score}/${state?.quiz?.totalScore}`}</h2>
        {state?.quiz?.mcqs?.map(
          (question: {
            answer: string;
            question: string;
            _id: string;
            options: [string];
          }) => {
            return (
              <div style={{ width: "100%" }} key={question._id}>
                <h2 className="question">{question.question}</h2>
                <div className="answers-container">
                  {question?.options?.map((option: string) => {
                    return (
                      <p
                        key={option}
                        className={`answers card-shadow ${
                          question.answer === option && "correct"
                        }`}
                      >
                        {option}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          }
        )}
        <span onClick={() => navigate("/")} className="result-btn">
          <i className="fas fa-chevron-left"></i> Back Home
        </span>
      </div>
    </section>
  );
};
