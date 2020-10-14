import React from 'react';
import axios from 'axios';

// Routing
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './reducers/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TopNav from './components/TopNav';
import About from './components/About';
import Now from './components/Now';
import Blog from './components/Blog';
import Post from './components/Post';
import Footer from './components/Footer';

const setAxios = () => {
  axios.defaults.baseURL = 'http://localhost:3000';
}
setAxios();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <TopNav/>
          <Switch>
            <Route path="/about"><About /></Route>
            {/* <Route path="/projects"></Route> */}
            <Route path="/blog"><Blog /></Route>
            <Route path="/now"><Now /></Route>
            <Route path="/post/:id"><Post /></Route>
            <Route path="/"><Redirect to="/about" /></Route>
          </Switch>
        </Router>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
