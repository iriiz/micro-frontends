import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header.js';
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

const App = () => (
  <div className="container">
    <Header />
    <Body name={'shareComponets'} />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
