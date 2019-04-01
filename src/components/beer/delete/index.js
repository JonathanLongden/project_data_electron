import DeletePage from "./component"; //from inside component js file.
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteBeer } from '../../../actions/beers';


const mapStateToProps = (state, props) => {
	// console.log(state)
	// console.log(props)
	let id = props.id;
	return {
		deleteBeer : deleteBeer ? deleteBeer : null,
		id: id ? id  :  null
	};

};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		deleteBeer
	}, dispatch);

  };

export default connect(mapStateToProps, mapDispatchToProps)(DeletePage);
