import CreatePage from "./component"; //from inside component js file.
import { connect } from "react-redux";
import { bindActionCreators } from "redux";



const mapStateToProps = (state, props) => {
	// let userInfoReducer = state.userInfoReducer;
	// let accessTokenReducer = state.accessTokenReducer;
	return {
		// accessTokenReducer : accessTokenReducer ? accessTokenReducer : "",
		// history: props.history ? props.history  :  null,
		// setDeviceId : setDeviceId ? setDeviceId : null,
		// userInfoReducer : userInfoReducer ? userInfoReducer : ""
	};

};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
	}, dispatch);

  };

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
