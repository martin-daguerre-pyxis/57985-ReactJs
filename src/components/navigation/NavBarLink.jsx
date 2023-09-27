import { NavLink } from "react-router-dom";

const NavBarLink = ({ children, target, href, styleLink, styleSelected }) => {
    return (<>
        <NavLink
            className={({ isActive }) =>
                isActive ? styleSelected + styleLink : styleLink
            }
            to={href}
            target={target}>
            {children}
        </NavLink>
    </>);
}

export default NavBarLink;