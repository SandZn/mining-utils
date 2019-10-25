import { assert, expect } from 'chai'
import { removeAccents, removeAccentsArray } from '../util/removeAccent'
import { removeBlankSpace, removeBlankSpaceArray, removePunctuation, removePunctuationArray } from '../util/removePunctuation'

describe('Tests to check remove accents functions', () => {
  it('Test if removeAccent is working to single string variable, with different sizes.', () => {
    assert.equal(removeAccents('você fica esperando por movimentos e declarações que não existem. por aquele pedido de desculpas que não vai acontecer. por aquele “olha, errei com você, me perdoa?” que seus ouvidos nunca vão ouvir. e a pergunta que fica é: por que esperar por algo/alguém que nunca vem?'), 'voce fica esperando por movimentos e declaracoes que nao existem. por aquele pedido de desculpas que nao vai acontecer. por aquele “olha, errei com voce, me perdoa?” que seus ouvidos nunca vao ouvir. e a pergunta que fica e: por que esperar por algo/alguem que nunca vem?')
  })

  it('Test if a string array is working to remove accents.', () => {
    expect(removeAccentsArray(['Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa.', 'Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor', 'que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais.', 'Seu tamanho é variável'])).to.deep.equal(['Em linguistica, a nocao de texto e ampla e ainda aberta a uma definicao mais precisa.', 'Grosso modo, pode ser entendido como manifestacao linguistica das ideias de um autor', 'que serao interpretadas pelo leitor de acordo com seus conhecimentos linguisticos e culturais.', 'Seu tamanho e variavel'])
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