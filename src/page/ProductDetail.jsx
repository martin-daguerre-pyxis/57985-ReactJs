import DefaultLayout from "../layouts/default.layout";
import Item from '../components/products/Item';
import withAuth from '../hocs/withAuth';
import { useEffect, useState } from 'react';
import GetDataProduct from '../data/GetDataProduct';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const { itemId, slug } = useParams();

  useEffect(() => {
    GetDataProduct(itemId).then(productsData => {
      setProduct(productsData);
    });
  }, []);

  const addToCart = () => {

  }
  const context = {
    auth: props.auth,
    store: props.store
  };

  if (!product) return (<>
    <DefaultLayout context={context} 
      className="flex flex-col justify-around flex-grow layout_home-page font-body">
      <div className="container flex flex-row flex-wrap justify-center gap-3 mx-auto mt-16 mb-16 lg:gap-6 columns-2 lg:columns-3">
        <div className="text-center">
          <div className="mt-64 text-lg">
            Cargando
            <div className="text-3xl">{slug}</div>
          </div>
          <div className="relative mx-auto mt-6 mb-36 h-24 w-24 animate-spin rounded-full border-4 border-solid border-deep-purple-500 border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]">
            <span className="absolute left-1/2 overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"></span>
          </div>
          <Link to="/" className="p-6 text-center underline">Volver al inicio</Link>
        </div>
      </div>
    </DefaultLayout>
  </>
  );

  return (<>
    <DefaultLayout context={context} 
      className="flex flex-col justify-around flex-grow font-body">
      <div className="container mx-auto">

        <Item
          key={product.id}
          addToCart={addToCart}
          props={{
            context,
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            thumbnails: product.thumbnails,
            stock: product.stock,
            discounts: product.discounts,
            brand: product.brand,
            category: product.category,
            images: product.images,
            video: product.video,
          }}
        />

      </div>
    </DefaultLayout>
  </>
  )

}

export default withAuth(ProductDetail);