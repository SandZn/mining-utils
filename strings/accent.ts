export const removeAccent = (phrase?: string, words?: string[]): string[] | string  => {
  if (phrase){
    const replace: string[] = ['a', 'e', 'i', 'o', 'u', 'c', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z']
    const accent: string[] = ['áÁàÀãÃâÂäÄ', 'éÉèÈẽẼêÊëË', 'íÍìÌĩĨîÎ', 'óÓòÒõÕÔ', 'úÚùÙũŨÛ', 'çÇĉĈ', 'ǵǴĝĜ', 'ĥĤḧḦ'
                              , 'ĵĴ', 'ḱḰ', 'ĺĹ', 'ḿḾ', 'ńŃǹǸñÑ', 'ṕṔ', 'ŕŔ', 'śŚŝŜ', 'ẗ', 'ǘǗǜǛṽṼ', 'ẃẂẁẀŵŴẅẄ', 'ẍẌ', 'ýÝỳỲŷŶỹỸ', 'źŹẑẐ']
    let newString: string

    for (const word of accent) {
      if (phrase.match(`[${word}]`)) {
        accent.indexOf(word)
        newString = phrase.replace(`[${word}]`, replace[accent.indexOf(word)])
        console.log(newString)
        console.log(replace[accent.indexOf(word)])
      } else{
        // console.log(word)
      }
    }
    // const newStr: string = phrase.replace(replace, "")
    return 'a'
  }else{

    return 'a'
  }
}
