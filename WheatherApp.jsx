import React, { useState } from 'react'
import "./WheatherApp.css"

import SearchIcon from "../Assets/search.png"
import CloudIcon from "../Assets/cloud.png"
import DrizzleIcon from "../Assets/drizzle.png"
import ClearIcon from "../Assets/clear.png"
import HumidityIcon from "../Assets/humidity.png"
import RainIcon from "../Assets/rain.png"
import SnowIcon from "../Assets/snow.png"
import WindIcon from "../Assets/wind.png"
//8662889449cb51bf7fc4925892d1088c


const WheatherApp = () => {
    let api_key = "3a60b0ad317ddcf84b8bd708f7d12c91"
    const [wicon, setWicon] = useState(CloudIcon)

    const search = async () => {
        const element = document.getElementsByClassName("inpt")
        if (element[0].value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units-Metric&appid=${api_key}`
        let response = await fetch(url)
        let data = await response.json();
        const humid = document.getElementsByClassName("humidity_percent")
        const winds = document.getElementsByClassName("wind_percent")
        const temperature = document.getElementsByClassName("weather_temp")
        const location = document.getElementsByClassName("weather_location")
        humid[0].innerHTML = data.main.humidity + "%"
        winds[0].innerHTML = data.wind.speed + "kmph"
        temperature[0].innerHTML = data.main.temp + "°C"
        location[0].innerHTML = data.name
        
        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setWicon(ClearIcon);

        }
        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
            setWicon(CloudIcon)
        }

        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            setWicon(DrizzleIcon)
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
          <img src={DrizzleIcon} alt=''/>
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            setWicon(RainIcon)
        }
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            setWicon(RainIcon)
        }
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            setWicon(SnowIcon)
        }
        else{
            setWicon(ClearIcon)
        }


    }
    return (
        <div className="container">
            <div className="top_bar">
                <input type="text" className='inpt' placeholder='Search' />
                <div className="search-icon">
                    <img src={SearchIcon} alt="" onClick={() => { search() }} />
                </div>
            </div>
            <div className='weather'>
                <div className="weather_image">
                    <img src={DrizzleIcon} alt=""  />
                </div>
                <div className="weather_temp">24°C</div>
                <div className="weather_location">London</div>
                <div className="data_container">
                    <div className="element">
                        <img src={HumidityIcon} alt="" className="icon" />
                        <div className="data">
                            <div className="humidity_percent">64%</div>
                            <div className="text">Humidity</div>
                        </div>
                    </div>
                    <div className="element">
                        <img src={WindIcon} alt="" className="icon" />
                        <div className="data">
                            <div className="wind_percent">18kmph</div>
                            <div className="text">WindSpeed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WheatherApp
