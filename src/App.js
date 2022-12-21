import React, { Component } from "react";
import FakeWather from "./data/FakeWather.json";
import "./App.css";
import Navbar from "./components/Navbar";
import DayWather from "./components/DayWather";
import CurrentWather from "./components/CurrentWather";

import clear from "./img/weather-icons/clear.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import fog from "./img/weather-icons/fog.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";

class App extends Component {
state={

}

  render() {
    const imageSrc = (image) => {
      switch (image) {
        case "clouds":
          return cloudy;
        case "mostlycloudy":
          return mostlycloudy;
        case "partlycloudy":
          return partlycloudy;
        case "snow":
          return snow;
        case "storm":
          return storm;
        case "rain":
          return rain;
        case "fog":
          return fog;
        case "drizzle":
          return drizzle;
        case "clear":
          return clear
      }
    }
    return (
      <div className="app">
          <Navbar FakeWatherNow={FakeWather} 
          />
        <main className="content">
            <CurrentWather FakeWatherNow={FakeWather} imageSrc={imageSrc}/>          
            <div className="day_weather_container">
              <DayWather FakeWatherNow={FakeWather} imageSrc={imageSrc}/>
            </div>
        </main>
      </div>
    );
  }
}

export default App;