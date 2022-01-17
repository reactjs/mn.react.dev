---
id: react-dom
title: ReactDOM
layout: docs
category: Reference
permalink: docs/react-dom.html
---

Хэрвээ та React-ыг `<script>` таг ашиглан дуудвал эдгээр ахисан түвшний ReactDOM API -ууд глобал буюу хаанаас ч дуудах боломжтой болдог. Харин ES6 хэлбэрээр npm-ээс ашиглавал import ReactDOM from 'react-dom' гэж бичнэ. ES5 хэлбэрээр npm-ээс ашигласан бол var ReactDOM = require('react-dom') гэж ашиглана.


## Тойм {#overview}
 `react-dom` нь DOM -д зориулсан хэрэглүүрүүдээр аппын чухал хэсгүүдийг хийх, мѳн шаардлагатай үед React орчноос гарах боломжийг олгодог. Ихэнх тохиолдолд энэ модулийг ашиглах шаардлага гардаггүй.

- [`render()`](#render)
- [`hydrate()`](#hydrate)
- [`unmountComponentAtNode()`](#unmountcomponentatnode)
- [`findDOMNode()`](#finddomnode)
- [`createPortal()`](#createportal)

### Хөтөч дэмжих {#browser-support}

React нь бүх хөтөч дээр ажилладаг.  Internet Explorer 9 болон түүнээс дээш хувилбарууд ч үүнд багтана. Гэхдээ IE 9 болон IE 10 гэх мэт хуучин хөтөч дээр ажиллуулахын тулд [polyfill хэрэг болно](/docs/javascript-environment-requirements.html) 

> Тэмдэглэл
>ES5 ажилладаггүй хуучин хөтөч дээр React ажиллахгүй. Гэхдээ [es5-shim болон es5-sham](https://github.com/es-shims/es5-shim) гэх мэт polyfill нь пэйжинд багтсан бол хуучин хөтчүүд дээр апп тань ажиллах боломжтой. Ингэж ажиллуулах эсэх нь таны дур.

* * *

## Reference {#reference}

### `render()` {#render}

```javascript
ReactDOM.render(element, container[, callback])
```
React элементийг DOM руу рендэр хийхдээ, `container` дотор хийж [сонгосон](/docs/more-about-refs.html) элементийг компонентруу буцаана ([тѳлѳвгүй компонент](/docs/components-and-props.html#functional-and-class-components) бол `null` буцаана).

Хэрэв React элемент өмнө нь `container`-т рендэр хийж байсан бол шинэчлэх ба сүүлийн React элементээс хамааран шаардлагатай үед л DOM-ыг өөрчилнө.

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
> `ReactDOM.render()` controls the contents of the container node you pass in. Any existing DOM elements inside are replaced when first called. Later calls use React’s DOM diffing algorithm for efficient updates.
>
> `ReactDOM.render()` does not modify the container node (only modifies the children of the container). It may be possible to insert a component to an existing DOM node without overwriting the existing children.
>
> `ReactDOM.render()` currently returns a reference to the root `ReactComponent` instance. However, using this return value is legacy
> and should be avoided because future versions of React may render components asynchronously in some cases. If you need a reference to the root `ReactComponent` instance, the preferred solution is to attach a
> [callback ref](/docs/refs-and-the-dom.html#callback-refs) to the root element.
>
> Using `ReactDOM.render()` to hydrate a server-rendered container is deprecated and will be removed in React 17. Use [`hydrate()`](#hydrate) instead.
>>>>>>> b9c33a05520ddc728f15c4eb19a343213309f59f

* * *

### `hydrate()` {#hydrate}

```javascript
ReactDOM.hydrate(element, container[, callback])
```

[`render()`](#render)-тэй адилхан. Гэхдээ HTML контент нь [`ReactDOMServer`](/docs/react-dom-server.html) ашиглан рендэр хийсэн контэйнерийг hydrate хийхэд ашигладаг. React нь эвент танигчийг одоо байгаа тэмдэглэгээнд хавсаргах гэж оролдоно. 

Рендэр хийсэн контент нь сервер болон үйлчлүүлэгчид адилхан байна гэж React тооцоолдог. Текст байх юм бол ялгаатай байгааг нь таниад, тохирохгүй зүйл байвал алдаа гэж таниад засах гэж оролдоно. Хөгжүүлэлтийн горимд React нь hydration процессын үед тохирохгүй зүйлс байвал анхааруулга өгдөг. Зөрүү байгаа тохиолдолд атрибутын ялгааг нь засна гэсэн баталгаа байхгүй. Ажиллагаанд энэ нь их чухал. Яагаад гэвэл ихэнх аппуудад зөрүү гарах нь ховор бөгөөд бүх тэмдэглэгээг баталгаажуулж нягтлах нь их ажиллагаа шаарддаг. 

Хэрэв дан элементийн атрибут эсвэл текстэн контент нь сервер, үйлчлүүлэгч хоёрт яалт ч үгүй өөр байх юм бол та элемент дээр `suppressHydrationWarning={true}` гэж нэмэн анхааруулгыг нь алга болгож болно. Энэ нь зөвхөн нэг түвшинд ажиллах ба зайлшгүй, яаралтай үед ашиглах зориулалттай. Хэтрүүлж ашиглаж болохгүй. Текст биш л бол React засах гэж оролдохгүй. Шинээр update хийх хүртэл зөрчилдөөнтэй хэвээр байна.

Хэрэв та зориуд ямар нэг зүйлийг сервер болон үйлчлүүлэгчид өөрөөр рендэр хийхийг хүсвэл та хоёр-дамжлагат (two-pass) рендэр хийх боломжтой. Үйлчлүүлэгчид ямар нэг зүйлийг өөрөөр рендэр хийдэг компонентууд нь `this.state.isClient` гэх мэт төлөвийн хувьсагчийг таньдаг ба та `componentDidMount()` дотор `true` гэж тохируулж өгнө. Ингэснээр эхний рендэр хийх үед сервертэй адилхан зүйлийг рендэр хийн, үл тохирохоос сэргийлнэ. Гэхдээ hydration-ы дараа синхрон хэлбэрээр нэмэлт рендэр хийгдэнэ. Хоёр удаа рендэр хийж байгаа учраас компонентууд чинь удаа болно гэдгийг анхаарна уу. Ашиглахдаа анхааралтай байна уу. 

Холболт удаан үед хэрэглэгчид ямар байхыг бодолцоорой. Эхний HMTL рендэр хийснээс хэзээ хойно нь JavaScript код ачаалах болно. Тиймээс зөвхөн хэрэглэгчид зориулсан хэсэгт ямар нэг өөр зүйл рендэр хийе гэвэл шилжилт нь гацаж болзошгүй. Гэхдээ ажиллуулж чадвал сервер дээр аппликейшны  "shell"-ыг рендэр хийхэд тустай байж магадгүй ба хэрэглэгчийн хэсэг дээр нэмэлт widget-үүдийн зарим нэг нь л харагдах болно. Тэмдэглэгээ зөрөх асуудал гаргахгүйгээр үүнийг хэрхэн хийх тухай өмнөх догол мөр дээрх тайлбарыг харна уу. 


* * *

### `unmountComponentAtNode()` {#unmountcomponentatnode}

```javascript
ReactDOM.unmountComponentAtNode(container)
```
DOM-оос илгээсэн React-ын компонентыг устгах, эвент боловсруулагч, төлөвийг нь цэвэрлэх. Хэрэв контэйнерт ямар ч компонент илгээгдээгүй бол энэ функцийг дуудахад юу ч өөрчлөгдөхгүй. Компонент илгээгдээгүй үед `true` гэсэн утга руу буцаж, unmount хийх ямар ч компонент байхгүй бол `false` болно. 


* * *

### `findDOMNode()` {#finddomnode}

> Тэмдэглэл:
>
> `findDOMNode` нь үндсэн DOM node-д хандахад тусалдаг ба яаралтай үед ашиглагддаг. Компонентын шинжийг алдагдуулдаг учир ихэнх тохиолдолд үүнийг ашиглахгүй байхыг зөвлөдөг.[`StrictMode`-д үүнийг ашиглахгүй байхыг зөвлөсөн](/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage)

```javascript
ReactDOM.findDOMNode(component)
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

### `createPortal()` {#createportal}

```javascript
ReactDOM.createPortal(child, container)
```
Портал үүсгэнэ. Портал нь [DOM компонентын шатлалын гадна байх хүүхдүүдийг DOM node руу рендэр хийхэд
](/docs/portals.html) тусална.
