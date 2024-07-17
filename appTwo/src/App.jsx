import React from "react";
import ReactDOM from "react-dom";

import Header from 'components/Header';
import 'components/Style';
import Footer from 'components/Footer';
import Body from 'components/Body';

const App = () => (
  <div className="container">
    <Header />
    <Body name={'App Two'} />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
