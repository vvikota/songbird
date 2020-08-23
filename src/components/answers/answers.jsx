import React from "react";
import "./answers.css";
import {connect} from "react-redux";
import {getCurrentAnswerVariants} from "../../reducer/main/selectors";
import {getCorrectAnswer} from "../../reducer/main/selectors";
import {getIsCorrectAnswer} from "../../reducer/main/selectors";
import {getIsStartLevel} from "../../reducer/main/selectors";
import {ActionCreator} from "../../reducer/main/main";

import correctSound from '../../assets/sound/correct.mp3';
import wrongSound from '../../assets/sound/wrong.mp3';

class Answers extends React.PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = React.createRef();

    this.state = {
      userAnswer: new Array(this.props.answerVariants.length).fill(`empty`),
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps.isStartLevel === false && this.props.isStartLevel === true){
      const userAnswer = new Array(this.props.answerVariants.length).fill(`empty`);
      this.setState(() => {
        return {userAnswer: userAnswer}
      })
    }
  }

  render() {

    const {
      answerVariants,
      onVariantClick,
      changeAnswerStatus,
      isCorrectAnswer,
      incrementScore,
      onCorrectAnswerClick,
    } = this.props;

    const correctAnswer = this.props.correctAnswer.name;

    const processUserAnswer = (currentAnswer, id) => {
      
      if (!isCorrectAnswer){
        const userAnswer = [...this.state.userAnswer];

        const audio = this._audioRef.current;
        audio.src = currentAnswer === correctAnswer ? correctSound : wrongSound;
        audio.play();

        if(userAnswer[id] === `empty`){
          userAnswer[id] = currentAnswer
          this.setState({userAnswer})
        } 
  
        if(currentAnswer === correctAnswer){
          onCorrectAnswerClick();
          incrementScore(this.state.userAnswer.filter(item => item === `empty`).length - 1)
          changeAnswerStatus()
        }
      } 
      onVariantClick(currentAnswer);
    }

    const classForButton = (id) => (this.state.userAnswer[id] === correctAnswer ? ` correct` : ` incorrect`);

    return (
      <section className="answers">
              <audio ref={this._audioRef} />
              {answerVariants.map((currentAnswer, id) => {
                return (
                  <button 
                    className={`answers-item${(this.state.userAnswer[id] !== `empty`) ? classForButton(id) : '' }`}
                    key={id}
                    onClick={() => processUserAnswer(currentAnswer, id)}
                  >
                    {currentAnswer}
                  </button>
                )
      })}
      </section>
    )  
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  answerVariants: getCurrentAnswerVariants(state),
  correctAnswer: getCorrectAnswer(state),
  isCorrectAnswer: getIsCorrectAnswer(state),
  isStartLevel: getIsStartLevel(state),
});

const mapDispatchToProps = (dispatch) => ({
  onVariantClick: (answer) => {
    dispatch(ActionCreator.chooseVariant(answer))
  },

  changeAnswerStatus: () => {
    dispatch(ActionCreator.changeAnswerStatus())
  },

  incrementScore: (numberOfPoints) => {
    dispatch(ActionCreator.incrementScore(numberOfPoints))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Answers);