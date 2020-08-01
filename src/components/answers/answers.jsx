import React from "react";
import "./answers.css";

const Answers = (props) => {
  const {dataCurrentQuestions} = props;
  return <section className="answers">
    {dataCurrentQuestions.map((currentQuestion, id) => {

      return <button 
                className="answers-item"
                key={id}>
                {currentQuestion.name}
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