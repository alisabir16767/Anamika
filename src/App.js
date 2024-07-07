import React, { Component } from 'react';
import AppNavbar from './components/navbar';
import AboutUs from './components/aboutUs';
import OurServices from './components/ourServices';
import OurExpertise from './components/OurExpertise';
import OurClientele from './components/ourClientele';
import Downloads from './components/Downloads';
import Contacts from './components/contacts';
import Home from './components/home';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import NotFound from './components/notFound';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="d-flex flex-column min-vh-100">
        <AppNavbar />
        <main className=" flex-grow-1">
          <div className="content">
            <Switch>
              <Route path="/aboutUs" component={AboutUs} />
              <Route path="/ourServices" component={OurServices} />
              <Route path="/ourExpertise" component={OurExpertise} />
              <Route path="/ourClientele" component={OurClientele} />
              <Route path="/downloads" component={Downloads} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/" exact component={Home} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
