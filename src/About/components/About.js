import React from "react";
import "../styles/About.css";
import Crew from "./UpdatedCrewCards";
import DummyImg from "../assets/dummy_about_mfai.png"
import Joinus from "./Joinus";
function About(){
    return(
        <div className="about-page-container">
        {/* First about container  of About */}
        <div className="about-header-container">
            <div className="about-header-wrapper">
                <div className="about-mfai-subtitle"><button>About MindFulAI</button></div>
                <div className="about-text-img-container">
                    <div className="about-header-text">
                        <h1 className="about-mfai-title">About us.</h1>
                        <p className="about-mfai-paragraph">MindFulAI Technologies Pvt Ltd - A Product and Service based Private Limited Company with a well-equipped team that works on various technologies. We have been awarded the Most Trustable Startup 2024.</p>
                    </div>
                <img className="about-mfai-head-img" src={DummyImg}  alt=""></img>
                </div>
            </div>
        </div>
        
        {/* CEO container of the About Page */}
        <div className="about-founder-container">
            <div className="founder-wrapper">
                <div className="about-mfai-subtitle-founder"><button>Our founder</button></div>
                <div className="about-founder-img-quote">
                    <img className="about-mfai-head-img" src={DummyImg} alt=""></img>
                    <div className="about-ceo-text">
                        <h1 className="about-mfai-title">“Don't make the technology rule you, instead you rule the technology”</h1>
                        <span className="ceo">- Harish Ravichandran</span>
                        <p className="about-ceo-paragraph">CEO of MindFul Groups</p>
                    </div>
                </div>
            </div>  
        </div>

        {/* Vision and Mission container of the About Page */}
        <div className="about-vision-mission-container">
            <div className="vision-mission-wrapper">
                <div className="about-mfai-subtitle-founder"><button>Our vision and mission</button></div>
                <div className="our-vision">
                    <img className="about-mfai-head-img" src={DummyImg} alt=""></img>
                    <div className="about-vm-text">
                        <h1 className="about-vm-title">Our vision</h1>
                        <p className="about-vm-paragraph">Our vision is to be the main force behind digital transformation, enabling companies to reach their maximum potential by fusing human innovation with the combined power of technology. In the digital age, we want to redefine sectors, improve user experiences, and take businesses to levels never before achieved by developing innovative solutions.</p>
                    </div>
                </div>
                <div className="our-mission">
                    <div className="about-vm-text">
                        <h1 className="about-vm-title">Our mission</h1>
                        <p className="about-vm-paragraph">Our mission is to provide innovative, customized technology solutions that go beyond accepted limits. By integrating cutting-edge technologies effectively, we focus to improve user experiences, improve processes, and promote business growth. We aim to be facilitators for our clients' success by refusing to give up on our pursuit of excellence. Creating lasting connections, our priority is to be the reliable guides</p>
                    </div>
                    <img className="about-mfai-head-img" src={DummyImg} alt=""></img>
                </div>                    
                </div>
            </div> 
            <Crew />
            <Joinus />
        </div>
    );
}
export default About;