import React from "react";
import "./answers.css";

const Answers = (props) => {
  const {
    answerVariants,
    onVariantClick
  } = props;
  return <section className="answers">
    {answerVariants.map((currentAnswer, id) => {
      // console.log(currentQuestion.name)

      return <button 
                className="answers-item"
                key={id}
                onClick={() => onVariantClick(currentAnswer)}
              >
              {currentAnswer}
                
              </button>
    })}

    {/* <button className="answers-item">Зяблик</button>
    <button className="answers-item correct">Клёст</button>
    <button className="answers-item incorrect">Горлица</button>
    <button className="answers-item">Дятел</button>
    <button className="answers-item">Удод</button>
    <button className="answers-item">Стриж</button> */}
  </section>
}

export default Answers;