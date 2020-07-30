import React from "react";
import "./answers.css";

const Answers = () => {
  return <section className="answers">
    <button className="answers-item">Зяблик</button>
    <button className="answers-item correct">Клёст</button>
    <button className="answers-item incorrect">Горлица</button>
    <button className="answers-item">Дятел</button>
    <button className="answers-item">Удод</button>
    <button className="answers-item">Стриж</button>
  </section>
}

export default Answers;