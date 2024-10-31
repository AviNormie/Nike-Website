import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import FullPage from './sections/fullPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FullPage />} />
       
      
      </Routes>
    </Router>
  );
}

export default App;