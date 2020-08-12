**1-(terminal)**

`npm install redux react-redux`

**2-(src folder)**

 	   create components folder
     
**3-(components folder)**

 	   create wineContainer.js
     
**4-(wineContainer.js)**

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


**6-(App.js)**

> initial state is default state for store | first run   reducer will accept [state and action] 

