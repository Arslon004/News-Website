import axios from 'axios';
import React, { Component, Fragment} from 'react'
import { toast } from 'react-toastify';
import WomensCard from '../components/card/WomensCard';

export class WomensPage extends Component {
    state={
      loading:false,
      womenCards:[],
    }

    async getWomensCard(){
      try{
        this.setState({loading:true})
        let {data} = await axios.get("https://fakestoreapi.com/products/category/women's clothing");

        this.setState({womenCards:data});
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
      this.getWomensCard();
    }
  render() {
    let {loading, womenCards}=this.state
    return (
      <Fragment>
        <section>
          <div className="container">
            {womenCards.map((womenCard)=><WomensCard key={womenCard.id} {...womenCard}/>)}
          </div>
        </section>
      </Fragment>
    )
  }
}

export default WomensPage