import React, { useEffect } from 'react';
import './App.css';
import Header from './components/headerFooter/header/Header'
import Home from './components/pages/home/Home';
import Footer from './components/headerFooter/footer/Footer';

function App() {

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 2000, // Animation duration in ms
        once: false,     // Run animations only once
      });
    }
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
