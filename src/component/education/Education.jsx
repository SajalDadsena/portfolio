import React, { useState } from "react";
import "./education.css";

const Education = () => {


    return (
        <section className = "qualification_section" id = "education" >

            <h2 className = "section_title" ><i className="uil uil-graduation-cap qualification_icon"></i>Education</h2><br></br>

            <div className="qualification_container container">

                <div className="qualification_sections">

                        <p class="qualification_head">My journey</p>
                    <br></br>
                    <div className="qualification_content qualification_content-active" >

                        <div className="qualification_data">
                        <div className="special"></div>
                        

                            <div >
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div className="data_box">
                                <h3 className="qualification_title">Bachelor of Technology (IT)</h3>
                                <span className="qualification_subtitle">National Institute of Technology, Raipur</span>

                                <div className="qualification_calender">
                                <i class="uil uil-calendar-alt"></i>
                                    2021-2025
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                       
                            <div className="data_box">
                                <h3 className="qualification_title">Intermediate</h3>
                                <span className="qualification_subtitle">Vidya Jyoti School, Jagdalpur</span>

                                <div className="qualification_calender">
                                <i class="uil uil-calendar-alt"></i>
                                    2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                        <div className="special"></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div className="data_box">
                                <h3 className="qualification_title">High School</h3>
                                <span className="qualification_subtitle">Vidya Jyoti School, Jagdalpur</span>

                                <div className="qualification_calender">
                                <i class="uil uil-calendar-alt"></i>
                                    2018
                                </div>
                            </div>
                        </div>
                    </div>


                       
                </div>
            </div>

        </section>
    )
}


export default Education 