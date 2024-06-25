import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { toast } from 'react-toastify';
import Loading from '../components/shares/Loading';
import CartCard from '../components/card/CartCard';

export class CartPage extends Component {
  state={
    loading:false,
    carts:[],
  }

  async getCarts(){
    try{
      this.setState({loading:true});
      let {data}=await axios.get('https://fakestoreapi.com/carts');
      this.setState({carts:data});
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
    this.getCarts();
  }
  render() {
    let {loading,carts}=this.state;
    return (
      <Fragment>
        <section>
          <div className="container">
            <h2 className='pages_title'>Cart</h2>
            {loading ? (<Loading/>)
            :
            (<div className='cart-container'>
              {carts.map((cart)=><CartCard key={cart.id} {...cart}/>)}
            </div>)
            }
          </div>
        </section>
      </Fragment>
    )
  }
}

export default CartPage