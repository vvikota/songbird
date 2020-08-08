import React from "react";
import './win-screen.css';

const WinScreen = (props) =>  {
  const {score, maxScore} = props;

  return (
    <section className="win-screen">
      <h1>Поздравляем!</h1>
      <p>Вы прошли викторину и набрали {score} из {maxScore} возможных баллов</p>
      <button>Попробовать ещё раз!</button>
    </section>
  )
};

export default WinScreen;