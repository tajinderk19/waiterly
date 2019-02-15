import React, { Component } from 'react';
import Header from './Header';
import Featured from './Featured';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomeBody extends Component {
  render() {
    return (
      <div className="container">
       <Header />
       <br/>
       <br/>
       <br/>
       <br/>
       <Featured />
       <br/>
       <br/>
      </div>
    );
  }
}

export default HomeBody;
