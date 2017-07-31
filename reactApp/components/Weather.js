import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      interval: () => '',
      weather: 'loading...',
    };
  }
  componentDidMount() {
  //update weather
    this.setState({ interval: setInterval(() => {
      axios.get('http://api.openweathermap.org/data/2.5/weather?q=SanFrancisco&APPID=89fdd5afd3758c1feb06e06a64c55260')
      .then(resp => {
        this.setState({
          description: resp.data.weather[0].description,
          min: resp.data.main.temp_min-273.15,
          max: resp.data.main.temp_max-273.15,
          current: (resp.data.main.temp-273.15).toFixed(0)
        });
        console.log(this.state.weather);
      });
    }, 1000)
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
    console.log('clearing');
  }
  render() {
    return (
      <div className='weather'>
        <div className='current'>
          currently {this.state.current}˚C
        </div>
        <div className='description'>
          {this.state.description}
        </div>
        <div className='min-max'>
          {this.state.min}˚C  |  {this.state.max}˚C
        </div>
      </div>
    );
  }
}

export default Weather;
