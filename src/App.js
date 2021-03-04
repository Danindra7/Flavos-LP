import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">

      <Router>

        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
