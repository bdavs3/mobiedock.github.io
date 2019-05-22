import React, { Component } from 'react';

const textStyle = {
    fontSize: 32,
}

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section id="contact" className="py-5">
                    <div className="container text-center my-5">
                        <h1> Contact Us </h1>
                        <a href="mailto:team@mobiedock.com" rel="noopener noreferrer" target="_blank"><span style={textStyle}>team@mobiedock.com</span></a>
                    </div>
                </section>
            </div>
        );
    }
}