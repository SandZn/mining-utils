import { removeLinks } from './removeLinks'
import { removeBlankSpace, removePunctuation } from './removePunctuation'

// TODO
// Testes para esta funcao \/
const removeRT = (text: string): string => {
  const re = new RegExp(/(RT|via)((?:\\b\\w*@\\w+)+)/, 'g')
  return text.replace(re, '')
}

// TODO
// Testes para esta funcao \/
const removeHashtag = (text: string): string => {
  const re = new RegExp(/(#\\w*.[^\\s]+)/, 'g')
  return text.replace(re, '')
}

// TODO
// Testes para esta funcao \/
const removeTag = (text: string): string => {
  const re = new RegExp(/(@\\w*.[^\\s]+)/, 'g')
  return text.replace(re, '')
}

// TODO
// Testes para esta funcao \/
const removeNumber = (text: string): string => {
  const re = new RegExp(/(\\d)/, 'g')
  return text.replace(re, '')
}

// TODO
// Testes para esta funcao \/
const clearTweets = (text: string): string => {
  let data: string
  data = removeLinks(text)
  data = removeRT(data)
  data = removeHashtag(data)
  data = removeTag(data)
  data = removePunctuation(data)
  data = removeNumber(data)
  data = removeBlankSpace(data)

  return data
}

export {
  removeRT,
  removeHashtag,
  removeTag,
  removeNumber,
  clearTweets
}
