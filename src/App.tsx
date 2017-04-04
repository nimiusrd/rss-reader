import * as React from 'react';
import {FeedItem} from './components/FeedItem';

export default class App extends React.Component<undefined, undefined> {
  constructor(props) {
    super(props);
    this.state = {
      feedItems: []
    }
    this.getFeed = this.getFeed.bind(this)
  }

  getFeed() {
    fetch('http://localhost:8080/feed')
      .then(res => res.json())
      .then(json => {
        this.setState({
          feedItems: json
        });
      })
  }

  render() {
    const feedItems = this.state.feedItems.map((item, index) => (
      <FeedItem
        key={index}
        description={item.description}
        link={item.link}
        title={item.title}
      />
    ))
    return (
      <div>
        <button onClick={this.getFeed}>Click me!</button>
        {feedItems}
      </div>
    )
  }
}
