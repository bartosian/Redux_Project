const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    counter: 0
};
const rootReducer = (state=initialState, action) => {
    if(action.type === "INCR_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if(action.type === "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
};
const store = createStore(rootReducer);
store.subscribe(() => {
    console.log('Subscription', store.getState());
});
console.log(store.getState());

store.dispatch({ type: "INCR_COUNTER"});
store.dispatch({ type: "ADD_COUNTER", value: 20});

console.log(store.getState());
