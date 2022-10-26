import React, { useState, useMemo } from 'react'
import countryList from 'react-select-country-list'
import Select from 'react-select'
import './countries.scss'

function Countries() {
    let [country, setCountry] = useState(' ')

    const options = useMemo(() => countryList().getData(), [])
    
    const change = (country) => {
        setCountry(country)
    }
  
    return <Select style={{border:"none", outline:"none"}} className='select' options={options} value={country} onChange={change} />
}

export default Countries