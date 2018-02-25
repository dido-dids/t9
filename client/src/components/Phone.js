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

    onClickButton = (value) => {
        console.log('value', value);
        this.setState((prevState) => ({
            input: prevState.input + value
        }))
    };

    render() {
        return (
            <div id="phone">
                <Display input={this.state.input}/>
                <Button className="number n1" onClick={() => this.onClickButton(1)}/>
                <Button className="number n2" onClick={() => this.onClickButton(2)}/>
                <Button className="number n3" onClick={() => this.onClickButton(3)}/>
                <Button className="number n4" onClick={() => this.onClickButton(4)}/>
                <Button className="number n5" onClick={() => this.onClickButton(5)}/>
                <Button className="number n6" onClick={() => this.onClickButton(6)}/>
                <Button className="number n7" onClick={() => this.onClickButton(7)}/>
                <Button className="number n8" onClick={() => this.onClickButton(8)}/>
                <Button className="number n9" onClick={() => this.onClickButton(9)}/>
                <Button className="number n0" onClick={() => this.onClickButton(0)}/>
            </div>
        )
    }

}

export default Phone;