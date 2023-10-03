import NavBarLink from './NavBarLink';
//import FlyoutCategories from './FlyoutCategories';

const NavBar = ({ children, location, categories=[] }) => {

    let styleNav = ' flex flex-col flex-wrap items-center w-full lg:flex-row lg:w-auto justify-items-stretch ';
    let styleLink = ' text-base px-4 ';
    let selected = ' bg-indigo-400/20 ';
    const styleLocations = {
        header: {
            nav: 'flex flex-col flex-wrap items-center w-full lg:flex-row lg:w-auto justify-items-stretch ',
            link: 'text-lg w-full lg:w-auto lg:px-4 font-title text-white lg:text-xl pt-4 pb-4 px-8 border-b-4 ' +
                ' hover:text-purple-300 hover:border-purple-300 border-b-transparent ',
            selected: 'bg-purple-400/80 text-purple-300',
        },
        footer: {
            nav: 'flex flex-col flex-wrap pb-6 mx-8 items-start w-full lg:w-auto justify-items-stretch ',
            link: 'text-sm w-full lg:w-auto lg:px-4 font-body text-white lg:text-sm pt-1 pb-1 px-8 ' +
                'border-b-4 hover:text-purple-300 hover:border-purple-300 border-b-transparent ',
            selected: '',
        }
    };

    if (styleLocations[location]) {
        styleNav = styleLocations[location].nav;
        styleLink = styleLocations[location].link;
        selected = styleLocations[location].selected;
    }

    return (<>
        <nav className={styleNav}>
            <NavBarLink styleLink={styleLink} styleSelected={selected} href="/" selected={true}>Inicio</NavBarLink>
            {/* <FlyoutCategories styleLink={styleLink} styleSelected={selected} /> */}

            {categories.map((cat) => (
                <NavBarLink key={cat.id} styleLink={styleLink} styleSelected={selected} href={`/category/${cat.id}/${cat.category}`}>{cat.category}</NavBarLink>
            ))}

            {/* <NavBarLink styleLink={styleLink} styleSelected={selected} href="/category/1/Escritorios">Escritorios</NavBarLink>
            <NavBarLink styleLink={styleLink} styleSelected={selected} href="/category/2/Alfombras">Alfombras</NavBarLink>
            <NavBarLink styleLink={styleLink} styleSelected={selected} href="/category/2/Accesorios%20deportivos">Accesorios deportivos</NavBarLink> */}
            {children}
        </nav>
    </>);
}
export default NavBar