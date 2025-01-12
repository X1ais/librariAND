// import logo from './logo.svg';
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Nav';

export default function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/' element={<Home />} />
      </Routes>


    </Router>
  );
}

function Messages() {
  return <h2>Messages</h2>
}