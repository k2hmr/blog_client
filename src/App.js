import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreatePost from "./pages/CreatePost";
import './App.css';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <a href="/">Main Page</a>
          <a href="/createpost">Create Page</a>
        </div>
      </div>

      <Router>
        <Route path="/" exact render={(props) => <MainPage />} />
        <Route path="/createpost" render={(props) => <CreatePost />} />
      </Router>
    </>
  );
}

export default App;
