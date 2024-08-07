import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { toast } from 'react-toastify';
import Loading from '../components/shares/Loading';
import ElectronicsCard from '../components/card/ElectronicsCard';

export class ElectronicPage extends Component {
  state={
    loading:false,
    electronics:[],
   }
   async getElectronics(){
    try{
      this.setState({loading:true});
      let {data}=await axios.get("https://fakestoreapi.com/products/category/electronics");

      this.setState({electronics:data});
    }
    catch(err){
      console.log(err);
      toast.error("Error");
    }
    finally{
      this.setState({loading:false});
    }
   }

   componentDidMount(){
    this.getElectronics();
   }
  render() {
    let {loading,electronics}=this.state;
    return (
      <Fragment>
      <section>
        <div className="container">
          <h2 className='pages_title'>Electronics ({electronics.length})</h2>
          {loading ? (<Loading/>)
          :
          (<div className='products-container'>
            {electronics.map((electronic)=><ElectronicsCard key={electronic} {...electronic}/>)}
          </div>)
          }
        </div>
      </section>
    </Fragment>
    )
  }
}

export default ElectronicPage