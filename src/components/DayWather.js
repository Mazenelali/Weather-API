import React from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg"
import clear from "../img/weather-icons/clear.svg"

class DayWather  extends React.Component {
    state = {  } 
    render() { 
        const FakeWather = this.props.FakeWatherNow;
        console.log(FakeWather)
        const imageSrc = this.props.imageSrc;
        console.log(imageSrc)
        return (
            <div className="day_weather_container">
                <div className="day_weather_part">
                    <time>3:00</time>
                    <img src={mostlycloudy} alt="clear"></img>
                    <p>8&#8451;</p>
                </div>
                
                <div className="day_weather_part">
                    <time>6:00</time>
                    <img src={mostlycloudy} alt="clear"></img>
                    <p>14&#8451;</p>
                </div>

                <div className="day_weather_part">
                    <time>9:00</time>
                    <img src={clear} alt="clear"></img>
                    <p>17&#8451;</p>
                </div>

                <div className="day_weather_part">
                    <time>12:00</time>
                    <img src={clear} alt="clear"></img>
                    <p>18&#8451;</p>
                </div>

                <div className="day_weather_part">
                    <time>15:00</time>
                    <img src={clear} alt="clear"></img>
                    <p>16&#8451;</p>
                </div>

                <div className="day_weather_part">
                    <time>18:00</time>
                    <img src={mostlycloudy} alt="clear"></img>
                    <p>13&#8451;</p>
                </div>

            </div>
        );
    }
}


export default DayWather ;