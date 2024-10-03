import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchparams, setSearchParams] = useSearchParams(); //to check the keyword in url
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/products?" + searchparams).then(
      (res) => res.json().then((res) => setProducts(res.products))
    );
  }, [searchparams]); //whenever url changes it calls api accoringly

  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    </Fragment>
  );
}