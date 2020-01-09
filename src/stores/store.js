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

//Actions
const DELETE = "DELETE";
const INCRE = "INCRE";
const DECRE = "DECRE";
const RESET = "RESET";

//Action creators
const actionDelete = propCounterId => {
    return {
        type: DELETE,
        id: propCounterId
    };
};
const actionIncrement = propCounter => {
    return {
        type: INCRE,
        props: propCounter
    };
};
const actionDecrement = propCounter => {
    return {
        type: DECRE,
        props: propCounter
    };
};
const actionReset = () => {
    return {
        type: RESET
    };
};

// Reducers
const reducer = (state = initialState, action) => {
    let counters
    let idx
    switch (action.type) {
        case INCRE:
            counters = state.counters.slice();
            idx = counters.indexOf(action.props);
            counters[idx].value += 1;
            return {
                ...state,
                counters: counters
            };

        case DECRE:
            let counters = state.counters.slice();
            idx = counters.indexOf(action.props);
            counters[idx].value += 1;
            return {
                ...state,
                counters: counters
            };

        case DELETE:
            counters = state.counters.filter(
                counter => counter.id !== action.id
            );
            return {
                ...state,
                counters: counters
            };

        default:
            return state;
    }
};


const store = createStore(reducer);


export default store;