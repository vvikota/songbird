import React from "react";
import "./bird-description.css";

const BirdDescription = (props) => {
  const {activeAnswerData, isStartLevel} = props;
  // console.log(props)

  return <section className="bird-description">
    {
      isStartLevel ?
        <p>Послушайте плеер. <br/> Выберите птицу из списка</p> : 
        <>
          <div className="bird-description__top">
      
            <img
              src={activeAnswerData.image}
              alt="bird"
              className="bird-description__image"
            />  
            
            <div className="bird-description__name-block">
              <div className="bird-description__title-wrapper">
                <h3 className="bird-description__title">
                  {activeAnswerData.name}
                </h3>
              </div>
              
              <div className="bird-description__latin-wrapper">
                <span className="bird-description__latin">
                  {activeAnswerData.species}
                </span>
              </div>

              <div className="bird-description__player">Player</div>
            </div>
          </div>
          <div className="bird-description__text">
            {activeAnswerData.description}
          </div> 
        </>
    }

    
  </section>
}

export default BirdDescription;