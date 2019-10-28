import { removeLinks } from './removeLinks'
import { removeBlankSpace, removePunctuation } from './removePunctuation'

const removeRT = (text: string): string => {
  const re = new RegExp(/(RT|via).*?:/, 'g')
  return text.replace(re, '')
}

const removeHashtag = (text: string): string => {
  const re = new RegExp(/(#\w*.[^\W])/, 'g')
  return text.replace(re, '')
}

const removeTag = (text: string): string => {
  const re = new RegExp(/(@\w*.[\s])/, 'g')
  return text.replace(re, '')
}

const removeNumber = (text: string): string => {
  const re = new RegExp(/(\d)/, 'g')
  return text.replace(re, '')
}

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
  clearTweets,
}
