import React, {Component} from 'react';
import './scss/App.scss';
import Phone from "./components/Phone";

class App extends Component {
    state = {
        response: []
    };

    callApi = async (input) => {
        const response = await fetch(`/api/t9/${input}`);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    onInputChange = (input) => {

        // if empty input - clear combinations
        if (!input.length) {
            this.setState(
                () => ({response: []})
            );
            return;
        }

        this.callApi(input)
            .then(response => this.setState(
                (prevState) => ({
                    response: response
                })
            ))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="App">
                <Phone
                    onInputChange={this.onInputChange}
                    response={this.state.response}
                />
            </div>
        );
    }
}

export default App;