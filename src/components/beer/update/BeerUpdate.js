import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';

class BeerUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      beer: {},
      name: "",
      brewery:"",
      alcoholContent: ""
    }

    /*
     * explicitly bind "this" which refers to
     * this component "BeerUpdate"
     */
    this.updateBeer = this.updateBeer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    var currentBeer = this.GetCurrantBeer(this.state.id, this.props.beers);

    console.log()
    if(currentBeer){
      var beerName = currentBeer.map((beer) => {
        return beer.name;
      })
      var beerbrewery = currentBeer.map((beer) => {
        return beer.brewery;
      })
      var beeralcoholContent = currentBeer.map((beer) => {
        return beer.alcoholContent;
      })

      this.setState({
        beer: currentBeer,
        name: beerName,
        brewery: beerbrewery,
        alcoholContent: beeralcoholContent
        });
      }
    }

  // componentDidMount() {
  //   // this.dothis(beer){
  //   //   this.setState({
  //   //     name: beer.name,
  //   //     brewery: beer.brewery,
  //   //     alcoholContent: beer.alcoholContent,
  //   //   });
  //   // };
  //   // API GET request => get beer by Id
  //   // axios.get('/api/beers/' + this.props.match.params.id)
  //   //   .then((response) => {
  //   //     this.setState({
  //   //       name: response.data.name,
  //   //       brewery: response.data.brewery,
  //   //       alcoholContent: response.data.alcoholContent
  //   //     })
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });
  // }

  /**
   * Update state every key stroke in input fields
   * https://reactjs.org/docs/forms.html#controlled-components
   */
  handleInputChange(e) {
    /*
     * [e,target.name] can get value of the "name" attribute of
     * the input field which is currenlty typed in
     */
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  /* Gets called when user clicks "Update Beer" button
   * via JS native onSubmit form event handler
   */
  updateBeer(e) {
    e.preventDefault(); // prevent browser-standard of reloading page on form submit

    this.props.UpdateAction({
      id: this.state.id,
      name: this.state.name,
      brewery: this.state.brewery,
      alcoholContent: this.state.alcoholContent
    });

  }

  GetCurrantBeer(id, beers){
    if(!beers){
      return {id:"1", name:"temp", brewery:"temp", alcoholContent:"temp"};
    }
    else
    {
      for(let i = 0; i < beers.length; i ++){
        if(id.toString() === beers[i].id.toString()){

          return [beers[i]];
        }
      }
    }
  }
  render() {
    if(this.state.name !== "" && Object.getOwnPropertyNames(this.state.beer).length !== 0){
      var beerSingle = this.state.beer.map((beer) => {
        return (
          <div key={beer.id}>
            <form  onSubmit={ this.updateBeer }>
              <label>
                Name:
                <input value={this.state.name} name="name" type="text" onChange={ this.handleInputChange }/>
              </label><br />
              <label>
                Brewery:
                <input value={this.state.brewery  } name="brewery" type="text" onChange={ this.handleInputChange }/>
              </label><br/>
              <label>
                Alcohol Content:
                <input value={ this.state.alcoholContent } name="alcoholContent" type="number" onChange={ this.handleInputChange }/>
              </label><br/>
              <button  >Update Beer</button>
            </form>
          </div>
        )

      });
    }

  return (
    <div>
      <h3>Update Beer</h3>
        {beerSingle}
      <Link to={ '/beers/' + this.state.id}> <button>Back</button></Link> {/* Adds link back to beer details */}
    </div>
    );
  }
}

export default BeerUpdate;
