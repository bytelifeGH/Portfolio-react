import React from 'react'
import vision from "../images/vision.svg"
import { ourGoalsContent } from '.'

function OurGoals() {

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
                        <div key={section.id} className={`our-goals-section ${index % 2 === 0 ? "left-shift" : "right-shift"}`}>
                            <div className="left-side">
                                <img src={section.image} alt='' />
                            </div>
                            <div className="right-side">
                                <p>{section.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default OurGoals
