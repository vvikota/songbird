import React from "react";
import './win-screen.css';
import winImg from '../../assets/images/ornitolog.jpg';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/main/main";
import {getScore} from "../../reducer/main/selectors";
import {getCategories} from "../../reducer/main/selectors";

const WinScreen = (props) =>  {
  const {
    score,
    // maxScore,
    onNextGameClick,
    resetGame,
    categories,
  } = props;
  
  const maxScore = categories.length * (categories.length - 1);
  const absoluteVictory = score === maxScore;

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

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  score: getScore(state),
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => {
    dispatch(ActionCreator.resetGame())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WinScreen);