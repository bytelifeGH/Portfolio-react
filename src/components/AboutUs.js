import React from 'react'
import instagram from "../images/instagram.png"
import webDev from "../images/webDev.png"
import androidDev from "../images/androidDev.png"
import { memberDetails } from '.'
function AboutUs() {
  return (

    <div className='width-full height-full'>
      <div className="flex-just-align work-top">
        <h1 data-aos="fade-up" data-aos-duration="1000" className="Our-Goals">Who Are We?</h1>
        <h4 data-aos="fade-up" data-aos-duration="1000" className="flex-just-align">
          Your Vision, Our Mission: Crafting Unforgettable Digital Experiences Together.
        </h4>
      </div>
      <div className='about-us-text'>
        <div data-aos="zoom-in" className='about-us-text-zoomContent'>

        <p>ByteLife is a digital media company that creates relatable content for the college community. We are on a mission to help students navigate the ups and downs of college life, from making friends to finding a job.

          Our content is available on <strong>Instagram, YouTube, and Spotify</strong> </p>
        <div className="our-services-aboutUs">
          <div className="our-services-aboutUs-left">
            <ul>
              <li>
                <div>
                  <img src={webDev} alt="" />
                  <span>Social Media Marketing</span>
                </div>
              </li>
              <li>
                <div>
                  <img src={webDev} alt="" />
                  <span>Branding</span>
                </div>
              </li>
              <li>
                <div>
                  <img src={webDev} alt="" />
                  <span>Video Editing</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="our-services-aboutUs-right">
            <ul>
            <li>
                <div>
                  <img src={webDev} alt="" />
                  <span>Web Development</span>
                </div>
              </li>
              <li>
                <div>
                  <img src={webDev} alt="" />
                  <span>Android Development</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
      <div className='about-us-container'>
        {
          memberDetails.map((section, index) => (
            <div data-aos="zoom-in" key={section.id} className="member"><img src={section.image} alt="" className="member-img" />
              <div className="member-overlay">
                <h1 className="overlayheading">{section.name}</h1>
                <h2>{section.post}</h2>
                <ul className="soc">
                  <a href={section.instagramLink} className="li-soc" target='_blank'>
                    <li>
                      <img src={instagram} alt="" target='_blank' />
                    </li>
                  </a>
                  <a href={section.linkedinLink} className="li-soc">
                    <li>
                      <img src={instagram} alt="" />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AboutUs
