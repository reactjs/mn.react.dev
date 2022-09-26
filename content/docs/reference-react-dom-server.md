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
import * as ReactDOMServer from 'react-dom/server';
// CommonJS
var ReactDOMServer = require('react-dom/server');
```

## Тойм {#overview}

<<<<<<< HEAD
Доор методуудыг сервер болон хөтчийн орчинд ашиглаж болно:
=======
These methods are only available in the **environments with [Node.js Streams](https://nodejs.dev/learn/nodejs-streams):**

- [`renderToPipeableStream()`](#rendertopipeablestream)
- [`renderToNodeStream()`](#rendertonodestream) (Deprecated)
- [`renderToStaticNodeStream()`](#rendertostaticnodestream)

These methods are only available in the **environments with [Web Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API)** (this includes browsers, Deno, and some modern edge runtimes):

- [`renderToReadableStream()`](#rendertoreadablestream)

The following methods can be used in the environments that don't support streams:
>>>>>>> e3073b03a5b9eff4ef12998841b9e56120f37e26

- [`renderToString()`](#rendertostring)
- [`renderToStaticMarkup()`](#rendertostaticmarkup)

<<<<<<< HEAD
Эдгээр нэмэлт методууд нь пакэжээс (`stream`) хамаардаг ба **зөвхөн сервер дээр байна**. Хөтөч дээр ажиллахгүй.

- [`renderToNodeStream()`](#rendertonodestream)
- [`renderToStaticNodeStream()`](#rendertostaticnodestream)

* * *

=======
>>>>>>> e3073b03a5b9eff4ef12998841b9e56120f37e26
## Reference {#reference}

### `renderToPipeableStream()` {#rendertopipeablestream}

```javascript
ReactDOMServer.renderToPipeableStream(element, options)
```
React элементийг эхний HTML рүү рендэр хийнэ. React HTML стринг буцаана. Та энэ методыг сервер дээр HTML үүсгэх, хуудсыг хурдан ачаалах эхний хүсэлтийн тэмдэглэгээг илгээх, SEO-ын зорилгоор хайлтын систем таны хуудсыг гүйлгэх зэрэгт ашиглаж болно. 

<<<<<<< HEAD
Серверээс рендэр хийсэн тэмдэглэгээ бүхий node дээр [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate)-ыг дуудах юм бол React үүнийг хадгалан, зөвхөн эвент зохицуулагчийг хамруулна. Ингэснээр та анхны ачаалах үйлдлийг хийх боломжтой болох юм. 
=======
Render a React element to its initial HTML. Returns a stream with a `pipe(res)` method to pipe the output and `abort()` to abort the request. Fully supports Suspense and streaming of HTML with "delayed" content blocks "popping in" via inline `<script>` tags later. [Read more](https://github.com/reactwg/react-18/discussions/37)

If you call [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

```javascript
let didError = false;
const stream = renderToPipeableStream(
  <App />,
  {
    onShellReady() {
      // The content above all Suspense boundaries is ready.
      // If something errored before we started streaming, we set the error code appropriately.
      res.statusCode = didError ? 500 : 200;
      res.setHeader('Content-type', 'text/html');
      stream.pipe(res);
    },
    onShellError(error) {
      // Something errored before we could complete the shell so we emit an alternative shell.
      res.statusCode = 500;
      res.send(
        '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
      );
    },
    onAllReady() {
      // If you don't want streaming, use this instead of onShellReady.
      // This will fire after the entire page content is ready.
      // You can use this for crawlers or static generation.

      // res.statusCode = didError ? 500 : 200;
      // res.setHeader('Content-type', 'text/html');
      // stream.pipe(res);
    },
    onError(err) {
      didError = true;
      console.error(err);
    },
  }
);
```

See the [full list of options](https://github.com/facebook/react/blob/14c2be8dac2d5482fda8a0906a31d239df8551fc/packages/react-dom/src/server/ReactDOMFizzServerNode.js#L36-L46).

> Note:
>
> This is a Node.js-specific API. Environments with [Web Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API), like Deno and modern edge runtimes, should use [`renderToReadableStream`](#rendertoreadablestream) instead.
>
>>>>>>> e3073b03a5b9eff4ef12998841b9e56120f37e26

* * *

### `renderToReadableStream()` {#rendertoreadablestream}

```javascript
ReactDOMServer.renderToReadableStream(element, options);
```

<<<<<<< HEAD
 [`renderToString`](#rendertostring)-тай адилхан. Гэхдээ `data-reactroot` гэх мэт React дотооддоо ашигладаг нэмэлт DOM атрибут үүсгэдэггүй. Илүү атрибут байхгүй болохоор хэдэн бит ч гэсэн хэмнэгдэх тул энгийн статик хуудас үүсгэгч ашиглахыг хүсэж байгаа бол энэ танд хэрэг болно. 

Хэрэв та тэмдэглэгээг илүү интерактив болгох зорилгоор үйлчлүүлэгч тал дээр React ашиглахыг хүсвэл энэ аргыг бүү ашиглаарай. Оронд нь сервер дээрээ [`renderToString`] ашиглаад, үйлчлүүлэгч тал дээрээ  [`ReactDOM.hydrate()`](/docs/react-dom.html#hydrate)  ашиглаарай.
=======
Streams a React element to its initial HTML. Returns a Promise that resolves to a [Readable Stream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream). Fully supports Suspense and streaming of HTML. [Read more](https://github.com/reactwg/react-18/discussions/127)

If you call [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

```javascript
let controller = new AbortController();
let didError = false;
try {
  let stream = await renderToReadableStream(
    <html>
      <body>Success</body>
    </html>,
    {
      signal: controller.signal,
      onError(error) {
        didError = true;
        console.error(error);
      }
    }
  );
  
  // This is to wait for all Suspense boundaries to be ready. You can uncomment
  // this line if you want to buffer the entire HTML instead of streaming it.
  // You can use this for crawlers or static generation:

  // await stream.allReady;

  return new Response(stream, {
    status: didError ? 500 : 200,
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

See the [full list of options](https://github.com/facebook/react/blob/14c2be8dac2d5482fda8a0906a31d239df8551fc/packages/react-dom/src/server/ReactDOMFizzServerBrowser.js#L27-L35).

> Note:
>
> This API depends on [Web Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API). For Node.js, use [`renderToPipeableStream`](#rendertopipeablestream) instead.
>
>>>>>>> e3073b03a5b9eff4ef12998841b9e56120f37e26

* * *

### `renderToNodeStream()`  (Deprecated) {#rendertonodestream}

```javascript
ReactDOMServer.renderToNodeStream(element)
```

<<<<<<< HEAD
React элементийг эхний HTML руу рендэр хийнэ. HTML стринг үүсгэх [Readable stream](https://nodejs.org/api/stream.html#stream_readable_streams) буцаана. Уг HTML үр дүн нь [`ReactDOMServer.renderToString`](#rendertostring)-ын буцаах үр дүнтэй яг адилхан байна. Та энэ аргыг ашиглан сервер дээр HTML үүсгэн, хуудсыг хурдан ачлаалах эхний хүсэлтийн тэмдэглэгээг илгээх, SEO-ын зорилгоор хайлтын систем таны хуудсыг гүйлгэх зэрэгт ашиглаж болно. 

=======
Render a React element to its initial HTML. Returns a [Node.js Readable stream](https://nodejs.org/api/stream.html#stream_readable_streams) that outputs an HTML string. The HTML output by this stream is exactly equal to what [`ReactDOMServer.renderToString`](#rendertostring) would return. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.

If you call [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.
>>>>>>> e3073b03a5b9eff4ef12998841b9e56120f37e26

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
>>>>>>> e3073b03a5b9eff4ef12998841b9e56120f37e26


> Тэмдэглэл:
>
> Зөвхөн сервер дээр. Уг API нь хөтөч дээр ажиллахгүй.
>
<<<<<<< HEAD
> Уг методоос буцсан stream  нь  utf-8-аар шифрлэгдсэн byte stream буцаана. Хэрэв та stream-ыг өөрөөр шифрлэснийг харахыг хүсвэл текстийг хөрвүүлэн шилжүүлэх  [iconv-lite](https://www.npmjs.com/package/iconv-lite) төслийг хараарай.
=======
> The stream returned from this method will return a byte stream encoded in utf-8. If you need a stream in another encoding, take a look at a project like [iconv-lite](https://www.npmjs.com/package/iconv-lite), which provides transform streams for transcoding text.

* * *

### `renderToString()` {#rendertostring}

```javascript
ReactDOMServer.renderToString(element)
```

Render a React element to its initial HTML. React will return an HTML string. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.

If you call [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

> Note
>
> This API has limited Suspense support and does not support streaming.
>
> On the server, it is recommended to use either [`renderToPipeableStream`](#rendertopipeablestream) (for Node.js) or [`renderToReadableStream`](#rendertoreadablestream) (for Web Streams) instead.

* * *

### `renderToStaticMarkup()` {#rendertostaticmarkup}

```javascript
ReactDOMServer.renderToStaticMarkup(element)
```

Similar to [`renderToString`](#rendertostring), except this doesn't create extra DOM attributes that React uses internally, such as `data-reactroot`. This is useful if you want to use React as a simple static page generator, as stripping away the extra attributes can save some bytes.

If you plan to use React on the client to make the markup interactive, do not use this method. Instead, use [`renderToString`](#rendertostring) on the server and [`ReactDOM.hydrateRoot()`](/docs/react-dom-client.html#hydrateroot) on the client.
>>>>>>> e3073b03a5b9eff4ef12998841b9e56120f37e26
