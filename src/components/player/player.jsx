import React from "react";
import './player.css';
import {PlayIcon, PauseIcon} from '../icons/icons';

class AudioPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = React.createRef();

    this.state = {
      duration: 0,
      progress: 0,
    };

    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
  }
  
  _onPlayButtonClick() {
    this.props.onPlayButtonClick();
  }

  componentDidMount() {
    const audio = this._audioRef.current;
    audio.src = this.props.src;

    audio.onloadedmetadata = () => this.setState({
      duration: Math.round(audio.duration),
    })

    audio.ontimeupdate = () => this.setState({
      progress: audio.currentTime
    });
  }

  componentDidUpdate(prevProps) {

    let audio = this._audioRef.current;

    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    if(prevProps.src !== this.props.src){

      audio.src = this.props.src;
      const {isPlaying} = this.props
      if (isPlaying === true){
        this._onPlayButtonClick()
      }
    }
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
  }

  render() {
    const {
      duration,
      progress
    } = this.state;

    const {isPlaying} = this.props;

    let progressInPercent = (progress / duration) * 100;
   
    const transformTime = (time) => {
      let minutes = Math.floor(time / 60);
      let seconds =  Math.floor(time % 60);

      if (minutes < 10) {
        minutes = `0` + minutes;
      };

      if (seconds < 10) {
        seconds = `0` + seconds;
      };

      return minutes + `:` + seconds
    }
    
    let acumTime = transformTime(progress);
    let residueTime = transformTime(duration - progress);

    const onVolumeChange = (event) => {
      const audio = this._audioRef.current;
      audio.volume = event.target.value;
    }

    return (
      <div className="player-component__wrapper">
          <div
            className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
            type="button"
            onClick={this._onPlayButtonClick}
          > 
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </div>

          <div className="track__status-block">
            <div className="track__status">
              <div
                className="track__status-progress"
                style={{width: progressInPercent + `%`}}
                ></div>
              <div 
                className="track__status-marker"
                style={{left: progressInPercent + `%`}}
              ></div>
              <audio
                ref={this._audioRef}
              />
            </div>
            <div className="time-indicators">
              <span className="time-indicators__start">{acumTime}</span>
              <span className="time-indicators__finish">{residueTime}</span>
            </div>

            <div className="volume-block">
              <div className="volume__status">
                <input 
                  type="range"
                  name="volume"
                  min="0"
                  max="1"
                  step="0.01"
                  onChange={onVolumeChange}
                />
              </div>
            </div>
          </div>
      </div>  
    );
  }
}

export default AudioPlayer;