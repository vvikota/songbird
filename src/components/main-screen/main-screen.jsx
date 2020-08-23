import React from "react";
import './main-screen.css';

import CurrentQuestion from "../current-question/current-question.jsx";
import Answers from "../answers/answers.jsx";
import BirdDescription from "../bird-description/bird-description.jsx";
import {getQuestions} from "../../reducer/main/selectors";
import {getCurrenCategory} from "../../reducer/main/selectors";
import {getIsCorrectAnswer} from "../../reducer/main/selectors";
import {getCategories} from "../../reducer/main/selectors";
import {ActionCreator} from "../../reducer/main/main";
import {connect} from "react-redux";

class MainScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      isPlayingVariantAnswer: false,
    };
  }

  componentDidMount(){
    this.props.getFirstCorrectAnswer(this.props.questions, this.props.currenCategory)
  }

  componentDidUpdate(prevProps, prevState) { 
    if(prevState.isGameOver === true && this.state.isGameOver === false){
      this.props.getFirstCorrectAnswer(this.props.questions, this.props.currenCategory)
    }
  }

  render() {
    const {
      isPlaying,
      isPlayingVariantAnswer, 
    } = this.state;
    
    const {
      currenCategory,
      questions,
      isCorrectAnswer,
      categories,
      onNextLevelClick,
      onGameOverClick,
    } = this.props;

    const islastCorrectAnswer = ((categories.length - 1) === currenCategory) && isCorrectAnswer;

    const onButtonclick = () => {
      if(islastCorrectAnswer){
        onGameOverClick();
        this.setState({isGameOver: true})
      } else {
        return isCorrectAnswer ? onNextLevelClick(questions, currenCategory) : null
      }
    }
   
    return (
      <>
        <div>
          <CurrentQuestion 
            isPlaying = {isPlaying}
            onPlayButtonClick = {() => this.setState({isPlaying: !isPlaying})}
          />
          <section className="answer-section">
            <Answers 
              onCorrectAnswerClick={() => this.setState({isPlaying: false})}
            />
            <BirdDescription 
              isPlaying = {isPlayingVariantAnswer}
              onPlayButtonClick = {() =>
                this.setState({isPlayingVariantAnswer: !isPlayingVariantAnswer})}
            />
          </section>
          <button
            className={`next-level-button${isCorrectAnswer ? ' next-level-button--active' : ''}`}
            onClick={onButtonclick}
          >  
          {islastCorrectAnswer ? `Закончить игру` : `Следующий вопрос`}
          </button>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currenCategory: getCurrenCategory(state),
  questions: getQuestions(state),
  isCorrectAnswer: getIsCorrectAnswer(state),
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  
  onNextLevelClick: (dataCurrentQuestion, currenCategory) => {
    dispatch(ActionCreator.changeCurrentCategory())
    dispatch(ActionCreator.loadCorrectAnswer(dataCurrentQuestion, currenCategory + 1))
  },

  getFirstCorrectAnswer: (questions, currenCategory) => {
    dispatch(ActionCreator.loadCorrectAnswer(questions, currenCategory))
  },  
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);