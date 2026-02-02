import { useState } from "react";

function Result({ score }) {
  const [jerk, setJerk] = useState(false);

  const handleNoClick = () => {
    setJerk(true);
    setTimeout(() => setJerk(false), 400); // reset animation
  };

  return (
    <div className="result-wrapper">
      <div className="result-card">
        <h2 className="score">Your score is {score}</h2>

        <p className="subtitle">
          Regardless, you are eligible for being my valentine.
        </p>

        <p className="question">Will you be my valentine Harshululu?</p>

        <div className="buttons">
          <button className="btn yes">Yes</button>
          <button
            className={`btn no ${jerk ? "jerk" : ""}`}
            onClick={handleNoClick}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
