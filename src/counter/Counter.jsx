import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as counterActions from "./counterActions";

const Counter = props => {
	const { counterValue, increment, decrement } = props;
	return (
		<div style={{ margin: "40px" }}>
			<span style={{ marginRight: "20px" }}>Value: {counterValue}</span>
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		counterValue: state.counter.value
	};
};

// const mapDispatchToProps = {
//     increment: counterActions.incrementAction,
//     decrement: counterActions.decrementAction
// };

const mapDispatchToProps = dispatch => {
    
	const actionCreatorsForThisComponent = {
		increment: counterActions.incrementAction,
		decrement: counterActions.decrementAction
	};

	return bindActionCreators(actionCreatorsForThisComponent, dispatch);
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const connectedComponent = connector(Counter);

export default connectedComponent;

// function bindActionCreator(actionCreator, dispatch) {
// 	return function() {
// 		return dispatch(actionCreator.apply(this, arguments));
// 	};
// }
