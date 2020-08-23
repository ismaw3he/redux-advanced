import React from 'react';
import './App.css';
import WineContainer from './components/WineContainer';

import { Provider } from "react-redux";
import store from "./redux/store"
import NewWineContainer from './components/NewWineContainer';
import UserContainer from "./components/UserContainer"


function App() {
  return (
    <Provider store = { store } >
      <div className="App">
        <WineContainer />
        <NewWineContainer/>
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
