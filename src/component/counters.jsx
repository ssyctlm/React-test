import React from 'react'
import Counter from './counter'
class Counters extends React.Component {
  render () {
    console.log('Counters-Rendered')
    return (
      <div>
        <button
          className="btn btn-primary btn-sm "
          onClick={this.props.onReset}
        >Reset</button>
        <button
          className="btn btn-warning btn-sm m-2"
          onClick={this.props.onAdd}
        >Add</button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          >
            {/* // passing Childrens ,passing some dialogue box , you should change the self-closed component tags into 2 tags, and put the dialogue box in between */}
            <h4>Product #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    )
  }
}

export default Counters
