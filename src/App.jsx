import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tes from './Pages/Tes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tes" element={<Tes />} />
      </Routes>
    </Router>
  );
}

export default App;
