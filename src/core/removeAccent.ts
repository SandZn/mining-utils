const accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖŐòóôõöőÈÉÊËèéêëðÇĈçĉÐǵĝĜǴĥḧḦĤÌÍÎÏìíîïĵĴḱḰĺĹḿḾńǹŃǸÙÚÛÜŰùúûüűÑñṕṔŕŔśŝŜŚŠšẗǘǜṽṼẃẁŵẅẄẂẀŴẍẌýỳŷỹÿýỸÝỲŶŸžźẑẐŹŽ';
const noAccents = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCCccDggGGhhHHIIIIiiiijJkKlLmMnnNNUUUUUuuuuuNnpPrRssSSSstuuvVwwwwWWWWxXyyyyyyYYYYYzzzZZZ';

const removeAccents = (text: string): string => {
  try {
    const map = {};
    accents.split('').forEach((el, idx) => map[el] = noAccents[idx]);

    return text.replace(/[^A-Za-z0-9]/g, (ch) => map[ch] || ch);
  } catch (err) {
    console.log('This function can handle just strings.\n' +
                'Example: removeAccents("All your string here.")', err)
  }
}

const removeAccentsArray = (textArray: string[]): string[] => {
  try {
    const map = {};
    const newArray: string[] = []

    accents.split('').forEach((el, idx) => map[el] = noAccents[idx])

    for (const key in textArray) {
      newArray.push(textArray[key].replace(/[^A-Za-z0-9]/g, (ch) => map[ch] || ch))
    }

    return newArray;
  } catch (err) {
    console.log('This function can handle just string arrays.\n' +
                'Example: removeAcentsArray(["First", "Second", "Third"])', err);
  }
}

export {
  removeAccents,
  removeAccentsArray,
}
