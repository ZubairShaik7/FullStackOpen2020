import React, {useEffect, useState} from "react";
import axios from 'axios'

const CountryFound = ({country}) => {

    const [data , setData] = useState(undefined)
    const params = {
        access_key: '2e4a6c93dc6805385e66b1e0d414dbe9',
        query: 'New York'
      }

    useEffect(() =>{
    axios.get('https://api.weatherstack.com/current', {params})
            .then(response => {
                console.log(response.data)
                return setData(response.data)})
            .catch(error => window.alert("Weather Not available"))},[]);

            console.log(data)
    return(
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Languages</h2>
            <ul>
                {country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
            </ul>
            <img src = {country.flag} alt={`${country.name}'s flag`} />
            <h2>Weather in {country.capital}</h2>
            <h3>Temprature: {data}</h3>
        </div>
    )
}

export default CountryFound;