import React from 'react';
import styled from 'styled-components'
import CountryCard from './CountryCard';


function Body(props) {
       
  return (
    <Container style={{background: '#edf7F6'}}>
        {props.countryData.map((item) =>{
            return(
                <CountryCard item={item} />
            )
        })}
    </Container>
  );
}

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

`

export default Body;