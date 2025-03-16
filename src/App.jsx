import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tes from './Pages/Tes';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tes" element={<Tes />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
