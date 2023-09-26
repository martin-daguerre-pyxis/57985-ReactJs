import DefaultLayout from "../layouts/default.layout";
import publicUrl from '../utils';
import Article from '../components/content/Article';
import ItemListContainer from '../components/products/ItemListContainer';
import withAuth from '../hocs/withAuth';

const HomePage = () => {
  return (
    <DefaultLayout className="flex flex-col justify-around flex-grow layout_home-page font-body">
      <Article
        picture={publicUrl + "/betty.webp"}
        title="Bienvenid@!"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac interdum eros, in accumsan neque. Phasellus sollicitudin dapibus scelerisque."
        link="#"
        className=""
      >
        <span className="hidden pt-2 text-lg font-title line-clamp-6 sm:flex">Maecenas faucibus facilisis ex. Integer vel faucibus mauris. Nulla aliquam mauris eu volutpat cursus.</span>
      </Article>
      <ItemListContainer></ItemListContainer>
    </DefaultLayout>
  )
}

export default withAuth(HomePage);