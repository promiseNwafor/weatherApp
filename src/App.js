import React, { useState } from 'react';
import Form from './Components/Form';
import Weather from './Components/Weather';
import Header from './Components/Header';
import './App.css';

const apiKey = "ace89d82c6a482949426d56639c7e414";

function App() {
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [temp, setTemp] = useState('')
  const [humidity, setHumidity] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(true)
 

  const fetchData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`)
    .then(response => response.json())
    .then(res => {
      setError(false)
      setCountry(res.sys.country)
      setCity(res.name)
      setTemp(res.main.temp)
      setHumidity(res.main.humidity)
      setDescription(res.weather[0].description)
    })
    .catch(err => {
      setError(true)
      console.log(err)
    });
  }

  const handleInput = e => {
    e.target.name === "country" ? 
      setCountry(e.target.value)
    : setCity(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetchData()
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Header />
            <Form 
              handleInput={handleInput} 
              handleSubmit={handleSubmit} 
            />
            <Weather 
              country={country} 
              city={city} 
              temp={temp} 
              humidity={humidity} 
              description={description} 
              error={error}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


