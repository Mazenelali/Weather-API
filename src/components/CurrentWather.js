import React from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg"
import clear from "../img/weather-icons/clear.svg"
class CurrentWather extends React.Component {
    state = {  } 
    render() { 
        const FakeWather = this.props.FakeWatherNow;
        console.log(FakeWather)
        const imageSrc = this.props.imageSrc;
        console.log(imageSrc)
        return (
            <div className="current_weather">
            <img src={mostlycloudy} alt="cloudy" />
            <h2>overcast cloud</h2>
            <div className="current_weather_info">
                <p className="current_temperature"><b>Temperature</b> <span>10</span> to <span>11 &#8451;</span></p>
                <p className="current_humidity"><b>Humidity</b> <span>78%</span> <b>Pressure</b>  <span>1008.48</span></p>
            </div>

        </div>
        
        );
    }
}

export default CurrentWather;