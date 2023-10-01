import React from 'react';
import styled from 'styled-components'

function CountryCard(props) {
  return (
<Container style={{background: 'white'}}>
    <div className='halfDivide'>
      <img src ={props.item['flags']['png']}></img>
    </div>

    <div className='halfDivide textContainer'>  
        <h1>{props.item['name']['common']}</h1>
        <div className='lineDivider'>
        <p>Capital City: </p><span>{props.item['capital']}</span>
        </div>
        <div className='lineDivider'>
        <p>Population: </p><span>{props.item['population']}</span>
        </div>
        <div className='lineDivider'>
        <p>Region: </p><span>{props.item['region']}</span>
        </div>
    </div>
</Container>
    
  );
}

const Container = styled.div`

display: flex;
flex-direction: column;
margin: 2%;
border-radius: 5px;
-webkit-box-shadow: 10px 10px 56px -26px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 56px -26px rgba(0,0,0,0.75);
box-shadow: 10px 10px 56px -26px rgba(0,0,0,0.75);

p{
    font-weight: bold;
    margin: 0;
}
.halfDivide{
    height: 166.4px;
    width:270px;   
}
.textContainer{
    p, span{
        margin-bottom: 3%;
        margin-right: 2%;
        margin-left: 4%;
    }
}
img{
    width: 270px;
    height: 166.4px;
}
.lineDivider{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
h1{
    font-size: 1.5em;
    text-align: center;
    padding: -1%;;
}

`

export default CountryCard;