import React from "react";
import Counter from "./counter";
class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 1 },
      { id: 4, value: 3 }
    ]
  };
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
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          >
            {/* // passing Childrens ,passing some dialogue box , you should change the self-closed component tags into 2 tags, and put the dialogue box in between */}
            <h4>Product #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
