import * as mining from '../index'

import { assert, expect } from 'chai'
import { clearTweets, removeHashtag, removeNumber, removeRT, removeTag } from '../src/lib/cleanTweets'
import { removeAccents, removeAccentsArray } from '../src/lib/removeAccent'
import { removeLinks, removeLinksArray } from '../src/lib/removeLinks'
import { removeBlankSpace, removeBlankSpaceArray, removePunctuation, removePunctuationArray } from '../src/lib/removePunctuation'

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

describe('Tests to check remove accents functions', () => {
  it('Test if removeAccent is working to single string variable, with different sizes.', () => {
    assert.equal(removeAccents('você fica esperando por movimentos e declarações que não existem. por aquele pedido de desculpas que não vai acontecer. por aquele “olha, errei com você, me perdoa?” que seus ouvidos nunca vão ouvir. e a pergunta que fica é: por que esperar por algo/alguém que nunca vem?'), 'voce fica esperando por movimentos e declaracoes que nao existem. por aquele pedido de desculpas que nao vai acontecer. por aquele “olha, errei com voce, me perdoa?” que seus ouvidos nunca vao ouvir. e a pergunta que fica e: por que esperar por algo/alguem que nunca vem?')
  })

  it('Test if a string array is working to remove accents.', () => {
    expect(removeAccentsArray(['Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa.', 'Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor', 'que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais.', 'Seu tamanho é variável'])).to.deep.equal(['Em linguistica, a nocao de texto e ampla e ainda aberta a uma definicao mais precisa.', 'Grosso modo, pode ser entendido como manifestacao linguistica das ideias de um autor', 'que serao interpretadas pelo leitor de acordo com seus conhecimentos linguisticos e culturais.', 'Seu tamanho e variavel'])
  })

})

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

describe('Test main function! Accent', () => {
  it('Test if removeAccents is working as expected.', () => {
    assert.equal(mining.removeAccents('você fica esperando por movimentos e declarações que não existem. por aquele pedido de desculpas que não vai acontecer. por aquele “olha, errei com você, me perdoa?” que seus ouvidos nunca vão ouvir. e a pergunta que fica é: por que esperar por algo/alguém que nunca vem?'), 'voce fica esperando por movimentos e declaracoes que nao existem. por aquele pedido de desculpas que nao vai acontecer. por aquele “olha, errei com voce, me perdoa?” que seus ouvidos nunca vao ouvir. e a pergunta que fica e: por que esperar por algo/alguem que nunca vem?')
  })

  it('Test if removeAccentsArray is working as expected.', () => {
    expect(mining.removeAccentsArray(['Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa.', 'Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor', 'que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais.', 'Seu tamanho é variável'])).to.deep.equal(['Em linguistica, a nocao de texto e ampla e ainda aberta a uma definicao mais precisa.', 'Grosso modo, pode ser entendido como manifestacao linguistica das ideias de um autor', 'que serao interpretadas pelo leitor de acordo com seus conhecimentos linguisticos e culturais.', 'Seu tamanho e variavel'])
  })
})

describe('Test main function! Links', () => {
  it('Test if removeLinks is working as expected', () => {
    assert.equal(mining.removeLinks('This is an example to remove links from a single phrase, https://web.whatsapp.com/ and text after the link.'), 'This is an example to remove links from a single phrase,  and text after the link.')
  })

  it('Test if removeLinks is working as expected', () => {
    assert.equal(mining.removeLinks('This is an example to remove links from a single phrase, mms://web.whatsapp.com/ and text after the link.', 'mms'), 'This is an example to remove links from a single phrase,  and text after the link.')
  })

  it('Test if removeLinksArray is working as expected', () => {
    expect(mining.removeLinksArray(['This is an example to remove links from a single phrase, https://web.whatsapp.com/ and text after the link.', 'This is an example to remove links from a single phrase, https://www.instagram.com/ and text after the link.', 'This is an example to remove links from a single phrase, https://www.google.com/ and text after the link.'])).to.deep.equal(['This is an example to remove links from a single phrase,  and text after the link.', 'This is an example to remove links from a single phrase,  and text after the link.', 'This is an example to remove links from a single phrase,  and text after the link.'])
  })
})

describe('Test main function! Punctuation', () => {
  it('Test if removePunctuation is working as expected', () => {
    assert.equal(mining.removePunctuation('"This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"'), 'This is an example of a string with punctuation')
  })

  it('Test if removeBlankSpace is working as expected', () => {
    assert.equal(mining.removeBlankSpace('This    is    an         example            string with     a      lot     of    blank space'), 'This is an example string with a lot of blank space')
  })

  it('Test if removePunctuationArray is working as expected', () => {
    expect(mining.removePunctuationArray(['"This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"', '"This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"', '"This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"', '"This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"'])).to.deep.equal(['This is an example of a string with punctuation', 'This is an example of a string with punctuation', 'This is an example of a string with punctuation', 'This is an example of a string with punctuation'])
  })

  it('Test if removeBlankSpaceArray is working as expected', () => {
    expect(mining.removeBlankSpaceArray(['This    is    an         example            string with     a      lot     of    blank space', 'This    is    an         example            string with     a      lot     of    blank space', 'This    is    an         example            string with     a      lot     of    blank space', 'This    is    an         example            string with     a      lot     of    blank space'])).to.deep.equal(['This is an example string with a lot of blank space', 'This is an example string with a lot of blank space', 'This is an example string with a lot of blank space', 'This is an example string with a lot of blank space'])
  })
})
