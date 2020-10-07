import * as React from 'react';
import './score.css';
import {connect} from "react-redux";
import {getGameScore} from "../../reducer/main/selectors";
import {scoreRowInterface, stateInterface} from "../../types";
import {ActionCreator} from "../../reducer/main/main";

interface scoreProps {
  gameScore: scoreRowInterface[]
}

const Score = (props: scoreProps) => {
  const {gameScore} = props;

  return (
    <section className="score"> 
      <div className="scoreContent">
      <h2>Score:</h2>
      <ul>
      {gameScore.map((item, key) => {
        return <li key={key}>
          <span className="userName">{item.name}: </span>
          <span className="userScore">{item.score}</span>
        </li>
      })}
      </ul>
      <button>Начать сначала</button>
      </div>
    </section>
  )
}

const mapStateToProps = (state: stateInterface) => (
  {gameScore : getGameScore(state)}
);

const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => void) => ({
  changeScoreShowStatus: () => {
    dispatch(ActionCreator.changeScoreShowStatus())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);


