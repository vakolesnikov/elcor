import React from 'react';
import style from './header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header className={style.header}>
                <a href="#/">
                    <h1>Elcor admin panel</h1>
                </a>
            </header>
        );
    }
}
