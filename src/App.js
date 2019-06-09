import React from 'react';
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'
import { HashRouter } from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        {/* <Main /> */}
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
