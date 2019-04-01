import ReadPage from "./component"; //from inside component js file.
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const mapStateToProps = (state, props) => {
	// console.log(state);
	// console.log(props);
	let beerTokenReducer = state.beerTokenReducer;
	return {
		beerTokenReducer : beerTokenReducer ? beerTokenReducer : [],
		
	};

};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		//Place Functions from Actions Here See Example in delete Folder in beer dictory
	}, dispatch);

  };

export default connect(mapStateToProps, mapDispatchToProps)(ReadPage);
