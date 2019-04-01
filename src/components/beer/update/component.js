import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';




class Delete extends Component {
    constructor(props) {
      super(props);
      this.state = {
        deleteBeer : props.deleteBeer,
        id : props.id
      }
      this.delete = this.delete.bind(this);
  }

  componentDidMount() {
      document.body.style.backgroundColor = "gray";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(JSON.stringify(prevProps.deleteBeer) !== JSON.stringify(this.props.deleteBeer)){
      this.setState({ deleteBeer: this.props.deleteBeer });
    }
    if(prevProps.id !== this.props.id){
      this.setState({ id: this.props.id });
    }
  }

  delete(e, id, func){
    e.preventDefault();
    let deleteBeer = func;
    deleteBeer(id);
  }

    render() {
      //https://reactjs.org/docs/handling-events.html
      return (
        <div> 
          <button onClick={(e) => this.delete(e, this.state.id, this.state.deleteBeer) }> Delete Beer</button>
        </div>
      );
    }
  }

const DeletePage = ({deleteBeer, id}) =>  {
    return (
      <Delete deleteBeer = {deleteBeer} id = {id}/>
    );
};

DeletePage.propTypes = {
  deleteBeer: PropTypes.func,
  id: PropTypes.string
};

export default withRouter(DeletePage);
