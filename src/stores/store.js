import {
    createStore,
    combineReducers
} from "redux";

//redux part

//initialize the state
const initialState = {
    counters: [{
            id: 1,
            value: 0
        },
        {
            id: 2,
            value: 2
        },
        {
            id: 3,
            value: 1
        },
        {
            id: 4,
            value: 3
        }
    ]
};

//Action Createors
const DELETE = "DELETE";
const INCRE = "INCRE";
const DECRE = "DECRE";
const RESET = "RESET";

const actionDelete = (propCounterId) => {
    return {
        type: DELETE,
        id: propCounterId
    }
};
const actionIncrement = (propCounter) => {
    return {
        type: INCRE,
        props: propCounter
    }
};
const actionDecrement = (propCounter) => {
    return {
        type: DECRE,
        props: propCounter
    }
};
const actionReset = () => {
    return {
        type: RESET
    }
};


// Reducers
const reducer = (state = initialState, action) => {
    switch (action.type) {

        case INCRE:
            const counters = state.counters.slice();
            const idx = counters.indexOf(action.props);
            counters[idx].value += 1;
            return {
                counters: counters
            };

        case DECRE:
            const counters = state.counters.slice();
            const idx = counters.indexOf(action.props);
            counters[idx].value += 1;
            return {
                counters: counters
            };

        case DELETE:
            const counters = state.counters.filter(
                counter => counter.id !== action.id
            );
            return {
                counters: counters
            };



        default:
            return state;

    }

};

const reducer = (state = [123], action) => {
    switch (action.type) {
        case "test":
            return [...state, action.payload];
        default:
            return state;
    }
}
const store = createStore(reducer)
store.dispatch({
    type: "test",
    payload: "some info"
})
console.log(store.getState())



export default store