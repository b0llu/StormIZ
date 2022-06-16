import { Link } from "react-router-dom";
import "./RuleModal.css";

export const RuleModal = ({ showRules, setShowRules }: any) => {
  return (
    <section style={{ marginTop: "10rem" }}>
      <h2 className="subtitle">Rules</h2>
      <div className="rule-container">
        <h2 className="rule">1. You cannot skip a question</h2>
        <h2 className="rule">2. For 1 question, you will get 4 options</h2>
        <h2 className="rule">3. Right answer will fetch you 4 point</h2>
        <h2 className="rule">
          4. Points will not be deducted for wrong answer.
        </h2>
        <div className="action-btns">
          <Link to={"/"}>
            <span className="take-quiz-rule">
              <i className="fas fa-chevron-left"></i> Go Back
            </span>
          </Link>
          <a onClick={() => setShowRules((prev: boolean) => !prev)}>
            <span className="take-quiz-rule">
              Take Quiz <i className="fas fa-chevron-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
