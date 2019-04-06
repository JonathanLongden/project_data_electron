import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import DeleteBeer from '../delete/index';
import CreateBeer from '../create/index';
import UpdateBeer from '../update/index';
import './read.css';



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
          <div className="feed" key={beer.id}>
             Name: {beer.name} {" "}
             <br/>
             Type : {beer.type} {" "}
             <br/>
             Abv% : {beer.abv} {" "}
             <br/>
             season : {beer.season}
             <br/>
             <DeleteBeer id = {beer.id}/>
            
            <br/>
            <UpdateBeer obj = {beer} />
          </div>
        )
  
      });
      return (
        <div> 
          <div>      
            <CreateBeer />
          </div>
          <div className="flex-container">
            {BeerList}
          </div>
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
