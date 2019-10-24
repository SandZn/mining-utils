const removeAccent = (phrase: string | string[]): string[] | string  => {
  try {
    const replace: string[] = ['a', 'e', 'i', 'o', 'u', 'c', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z']
    const accent: string[] = ['áÁàÀãÃâÂäÄ', 'éÉèÈẽẼêÊëË', 'íÍìÌĩĨîÎ', 'óÓòÒõÕÔ', 'úÚùÙũŨÛ', 'çÇĉĈ', 'ǵǴĝĜ', 'ĥĤḧḦ'
      , 'ĵĴ', 'ḱḰ', 'ĺĹ', 'ḿḾ', 'ńŃǹǸñÑ', 'ṕṔ', 'ŕŔ', 'śŚŝŜ', 'ẗ', 'ǘǗǜǛṽṼ', 'ẃẂẁẀŵŴẅẄ', 'ẍẌ', 'ýÝỳỲŷŶỹỸ', 'źŹẑẐ']

    let reg: RegExp
    let data: string

    if (!Array.isArray(phrase)) {
      data = phrase.toString()
      for (const word of accent) {
        if (data.match(`[${word}]`)) {
          reg = new RegExp(`[${accent[accent.indexOf(word)]}]`, "g")
          data = data.replace(reg, replace[accent.indexOf(word)])
        }
      }
      return data

    } else {
      for (let x = 0; x < phrase.length; x++) {
        for (const word of accent) {
          if (phrase[x].match(`[${word}]`)) {
            reg = new RegExp(`[${accent[accent.indexOf(word)]}]`, "g")
            phrase[x] = phrase[x].replace(reg, replace[accent.indexOf(word)])
          }
        }
      }
      return phrase

    }
  } catch (err) {
    throw err
  }
}

export const accent = removeAccent
