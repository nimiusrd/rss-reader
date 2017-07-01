/* eslint-env mocha */
import {mount, render, shallow} from 'enzyme'
import * as assert from 'power-assert'
import * as React from 'react'

import {Container} from './Container'
import {FeedItem, FeedItemProps} from './FeedItem'

describe('<Container />', () => {
  it('mount correctly', () => {
    const feedItems: FeedItemProps[] = [
      {
        description: 'hoge',
        link: 'example.com',
        title: 'huga'
      }
    ]

    const wrapper = mount(<Container FeedItems={feedItems} />)

    assert(wrapper.contains(<header>{'huga'}</header>))
    assert(wrapper.contains(<details>{'hoge'}</details>))
    assert(wrapper.contains(<a href={'example.com'}>{'example.com'}</a>))
  })
})
