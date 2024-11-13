import React, { Component } from 'react';
import AppNavbar from './components/navbar';
import AboutUs from './components/aboutUs';
import OurServices from './components/ourServices';
import OurExpertise from './components/OurExpertise';
import OurClientele from './components/ourClientele';
import Downloads from './components/Downloads';
import Contacts from './components/contacts';
import Home from './components/home';
import { Routes, Route } from 'react-router-dom'; 
import Footer from './components/footer';
import NotFound from './components/notFound';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="d-flex flex-column min-vh-100">
        <AppNavbar />
        <main className="flex-grow-1">
          <div className="content">
            <Routes>
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/ourServices" element={<OurServices />} />
              <Route path="/ourExpertise" element={<OurExpertise />} />
              <Route path="/ourClientele" element={<OurClientele />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/" element={<Home />} /> 
              <Route path="*" element={<NotFound />} /> 
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
