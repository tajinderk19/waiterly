import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeBody from './components/Homebody/Homebody';
import Coupans from './components/Coupans';
import MostlyOrdered from './components/MostlyOrdered';
import MainMenu from './components/MainMenu';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component {
  render() {
    return (
      <div className="container">
       <main>
    <Switch>
      <Route exact path='/' component={HomeBody}/>
      <Route path='/MainMenu' component={MainMenu}/>
      <Route path='/Coupans' component={Coupans}/>
      <Route path='/Profile' component={Profile}/>
      <Route path='/MostlyOrdered' component={MostlyOrdered}/>

    </Switch>
  </main>
      </div>
  
    );
  }
}

export default Main;
