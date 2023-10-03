import DefaultLayout from "../layouts/default.layout";
import publicUrl from '../utils';
import Article from '../components/content/Article';
import withAuth from '../hocs/withAuth';
import { Link } from 'react-router-dom';

const Error404 = (props) => {
  const context = {
    auth: props.auth,
    store: props.store
  };
  return (
      <DefaultLayout context={context} className="flex flex-col justify-around flex-grow layout_home-page font-body">
      <Article title=" "
        picture={`${publicUrl}404.svg`} pictureClass=" w-[90vw] lg:w-[40vw]">
        <div className="mb-8 text-5xl font-bold text-purple-700 font-dark">Lo sentimos, no hemos podido encontrar esta página.</div>
        <p className="mb-8">Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra página de inicio.</p>
        <Link to="/" className="inline px-4 py-2 text-xl font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue active:bg-purple-600 hover:bg-purple-700">Ir al Inicio</Link>
      </Article>
    </DefaultLayout>
  )
}


export default withAuth(Error404);