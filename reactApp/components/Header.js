import React from 'react';
import Time from './Time';
import Weather from './Weather';

class Header extends React.Component {
  render () {
    return(
      <div className='header'>
         <Time />
         <Weather />
      </div>
    );
  }
 }

export default Header;
