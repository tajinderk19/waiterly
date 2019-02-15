import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <AppNavbar />
       <Main />
       <Footer />
      </div> 
    );
  }
}

export default App;
