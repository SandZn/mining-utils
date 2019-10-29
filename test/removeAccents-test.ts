import { assert, expect } from 'chai'
import { removeAccents, removeAccentsArray } from '../src/core/removeAccent'

describe('removeAccents File', () => {
  it('Test if removeAccent is working to single string variable, with different sizes.', () => {
    assert.equal(removeAccents('você fica esperando por movimentos e declarações que não existem. por aquele pedido de desculpas que não vai acontecer. por aquele “olha, errei com você, me perdoa?” que seus ouvidos nunca vão ouvir. e a pergunta que fica é: por que esperar por algo/alguém que nunca vem?'), 'voce fica esperando por movimentos e declaracoes que nao existem. por aquele pedido de desculpas que nao vai acontecer. por aquele “olha, errei com voce, me perdoa?” que seus ouvidos nunca vao ouvir. e a pergunta que fica e: por que esperar por algo/alguem que nunca vem?')
  })

  it('removeAccentsArray.', () => {
    expect(removeAccentsArray(['Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa.', 'Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor', 'que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais.', 'Seu tamanho é variável'])).to.deep.equal(['Em linguistica, a nocao de texto e ampla e ainda aberta a uma definicao mais precisa.', 'Grosso modo, pode ser entendido como manifestacao linguistica das ideias de um autor', 'que serao interpretadas pelo leitor de acordo com seus conhecimentos linguisticos e culturais.', 'Seu tamanho e variavel'])
  })

})

// describe('removeAccents - try/catch', () => {
//   should.throws(() => {})
//   'This function can handle just strings.\n' +
//                                 'Example: removeAccents("All your string here.")'
// })
