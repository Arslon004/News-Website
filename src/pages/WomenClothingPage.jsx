import axios from 'axios';
import React, { Component, Fragment } from 'react'
import Loading from '../components/shares/Loading';
import WomenClothingCard from '../components/card/WomenClothingCard';

export class WomenClothingPage extends Component {
  state={
    loading:false,
    womenClothingCards:[],
   }
   async getWomenClothing(){
    try{
      this.setState({loading:true});
      let {data}=await axios.get("https://fakestoreapi.com/products/category/women's clothing");

      this.setState({womenClothingCards:data});
    }
    catch(err){
      console.log(err);
    }
    finally{
      this.setState({loading:false});
    }
   }

   componentDidMount(){
    this.getWomenClothing()
   }
  render() {
    let {loading,womenClothingCards}=this.state;
    return (
      <Fragment>
      <section>
        <div className="container">
        <h2 className="pages_title">Women Clothing page</h2>
        {loading ? (<Loading/>)
        :
        (<div className='products-container'>
          {womenClothingCards.map((womenClothing)=> <WomenClothingCard key={womenClothing.id} {...womenClothing}/>)}
        </div>)
        }
        </div>
      </section>
    </Fragment>
    )
  }
}

export default WomenClothingPage