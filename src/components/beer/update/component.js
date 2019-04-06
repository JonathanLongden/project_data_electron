import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import './update.css';

class Update extends Component {
    constructor(props) {
      super(props);
      this.state = {
        updateBeer : props.updateBeer,
        obj : props.obj,
        keys: Object.keys(props.obj),
        isShowing: false
      }
      this.update = this.update.bind(this);
  }

  componentDidMount() {
      document.body.style.backgroundColor = "gray";
      
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(JSON.stringify(prevProps.updateBeer) !== JSON.stringify(this.props.updateBeer)){
      this.setState({ updateBeer: this.props.updateBeer });
    }
    if(JSON.stringify(prevProps.history) !== JSON.stringify(this.props.history)){
      this.setState({ history: this.props.history });
    }
    if(JSON.stringify(prevProps.match) !== JSON.stringify(this.props.match)){
      this.setState({ match: this.props.match });
    }
    if(JSON.stringify(prevProps.obj) !== JSON.stringify(this.props.obj)){
      this.setState({ obj: this.props.obj });
    }

  }

  update(e, obj, func){
    e.preventDefault();
    let updateObjById = func;
    updateObjById(obj)
    console.log(this.state)
  }
  showModal(e, isShowing){
    e.preventDefault();
    let Showing = isShowing  === true ? false : true;
    this.setState({ isShowing: Showing });
  
  }


    render() {
      let forms = this.state.keys.map((k,m) => {
        if(k.includes("id")){
          return (
            <div key={m}>
                {k}<br/>
                <input type="text" name={k} value={"Field cannot be Edited"} disabled/>
            </div>
          )
        }
        else{
          return (
            <div key={m}>
                {k}<br/>
                <input type="text" name={k} value={this.state.obj[k]} onChange={ev => this.setState({obj: {...this.state.obj, [k]:ev.target.value}})}/>
            </div>
          )
        }
       
      });
      //https://dev.to/achowba/building-a-modal-in-react-15hg
        return (
          <div className="fred"> 
            {/* <button className="open-modal-btn" onClick={(e) => this.update(e, this.state, this.state.updateBeer) }>Update Beer</button> */}
            <button className="open-modal-btn" onClick={(e)=>this.showModal(e,  this.state.isShowing)}>Edit</button>
            <div className="modal-wrapper"
              style={{
                  transform:  this.state.isShowing ? 'translateY(0vh)' : 'translateY(-75vh)',
                  opacity: this.state.isShowing ? '1' : '0'
              }}>
              <div className="modal-header">
                  <h3>Modal Header</h3>
                  <span className="close-modal-btn" onClick={(e)=>this.showModal(e,this.state.isShowing)}>×</span>
              </div>
              <div className="modal-body">
              
                  {forms}
               
              </div>
              <div className="modal-footer">
                <div className="wrapper-div">
                  <button className="btn-cancel" onClick={(e) => this.update(e, this.state.obj, this.state.updateBeer)}>Update</button>
                </div>
                
                  {/* <button className="btn-continue" >CONTINUE</button> */}
              </div>
          </div>

          </div>
        );  
      //https://reactjs.org/docs/handling-events.html
    }
  }

const UpdatePage = ({updateBeer, obj, history, match}) =>  {
    return (
      <Update updateBeer = {updateBeer} obj = {obj} history = {history} match = {match}/>
    );
};

UpdatePage.propTypes = {
  updateBeer: PropTypes.func,
  obj: PropTypes.object
};

export default withRouter(UpdatePage);
