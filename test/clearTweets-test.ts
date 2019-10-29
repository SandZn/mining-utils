import { assert } from 'chai'
import { clearTweets, removeHashtag, removeNumber, removeRT, removeTag } from '../src/core/cleanTweets'

describe('Tests to check clear Tweets function ', () => {
  it('Test if removeHashtag is working as expected.', () => {
    assert(removeHashtag('RT @THRGlobal: Time to #TaylorSwift to join #LeBronJames aka #LeBronShames sponsored by #Nike @Nike https://t.co/c6hLOS0aYx'), 'RT @THRGlobal: Time to  to join  aka #LeBronShames sponsored by  @Nike https://t.co/c6hLOS0aYx')
  })

  it('Test if removeNumber is working as expected.', () => {
    assert(removeNumber('RT @themanortooting: It\'s time for the @premierleague!With the biggest games for you to enjoy with 2-4-1 cocktails this evening, kickin…'), 'RT @themanortooting: It\'s time for the @premierleague!With the biggest games for you to enjoy with -- cocktails this evening, kickin…')
  })

  it('Test if removeRT is working as expected.', () => {
    assert(removeRT('RT @THRGlobal: Time to #TaylorSwift to join #LeBronJames aka #LeBronShames sponsored by #Nike @Nike https://t.co/c6hLOS0aYx'), ' Time to #TaylorSwift to join #LeBronJames aka #LeBronShames sponsored by #Nike @Nike https://t.co/c6hLOS0aYx')
  })

  it('Test if removeTag is working as expected.', () => {
    assert(removeTag('RT : Time to #TaylorSwift to join #LeBronJames aka #LeBronShames sponsored by #Nike  https://t.co/c6hLOS0aYx'), '')
  })

  it('Test if clearTweets is working as expected.', () => {
    assert(clearTweets('RT @themanortooting: It\'s time for the @premierleague!With the biggest games for you to enjoy with 2-4-1 cocktails this evening, kickin…'), ' It\'s time for the !With the biggest games for you to enjoy with -- cocktails this evening, kickin…')
  })
})
