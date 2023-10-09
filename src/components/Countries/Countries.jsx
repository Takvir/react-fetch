import React, { useEffect, useState } from "react"
import Country from "../Country/Country";
import './countries.css'

function Countries(){

    const [countries , setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data => setCountries(data))
    },[])

    console.log(countries);

    return(
        <div>
            <h1>This is Countries component</h1>
            <div className="countries-container">
                {
                    countries.map(country =>
                       <Country 
                        country = {country}
                       >

                       </Country>
                    )
                }
            </div>
        </div>
    )
}

export default Countries