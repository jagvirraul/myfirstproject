import React, { useState } from 'react';
import './style.css';
import Display from './display/index';
import axios from 'axios';
const Weather = () => {
    const [weather, setWeather] = useState([]);
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const APIKEY = "token";

    const weatherData = () => {
        if (city === "") {
            alert("Add Value")
        } else {
            axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${token}`
            )
                .then(data => {
                    setWeather(data);
                    console.log(data, "data");
                }).catch(error => { alert(error.message) }
                );
        }
    }
    const getData = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "city") {
            setCity(value);
        }
        if (name === "country") {
            setCountry(value);
        }
    }
    return (
        <div className="weather">
            <div className="container">
                <h2 className="title">Weather</h2>
                <form onSubmit={e => e.preventDefault()}>
                    <div className="row">
                        <div className="col">
                            <input
                                name="city"
                                type="text"
                                className="city"
                                placeholder="city"
                                onChange={getData}
                                value={city}

                            />
                        </div>
                        <div className="col">
                            <input
                                name="country"
                                type="text"
                                className="country"
                                placeholder="country"
                                onChange={getData}
                                value={country}
                            />
                        </div>
                        <div className="col">
                            <button className="btn btn-dark"
                                onClick={weatherData} >
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {
                weather.data !== undefined ?
                    <div>
                        <Display data={weather.data} />
                    </div>
                    : null
            };
        </div>
    )
}

export default Weather;