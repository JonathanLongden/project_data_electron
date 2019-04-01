import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import DeleteBeer from '../delete/index';
import Createbeer from '../create/index';




class Read extends Component {
    constructor(props) {
      super(props);
      this.state = {
        beerTokenReducer : props.beerTokenReducer
      }
    
  }

  componentDidMount() {
      document.body.style.backgroundColor = "gray";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(JSON.stringify(prevProps.beerTokenReducer) !== JSON.stringify(this.props.beerTokenReducer)){
      this.setState({ beerTokenReducer: this.props.beerTokenReducer });
      }
  }


    render() {
      let BeerList = this.state.beerTokenReducer.map((beer) => {
        return (
          <li key={beer.id}>
             Name: {beer.name}
             Type : {beer.type}
             Abv% : {beer.abv}
             season : {beer.season}
            <Link to={'/beers/' + beer.id }> Edit </Link>
            <DeleteBeer id = {beer.id}/>
          </li>
        )
  
      });
      return (
        <div> 
          <div>
            <h1>Add a Beer</h1>
            <Createbeer />
          </div>
          {BeerList}
        </div>
      );
    }
  }

  //When Switching to a Different Page you must have withRouter() wraped in your export
  //Only way this.props.history.push will work!
  //https://stackoverflow.com/questions/47964206/cannot-read-property-push-of-undefined-react-error
  //export default withRouter(Callback);
  //export default connect(Callback)(Callback);

const ReadPage = ({beerTokenReducer}) =>  {
    return (
      <Read beerTokenReducer = {beerTokenReducer}/>
    );
};

ReadPage.propTypes = {
  beerTokenReducer: PropTypes.array
};

export default withRouter(ReadPage);
