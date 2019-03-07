import React from "react";

import ReactPageScroller from "./ReactPageScroller";
import Home from "./Home";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import FifthComponent from "./FifthComponent";
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
                <SecondComponent/>
                <ThirdComponent/>
                <FourthComponent goToPage={this.goToPage}/>
                <FifthComponent/>
                <Contact/>>
            </ReactPageScroller>
        </React.Fragment>
    }
}