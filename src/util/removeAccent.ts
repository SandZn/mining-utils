const accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖŐòóôõöőÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜŰùúûüűÑñŠšŸÿýŽž';
const noAccents = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUUuuuuuNnSsYyyZz';

const removeAccents = (text: string): string => {
  const map = {};
  accents.split('').forEach((el, idx) => map[el] = noAccents[idx]);

  return text.replace(/[^A-Za-z0-9]/g, (ch) => map[ch] || ch);
}

const removeAccentsArray = (textArray: string[]): string[] => {
  return [];
}

export {
  removeAccents,
  removeAccentsArray,
}
