// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import ContactMe from './ContactMe';
import Footer from './Footer';
import AdminDashboard from './AdminDashboard';
import Login from './Login';
import Blogs from './Blogs';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Navigate to="/admin-dashboard" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
/**/
