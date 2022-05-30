import React from 'react';
import { ReactNavbar } from 'overlay-navbar';
import logo from '../../../images/logo.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPersonSquare } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';

const Header = () => {
  return (
    <ReactNavbar
      burgerColor="#94b8b8"
      burgerColorHover="#eb4034"
      logo={logo}
      logoWidth="20vmax"
      navColor1="white"
      logoHoverSize="10px"
      logoHoverColor="#eb4034"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.3vmax"
      link1Color="rgba(35, 35, 35,0.8)"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="#ff0000"
      link1Margin="1vmax"
      searchIcon={true}
      SearchIconElement={BiSearchAlt2}
      cartIcon={true}
      CartIconElement={AiOutlineShoppingCart}
      profileIcon={true}
      ProfileIconElement={BsPersonSquare}
      profileIconSize="1.5vmax"
      profileIconUrl="/login"
      cartIconUrl="/cart"
      searchIconUrl="/search"
      profileIconColor="rgba(35, 35, 35,0.8)"
      searchIconColor="rgba(35, 35, 35,0.8)"
      cartIconColor="rgba(35, 35, 35,0.8)"
      profileIconColorHover="#eb4034"
      searchIconColorHover="#eb4034"
      cartIconColorHover="#eb4034"
      cartIconMargin="1vmax"
    />
  );
};

export default Header;
