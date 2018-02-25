import React, {Component} from "react";
import PropTypes from "prop-types";

class Display extends Component{

    render(){

        return(
            <div className="display">
                <span>Input: {this.props.input}</span>
                {/*{this.props.result.map()}*/}
            </div>
        )
    }
}

Display.propTypes = {
    input: PropTypes.string
};

Display.defaultProps = {
    input: ""
};

export default Display;