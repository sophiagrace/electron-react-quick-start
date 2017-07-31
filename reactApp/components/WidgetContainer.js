import React from 'react';
import ReactDOM from 'react-dom';


// import all different widgets
// in this file, control which widgets show
import Time from './Time';

 class WidgetContainer extends React.Component {
   constructor(props) {
     super(props);
     this.state = {

     }
   }

   determineThreeWidgets() {
     // function to determine which widgets show
   }

   render () {
     // in future, only show three components,
     // for now, test out widgets here!
     return(
         <Time />
     )

   }
 }

 export default WidgetContainer;
