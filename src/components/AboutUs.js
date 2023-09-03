import React from 'react'
import styled , { keyframes } from 'styled-components'
import person from "./Images/person.jpeg"
import bulb from "./Images/bulb.svg"
import eye from "./Images/eye.svg"
import InfluencerMarketing from "./Images/InfluencerMarketing.svg"
import IntegratedCampaigns from "./Images/IntegratedCampaigns.svg"
import socialMedia from "./Images/socialMedia.svg"
import pointed from "./Images/pointed.svg"
import videoCamera from "./Images/videoCamera.svg"
import pointer from "./Images/pointer.svg"
import Foot from './Foot'
import Card from './Card'



function AboutUs() {
  
  return (
    <Container>      
        <h1>WHO WE ARE</h1>
        <p> 
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem 
            ipsumlorem ipsumlorem ipsumlorem ipsumlorem 
            ipsumlorem ipsumlorem ipsumlorem ipsumlorem 
            ipsumlorem ipsumlorem ipsumlorem ipsumlorem 
            ipsumlorem ipsum
        </p>
        <Cards>
            <Card 
                name="lorem"
                role="ipsum"
                description="sdvasb,dbcz wbvaskjdzkv"
                image={person}
            />
            <Card 
                name="lorem"
                role="ipsum"
                description="sdvasb,dbcz wbvaskjdz"
                image={person}
            />
            <Card 
                name="lorem"
                role="ipsum"
                description="sdvasb,dbcz wbvaskjdz"
                image={person}
            />
            <Card 
                name="lorem"
                role="ipsum"
                description="sdvasb,dbcz wbvaskjdz"
                image={person}
            />
            <Card 
                name="lorem"
                role="ipsum"
                description="sdvasb,dbcz wbvaskjdz"
                image={person}
            />
            <Card 
                name="lorem"
                role="ipsum"
                description="sdvasb,dbcz wbvaskjdz"
                image={person}
            />
        </Cards>
        <Footer>         

          <Foot 
            sideImage={eye}
            title="Branding"
          />
          <Foot 
            sideImage={bulb}
            title="Content Creative"
          />
          <Foot 
            sideImage={InfluencerMarketing}
            title="Influencer Marketing"
          />
          <Foot 
            sideImage={IntegratedCampaigns}
            title="Integrated Campaigns"
          />
          <Foot 
            sideImage={socialMedia}
            title="Social Media"
          />
          <Foot 
            sideImage={pointed}
            title="Creative & Comms Startegy"
          />
          <Foot 
            sideImage={videoCamera}
            title="Video Production"
          />
          <Foot 
            sideImage={pointer} 
            title="Web Design"
          />
          
            


        </Footer>

    </Container>
  )
}

export default AboutUs

const Cards=styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 

  gap: 0.8rem;
  overflow-x: hidden;

  @media (max-width: 768px) {
    justify-content: flex-start
  }
 
    
`
const Container=styled.div`
  padding:0.2rem 1rem;
  display:flex;
  flex-direction:column;
  gap:1rem;
  

  h1{
    background-color:#7C7C7C;
    color:#E9F7FF;
    text-align:center;
    justify-content:center;
    padding:0rem;
  }
`

const Footer= styled.div`
  background-color: #C4BECE;
  color: white;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: repeat(3, auto); 
  gap: 10px; 

  

`

