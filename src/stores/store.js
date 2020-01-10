import {
    createStore,
    combineReducers
} from "redux";
import {
    DELETE,
    INCRE,
    DECRE,
    RESET
} from "./actionName"
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



//Action creators
export const actionDelete = propCounterId => {
    return {
        type: DELETE,
        id: propCounterId
    };
};
export const actionIncrement = propCounter => {
    return {
        type: INCRE,
        props: propCounter
    };
};
export const actionDecrement = propCounter => {
    return {
        type: DECRE,
        props: propCounter
    };
};
export const actionReset = () => {
    return {
        type: RESET
    };
};

// Reducers
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case INCRE:
            var counters = state.counters.slice();
            var idx = counters.indexOf(action.props);
            counters[idx].value += 1;
            return {
                ...state,
                counters: counters
            };

        case DECRE:
            var counters = state.counters.slice();
            var idx = counters.indexOf(action.props);
            if (counters[idx].value) {
                counters[idx].value -= 1;
            }

            return {
                ...state,
                counters: counters
            };

        case DELETE:
            var counters = state.counters.filter(
                counter => counter.id !== action.id
            );
            return {
                ...state,
                counters: counters
            };
        case RESET:
            var counters = state.counters.map(ct => {
                ct.value = 0
                return ct
            })
            return {
                ...state,
                counters: counters
            }

            default:
                return state;
    }
};


const store = createStore(reducer);


export default store;