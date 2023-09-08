import publicUrl from "../utils";
import CartWidget from "./CartWidget";
function NavBar() {
    return (<>
        <header className="p-0 m-0 text-yellow-100 body-font bg-violet-900">
            <div className="container flex flex-col flex-wrap items-center p-0 mx-auto md:flex-row">
                <a className="flex items-center mb-4 font-medium text-orange-300 title-font md:mb-0 hover:text-orange-400" href="/" title="Ecommerce MDD">
                    <img src={publicUrl + "/logo.svg"} className="w-16" alt="logo" />
                    <span className="ml-3 text-xl">Ecommerce MDD</span>
                </a>
                <nav className="flex flex-wrap items-center text-base md:ml-auto md:mr-auto justify-items-stretch">
                    <a className="py-6 mr-5 border-b-2 hover:text-orange-400 hover:border-orange-400 border-b-transparent" href="/" title="">Categoría 1</a>
                    <a className="py-6 mr-5 border-b-2 hover:text-orange-400 hover:border-orange-400 border-b-transparent" href="/" title="">Categoría 2</a>
                    <a className="py-6 mr-5 border-b-2 hover:text-orange-400 hover:border-orange-400 border-b-transparent" href="/" title="">Categoría 3</a>
                    <a className="py-6 mr-5 border-b-2 hover:text-orange-400 hover:border-orange-400 border-b-transparent" href="/" title="">Categoría 4</a>
                    <a className="py-6 mr-5 border-b-2 hover:text-orange-400 hover:border-orange-400 border-b-transparent" href="/" title="">Categoría 5</a>
                </nav>
                <CartWidget></CartWidget>
            </div>
        </header>
    </>);
}

export default NavBar;