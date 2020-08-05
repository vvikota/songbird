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
      isLoading: true,
      isPlaying: props.isPlaying,
    };

    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
  }

  render() {
    const {isPlaying, isLoading, duration, progress } = this.state;
    // const audio = this._audioRef.current;
    // const currentTime = Math.round(audio.currentTime);
    // let progress = Math.round((currentTime / duration) * 100);

    return (
      <div className="player-component__wrapper">
        <div
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={this._onPlayButtonClick}
        > 
         {isPlaying ? pausePic : playPic}
        </div>
        <div className="track__status-block">
          <div className="track__status">
          {/* <span style={{width: (rating * 20) + `%`}}></span> */}
            <div 
              className="track__status--marker"
              style={{left: progress + `%`}}
            ></div>
            <audio
              ref={this._audioRef}
            />
          </div>
          <div className="time-indicators">
            <span className="time-indicators__start">{duration}</span>
            <span className="time-indicators__finish">00:40</span>
          </div>
        </div>
      </div>  
    );
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;
    audio.src = src;

    audio.onloadedmetadata = () => this.setState({
      duration: Math.round(audio.duration),
    })

    audio.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    audio.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    audio.onpause = () => this.setState({
      isPlaying: false,
    });

    audio.ontimeupdate = () => this.setState({
      progress: audio.currentTime
    });
  }

  componentDidUpdate() {
    const {duration} = this.state;
    // console.log(`${src} in update`)
    // console.log(`component update`)
    const audio = this._audioRef.current;

    const currentTime = Math.round(audio.currentTime);

    audio.onplay = () => {
      this.setState({
        progress: Math.round((currentTime / duration) * 100),
      });
    };

    // let progress = Math.round((currentTime / duration) * 100);

    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
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

  _onPlayButtonClick() {
    this.props.onPlayButtonClick();
    this.setState({isPlaying: !this.state.isPlaying});
  }
}

export default AudioPlayer;