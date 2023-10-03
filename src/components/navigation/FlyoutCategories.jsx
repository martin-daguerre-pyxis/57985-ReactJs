import React from 'react'
import { Link } from 'react-router-dom';

const FlyoutCategories = ({ styleLink, styleSelected }) => {
    return (
        <>
            <div className="relative flex-row-reverse justify-end ml-3">
                <button type="button"
                    className="flex w-16 h-12 p-1 text-sm border-0 rounded-full cursor-pointer group focus:outline-none" aria-expanded="false" aria-haspopup="true">
                    <span className={({ isActive }) =>
                        isActive ? styleSelected + styleLink : styleLink
                    }>Categorías</span>
                    <div
                        className="absolute right-0 z-10 hidden w-48 py-1 mt-10 text-left origin-top-right bg-white rounded-md shadow-lg group-focus:block animate-open-menu ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-500 no-underline active:bg-gray-100 hover:bg-gray-50"
                            role="menuitem" tabindex="-1" id="user-menu-item-0">Perfil</Link>
                    </div>
                </button>
            </div>
        </>
    )
}

export default FlyoutCategories