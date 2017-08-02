// FILE FOR THE NEWS COMPONENT
import React from 'react';
import axios from 'axios';

// YASH'S API KEY:  0610a1f9c131467fa9b2ad90f975dd7f

class News extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      news_sources: [],
      current_source: ''
    }
  }

  componentDidMount () {
    // populate array of possible news sources:
    axios.get('https://newsapi.org/v1/sources?language=en')
    .then((data) => {
      if (data.sources) {
        data.sources.forEach((sourceInfo) => {
          this.state.news_sources
        })
      }
    });
  }

  render () {
    return (

    );
  }
}



axios.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=0610a1f9c131467fa9b2ad90f975dd7f')
