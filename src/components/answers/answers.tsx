import * as React from "react";
import {createRef} from 'react';
import "./answers.css";
import {connect} from "react-redux";
import {getCurrentAnswerVariants} from "../../reducer/main/selectors";
import {getCorrectAnswer} from "../../reducer/main/selectors";
import {getIsCorrectAnswer} from "../../reducer/main/selectors";
import {getIsStartLevel} from "../../reducer/main/selectors";
import {ActionCreator} from "../../reducer/main/main";
import {CategoryQuestions} from "../../types";

const correctSound = require ('../../assets/sound/correct.mp3');
const wrongSound = require('../../assets/sound/wrong.mp3');

interface Props {
  answerVariants: string[];
  changeAnswerStatus: () => void;
  correctAnswer: CategoryQuestions;
  incrementScore: (userAnswer: number) => void;
  isCorrectAnswer: boolean;
  isStartLevel: boolean;
  onCorrectAnswerClick: () => void;
  onVariantClick: (currentAnswer: string) => void;
}

interface State {
  userAnswer: string[];
}

class Answers extends React.PureComponent<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);

    this._audioRef = React.createRef();

    this.state = {
      userAnswer: new Array(this.props.answerVariants.length).fill(`empty`),
    };
  }

  private _audioRef = createRef<HTMLAudioElement>()

  componentDidUpdate(prevProps: { isStartLevel: boolean; }){
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
    const processUserAnswer = (currentAnswer: string, id: number) => {
      
      if (!isCorrectAnswer){
        const userAnswer = [...this.state.userAnswer];
        const audio = this._audioRef.current;

        if(audio){
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
      } 
      onVariantClick(currentAnswer);
    }

    const classForButton = (id: number) => (this.state.userAnswer[id] === correctAnswer ? ` correct` : ` incorrect`);

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

const mapStateToProps = (state: any, ownProps: any) => Object.assign({}, ownProps, {
  answerVariants: getCurrentAnswerVariants(state),
  correctAnswer: getCorrectAnswer(state),
  isCorrectAnswer: getIsCorrectAnswer(state),
  isStartLevel: getIsStartLevel(state),
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload?: any; }) => void) => ({
  onVariantClick: (answer: string) => {
    dispatch(ActionCreator.chooseVariant(answer))
  },

  changeAnswerStatus: () => {
    dispatch(ActionCreator.changeAnswerStatus())
  },

  incrementScore: (numberOfPoints: number) => {
    dispatch(ActionCreator.incrementScore(numberOfPoints))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Answers);