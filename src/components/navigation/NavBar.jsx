import NavBarLink from './NavBarLink';

const NavBar = ({ children, location }) => {

    let styleNav = ' flex flex-col flex-wrap items-center w-full lg:flex-row lg:w-auto justify-items-stretch ';
    let styleLink = ' text-base px-4 ';
    let selected = ' bg-indigo-400/20 ';
    const locations = {
        header: {
            nav: 'flex flex-col flex-wrap items-center w-full lg:flex-row lg:w-auto justify-items-stretch',
            link: 'text-lg w-full lg:w-auto lg:px-4 font-title text-white lg:text-xl pt-4 pb-4 px-8 border-b-4' +
                ' hover:text-purple-300 hover:border-purple-300 border-b-transparent',
            selected: 'bg-indigo-400/20 ',
        },
        footer: {
            nav: 'flex flex-col flex-wrap pb-6 mx-8 items-start w-full lg:w-auto justify-items-stretch',
            link: 'text-sm w-full lg:w-auto lg:px-4 font-body text-purple-600 lg:text-sm pt-1 pb-1 px-8' +
                'border-b-4 hover:text-purple-300 hover:border-purple-300 border-b-transparent',
            selected: '',
        }
    };

    if (locations[location]) {
        styleNav = locations[location].nav;
        styleLink = locations[location].link;
        selected = locations[location].selected;
    }

    return (<>
        <nav className={styleNav}>
            <NavBarLink styleLink={styleLink} styleSelected={selected} href="#" selected={true}>Inicio</NavBarLink>
            <NavBarLink styleLink={styleLink} styleSelected={selected} href="#">Talleres de Quiyoca</NavBarLink>
            <NavBarLink styleLink={styleLink} styleSelected={selected} href="#">Practicas de Yoga</NavBarLink>
            <NavBarLink styleLink={styleLink} styleSelected={selected} href="#">Velas y Jabones artesanales</NavBarLink>
            {children}
        </nav>
    </>);
}
export default NavBar