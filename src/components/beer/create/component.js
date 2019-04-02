import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import './create.css';


let CreateObject = keys => {
  let n_obj = {}
    keys.forEach(function(k) {

        n_obj[k] = "";

      });
  return n_obj;
}

class Create extends Component {
    constructor(props) {
      super(props);
      this.state = {
        beerTokenReducer : props.beerTokenReducer,
        keys: Object.keys(props.beerTokenReducer),
        addBeer: props.addBeer,
        obj: CreateObject(Object.keys(props.beerTokenReducer))
       
      }
     
  }

  componentDidMount() {
      //document.body.style.backgroundColor = "gray";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(JSON.stringify(prevProps.beerTokenReducer) !== JSON.stringify(this.props.beerTokenReducer)){
      this.setState({ beerTokenReducer: this.props.beerTokenReducer });
    }
    if(JSON.stringify(prevProps.addBeer) !== JSON.stringify(this.props.addBeer)){
      this.setState({ addBeer: this.props.addBeer });
    }

  }

  AddObject(obj){
    let addBeer = this.state.addBeer;
    addBeer(obj);
   
  }


    render() {
      //https://reactjs.org/docs/handling-events.html
     
      let forms = this.state.keys.map((k,m) => {
        if(k.includes("id")){
          return (
            <div key={m}>
                {k}<br/>
                <input type="text" name={k} value={"Field will be Generated"} disabled/>
            </div>
          )
        }
        else{
          return (
            <div key={m}>
                {k}<br/>
                <input type="text" name={k} value={this.state.obj.k} onChange={ev => this.setState({obj: {...this.state.obj, [k]:ev.target.value}})}/>
            </div>
          )
        }
       
      });

      return (
        <div> 
          <section className="container">
            <div className="one">
            <form>
              {forms}
            </form>
            </div>
            <div className="two">
              <button className="Submit"onClick={() => this.AddObject(this.state.obj)} >Add a Beer</button>
            </div>
          </section>
        </div>
      );
    }
  }

const CreatePage = ({beerTokenReducer , addBeer}) =>  {
    return (
      <Create beerTokenReducer = {beerTokenReducer} addBeer = {addBeer}/>
    );
};

CreatePage.propTypes = {
  beerTokenReducer: PropTypes.object,
  addBeer: PropTypes.func
};

export default withRouter(CreatePage);

