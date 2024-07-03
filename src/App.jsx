import React, { useState, useContext } from "react";
import MainMenu from "./assets/MainMenu";
import Quiz from "./assets/Quiz";
import EndScreen from "./assets/EndScreen";
import { QuizContext } from "./helpers/Contexts";
import "./App.css";

export default function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Quiz App</h1>
        <QuizContext.Provider
          value={{ gameState, setGameState, score, setScore }}
        >
          {/* is the game state ="menu" if yes -> <MainMenu> */}
          {gameState === "menu" && <MainMenu />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "endScreen" && <EndScreen />}
        </QuizContext.Provider>
      </div>
    </>
  );
}
