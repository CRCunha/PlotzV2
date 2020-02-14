import React from 'react'
import NavBar from '../components/navBar/'
import {BrowserRouter,Switch,Route}   from 'react-router-dom';

import Home from '../components/home'
import Growth from '../components/growth'
import Table from '../components/table'
import Perfil from '../components/perfil'

const Routes = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/growth' component={Growth}/>
            <Route path='/table' component={Table}/>
            <Route path='/perfil' component={Perfil}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;