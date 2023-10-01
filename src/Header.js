import React from 'react';
import styled from 'styled-components'

function Header(props) {
  return (
    <Container>
        <div className='divMargin'>
      <p>Country information App!</p>
      </div>
      <Darkbutton onClick={props.toggleDark} className='divMargin'>
        <p>Darkmode |</p>
      <div><p>OFF</p></div>
      </Darkbutton>
      </Container>
  );
}

const Container = styled.div`
display: flex;
justify-content: space-evenly;
.divMargin{
    margin-top: 2%;
    margin-bottom: 2%;
}
@media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
   
  }
p{
    font-weight: bold;
    font-size: 1.4em;
}
`
const Darkbutton = styled.div`
    display: flex;
    cursor: pointer;
`

export default  Header;