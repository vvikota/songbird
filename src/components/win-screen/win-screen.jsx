import React from "react";
import './win-screen.css';

const WinScreen = (props) =>  {
  const {score, maxScore, onNextGameClick,resetGame} = props;

  const startNextGame = () => {
    resetGame()
    onNextGameClick()
  }

  return (
    <section className="win-screen">
      <h1>Поздравляем!</h1>
      <p>Вы прошли викторину и набрали {score} из {maxScore} возможных баллов</p>
      <button
        onClick={startNextGame}
      >Попробовать ещё раз!</button>
    </section>
  )
};

export default WinScreen;