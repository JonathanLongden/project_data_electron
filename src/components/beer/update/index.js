import UpdatePage from "./component"; //from inside component js file.
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateBeer } from '../../../actions/beers';


const mapStateToProps = (state, props) => {
	// console.log(state)
	// console.log(props)
	let obj = props.obj;
	return {
		updateBeer : updateBeer ? updateBeer : null,
		obj: obj ? obj  :  {},
		history: props.history ? props.history : {},
		match : props.match ? props.match : {}
		
	};

};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		updateBeer
	}, dispatch);

  };

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePage);