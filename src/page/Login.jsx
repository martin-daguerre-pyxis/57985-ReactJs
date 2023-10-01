import DefaultLayout from "../layouts/default.layout";
import publicUrl from '../utils';
import Article from '../components/content/Article';
import withAuth from '../hocs/withAuth';
import { Link } from 'react-router-dom';

const Login = (props) => {
  return (
    <DefaultLayout auth={props.auth} store={props.store} className="flex flex-col justify-around flex-grow layout_home-page font-body">
            <Article title=" "
             picture={`${publicUrl}comming.svg`} pictureClass=" w-[90vw] lg:w-[40vw]">
            <div className="mb-2 text-5xl font-bold text-purple-700 font-dark">Login / Registro</div>
            <p
              className="text-2xl font-light leading-normal md:text-3xl"
            >No implementado aún!</p>
          <p className="mb-8">Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra página de inicio.</p>
          
          <Link to="/" className="inline px-4 py-2 text-xl font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue active:bg-purple-600 hover:bg-purple-700">Ir al Inicio</Link>
            </Article>
    </DefaultLayout>
  )
}

export default withAuth(Login);