import { stringsManipulation } from './strings/index'

stringsManipulation.removeAccent('Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Suco de cevadiss deixa as pessoas mais interessantis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Per aumento de cachacis, eu reclamis. ')

// Mussum Ipsum, cacilds vidis litro abertis.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Suco de cevadiss deixa as pessoas mais interessantis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Per aumento de cachacis, eu reclamis.

  // ['áÁàÀãÃâÂäÄ', 'éÉèÈẽẼêÊëË', 'íÍìÌĩĨîÎ', 'óÓòÒõÕÔ', 'úÚùÙũŨÛ', 'çÇĉĈ', 'ǵǴĝĜ', 'ĥĤḧḦ'
  // , 'ĵĴ', 'ḱḰ', 'ĺĹ', 'ḿḾ', 'ńŃǹǸñÑ', 'ṕṔ', 'ŕŔ', 'śŚŝŜ', 'ẗ', 'ǘǗǜǛṽṼ', 'ẃẂẁẀŵŴẅẄ', 'ẍẌ', 'ýÝỳỲŷŶỹỸ', 'źŹẑẐ']