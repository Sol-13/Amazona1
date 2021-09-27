import React from "react";

//Estilos
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

 function Header() {
   
    const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

    return (
        <div className="header">

            <img /*-----Logo-----*/
            className="header_logo"/*cambiarle el icono*/ 
            /*src="./assets/Amazon-going-up-1024x704.jpg" esta ruta no funciona que sera?*/
            src="https://www.enriquedans.com/wp-content/uploads/2020/10/Amazon-going-up-1024x704.jpg"
            />

{/*--------Buscador e Icono-------------*/}

<div className="header_search">
   <input className="header_searchInput" type="text"/>
   <SearchIcon className="header_searchIcon"/>
</div>

{/*Navegador, REVISAR TODO ESTO */}
<div className="header_nav"> 
<Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLineOne">Hi {!user ? 'Guest' : user.email}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        
        <Link to='/orders'>
          <div className="header_option">
            <span className="header_optionLineOne">Devoluciones</span>
            <span className="header_optionLineTwo">Ordenes</span>
          </div>
        </Link>
        

        <div className="header_option">
          <span className="header_optionLineOne">Tu </span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
    );
}

export default Header;