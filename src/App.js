import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Hilal"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        {/*<SayHi />*/}
        {/*<SayHello color="black" name={this.state.name} />*/}

        <div class="app__header">
          <Search handleInput={this.handleInputChange} />
        </div>

        <div>
          <section class="item">
            <img src={mostlycloudy} alt="clear icon" />
            <p id="status_weather">overcast clouds</p>
            <p class="temp">Temperature <span id="temperature">10c to 11c</span></p>
            <p class="details_temp">Himidty <span id="himidty">78%</span> Pressure <span id="pressure">100848</span></p>
          </section>
        </div>

        <div class="container_day">
          <div class="time">
            <p id="hour">03:00</p>
            <img src={mostlycloudy} alt="snow icon" />
            <p class="temperature_daily">8c</p>
          </div>
          <div class="time">
            <p id="hour">06:00</p>
            <img src={mostlycloudy} alt="snow icon" />
            <p class="temperature_daily">9c</p>
          </div>
          <div class="time">
            <p id="hour">09:00</p>
            <img src={clear} alt="snow icon" />
            <p class="temperature_daily">14c</p>
          </div>
          <div class="time">
            <p id="hour">12:00</p>
            <img src={clear} alt="snow icon" />
            <p class="temperature_daily">17c</p>
          </div>
          <div class="time">
            <p id="hour">15:00</p>
            <img src={clear} alt="snow icon" />
            <p class="temperature_daily">18c</p>
          </div>
          <div class="time">
            <p id="hour">18:00</p>
            <img src={clear} alt="snow icon" />
            <p class="temperature_daily">16c</p>
          </div>
          <div class="time">
            <p id="hour">21:00</p>
            <img src={mostlycloudy} alt="snow icon" />
            <p class="temperature_daily">13c</p>
          </div>


        </div>


      </div>


    );
  }
}

export default App;
