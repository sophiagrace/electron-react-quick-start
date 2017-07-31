import React from 'react';
import ReactDOM from 'react-dom';

import WidgetContainer from './components/WidgetContainer';

 class Container extends React.Component {
   constructor() {
     super();
     this.state = {
       isActive: false
     }

     this.isMirrorActive = this.isMirrorActive.bind(this);
   }

   isMirrorActive() {
     // function passed down to voice component to determine if
     // mirror is standby or active
     return
   }

   render () {
       return(
           <WidgetContainer />
       )
     // in future, have either just header Component

     // or the widgetContainer, header, and voice components


   }
 }

 export default Container;
