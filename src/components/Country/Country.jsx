import React from 'react';
import './country.css'

const Country = (props) => {
    const {name ,capital,region} = props.country;
    return (
        <div className='country-single'>
            <h2>Single Country</h2>
            <h3>{name.common}</h3>
            <p>{capital}</p>
            <p>{region}</p>
        </div>
    );
};

export default Country;