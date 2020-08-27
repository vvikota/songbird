import * as React from "react";
import './win-screen.css';
import winImg from '../../assets/images/winner.jpg';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/main/main";
import {getScore} from "../../reducer/main/selectors";
import {getCategories} from "../../reducer/main/selectors";

interface WinScreenProps { 
  score: number
  onNextGameClick: () => void
  resetGame: () => void
  categories: string[]
}

const WinScreen = (props: WinScreenProps) =>  {
  const {
    score,
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
      <h1>Поздравляем!</h1>
      {absoluteVictory ? (
        <>
          <span>Абсолютная победа!</span>
          <p>Вы прошли викторину и набрали максимальное колличество возможных баллов {score} из {score}</p>
          <img src={winImg} alt="ornitolog" className="win-image"/>
        </>
      ) : (
        <>
          <p>Вы прошли викторину и набрали {score} из {maxScore} возможных баллов</p>
          <button
            onClick={startNextGame}
          >Попробовать ещё раз!</button>
        </>
      )}
    </section>
  )
};

const mapStateToProps = (state: any, ownProps: any) => Object.assign({}, ownProps, {
  score: getScore(state),
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => void) => ({
  resetGame: () => {
    dispatch(ActionCreator.resetGame())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WinScreen);