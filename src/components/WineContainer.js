import React from "react";
import {connect} from "react-redux"
import {buyWine} from "../redux/index"

function WineContainer(props){
    return(
    <div>
      <h2>Number of Wine bottles: {props.numOfWine}</h2>
      <button onClick={props.buyWine}>Buy Wine</button>
    </div>
    )
}

// If used combineReducer : state.{name}.property
const mapStateToProps = state =>{
  return{
    numOfWine: state.wine.numOfWine
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    buyWine: ()=> dispatch(buyWine())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( WineContainer);