import React from 'react';
import { NavLink, Outlet, useNavigation } from 'react-router-dom';
import './Header.css'
import Footer from '../Footer/Footer';
import Spiner from '../Spiner/Spiner';

const Header = () => {
      const navigation = useNavigation()
      return (
            <div>
                  <div>
                        <nav className='nav bg-slate-300 text-center p-4 shadow-lg'>
                              <NavLink to="/">Home</NavLink>
                              <NavLink to="/glary">Glary</NavLink>
                              <NavLink to="/about">About us</NavLink>
                              <NavLink to="/photos">Photos</NavLink>
                              <NavLink to="/contact">Contact</NavLink>
                        </nav>

                  </div>
                  {
                        navigation.state === "loading" ? <Spiner></Spiner> : <Outlet></Outlet>
                  }
                  
                  <Footer></Footer>
            </div>
      );
};

export default Header;