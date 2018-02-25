import React, {Component} from "react";
import PropTypes from "prop-types";

class Display extends Component {

    render() {

        return (
            <div className="display" ref={this.props.displayRef}>
                <span>Insert number: {this.props.input}</span>
                {this.props.response.map(item => {
                    return <p key={item}>{item}</p>
                })}
            </div>
        )
    }
}

Display.propTypes = {
    input: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    response: PropTypes.array
};

Display.defaultProps = {
    input: "",
    response: []
};

export default Display;