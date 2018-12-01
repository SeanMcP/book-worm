import React from 'react';

import Emoji from './Emoji';

const Header = () => {
    return (
        <header className="Header">
            <h1 className="Header__heading">Book Worm</h1>
            <p className="Header__subheading">
                <Emoji emoji={'📔'}/>
                <Emoji emoji={'🐛'}/>
                A reading log for a notoriously inconsistent reader
            </p>
        </header>
    );
};

export default Header;