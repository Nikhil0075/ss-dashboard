import React from 'react';
import './App.css';
import LoginForm from './Component/LoginForm';
import Dashboard from './Component/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router> 
      <div className="App">
        <Routes> 
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
