import React from "react";
import "../styles/home_header.css";


function Header(){
    return(
        
        <div className="container">
             <img className="left-arc" src="/images/radial_arc.svg" alt="right-arc"></img>
            <div className="wrapper">
                <h1>Redefining
                <div className="words">
                    {/* <span>Today<br />
                    Tomorrow<br />
                    Future<br />
                    </span> */}
                    <span>Today</span>
                    <span>Tomorrow</span>
                    <span>Future</span>
                    <span>Today</span>
                    <span>Tomorrow</span>
                    <span>Future</span>
                    <span>Today</span>
                    <span>Tomorrow</span>
                    <span>Future</span>
                    <span>Today</span>
                    <span>Tomorrow</span>
                    <span>Future</span>
                    <span>Today</span>
                    <span>Tomorrow</span>
                    <span>Future</span>
                    <span>Today</span>
                    <span>Tomorrow</span>
                    <span>Future</span>
                    <span>Today</span>
                    <span>Tomorrow</span>
                    <span>Future</span>
                    <span>Today</span>
                    <span>Tomorrow</span>
                    <span>Future</span>
                    <span>Today</span>
                    <span>Tomorrow</span>
                    <span>Future</span>
                    <span>Today</span>
                    <span>Tomorrow</span>
                    <span>Future</span>
                </div>
               <br />Intelligent Realities</h1>
            </div>
            <p>Welcome to MindFulAI, where innovation meets intelligence. We specialize in leveraging cutting-edge AI solutions to revolutionize businesses and create unparalleled user experiences.</p>
            <button className="header-btn" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="25" viewBox="0 0 384 512" fill="white">
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
            </svg>
            <span>Discover more</span>
            </button>

            <img className="right-arc" src="/images/radial_arc.svg" alt="right-arc"></img>
        </div>
    );
}

export default Header;
