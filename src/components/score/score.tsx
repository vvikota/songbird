import * as React from 'react';
import './score.css';

interface scoreRowInterface {
  name: string,
  score: number
}

const Score = () => {
  const scoreList: scoreRowInterface[] = [
    {name: 'vi', score: 1500},
    {name: 'alex', score: 500},
    {name: 'gena', score: 2500},
    {name: 'lena', score: 4500},
  ]

  return (
    <section className='score'> 
      <h2>Score</h2>
      <ul>
      {scoreList.map(item => {
        return <li>
          <span className="userName">{item.name}: </span>
          <span className="userScore">{item.score}</span>
        </li>
      })}
      </ul>
    </section>
  )
}

export default Score;