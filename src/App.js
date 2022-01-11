import React from 'react';
import HomePage from './pages/homepage/homepage.components';
import Shoppage from './pages/shop-page/shop-page.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/header.component';
import './app.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={Shoppage}/>
        <Route  path='/signin' component={SignInAndSignUp}/>

      </Switch>
    </div>
  );
}

export default App;
