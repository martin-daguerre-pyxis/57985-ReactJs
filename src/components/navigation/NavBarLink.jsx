const NavBarLink = ({ children, target, href, selected, styleLink, styleSelected }) => {
    let sel = selected ? styleSelected : "";
    return (<>
        <a className={sel + styleLink}
            href={href}
            target={target}>
            {children}
        </a>
    </>);
}

export default NavBarLink;