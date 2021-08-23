import { StoreMallDirectorySharp } from '@material-ui/icons';
import React from 'react'
import './style.css';
const Display = (props) => {
    const { data } = props;
    return (
        <div className="box">
            <div className="card">
                <div className="card-body">

                    <h2 className="card-title">
                        {data.name} , {data.sys.country}
                    </h2>
                    <h4 className="card-subtitle mb-2 text-muted">
                        <span>{new Date().toLocaleTimeString()}</span>
                    </h4>
                    <h2>
                        {Math.floor(data.main.temp - 273.15)}
                        <sup>o</sup>
                    </h2>

                    <p className="card-text">{data.weather[0].main} </p>
                </div>
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Weather Detail</th>
                            <th scope="col">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Wind</th>
                            <td>{data.wind.speed}</td>
                        </tr>
                        <tr>
                            <th scope="row">Weather</th>
                            <td>{data.weather[0].description}</td>
                        </tr>
                        <tr>
                            <th scope="row">Humidity</th>
                            <td>{data.main.humidity}</td>
                        </tr>
                        <tr>
                            <th scope="row">Pressure</th>
                            <td>{data.main.pressure}</td>
                        </tr>
                        <tr>
                            <th scope="row">Temperature max.</th>
                            <td>{Math.floor(data.main.temp_max - 273.15)}
                                <sup>o</sup></td>
                        </tr>
                        <tr>
                            <th scope="row">Temperature min.</th>
                            <td>{Math.floor(data.main.temp_min - 273.15)}
                                <sup>o</sup></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default Display;