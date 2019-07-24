---
id: react-dom-server
title: ReactDOMServer
layout: docs
category: Reference
permalink: docs/react-dom-server.html
---


`ReactDOMServer` объектын тусламжтай та компонентуудыг статик тэмдэглэгээ рүү рендэр хийх боломжтой. Node сервер дээр ерөнхийдөө ашигладаг:

```js
// ES modules
import ReactDOMServer from 'react-dom/server';
// CommonJS
var ReactDOMServer = require('react-dom/server');
```

## Тойм {#overview}

Доор методуудыг сервер болон хөтчийн орчинд ашиглаж болно:

- [`renderToString()`](#rendertostring)
- [`renderToStaticMarkup()`](#rendertostaticmarkup)

Эдгээр нэмэлт методууд нь пакэжээс (`stream`) хамаардаг ба **зөвхөн сервер дээр байна**. Хөтөч дээр ажиллахгүй.

- [`renderToNodeStream()`](#rendertonodestream)
- [`renderToStaticNodeStream()`](#rendertostaticnodestream)

* * *

## Reference {#reference}

### `renderToString()` {#rendertostring}

```javascript
ReactDOMServer.renderToString(element)
```
React элементийг эхний HTML рүү рендэр хийнэ. React HTML стринг буцаана. Та энэ методыг сервер дээр HTML үүсгэх, хуудсыг хурдан ачаалах эхний хүсэлтийн тэмдэглэгээг илгээх, SEO-ын зорилгоор хайлтын систем таны хуудсыг гүйлгэх зэрэгт ашиглаж болно. 

Серверээс рендэр хийсэн тэмдэглэгээ бүхий node дээр [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate)-ыг дуудах юм бол React үүнийг хадгалан, зөвхөн эвент зохицуулагчийг хамруулна. Ингэснээр та анхны ачаалах үйлдлийг хийх боломжтой болох юм. 

* * *

### `renderToStaticMarkup()` {#rendertostaticmarkup}

```javascript
ReactDOMServer.renderToStaticMarkup(element)
```

 [`renderToString`](#rendertostring)-тай адилхан. Гэхдээ `data-reactroot` гэх мэт React дотооддоо ашигладаг нэмэлт DOM атрибут үүсгэдэггүй. Илүү атрибут байхгүй болохоор хэдэн бит ч гэсэн хэмнэгдэх тул энгийн статик хуудас үүсгэгч ашиглахыг хүсэж байгаа бол энэ танд хэрэг болно. 

Хэрэв та тэмдэглэгээг илүү интерактив болгох зорилгоор үйлчлүүлэгч тал дээр React ашиглахыг хүсвэл энэ аргыг бүү ашиглаарай. Оронд нь сервер дээрээ [`renderToString`] ашиглаад, үйлчлүүлэгч тал дээрээ  [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate)  ашиглаарай.

* * *

### `renderToNodeStream()` {#rendertonodestream}

```javascript
ReactDOMServer.renderToNodeStream(element)
```

React элементийг эхний HTML руу рендэр хийнэ. HTML стринг үүсгэх [Readable stream](https://nodejs.org/api/stream.html#stream_readable_streams) буцаана. Уг HTML үр дүн нь [`ReactDOMServer.renderToString`](#rendertostring)-ын буцаах үр дүнтэй яг адилхан байна. Та энэ аргыг ашиглан сервер дээр HTML үүсгэн, хуудсыг хурдан ачлаалах эхний хүсэлтийн тэмдэглэгээг илгээх, SEO-ын зорилгоор хайлтын систем таны хуудсыг гүйлгэх зэрэгт ашиглаж болно. 


Серверээс рендэр хийсэн тэмдэглэгээ бүхий node дээр [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate)-ыг дуудах юм бол React үүнийг хадгалан, зөвхөн эвент зохицуулагчийг хамруулна. Ингэснээр та анхны ачаалах үйлдлийг хийх боломжтой болох юм. 


> Тэмдэглэл:
>
> Зөвхөн сервер дээр. Уг API нь хөтөч дээр ажиллахгүй. Уг методоос буцсан stream  нь  utf-8-аар шифрлэгдсэн byte stream буцаана. Хэрэв та stream-ыг өөрөөр шифрлэснийг харахыг хүсвэл текстийг хөрвүүлэн шилжүүлэх [iconv-lite](https://www.npmjs.com/package/iconv-lite) төслийг хараарай.
>
> 

* * *

### `renderToStaticNo
deStream()` {#rendertostaticnodestream}

```javascript
ReactDOMServer.renderToStaticNodeStream(element)
```


[`renderToNodeStream`](#rendertonodestream)-тай адилхан. Гэхдээ `data-reactroot` гэх мэт React дотооддоо ашигладаг нэмэлт DOM атрибут үүсгэдэггүй. Илүү атрибут байхгүй болохоор хэдэн бит ч гэсэн хэмнэгдэх тул энгийн статик хуудас үүсгэгч ашиглахыг хүсэж байгаа бол энэ танд хэрэг болно. 
 
Уг stream-ын HTML үр дүн нь [`ReactDOMServer.renderToStaticMarkup`](#rendertostaticmarkup)-ынхтай яг ижил байна.

Хэрэв та тэмдэглэгээг илүү интерактив болгох зорилгоор үйлчлүүлэгч тал дээр React ашиглахыг хүсвэл энэ аргыг бүү ашиглаарай. Оронд нь сервер дээрээ [`renderToNodeStream`](#rendertonodestream) ашиглаад, үйлчлүүлэгч тал дээрээ  [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate)  ашиглаарай.


> Тэмдэглэл:
>
> Зөвхөн сервер дээр. Уг API нь хөтөч дээр ажиллахгүй.
>
> Уг методоос буцсан stream  нь  utf-8-аар шифрлэгдсэн byte stream буцаана. Хэрэв та stream-ыг өөрөөр шифрлэснийг харахыг хүсвэл текстийг хөрвүүлэн шилжүүлэх  [iconv-lite](https://www.npmjs.com/package/iconv-lite) төслийг хараарай.
