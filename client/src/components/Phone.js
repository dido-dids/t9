import React, {Component} from "react";
import Button from "./Button";
import Display from "./Display";

class Phone extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ""
        }
    }

    onClickNumber = (value) => {
        this.setState((prevState) => ({
                input: prevState.input + value
            })
        );
    };

    onClickCancel = () => {
        this.setState((prevState) => ({
            input: prevState.input.slice(0, -1)
        }));
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.input !== this.state.input) {
            this.props.onInputChange(this.state.input)
        }
    }

    onClickArrow = (value) => {
        this.display.scrollTo(0, this.display.scrollTop + value)
    };

    render() {
        return (
            <div id="phone">
                <Display displayRef={ref => this.display = ref} input={this.state.input} response={this.props.response}/>
                <div className="buttons">
                    <Button className="number n1" onClick={() => this.onClickNumber(1)}/>
                    <Button className="number n2" onClick={() => this.onClickNumber(2)}/>
                    <Button className="number n3" onClick={() => this.onClickNumber(3)}/>
                    <Button className="number n4" onClick={() => this.onClickNumber(4)}/>
                    <Button className="number n5" onClick={() => this.onClickNumber(5)}/>
                    <Button className="number n6" onClick={() => this.onClickNumber(6)}/>
                    <Button className="number n7" onClick={() => this.onClickNumber(7)}/>
                    <Button className="number n8" onClick={() => this.onClickNumber(8)}/>
                    <Button className="number n9" onClick={() => this.onClickNumber(9)}/>
                    <Button className="number n0" onClick={() => this.onClickNumber(0)}/>
                    <Button className="cancel" onClick={() => this.onClickCancel()}/>
                    <Button className="up" onClick={() => this.onClickArrow(-95)}/>
                    <Button className="down" onClick={() => this.onClickArrow(95)}/>
                </div>
            </div>
        )
    }

}


export default Phone;