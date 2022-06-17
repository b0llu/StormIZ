import "./QuestionPage.css";

export const QuestionPage = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="question-wrapper">
        <h2 className="subtitle">I don't play the odds, I play the man</h2>
        <div className="marking">
          <h2 className="subtitle">
            Question: <span className="bold">1/5</span>
          </h2>
          <h2 className="subtitle">
            Score: <span className="bold">0</span>
          </h2>
        </div>
        <h2 className="question">
          Harvey Specter is considered one of New York's most brilliant
          corporate litigation lawyers, but what's his unusual middle name ?
        </h2>
        <div className="answers-container">
          <p className="answers card-shadow">Michael</p>
          <p className="answers card-shadow">Reginald</p>
          <p className="answers card-shadow">Brandon</p>
        </div>
        <a href="">
          <span className="take-quiz">
            See Result <i className="fas fa-chevron-right"></i>
          </span>
        </a>
      </div>
    </section>
  );
};
