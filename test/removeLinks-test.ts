import { assert, expect } from 'chai'
import { removeLinks, removeLinksArray } from '../src/core/removeLinks'

describe('Test to check remove links function', () => {
  it('Test if removeLinks is working as expected', () => {
    assert.equal(removeLinks('This is an example to remove links from a single phrase, https://web.whatsapp.com/ and text after the link.'), 'This is an example to remove links from a single phrase,  and text after the link.')
  })

  it('Test if removeLinks is working as expected', () => {
    assert.equal(removeLinks('This is an example to remove links from a single phrase, mms://web.whatsapp.com/ and text after the link.', 'mms'), 'This is an example to remove links from a single phrase,  and text after the link.')
  })

  it('Test if removeLinksArray is working as expected', () => {
    expect(removeLinksArray(['This is an example to remove links from a single phrase, https://web.whatsapp.com/ and text after the link.', 'This is an example to remove links from a single phrase, https://www.instagram.com/ and text after the link.', 'This is an example to remove links from a single phrase, https://www.google.com/ and text after the link.'])).to.deep.equal(['This is an example to remove links from a single phrase,  and text after the link.', 'This is an example to remove links from a single phrase,  and text after the link.', 'This is an example to remove links from a single phrase,  and text after the link.'])
  })
})
