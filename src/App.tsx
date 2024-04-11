import React from 'react';
import './App.css';
import Navbar from "./navbar/NavBar";
import MainPage from "./main-page/main-page";
import AboutPage from "./about-page/about-page";
import MenuPage from "./menu-page/menu-page";
import ReservationPage from "./reservation-page/reservation-page";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainPage/>
      <MenuPage/>
      <ReservationPage/>
      <AboutPage/>
    </div>
  );
}

export default App;
