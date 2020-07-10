import React from 'react';

function Weather(props) {
    const { country, city, temp, humidity, description, error } = props;

  return (
    <div className="WeatherContainer">
    {
        error ? 
            <h3>Please Input City and State</h3>
        :
            <>
                <div className="flex">
                  <p className="h4">LOCATION:</p> 
                  <p className="h6">{`${city}, ${country}`}</p>
                </div>
                <div className="flex">
                  <p className="h4">TEMPERATURE:</p> 
                  <p className="h6">{temp}</p>
                </div>
                <div className="flex">
                  <p className="h4">HUMIDITY:</p> 
                  <p className="h6">{humidity}</p>
                </div>
                <div className="flex">
                  <p className="h4">CONDITION:</p> 
                  <p className="h6 p2">{description}</p>
                </div>
            </>
    }
    </div>
  );
}

export default Weather;


