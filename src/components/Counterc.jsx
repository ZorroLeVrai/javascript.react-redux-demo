import React, { Component } from 'react';
import { modifyCounter } from '../store/uniqueCounter';
import { connect } from "react-redux";

class Counterc extends Component {

  render() {
    return (
      <div>
        <button onClick={() => this.props.updateCounter(1)}>+</button>
        <span>{this.props.counter}</span>
        <button onClick={() => this.props.updateCounter(-1)}>-</button>
      </div>
    );
  }
}

//this function takes the state of the store and returns the part of the store we are interested in
const mapStateToProps = state => ({
  //what we set here, will be passed to our component with a prop of the same name
  counter: state.entities.myCounter.counter
});

//this function takes the dispatch function of the store and maps it to the props for our component
const mapDispatchToProps = dispatch => ({
  //the properties of this object are going to be the properties of our component
  updateCounter: (nb) => dispatch(modifyCounter(nb))
});

//Container component that wraps our presentation component
//Creates a component that wraps the component passed as a parameter
export default connect(mapStateToProps, mapDispatchToProps)(Counterc);