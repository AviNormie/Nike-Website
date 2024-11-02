import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FullPage from './sections/fullPage'; 
import SignUp from './sections/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FullPage />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;