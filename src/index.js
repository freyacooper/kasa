import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss';
import reportWebVitals from './reportWebVitals';

import Home from './Pages/Home/index.js';
import Apropos from './Pages/Apropos/index.js';
import Header from './Components/Header/index.js';
import Error from './Pages/Error/index.js';
import Footer from './Components/Footer/index.js';
import Logement from './Pages/Logement/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />}/>
        <Route path="/logement/:id" element={<Logement />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
