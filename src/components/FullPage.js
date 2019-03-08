import React from "react";

import ReactPageScroller from "./ReactPageScroller";
import Home from "./Home";
import Problem from "./Problem";
import Solution from "./Solution";
import Team from "./Team";
import Current from "./Current";
import Software from "./Software";
import Contact from "./Contact";

import "../index.css";

export default class FullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
    }

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };

    render() {

        return <React.Fragment>
            <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                <Home/>
                <Problem/>
                <Solution/>
                <Current/>
                <Software/>
                <Team/>
                <Contact/>
            </ReactPageScroller>
        </React.Fragment>
    }
}