import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import { workSectionContent } from ".";

function Work() {
    useEffect(() => {
        AOS.init({
            disableOnInteraction: true,
        });
    }, []);
    const [hover, setHover] = useState(false);


    function onHovering() {
        setHover(true);
    }
    function offHovering() {
        setHover(false);
    }
    return (
        <div className="width-full height-full">
            <div className="flex-just-align work-top">
                <h1 data-aos="fade-up" data-aos-duration="1000" className="Our-work">Our Work</h1>
                <h4 data-aos="fade-up" data-aos-duration="1000" className="flex-just-align">
                    Explore our portfolio of innovative web and app projects
                </h4>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className="width-full work-section">
                <div className="work-section-mid">
                    <ul>
                        {
                            workSectionContent.map((work, index) => (
                                <li key={work.id}>
                                    <div className="work-contents">
                                        <div className="work-image">{work.image}</div>

                                        <div className="work-bottom-content">
                                            <span className="work-title">{work.title}</span>
                                            <span className="work-category">{work.category}</span>
                                        </div>
                                    </div>
                                    <div className="overlay"></div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className={`work-last-container ${hover ? "hover-parent-class" : "no-hover-parent-class"}`}>
                <div className="work-last-container-content" onMouseEnter={onHovering} onMouseLeave={offHovering} data-aos="zoom-in" >
                    <h1 className={`work-last-container-content-first ${hover ? "hover-class" : "no-hover"}`}>Like What You See?</h1>
                    <Link to="/contact" className={`work-last-container-content-second-Link ${hover ? "hover-class" : "no-hover"}`} >Contact Us</Link>
                </div>
            </div>
        </div>
    );
}

export default Work;
