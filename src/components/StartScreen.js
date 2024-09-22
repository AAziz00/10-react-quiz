// import React from "react";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn brn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        lets start
      </button>
    </div>
  );
}

export default StartScreen;
