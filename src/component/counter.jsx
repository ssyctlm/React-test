import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  }

  componentWillUnmount() {
    console.log('Counter-Unmount')
  }
  // // we need the parent component control this one, so we have to get rid of local state and related method
  // state = {
  //   value: this.props.counter.value,
  // };
  // constructor(props) {
  //   super(props);
  //   // console.log("constructor", this); //debug to figure out how constructor and this works.
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  render() {
    //to check|learn how props was passed in

    // console.log("props:", this.props.value);
    // console.log("ondelete", this.props.onDelete);
    console.log("Counter-Rendered")
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() =>
            this.props.onIncrement(this.props.counter)
          }
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() =>
            this.props.onDecrement(this.props.counter)
          }
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          className="btn btn-danger btn-sm "
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }


  // // stateless class component:
  // handleIncrement(productId) {
  //   // console.log("clicked", productId, this.handleIncrement); //debug
  //   // console.log(productId);
  //   this.setState({ value: this.state.value + 1 });
  // }
  // handleDecrement(productId) {
  //   this.setState(
  //     this.state.value > 0 ? { value: this.state.value - 1 } : { value: 0 }
  //   );
  // }


  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
