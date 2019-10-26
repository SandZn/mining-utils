const punctuations = '^a-zA-Z\\d\\sÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖŐòóôõöőÈÉÊËèéêëðÇĈçĉÐǵĝĜǴĥḧḦĤÌÍÎÏìíîïĵĴḱḰĺĹḿḾńǹŃǸÙÚÛÜŰùúûüűÑñṕṔŕŔśŝŜŚŠšẗǘǜṽṼẃẁŵẅẄẂẀŴẍẌýỳŷỹÿýỸÝỲŶŸžźẑẐŹŽ'

const removePunctuation = (text: string): string => {
  const re = new RegExp(`[${punctuations}]`, 'g')
  text = text.replace(re, '')
  return text.replace(/\s\s+/g, ' ')
}

const removeBlankSpace = (text: string): string => {
  return text.replace(/\s\s+/g, ' ')
}

const removePunctuationArray = (textArray: string[]): string[] => {
  const re = new RegExp(`[${punctuations}]`, 'g')
  const newArray: string[] = []

  for (const key in textArray) {
    newArray.push(textArray[key].replace(re, '').replace(/\s\s+/g, ' '))
  }

  return newArray
}

const removeBlankSpaceArray = (textArray: string[]): string[] => {
  const newArray: string[] = []

  for (const key in textArray) {
    newArray.push(textArray[key].replace(/\s\s+/g, ' '))
  }

  return newArray
}

export {
  removePunctuation,
  removeBlankSpace,
  removePunctuationArray,
  removeBlankSpaceArray
}
