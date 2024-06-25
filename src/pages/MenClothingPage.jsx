import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { toast } from 'react-toastify';
import Loading from '../components/shares/Loading';
import MensClothingCard from '../components/card/MensClothingCard';

export class MenClothingPage extends Component {
  state={
    loading:false,
    menClothingCards:[],
   }
   async getMensClothing(){
    try{
      this.setState({loading:true});
     let {data}=await axios.get("https://fakestoreapi.com/products/category/men's clothing");
     this.setState({menClothingCards:data});
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
    this.getMensClothing();
   }
  render() {
    let {loading,menClothingCards}=this.state;
    return (
      <Fragment>
      <section>
        <div className="container">
          <h2 className='pages_title'>Men's clothing</h2>
          {loading ? (<Loading/>)
          :
          (<div className='products-container'>
            {menClothingCards.map((menClothing)=><MensClothingCard key={menClothing.id} {...menClothing}/>)}
          </div>)
          }
        </div>
      </section>
    </Fragment>
    )
  }
}

export default MenClothingPage