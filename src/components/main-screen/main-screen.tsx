import * as React from "react";
import './main-screen.css';

import CurrentQuestion from "../current-question/current-question";
import Answers from "../answers/answers";
import BirdDescription from "../bird-description/bird-description";
import {getQuestions} from "../../reducer/main/selectors";
import {getCurrenCategory} from "../../reducer/main/selectors";
import {getIsCorrectAnswer} from "../../reducer/main/selectors";
import {getCategories} from "../../reducer/main/selectors";
import {ActionCreator} from "../../reducer/main/main";
import {connect} from "react-redux";
import {DataCategory} from "../../types";

interface Props {
  getFirstCorrectAnswer: (questions: DataCategory[], currentCategory: number) => void;
  currenCategory: number;
  questions: DataCategory[]
  isCorrectAnswer: boolean;
  categories: number[];
  onNextLevelClick: (questions: DataCategory[], currenCategory: number) => void;
  onGameOverClick: () => void;
}

interface State {
  isPlaying: boolean;
  isPlayingVariantAnswer: boolean;
}

class MainScreen extends React.PureComponent<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);

    this.state = {
      isPlaying: false,
      isPlayingVariantAnswer: false,
    };
  }

  componentDidMount(){
    this.props.getFirstCorrectAnswer(this.props.questions, this.props.currenCategory)
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

const mapStateToProps = (state: any, ownProps: any) => Object.assign({}, ownProps, {
  currenCategory: getCurrenCategory(state),
  questions: getQuestions(state),
  isCorrectAnswer: getIsCorrectAnswer(state),
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: any; }) => void) => ({
  
  onNextLevelClick: (dataCurrentQuestion: DataCategory[], currenCategory: number) => {
    dispatch(ActionCreator.changeCurrentCategory())
    dispatch(ActionCreator.loadCorrectAnswer(dataCurrentQuestion, currenCategory + 1))
  },

  getFirstCorrectAnswer: (questions: DataCategory[], currenCategory: number) => {
    dispatch(ActionCreator.loadCorrectAnswer(questions, currenCategory))
  },  
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);