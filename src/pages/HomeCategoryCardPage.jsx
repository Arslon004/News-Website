import axios from 'axios';
import { toast } from 'react-toastify';
import React, { Component, Fragment } from 'react'
import Loading from '../components/shares/Loading';
import { Link } from 'react-router-dom';

export class HomeCategoryCardPage extends Component {

  state={
    loading:false,
    categoryCardPage:[],
  }

  async getCategoryCardPage(){
    try{
      this.setState({loading:true})
      let productId=window.location.pathname.split("/").at(-1);
      let {data}=await axios.get(`https://fakestoreapi.com/products/${productId}`);
      this.setState({categoryCardPage:data});
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
    this.getCategoryCardPage();
  }
  render() {
    let {loading,categoryCardPage}=this.state;
    return (
      <Fragment>
        <section>
          <div className="container">
            {loading ? <Loading/>
            :
             <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <img style={{margin:"30px",maxWidth:"300px"}} src={categoryCardPage?.image} alt="" />
              <h1 style={{fontSize:"40px",color:"cadetblue"}}>{categoryCardPage?.title}</h1>
              <p style={{fontSize:"25px",color:"chocolate",maxWidth:"85%"}}>{categoryCardPage?.description}</p>
              <p style={{color:"darkmagenta",fontSize:"40px"}}>Price:<span style={{fontWeight:"bold",color:"teal",fontSize:"45px"}}>{categoryCardPage?.price}$</span></p>

              <Link to={`/`} style={{paddingTop:"10px",paddingBottom:"10px",backgroundColor:"blue",paddingLeft:"20px",paddingRight:"20px",color:"white",opacity:"0.8",borderRadius:"6px",cursor:"pointer"}}>Back to Home</Link>
             </div>
            }
          </div>
        </section>
      </Fragment>
    )
  }
}

export default HomeCategoryCardPage