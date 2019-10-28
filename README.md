# Data Mining
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FOracy%2Fmining-utils.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FOracy%2Fmining-utils?ref=badge_shield)

[![version](https://badge.fury.io/js/mining-utils.svg)](https://badge.fury.io/js/mining-utils) [![NPM downloads](https://img.shields.io/npm/dw/mining-utils)](https://img.shields.io/npm/dw/mining-utils)  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Oracy/mining-utils/blob/master/LICENSE) [![Build Status](https://travis-ci.org/Oracy/mining-utils.svg?branch=master)](https://travis-ci.org/Oracy/mining-utils) [![HitCount](http://hits.dwyl.io/oracy/mining-utils.svg)](http://hits.dwyl.io/oracy/mining-utils)
---
# mining-utils

Functions to help in js data mining.

## Introduction

To install this module, just need to: `npm install mining-utils`

You can use as node or Typescript follow instructions below:
- Node Js
```javascript
const mining = require('mining-utils')

mining.removeAccents('')
```
- Typescript
```javascript
import * as mining from mining-utils
// or
import { removeAccents } from mining-utils
```

## Implemented Functions

```javascript
removeAccents('Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável.')
// output: 'Em linguistica, a nocao de texto e ampla e ainda aberta a uma definicao mais precisa. Grosso modo, pode ser entendido como manifestacao linguistica das ideias de um autor, que serao interpretadas pelo leitor de acordo com seus conhecimentos linguisticos e culturais. Seu tamanho e variavel.
removeAccentsArray(['Em linguística, a noção de texto é ampla', 'definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística'])
// output: ['Em linguistica, a nocao de texto e ampla', 'definicao mais precisa. Grosso modo, pode ser entendido como manifestacao linguistica']
removePunctuation('Hey there!!! How are you???')
// output: Hey there Hou are you
removePunctuationArray(['Hey there!!', 'How are you??', 'go, now'])
// output: ['Hey there', 'How are you', 'go now']
removeBlankSpace('Hey        ,       how are              you           ?')
// output: 'Hey , how are you ?'
removeBlankSpaceArray(['Hey        ,       how are              you           ?', 'I            am      good!!'])
// output: ['Hey , how are you ?', 'I am good!!']
removeLinks('This is an example to remove links from a single phrase, https://web.whatsapp.com/ and text after the link.')
// output: 'This is an example to remove links from a single phrase,  and text after the link.'
removeLinks('This is an example to remove links from a single phrase, mms://link.com/ and text after the link.', 'mms')
// you can pass on second parameter another links pattern for example: 'mms', 'm3u'
// output: 'This is an example to remove links from a single phrase,  and text after the link.'
removeLinksArray(['This is an example to remove links from a single phrase, https://web.whatsapp.com/ and text after the link.', 'This is an example to remove links from a single phrase, https://www.instagram.com/ and text after the link.', 'This is an example to remove links from a single phrase, https://www.google.com/ and text after the link.'])
// output: ['This is an example to remove links from a single phrase,  and text after the link.', 'This is an example to remove links from a single phrase,  and text after the link.', 'This is an example to remove links from a single phrase,  and text after the link.']
```

---

## License

Mining-utils is freely distributable under the terms of the [MIT license](https://github.com/Oracy/mining-utils/blob/master/LICENSE)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FOracy%2Fmining-utils.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FOracy%2Fmining-utils?ref=badge_large)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/lu002047">
        <img src="https://avatars1.githubusercontent.com/u/12716914?v=4" width="100px;" alt="lu002047"/>
        <br />
        <sub>
          <b>lu002047</b>
        </sub>
      </a>
      <br />
      <a href="#maintenance-lu002047" title="Maintenance">🚧</a>
      <a href="https://github.com/Oracy/mining-utils/commits?author=lu002047" title="Code">💻</a>
      <a href="#review-lu002047" title="Reviewed Pull Requests">👀</a>
    </td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->