import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home 页面</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About 页面</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard 页面</h2>
    </div>
  );
}


function App() {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react-demo2' : '/'}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;