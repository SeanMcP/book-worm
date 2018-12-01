import React, { Component } from "react";

import BookList from "./BookList";
import Header from './Header';

class App extends Component {
    state = {
        books: []
    };
    componentDidMount() {
        fetch("./data/record.json")
            .then((raw) => raw.json())
            .then((res) => this.setState({ books: res }));
    }
    render() {
        return (
            <div className="App">
                <Header />
                <BookList books={this.state.books} />
            </div>
        );
    }
}

export default App;
