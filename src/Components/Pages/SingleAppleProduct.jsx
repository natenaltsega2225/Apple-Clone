import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AxiosInstance from '../../utils/axios'
function SingleAppleProduct() {
  // Initialize state to hold the filtered product
  const [product, setProduct] = useState(null);

  // Retrieve the product ID from the URL parameters
  const { pid } = useParams();

  useEffect(() => {
    // Fetch iPhones data from the API
    const fetchProduct = async () => {
      try {

        // using axios
        const response = await AxiosInstance.get("/iphones");
        // Find the product that matches the given product ID (pid)
        const productList = response.data.products;
        const singleProduct = productList.find(
          (item) => item.product_name === pid
        );

        // Set the state with the found product
        setProduct(singleProduct);


        //using fetch method
        // const response = await fetch("http://localhost:3001/iphones");
        // const data = await response.json();

        // // Find the product that matches the given product ID (pid)
        // const productList = data.products;
        // const singleProduct = productList.find(
        //   (item) => item.product_name === pid
        // );

        // // Set the state with the found product
        // setProduct(singleProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [pid]); // Re-run the effect if pid changes

  // Render the component
  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          {product ? (
            <div key={product.product_url} className="bottom-100">
              <div className="row justify-content-center text-center bottom-50">
                <div className="col-12">
                  <div className="title-wrapper bold">{product.product_name}</div>
                  <div className="brief-description">
                    {product.product_brief_description}
                  </div>
                </div>
              </div>

              <div className="row justify-content-center text-center product-holder h-100">
                <div className="col-sm-12 col-md-6 my-auto">
                  <div className="starting-price">
                    {`Starting at ${product.starting_price}`}
                  </div>
                  <div className="monthly-price">{product.price_range}</div>
                  <div className="product-details">
                    {product.product_description}
                  </div>
                </div>

                <div className="col-sm-12 col-md-6">
                  <div className="product-image">
                    <img src={product.product_img} alt={product.product_name} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row justify-content-center text-center">
              <div className="col-12">
                <p>Loading product details...</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default SingleAppleProduct;
