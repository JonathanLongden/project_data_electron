import CreatePage from "./component"; //from inside component js file.
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addBeer } from '../../../actions/beers';



const mapStateToProps = (state, props) => {
	// console.log(state);
	// console.log(props);
	let beerTokenReducer = state.beerTokenReducer;
	return {
		beerTokenReducer : beerTokenReducer ? beerTokenReducer[0] : [],
		addBeer : addBeer ? addBeer : null
	};

};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addBeer
	}, dispatch);

  };

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
