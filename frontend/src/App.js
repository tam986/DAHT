import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sptrongloai from './Sptrongloai';
import Gioithieu from './Gioithieu';
import Chitiet from './Chitiet';
import Notfound from './Notfound';

function App() {
  return (
    <div className="container">
      <BrowserRouter basename='/'>
        <header><Header /></header>
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sp/:id" element={<Chitiet />} />
            <Route path="/loai" element={<Sptrongloai />} />
          
            <Route path="/loai/:id_loai" element={<Sptrongloai />} />
            <Route path="/gioithieu" element={<Gioithieu />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </main>
        
        <footer className='container-fluid bg-body-tertiary p-0'><Footer /></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
