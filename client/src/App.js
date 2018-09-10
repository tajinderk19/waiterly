import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Featured from './components/Featured';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <AppNavbar />
       <Header />
       <br/>
       <br/>
       <Menu />
       <br/>
       <Featured />
       <br/>
       <br/>
       <Footer />
      </div>
    );
  }
}

export default App;
