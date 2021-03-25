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

function getId(id){
  if(id<300){
      return "storm";
  }
  else if(id>300 && id<499){
      return "drizzle";
  }
  else if(id>500 && id<599){
      return "rain";
  }
  else if(id>600 && id<699){
      return "snow";
  }
  else if(id>700 && id<799){
      return "fog";
  }
  else if(id==800){
      return "clear";
  }
  else if(id==801){
      return "partlycloudy";
  }
  else if(id>801 && id<805){
      return "mostlycloudy";
  }
  }

  function toCelsius(k){
    var c;
    c= k - 273.15;
    c=parseInt(c)
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
              {toCelsius(data.temp_min)+"°" + " to " + toCelsius(data.temp_max)+"°C"}
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
          <p id="hour">{fakeWeatherData.list[i].dt_txt.substring(10,16)}</p>
          <img src={mostlycloudy} alt="snow icon" />
          <p class="temperature_daily">{toCelsius(fakeWeatherData.list[i].main.temp)+"°C"}</p>
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
