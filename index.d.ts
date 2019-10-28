declare const removeRT: (text: string) => string;
declare const removeHashtag: (text: string) => string;
declare const removeTag: (text: string) => string;
declare const removeNumber: (text: string) => string;
declare const clearTweets: (text: string) => string;
export { removeRT, removeHashtag, removeTag, removeNumber, clearTweets };
declare const removeAccents: (text: string) => string;
declare const removeAccentsArray: (textArray: string[]) => string[];
export { removeAccents, removeAccentsArray, };
declare const removeLinks: (text: string, pattern?: string) => string;
declare const removeLinksArray: (textArray: string[], pattern?: string) => string[];
export { removeLinks, removeLinksArray };
declare const removePunctuation: (text: string) => string;
declare const removeBlankSpace: (text: string) => string;
declare const removePunctuationArray: (textArray: string[]) => string[];
declare const removeBlankSpaceArray: (textArray: string[]) => string[];
export { removePunctuation, removeBlankSpace, removePunctuationArray, removeBlankSpaceArray };
