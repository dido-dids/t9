import React, {Component} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Display from "./Display";

class Button extends Component {


    render(){
        return (
            <div className={classnames(this.props.className, "button")} onClick={this.props.onClick}></div>
        )
    }
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    className: ""
};

export default Button;

