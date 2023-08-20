import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { ourGoalsContent } from '.'

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
                        <div data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`} data-aos-duration="1000" key={section.id} className={`our-goals-section ${index % 2 === 0 ? "left-shift" : "right-shift"}`}>
                            <div className="left-side">
                                <img src={section.image} alt='' />
                            </div>
                            <div className="right-side">
                                <h1>{section.title}</h1>
                                <p>{section.content}</p>
                            </div>
                        </div>
                    ))}
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
