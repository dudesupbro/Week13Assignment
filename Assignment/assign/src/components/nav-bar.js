import React from 'react';

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="span" id="links">
                <a href='#'>Page 1</a>
                <a href='#'>Page 2</a>
                <a href='#'>Page 3</a>
                <a href='#'>Page 4</a>
            </div>
        );
    }
}