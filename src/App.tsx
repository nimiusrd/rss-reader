import * as React from 'react';
import {FeedItemProps} from './components/FeedItem';
import {Container, ContainerProps} from './components/Container';

interface Props {}
interface State {
  feedItems: FeedItemProps[] | undefined[];
}

interface myResponse<T> extends Response, Array<T> {
  feedItems: T[];
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      feedItems: []
    };
    this.handleFeed = this.handleFeed.bind(this);
  }

  fetchFeed(): Promise<myResponse<FeedItemProps | undefined>> {
    return fetch('http://localhost:8080/feed')
      .then(res => res.json());
  }

  handleFeed() {
    this.fetchFeed()
      .then(json => {
        this.setState({
          feedItems: json
        });
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleFeed}>{'Click me!'}</button>
        <Container FeedItems={this.state.feedItems} />
      </div>
    );
  }
}
