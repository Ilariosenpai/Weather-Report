import React, { useEffect } from 'react'
import Header from './component/header/Header'
import Weather from './component/weather/Weather'
import './App.css'
import axios from 'axios';

function App() {
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    useEffect(() => {
        axios
            .get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Lyon&days=5&aqi=no&alerts=no`)
            .then(function ({ data }) {


                console.log(data);
            })

            .catch(error => {

                console.log(error);
            })
    });





    return (


        <>


            <div className="App">

                <Header />

                <div className="row">
                    <div className="col s12 m6 push-m3">

                        <Weather />

                    </div>
                </div>
            </div>




        </>


    )
}

export default App