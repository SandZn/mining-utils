const replace = ['a', 'e', 'i', 'o', 'u', 'c', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z']
const accent = ['áÁàÀãÃâÂäÄ', 'éÉèÈẽẼêÊëË', 'íÍìÌĩĨîÎ', 'óÓòÒõÕÔ', 'úÚùÙũŨÛ', 'çÇĉĈ', 'ǵǴĝĜ', 'ĥĤḧḦ', 'ĵĴ', 'ḱḰ', 'ĺĹ', 'ḿḾ', 'ńŃǹǸñÑ', 'ṕṔ', 'ŕŔ', 'śŚŝŜ', 'ẗ', 'ǘǗǜǛṽṼ', 'ẃẂẁẀŵŴẅẄ', 'ẍẌ', 'ýÝỳỲŷŶỹỸ', 'źŹẑẐ']

const phrase = 'Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Suco de cevadiss deixa as pessoas mais interessantis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Per aumento de cachacis, eu reclamis. '

// console.log(accent[1])
console.log(phrase.match(/[accent[1]]/g))