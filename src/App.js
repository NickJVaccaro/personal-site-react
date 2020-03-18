import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopNav from './components/TopNav';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav/>
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/projects"></Route>
          <Route path="/now"></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
