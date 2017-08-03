import React from 'react';
import axios from 'axios';

class News extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      allSources: [],
      currentSourceID: '',
      currentHeadlines: []
    };

    axios.get('https://newsapi.org/v1/sources?language=en')
      .then((resp) => {
        console.log('DATA:',resp.data.sources);
      });
  }

  render () {
    return (
      <div id="newsContainer">
        <h3 style={{color: 'white'}}>THIS IS NEWS</h3>
      </div>
    )
  }
}

export default News;
