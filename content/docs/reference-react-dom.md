---
id: react-dom
title: ReactDOM
layout: docs
category: Reference
permalink: docs/react-dom.html
---

<<<<<<< HEAD
Хэрвээ та React-ыг `<script>` таг ашиглан дуудвал эдгээр ахисан түвшний ReactDOM API -ууд глобал буюу хаанаас ч дуудах боломжтой болдог. Харин ES6 хэлбэрээр npm-ээс ашиглавал import ReactDOM from 'react-dom' гэж бичнэ. ES5 хэлбэрээр npm-ээс ашигласан бол var ReactDOM = require('react-dom') гэж ашиглана.
=======
The `react-dom` package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model if you need to.

```js
import * as ReactDOM from 'react-dom';
```

If you use ES5 with npm, you can write:

```js
var ReactDOM = require('react-dom');
```

The `react-dom` package also provides modules specific to client and server apps:
- [`react-dom/client`](/docs/react-dom-client.html)
- [`react-dom/server`](/docs/react-dom-server.html)
>>>>>>> 63c77695a95902595b6c2cc084a5c3650b15210a


<<<<<<< HEAD
## Тойм {#overview}
 `react-dom` нь DOM -д зориулсан хэрэглүүрүүдээр аппын чухал хэсгүүдийг хийх, мѳн шаардлагатай үед React орчноос гарах боломжийг олгодог. Ихэнх тохиолдолд энэ модулийг ашиглах шаардлага гардаггүй.
=======
The `react-dom` package exports these methods:
- [`createPortal()`](#createportal)
- [`flushSync()`](#flushsync)
>>>>>>> 63c77695a95902595b6c2cc084a5c3650b15210a

These `react-dom` methods are also exported, but are considered legacy:
- [`render()`](#render)
- [`hydrate()`](#hydrate)
- [`findDOMNode()`](#finddomnode)
- [`unmountComponentAtNode()`](#unmountcomponentatnode)

> Note: 
> 
> Both `render` and `hydrate` have been replaced with new [client methods](/docs/react-dom-client.html) in React 18. These methods will warn that your app will behave as if it's running React 17 (learn more [here](https://reactjs.org/link/switch-to-createroot)).

### Хөтөч дэмжих {#browser-support}

<<<<<<< HEAD
React нь бүх хөтөч дээр ажилладаг.  Internet Explorer 9 болон түүнээс дээш хувилбарууд ч үүнд багтана. Гэхдээ IE 9 болон IE 10 гэх мэт хуучин хөтөч дээр ажиллуулахын тулд [polyfill хэрэг болно](/docs/javascript-environment-requirements.html) 

> Тэмдэглэл
>ES5 ажилладаггүй хуучин хөтөч дээр React ажиллахгүй. Гэхдээ [es5-shim болон es5-sham](https://github.com/es-shims/es5-shim) гэх мэт polyfill нь пэйжинд багтсан бол хуучин хөтчүүд дээр апп тань ажиллах боломжтой. Ингэж ажиллуулах эсэх нь таны дур.

* * *
=======
React supports all modern browsers, although [some polyfills are required](/docs/javascript-environment-requirements.html) for older versions.

> Note
>
> We do not support older browsers that don't support ES5 methods or microtasks such as Internet Explorer. You may find that your apps do work in older browsers if polyfills such as [es5-shim and es5-sham](https://github.com/es-shims/es5-shim) are included in the page, but you're on your own if you choose to take this path.
>>>>>>> 63c77695a95902595b6c2cc084a5c3650b15210a

## Reference {#reference}

### `createPortal()` {#createportal}

> Try the new React documentation for [`createPortal`](https://beta.reactjs.org/reference/react-dom/createPortal).
>
> The new docs will soon replace this site, which will be archived. [Provide feedback.](https://github.com/reactjs/reactjs.org/issues/3308)

```javascript
createPortal(child, container)
```
React элементийг DOM руу рендэр хийхдээ, `container` дотор хийж [сонгосон](/docs/more-about-refs.html) элементийг компонентруу буцаана ([тѳлѳвгүй компонент](/docs/components-and-props.html#functional-and-class-components) бол `null` буцаана).

<<<<<<< HEAD
Хэрэв React элемент өмнө нь `container`-т рендэр хийж байсан бол шинэчлэх ба сүүлийн React элементээс хамааран шаардлагатай үед л DOM-ыг өөрчилнө.
=======
Creates a portal. Portals provide a way to [render children into a DOM node that exists outside the hierarchy of the DOM component](/docs/portals.html).

### `flushSync()` {#flushsync}

> Try the new React documentation for [`flushSync`](https://beta.reactjs.org/reference/react-dom/flushSync).
>
> The new docs will soon replace this site, which will be archived. [Provide feedback.](https://github.com/reactjs/reactjs.org/issues/3308)

```javascript
flushSync(callback)
```

Force React to flush any updates inside the provided callback synchronously. This ensures that the DOM is updated immediately.

```javascript
// Force this state update to be synchronous.
flushSync(() => {
  setCount(count + 1);
});
// By this point, DOM is updated.
```

> Note:
> 
> `flushSync` can significantly hurt performance. Use sparingly.
> 
> `flushSync` may force pending Suspense boundaries to show their `fallback` state.
> 
> `flushSync` may also run pending effects and synchronously apply any updates they contain before returning.
> 
> `flushSync` may also flush updates outside the callback when necessary to flush the updates inside the callback. For example, if there are pending updates from a click, React may flush those before flushing the updates inside the callback.

## Legacy Reference {#legacy-reference}
### `render()` {#render}

> Try the new React documentation for [`render`](https://beta.reactjs.org/reference/react-dom/render).
>
> The new docs will soon replace this site, which will be archived. [Provide feedback.](https://github.com/reactjs/reactjs.org/issues/3308)

```javascript
render(element, container[, callback])
```

> Note:
>
> `render` has been replaced with `createRoot` in React 18. See [createRoot](/docs/react-dom-client.html#createroot) for more info.

Render a React element into the DOM in the supplied `container` and return a [reference](/docs/more-about-refs.html) to the component (or returns `null` for [stateless components](/docs/components-and-props.html#function-and-class-components)).
>>>>>>> 63c77695a95902595b6c2cc084a5c3650b15210a

Хэрэв буцаан дуудах сонголт байвал компонент рендэр хийгдэж, шинэчлэгдсэний дараа ажиллах болно. 

> Тэмдэглэл:
>
> `ReactDOM.render()` нь таны ажиллах контэйнер node доторх контентыг удирдана. Дотор нь байгаа DOM элементүүдийг эхэлж дуудах үед солигдоно. Шинэчлэлт хийхдээ үр дүнтэй байх зорилгоор дараа нь дуудахад React-ын DOM өөрчлөлтийн алгоритм ашигладаг. 
>
> `ReactDOM.render()` нь контэйнер node-ыг өөрчилдөггүй (зөвхөн контэйнерийн хүүхдүүдийг нь өөрчилдөг). Одоогийн хүүхдүүдийг нь дарж бичихгүйгээр DOM node-д өөр нэг компонент оруулах боломжтой. 
>
> `ReactDOM.render()`нь одоогоор утгыг эх `ReactComponent` instance руу буцаадаг. Гэхдээ буцаасан утгыг ашиглавал удамшсан болох ба React-ын ирээдүйд гарах хувилбарууд зарим тохиолдолд компонентуудыг синхрон бусаар рендэр хийж магадгүй тул үүнээс зайлсхийх нь зүйтэй. Хэрэв та `ReactComponent` instance руу утга илгээхийг хүсвэл эх элементэд нь [callback ref](/docs/more-about-refs.html#the-ref-callback-attribute) хийсэн нь хавьгүй дээр. 

<<<<<<< HEAD
> Серверийн рендэр хийсэн контэйнерыг `ReactDOM.render()` hydrate хийхийг хүмүүс их шүүмжилсэн тул React 17 дээрээс байхаа болино. Оронд нь [`hydrate()`](#hydrate) ашиглаарай.
=======
> Note:
>
> `render()` controls the contents of the container node you pass in. Any existing DOM elements inside are replaced when first called. Later calls use React’s DOM diffing algorithm for efficient updates.
>
> `render()` does not modify the container node (only modifies the children of the container). It may be possible to insert a component to an existing DOM node without overwriting the existing children.
>
> `render()` currently returns a reference to the root `ReactComponent` instance. However, using this return value is legacy
> and should be avoided because future versions of React may render components asynchronously in some cases. If you need a reference to the root `ReactComponent` instance, the preferred solution is to attach a
> [callback ref](/docs/refs-and-the-dom.html#callback-refs) to the root element.
>
> Using `render()` to hydrate a server-rendered container is deprecated. Use [`hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) instead.
>>>>>>> 63c77695a95902595b6c2cc084a5c3650b15210a

* * *

### `hydrate()` {#hydrate}

> Try the new React documentation for [`hydrate`](https://beta.reactjs.org/reference/react-dom/hydrate).
>
> The new docs will soon replace this site, which will be archived. [Provide feedback.](https://github.com/reactjs/reactjs.org/issues/3308)

```javascript
hydrate(element, container[, callback])
```

<<<<<<< HEAD
[`render()`](#render)-тэй адилхан. Гэхдээ HTML контент нь [`ReactDOMServer`](/docs/react-dom-server.html) ашиглан рендэр хийсэн контэйнерийг hydrate хийхэд ашигладаг. React нь эвент танигчийг одоо байгаа тэмдэглэгээнд хавсаргах гэж оролдоно. 
=======
> Note:
>
> `hydrate` has been replaced with `hydrateRoot` in React 18. See [hydrateRoot](/docs/react-dom-client.html#hydrateroot) for more info.

Same as [`render()`](#render), but is used to hydrate a container whose HTML contents were rendered by [`ReactDOMServer`](/docs/react-dom-server.html). React will attempt to attach event listeners to the existing markup.
>>>>>>> 63c77695a95902595b6c2cc084a5c3650b15210a

Рендэр хийсэн контент нь сервер болон үйлчлүүлэгчид адилхан байна гэж React тооцоолдог. Текст байх юм бол ялгаатай байгааг нь таниад, тохирохгүй зүйл байвал алдаа гэж таниад засах гэж оролдоно. Хөгжүүлэлтийн горимд React нь hydration процессын үед тохирохгүй зүйлс байвал анхааруулга өгдөг. Зөрүү байгаа тохиолдолд атрибутын ялгааг нь засна гэсэн баталгаа байхгүй. Ажиллагаанд энэ нь их чухал. Яагаад гэвэл ихэнх аппуудад зөрүү гарах нь ховор бөгөөд бүх тэмдэглэгээг баталгаажуулж нягтлах нь их ажиллагаа шаарддаг. 

Хэрэв дан элементийн атрибут эсвэл текстэн контент нь сервер, үйлчлүүлэгч хоёрт яалт ч үгүй өөр байх юм бол та элемент дээр `suppressHydrationWarning={true}` гэж нэмэн анхааруулгыг нь алга болгож болно. Энэ нь зөвхөн нэг түвшинд ажиллах ба зайлшгүй, яаралтай үед ашиглах зориулалттай. Хэтрүүлж ашиглаж болохгүй. Текст биш л бол React засах гэж оролдохгүй. Шинээр update хийх хүртэл зөрчилдөөнтэй хэвээр байна.

Хэрэв та зориуд ямар нэг зүйлийг сервер болон үйлчлүүлэгчид өөрөөр рендэр хийхийг хүсвэл та хоёр-дамжлагат (two-pass) рендэр хийх боломжтой. Үйлчлүүлэгчид ямар нэг зүйлийг өөрөөр рендэр хийдэг компонентууд нь `this.state.isClient` гэх мэт төлөвийн хувьсагчийг таньдаг ба та `componentDidMount()` дотор `true` гэж тохируулж өгнө. Ингэснээр эхний рендэр хийх үед сервертэй адилхан зүйлийг рендэр хийн, үл тохирохоос сэргийлнэ. Гэхдээ hydration-ы дараа синхрон хэлбэрээр нэмэлт рендэр хийгдэнэ. Хоёр удаа рендэр хийж байгаа учраас компонентууд чинь удаа болно гэдгийг анхаарна уу. Ашиглахдаа анхааралтай байна уу. 

Холболт удаан үед хэрэглэгчид ямар байхыг бодолцоорой. Эхний HMTL рендэр хийснээс хэзээ хойно нь JavaScript код ачаалах болно. Тиймээс зөвхөн хэрэглэгчид зориулсан хэсэгт ямар нэг өөр зүйл рендэр хийе гэвэл шилжилт нь гацаж болзошгүй. Гэхдээ ажиллуулж чадвал сервер дээр аппликейшны  "shell"-ыг рендэр хийхэд тустай байж магадгүй ба хэрэглэгчийн хэсэг дээр нэмэлт widget-үүдийн зарим нэг нь л харагдах болно. Тэмдэглэгээ зөрөх асуудал гаргахгүйгээр үүнийг хэрхэн хийх тухай өмнөх догол мөр дээрх тайлбарыг харна уу. 


* * *

### `unmountComponentAtNode()` {#unmountcomponentatnode}

> Try the new React documentation for [`unmountComponentAtNode`](https://beta.reactjs.org/reference/react-dom/unmountComponentAtNode).
>
> The new docs will soon replace this site, which will be archived. [Provide feedback.](https://github.com/reactjs/reactjs.org/issues/3308)

```javascript
unmountComponentAtNode(container)
```
DOM-оос илгээсэн React-ын компонентыг устгах, эвент боловсруулагч, төлөвийг нь цэвэрлэх. Хэрэв контэйнерт ямар ч компонент илгээгдээгүй бол энэ функцийг дуудахад юу ч өөрчлөгдөхгүй. Компонент илгээгдээгүй үед `true` гэсэн утга руу буцаж, unmount хийх ямар ч компонент байхгүй бол `false` болно. 

<<<<<<< HEAD
=======
> Note:
>
> `unmountComponentAtNode` has been replaced with `root.unmount()` in React 18. See [createRoot](/docs/react-dom-client.html#createroot) for more info.

Remove a mounted React component from the DOM and clean up its event handlers and state. If no component was mounted in the container, calling this function does nothing. Returns `true` if a component was unmounted and `false` if there was no component to unmount.
>>>>>>> 63c77695a95902595b6c2cc084a5c3650b15210a

* * *

### `findDOMNode()` {#finddomnode}

<<<<<<< HEAD
> Тэмдэглэл:
=======
> Try the new React documentation for [`findDOMNode`](https://beta.reactjs.org/reference/react-dom/findDOMNode).
>
> The new docs will soon replace this site, which will be archived. [Provide feedback.](https://github.com/reactjs/reactjs.org/issues/3308)

> Note:
>>>>>>> 63c77695a95902595b6c2cc084a5c3650b15210a
>
> `findDOMNode` нь үндсэн DOM node-д хандахад тусалдаг ба яаралтай үед ашиглагддаг. Компонентын шинжийг алдагдуулдаг учир ихэнх тохиолдолд үүнийг ашиглахгүй байхыг зөвлөдөг.[`StrictMode`-д үүнийг ашиглахгүй байхыг зөвлөсөн](/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage)

```javascript
findDOMNode(component)
```

Хэрэв уг компонент DOM руу илгээгдсэн бол холбогдох натив хөтчийн DOM элемент рүү буцдаг. Формд оруулсан утга, DOM хэмжээсийг ажиллуулах гэх мэт DOM-оос утгыг нь уншихад энэ арга хэрэг болдог. **Ихэнх тохиолдолд та DOM node-д ref-ээ оруулж
 `findDOMNode`-ыг огт ашиглахгүй байвал зохино.**

Аливаа компонент рендэр хийхэд `null` эсвэл `false`, `findDOMNode` нь `null` гэж гарах үед. Компонент стрингээр рендэр хийх, `findDOMNode` нь уг утгыг агуулсан текстэн DOM node руу буцах үед. React 16 дээр бол компонент олон хүүтэй жижиг хэсэг буцаах нь бий. Энэ тохиолдолд `findDOMNode` нь хамгийн эхний хоосон биш хүүхдэд нь зохих DOM node-ыг буцаана. 

> Тэмдэглэл:
>
> `findDOMNode` нь зөвхөн илгээсэн компонент дээр ажиллана (DOM-д байрлуулсан компонентууд гэсэн үг). Хэрэв та хараахан илгээгдээгүй (хараахан үүсгээгүй компонент дээр `render()` хийхээр `findDOMNode()` дуудах гэх мэт) компонент дээр дуудах гэж оролдвол алдаа гарна. 
>
> `findDOMNode`-ыг функцийн компонент дээр ашиглаж болохгүй.

* * *
<<<<<<< HEAD

### `createPortal()` {#createportal}

```javascript
ReactDOM.createPortal(child, container)
```
Портал үүсгэнэ. Портал нь [DOM компонентын шатлалын гадна байх хүүхдүүдийг DOM node руу рендэр хийхэд
](/docs/portals.html) тусална.
=======
>>>>>>> 63c77695a95902595b6c2cc084a5c3650b15210a
