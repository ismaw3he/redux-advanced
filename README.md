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

`create wineActions.js, wineTypes.js`


**9-(wineTypes.js)**

> We should export a constant type to avoid future mistakes and write a cleaner code

 	  export const BUY_WINE = 'BUY_WINE';

