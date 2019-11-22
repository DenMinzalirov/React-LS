import React from 'react';
import './App.css';

import {connect} from 'react-redux'
import {add} from './redux/actions/actions'

import FormCreateOrder from './container/form-create-order'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        {this.props.name}
        <FormCreateOrder/>
        <button onClick={this.props.nameAdd}>CHANGE</button>
      </div>
    );
  }
  
}

function mapStateToProps(state) {
  return {
    name: state.addNameReducer.name
  }
}

function mapDispatchToProps(dispatch) {
  return{
    nameAdd: () => dispatch(add())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
