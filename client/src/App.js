import React from 'react';
//import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar3';
//import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth2';
//import Annonce from './components/Annonce/Annonce';
import SocialCardDemo from './components/SocialCardDemo/SocialCardDemo';
import SelectField from './components/Inputs/SelectField/SelectField';
import TextField from './components/Inputs/TextField/TextField';


const App = () => (
  <BrowserRouter>
    {/* <Container maxWidth="lg"> */}
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/annonce" exact component={SocialCardDemo} />
        <Route path="/select" exact component={SelectField} />
        <Route path="/text" exact component={TextField} />
      </Switch>
    {/* </Container> */}
  </BrowserRouter>
);

export default App;
