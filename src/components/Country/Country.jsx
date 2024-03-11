import { useState } from 'react';
import './Country.css'
// import CountryDetails from '../CountryDetails/CountryDetails';
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => { 
        setVisited(!visited);
    }

    const passWithParams = () =>handleVisitedCountry(country);
    

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'Purple': 'White'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Visited Flag</button><br /><br />
            <button onClick={passWithParams}>Mark visited</button><br /><br />
            <button onClick={handleVisited}>Visited</button>
            {visited &&  ' I have visited this country'}
            {/* {visited ? ' I have visited this country.' : ' I want to visit.'} */}
            {/* <hr /> */}
        
            {/* <CountryDetails
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetails> */}
        </div>
    );
};

export default Country;