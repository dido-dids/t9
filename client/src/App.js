import React, {Component} from 'react';
import './scss/App.scss';
import Phone from "./components/Phone";

class App extends Component {
    state = {
        cache: {},
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

        // response already fetched, returning from cache
        if (this.state.cache[input]) {
            this.setState((prevState) => ({response: prevState.cache[input]}));
            return;
        }

        // response not fetched yet - call api
        this.callApi(input)
            .then(response => this.setState(
                (prevState) => ({
                    response: response,
                    cache: {[input]: response, ...prevState.cache}
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