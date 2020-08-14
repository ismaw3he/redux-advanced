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
