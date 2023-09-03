import React from 'react'
import styled from 'styled-components'

function Foot({sideImage , title}) {
  return (
    <Container>
        <Image src={sideImage}  />
        <Wrap>{title}</Wrap>
    </Container>
  )
}

export default Foot

const Container=styled.div`
  display:flex;
  flex-direction:row;
  gap:3px;
  align-items:inline;
  

`

const Image=styled.img`
 
`

const Wrap=styled.p`
  font-color:whitesmoke;
  
  
`

