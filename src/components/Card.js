import React , { useState } from 'react'
import styled from 'styled-components'
function Card({ name , role , description , image  }) {

  const [showDescription , setShowDescription] = useState(false);
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  return (
    <Container>
      <Wrap >
        <Image src={image} alt={`${name}'s image`} />
        <Name onClick={toggleDescription}>{name}</Name>
        <Role onClick={toggleDescription}>{role}</Role>
      </Wrap>
      {showDescription && (
        <DescriptionBox>
          {description}
        </DescriptionBox>
      )}
    </Container>
  );
}

export default Card;

const Container = styled.div`
  display: inline-block;
  position: relative;
  margin: 10px;
  background-color:#90BDD7;
`;

const Wrap = styled.div`
  cursor: pointer;
  border:border-box;
  border:1px solid black;
  padding:2px;
 
`;

const Image = styled.img`
  width: auto;
  height: auto;
  object-fit: cover;
  border:1px solid black;
  
  
`;

const Name = styled.p`
  margin: 10px 0;
`;

const Role = styled.p`
  
`;

const DescriptionBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  transform: translateY(${(props) => (props.show ? '-100%' : '0')});
  transition: transform 1.5s ease-in;
`;

const Description = styled.p`
  margin: 0;
`;