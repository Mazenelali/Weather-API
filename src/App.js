import React, { Component } from "react";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"
import clear from "./img/weather-icons/clear.svg"

import "./App.css";
import Navbar from "./components/Navbar";
import DayWather from "./components/DayWather";
import CurrentWather from "./components/CurrentWather";
class App extends Component {


  render() {
    return (
      <div className="app">
          <Navbar/>

          <main className="content">

            
            <CurrentWather/>
            
              <div class="day_weather_container">
              <DayWather/>
              </div>
        </main>
      </div>
    );
  }
}

export default App;