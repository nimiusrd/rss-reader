/* eslint-env mocha */
import * as React from 'react'
import * as assert from 'power-assert'
import {mount, render, shallow} from 'enzyme'

import {FeedItem, FeedItemProps} from './FeedItem'

describe('<FeedItem />', () => {
  it('mount correctly', () => {
    const elem =
      <FeedItem
        description="hoge"
        link="example.com"
        title="huga"
      />
    const wrapper = shallow(elem)

    assert(wrapper.contains(<header>{'huga'}</header>))
    assert(wrapper.contains(<details>{'hoge'}</details>))
    assert(wrapper.contains(<a href={'example.com'}>{'example.com'}</a>))
  })

  it('no attribute', () => {
    const elem = <FeedItem />
    const wrapper = shallow(elem)

    assert(wrapper.contains(<header>{'no title'}</header>))
    assert(wrapper.contains(<details>{'no description'}</details>))
    assert(wrapper.contains(<a href="">{'no link'}</a>))
  })

  it('empty attribute', () => {
    const elem =
      <FeedItem
        description=""
        link=""
        title=""
      />
    const wrapper = shallow(elem)

    assert(wrapper.contains(<header>{'no title'}</header>))
    assert(wrapper.contains(<details>{'no description'}</details>))
    assert(wrapper.contains(<a href="">{'no link'}</a>))
  })
})
