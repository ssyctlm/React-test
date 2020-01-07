import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: []
  };
  constructor(props) {
    super(props);
    // console.log("constructor", this); //debug to figure out how constructor and this works.
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  render() {
    //to check|learn how props was passed in

    // console.log("props:", this.props.value);
    // console.log("ondelete", this.props.onDelete);

    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() =>
            this.handleIncrement({ id: this.props.counter.id + "clicked" })
          }
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() =>
            this.handleDecrement({ id: this.props.counter.id + "clicked" })
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
        {this.renderTags()}
      </div>
    );
  }

  renderTags() {
    return (
      this.state.tags.length !== 0 && (
        <ul>
          {this.state.tags.map(e => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      )
    );
  }

  handleIncrement(productId) {
    // console.log("clicked", productId, this.handleIncrement); //debug
    // console.log(productId);
    this.setState({ value: this.state.value + 1 });
  }
  handleDecrement(productId) {
    this.setState(
      this.state.value > 0 ? { value: this.state.value - 1 } : { value: 0 }
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }
}

export default Counter;
