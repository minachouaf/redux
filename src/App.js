
import './App.css';
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {increment} from './actions/action'
class App extends Component{

 
render() {
  console.log("props",this.props);
  return (
    <div className="App">
     <button onClick={this.props.increment}>+</button>
     <div>{this.props.count}</div>
     <button onClick={this.props.decrement}>-</button>
    </div>
  );
}

}

function mapStateToProps(state){
  return{
    count:state.count
  }

}
const actionincrement={
  type:'increment',
  data:''
}
const actiondecrement={
  type:'decrement',
  data:''
}
function mapDispatchToProps(dispatch){
  return{
    //increment:()=>dispatch(actionincrement),
    increment:()=>dispatch(increment()),
    //increment:()=>dispatch({type:'increment}),
    decrement:()=>dispatch(actiondecrement)
  }

}
//connect for connect compoment with redux (reduce.js)
//<provider store={store}> for connect <aap/> with store of redux

// redux but eviter que chaque compenment a son state 
//seul state dans toute app et a chaque fois on le passer comme props dans le compment

// store=====> reduce and state  store.getState() for return state and createStore() pour cree state

//reduce function js qui return data(state)
//sate data returner par reduce
//action object js type:'type of action' data:'data passer par action'


export default connect(mapStateToProps,mapDispatchToProps)(App);
