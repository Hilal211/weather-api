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

const api_key = "868609f021b729dd6686a4845782ec8c";

function getId(id) {
  if (id < 300) {
    return storm;
  }
  else if (id >= 300 && id <= 499) {
    return drizzle;
  }
  else if (id >=500 && id <= 599) {
    return rain;
  }
  else if (id >= 600 && id <= 699) {
    return snow;
  }
  else if (id >= 700 && id <= 799) {
    return fog;
  }
  else if (id == 800) {
    return clear;
  }
  else if (id == 801) {
    return partlycloudy;
  }
  else if (id >= 801 && id <= 805) {
    return mostlycloudy;
  }
}

function toCelsius(k) {
  var c;
  c = Math.floor(k - 273.15);
  return c;
}


class Weather_day extends Component {
  /*componentDidMount() {
    document.querySelector("button").addEventListener("click", display);
    function display() {
      var cityname = document.getElementById("input-name").value;
  
      if (cityname != null) {
        fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&cnt=8&units=metric&appid=868609f021b729dd6686a4845782ec8c`
        )
          .then((res) => res.json())
          .then((datafetch) => {
           return console.log(datafetch);
          });
      } else {
        alert("input value");
      }
    }
  }*/
  render() {
    return (
      <div>
        <section class="item">

          <img src={getId(this.props.id)} alt="clear icon" />
          <p id="status_weather">
            {this.props.description}
          </p>
          <p class="temp">
            Temperature &nbsp;
            <span id="temperature">
              {this.props.temp_min + "°" + " to " + this.props.temp_max + "°C"}
            </span>
          </p>
          <p class="details_temp">
            Himidty <span id="himidty">&nbsp; {this.props.humidity}&nbsp;</span> Pressure
            <span id="pressure">&nbsp; {this.props.pressure}</span>
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
          <p id="hour">{fakeWeatherData.list[i].dt_txt.substring(10, 16)}</p>
          <img src={mostlycloudy} alt="snow icon" />
          <p class="temperature_daily">{toCelsius(fakeWeatherData.list[i].main.temp) + "°C"}</p>
        </div>
      );
    }

    return menuItems;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      description: "",
      temp_max: undefined,
      temp_min: undefined,
      humidity: undefined,
      pressure: undefined,
      id: undefined
      
      
    };
    this.getWeather();
  }
  getWeather = async () => {
    
    
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=${api_key}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        this.setState({
          temp_min: data.list[0].main.temp_min,
          temp_max: data.list[0].main.temp_max,
          description: data.list[0].weather[0].description,
          id:data.list[0].weather[0].id,
          pressure: data.list[0].main.pressure,
          humidity: data.list[0].main.humidity
        })
      });
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

        <Weather_day temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          description={this.state.description}
          pressure={this.state.pressure}
          humidity={this.state.humidity}
          id={this.state.id}
        />

        <div class="container_day">
          <Weather_hours data={this.state.fdata}/>
        </div>
      </div>
    );
  }
}

export default App;
