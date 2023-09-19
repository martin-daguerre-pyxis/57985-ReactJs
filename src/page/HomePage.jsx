import DefaultLayout from "../layouts/default.layout";
import publicUrl from '../utils';
import Article from '../components/content/Article';
import ItemListContainer from '../components/content/ItemListContainer';
import Productlist from '../components/products/Productlist';

const HomePage = () => {
  return (
    <DefaultLayout className="flex flex-col justify-around flex-grow layout_home-page font-body">
      <ItemListContainer className="shadow-2xl shadow-indigo-600/50">
        <Article
          picture={publicUrl + "/FotoEvento1.webp"}
          title="Bienvenid@!"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac interdum eros, in accumsan neque. Phasellus sollicitudin dapibus scelerisque."
          link="#"
          className=""
        >
          <p className="hidden pt-6 text-base line-clamp-6 sm:flex">Maecenas faucibus facilisis ex. Integer vel faucibus mauris. Nulla aliquam mauris eu volutpat cursus.</p>
        </Article>
      </ItemListContainer>
      <Productlist></Productlist>
    </DefaultLayout>
  )
}

export default HomePage;