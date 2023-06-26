import React from "react";

const Info =() => {
    return (
        <div className="about_info grid">
            <div className="about_box">
            <i class="bx bx-award about_icon"></i>
                <h3 className="about_title">Quick Learner</h3>
                <span className="about_subtitle"></span>
            </div>

            <div className="about_box">
            <i class="bx bx-briefcase-alt about_icon"></i>
                <h3 className="about_title">5+ projects</h3>
                <span className="about_subtitle"></span>
            </div>

            <div className="about_box">
            <i class="bx bx-support about_icon"></i>
                <h3 className="about_title">Online 24/7</h3>
                <span className="about_subtitle"></span>
            </div>
        </div>
        
    )
}

export default Info;