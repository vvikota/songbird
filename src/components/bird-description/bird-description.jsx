import React from "react";
import "./bird-description.css";
import AudioPlayer from "../player/player";
import {connect} from "react-redux";
import {getActiveAnswerData} from "../../reducer/main/selectors";
import {getIsStartLevel} from "../../reducer/main/selectors";

const BirdDescription = (props) => {
  const {
    activeAnswerData,
    isStartLevel,
    isPlaying,
    onPlayButtonClick
  } = props;

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

              <div className="bird-description__player">
                { activeAnswerData.audio ? <AudioPlayer 
                    isPlaying = {isPlaying}
                    onPlayButtonClick = {onPlayButtonClick}
                    src = {activeAnswerData.audio}
                  /> : <p>Loading...</p>}
              </div>
            </div>
          </div>
          <div className="bird-description__text">
            {activeAnswerData.description}
          </div> 
        </>
    }

  </section>
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeAnswerData: getActiveAnswerData(state),
  isStartLevel: getIsStartLevel(state),
});

export default connect(mapStateToProps)(BirdDescription);