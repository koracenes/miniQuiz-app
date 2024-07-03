import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from "../helpers/QuestionBank";
import { Body, Button } from "../Styles/app.style";

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQiuz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <Body justify="center">
      <h1>Quiz Finished</h1>
      <h3>
        {score}/{Questions.length}
      </h3>
      <Button onClick={restartQiuz}>Restart Quiz</Button>
    </Body>
  );
};

export default EndScreen;
