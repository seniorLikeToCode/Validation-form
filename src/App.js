import React from 'react';
import Loan from './Components/LoansDetails/Loan';
import Personal from './Components/Personal/person';
import Business from './Components/BusinessDetails/Business';
import './App.css';

function App() {
  return (
    <div className="App">
      <Loan />
      <Personal />
      <Business />
    </div>
  );
}

export default App;
