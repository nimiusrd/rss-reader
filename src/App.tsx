import * as React from 'react'
import {Container, ContainerProps} from './components/Container'
import {FeedItemProps} from './components/FeedItem'

interface State {
  feedId?: string
  feedItems?: FeedItemProps[]
}

interface Props {}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      feedItems: []
    }
    this.handleFeed = this.handleFeed.bind(this)
  }

  handleFeed(): void {
    fetch('/feeds')
      .then(res => res.json())
      .then(json => {
        this.setState({
          feedId   : json.feedId,
          feedItems: json.items
        })
      })
  }

  render(): JSX.Element {
    return (
      <div>
        <button onClick={this.handleFeed}>{'Click me!'}</button>
        <Container
          feedId={this.state.feedId || ''}
          feedItems={this.state.feedItems || []}
        />
      </div>
    )
  }
}

export {App}
