import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./view/main/main";
import Login from "./view/login/login";
import Home from "./view/home/home";
import Register from "./view/register/register";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/registro" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);