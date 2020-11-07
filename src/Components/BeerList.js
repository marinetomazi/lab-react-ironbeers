import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import service, {listBeers} from '../service'


class BeerList extends React.Component {
    constructor(props){
      super(props);
        this.state = { listOfBeers: [] };
      }

      getAllBeers = () =>{
        listBeers()
        .then(responseFromApi => {
          this.setState({
            listOfBeers: responseFromApi.data
          })
        })
    }

    componentDidMount() {
        this.getAllBeers();
      }

    render(){
      return (
        <div>
            <Header />
            <h1>Je suis la beer list</h1>
            <div style={{width: '60%', float:"left"}}>
                    {this.state.listOfBeers.length <= 0 && "Loading beers . . . "}
                    {this.state.listOfBeers.map( beer => {
                    return (
                    <div key={beer._id}>    
                        <img src={beer.image_url}></img>
                        <Link to={`/beers/${beer._id}`}>
                        <h3>{beer.name}</h3>
                        </Link>
                        <h4>{beer.tagline}</h4>
                        <p>{beer.contributed_by}</p>
                    </div>
                    )})
                }
            </div>
        </div>
      )
    }
  }
  
  export default BeerList;