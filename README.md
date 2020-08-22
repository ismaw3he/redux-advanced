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
