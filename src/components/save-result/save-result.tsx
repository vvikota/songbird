import * as React from 'react';
import './save-result.css';

import {getScore} from "../../reducer/main/selectors";
import {stateInterface} from "../../types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/main/main";

interface SaveResultProps {
  saveResult: () => void
  changeScoreShow: () => void
  changeSaveResultShow: () => void
}

// class SaveResult extends React.PureComponent<Props, State> {
//   constructor(props: any) {
//     super(props);

//     this.state = {
//       inputValue: ''
//     };
//   }

//   render() {

//   }
// }

const SaveResult = (props: SaveResultProps) => {
  const {
    saveResult,
    changeSaveResultShow,
    changeScoreShow
  } = props;

  const saveResultScore = () => {
    saveResult()
    changeSaveResultShow()
    changeScoreShow()
  }

  return (
    <section className="save-result-form">
      <form>
        <h3>Введите свое имя:</h3>
        <input type="text"/>
        <button onClick={saveResultScore}>Сохранить</button>
      </form>
    </section>
  )
}

const mapStateToProps = (state: stateInterface) => (
  {currentScore : getScore(state)}
);

const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => void) => ({
  saveResult: () => {
    dispatch(ActionCreator.saveResultToGameScore())
  },

  changeSaveResultShow: () => {
    dispatch(ActionCreator.changeSaveResultShowStatus())
  },

  changeScoreShow: () => {
    dispatch(ActionCreator.changeScoreShowStatus())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveResult);