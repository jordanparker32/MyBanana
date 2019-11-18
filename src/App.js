import React from 'react';
import Display from './Components/Display';
import {connectedLoginPage} from './LoginPage/LoginPage';
import './Stylesheets/App.css';

function App() {
  return (
    <div className="App">
    <connectedLoginPage />
      {/* <Display /> */}
    </div>
  );
}

export default App;
