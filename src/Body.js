import React from 'react';
import styled from 'styled-components'
import CountryCard from './CountryCard';


function Body(props) {
       
  return (
    <Container>
        {props.countryData.map((item) =>{
            return(
                <CountryCard item={item} colors={props.colors} />
            )
        })}
    </Container>
  );
}

const Container = styled.div`
margin-top: 5%;
display: flex;
flex-wrap: wrap;
justify-content: center;

`

export default Body;