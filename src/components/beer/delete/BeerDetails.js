import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';

class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id
    }
    console.log(props)
    console.log(props.match.params.id)
  }

  componentWillMount(){
    console.log(this.state);
    this.setState(
        this.props.beers.find(beer => parseInt(beer.id) === parseInt(this.state.id))
    );
    console.log(this.state);



  }

  // GetCurrantBeer(id, beers){
  //   if(!beers){
  //     return [];
  //   }
  //   else
  //   {
  //     for(let i = 0; i < beers.length; i ++){
  //       if(id == beers[i].id){
  //         return [beers[i]];
  //       }
  //     }
  //   }
  // }



  render() {;
    // let currentBeer = this.GetCurrantBeer(this.state.id, this.props.beers);

    // if(currentBeer){
    // var beerSingle = currentBeer.map((beer) => {
    //   return (
    //     <div key={beer.id}>
    //         <li>Name: { beer.name }</li>
    //         <li>Brewery: { beer.brewery }</li>
    //         <li>Alochol Content: { beer.alcoholContent }</li>
    //     </div>
    //   )

    // });
  //}

    return (
      <div>
        <h3>Beer Details</h3>
        <ul>
          <div>
            <li>Name: { this.state.name }</li>
            <li>Brewery: { this.state.brewery }</li>
            <li>Alochol Content: { this.state.alcoholContent }</li>
            </div>
        </ul>
        <Link to='/'><button>Back</button></Link>  {/* Adds link back to base url "/" */}
        <Link to={ '/beers/update/' + this.state.id }><button>Edit</button></Link>  {/* Adds link to beer update form */}
      </div>
    );
  }
}
//<ul>
//{beerSingle}
//</ul>
export default BeerDetails;

