import React, { Component } from 'react';
import sneakers from "./sneakers.json";
import Navpills from "./components/Navpills";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import './App.css';

class App extends Component {

  state = {
    banner: " Click on a sneaker to begin",
    current_score: 0,
    highest_score: 0,
    sneakers: sneakers,
    unselected_sneakers: sneakers

  }

  componentDidMount() {
  }


  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //     {console.log(this.state.sneakers.image)}
      //   </p>
      <Wrapper>
        <Navpills
          banner={this.state.banner}
          current_score={this.state.current_score}
          highest_score={this.state.highest_score}
        />
        <Title />



      </Wrapper>
    );
  }
}

export default App;
