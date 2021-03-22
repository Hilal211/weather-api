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

class Weather_day extends Component {
  render() {
    const data = fakeWeatherData.list[0].main;

    return (
      <div>
        <section class="item">
          <img src={mostlycloudy} alt="clear icon" />
          <p id="status_weather">
            {fakeWeatherData.list[1].weather[0].description}
          </p>
          <p class="temp">
            Temperature{" "}
            <span id="temperature">
              {data.temp_min + " to " + data.temp_max}
            </span>
          </p>
          <p class="details_temp">
            Himidty <span id="himidty">{data.humidity}</span> Pressure
            <span id="pressure">{data.pressure}</span>
          </p>
        </section>
      </div>
    );
  }
}

class Weather_hours extends Component {
  render() {
    let menuItems = [];
    for (var i = 1; i <= 7; i++) {
      menuItems.push(
        <div class="time">
          <p id="hour">{fakeWeatherData.list[i].dt_txt}</p>
          <img src={mostlycloudy} alt="snow icon" />
          <p class="temperature_daily">{fakeWeatherData.list[i].main.temp}</p>
        </div>
      );
    }

    return menuItems;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hilal",
    };
  }

  handleInputChange = (value) => {
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

        <Weather_day />

        <div class="container_day">
          <Weather_hours />
        </div>
      </div>
    );
  }
}

export default App;
