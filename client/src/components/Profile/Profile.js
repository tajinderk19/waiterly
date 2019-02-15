import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';
import * as FontAwesome from 'react-icons/fa';


class Profile extends Component {
  render() {
    return (
      <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Hi Buddy!</h1>
          <p className="lead"> Good to see you here. Enjoy the Food. </p>
       </Container>
      </Jumbotron>
    <div class="sidenav">
    <a href="#about"><FontAwesome.FaCartPlus /> Orders</a>
    <a href="#services"><FontAwesome.FaCheck /> Offers</a>
    <a href="#clients"><FontAwesome.FaHeart /> Favourites</a>
    <a href="#contact"><FontAwesome.FaCcPaypal /> Payments</a>
    <a href="#contact"><FontAwesome.FaLocationArrow /> Addresses</a>
  </div>
  <br/>
  <br/>
  </div>
    );
  }
}

export default Profile;
