---
title: renderToPipeableStream
---

<Intro>

`renderToPipeableStream` нь React модыг дамжуулах боломжтой [Node.js Stream](https://nodejs.org/api/stream.html) болгон дүрсэлнэ.

```js
const { pipe, abort } = renderToPipeableStream(reactNode, options?)
```

</Intro>

<InlineToc />

<Note>

Энэ API нь зөвхөн Node.js-д зориулагдсан. Deno болон орчин үеийн edge runtime зэрэг [Web Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API)-ийг дэмждэг орчинд [`renderToReadableStream`](/reference/react-dom/server/renderToReadableStream)-ийг ашиглана уу.

</Note>

---

## Лавлагаа {/*reference*/}

### `renderToPipeableStream(reactNode, options?)` {/*rendertopipeablestream*/}

React модыг HTML болгон [Node.js Stream](https://nodejs.org/api/stream.html#writable-streams) рүү дүрслэхийн тулд `renderToPipeableStream`-ийг дуудна.

```js
import { renderToPipeableStream } from 'react-dom/server';

const { pipe } = renderToPipeableStream(<App />, {
  bootstrapScripts: ['/main.js'],
  onShellReady() {
    response.setHeader('content-type', 'text/html');
    pipe(response);
  }
});
```

Серверийн үүсгэсэн HTML-ийг интерактив болгохын тулд клиент талд [`hydrateRoot`](/reference/react-dom/client/hydrateRoot)-ийг дуудна.

[Доорх бусад жишээг үзнэ үү.](#usage)

#### Параметрүүд {/*parameters*/}

* `reactNode`: HTML болгон дүрслэх React node. Жишээлбэл, `<App />` шиг JSX элемент. Энэ нь баримт бичгийг бүхэлд нь төлөөлөх ёстой тул `App` компонент `<html>` tag-ийг дүрслэх хэрэгтэй.

* **optional** `options`: Урсгалын тохиргоонуудыг агуулсан объект.
  * **optional** `bootstrapScriptContent`: Заасан тохиолдолд энэ тэмдэгт мөрийг inline `<script>` tag дотор байрлуулна.
  * **optional** `bootstrapScripts`: Хуудаст гаргах `<script>` tag-уудын URL тэмдэгт мөрийн массив. [`hydrateRoot`](/reference/react-dom/client/hydrateRoot)-ийг дууддаг `<script>`-ийг оруулахдаа ашиглана. Клиент талд React огт ажиллуулахгүй бол үүнийг орхино.
  * **optional** `bootstrapModules`: `bootstrapScripts`-тэй адил боловч оронд нь [`<script type="module">`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) гаргана.
  * **optional** `identifierPrefix`: [`useId`](/reference/react/useId)-ийн үүсгэсэн ID-д React-ийн ашиглах тэмдэгт мөрийн угтвар. Нэг хуудсанд олон root ашиглах үед зөрчил үүсэхээс сэргийлнэ. [`hydrateRoot`](/reference/react-dom/client/hydrateRoot#parameters)-д дамжуулсан угтвартай ижил байх ёстой.
  * **optional** `namespaceURI`: Урсгалын root [namespace URI](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS#important_namespace_uris)-г агуулсан тэмдэгт мөр. Анхдагч нь ердийн HTML. SVG-д `'http://www.w3.org/2000/svg'`, MathML-д `'http://www.w3.org/1998/Math/MathML'` дамжуулна.
  * **optional** `nonce`: [`script-src` Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)-д script зөвшөөрөх [`nonce`](http://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#nonce) тэмдэгт мөр.
  * **optional** `onAllReady`: [Shell](#specifying-what-goes-into-the-shell) болон бүх нэмэлт [контент](#streaming-more-content-as-it-loads) дүрслэгдэж дуусахад ажиллах callback. [Crawler болон статик үүсгэлтэд](#waiting-for-all-content-to-load-for-crawlers-and-static-generation) `onShellReady`-ийн оронд ашиглаж болно. Эндээс урсгалыг эхлүүлбэл шат дараалсан ачаалалт байхгүй бөгөөд урсгал эцсийн HTML-ийг агуулна.
  * <CanaryBadge /> **optional** `onBrowserBailout`: [`browser()`](/reference/react-dom/browser)-оос сэргээхдээ браузераар солих Suspense fallback үлдээх үед React-ийн дууддаг callback. Энэ нь зөвхөн браузерт дүрслэх үйлдлийг тайлбарласан `Error` болон `componentStack` агуулсан `errorInfo` объектыг хүлээн авна. `browser`-т шалтгаан дамжуулсан бол `error.cause`-аас авна. Анхдагчаар React юу ч хийхгүй. [Зөвхөн браузерт дүрслэх үйлдлийг хэрхэн мэдээлэхийг үзнэ үү.](/reference/react-dom/browser#reporting-browser-only-rendering-on-the-server)
  * **optional** `onError`: Серверт [сэргээж болох](#recovering-from-errors-outside-the-shell) эсвэл [болохгүй](#recovering-from-errors-inside-the-shell) алдаа гарах бүрд ажиллах callback. Анхдагчаар зөвхөн `console.error`-ийг дуудна. Үүнийг [уналтын тайлан бүртгэхээр](#logging-crashes-on-the-server) өөрчилсөн ч `console.error`-ийг үргэлжлүүлэн дуудаарай. Мөн shell гарахаас өмнө [status code тохируулахад](#setting-the-status-code) ашиглаж болно.
  * **optional** `onShellReady`: [Анхны shell](#specifying-what-goes-into-the-shell) дүрслэгдмэгц ажиллах callback. Энд [status code тохируулж](#setting-the-status-code), `pipe`-ийг дуудан урсгалыг эхлүүлж болно. Дараа нь React shell-ийн араас [нэмэлт контентыг урсгалаар дамжуулах](#streaming-more-content-as-it-loads) бөгөөд inline `<script>` tag-ууд HTML-ийн ачаалж буй fallback-ийг бэлэн контентоор солино.
  * **optional** `onShellError`: Анхны shell-ийг дүрслэхэд алдаа гарвал ажиллах callback. Алдааг аргумент болгон хүлээн авна. Урсгал руу хараахан byte гараагүй, `onShellReady` болон `onAllReady` дуудагдахгүй тул [fallback HTML shell гаргаж болно](#recovering-from-errors-inside-the-shell).
  * **optional** `progressiveChunkSize`: Нэг chunk дэх byte-ийн тоо. [Анхдагч heuristic-ийн талаар дэлгэрэнгүй уншина уу.](https://github.com/react/react/blob/14c2be8dac2d5482fda8a0906a31d239df8551fc/packages/react-server/src/ReactFizzServer.js#L210-L225)


#### Буцаах утга {/*returns*/}

`renderToPipeableStream` нь хоёр method-той объект буцаана:

* `pipe` нь HTML-ийг өгсөн [Writable Node.js Stream](https://nodejs.org/api/stream.html#writable-streams) рүү гаргана. Урсгалыг идэвхжүүлэх бол `onShellReady` дотор, crawler болон статик үүсгэлтэд `onAllReady` дотор `pipe`-ийг дуудна.
* `abort` нь [серверийн дүрслэлийг зогсоож](#aborting-server-rendering), үлдсэн хэсгийг клиент талд дүрслэх боломж олгоно.

---

## Ашиглалт {/*usage*/}

### React модыг HTML болгон Node.js Stream рүү дүрслэх {/*rendering-a-react-tree-as-html-to-a-nodejs-stream*/}

React модыг HTML болгон [Node.js Stream](https://nodejs.org/api/stream.html#writable-streams) рүү дүрслэхийн тулд `renderToPipeableStream`-ийг дуудна:

```js [[1, 5, "<App />"], [2, 6, "['/main.js']"]]
import { renderToPipeableStream } from 'react-dom/server';

// The route handler syntax depends on your backend framework
app.use('/', (request, response) => {
  const { pipe } = renderToPipeableStream(<App />, {
    bootstrapScripts: ['/main.js'],
    onShellReady() {
      response.setHeader('content-type', 'text/html');
      pipe(response);
    }
  });
});
```

<CodeStep step={1}>Root компонент</CodeStep>-той хамт <CodeStep step={2}>bootstrap `<script>` замуудын</CodeStep> жагсаалтыг өгөх хэрэгтэй. Root компонент нь **root `<html>` tag-ийг багтаасан баримт бичгийг бүхэлд нь** буцаах ёстой.

Жишээлбэл, дараах байдлаар харагдаж болно:

```js [[1, 1, "App"]]
export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles.css"></link>
        <title>My app</title>
      </head>
      <body>
        <Router />
      </body>
    </html>
  );
}
```

React нь үүссэн HTML урсгалд [doctype](https://developer.mozilla.org/en-US/docs/Glossary/Doctype) болон таны <CodeStep step={2}>bootstrap `<script>` tag-уудыг</CodeStep> оруулна:

```html [[2, 5, "/main.js"]]
<!DOCTYPE html>
<html>
  <!-- ... HTML from your components ... -->
</html>
<script src="/main.js" async=""></script>
```

Клиент талд bootstrap script нь [`hydrateRoot`-ийг дуудаж `document`-ийг бүхэлд нь hydrate хийх](/reference/react-dom/client/hydrateRoot#hydrating-an-entire-document) ёстой:

```js [[1, 4, "<App />"]]
import { hydrateRoot } from 'react-dom/client';
import App from './App.js';

hydrateRoot(document, <App />);
```

Ингэснээр серверийн үүсгэсэн HTML-д event listener-үүд холбогдож, интерактив болно.

<DeepDive>

#### Build-ийн үр дүнгээс CSS болон JS asset-ийн замыг унших {/*reading-css-and-js-asset-paths-from-the-build-output*/}

Эцсийн asset URL-уудыг (JavaScript болон CSS файл гэх мэт) build-ийн дараа ихэвчлэн hash-ладаг. Жишээлбэл, `styles.css`-ийн оронд `styles.123456.css` үүсэж болно. Статик asset-ийн файлын нэрийг hash-ласнаар нэг asset-ийн build бүр өөр нэртэй байна. Ингэснээр тодорхой нэртэй файлын агуулга хэзээ ч өөрчлөгдөхгүй тул статик asset-д урт хугацааны cache-ийг аюулгүй идэвхжүүлж болно.

Гэвч asset URL-уудыг build дууссаны дараа л мэдэх боломжтой бол source code-д урьдчилан бичиж чадахгүй. Жишээлбэл, өмнөх шиг `"/styles.css"`-ийг JSX-д hardcode хийх нь ажиллахгүй. Эдгээрийг source code-оос тусгаарлахын тулд root компонент prop-оор дамжуулсан map-аас жинхэнэ файлын нэрийг уншиж болно:

```js {1,6}
export default function App({ assetMap }) {
  return (
    <html>
      <head>
        ...
        <link rel="stylesheet" href={assetMap['styles.css']}></link>
        ...
      </head>
      ...
    </html>
  );
}
```

Сервер талд `<App assetMap={assetMap} />`-ийг дүрсэлж, asset URL-уудтай `assetMap`-ийг дамжуулна:

```js {1-5,8,9}
// You'd need to get this JSON from your build tooling, e.g. read it from the build output.
const assetMap = {
  'styles.css': '/styles.123456.css',
  'main.js': '/main.123456.js'
};

app.use('/', (request, response) => {
  const { pipe } = renderToPipeableStream(<App assetMap={assetMap} />, {
    bootstrapScripts: [assetMap['main.js']],
    onShellReady() {
      response.setHeader('content-type', 'text/html');
      pipe(response);
    }
  });
});
```

Сервер одоо `<App assetMap={assetMap} />`-ийг дүрсэлж байгаа тул hydration алдаанаас сэргийлэхийн тулд клиент талд мөн `assetMap`-тай дүрслэх хэрэгтэй. `assetMap`-ийг serialize хийж клиент рүү дараах байдлаар дамжуулна:

```js {9-10}
// You'd need to get this JSON from your build tooling.
const assetMap = {
  'styles.css': '/styles.123456.css',
  'main.js': '/main.123456.js'
};

app.use('/', (request, response) => {
  const { pipe } = renderToPipeableStream(<App assetMap={assetMap} />, {
    // Careful: It's safe to stringify() this because this data isn't user-generated.
    bootstrapScriptContent: `window.assetMap = ${JSON.stringify(assetMap)};`,
    bootstrapScripts: [assetMap['main.js']],
    onShellReady() {
      response.setHeader('content-type', 'text/html');
      pipe(response);
    }
  });
});
```

Дээрх жишээнд `bootstrapScriptContent` тохиргоо нь клиент талын global `window.assetMap` хувьсагчийг оноох нэмэлт inline `<script>` tag оруулна. Ингэснээр клиент код ижил `assetMap`-ийг уншиж чадна:

```js {4}
import { hydrateRoot } from 'react-dom/client';
import App from './App.js';

hydrateRoot(document, <App assetMap={window.assetMap} />);
```

Клиент болон сервер хоёулаа `App`-ийг ижил `assetMap` prop-той дүрслэх тул hydration алдаа гарахгүй.

</DeepDive>

---

### Контент ачаалагдах тусам урсгалаар дамжуулах {/*streaming-more-content-as-it-loads*/}

Урсгалаар дамжуулснаар сервер бүх өгөгдлийг ачаалж дуусахаас өмнө хэрэглэгч контентыг харж эхэлнэ. Жишээлбэл, нүүр зураг, найзууд болон зургуудтай хажуугийн хэсэг, нийтлэлүүдийн жагсаалт харуулдаг профайл хуудсыг авч үзье:

```js
function ProfilePage() {
  return (
    <ProfileLayout>
      <ProfileCover />
      <Sidebar>
        <Friends />
        <Photos />
      </Sidebar>
      <Posts />
    </ProfileLayout>
  );
}
```

`<Posts />`-ийн өгөгдлийг ачаалахад хугацаа ордог гэж төсөөлье. Нийтлэлүүдийг хүлээлгүй профайл хуудасны бусад контентыг хэрэглэгчид харуулах нь зохимжтой. Үүний тулд [`Posts`-ийг `<Suspense>` boundary дотор байрлуулна](/reference/react/Suspense#displaying-a-fallback-while-content-is-loading):

```js {9,11}
function ProfilePage() {
  return (
    <ProfileLayout>
      <ProfileCover />
      <Sidebar>
        <Friends />
        <Photos />
      </Sidebar>
      <Suspense fallback={<PostsGlimmer />}>
        <Posts />
      </Suspense>
    </ProfileLayout>
  );
}
```

Ингэснээр `Posts` өгөгдлөө ачаалахаас өмнө HTML-ийг урсгалаар дамжуулж эхлэхийг React-д заана. React эхлээд ачаалалтын fallback (`PostsGlimmer`)-ийн HTML-ийг илгээнэ. `Posts` өгөгдлөө ачаалж дуусмагц үлдсэн HTML болон ачаалалтын fallback-ийг уг HTML-ээр солих inline `<script>` tag-ийг илгээнэ. Хэрэглэгч эхлээд `PostsGlimmer`-ийг харах бөгөөд дараа нь `Posts`-оор солигдоно.

Ачааллын дарааллыг илүү нарийн удирдахын тулд [`<Suspense>` boundary-нуудыг давхарлан байрлуулж](/reference/react/Suspense#revealing-nested-content-as-it-loads) болно:

```js {5,13}
function ProfilePage() {
  return (
    <ProfileLayout>
      <ProfileCover />
      <Suspense fallback={<BigSpinner />}>
        <Sidebar>
          <Friends />
          <Photos />
        </Sidebar>
        <Suspense fallback={<PostsGlimmer />}>
          <Posts />
        </Suspense>
      </Suspense>
    </ProfileLayout>
  );
}
```

Энэ жишээнд React хуудсыг бүр ч эрт урсгалаар дамжуулж эхэлнэ. `ProfileLayout` болон `ProfileCover` ямар нэг `<Suspense>` boundary-д ороогүй тул зөвхөн тэд эхлээд дүрслэгдэж дуусах ёстой. Харин `Sidebar`, `Friends`, эсвэл `Photos` өгөгдөл ачаалах шаардлагатай бол React оронд нь `BigSpinner` fallback-ийн HTML-ийг илгээнэ. Өгөгдөл бэлэн болохын хэрээр бүх контент харагдаж дуустал дараалан гарч ирнэ.

Урсгалаар дамжуулахын тулд React браузерт ачаалагдах эсвэл апп интерактив болохыг хүлээх шаардлагагүй. Серверийн HTML контент ямар нэг `<script>` tag ачаалагдахаас өмнө шат дараалан харагдана.

[HTML-ийг урсгалаар дамжуулах ажиллагааны талаар дэлгэрэнгүй уншина уу.](https://github.com/reactwg/react-18/discussions/37)

<Note>

Зөвхөн [`use`](/reference/react/use)-ээр уншсан Promise зэрэг [Suspense boundary-г идэвхжүүлдэг эх үүсвэрээс](/reference/react/Suspense#what-activates-a-suspense-boundary) уншсан өгөгдөл дүрслэх явцыг түр зогсооно. Suspense нь Effect эсвэл event handler дотор татсан өгөгдлийг илрүүлэхгүй.

</Note>

---

### Shell-д юу орохыг тодорхойлох {/*specifying-what-goes-into-the-shell*/}

Аппын ямар ч `<Suspense>` boundary-гийн гадна байрлах хэсгийг *бүрхүүл (shell)* гэнэ:

```js {3-5,13,14}
function ProfilePage() {
  return (
    <ProfileLayout>
      <ProfileCover />
      <Suspense fallback={<BigSpinner />}>
        <Sidebar>
          <Friends />
          <Photos />
        </Sidebar>
        <Suspense fallback={<PostsGlimmer />}>
          <Posts />
        </Suspense>
      </Suspense>
    </ProfileLayout>
  );
}
```

Энэ нь хэрэглэгчийн хамгийн түрүүнд харах боломжтой ачааллын төлөвийг тодорхойлно:

```js {3-5,13
<ProfileLayout>
  <ProfileCover />
  <BigSpinner />
</ProfileLayout>
```

Хэрэв аппыг бүхэлд нь root дээрх `<Suspense>` boundary дотор байрлуулбал shell зөвхөн spinner агуулна. Гэвч дэлгэц дээр том spinner харах нь бага зэрэг удаан хүлээгээд жинхэнэ layout харахаас ч удаан, таагүй санагдаж болох тул хэрэглэгчийн туршлага муудна. Тиймээс `<Suspense>` boundary-нуудыг shell нь хуудасны бүх layout-ийн араг яс мэт *хамгийн бага боловч бүрэн* байхаар байрлуулах нь зүйтэй.

Shell бүхэлдээ дүрслэгдэж дуусахад `onShellReady` callback ажиллана. Урсгалыг ихэвчлэн энэ үед эхлүүлнэ:

```js {3-6}
const { pipe } = renderToPipeableStream(<App />, {
  bootstrapScripts: ['/main.js'],
  onShellReady() {
    response.setHeader('content-type', 'text/html');
    pipe(response);
  }
});
```

`onShellReady` ажиллах үед давхарласан `<Suspense>` boundary доторх компонентууд өгөгдлөө ачаалсаар байж болно.

---

### Серверийн уналтыг бүртгэх {/*logging-crashes-on-the-server*/}

Анхдагчаар серверийн бүх алдааг console-д бүртгэнэ. Уналтын тайлан бүртгэхийн тулд энэ үйлдлийг өөрчилж болно:

```js {7-10}
const { pipe } = renderToPipeableStream(<App />, {
  bootstrapScripts: ['/main.js'],
  onShellReady() {
    response.setHeader('content-type', 'text/html');
    pipe(response);
  },
  onError(error) {
    console.error(error);
    logServerCrashReport(error);
  }
});
```

`onError`-ийн өөрийн хэрэгжүүлэлтийг өгсөн бол дээрхийн адил алдааг console-д мөн бүртгэхээ бүү мартаарай.

---

### Shell доторх алдаанаас сэргээх {/*recovering-from-errors-inside-the-shell*/}

Энэ жишээнд shell нь `ProfileLayout`, `ProfileCover`, `PostsGlimmer`-ийг агуулна:

```js {3-5,7-8}
function ProfilePage() {
  return (
    <ProfileLayout>
      <ProfileCover />
      <Suspense fallback={<PostsGlimmer />}>
        <Posts />
      </Suspense>
    </ProfileLayout>
  );
}
```

Эдгээр компонентыг дүрслэх үед алдаа гарвал React-д клиент рүү илгээх утга бүхий HTML байхгүй. Серверийн дүрслэлээс хамаарахгүй fallback HTML-ийг эцсийн арга болгон илгээхийн тулд `onShellError`-ийг өөрчилнө:

```js {7-11}
const { pipe } = renderToPipeableStream(<App />, {
  bootstrapScripts: ['/main.js'],
  onShellReady() {
    response.setHeader('content-type', 'text/html');
    pipe(response);
  },
  onShellError(error) {
    response.statusCode = 500;
    response.setHeader('content-type', 'text/html');
    response.send('<h1>Something went wrong</h1>');
  },
  onError(error) {
    console.error(error);
    logServerCrashReport(error);
  }
});
```

Shell үүсгэх үед алдаа гарвал `onError` болон `onShellError` хоёулаа ажиллана. Алдааг мэдээлэхэд `onError`, fallback HTML баримт бичиг илгээхэд `onShellError`-ийг ашиглана. Fallback HTML заавал алдааны хуудас байх албагүй. Оронд нь аппыг зөвхөн клиент талд дүрслэх өөр shell оруулж болно.

---

### Shell-ийн гаднах алдаанаас сэргээх {/*recovering-from-errors-outside-the-shell*/}

Энэ жишээнд `<Posts />` компонент `<Suspense>` дотор байгаа тул shell-ийн хэсэг *биш*:

```js {6}
function ProfilePage() {
  return (
    <ProfileLayout>
      <ProfileCover />
      <Suspense fallback={<PostsGlimmer />}>
        <Posts />
      </Suspense>
    </ProfileLayout>
  );
}
```

`Posts` компонент эсвэл түүний дотор алдаа гарвал React [алдаанаас сэргээхийг оролдоно](/reference/react/Suspense#providing-a-fallback-for-server-errors-and-client-only-content):

1. Хамгийн ойрын `<Suspense>` boundary-гийн ачаалалтын fallback (`PostsGlimmer`)-ийг HTML рүү гаргана.
2. `Posts` контентыг сервер дээр дүрслэх оролдлогоо зогсооно.
3. JavaScript код клиент талд ачаалагдахад React `Posts`-ийг клиент дээр дүрслэхээр *дахин оролдоно*.

`Posts`-ийг клиент талд дахин дүрслэх оролдлого *мөн* бүтэлгүйтвэл React алдааг клиент дээр шиднэ. Дүрслэх үед шидэгдсэн бүх алдааны адил [хамгийн ойрын эцэг error boundary](/reference/react/Component#static-getderivedstatefromerror) алдааг хэрэглэгчид хэрхэн харуулахыг тодорхойлно. Практикт алдаанаас сэргээх боломжгүй нь тодорхой болох хүртэл хэрэглэгч ачаалалтын заагч харна гэсэн үг.

`Posts`-ийг клиент талд дахин дүрслэх оролдлого амжилттай бол серверийн ачаалалтын fallback клиент дүрслэлийн үр дүнгээр солигдоно. Хэрэглэгч серверийн алдаа гарсныг мэдэхгүй. Гэхдээ алдааны талаар мэдэгдэхийн тулд серверийн `onError` болон клиентийн [`onRecoverableError`](/reference/react-dom/client/hydrateRoot#hydrateroot) callback-ууд ажиллана.

---

### Status code тохируулах {/*setting-the-status-code*/}

Урсгалаар дамжуулахад харилцан буулт бий. Хэрэглэгч контентыг аль болох эрт харахын тулд хуудсыг хурдан дамжуулж эхлэхийг хүснэ. Гэвч урсгал эхэлсний дараа response-ийн status code-ийг өөрчлөх боломжгүй.

Аппыг shell (бүх `<Suspense>` boundary-гийн гаднах хэсэг) болон үлдсэн контент гэж [хувааснаар](#specifying-what-goes-into-the-shell) энэ асуудлын нэг хэсгийг шийдсэн. Shell-д алдаа гарвал алдааны status code тохируулах боломжтой `onShellError` callback ирнэ. Үгүй бол апп клиент талд сэргээх боломжтой тул "OK" илгээж болно.

```js {4}
const { pipe } = renderToPipeableStream(<App />, {
  bootstrapScripts: ['/main.js'],
  onShellReady() {
    response.statusCode = 200;
    response.setHeader('content-type', 'text/html');
    pipe(response);
  },
  onShellError(error) {
    response.statusCode = 500;
    response.setHeader('content-type', 'text/html');
    response.send('<h1>Something went wrong</h1>');
  },
  onError(error) {
    console.error(error);
    logServerCrashReport(error);
  }
});
```

Shell-ийн *гаднах* (`<Suspense>` boundary доторх) компонент алдаа шидвэл React дүрслэхээ зогсоохгүй. `onError` callback ажиллах боловч `onShellError`-ийн оронд `onShellReady` ирнэ. Учир нь React [дээр тайлбарласны дагуу](#recovering-from-errors-outside-the-shell) алдаанаас клиент талд сэргээхийг оролдоно.

Гэхдээ хүсвэл алдаа гарсныг ашиглан status code тохируулж болно:

```js {1,6,16}
let didError = false;

const { pipe } = renderToPipeableStream(<App />, {
  bootstrapScripts: ['/main.js'],
  onShellReady() {
    response.statusCode = didError ? 500 : 200;
    response.setHeader('content-type', 'text/html');
    pipe(response);
  },
  onShellError(error) {
    response.statusCode = 500;
    response.setHeader('content-type', 'text/html');
    response.send('<h1>Something went wrong</h1>');
  },
  onError(error) {
    didError = true;
    console.error(error);
    logServerCrashReport(error);
  }
});
```

Энэ нь зөвхөн анхны shell контентыг үүсгэх үед shell-ийн гадна гарсан алдааг барих тул бүх алдааг хамрахгүй. Тодорхой контентод алдаа гарсан эсэхийг мэдэх нь зайлшгүй бол уг контентыг shell рүү шилжүүлж болно.

---

### Өөр өөр алдааг ялгаатай аргаар боловсруулах {/*handling-different-errors-in-different-ways*/}

Та [өөрийн `Error` дэд классуудыг үүсгэж](https://javascript.info/custom-errors), ямар алдаа шидэгдсэнийг [`instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) operator-оор шалгаж болно. Жишээлбэл, өөрийн `NotFoundError`-ийг тодорхойлоод компонентоос шиднэ. Дараа нь `onError`, `onShellReady`, `onShellError` callback-ууд алдааны төрлөөс хамааран өөр үйлдэл хийж чадна:

```js {2,4-14,19,24,30}
let didError = false;
let caughtError = null;

function getStatusCode() {
  if (didError) {
    if (caughtError instanceof NotFoundError) {
      return 404;
    } else {
      return 500;
    }
  } else {
    return 200;
  }
}

const { pipe } = renderToPipeableStream(<App />, {
  bootstrapScripts: ['/main.js'],
  onShellReady() {
    response.statusCode = getStatusCode();
    response.setHeader('content-type', 'text/html');
    pipe(response);
  },
  onShellError(error) {
   response.statusCode = getStatusCode();
   response.setHeader('content-type', 'text/html');
   response.send('<h1>Something went wrong</h1>');
  },
  onError(error) {
    didError = true;
    caughtError = error;
    console.error(error);
    logServerCrashReport(error);
  }
});
```

Shell-ийг гаргаж урсгалыг эхлүүлсний дараа status code-ийг өөрчлөх боломжгүйг санаарай.

---

### Crawler болон статик үүсгэлтэд бүх контент ачаалагдахыг хүлээх {/*waiting-for-all-content-to-load-for-crawlers-and-static-generation*/}

Контент бэлэн болохын хэрээр хэрэглэгч харж чаддаг тул урсгалаар дамжуулах нь илүү сайн хэрэглэгчийн туршлага өгнө.

Гэхдээ crawler хуудсанд зочлох үед эсвэл build хийхдээ хуудас үүсгэж байгаа бол контентыг шат дараалан харуулахын оронд эхлээд бүгдийг нь ачаалаад эцсийн HTML үр дүнг гаргахыг хүсэж болно.

`onAllReady` callback ашиглан бүх контент ачаалагдахыг хүлээж болно:


```js {2,7,11,18-24}
let didError = false;
let isCrawler = // ... depends on your bot detection strategy ...

const { pipe } = renderToPipeableStream(<App />, {
  bootstrapScripts: ['/main.js'],
  onShellReady() {
    if (!isCrawler) {
      response.statusCode = didError ? 500 : 200;
      response.setHeader('content-type', 'text/html');
      pipe(response);
    }
  },
  onShellError(error) {
    response.statusCode = 500;
    response.setHeader('content-type', 'text/html');
    response.send('<h1>Something went wrong</h1>');
  },
  onAllReady() {
    if (isCrawler) {
      response.statusCode = didError ? 500 : 200;
      response.setHeader('content-type', 'text/html');
      pipe(response);
    }
  },
  onError(error) {
    didError = true;
    console.error(error);
    logServerCrashReport(error);
  }
});
```

Энгийн зочин шат дараалан ачаалагдах контентын урсгалыг авна. Crawler бүх өгөгдөл ачаалагдсаны дараа эцсийн HTML үр дүнг хүлээн авна. Гэхдээ crawler ачаалахад удаан эсвэл алдаа гарч болох өгөгдлийг оролцуулан *бүх* өгөгдлийг хүлээх шаардлагатай болно. Аппаасаа хамааран crawler-т мөн shell илгээхээр сонгож болно.

---

### Серверийн дүрслэлийг зогсоох {/*aborting-server-rendering*/}

Тодорхой хугацааны дараа серверийн дүрслэлийг хүчээр зогсоож болно:

```js {1,5-7}
const { pipe, abort } = renderToPipeableStream(<App />, {
  // ...
});

setTimeout(() => {
  abort();
}, 10000);
```

React үлдсэн ачаалалтын fallback-уудыг HTML болгон гаргаж, бусад хэсгийг клиент талд дүрслэхийг оролдоно.
