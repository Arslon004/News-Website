import axios from 'axios'
import { toast } from 'react-toastify';
import React, { Component, Fragment } from 'react'

import HomeCard from '../components/card/HomeCard';
import Loading from './Loading';

export class HomePage extends Component {

  state = {
    categories: [],
    loading: false,
    total: 0,
    currentPage: 1,
  }

  async getCategories(page = 1) {
    try {
      this.setState({ loading: true });
      const limit = 5;
      const skip = (page - 1) * limit;
      let { data } = await axios.get(`https://fakestoreapi.com/products`, { params: { limit, skip } });

      let { data: allData } = await axios.get(`https://fakestoreapi.com/products`);

      this.setState({ categories: data, total: allData.length, currentPage: page });
    }
    catch (err) {
      console.log(err);
      toast.error('Error');
    }
    finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getCategories();
  }

  render() {
    const { categories, loading, total, currentPage } = this.state;

    const pages = Math.ceil(total / 5);

    const getPage = (page) => {
      this.getCategories(page);
    }

    return (
      <Fragment>
        <section>
          <div className="container">
            <h1>Home Page {total}</h1>
            {loading ? <Loading /> :
              categories.map((category) => <HomeCard key={category.id} {...category} />)}

            {Array.from({ length: pages }, (_, i) => (
              <button key={i} onClick={() => getPage(i + 1)}>{i + 1}</button>
            ))}
          </div>
        </section>
      </Fragment>
    )
  }
}

export default HomePage;
