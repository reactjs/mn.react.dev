---
id: javascript-environment-requirements
title: JavaScript орчны шаардлага
layout: docs
category: Reference
permalink: docs/javascript-environment-requirements.html
---

<<<<<<< HEAD
React 16 нь олон төрлийн [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) болон 
[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)-ээс хамааралтай. Хэрэв та хуучин хөтөч ашигладаг, нативаар ажиллуулдаггүй (IE < 11 г.м) эсвэл ажиллагаанд үл тохирох(IE 11 г.м) төхөөрөмж ашигладаг бол [core-js](https://github.com/zloirock/core-js) эсвэл [babel-polyfill](https://babeljs.io/docs/usage/polyfill/) гэх мэт глобал polyfill-ыг багц аппликейшндаа ашиглаад үзээрэй. 

Гол js-ыг хуучин хөтөч дээр ажилладаг болгох React 16-т зориулсан polyfill орчин нэг иймэрхүү харагдана:
=======
React 16 depends on the collection types [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) and [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set). If you support older browsers and devices which may not yet provide these natively (e.g. IE < 11) or which have non-compliant implementations (e.g. IE 11), consider including a global polyfill in your bundled application, such as [core-js](https://github.com/zloirock/core-js).
>>>>>>> 5e437a10ed4e89cd5eaf990ce4f43e0857592b53


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
