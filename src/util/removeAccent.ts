const accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖŐòóôõöőÈÉÊËèéêëðÇĈçĉÐǵĝĜǴĥḧḦĤÌÍÎÏìíîïĵĴḱḰĺĹḿḾńǹŃǸÙÚÛÜŰùúûüűÑñṕṔŕŔśŝŜŚŠšẗǘǜṽṼẃẁŵẅẄẂẀŴẍẌýỳŷỹÿýỸÝỲŶŸžźẑẐŹŽ';
const noAccents = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCCccDggGGhhHHIIIIiiiijJkKlLmMnnNNUUUUUuuuuuNnpPrRssSSSstuuvVwwwwWWWWxXyyyyyyYYYYYzzzZZZ';

const removeAccents = (text: string): string => {
  const map = {};
  accents.split('').forEach((el, idx) => map[el] = noAccents[idx]);

  return text.replace(/[^A-Za-z0-9]/g, (ch) => map[ch] || ch);
}

const removeAccentsArray = (textArray: string[]): string[] => {
  const map = {};
  accents.split('').forEach((el, idx) => map[el] = noAccents[idx])

  for (const key in textArray) {
    textArray[key].replace(/[^A-Za-z0-9]/g, (ch) => map[ch] || ch)
  }

  return ;
}

export {
  removeAccents,
  removeAccentsArray,
}
