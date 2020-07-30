import React from "react";
import "./bird-description.css";

import plug from "../../assets/images/answer-pic.jpg";

const BirdDescription = () => {
  return <section className="bird-description">
    <div className="bird-description__top">
      
      <img src={plug} alt="bird" className="bird-description__image" />  
      
      <div className="bird-description__name-block">
        <div className="bird-description__title-wrapper">
          <h3 className="bird-description__title">
            Клёст
          </h3>
        </div>
        
        <div className="bird-description__latin-wrapper">
          <span className="bird-description__latin">
            Loxia curvirostra
          </span>
        </div>

        <div className="bird-description__player">Player</div>
      </div>
    </div>
    <div className="bird-description__text">
      Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.
    </div>
  </section>
}

export default BirdDescription;