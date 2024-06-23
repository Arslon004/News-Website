import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { toast } from 'react-toastify';
import Loading from './Loading';
import Card from '../components/card/Card';

export class CartPage extends Component {
  state ={
    loading:false,
    cardPage:[],
  }
  async getCart(){
    try{
      this.setState({loading:true})
      let {data}=await axios.get("https://fakestoreapi.com/carts");

      this.setState({cardPage:data});
    }
    catch(err){
      console.log(err);
      toast.error("Error");
    }
    finally{
      this.setState({loading:false})
    }
  }

  componentDidMount(){
    this.getCart()
  }
  render() {
    let {cardPage,loading}=this.state
    return (
     <Fragment>
      <section>
        <div className="container">
          <h2>CartPage</h2>
          {loading ? <Loading/>
          :
          cardPage.map((card)=> <Card key={card.id} {...card}/>)
          }
        </div>
      </section>
     </Fragment>
    )
  }
}

export default CartPage