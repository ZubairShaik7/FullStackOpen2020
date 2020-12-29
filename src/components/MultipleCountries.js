import React, {useEffect, useState} from "react";
import axios from 'axios'

const MultipleCountries = ({found, handler}) => {
    
    return (
    <ul> {found.map(country => 
        <li key={country.name}> 
            {country.name} 
            <button onClick={() => handler(country)}>Show Info</button>
        </li>)} 
    </ul> 
    )
}

export default MultipleCountries;