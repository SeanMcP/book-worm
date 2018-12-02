import React, { Component } from "react";
import styled from "@emotion/styled";

import BookList from "./BookList";
import Header from "./Header";

const StyledBody = styled.div`
    background: linear-gradient(to top, #57EBF5, #003687);
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
    width: 100%;
`;

const StyledDiv = styled.div`
    margin: 0 auto;
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
            <StyledBody>
                <StyledDiv>
                    <Header />
                    <BookList books={this.state.books} />
                </StyledDiv>
            </StyledBody>
        );
    }
}

export default App;
