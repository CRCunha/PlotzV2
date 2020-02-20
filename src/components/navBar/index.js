import React from "react";
import "./navBar.css";

import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/PlotzBranco.png";
import Home from "../../assets/img/home.svg";
import Growth from "../../assets/img/growth.svg";
import Table from "../../assets/img/table.svg";
import User from "../../assets/img/user.svg";


const NavBar = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <nav>
    <Link className="logo" to="/">
      <img src={Logo} alt="logo" />
    </Link>
    <div className="menu">
      <Link className="menuIten" to="/">
        <Tooltip title="Home Page" placement="right" TransitionComponent={Zoom}>
          <img src={Home} alt="home" />
        </Tooltip>
      </Link>

      <Link className="menuIten" to="/growth">
        <Tooltip title="Growth Page" placement="right" TransitionComponent={Zoom}>
          <img src={Growth} alt="growth" />
        </Tooltip>
      </Link>

      <Link className="menuIten" to="/table">
        <Tooltip title="Table Page" placement="right" TransitionComponent={Zoom}>
          <img src={Table} alt="table" />
        </Tooltip>
      </Link>

      <Link className="menuIten" to="/perfil">
        <Tooltip title="Perfil Page" placement="right" TransitionComponent={Zoom}>
          <img src={User} alt="user" />
        </Tooltip>
      </Link>
    </div>
  </nav>
);

export default NavBar;
