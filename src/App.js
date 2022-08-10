import React from 'react';
import { Route, Routes } from 'react-router-dom'
// import { BrowserRouter as Routes, Route, Link, Switch } from "react-router-dom";
import Loan from './Components/LoansDetails/Loan';
import Personal from './Components/Personal/person';
import Business from './Components/BusinessDetails/Business';
import Nav from './Components/Navbar/nav';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      {/* <Routes> */}
      <Routes>
        <Route path='/' element={<Personal />} exact />
        <Route path='/business' element={<Business />} exact />
        <Route path='/loan' element={<Loan />} exact />
      </Routes>
      {/* </Routes> */}
    </div>
  );
}

export default App;
