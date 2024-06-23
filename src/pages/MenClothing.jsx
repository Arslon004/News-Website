import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { toast } from 'react-toastify';
import MensCard from '../components/card/MensCard';

export class MenClothing extends Component {
  state={
    loading:false,
    clothingCards:[],
  }
  async getMensClothing(){
    try{
     let {data} = axios.get("https://fakestoreapi.com/products/category/men's%20clothing");
     this.setState({clothingCards:data});
    }
    catch(err){
      console.log(err);
      toast.error("Error")
    }
    finally{
      this.setState({loading:false})
    }
  }

  componentDidMount(){
    this.getMensClothing();
  }
  render() {
    let {clothingCards,loading}=this.state
    return (
      <Fragment>
        <section>
          <div className="container">
            {clothingCards.map((clothing)=> <MensCard {...clothing}/>)}
          </div>
        </section>
      </Fragment>
    )
  }
}

export default MenClothing