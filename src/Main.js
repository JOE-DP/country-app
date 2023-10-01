import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Search from './Search';
import Header from './Header';
import Body from './Body';


function Main() {
    const [countrySearch, setCountrySearch] = useState('')
    const [countryData, setCountryData] = useState(false)

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

    //init the country data on page load
    // useEffect(() => {
    //     fetch(`https://restcountries.com/v3.1/all`)
    //     .then(json => json.json())
    //     .then((data) => {
    //         setCountryData(data)
    //     })
        

    // }, [])


  return (
    <div style={{fontFamily: 'Lato'}}>
      <Header />
      <Search countrySearchinput={countrySearchinput} countrySearch={countrySearch}/>
      {countryData != false ? <Body countryData={countryData} /> : <p>No results, please try another search!</p>}
    </div>
  );
}

export default Main;