import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import { Body, Button } from "../Styles/app.style";

const MainMenu = () => {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <>
      <Body justify="center">
        <Button
          onClick={() => {
            setGameState("quiz");
          }}
        >
          Start Quiz
        </Button>
      </Body>
    </>
  );
};

export default MainMenu;
