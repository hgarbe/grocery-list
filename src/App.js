import React, { Component } from 'react';
import List from "./List";
import ThingForm from "./ThingForm"
import { Carousel } from 'react-responsive-carousel';
import './App.css';



class App extends Component {
  state = {
    things: [
      { id: 1, name: "Beer", complete: false, },
      { id: 2, name: "Pork", complete: false, },
      { id: 3, name: "Jelly", complete: false, },
      { id: 4, name: "Sugar", complete: false, },
    ]
  };


  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (name) => {
    const thing = { id: this.getId(), name, complete: false, };
    this.setState({ things: [thing, ...this.state.things] });
  }

  handleClick = (id) => {
    this.setState({
      things: this.state.things.map( thing => {
        if (thing.id === id) {
          return { ...thing, complete: !thing.complete, }
        }
        return thing;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <ThingForm addItemFunction={this.addItem} />
        <List name="Grocery List" items={this.state.things} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
