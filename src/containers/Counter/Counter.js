import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increment, decrement, add, subtract, store_result, delete_result} from "../../store/actions/actions";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}/>
                <hr/>
                <button onClick={ () => this.props.onStoreResult(this.props.ctr) }>Store result</button>
                <ul>
                    {
                        this.props.storedResults.map( res => (
                            <li key={res.id} onClick={ () => this.props.onDeleteResult(res.id) }>{res.val}</li>
                        ))
                    }

                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.count.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAddCounter: () => dispatch(add()),
        onSubtractCounter: () => dispatch(subtract()),
        onStoreResult: (counter) => dispatch(store_result(counter)),
        onDeleteResult: (id) => dispatch(delete_result(id))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);