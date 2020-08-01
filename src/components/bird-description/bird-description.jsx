import React from "react";
import "./bird-description.css";

const BirdDescription = (props) => {
  const {currentAnswerData} = props;
  console.log(currentAnswerData)

  return <section className="bird-description">
    <div className="bird-description__top">
      
      <img
        src={currentAnswerData.image}
        alt="bird"
        className="bird-description__image"
      />  
      
      <div className="bird-description__name-block">
        <div className="bird-description__title-wrapper">
          <h3 className="bird-description__title">
            {currentAnswerData.name}
          </h3>
        </div>
        
        <div className="bird-description__latin-wrapper">
          <span className="bird-description__latin">
            {currentAnswerData.species}
          </span>
        </div>

        <div className="bird-description__player">Player</div>
      </div>
    </div>
    <div className="bird-description__text">
      {currentAnswerData.description}
    </div>
  </section>
}

export default BirdDescription;