import React, { Component } from "react";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <header>
        <form >
          <input  type="text" class="input"></input>
          <input type={"submit"} value={"Find weather"} class="submit"></input>
        </form>
        </header>
          <div className="content">
            <div class="sun">
              <img src={mostlycloudy} alt="cloudy" />
              <p>overcast cloud</p>
            </div>
            <div className="caption">
            
            <p><b>temperature</b> <deg>10</deg> to <deg>11</deg> </p>
            <p><span class="humidity"><b>Humidity</b> 78% <b>Pressure</b>  1008.48</span></p>
            </div>
            
            <div class="all-days">
            <div class="firstDay">
            <time>3:00</time>
            <img src={mostlycloudy} alt="clear"></img>
            <p>8C</p>
            </div>
            <div class="firstDay">
            <time>6:00</time>
            <img src={mostlycloudy} alt="clear"></img>
            <p>14C</p>
            </div>
            <div class="firstDay">
            <time>9:00</time>
            <img src="clear.svg" alt="clear"></img>
            <p>17C</p>
            </div>
            <div class="firstDay">
            <time>12:00</time>
            <img src="clear.svg" alt="clear"></img>
            <p>18C</p>
            </div>
            <div class="firstDay">
            <time>15:00</time>
            <img src="clear.svg" alt="clear"></img>
            <p>16C</p>
            </div>
            <div class="firstDay">
            <time>18:00</time>
            <img src={mostlycloudy} alt="clear"></img>
            <p>13C</p>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
