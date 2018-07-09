import React, { Component } from 'react';
import sneakers from "./sneakers.json";
import Navpills from "./components/Navpills";
import Title from "./components/Title";
import SneakerCard from "./components/SneakerCard";
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


  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
}

selectSneaker = name => {

  const findSneaker = this.state.unselected_sneakers.find(item => item.name === name);

  if(findSneaker === undefined){
      this.setState({
        banner: " Sorry you guess incorrectly",
        highest_score: (this.state.current_score > this.state.highest_score ) ? this.state.current_score : this.state.highest_score,
        current_score: 0, 
        sneakers : sneakers,
        unselected_sneakers: sneakers
      })
  }else{

    const newSneaker = this.state.unselected_sneakers.filter(item => item.name !== name);

    this.setState({
      message: "Huray! you guessed correctly",
      current_score : this.state.current_score + 1,
      sneakers : sneakers,
      unselected_sneakers: newSneaker
    })

  }
   this.shuffleArray(sneakers);

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
      {
        this.state.sneakers.map(sneaker =>( 
          
          <SneakerCard 
            name = {sneaker.name}
            image = {sneaker.image}
            selectSneaker = {this.selectSneaker}
            current_score = {this.state.current_score}
            
          />

        ))
      }


      </Wrapper>
    );
  }
}

export default App;
