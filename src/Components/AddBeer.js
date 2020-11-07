import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'

class AddBeer extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          // todo
      }
    }

    render(){
      return (
        <div>
            <Header />
            <h1>Je suis la nouvelle beer</h1>
        </div>
      )
    }
  }
  
  export default AddBeer;