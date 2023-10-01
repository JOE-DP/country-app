import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Search from './Search';
import Header from './Header';
import Body from './Body';


function Main() {
    const [countrySearch, setCountrySearch] = useState('')
    const [countryData, setCountryData] = useState(false)
    const [darkMode,  setDarkMode] = useState(false)
    const [colors, setColors] = useState({background: '#edf7F6', cardBackground: '#643A6B', font: 'grey'})

    function toggleDark(){
        setDarkMode(!darkMode)
        console.log(darkMode)
    }
    useEffect(() => {
        if(!darkMode){
            setColors({background: '#edf7F6', cardBackground: '#F4EEE0', font: 'grey'})
        } else {
            setColors({background: '#5F264A', cardBackground: '#643A6B', font: '#F4EEE0'})
        }
    }, [darkMode])

    function countrySearchinput(e){
        setCountrySearch(e.target.value)
    }
    useEffect(() => {
        if(countrySearch == ''){
            fetch(`https://restcountries.com/v3.1/all`)
        .then(json => json.json())
        .then((data) => {
            setCountryData(data)
        })

        } else {
            fetch(`https://restcountries.com/v3.1/name/${countrySearch}`)
            .then(json => json.json())
            .then((data) => {
                if(data['status'] == 404){
                    setCountryData('') 
                } else {
                    setCountryData(data)
                }
                        })
    }
}, [countrySearch])

  return (
    <div style={{fontFamily: 'Lato', background: colors.background, color: colors.font}}>
      <Header toggleDark={toggleDark}/>
      <Search countrySearchinput={countrySearchinput} countrySearch={countrySearch}/>
      {countryData != false ? <Body countryData={countryData} colors={colors}/> : <p>No results, please try another search!</p>}
    </div>
  );
}

export default Main;