import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../components/shares/Loading';
import ProductsCard from '../components/card/ProductsCard';

export class HomePage extends Component {
  state = {
    loading: false,
    products: [],
  };

  async getProducts() {
    try {
      this.setState({ loading: true });
      let { data } = await axios.get("https://fakestoreapi.com/products");
      this.setState({ products: data });
    } catch (err) {
      console.log(err);
      toast.error("Error")
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    let { loading, products } = this.state;

    return (
      <Fragment>
        <section>
          <div className="container">
            <h2 className='pages_title'>All products ({products.length})</h2>

            {loading ? (
              <Loading />
            ) : (
              <div className="products-container">
                {products.map((product) => (
                  <ProductsCard key={product.id} {...product} />
                ))}
              </div>
            )}
          </div>
        </section>
      </Fragment>
    );
  }
}

export default HomePage;
