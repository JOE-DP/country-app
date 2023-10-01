import React from 'react';
import styled from 'styled-components'

function Search(props) {
  return (
    <Container>
        <input type="text" onChange={props.countrySearchinput} value={props.countrySearch} placeholder='Search for a country...'></input>
    </Container>
  );
}

const Container = styled.div`
input{
    display: block;
    border-radius: 20px;
    width: 80%;
    margin: auto;
    font-size: 1.5em;
    padding-left: 5%;
}

`

export default Search;