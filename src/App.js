import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryFound from './components/CountryFound'
import MultipleCountries from './components/MultipleCountries'

const App = () => {
    const [countries, setCountries] = useState([])
    const [foundResults, setFoundResults] = useState([])

    useEffect(() => {
        axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const allCountries = response.data
        console.log(allCountries)
        setCountries(allCountries)
      })
    }, [])
    
    const handleChange = (event) => {
        const inputValue = event.target.value
         console.log('button pressed ' + inputValue)
         const results = countries.filter(country => {
             return country.name.toLowerCase().includes(inputValue.toLowerCase())
         })
         setFoundResults(results)
        }

    const DisplayCountries = () => {
        const [isSelected, setSelected] = useState(undefined)

        if (isSelected) {
            return <CountryFound country={isSelected}/>
        } else if(foundResults.length === 1) {
            console.log(foundResults[0])
            return <CountryFound country={foundResults[0]}/>
        } else if (foundResults.length < 10) {
            return <MultipleCountries found={foundResults} handler={setSelected} />
        } else {
            return <p>Too many matches, specify another filter</p>
        }

    }    

    
  return (
    <div>
      <form>
          <div>
            <label style={{ paddingRight : '10px'}}>Find Countries</label>  
            <input onChange={handleChange}></input>
          </div>
      </form>
      <DisplayCountries />
    </div>
  )
}

export default App 