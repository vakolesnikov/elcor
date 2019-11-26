import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="container">
                <footer className="main-footer">
                    <div className="social">
                        <a href="/" className="social-item social-vk" />
                        <a href="/" className="social-item social-fb" />
                        <a href="/" className="social-item social-insta" />
                    </div>
                    <div className="social-box">
                        <span className="social-title">Давайте дружить, это выгодно!</span>
                        <span className="social-text">
                            Скидка 10% для друзей из социальных сетей
                        </span>
                    </div>
                </footer>
            </div>
        );
    }
}
