import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';

function Work() {
    useEffect(() => {
        AOS.init({
          disableOnInteraction: true,
        });
      }, []);
    const [hover, setHover] = useState(false);
    const [isHide, setHide] = useState(false);
    function workSectionHover() {
        setHide(true);
    }
    function removeWorkSectionHover() {
        setHide(false);
    }

    function onHovering() {
        setHover(true);
    }
    function offHovering() {
        setHover(false);
    }
    return (
        <div className="width-full height-full">
            <div className="flex-just-align work-top">

                <h1 data-aos="fade-up" data-aos-duration="1000"  className="Our-work">Our Work</h1>
                <h4 data-aos="fade-up" data-aos-duration="1000"  className="flex-just-align">
                    Explore our portfolio of innovative web and app projects
                </h4>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000"  className="width-full work-section">
                <div className="work-section-mid">
                    <ul>
                        <li>
                            <div className={`work-contents`}>
                                <div className="work-image"></div>
                                <div className={`work-bottom-content `}>
                                    <span className="work-title">Lorem, ipsum dolor.</span>
                                    <span className="work-category">Lorem.</span>
                                </div>
                            </div>
                            <div className="card__overlay">
                                <div class="overlay__text">
                                    <h3>Mountain Trips</h3>
                                    <p>Plan your next adventure</p>
                                  
                                </div>
                            </div>

                        </li>
                        <li>
                            <div className="work-contents">
                                <div className="work-image"></div>
                                <div className="work-bottom-content">
                                    <span className="work-title">Lorem, ipsum dolor.</span>
                                    <span className="work-category">Lorem.</span>
                                </div>

                            </div>

                        </li>
                        <li>
                            <div className="work-contents">
                                <div className="work-image"></div>
                                <div className="work-bottom-content">
                                    <span className="work-title">Lorem, ipsum dolor.</span>
                                    <span className="work-category">Lorem.</span>
                                </div>

                            </div>

                        </li>
                        <li>
                            <div className="work-contents">
                                <div className="work-image"></div>
                                <div className="work-bottom-content">
                                    <span className="work-title">Lorem, ipsum dolor.</span>
                                    <span className="work-category">Lorem.</span>
                                </div>

                            </div>

                        </li>
                        <li>
                            <div className="work-contents">
                                <div className="work-image"></div>
                                <div className="work-bottom-content">
                                    <span className="work-title">Lorem, ipsum dolor.</span>
                                    <span className="work-category">Lorem.</span>
                                </div>

                            </div>

                        </li>
                        <li>
                            <div className="work-contents">
                                <div className="work-image"></div>
                                <div className="work-bottom-content">
                                    <span className="work-title">Lorem, ipsum dolor.</span>
                                    <span className="work-category">Lorem.</span>
                                </div>

                            </div>

                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className={`work-last-container ${hover ? "hover-parent-class" : "no-hover-parent-class"}`}>
                <div className="work-last-container-content" onMouseEnter={onHovering} onMouseLeave={offHovering}  data-aos="zoom-in" >
                    <h1 className={`work-last-container-content-first ${hover ? "hover-class" : "no-hover"}`}>Like What You See?</h1>
                    <Link  to="/contact" className={`work-last-container-content-second-Link ${hover ? "hover-class" : "no-hover"}`} >Contact Us</Link>
                </div>
            </div>
        </div>
    );
}

export default Work;
