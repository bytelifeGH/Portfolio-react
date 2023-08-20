import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { ourGoalsContent, serviceContent } from '.'
import smm from '../images/smm.png'
import vision from "../images/vision.svg"
function OurGoals() {
    const [hover, setHover] = useState(false);


    function onHovering() {
        setHover(true);
    }
    function offHovering() {
        setHover(false);
    }

    return (
        <>
            <div className="width-full height-full">
                <div className="flex-just-align work-top">
                    <h1 data-aos="fade-up" data-aos-duration="1000" className="Our-Goals">Our Goals</h1>
                    <h4 data-aos="fade-up" data-aos-duration="1000" className="flex-just-align">
                        Your Vision, Our Mission: Crafting Unforgettable Digital Experiences Together.
                    </h4>
                </div>
                <div className="our-goals-container">
                    {ourGoalsContent.map((section, index) => (
                        <div  key={section.id} className={`our-goals-section ${index % 2 === 0 ? "left-shift" : "right-shift"}`}>
                            <div data-aos={`${index % 2 === 0 ? "fade-right":"fade-left"}`} data-aos-duration="1000" className="left-side">
                                <img src={section.image} alt='' />
                            </div>
                            <div data-aos={`${index % 2 === 0 ? "fade-right":"fade-left"}`} data-aos-duration="1000" className="right-side">
                                <h1>{section.title}</h1>
                                <p>{section.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="services-container">
                    <div className="service-container-align"></div>
                    <div className="services-left-col">
                        <div data-aos="zoom-in-right" data-aos-duration="1000" className="services-left-content">
                        <div className="webDev-service">    
                                <img src={serviceContent[0].image} alt="" />
                                <h2>{serviceContent[0].title}</h2>
                                <p>{serviceContent[0].content}</p>
                            </div>

                            <div className="webDev-service">
                                <img src={serviceContent[0].image} alt="" />
                                <h2>{serviceContent[4].title}</h2>
                                <p>{serviceContent[4].content}</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="services-mid-col">
                        <div className="services-mid-content">
                            <img src={smm} alt="" />
                            <div className="webDev-service">
                                <img src={serviceContent[1].image} alt="" />
                                <h2>{serviceContent[1].title}</h2>
                                <p>{serviceContent[1].content}</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in-left" data-aos-duration="1000" className="services-right-col">
                        <div className="services-right-content">
                            <div className="webDev-service">
                                <img src={serviceContent[2].image} alt="" />
                                <h2>{serviceContent[2].title}</h2>
                                <p>{serviceContent[2].content}</p>
                            </div>

                            <div className="webDev-service">
                                <img src={serviceContent[3].image} alt="" />
                                <h2>{serviceContent[3].title}</h2>
                                <p>{serviceContent[3].content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`work-last-container ${hover ? "hover-parent-class" : "no-hover-parent-class"}`}>
                <div className="work-last-container-content" onMouseEnter={onHovering} onMouseLeave={offHovering} data-aos="zoom-in" >
                    <h1 className={`work-last-container-content-first ${hover ? "hover-class" : "no-hover"}`}>Like What You See?</h1>
                    <Link to="/contact" className={`work-last-container-content-second-Link ${hover ? "hover-class" : "no-hover"}`} >Contact Us</Link>
                </div>
            </div>
        </>
    )
}
export default OurGoals
