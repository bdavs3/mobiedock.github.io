import React from "react";
import ph from "../img/ph-profile.jpg";
import scroll from "../img/scroll.png";

export default () => {
    return (
        <div className="component fourth-component">
            <h2>The Team</h2>
            <div className="content">
                <div className="engineers">
                    <h3>Engineering:</h3>
                    <div className="engineers-1">
                        <img className="profile" src={ph} alt="p1" />
                        <p>description</p>
                        <img className="profile" src={ph} alt="p2" />
                        <p>description</p>
                        <img className="profile" src={ph} alt="p3" />
                        <p>description</p>
                    </div>
                    <div className="engineers-2">
                        <img className="profile" src={ph} alt="p4" />
                        <p>description</p>
                        <img className="profile" src={ph} alt="p5" />
                        <p>description</p>
                        <img className="profile" src={ph} alt="p6" />
                        <p>description</p>
                    </div>
                </div>
                <div className="etc">
                    <h3 className="cs-head">Computer Science</h3>
                    <div className="cs">
                        <img className="profile" src={ph} alt="p1" />
                        <p>description</p>
                        <img className="profile" src={ph} alt="p2" />
                        <p>description</p>
                        <img className="profile3"  src={ph} alt="p3"/>
                        <p>description</p>
                    </div>
                    <h3 className="E-head">Entrepreneurship:</h3>
                    <img className="matt" src={ph} alt="p4" />
                    <p>description</p>
                </div>
            </div>
            <img className="scroll" src={scroll} alt="scroll" />
        </div>
    )
}