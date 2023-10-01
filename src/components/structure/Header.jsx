import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../navigation/NavBar';
import NavBarLink from '../navigation/NavBarLink';
import CartWidget from '../cart/CartWidget';
import publicUrl from '../../utils';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, children }) => {

    return (
        <>
            <header className="sticky top-0 z-10 p-0 px-6 text-yellow-100 bg-purple-700 body-font">
                <nav className="container flex flex-wrap items-center justify-between w-full mx-auto">

                    <div className="flex items-center flex-shrink-0 mx-6 text-white lg:ml-0">
                        <a className="flex items-center py-3 font-medium text-orange-300 title-font md:mb-0 hover:text-orange-400" href="/" title="Ecommerce MDD">
                            <img src={publicUrl + "logo.svg"} className="w-36" alt="logo" />
                        </a>
                    </div>

                    <label className="items-center block px-3 py-2 mr-6 border border-white rounded cursor-pointer lg:hidden hover:text-white hover:border-white" htmlFor="menu-toggle">
                        <svg className="w-3 h-4 fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </label>

                    <input className="hidden" type="checkbox" id="menu-toggle" />

                    <div className="flex-grow hidden w-full lg:flex lg:items-center lg:w-auto" id="menu">
                        <div className="flex justify-center text-sm lg:flex-grow">
                            <NavBar location="header">
                                <NavBarLink target="_blank" href="https://www.instagram.com/betty_yoga_/" styleLink="p-6 hover:border-transparent">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="px-2 py-0 -m-4 -mt-3 w-14 h-14 fill-white svg-icon" viewBox="0 0 1024 1024">
                                        <path d="M512 307a205 205 0 1 0-1 410 205 205 0 0 0 1-410zm0 338a134 134 0 0 1 0-266 134 134 0 0 1 0 266zm214-394a48 48 0 1 0-1 95 48 48 0 0 0 1-95z" />
                                        <path d="M912 512c0-55 0-110-3-165-3-64-18-121-64-168-47-46-104-61-168-64-55-3-110-3-165-3s-110 0-165 3c-64 3-121 18-168 64-46 47-61 104-64 168-3 55-3 110-3 165s0 110 3 165c3 64 18 121 65 168 46 47 103 61 167 64 55 3 110 3 165 3s110 0 165-3c64-3 121-18 168-64 47-47 61-104 64-168 3-55 3-110 3-165zm-88 236c-8 18-16 32-30 46-15 14-28 22-46 30-53 21-178 16-236 16s-183 5-236-16c-18-7-32-16-46-30s-23-28-30-46c-21-53-16-178-16-236s-5-183 16-236c7-18 16-32 30-46s28-23 46-30c53-21 178-16 236-16s183-5 236 16c18 7 32 16 46 30s23 28 30 46c21 53 16 178 16 236s5 183-16 236z" />
                                    </svg>
                                </NavBarLink>
                            </NavBar>
                        </div>
                        <div className="flex">
                            {isAuthenticated ? <>
                                <div className="relative flex-row-reverse justify-end ml-3">
                                    <button type="button"
                                        className="flex w-16 h-12 p-1 text-sm border-0 rounded-full cursor-pointer group focus:outline-none"
                                        id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-16 h-12 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="" />
                                        <div
                                            className="absolute right-0 z-10 hidden w-48 py-1 mt-10 text-left origin-top-right bg-white rounded-md shadow-lg group-focus:block animate-open-menu ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                            <Link to="/profile" className="block px-4 py-2 text-sm text-gray-500 no-underline active:bg-gray-100 hover:bg-gray-50"
                                                role="menuitem" tabindex="-1" id="user-menu-item-0">Perfil</Link>
                                            <Link to="/settings" className="block px-4 py-2 text-sm text-gray-500 no-underline active:bg-gray-50 hover:bg-gray-50"
                                                role="menuitem" tabindex="-1" id="user-menu-item-1">Configuración</Link>
                                            <Link to="/logout" className="block px-4 py-2 text-sm text-gray-500 no-underline active:bg-gray-50 hover:bg-gray-50"
                                                role="menuitem" tabindex="-1" id="user-menu-item-2">Salir</Link>
                                        </div>
                                    </button>
                                </div>
                            </> : <>
                                <div className="relative flex-row-reverse justify-end mr-3">
                                    <NavBarLink href="/login"
                                        styleLink="block font-title p-3 relative text-white text-xl">Login / Registro</NavBarLink>
                                </div>
                            </>}
                            <CartWidget></CartWidget>
                        </div>
                    </div>
                </nav>
            </header>
            <div className='p-4 text-orange-700 bg-orange-100 empty:hidden'>{children}</div>
        </>
    )
}

Header.propTypes = {
    children: PropTypes.any
}

export default Header
