const removeLinks = (text: string, pattern?: string): string => {
  try {
    const re = !pattern ? new RegExp("https?://\*.[^\\s]+", "g") : new RegExp(`${pattern}://\*.[^\\s]+`, 'g')

    return text.replace(re, '')
  } catch (err) {
    console.log('This function can handle just strings.\n' +
                'Example: removeLinks("All your string here")', err)
  }
}

const removeLinksArray = (textArray: string[], pattern?: string): string[] => {
  try {
    const re = !pattern ? new RegExp("https?://\*.[^\\s]+", "g") : new RegExp(`${pattern}://\*.[^\\s]+`, 'g')
    const newArray: string[] = []
    for (const key in textArray) {
      newArray.push(textArray[key].replace(re, ''))
    }
    return newArray

  } catch (err) {
    console.log('This function can handle just string arrays.\n' +
      'Example: removeAcentsArray(["First", "Second", "Third"])', err);
  }
}

export {
  removeLinks,
  removeLinksArray,
}
