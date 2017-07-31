import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      interval: () => '',
      weather: {}
    };
  }
  componentDidMount() {
  //update weather

    this.setState({ interval: setInterval(() => {
      axios.get('http://api.openweathermap.org/data/2.5/weather?q=SanFrancisco&APPID=89fdd5afd3758c1feb06e06a64c55260')
      .then(resp => {
        console.log(resp);
        this.setState({ weather: JSON.parse(resp)});
      });
    }, 600000)
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
    console.log('clearing');
  }
  render() {
    return (
      <div className='weather'>

      </div>
    );
  }
}

export default Weather;
