import React from "react";

function FinishScreen({ points, totalPoints, highscore, dispatch }) {
  const percentage = (points / totalPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage <= 80 && percentage < 100) emoji = "😎";
  if (percentage <= 50 && percentage < 80) emoji = "👍";
  if (percentage <= 0 && percentage < 50) emoji = "😢";
  if (percentage === 0) emoji = "🖐";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> you score <strong>{points}</strong> out of{" "}
        {totalPoints} ({Math.floor(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </>
  );
}

export default FinishScreen;
