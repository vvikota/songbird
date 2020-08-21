import React from "react";
import './main-screen.css';

import Header from '../header/header.jsx';
import CurrentQuestion from "../current-question/current-question.jsx";
import Answers from "../answers/answers.jsx";
import BirdDescription from "../bird-description/bird-description.jsx";
import WinScreen from "../win-screen/win-screen";

class MainScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      isPlayingVariantAnswer: false,
      isGameOver: false,
    };
  }

  render() {
    const {
      isPlaying,
      isPlayingVariantAnswer, 
      isGameOver,
    } = this.state;
    
    const {
      currenCategory,
      questions,
      isCorrectAnswer,
      categories,
      onNextLevelClick,
    } = this.props;

    const activeClassForButton = isCorrectAnswer ? ` next-level-button--active` : ``;
    const lastQuestion = (categories.length - 1) === currenCategory;
    const islastCorrectAnswer = lastQuestion && isCorrectAnswer;

    const onButtonclick = () => {
      if(islastCorrectAnswer){
        this.setState({isGameOver: true})
      } else {
        return isCorrectAnswer ? onNextLevelClick(questions, currenCategory) : null
      }
    }
   
    return <>
      <Header/>

      {!isGameOver ? 
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
            className={`next-level-button` + activeClassForButton}
            onClick={onButtonclick}
          >  
          {islastCorrectAnswer ? `Закончить игру` : `Следующий вопрос`}
          </button>
        </div> : 

        <WinScreen 
          onNextGameClick={() => 
            this.setState({isGameOver: false})
          }
        />
      }
    </>
  }

  componentDidMount(){
    this.props.getFirstCorrectAnswer(this.props.questions, this.props.currenCategory)
  }

  componentDidUpdate(prevProps, prevState) { 
    if(prevState.isGameOver === true && this.state.isGameOver === false){
      this.props.getFirstCorrectAnswer(this.props.questions, this.props.currenCategory)
    }
  }
}

export default MainScreen;