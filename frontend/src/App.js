import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sptrongloai from "./Components/Sptrongloai";
import Gioithieu from "./Components/Gioithieu";
import Spchitiet from "./Components/Spchitiet";
import Notfound from "./Components/Notfound";
import BaiViet from "./Components/BaiViet";
import LienHe from "./Components/BaiViet";
import Topheader from "./Components/Topheader";

function App() {
  return (
    <div className="container-fluid p-0">
      <BrowserRouter basename="/">
        <header>
          <Topheader />
          <Header />
        </header>
        <main className="container-fluid p-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sp/:id" element={<Spchitiet />} />
            <Route path="/loai" element={<Sptrongloai />} />
            <Route path="/loai/:id_loai" element={<Sptrongloai />} />
            <Route path="/gioithieu" element={<BaiViet />} />
            <Route path="/gioithieu" element={<Gioithieu />} />
            <Route path="/gioithieu" element={<LienHe />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </main>
        <footer className="container-fluid bg-body-tertiary p-0">
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
