/* eslint-env mocha */
import {mount, render, shallow} from 'enzyme'
import * as assert from 'power-assert'
import * as React from 'react'

import {Container, ContainerProps} from './Container'

describe('<Container />', () => {
  it('mount correctly', () => {
    const feedItems: ContainerProps = [
      {
        description: 'hoge',
        link: 'example.com',
        title: 'huga'
      }
    ]

    const wrapper = shallow(<Container FeedItems={feedItems} />)

    assert(wrapper.contains(<header>{'huga'}</header>))
    assert(wrapper.contains(<details>{'hoge'}</details>))
    assert(wrapper.contains(<a href={'example.com'}>{'example.com'}</a>))
  })
})
