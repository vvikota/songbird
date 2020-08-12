import React from "react";
import './win-screen.css';
import winImg from '../../assets/images/ornitolog.jpg';

const WinScreen = (props) =>  {
  const {score, maxScore, onNextGameClick,resetGame} = props;
  
  const absoluteVictory = score === maxScore;
  // const absoluteVictory = false;

  const startNextGame = () => {
    resetGame()
    onNextGameClick()
  }

  return (
    <section className="win-screen">
      {absoluteVictory ? 
        <>
          <h1>Поздравляем!</h1>
          <span>Абсолютная победа!</span>
          <p>Вы прошли викторину и набрали максимальное колличество возможных баллов {score} из {score}</p>
          <img src={winImg} alt="ornitolog" className="win-image"/>
        </> : 
        <>
          <h1>Поздравляем!</h1>
          <p>Вы прошли викторину и набрали {score} из {maxScore} возможных баллов</p>
          <button
            onClick={startNextGame}
          >Попробовать ещё раз!</button>
        </>
      }
      
    </section>
  )
};

export default WinScreen;