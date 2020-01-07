import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar'
import Counters from "./component/counters.jsx";



class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 1 },
      { id: 4, value: 3 }
    ]
  };
  constructor() {
    super();
    console.log("App-Counstructor")

  }

  componentDidMount() {
    //Ajax call
    console.log("App-Mounted")
  }

  handleDelete = propCounterId => {
    // console.log("event handler called", counterId);
    const counters = this.state.counters.filter(
      counter => counter.id !== propCounterId
    );
    this.setState({ counters: counters });
  };
  handleIncrement = propCounter => {
    const counters = this.state.counters.slice();
    const idx = counters.indexOf(propCounter);
    counters[idx].value = propCounter.value + 1;
    this.setState(
      { counters: counters }
    )
  }
  handleDecrement = propCounter => {
    const counters = [...this.state.counters];
    const idx = counters.indexOf(propCounter);
    if (counters[idx].value > 0) { counters[idx].value = propCounter.value - 1 } else { counters[idx].value = 0 };
    this.setState(
      { counters: counters }
    )

  }
  handleReset = () => {
    const counters = this.state.counters.map(ct => {
      ct.value = 0;
      return ct;
    });
    this.setState({
      counters
    });
  };
  render() {
    console.log("App-Rendered")
    return (
      <React.Fragment>
        <NavBar total={this.state.counters.filter(counter => counter.value > 0).reduce((a, counter) => a + counter.value, 0)} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>

      </React.Fragment>
    )
  };
}

export default App;
