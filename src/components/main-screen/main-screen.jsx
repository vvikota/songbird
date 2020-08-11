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
      questions,
      currenCategory,
      score,
      isCorrectAnswer,
      isStartLevel,
      onVariantClick,
      correctAnswer,
      categories,
      answerVariants,
      activeAnswerData,
      onNextLevelClick,
      changeAnswerStatus,
      incrementScore,
      resetGame,
    } = this.props;

    const audio = correctAnswer.audio
    const activeClassForButton = isCorrectAnswer ? ` next-level-button--active` : ``;
    const maxScore = categories.length * (categories.length - 1);
    const lastQuestion = (categories.length - 1) === currenCategory;

    // console.log(lastQuestion)

    return <>
      <Header 
        categories={categories}
        currenCategory={currenCategory}  
        score={score}
      />

      {!isGameOver ? 
        <div>
          <CurrentQuestion 
            correctAnswer={correctAnswer}
            isCorrectAnswer={isCorrectAnswer}
            isPlaying = {isPlaying}
            onPlayButtonClick = {() => this.setState({isPlaying: !isPlaying})}
            isStartLevel={isStartLevel}
            src = {audio}
          />
          <section className="answer-section">
            <Answers 
              answerVariants={answerVariants}
              onVariantClick={onVariantClick}
              correctAnswer={correctAnswer.name}
              changeAnswerStatus={changeAnswerStatus}
              isStartLevel={isStartLevel}
              isCorrectAnswer={isCorrectAnswer}
              incrementScore={incrementScore}
              lastQuestion={lastQuestion}
              onLastQuestionClick={() => this.setState({isGameOver: true})}
            />
            <BirdDescription 
              activeAnswerData={activeAnswerData}
              isStartLevel={isStartLevel}
              isPlaying = {isPlayingVariantAnswer}
              onPlayButtonClick = {() =>
                this.setState({isPlayingVariantAnswer: !isPlayingVariantAnswer})}
            />
          </section>
          <button
            className={`next-level-button` + activeClassForButton}
            onClick={isCorrectAnswer ? () => onNextLevelClick(questions, currenCategory) : null}
          >
            Next level
          </button>
        </div> : 

        <WinScreen 
          score={score}
          maxScore={maxScore}
          onNextGameClick={() => 
            this.setState({isGameOver: false})
          }
          resetGame={resetGame}
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