import React from 'react';
import {BrowserRouter,Switch,Route } from 'react-router-dom';
import Main from './components/Main/Main'
import About from './components/About/About'


export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
          
            <Route path="/" exact component={Main}/>
            <Route path="/about" exact component={About}/>

        </Switch>
        </BrowserRouter>
    )
}