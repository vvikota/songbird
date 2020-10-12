import * as React from 'react';
import './save-result.css';

import {getScore, getGameScore} from "../../reducer/main/selectors";
import {stateInterface} from "../../types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/main/main";

interface currentScoreRow {
  name: string
  score: number
}

interface Props {
  saveResult: (name: string, currentScore: number, currentScoreList: currentScoreRow[]) => void
  changeScoreShow: () => void
  changeSaveResultShow: () => void
  currentScore: number
  currentScoreList: currentScoreRow[]
}

interface State {
  inputValue: string
}

class SaveResult extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event: { target: { value: string; }; }) {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {
      saveResult,
      changeSaveResultShow,
      changeScoreShow,
      currentScore,
      currentScoreList,
    } = this.props;

    const {inputValue} = this.state
  
    const saveResultScore = () => {
      console.log(currentScoreList)
      saveResult(inputValue, currentScore, currentScoreList)
      changeSaveResultShow()
      changeScoreShow()
    }
  
    return (
      <section className="save-result-form">
        <form>
          <h3>Введите свое имя:</h3>
          <input type="text" value={inputValue} onChange={this.handleChange} />
          <button onClick={() => saveResultScore()}>Сохранить</button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = (state: stateInterface) => (
  {
    currentScore : getScore(state),
    currentScoreList: getGameScore(state),
  }
);

const mapDispatchToProps = (dispatch: any) => ({
  saveResult: (name: string, currentScore: number, currentScoreList: currentScoreRow[]) => {
    dispatch(ActionCreator.saveResultToGameScore(name, currentScore, currentScoreList))
  },

  changeSaveResultShow: () => {
    dispatch(ActionCreator.changeSaveResultShowStatus())
  },

  changeScoreShow: () => {
    dispatch(ActionCreator.changeScoreShowStatus())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveResult);