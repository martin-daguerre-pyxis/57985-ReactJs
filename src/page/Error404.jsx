import DefaultLayout from "../layouts/default.layout";
import withAuth from '../hocs/withAuth';
import Article from "../components/content/Article";
import publicUrl from '../utils';
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <DefaultLayout className="flex flex-col justify-around flex-grow layout_home-page font-body">
            <Article title=" " className="container flex flex-col items-center justify-center px-5 mb-16 text-gray-700 py-28 md:flex-row" picture={`${publicUrl}/404.svg`}>
            <div class="text-5xl font-dark mb-2 font-bold text-purple-700">404</div>
            <p
              class="text-2xl md:text-3xl font-light leading-normal"
            >Lo sentimos, no hemos podido encontrar esta página.</p>
          <p class="mb-8">Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra página de inicio.</p>
          
          <Link to="/" class="px-4 inline py-2 text-xl font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-purple-600 active:bg-purple-600 hover:bg-purple-700">Ir al Inicio</Link>
            </Article>
        </DefaultLayout>
    )
}

export default withAuth(Error404);