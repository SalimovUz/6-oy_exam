import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discount from './Pages/Discount.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/stat" element={<Discount />} />
        <Route path="/message" element={<Discount />} />
        <Route path="/notify" element={<Discount />} />
        <Route path="/settings" element={<Discount />} />
        <Route path="/logout" element={<Discount />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
