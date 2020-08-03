import React from "react";
import "./answers.css";

class Answers extends React.PureComponent {
  constructor(props) {
    super(props);

    const {answerVariants} = this.props;

    this.state = {
      userAnswer: new Array(answerVariants.length).fill(`empty`),
      isNeedUpdate: false,
    };
  }

  componentDidUpdate(){

    if(this.props.isStartLevel === true && this.state.isNeedUpdate === true){
      const userAnswer = new Array(this.props.answerVariants.length).fill(`empty`);

      this.setState((state) => {
        return {isNeedUpdate: false}
      });

      this.setState((state) => {
        return {userAnswer: userAnswer}
      })
    }
  }

  render() {
    const {
      answerVariants,
      onVariantClick,
      correctAnswer,
      changeAnswerStatus,
      isCorrectAnswer
    } = this.props;
    // console.log(correctAnswer)

    const processUserAnswer = (currentAnswer, id) => {
      if (!isCorrectAnswer){
        const userAnswer = [...this.state.userAnswer];

        if(userAnswer[id] === `empty`){
          userAnswer[id] = currentAnswer
          this.setState({userAnswer})
          this.setState((state) => {
            return {isNeedUpdate: true}
          })
        } 
  
        if(currentAnswer === correctAnswer){
          changeAnswerStatus()
        } 
        onVariantClick(currentAnswer);
      }
    }

    const classForButton = (id) => {
      if (this.state.userAnswer[id] === `empty`){
        return ``
      } else {
        return this.state.userAnswer[id] === correctAnswer ? ` correct` : ` incorrect`
      }
    }

    return <section className="answers">
    {answerVariants.map((currentAnswer, id) => {
      return <button 
                className={`answers-item` + classForButton(id)}
                key={id}
                onClick={() => processUserAnswer(currentAnswer, id)}
              >
              {currentAnswer}
                
              </button>
    })}
  </section>
  }
}

export default Answers;