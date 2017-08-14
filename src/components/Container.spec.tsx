/* eslint-env mocha */
import * as React from 'react'
import * as assert from 'power-assert'
import {FeedItem, FeedItemProps} from './FeedItem'
import {mount, render, shallow} from 'enzyme'
import {Container} from './Container'

describe('<Container />', () => {
  it('mount correctly', () => {
    const feedItems: FeedItemProps[] = [
      {
        description: 'hoge',
        link       : 'example.com',
        title      : 'huga'
      }
    ]

    const wrapper = mount(
      <Container
        feedId={'hoge'}
        feedItems={feedItems}
      />
    )

    assert(wrapper.contains(<header>{'huga'}</header>))
    assert(wrapper.contains(<details>{'hoge'}</details>))
    assert(wrapper.contains(<a href={'example.com'}>{'example.com'}</a>))
  })
})
