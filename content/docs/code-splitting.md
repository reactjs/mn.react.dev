---
id: code-splitting
title: Код салгах
permalink: docs/code-splitting.html
prev: accessibility.html
---

## Bundling {#bundling}

Ихэнх React програмуудын файлууд нь [Webpack](https://webpack.js.org/) эсвэл
[Browserify](http://browserify.org/) гэх мэт хэрэгслүүд ашиглан "багцалсан"
байдаг. Багцлах гэдэг нь импортлогдсон файлууд болон файлуудыг нэг файл болгон
нэгтгэх үйл явц юм: Энэ багц нь веб хуудас дээр нэмэгдэн бүхэл програмын нэг л
удаа ачаалдаг.

#### Example {#example}

**Програм:**

```js
// app.js
import { add } from './math.js';

console.log(add(16, 26)); // 42
```

```js
// math.js
export function add(a, b) {
  return a + b;
}
```

**Багц:**

```js
function add(a, b) {
  return a + b;
}

console.log(add(16, 26)); // 42
```

> Анхаар:
>
> Таны багцууд энэнээс өөр харагдаж болно.

Хэрэв [Create React App](https://github.com/facebookincubator/create-react-app), [Next.js](https://github.com/zeit/next.js/), [Gatsby](https://www.gatsbyjs.org/) эсвэл төстэй хэрэгсэл багаж ашигладаг бол таны програмыг багцлах Webpack тохиргоог өөртөө агуулж байдаг.


Хэрэв ийм хэрэгслүүд ашиглаагүй бол та өөрөө багцлах тохиргоог хийх болно. Жишээ болгон
Webpack-н [суулгах](https://webpack.js.org/guides/installation/)  болон
[Эхлэн суралцах](https://webpack.js.org/guides/getting-started/) заавруудын баримтжуулалтыг харна уу.

## Код салгах {#code-splitting}

Багцлах нь сайн ч таны програм томрохын хэрээр даган томроно. Ялангуяа гуравдагч
том сангууд ашиглаж байгаа бол бүр их томроно.  Та програмдаа юуг багтааж байгааг
анзаарч байхгүй бол ачаалахад хэтэрхий удаан том багцтай болж болзошгүй.

Эцэст нь том багцтай болохоос сэргийлэхийн тулд багцуудаа "салгаж" эхлэх хэрэгтэй.
 [Код-салгах](https://webpack.js.org/guides/code-splitting/) боломж нь Webpack болон [Rollup](https://rollupjs.org/guide/en/#code-splitting), Browserify шиг хэрэгслүүдэд (via
[factor-bundle](https://github.com/browserify/factor-bundle)) дэмжигддэг бөгөөд
олон салгасан багцууд үүсгэн ажиллагааны үед динамикаар ачаалагддаг.

Код-салгах нь хэрэглэгчид одоо хэрэгтэй байгаа ч энэ ачаалагдсан зүйл нь хэрэглэгчид
дахин хэзээ хэрэг болохгүй бол эхлэлийн ачаалалт дээр дуудагдах кодын хэмжээг
бууруулахад туслад үүднээс "залхуу-ачаалалт" дуудах боломжийг олгодог. Ингэснээр
таны програмын хурдыг гайхалтай нэмэгдүүлж болно. 

## `import()` {#import}

Код салгахийг өөрийн програмдаа хэрэгжүүлэх сайн арга бол динамик `import()` бичиглэл юм.

**Өмнө:**

```js
import { add } from './math';

console.log(add(16, 26));
```

**Дараа:**

```js
import("./math").then(math => {
  console.log(math.add(16, 26));
});
```

> Анхаар:
>
> Динамик `import()` бичиглэл бол ECMAScript (JavaScript)
> [санал болголт](https://github.com/tc39/proposal-dynamic-import) бөгөөд одоогоор
> хэлний стандартын нэг хэсэг болоогүй байна. Энэ нь тун удахгүй хүлээн зөвшөөрөгдөхөөр
> байгаа болно.

Webpack энэ бичиглэлтэй болох үед энэ нь таны прогамыг кодыг автоматаар салгаж
эхэлэнэ. Хэрэв та Create React App ашиглаж байгаа бол энэ нь таньд аль хэдийн
тохируулагдаж өгсөн байгаа бөгөөд та үүнийг даруйхан [ашиглаж эхлэх](https://facebook.github.io/create-react-app/docs/code-splitting)
хэрэгтэй. Энэ нь мөн хүрээнээс гаднах [Next.js](https://github.com/zeit/next.js/#dynamic-import) дээр ч дэмжигддэг.

Хэрэв та Webpack өөртөө тохируулж байгаа бол та түүний
[код салгах зааврыг](https://webpack.js.org/guides/code-splitting/) унших нь зүйтэй. Таны Webpack тохиргоо [иймэрхүү](https://gist.github.com/gaearon/ca6e803f5c604d37468b0091d9959269) харагдах хэрэгтэй.

[Babel](https://babeljs.io/) ашиглаж байгаа үед та Babel динамик импорт бичиглэлийг
хувиргаж биш хөрвүүлж байгаа эсэхийг нягтлах хэрэгтэй. Ингэхийн тулд танд [babel-plugin-syntax-dynamic-import](https://yarnpkg.com/en/package/babel-plugin-syntax-dynamic-import) хэрэг болно.

## `React.lazy` {#reactlazy}

> Анхаар:
>
> `React.lazy` болон Suspence нь сервер талын дүрслэлт дээр хараахан байхгүй юм. Хэрэв та сервер дээр дүрслэлт хийгддэг програмд код салгалт хийхийг хүсвэл [Ачаалагдахуйц компонентууд(Loadable Components)](https://github.com/smooth-code/loadable-components) ашиглахийг зөвлөж байна. Энэ нь [сервер талын дүрслэл дээр багц салгалтыг хийх заавар](https://github.com/smooth-code/loadable-components/blob/master/packages/server/README.md) сайтай.

`React.lazy` функц нь танд энгийн компонентийн динамикаар импортлон дүрслэж боломжийг олгодог.

**Өмнө:**

```js
import OtherComponent from './OtherComponent';
```

**Дараа:**

```js
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

Энэ нь `OtherComponent` агуулсан багцийг компонент дүрслэгдэх үед динамикаар импортлодог.

`React.lazy` нь функц авдаг ба тэр нь динамик `import()`-г дуудах ёстой. Энэ нь `Promise` буцаах ёстой ба React компонент агуулсан модулийг хайж олдог.

### Suspense {#suspense}

`MyComponent` дүрслэгдэх мөчид `OtherComponent`-г агуулсан модуль ачаалагдаагүй бол бид ямар нэг уншиж байгаа мэдээлэл гэх мэт ачаалагдаж байгааг нь илэрхийлэх агуулга харуулах хэрэгтэй. Үүнийг `Suspense` компонентоор хийдэг.

```js
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

`fallback` шинж чанар нь ямар ч React элементүүд хүлээж авах ба та компонент ачаалагдах хүртэл юуг ч дүрсэлж болно. Та `Suspense` компонентийг ямар ч залхуу компонентийн дараа байрлуулж болно. Бүр та олон залхуу компонентуудыг хүртэл нэг `Suspense` компонентоор хүрээлүүлэн ашиглаж болно.

```js
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </div>
  );
}
```

### Алдааны зааг(boundaries) {#error-boundaries}

Хэрэв бусад модуль ачаалагдаж чадахгүй бол(жишээ нь сүлжээны доголдлоос) алдаа гарна. Та эдгээр алдаануудыг удирдан хэрэглэгчид мэдэгдэх болон дахин сэргээх үйлдлийг [алдааны зааг](/docs/error-boundaries.html)-р хийж болно. Алдааны заагаа үүсгэсний дараа та үүнийг залхуу компонентуудынхаа доор хаана ч ашиглан сүлжээний алдаа гарсан үед алдааны төлвөө дүрсэлж болно.

```js
import React, { Suspense } from 'react';
import MyErrorBoundary from './MyErrorBoundary';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

const MyComponent = () => (
  <div>
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </MyErrorBoundary>
  </div>
);
```

## Чиглэлд тулгуурласан код салгалт(Route-based code splitting) {#route-based-code-splitting}

Таны програмын хаана код салгахийг шийдэх нь хэцүү байдаг. Та магадгүй багцуудыг
тэнцүү байдлаар салгахийг хүсэх ч дэлгэцийн үйл ажиллагаанд саад учруулахгүй байхийг
хүсэж болно.

Хамгийн сайн эхлэх газар бол чиглэлүүд(routes) юм. Веб үзэж байгаа хүмүүс
хуудас солигдох үед ачаалагдахдаа бага зэрэг цаг авахад дассан байдаг. Мөн та
бүхэл хуудсийг дахин нэг удаа дүрслэхийг илүүд үздэг бол таны хэрэглэгчид
хуудас дээр байгаа бусад элементүүдтэй харьцах нь цөөн байдаг.

Энэ нь хэрхэн чиглэл дээр тулгуурласан код салгалт хийх жишээг [React Router](https://reacttraining.com/react-router/) шиг санг `React.lazy`-тэй хамт ашиглан харуулжээ.

```js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
);
```

## Нэрлэсэн экспортууд {#named-exports}

`React.lazy` нь одоогоор зөвхөн default экспортууд дээр дэмжигддэг. Хэрэв таний импортлохийг хүсэж буй модуль нэрлэсэн экспортууд ашигладаг бол та дундын модуль үүсгэн дахин default-руу экспортлож болно. Энэ нь танд ашиглагдаагүй компонентийг ачаалаагдахгүй байх баталгааг олгодог.

```js
// ManyComponents.js
export const MyComponent = /* ... */;
export const MyUnusedComponent = /* ... */;
```

```js
// MyComponent.js
export { MyComponent as default } from "./ManyComponents.js";
```

```js
// MyApp.js
import React, { lazy } from 'react';
const MyComponent = lazy(() => import("./MyComponent.js"));
```
