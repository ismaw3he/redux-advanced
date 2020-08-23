**1-(terminal)**

`npm install redux react-redux`


**2-(src folder)**

`create components folder`
     
     
**3-(components folder)**

`create WineContainer.js`
     
     
**4-(WineContainer.js)**

 	  import React from "react";

 	  function WineContainer(){
 	      return(
           <div>
             <h2>Number of Wine bottles</h2>
             <button>Buy Wine</button>
           </div>
 	      )
 	  }

 	  export default WineContainer;


**5-(App.js)**

`Remove everything in App.js , and include <WineContainer />`


**6-(src folder)**

> Time to create a folder structure for REDUX app

`create redux folder`


**7-(redux folder)**

`create wine folder`


**8-(wine folder)**

`create wineActions.js, wineTypes.js, wineReducer.js`


**9-(wineTypes.js)**

> We should export a constant type to avoid future mistakes and write a cleaner code

 	  export const BUY_WINE = 'BUY_WINE';


**10-(wineActions.js)**

> Now BUY_WINE is imported and returned on action

 	  import {BUY_WINE} from "./wineTypes";
 	  
 	  export const buyWine = () =>{
 	      return{
 	          type: BUY_WINE
 	      }
 	  }



**11-(wineReducer.js)**

> We need to create our reducer to handle actions and make changes to our state

 	  import {BUY_WINE} from "./wineTypes";
 	  
 	  const initialState = {
 	      numOfWine: 10
 	  }
 	  
 	  const wineReducer = (state = initialState, action) =>{
  	     switch(action.type){
 	          case BUY_WINE: return{
   	            ...state,
   	            numOfWine: state.numOfWine - 1
    	          }

  	          default: return state
 	      }
 	  }

 	  export default wineReducer;



**12-(redux folder)**

`create store.js`


**13-(store.js)**

> We need to use createStore method of redux to create our store with the reducer that we created

 	  import {createStore} from "redux";
 	  import wineReducer from "./wine/wineReducer";

 	  const store = createStore(wineReducer);

 	  export default store;


**14-(App.js)**

> Now it is time to import Provider component from react-redux and provide our app with our store. After all the App.js file should look like:

 	  import React from 'react';
 	  import './App.css';
 	  import WineContainer from './components/WineContainer';

 	  import { Provider } from "react-redux";
 	  import store from "./redux/store"

 	  function App() {
 	    return (
 	      <Provider store = { store } >
 	        <div className="App">
  	         <WineContainer />
  	       </div>
  	     </Provider>
  	   );
 	  }

 	  export default App;


**15-(redux folder)**

> It is a best solution to export all actions from one place which is **index.js**. We will use them in components to dispatch an action

`create index.js`


**16-(index.js)**

 	  export { buyWine } from "./wine/wineActions"
 
 
**17-(WineContainer.js)**

> Import the action **(import {buyWine} from "../redux/index")** and create our mapStateToProps and mapDispatchToProps functions

 	  const mapStateToProps = state =>{
 	    return{
 	      numOfWine: state.numOfWine
 	    }
 	  }
 	  
 	  const mapDispatchToProps = dispatch =>{
 	    return{
 	      buyWine: ()=> dispatch(buyWine())
 	    }
 	  }
       
**18-(WineContainer.js)**

> Time to connect to our store with component. Do not forget to import the connect from react-redux **import {connect} from "react-redux"**

 	  export default connect(mapStateToProps, mapDispatchToProps)( WineContainer);
       
**19-(WineContainer.js)**

> Time to to use our props to show and make actions. Do not forget to accept **props** in your functional component.

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
 	      numOfWine: state.numOfWine
 	    }
 	  }

 	  const mapDispatchToProps = dispatch =>{
  	   return{
 	      buyWine: ()=> dispatch(buyWine())
 	    }
 	  }

 	  export default connect(mapStateToProps, mapDispatchToProps)( WineContainer);
_____________________________________________________________________________________________________________________


**20-(redux folder)**

> Now if you need second component with it's own state, You sould do following steps:

**1)** `Create new folder in redux like before (wine)`

**2)** `create js files the same as wineActions.js, wineTypes.js, wineReducer.js`
  
**3)** `Now we need to add new item to our redux store. Create rootReducer.js in redux folder to combine multiple reducers:`

 	  import {combineReducers} from "redux";
 	  import wineReducer from "./wine/wineReducer"
 	  
 	  // you can add extra reducers in this object
 	  const rootReducer = combineReducers({
 	      wine: wineReducer
 	  })
 	  
 	  export default rootReducer;
       
**4)** `Change store.js with our new rootReducer: `

 	  import {createStore} from "redux";
 	  import rootReducer from "./rootReducer"
 	  
 	  const store = createStore(rootReducer);
 	  
 	  export default store;
       
**5)** `Do not forget to export your new action from index.js`

**6)** `Now in all of your components you should change the mapStateToProps() function.`
 	  
       // If used combineReducer : state.{name}.property
 	  const mapStateToProps = state =>{
 	    return{
 	      numOfWine: state.wine.numOfWine
 	    }
 	  }

_____________________________________________________________________________________________________________________


**21-(store.js)**

> Adding a logger and redux-devtools-extension to our redux app

**1)** `yarn add redux-logger`

**2)** `Now import applyMiddleware from redux and logger from redux-logger`

**3)** `You should add applyMiddleware to your createStore function with logger:`
 	  
 	  import {createStore, applyMiddleware} from "redux";
 	  import logger from 'redux-logger'
 	  import rootReducer from "./rootReducer"
 	  
 	  const store = createStore(rootReducer, applyMiddleware(logger));
 	  
 	  export default store;

**4)** `logger is ready you can inspect and check actions on console`

**5)** `now lets install redux-devtools-extension to chrome and in our app: yarn add redux-devtools-extension`

**6)** `Time to compose with devtools`

 	  import {createStore, applyMiddleware} from "redux";
 	  import {composeWithDevTools} from "redux-devtools-extension"
 	  import logger from 'redux-logger'
 	  import rootReducer from "./rootReducer"
 	  
 	  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
 	  
 	  export default store;
       
_____________________________________________________________________________________________________________________


**22-(components folder)**

**1)** `Create NewWineContainer.js`

**2)** `Copy all the code from our WineContainer.js and make necessary changes: component name, input tag, keep number value (useState), onClick method, mapDispatchToProps`

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
       
**3)** `Add Payload to wineActions.js (If you have used this action in somewhere else do not forget to add default value to nnumber)`

 	  import {BUY_WINE} from "./wineTypes";
 	   	  
 	  export const buyWine = (number = 1) =>{
 	      return{
 	          type: BUY_WINE,
 	          payload: number
 	      }
 	  }
       
**4)** `use payload in wineReducer.js (instead of -1 use action.payload) (action.type and action.payload are properties of our action)`

 	  const wineReducer = (state = initialState, action) =>{
 	      switch(action.type){
 	          case BUY_WINE: return{
 	              ...state,
 	              numOfWine: state.numOfWine - action.payload
 	             }
 	  
 	           default: return state
 	      }
 	  }

_____________________________________________________________________________________________________________________

**23-(terminal) ASYNC actions & REDUX thunk GET request**

**1)** `yarn add axios redux-thunk`

**2)** `yarn add axios redux-thunk`

**3)** `(components folder) create UserContainer.js`

 	  import React from "react";
 	  
 	  function UserContainer(props){
 	      return(
 	      <div>
 	        <h1>User  Container</h1>
  	     </div>
 	      )
 	  }
 	  
 	  
 	  
 	  export default UserContainer;
       
**4)** `(redux folder) create user folder`

**5)** `(user folder) create userTypes.js`

 	  export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
 	  export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
 	  export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
       
**6)** `(user folder) create userActions.js`

 	  import {
 	      FETCH_USERS_REQUEST,
 	      FETCH_USERS_SUCCESS,
 	      FETCH_USERS_FAILURE
 	  } from "./userTypes";
 	  
 	  export const fetchUsersRequest = () =>{
 	      return {
 	          type: FETCH_USERS_REQUEST
 	      }
 	  }
 	  
 	  export const fetchUsersSuccess = users =>{
 	      return {
 	          type: FETCH_USERS_SUCCESS,
 	          payload: users
 	      }
 	  }

 	  export const fetchUsersFailure = error =>{
 	      return {
 	          type: FETCH_USERS_FAILURE,
 	          payload: error
 	      }
 	  }
       
**7)** `(user folder) create userReducer.js`

 	  const { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } = require("./userTypes")
 	  
 	  const initialState = {
 	      loading: false,
 	      users: [],
 	      error: ""
 	  }
 	  
 	  const userReducer = (state = initialState, action) => {
 	      switch (action.type) {
 	          case FETCH_USERS_REQUEST:
 	              return {
 	                  ...state,
 	                  loading: true
 	              }
 	          case FETCH_USERS_SUCCESS:
 	              return {
 	                  ...state,
 	                  loading: false,
 	                  users: action.payload
 	              }
 	          case FETCH_USERS_FAILURE:
 	              return {
 	                  ...state,
 	                  loading: false,
 	                  users: [],
 	                  error: action.payload
  	             }
  	         default: return state
 	  
 	      }
 	  }
 	  
 	  export default userReducer;
       
**8)** `(index.js) Export all action creaters from index.js`

 	  export { buyWine } from "./wine/wineActions"
 	  export * from "./user/userActions"
       
**9)** `(rootReducer.js) add userReducer to rootReducer`

 	  // you can add extra reducers in this object
 	  const rootReducer = combineReducers({
 	      wine: wineReducer,
 	      user: userReducer
 	  })
       
**10)** `(rootReducer.js) add userReducer to rootReducer`
