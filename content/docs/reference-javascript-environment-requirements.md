---
id: javascript-environment-requirements
title: JavaScript орчны шаардлага
layout: docs
category: Reference
permalink: docs/javascript-environment-requirements.html
---

React 18 supports all modern browsers (Edge, Firefox, Chrome, Safari, etc).

<<<<<<< HEAD
```js
import 'core-js/es/map';
import 'core-js/es/set';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

React нь мөн `requestAnimationFrame`-аас хамааралтай (тест хийх орчинд ч ялгаагүй)
Та `requestAnimationFrame`-т дэмждэг болгон [raf](https://www.npmjs.com/package/raf) пакэжийг ашиглаарай:

```js
import 'raf/polyfill';
```
=======
If you support older browsers and devices such as Internet Explorer which do not provide modern browser features natively or have non-compliant implementations, consider including a global polyfill in your bundled application.

Here is a list of the modern features React 18 uses:
- [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

The correct polyfill for these features depend on your environment. For many users, you can configure your [Browserlist](https://github.com/browserslist/browserslist) settings. For others, you may need to import polyfills like [`core-js`](https://github.com/zloirock/core-js) directly.
>>>>>>> 37cf98d075de3133b5ae69fe80fbecb6a742530a
