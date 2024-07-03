import React, { useState, useContext } from "react";
import { Questions } from "../helpers/QuestionBank";
import { QuizContext } from "../helpers/Contexts";
import { Body, Button, Options } from "../Styles/app.style";

const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <Body justify="space-between">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <Options>
        <Button onClick={() => setOptionChosen("a")}>
          {Questions[currentQuestion].optionA}
        </Button>
        <Button onClick={() => setOptionChosen("b")}>
          {Questions[currentQuestion].optionB}
        </Button>
        <Button onClick={() => setOptionChosen("c")}>
          {Questions[currentQuestion].optionC}
        </Button>
        <Button onClick={() => setOptionChosen("d")}>
          {Questions[currentQuestion].optionD}
        </Button>
      </Options>

      {currentQuestion == Questions.length - 1 ? (
        <Button onClick={finishQuiz}> Finish Quiz</Button>
      ) : (
        <Button onClick={nextQuestion}> Next Question</Button>
      )}
    </Body>
  );
};

export default Quiz;
