

import React from 'react';
import styled, { keyframes } from 'styled-components';
import instagram from "./Images/instagram.svg"
import linkedIn from "./Images/linkedIn.svg"
import facebook from "./Images/facebook.svg"
import twitter from "./Images/twitter.svg"

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px); 
  }
  to {
    opacity: 1;
    transform: translateY(0); 
  }
`;

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const LeftBackground = styled.div`
  background-color: green;
  flex: 1;
  animation: ${fadeInUp} 1s ease-out;
`;

const RightBackground = styled.div`
  background-color: yellow;
  flex: 1;
  animation: ${fadeInUp} 1s ease-out;
`;

const ContentContainer = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap:8px;
  width: 80%;  
  padding: 20px;
  padding-bottom:15vh;
  z-index: 1;
  position: relative;
  background: linear-gradient(to right, green 50%, yellow 50%);  
  flex-direction:column;
  right:0;
  animation: ${fadeInUp} 1s ease-out;
  
`;

const InputsSection = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;  
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
 
  
  h1{
    padding-bottom:20px;  
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; 
    font-size:3.4rem; 
  }

  form{    
    input{
        border: none;
        border-bottom: 2px solid transparent; 
        outline: none; 
        font-size:1.5rem;
        margin-bottom: 20px;
        transition: border-color 0.3s ease-out;
        width:60vw;
    }
    input:focus{
        border-color: black;
    }
    textarea{
        border: none;
        border-bottom: 2px solid transparent; 
        outline: none; 
        font-size:1.5rem;
        margin-bottom: 20px;
        transition: border-color 0.3s ease-out;
        width:60vw;
    }
    textarea:focus{
        border-color: black;
    }
    button{
        align-items:center;
        justify-content:center;
        padding:5px;        
        font-weight: 600;
        font-size: 1.2rem;
        display: flex; 
        cursor: pointer;
        transition: background-color 0.3s ease-out;
        &:hover {
            background-color: rgb(155, 155, 155);
        }
    }
  }
`;

const Social=styled.div`
  background-color:#C9C4D0;
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius:10px;
  padding-top:5px;
  padding-right:5px;
  padding-left:5px;
`;


function Connect() {
  return (
    <AppContainer>
      <Background>
        <LeftBackground></LeftBackground>
        <ContentContainer>
            <Social>                
                <p><a href=""><img src={instagram} alt="instagram"  /></a></p>
                <p><a href=""><img src={twitter} alt="twitter"></img></a></p>
                <p><a href=""><img src={facebook} alt="facebook"></img></a></p>
                <p><a href=""><img src={linkedIn} alt="linkedIn"></img></a></p>
            </Social>
            <InputsSection>
            
              <h1>Connect Here</h1>
              <form>
                <input type="text" placeholder="Name"  />
                <br />
                <input type="tel" placeholder="Phone Number" />
                <br />
                <input type="email" placeholder="Email" />
                <br />
                <textarea type="text" placeholder="Suggestions" />
                <br />
                <button>SUBMIT</button>
              </form>
            </InputsSection>
            
        </ContentContainer>
        <RightBackground></RightBackground>
      </Background>
    </AppContainer>
  );
}

export default Connect;