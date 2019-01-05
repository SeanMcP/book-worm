import React, { Component } from "react";
import styled from "@emotion/styled";

import BookList from "./BookList";
import Footer from "./Footer";
import Header from "./Header";
import Stats from "./Stats";

import { BookInt } from './Book';
import THEME from '../constants/theme';

const StyledBody = styled.div`
    background: ${THEME.BACKGROUND};
    color: ${THEME.TEXT};
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
    width: 100%;
`;

const StyledWrapper = styled.div`
    flex: 1;
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
`;

const StyledBumper = styled.div`
    margin: 1rem;
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
                <StyledWrapper>
                    <StyledBumper>
                        <Header />
                        <BookList books={this.state.books} />
                        <Stats completed={this.state.completed} />
                    </StyledBumper>
                </StyledWrapper>
                <Footer />
            </StyledBody>
        );
    }
}

export default App;
