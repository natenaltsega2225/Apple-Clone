import React from 'react';
import './commonResource/css/bootstrap.css';
import './App.css';
import Header from './Components/Nav/Header';
import SectionHolder from './Components/Sections/SectionHolder';
import Mac from './Components/Pages/Mac';
import Iphone from './Components/Pages/Iphone';
import Ipad from './Components/Pages/Ipad';
import Watch from './Components/Pages/Watch';
import TV from './Components/Pages/TV';
import Music from './Components/Pages/Music';
import Support from './Components/Pages/Support';
import Search from './Components/Pages/Search';
import Cart from './Components/Pages/Cart';
import SingleAppleProduct from './Components/Pages/SingleAppleProduct'
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<SectionHolder />} />
        <Route path="mac" element={<Mac />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="/iphone/:pid" element={<SingleAppleProduct />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="watch" element={<Watch />} />
        <Route path="tv" element={<TV />} />
        <Route path="music" element={<Music />} />
        <Route path="support" element={<Support />} />
        <Route path="search" element={<Search />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
