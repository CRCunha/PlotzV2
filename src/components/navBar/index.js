import React from 'react'
import './navBar.css'

import Logo from '../../assets/img/PlotzBranco.png'
import Home from '../../assets/img/home.svg'
import Growth from '../../assets/img/growth.svg'
import Table from '../../assets/img/table.svg'

import { Link } from 'react-router-dom'

const NavBar = () => (
    <nav>
        <Link className="logo" to="/">
            <img src={Logo} alt="logo" />
        </Link>
        <div className="menu">
            <Link className="menuIten" to="/">
                <img src={Home} alt="home"/>
            </Link>

            <Link className="menuIten" to="/growth">
                <img src={Growth} alt="growth"/>
            </Link>

            <Link className="menuIten" to="/table">
                <img src={Table} alt="table"/>
            </Link>
        </div>
    </nav>
)

export default NavBar