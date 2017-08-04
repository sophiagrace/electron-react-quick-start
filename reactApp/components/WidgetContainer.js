import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import all different widgets
// in this file, control which widgets show
import Time from './Time';
import Weather from './Weather';
import Radio from './Radio';
import News from './News';

class WidgetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  determineThreeWidgets() {
     // function to determine which widgets show
  }

  render () {
     // in future, only show three components,
     // for now, test out widgets here!
    return(
      <div>
           <div className={this.props.isActive ? 'isActiveDiv' : 'isStandbyDiv'}>
               <ReactCSSTransitionGroup transitionName = "example"
                 transitionAppear = {true} transitionAppearTimeout = {2000}
                 transitionEnter = {false} transitionLeave = {false}>

                 <Time timeState={this.props.isActive}/>
                 <Weather weatherState={this.props.isActive}/>
              </ReactCSSTransitionGroup>
          </div>
          <div className={this.props.isActive ? 'widgetsActive' : 'widgetsStandby'}>
              <Radio />
              <News />
          </div>
    </div>
    );
  }
}

export default WidgetContainer;
