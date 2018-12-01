import React, { Component } from "react";

interface Book {
  title: string,
  author: string,
  startDate: string,
  endDate: string,
  genre: string,
  comments: string,
  rating: string,
  wouldRecommend: boolean,
  haveReadBefore: boolean
}

class App extends Component {
    state = {
        record: []
    };
    componentDidMount() {
        fetch("./data/record.json")
            .then((raw) => raw.json())
            .then((res) => this.setState({ record: res }));
    }
    render() {
        const { record } = this.state;
        return (
            <div className="App">
                <ul className="BookList">
                    {record.map((book: Book) => (
                        <li className="Book" key={book.title}>
                            {book.title} by {book.author}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
