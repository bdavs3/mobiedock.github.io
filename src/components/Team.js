import React from "react";
import ph from "../img/ph-profile.jpg";
import scroll from "../img/scroll.png";

import "./Team.css";
import "./components.css";

// <img className="profile" src={ph} alt="p1" />
// <p className="description">Description</p>

export default () => {
    return (
        <div className="components">
            <h2>The Team</h2>
            <div className="content">
                 <div className="profile">
                    <img className="profileImg" src={ph} alt="p1" />
                    <figcaption className="description">Billy Walker<br />Mechanical Engineering</figcaption>
                 </div>
                 <div className="profile">
                    <img className="profileImg" src={ph} alt="p1" />
                    <p className="description">Charity Waddy<br />Mechanical Engineering</p>
                 </div>
                 <div className="profile">
                     <img className="profileImg" src={ph} alt="p1" />
                     <p className="description">Masaki Takamatsu<br />Mechanical Engineering</p>
                 </div>
                 <div className="profile">
                     <img className="profileImg" src={ph} alt="p1" />
                     <p className="description">Andre De Leon<br />Mechanical Engineering</p>
                 </div>
                 <div className="profile">
                    <img className="profileImg" src={ph} alt="p1" />
                     <p className="description">Ahmad <br />Mechanical Engineering</p>
                 </div>
                 <div className="profile">
                    <img className="profileImg" src={ph} alt="p1" />
                    <p className="description">Alex Lee<br />Electrical Engineering</p>
                 </div>
                 <div className="profile">
                    <img className="profileImg" src={ph} alt="p1" />
                    <p className="description">Ben Davis<br />Computer Science</p>
                 </div>
                 <div className="profile">
                    <img className="profileImg" src={ph} alt="p1" />
                    <p className="description">Danico Pidlaoan<br />Computer Science</p>
                 </div>
                 <div className="profile">
                    <img className="profileImg" src={ph} alt="p1" />
                    <p className="description">Emily Shoji<br />Computer Science</p>
                 </div>
                 <div className="profile">
                    <img className="profileImg" src={ph} alt="p1" />
                    <p className="description">Matt Tejada<br />Entrepreneuship</p>
                 </div>
            </div>
            <img className="scroll" src={scroll} alt="scroll" />
        </div>
    )
}