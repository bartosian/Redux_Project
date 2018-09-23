import * as actions from '../actions/actions';

const initialState = {
    results: []
};

const reducer = (state=initialState, action) => {

    switch(action.type) {
        case actions.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), val: action.result})

            }

        case actions.DELETE_RESULT:
            const newResults = state.results.slice()
                .filter(res => {
                    return res.id !== action.delId
                });

            return {
                ...state,
                results: newResults

            }

    }


    return  state;
};

export default reducer;