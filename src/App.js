import React from 'react'
// import logo from './logo.svg';
import './App.css'
import NavBar from './component/navbar'
import Counters from './component/counters.jsx'
// import store from './stores/store'
import { connect } from 'react-redux'
import { DELETE, INCRE, DECRE, RESET, ADD } from './stores/actionName'
import { actionAdd } from './stores/store'
class App extends React.Component {
  // //LOCAL STATE
  // state = {
  //   counters: [{
  //       id: 1,
  //       value: 0
  //     },
  //     {
  //       id: 2,
  //       value: 2
  //     },
  //     {
  //       id: 3,
  //       value: 1
  //     },
  //     {
  //       id: 4,
  //       value: 3
  //     }
  //   ]
  // }
  constructor (props) {
    super(props)
    console.log('App-Counstructor')
  }

  componentDidMount () {
    // Ajax call
    console.log('App-Mounted')
  }
  // // React local state handleFunctions
  // handleDelete = propCounterId => {
  //   // console.log("event handler called", counterId);
  //   const counters = this.props.state.counters.filter(
  //     counter => counter.id !== propCounterId
  //   )
  //   this.setState({
  //     counters: counters
  //   })
  // }

  // handleIncrement = propCounter => {
  //   const counters = this.state.counters.slice()
  //   const idx = counters.indexOf(propCounter)
  //   counters[idx].value = propCounter.value + 1
  //   this.setState({
  //     counters: counters
  //   })
  // }
  // handleDecrement = propCounter => {
  //   const counters = [...this.state.counters]
  //   const idx = counters.indexOf(propCounter)
  //   if (counters[idx].value > 0) {
  //     counters[idx].value = propCounter.value - 1
  //   } else {
  //     counters[idx].value = 0
  //   }
  //   this.setState({
  //     counters: counters
  //   })
  // }
  // handleReset = () => {
  //   const counters = this.state.counters.map(ct => {
  //     ct.value = 0
  //     return ct
  //   })
  //   this.setState({
  //     counters
  //   })
  // }
  render () {
    console.log('App-Rendered')
    console.log(this.props)
    return (
      <React.Fragment>
        <NavBar total = {
          this.props.state.counters
            .filter(counter => counter.value > 0)
            .reduce((a, counter) => a + counter.value, 0)
        }/>
        <main className = "container" >
          <Counters counters = {
            this.props.state.counters
          }
          onReset = {
            this.props.handleReset
          }
          onIncrement = {
            this.props.handleIncrement
          }
          onDecrement = {
            this.props.handleDecrement
          }
          onDelete = {
            this.props.handleDelete
          }
          onAdd = {
            this.props.handleAdd
          }/>

        </main >

      </React.Fragment>
    )
  }
}

// Action creators
export const actionDelete = propCounterId => {
  return {
    type: DELETE,
    id: propCounterId
  }
}
export const actionIncrement = propCounter => {
  return {
    type: INCRE,
    props: propCounter
  }
}
export const actionDecrement = propCounter => {
  return {
    type: DECRE,
    props: propCounter
  }
}
export const actionReset = () => {
  return {
    type: RESET
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: propCounter => {
      dispatch(actionIncrement(propCounter))
    },
    handleDecrement: propCounter => {
      dispatch(actionDecrement(propCounter))
    },
    handleDelete: propCounterId => {
      dispatch(actionDelete(propCounterId))
    },
    handleReset: () => {
      dispatch(actionReset())
    },
    handleAdd: () => {
      dispatch(actionAdd)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
