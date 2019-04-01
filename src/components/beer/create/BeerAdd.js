import React, { Component } from 'react';


class BeerAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      craftedBy: 'MAP Brewing',
      alcoholContent: 0,
      breweries: [
        'MAP Brewing',
        'Bridger Brewing',
        '406 Brewing'
      ]
    }
    this.addBeer = this.addBeer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }



  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  addBeer(e){
    e.preventDefault();
    this.props.action({
      name: this.state.name,
      brewery: this.state.craftedBy,
      alcoholContent: this.state.alcoholContent
    });

  }

  render() {
    let breweryItems = this.state.breweries.map((brewery, index) => {
      return (
        <option key={index} value={brewery}>
          {brewery}
        </option>
      )
    });

    return (
      <form onSubmit={this.addBeer }>
        <label id="newBeerName">Name:</label>
        <input id="newBeerName" name="name" type="text" onChange={ this.handleInputChange }/><br/>
        <label id="newBeerBrewery">Brewery:</label>
        <select id="newBeerBrewery" name="craftedBy" onChange={ this.handleInputChange }>
          { breweryItems }
        </select>
        <br/>
        <label id="newBeerAlcoholContent">Alcohol Content:</label>
        <input id="newBeerAlcoholContent" name="alcoholContent" type="number" onChange={ this.handleInputChange }/><br/>
        <button>Add Beer</button>
      </form>
    );
  }
}

export default BeerAdd;
