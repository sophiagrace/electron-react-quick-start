import React from 'react';
// import styles from '../styles/styles';
// import '../styles/container.scss';

class Time extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
      interval: () => ''
    };
  }
  componentDidMount() {
  //update time
    this.setState({ interval: setInterval(() => {
      this.setState({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      });
    }, 100)
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
    console.log('clearing');
  }
  render() {
    return (
      <div className="time">
          {this.state.hours}:{this.state.minutes}:{this.state.seconds}
      </div>
    );
  }
}

export default Time;
