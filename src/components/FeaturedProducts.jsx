// DATABASE
import supabase from "../supabase/config";

// HOOKS
import { useEffect, useState } from "react";

// COMPONENTS
import ProductCard from "./ProductCard";
import './ProductsList.css'
/* ----------------------------------------------- */

function FeaturedProducts() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    async function getFeaturedProducts() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select()
          .eq("featured", true);
        console.log("THIS IS THE ARRAY OF FEATURED PRODUCTS", data);
        setFeatured(data);

      } catch (error) {
        console.error(error);
      }
    }

    /*  async function getFeaturedProducts() {
      try {
        await featureProducts();
        const response = await supabase
          .from("products_fetured")
          .select("products (image, title, category, price, id)");
       
        console.log(featured);
      } catch (error) {
        console.error(error);
      }
    } */
    getFeaturedProducts();
  }, []);

  return (
    <div>
      <h1>Featured</h1>
      <section className="product-list">
        {featured &&
          featured.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </section>
    </div>
  );
}

export default FeaturedProducts;
