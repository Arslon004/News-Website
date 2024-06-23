import axios from 'axios'
import React, { Component, Fragment } from 'react'
import Loading from './Loading';
import { toast } from 'react-toastify';

export class HomeCardPage extends Component {

  state={
    card:[],
    loading:false,
  }
 async getHomeCard(){
  try{
    let homeCardId=window.location.pathname.split("/").at(-1);
    this.setState({loading:true});
    let {data} = await axios.get(`https://fakestoreapi.com/products/${homeCardId}`);
    this.setState({card:data});
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
    this.getHomeCard()
  }
  render() {
    let {loading,card}=this.state;
    return (
      <Fragment>
        <section>
          <div className="container">
            {loading ? <Loading/>
            :
            <Fragment>
              <img style={{width:"15rem",paddingTop:"5rem",marginLeft:"50%",transform:"translateX(-50%)"}} src={card?.image} alt="" />
              <h1 style={{color:"orange",textAlign:"center"}}> {card?.title} </h1>
              <h2 style={{fontSize:"40px",color:"red"}}>Price {card?.price}$ </h2>
              <p style={{fontSize:"25px"}}>{card?.description}</p>
            </Fragment>
            }
          </div>
        </section>
      </Fragment>
    )
  }
}

export default HomeCardPage
