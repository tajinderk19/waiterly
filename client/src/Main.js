import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeBody from './components/Homebody/Homebody';
import Coupans from './components/Coupans';
import MostlyOrdered from './components/MostlyOrdered';
import Payment from './components/Payment';
import Menu from './components/Menu';
import Profile from './components/Profile/Profile';

import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component {
  render() {
    return (
      <div className="container">
       <main>
    <Switch>
      <Route exact path='/' component={HomeBody}/>
      <Route path='/Menu' render={(props) => <Menu {...props} />}/>
      <Route path='/Coupans' component={Coupans}/>
      <Route path='/Profile' component={Profile}/>
      <Route path='/MostlyOrdered' component={MostlyOrdered}/>
      <Route path='/Payment' component={Payment}/>
    </Switch>
  </main>
      </div>
  
    );
  }
}

export default Main;
