import axios from 'axios'
import React, { Component, Fragment } from 'react'
import ElectronicCard from '../components/card/ElectronicCard';
import Loading from './Loading';

export class ElectronicsPage extends Component {
  state={
    loading:false,
    electronicCards:[],
  }

  async getElectronics(){
    try{
      this.setState({loading:true})
      let {data} = await axios.get(`https://fakestoreapi.com/products/category/electronics`);

      this.setState({electronicCards:data});
    }
    catch(err){
      console.log(err);
    }finally{
      this.setState({loading:false})
    }
  }

  componentDidMount(){
   this.getElectronics();
  }
  render() {
    let {electronicCards,loading}=this.state
    return (
      <Fragment>
        <section>
          <div className="container">
            <h1>ElectronicsPage</h1>
             { loading ? <Loading/>
             :
             electronicCards.map((electronic)=> <ElectronicCard {...electronic} key={electronic.id}/>)}
          </div>
        </section>
      </Fragment>
    )
  }
}

export default ElectronicsPage