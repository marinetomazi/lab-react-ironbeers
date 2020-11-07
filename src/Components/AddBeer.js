import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import service, {newBeer} from '../service'



class AddBeer extends React.Component {
    constructor(props){
        super(props);
    this.state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
      }
    }
    
      handleFormSubmit = (event) => {
        event.preventDefault();
        const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
        newBeer(this.state)
        .then( () => {
            this.props.getData();
            this.setState({
                name: "",
                tagline: "",
                description: "",
                first_brewed: "",
                brewers_tips: "",
                attenuation_level: "",
                contributed_by: ""
            });
        })
        .catch( error => console.log(error) )
      }

      handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
      return (
        <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          <label>Tagline:</label>
          <input type="text" name="tagline" value={this.state.tagline} onChange={ e => this.handleChange(e)}/>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          <label>First Brewed:</label>
          <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={ e => this.handleChange(e)}/>
          <label>Brewers Tips:</label>
          <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={ e => this.handleChange(e)}/>
          <label>Attenuation Level:</label>
          <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={ e => this.handleChange(e)}/>
          <label>Contributed By:</label>
          <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={ e => this.handleChange(e)}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
      )
    }
  }
  
  export default AddBeer;