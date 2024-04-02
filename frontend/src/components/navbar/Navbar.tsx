import './navbar.css';
import { NavLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import React,{ useRef } from 'react';






const Navbar = () => {

    const navRef:React.RefObject<HTMLElement> = useRef(null);//creo una variable para poder referenciar a la etiqueta nav.


    const eventResponsive = () =>{
        navRef.current?.classList.toggle('response-nav');
    }

    return (
        <header className='header'>
            <i onClick={eventResponsive} className='icons-nav'><IoMdMenu className='icons-menu'/></i>
            <span className='title-nav'><NavLink to='/'>MD Books</NavLink></span>
            <nav className='navbar' ref={navRef}>
                <i onClick={eventResponsive} className='icons-nav'><MdClose  className='icons-close'/></i>
                <ul className='menu-list'>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink to="/productos">Productos</NavLink></li>
                    <li><NavLink to="/contacto">Contacto</NavLink></li>
                    <li><NavLink to="/carrito">Carrito</NavLink></li>
                </ul>
            </nav>
            <NavLink to="/">Carrito</NavLink>
        </header>
    );
}

export default Navbar;