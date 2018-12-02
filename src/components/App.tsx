import React, { Component } from "react";
import styled from "@emotion/styled";

import BookList from "./BookList";
import Header from "./Header";

const StyledDiv = styled.div`
    margin: 1rem auto;
    max-width: 800px;
`;

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
            <StyledDiv>
                <Header />
                <BookList books={this.state.books} />
            </StyledDiv>
        );
    }
}

export default App;
