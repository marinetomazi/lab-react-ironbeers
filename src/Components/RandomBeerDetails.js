import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import service, {getRandom} from '../service';

class RandomBeerDetails extends React.Component {
  
    state ={
         randomBeer : null,
    }
   
    componentDidMount(){
        this.getRandomBeer();
    }

    getRandomBeer = () =>{
       
        getRandom()
        .then(responseFromApi => {
           const theRandomBeer = responseFromApi.data;
           this.setState(theRandomBeer);
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

export default RandomBeerDetails;