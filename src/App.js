import React from 'react';

import Header from './components/header/header.jsx';
import MainScreen from "./components/main-screen/main-screen.jsx";
import WinScreen from "./components/win-screen/win-screen";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isGameOver: false,
    };
  }

  render() {
    const {isGameOver} = this.state;

    return (
      <>
        <Header/>

        {isGameOver ? (
          <WinScreen onNextGameClick={() => this.setState({isGameOver: false})}/>
        ) : (
          <MainScreen onGameOverClick={() => this.setState({isGameOver: true})}/>
        )}
      </>  
    );
  }
}

export default App;