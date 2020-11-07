import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import service, {getBeer} from '../service';

class SingleBeerDetail extends React.Component {
  
    state ={
         singleBeer : null,
    }
   
    componentDidMount(){
        this.getSingleBeer();
    }

    getSingleBeer = () =>{
        const {params} = this.props.match; // récupère les paramètres
        getBeer(params.id)// paramètres.id
        .then(responseFromApi => {
           const theBeer = responseFromApi.data;
           this.setState(theBeer);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return(
            <div key={this.state._id}> 
              <Header/>   
              <img src={this.state.image_url}></img>
              <h3>{this.state.name}</h3>
              <h4>{this.state.tagline}</h4>
              <h5>{this.state.first_brewed}</h5>
              <h5>{this.state.attenuation_level}</h5>
              <p>{this.state.description}</p>
              <h6>{this.state.contributed_by}</h6>
            </div>

        )
    }
}
  
  export default SingleBeerDetail;