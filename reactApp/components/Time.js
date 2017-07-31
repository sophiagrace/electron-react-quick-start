import React from 'react';
import ReactDOM from 'react-dom';

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
    this.setState({ hours: new Date().getHours(),
                    minutes: new Date().getMinutes(),
                    seconds: new Date().getSeconds()
                  })
                }, 100)
              });
  }
componentWillUnmount() {
  clear(this.state.interval);
  console.log(clearing);
}
  render() {
    return (
      <div className='time'>
      {this.state.hours}:{this.state.minutes}:{this.state.seconds}
      </div>
    );
  }
}

export default Time;
