import * as React from 'react'
import {Container, ContainerProps} from './components/Container'
import {FeedItemProps} from './components/FeedItem'

interface State {
  feedItems?: FeedItemProps[]
}

interface Props {}

const fetchFeed: () => Promise<FeedItemProps[]> = () =>
  fetch('http://localhost:8080/feed')
    .then(res => res.json())

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      feedItems: []
    }
    this.handleFeed = this.handleFeed.bind(this)
  }

  handleFeed(): void {
    fetchFeed()
      .then(json => {
        this.setState({
          feedItems: json
        })
      })
  }

  render(): JSX.Element {
    return (
      <div>
        <button onClick={this.handleFeed}>{'Click me!'}</button>
        <Container FeedItems={this.state.feedItems} />
      </div>
    )
  }
}

export {App}
