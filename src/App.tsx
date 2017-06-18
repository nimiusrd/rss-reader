import * as React from 'react'
import {Container, ContainerProps} from './components/Container'
import {FeedItemProps} from './components/FeedItem'

interface State {
  feedItems: FeedItemProps[] | undefined[]
}

interface MyResponse<T> extends Response, Array<T> {
  feedItems: T[]
}

export default class App extends React.Component<{}, State> {
  constructor(props) {
    super(props)
    this.state = {
      feedItems: []
    }
    this.handleFeed = this.handleFeed.bind(this)
  }

  fetchFeed(): Promise<MyResponse<FeedItemProps | undefined>> {
    return fetch('http://localhost:8080/feed')
      .then(res => res.json())
  }

  handleFeed() {
    this.fetchFeed()
      .then(json => {
        this.setState({
          feedItems: json
        })
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleFeed}>{'Click me!'}</button>
        <Container FeedItems={this.state.feedItems} />
      </div>
    )
  }
}
