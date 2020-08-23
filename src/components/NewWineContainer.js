import React, {useState} from "react";
import {connect} from "react-redux"
import {buyWine} from "../redux/index"

function NewWineContainer(props){
    const [number, setNumber] = useState(1)
    return(
    <div>
      <h2>Number of Wine bottles: {props.numOfWine}</h2>
      <input type="text" value={number} onChange={e =>{
          setNumber(e.target.value)
      }} />
      <button onClick={()=>{props.buyWine(number)}}>Buy {number} Wine</button>
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
    buyWine: number => dispatch(buyWine(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( NewWineContainer);