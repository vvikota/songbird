import React from "react";
import './player.css';

const playPic = <svg viewBox="-200 0 1200 1000"><path fill="#00bc8c" d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z"></path></svg>;

const pausePic = <svg viewBox="0 0 47.607 47.607"><path fill="#00bc8c" d="M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z"></path></svg>;

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
          {isPlaying ? pausePic : playPic}
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