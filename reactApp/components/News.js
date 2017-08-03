import React from 'react';
import axios from 'axios';

const NEWS_API_KEY = 'f6c882d2ff2c4c949ffc69ba6d5c0dac';

class News extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      allSources: [],
      currentSource: '',
      currentArticles: []
    };
  }

  componentDidMount () {
    axios.get('https://newsapi.org/v1/sources?language=en')
      .then(resp => {
        const newSources = [...resp.data.sources];
        this.setState({allSources: newSources});
      })
      .then(() => {
        console.log('here')
        this.selectSource('ABC News');
      })
      .catch(console.log);


      this.pinArticle("Trump 'pressed Mexico");
  }

  // function for user to select specific news source
  // sets state with source and headlines, returns null if not found
  selectSource (sourceName) {
    this.state.allSources.map(source => {
      if (source.name.toLowerCase().startsWith(sourceName.toLowerCase())) {
        this.setState({currentSource: source});
        console.log('current source', this.state.currentSource)
      }
    });

    const filter = 'latest'; // can be 'top' or 'popular'

    return axios.get(`https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=${NEWS_API_KEY}`)
      .then(resp => {
        console.log('RESP', resp);
        this.setState({currentArticles: [...resp.data.articles]});
      })
      .catch(console.log);
  }

  // function from which we'll later send text to user of article url they choose
  pinArticle (articleTitle) {
    this.state.currentArticles.map(article => {
      if (article.title.toLowerCase().startsWith(articleTitle.toLowerCase())) {
        // send twilio message with this article link
        const linkToSend = article.url;
        console.log('LINK', linkToSend)
      }
    })
  }

  render () {
    // loop through articles for current source and list out article heaadlines
    return (
      <div id="newsContainer">
        <ol style={{color: 'white'}}>
          {this.state.currentArticles.map((article, i) => {
            // SET 4 TO BE HOW EVER MANY ARTICLES YOU WANT TO SHOW
            if(i < 4) {
              return (<li key={i}>{article.title}</li>)
            }
          })}
        </ol>
      </div>
    );
  }
}

export default News;
