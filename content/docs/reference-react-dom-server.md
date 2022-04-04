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

- [`renderToPipeableStream()`](#rendertopipeablestream)
- [`renderToReadableStream()`](#rendertoreadablestream)
- [`renderToNodeStream()`](#rendertonodestream) (Deprecated)
- [`renderToStaticNodeStream()`](#rendertostaticnodestream)

* * *

## Reference {#reference}

### `renderToString()` {#rendertostring}

```javascript
ReactDOMServer.renderToString(element)
```
React элементийг эхний HTML рүү рендэр хийнэ. React HTML стринг буцаана. Та энэ методыг сервер дээр HTML үүсгэх, хуудсыг хурдан ачаалах эхний хүсэлтийн тэмдэглэгээг илгээх, SEO-ын зорилгоор хайлтын систем таны хуудсыг гүйлгэх зэрэгт ашиглаж болно. 

<<<<<<< HEAD
Серверээс рендэр хийсэн тэмдэглэгээ бүхий node дээр [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate)-ыг дуудах юм бол React үүнийг хадгалан, зөвхөн эвент зохицуулагчийг хамруулна. Ингэснээр та анхны ачаалах үйлдлийг хийх боломжтой болох юм. 
=======
Render a React element to its initial HTML. React will return an HTML string. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.

If you call [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.
>>>>>>> 707f22d25f5b343a2e5e063877f1fc97cb1f48a1

* * *

### `renderToStaticMarkup()` {#rendertostaticmarkup}

```javascript
ReactDOMServer.renderToStaticMarkup(element)
```

 [`renderToString`](#rendertostring)-тай адилхан. Гэхдээ `data-reactroot` гэх мэт React дотооддоо ашигладаг нэмэлт DOM атрибут үүсгэдэггүй. Илүү атрибут байхгүй болохоор хэдэн бит ч гэсэн хэмнэгдэх тул энгийн статик хуудас үүсгэгч ашиглахыг хүсэж байгаа бол энэ танд хэрэг болно. 

<<<<<<< HEAD
Хэрэв та тэмдэглэгээг илүү интерактив болгох зорилгоор үйлчлүүлэгч тал дээр React ашиглахыг хүсвэл энэ аргыг бүү ашиглаарай. Оронд нь сервер дээрээ [`renderToString`] ашиглаад, үйлчлүүлэгч тал дээрээ  [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate)  ашиглаарай.
=======
If you plan to use React on the client to make the markup interactive, do not use this method. Instead, use [`renderToString`](#rendertostring) on the server and [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on the client.
>>>>>>> 707f22d25f5b343a2e5e063877f1fc97cb1f48a1

* * *

### `renderToPipeableStream()` {#rendertopipeablestream}

```javascript
ReactDOMServer.renderToPipeableStream(element, options)
```

Render a React element to its initial HTML. Returns a [Control object](https://github.com/facebook/react/blob/3f8990898309c61c817fbf663f5221d9a00d0eaa/packages/react-dom/src/server/ReactDOMFizzServerNode.js#L49-L54) that allows you to pipe the output or abort the request. Fully supports Suspense and streaming of HTML with "delayed" content blocks "popping in" later through javascript execution. [Read more](https://github.com/reactwg/react-18/discussions/37)

If you call [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

> Note:
>
> This is a Node.js specific API and modern server environments should use renderToReadableStream instead.
>

```
const {pipe, abort} = renderToPipeableStream(
  <App />,
  {
    onAllReady() {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/html');
      pipe(res);
    },
    onShellError(x) {
      res.statusCode = 500;
      res.send(
        '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
      );
    }
  }
);
```

* * *

### `renderToReadableStream()` {#rendertoreadablestream}

```javascript
    ReactDOMServer.renderToReadableStream(element, options);
```

Streams a React element to its initial HTML. Returns a [Readable Stream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream). Fully supports Suspense and streaming of HTML. [Read more](https://github.com/reactwg/react-18/discussions/127)

If you call [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

```
let controller = new AbortController();
try {
  let stream = await renderToReadableStream(
    <html>
      <body>Success</body>
    </html>,
    {
      signal: controller.signal,
    }
  );
  
  // This is to wait for all suspense boundaries to be ready. You can uncomment
  // this line if you don't want to stream to the client
  // await stream.allReady;

  return new Response(stream, {
    headers: {'Content-Type': 'text/html'},
  });
} catch (error) {
  return new Response(
    '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>',
    {
      status: 500,
      headers: {'Content-Type': 'text/html'},
    }
  );
}
```
* * *

### `renderToNodeStream()` {#rendertonodestream} (Deprecated)

```javascript
ReactDOMServer.renderToNodeStream(element)
```

React элементийг эхний HTML руу рендэр хийнэ. HTML стринг үүсгэх [Readable stream](https://nodejs.org/api/stream.html#stream_readable_streams) буцаана. Уг HTML үр дүн нь [`ReactDOMServer.renderToString`](#rendertostring)-ын буцаах үр дүнтэй яг адилхан байна. Та энэ аргыг ашиглан сервер дээр HTML үүсгэн, хуудсыг хурдан ачлаалах эхний хүсэлтийн тэмдэглэгээг илгээх, SEO-ын зорилгоор хайлтын систем таны хуудсыг гүйлгэх зэрэгт ашиглаж болно. 

<<<<<<< HEAD
=======
If you call [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.
>>>>>>> 707f22d25f5b343a2e5e063877f1fc97cb1f48a1

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

<<<<<<< HEAD
Хэрэв та тэмдэглэгээг илүү интерактив болгох зорилгоор үйлчлүүлэгч тал дээр React ашиглахыг хүсвэл энэ аргыг бүү ашиглаарай. Оронд нь сервер дээрээ [`renderToNodeStream`](#rendertonodestream) ашиглаад, үйлчлүүлэгч тал дээрээ  [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate)  ашиглаарай.
=======
If you plan to use React on the client to make the markup interactive, do not use this method. Instead, use [`renderToNodeStream`](#rendertonodestream) on the server and [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on the client.
>>>>>>> 707f22d25f5b343a2e5e063877f1fc97cb1f48a1


> Тэмдэглэл:
>
> Зөвхөн сервер дээр. Уг API нь хөтөч дээр ажиллахгүй.
>
> Уг методоос буцсан stream  нь  utf-8-аар шифрлэгдсэн byte stream буцаана. Хэрэв та stream-ыг өөрөөр шифрлэснийг харахыг хүсвэл текстийг хөрвүүлэн шилжүүлэх  [iconv-lite](https://www.npmjs.com/package/iconv-lite) төслийг хараарай.
