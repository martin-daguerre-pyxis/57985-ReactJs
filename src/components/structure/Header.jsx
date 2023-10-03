import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../navigation/NavBar';
import NavBarLink from '../navigation/NavBarLink';
import CartWidget from '../cart/CartWidget';
import publicUrl from '../../utils';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, children, context }) => {

    return (
        <>
            <header className="sticky top-0 z-10 p-0 px-6 text-yellow-100 bg-purple-700 body-font">
                <nav className="container flex flex-wrap items-center justify-between w-full mx-auto">

                    <div className="flex items-center flex-shrink-0 mx-6 text-white lg:ml-0">
                        <Link className="flex items-center py-3 font-medium text-orange-300 title-font md:mb-0 hover:text-orange-400" to="/" title="Ecommerce MDD">
                            <img src={publicUrl + "logo.svg"} className="w-36" alt="logo" />
                        </Link>
                    </div>

                    <label className="items-center block px-3 py-2 mr-6 border border-white rounded cursor-pointer lg:hidden hover:text-white hover:border-white" htmlFor="menu-toggle">
                        <svg className="w-3 h-4 fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </label>

                    <input className="hidden" type="checkbox" id="menu-toggle" />

                    <div className="flex-grow hidden w-full lg:flex lg:items-center lg:w-auto" id="menu">
                        <div className="flex justify-center text-sm lg:flex-grow">
                            <NavBar categories={context.store.categories} location="header"></NavBar>
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
                                    <Link to="/login" className="block px-8 pt-3 pb-3 text-lg text-white font-title lg:text-xl">Login / Registro</Link>
                                </div>
                            </>}
                            <CartWidget context={context}></CartWidget>
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
