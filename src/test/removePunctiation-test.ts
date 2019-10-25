import { assert, expect } from 'chai'
import { removePunctuation, removePunctuationArray, removeBlankSpace, removeBlankSpaceArray } from '../util/removePunctuation'

describe('Test to check remove punctuation function', () => {
  it('Test if removePunctuation is working as expected', () => {
    assert.equal(removePunctuation('"This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"'), 'This is an example of a string with punctuation')
  })

  it('Test if removeBlankSpace is working as expected', () => {
    assert.equal(removeBlankSpace('This    is    an         example            string with     a      lot     of    blank space'), 'This is an example string with a lot of blank space')
  })

  it('Test if removePunctuationArray is working as expected', () => {
    expect(removePunctuationArray(['"This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"', '"This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"', '"This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"', '"This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"'])).to.deep.equal(['This is an example of a string with punctuation', 'This is an example of a string with punctuation', 'This is an example of a string with punctuation', 'This is an example of a string with punctuation'])
  })

  it('Test if removeBlankSpaceArray is working as expected', () => {
    expect(removeBlankSpaceArray(['This    is    an         example            string with     a      lot     of    blank space', 'This    is    an         example            string with     a      lot     of    blank space', 'This    is    an         example            string with     a      lot     of    blank space', 'This    is    an         example            string with     a      lot     of    blank space'])).to.deep.equal(['This is an example string with a lot of blank space', 'This is an example string with a lot of blank space', 'This is an example string with a lot of blank space', 'This is an example string with a lot of blank space'])
  })
})