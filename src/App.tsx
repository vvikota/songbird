import * as React from 'react';

import Header from './components/header/header';
import MainScreen from "./components/main-screen/main-screen";
import WinScreen from "./components/win-screen/win-screen";

interface Props {}
interface State {
  isGameOver: boolean;
}

class App extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      isGameOver: true,
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