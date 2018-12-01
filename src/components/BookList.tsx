import React from 'react';

import Book, { BookInt } from './Book';

interface Props {
    books: Array<BookInt>
}

const BookList = (props: Props) => {
    return (
        <ul className="BookList">
            {props.books.map((book, i) =>{
                console.log(book);
                return <Book key={i} {...book} />
            })}
        </ul>
    );
};

export default BookList;