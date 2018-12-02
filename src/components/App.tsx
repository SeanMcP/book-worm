import React, { Component } from "react";
import styled from "@emotion/styled";

import BookList from "./BookList";
import Header from "./Header";
import Most from "./Most";

import { BookInt } from './Book';

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
        books: [],
        completed: []
    };
    componentDidMount() {
        fetch("./data/record.json")
            .then((raw) => raw.json())
            .then((res) => {
                this.setState({
                    books: res,
                    completed: res.filter((book: BookInt) => book.endDate)
                });
            });
    }
    render() {
        return (
            <StyledBody>
                <StyledDiv>
                    <Header />
                    <BookList books={this.state.books} />
                    <Most completed={this.state.completed} />
                </StyledDiv>
            </StyledBody>
        );
    }
}

export default App;
