import React, { Component } from "react";
import Weather from "./weather.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import Form from "./Form.component";
//const API_KEY="329577838726dbc596338d3030d51f43";

class Main extends React.Component {
    constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      error: false,
    };
    this.getWeather();

    this.weatherIcon = {
      Thunderstrom: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }
  componentDidMount() {
    if (navigator.geolocation) {
      this.getPosition()
        //If user allow location service then will fetch data & send it to get-weather function.
        .then((position) => {
          this.getWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((err) => {
          //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
          this.getWeather(28.67, 77.22);
          alert(
            "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
          );
        });
    } else {
      alert("Geolocation not available");
    }

  }
  getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };
  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }
  
  getWeather = async (lat,lon) => {
    // e.preventDefault();
    //  const city=e.target.elements.city.value;
    // const country=e.target.elements.country.value;
    
      const api_call = await fetch(
        // `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=329577838726dbc596338d3030d51f43`
        `http://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&appid=329577838726dbc596338d3030d51f43`
      );
      const response = await api_call.json();
      console.log(response);
  
      this.setState({
        city: response.name ,  //`${response.name},${response.sys.country}`
        // country: response.sys.country,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        description: response.weather[0].description,
        error:false
      });
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    
  };
  render() {
    return (  
      <div className="App">
        {/* <Form />  loadweather={this.getWeather}  error={this.state.error} */}
        <Weather
          city={this.state.city}
        //   country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          weatherIcon={this.state.icon}
        />
      </div>
    );
  }
}

export default Main;
