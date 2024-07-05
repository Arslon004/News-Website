import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { toast } from 'react-toastify';
import Loading from '../components/shares/Loading';
import JeweleryCard from '../components/card/JeweleryCard';

export class Jewelery extends Component {
   state={
    loading:false,
    jeweleryCards:[],
   }
   async getJeweleryProducts(){
    try{
      this.setState({loading:true});
     let {data}=await axios.get("https://fakestoreapi.com/products/category/jewelery");
     this.setState({jeweleryCards:data});
    }
    catch(err){
      console.log(err);
      toast.error("Error")
    }
    finally{
      this.setState({loading:false});
    }
   }
   componentDidMount(){
    this.getJeweleryProducts();
   }
  render() {
    let {jeweleryCards,loading}=this.state;
    return (
      <Fragment>
      <section>
        <div className="container">
          <h2 className='pages_title'>Jewelery ({jeweleryCards.length})</h2>
          {loading ? (<Loading/>)
          :
          ( <div className='products-container'>
            {jeweleryCards.map((jewelery)=> <JeweleryCard key={jewelery.id} {...jewelery}/>)}
          </div>)
          }
        </div>
      </section>
    </Fragment>
    )
  }
}

export default Jewelery