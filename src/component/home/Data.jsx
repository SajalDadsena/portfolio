import React from "react";
import Social from "./Social";

const Data = () => {
    return (
        <div className="home_data">
            <h3>Hii I am</h3>
            <h1 className="home_title">SAJAL DADSENA
            </h1>
            {/* <!--| --> */}

            <ul className="dynamic-txt">
              <li><span>IT Undergrad</span></li>
              <li><span>Programmer</span></li>
              <li><span>Front-End Developer</span></li>
              <li><span>Aspiring Full Stack</span></li>
            </ul>

            <p className="home_description">As a front-end developer with a passion for creating beautiful and intuitive user experiences.</p>
            <Social/>
        </div>
    )
}

export default Data;