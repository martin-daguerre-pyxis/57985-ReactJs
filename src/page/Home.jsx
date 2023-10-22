import DefaultLayout from "../layouts/default.layout";
import publicUrl from '../utils';
import Article from '../components/content/Article';
import ItemListContainer from '../components/products/ItemListContainer';
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <DefaultLayout className="flex flex-col justify-around flex-grow layout_home-page font-body">
        <Article
          picture={publicUrl + "subscribe.svg"}
          title="Encuentra las mejores ofertas en Accesorios deportivos!"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac interdum eros, in accumsan neque. Phasellus sollicitudin dapibus scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac interdum eros, in accumsan neque. Phasellus sollicitudin dapibus scelerisque."
          link="/category/3/Accesorios%20deportivos"
          pictureClass="subscribe animated w-full sm:w-[400px]"
        >
          <span className="pt-2 text-lg transition-all duration-700 font-title line-clamp-4 hover:line-clamp-none">Donec ac interdum eros, in accumsan neque. Phasellus sollicitudin dapibus scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <Link className="btn" to="/category/3/Accesorios%20deportivos">Accesorios deportivos</Link>
        </Article>
        <ItemListContainer></ItemListContainer>
      </DefaultLayout>
    </>
  )
}

export default Home;