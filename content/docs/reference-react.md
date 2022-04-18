---
id: react-api
title: React Top-Level API
layout: docs
category: Reference
permalink: docs/react-api.html
redirect_from:
  - "docs/reference.html"
  - "docs/clone-with-props.html"
  - "docs/top-level-api.html"
  - "docs/top-level-api-ja-JP.html"
  - "docs/top-level-api-ko-KR.html"
  - "docs/top-level-api-zh-CN.html"
---

`React` бол React сангийн эхлэлийн цэг юм. Хэрэв та `<script` тагаас React-г ачаалвал дээд түвшний API-ууд глобал байдлаар бэлэн болно. Хэрэв та ES6-г npm-ээр ашиглаж байгаа бол дараах байдлаар `import React from 'react'` бичнэ. Хэрэв та ES5-г npm-ээр ашиглаж байгаал бол дараах байдалтай `var React = require('react')` бичнэ.

## Тойм {#overview}

### Компонентууд {#components}

 React компонентууд нь дэлгэцийн загварын хэсэг болгоныг бие даасан, дахин ашиглагдах боломжтой, тусгаарласан хэсгүүд болгох бололцоог олгодог. React компонентууд нь `React.Component` эсвэл `React.PureComponent` дэд класс болон тодорхойлогддог.

 - [`React.Component`](#reactcomponent)
 - [`React.PureComponent`](#reactpurecomponent)

Хэрэв та ES6 классууд ашиглахгүй бол та `create-react-class` модулийг оронд нь ашиглаж болно. Илүү дэлгэрэнгүй мэдээллийг [ES6-гүйгээр React хэрэглэг](/docs/react-without-es6.html) хуудсыг харна уу.

React компонентууд нь мөн хүрээлэгдэж болох функц байдлаар тодорхойлогдож болно:

- [`React.memo`](#reactmemo)

### React элементүүд үүсгэх нь {#creating-react-elements}

Бид таны дэлгэцийн загвар ямар харагдахийг тодорхойлохдоо[JSX хэрэглэхийг](/docs/introducing-jsx.html) хэрэглэхийг зөвлөдөг. JSX элемент бүр [`React.createElement()`](#createelement) дуудаг бичиглэл юм. Та энгийнээр дараах функцуудыг JSX ашиглаж байгаа үед шууд дууддаггүй.

- [`createElement()`](#createelement)
- [`createFactory()`](#createfactory)

Илүү дэлгэрэнгүй мэдээллийг [JSX-гүйгээр React хэрэглэх](/docs/react-without-jsx.html) хуудсыг харна уу.

### Элементийг хувиргах нь {#transforming-elements}

`React` нь элементийг хувиргах хэдэн API-ууд байдаг:

- [`cloneElement()`](#cloneelement)
- [`isValidElement()`](#isvalidelement)
- [`React.Children`](#reactchildren)

### Fragments {#fragments}

`React` мөн олон элементийг хүрээлэхгүйгээр компонетод дүрслэх боломж олгодог.

- [`React.Fragment`](#reactfragment)

### Refs {#refs}

- [`React.createRef`](#reactcreateref)
- [`React.forwardRef`](#reactforwardref)

### Suspense {#suspense}

Suspense нь компонентийг "хүлээнгээ" ямар нэг зүйлийг дүрслэх боломжийг олгодог. Одоогоор Suspense нь ганцхан тохиолдол дэмждэг: [`React.lazy`-р компонентийг динамикаар ачаалах](/docs/code-splitting.html#reactlazy). Ирээдүйд энэ нь өгөгдөл татах гэх мэт бусад хэрэглээг дэмжих болно.

- [`React.lazy`](#reactlazy)
- [`React.Suspense`](#reactsuspense)

### Transitions {#transitions}

*Transitions* are a new concurrent feature introduced in React 18. They allow you to mark updates as transitions, which tells React that they can be interrupted and avoid going back to Suspense fallbacks for already visible content.

- [`React.startTransition`](#starttransition)
- [`React.useTransition`](/docs/hooks-reference.html#usetransition)

### Hooks {#hooks}

*Hooks* React 16.8-д нэмэгдсэн шинэ нэмэлт юм. Тэд төлөв болон React-н бусад боломжуудыг класс бичихгүйгээр ашиглах боломжийг олгож байна. Hooks нь [өөрийн гэсэн баримтжуулалтын хэсэгтэй](/docs/hooks-intro.html) бөгөөд тусдаа API-н заалттай:

- [Basic Hooks](/docs/hooks-reference.html#basic-hooks)
  - [`useState`](/docs/hooks-reference.html#usestate)
  - [`useEffect`](/docs/hooks-reference.html#useeffect)
  - [`useContext`](/docs/hooks-reference.html#usecontext)
- [Additional Hooks](/docs/hooks-reference.html#additional-hooks)
  - [`useReducer`](/docs/hooks-reference.html#usereducer)
  - [`useCallback`](/docs/hooks-reference.html#usecallback)
  - [`useMemo`](/docs/hooks-reference.html#usememo)
  - [`useRef`](/docs/hooks-reference.html#useref)
  - [`useImperativeHandle`](/docs/hooks-reference.html#useimperativehandle)
  - [`useLayoutEffect`](/docs/hooks-reference.html#uselayouteffect)
  - [`useDebugValue`](/docs/hooks-reference.html#usedebugvalue)
  - [`useDeferredValue`](/docs/hooks-reference.html#usedeferredvalue)
  - [`useTransition`](/docs/hooks-reference.html#usetransition)
  - [`useId`](/docs/hooks-reference.html#useid)
- [Library Hooks](/docs/hooks-reference.html#library-hooks)
  - [`useSyncExternalStore`](/docs/hooks-reference.html#usesyncexternalstore)
  - [`useInsertionEffect`](/docs/hooks-reference.html#useinsertioneffect)

* * *

## Reference {#reference}

### `React.Component` {#reactcomponent}

`React.Component` бол React компонентуудын [ES6 классууд](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) ашиглаж тодорхойлж байгаа үеийн үндсэн класс юм:

```javascript
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

`React.Component` классын шинж чанар болон функцуудыг жагсаалтыг [React.Component API Reference](/docs/react-component.html)-с харна уу.

* * *

### `React.PureComponent` {#reactpurecomponent}

`React.PureComponent` нь [`React.Component`](#reactcomponent)-тэй төстэй. Тэдгээрийн ялгаа нь [`React.Component`](#reactcomponent) [`shouldComponentUpdate()`](/docs/react-component.html#shouldcomponentupdate) аргийг хэрэгжүүлдэггүй бөгөөд харин `React.PureComponent` нь үүнийг өнгөц шинж чанар болон төлвийн харьцуулалтаар хэрэгжүүлдэг.

Хэрэв таны React компонентийн `render()` функц нь ижил шинж чанар болон төлөвт ижил үр дүн дүрсэлдэг бол хурдыг нэмэх үүднээс зарим тохиолдолд `React.PureComponent` ашиглаж болно.

> Анхаар
>
> `React.PureComponent`-н `shouldComponentUpdate()` арга нь объектуудыг өнгөцхөн харьцуулдаг. Хэрэв тэдгээр нь цогц өгөгдлийн бүтэц ашигладаг бол илүү гүн түвшний ялгаа дээр дээр худлаа үр дүн үзүүлж болзошгүй. `PureComponent`-г зөвхөн энгийн шинж чанартай эсвэл [`forceUpdate()`](/docs/react-component.html#forceupdate)-г таны өгөгдлийн бүтэц гүн түвшинд өөрчлөгдснийг мэдвэл дуудан ашиглана. Эсвэл [immutable objects](https://facebook.github.io/immutable-js/) ашиглан хурдан харьцуулалтыг гүн түвшинд хийж болно.
>
> Тодруулбал `React.PureComponent`-н`shouldComponentUpdate()` нь шинж чанарын шинэчлэлүүдийг компонентийн дэд мод дээр алгасдаг. Мөн бүх дэд компонентууд нь "pure" байгааг нягтлах хэрэгтэй.

* * *

### `React.memo` {#reactmemo}

```javascript
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
```
`React.memo` бол [дээд түвшний компонент](/docs/higher-order-components.html).

Хэрвээ таны компонент өгөгдсөн пропсийг рендер хийдэг бол, үр ашигтай ажиллуулахын тулд тухайн компонентийг `React.memo` дотор оруулж болно. Ингэснээр React энэ компонентийг дахин рендер хийж цаг алдалгүй өмнөх рендер хийж байсан үр дүнг шууд харуулна. 

`React.memo` нь зөвхөн проп өөрчлөлтийг шалгадаг. Хэрвээ функц компонент тань дотроо [`useState`](/docs/hooks-state.html) эсвэл [`useContext`](/docs/hooks-reference.html#usecontext) ашигласан байсан ч гэсэн `React.memo` дотор л зөвхөн state эсвэл context өөрчлөгдөх үед л дахин рендер хийгдэнэ.

Нэмэлтээр илүү шалгалт хийх шаардлагатай бол хоёр дахь аргумент оруулан шалгаж болно. Уг хоёр дахь аргумент байхгүй нөхцөлд пропсийг өнгөцхөн харьцуулалт хийдэг. 

```javascript
function MyComponent(props) {
  /* render using props */
}
function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
}
export default React.memo(MyComponent, areEqual);
```

Энэ арга нь зөвхөн **[хурдны сайжруулалтад](/docs/optimizing-performance.html) зориулсан.** Дүрслэгдэхээс "сэргийлэхэд" ганцхан найдаж болохгүй энэ нь гажуудал үүсгэж болно.

> Анхаар
>
> Класс компонентийн [`shouldComponentUpdate()`](/docs/react-component.html#shouldcomponentupdate) аргаас өөр нь `areEqual` функц нь хэрэв шинж чанарууд адилхан бол `true` өөр бол `false` утга буцаана. Энэ нь `shouldComponentUpdate`-н урвуу юм.

* * *

### `createElement()` {#createelement}

```javascript
React.createElement(
  type,
  [props],
  [...children]
)
```

Өгөгдсөн төрлөөр шинэ [React element](/docs/rendering-elements.html) үүсгэн буцаана. Төрлийн аргумент нь тагийн нэр(`'div'` эсвэл `'span'`), [React component](/docs/components-and-props.html) төрөл(класс эсвэл функц), эсвэл [React fragment](#reactfragment) төрөл байдаг.

[JSX](/docs/introducing-jsx.html) ашиглан бичигдсэн код нь `React.createElement()` ашиглан хөрвүүлэгддэг. Та `React.createElement()`-г JSX ашиглаж байгаа үед дуудах хэрэггүй. Илүү [JSX-гүй React](/docs/react-without-jsx.html)-с харна уу.

* * *

### `cloneElement()` {#cloneelement}

```
React.cloneElement(
  element,
  [config],
  [...children]
)
```

React элементийг `element`-г эхлэлийн цэг болгон ашиглаж хувилаад шинээр үүсгэн буцаана. Үр дүнд үүсэх элемент нь эх элементийнхаа шинж чанарыг өнгөцхөн хуулбарлана. Шинэ хүү нь байгаа хүүг сольдог. `key` болон `ref` эх элементээсээ нөөцлөгддөг.

`React.cloneElement()` дараахтай бараг ижил:

```js
<element.type {...element.props} {...props}>{children}</element.type>
```

Энэ нь мөн `ref`-г нөөцөлдөг. Өөрөөр хэлбэл хүү элемент `ref` дээр байвал, та түүнийг эцгээс нь булаана. Таны шинэ элементэд ижил `ref` байна.

Энэ API нь хуучирсан `React.addons.cloneWithProps()`-н солигдох хувилбар болон танилцуулагдсан.

* * *

### `createFactory()` {#createfactory}

```javascript
React.createFactory(type)
```

Өгөгдсөн төрлөөр React элемент бүтээх функц буцаадаг. [`React.createElement()`](#createelement) шиг төрөл аргумент нь тагийн нэр(`'div'` эсвэл `'span'`), [React component](/docs/components-and-props.html) төрөл(класс эсвэл функц), эсвэл [React fragment](#reactfragment) төрөл байж болно.

Энэ туслагч нь ирээдүйн хэрэглээ гэж үзэж байгаа учир JSX эсвэл `React.createElement()` шууд ашиглаж байгаа аль тохиолдолд хэрэглэхийг уриалж байна.

You will not typically invoke `React.createFactory()` directly if you are using JSX. See [React Without JSX](/docs/react-without-jsx.html) to learn more.
Та `React.createFactory()`-г JSX ашиглаж байгаа үед дуудах хэрэггүй. Илүү [JSX-гүй React](/docs/react-without-jsx.html)-с харна уу.

* * *

### `isValidElement()` {#isvalidelement}

```javascript
React.isValidElement(object)
```

Объект нь React элемент эсэхийг баталгаажуулдаг.`true` эсвэл `false` буцаана.

* * *

### `React.Children` {#reactchildren}

`React.Children` нь `this.props.children` өгөгдлийн бүтэцтэй ажиллах боломжийг олгодог.

#### `React.Children.map` {#reactchildrenmap}

```javascript
React.Children.map(children, function[(thisArg)])
```

`children`-д байгаа хүү болгон дээр `thisArg`-г заасан функцийг ажиллуулдаг. Хэрэв `children` жагсаалт бол түүгээр аялан жагсаалтад байгаа хүү болгон дээр функц дуудагдана. Хэрэв хүү `null` эсвэл `undefined` бол энэ арга нь `null` эсвэл `undefined`-г жагсаалтын оронд буцаадаг.

> Анхаар
>
> Хэрэв `children` нь `Fragment` бол нэг хүүтэй гэж үзэн аяладаггүй.

#### `React.Children.forEach` {#reactchildrenforeach}

```javascript
React.Children.forEach(children, function[(thisArg)])
```

[`React.Children.map()`](#reactchildrenmap) шиг боловч жагсаалт буцаадаггүй.

#### `React.Children.count` {#reactchildrencount}

```javascript
React.Children.count(children)
```

Компонентийн нийт `children`-үүдийн тоог буцаадаг ба `map` эсвэл `forEach` дуудагдах тоотой адил юм.

#### `React.Children.only` {#reactchildrenonly}

```javascript
React.Children.only(children)
```

Ганцхан хүүтэйг баталгаажуулан түүнийг буцаана. Олон хүүтэй бол алдаа шиддэг.

> Анхаар:
>
>`React.Children.only()` [`React.Children.map()`](#reactchildrenmap)-н буцаах утгийг хүлээж авдаггүй бөгөөд энэ нь жагсаалт болохоос React элемент биш юм.

#### `React.Children.toArray` {#reactchildrentoarray}

```javascript
React.Children.toArray(children)
```

`children` өгөгдлийн бүтцийг хүү болгон түлхүүр оноосон жагсаалт болгон буцаана. Хүүхдүүдийн цуглуулгийг дүрслэхдээ өөрчлөхөд хэрэг болдог ба тусгайлан дахин эрэмблэх болон тодорхой хэсгийг салган хэрэглэхэд маш үр дүнтэй байдаг.

> Note:
>
> `React.Children.toArray()` хүүнүүдийн жагсаалт нь дотогшоо дахин дамжсан бол(nested arrays) энгийн жагсаалт болгохдоо түлхүүрний утга өөрчлөгдөж болно. `toArray` элемент бүрийн түлхүүрийн урд түүнийг агуулсан хүрээнийг түлхүүрийг угтвар болгон ашигладаг.

* * *

### `React.Fragment` {#reactfragment}

`React.Fragment` компонент тань олон элементийг `render()` функц дотор нэмэлт DOM элемент үүсгэхгүйгээр ашиглаж боломж олгодог:

```javascript
render() {
  return (
    <React.Fragment>
      Some text.
      <h2>A heading</h2>
    </React.Fragment>
  );
}
```

Та мөн богино `<></>` бичиглэл ашиглаж болно Илүү дэлгэрэнгүйг [React v16.2.0:  Fragments-н сайжруулан дэмжлэг](/blog/2017/11/28/react-v16.2.0-fragment-support.html)-с харна уу.


### `React.createRef` {#reactcreateref}

`React.createRef` нь React элементийн ref аттрибутад хавсаргагддаг [ref](/docs/refs-and-the-dom.html) үүсгэдэг.
`embed:16-3-release-blog-post/create-ref-example.js`

### `React.forwardRef` {#reactforwardref}

`React.forwardRef` нь [ref](/docs/refs-and-the-dom.html)-г React компонентод аттрибут болгон хүлээн авч өөр нэг модны доор байгаа компонент руу дамжуулдаг. Энэ аргачлал нь тийм ч нийтлэг биш бөгөөд ихэвчлэн дараах хоёр хэрэглээнд ашиглагддаг:

* [Forwarding refs to DOM components](/docs/forwarding-refs.html#forwarding-refs-to-dom-components)
* [Forwarding refs in higher-order-components](/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components)

`React.forwardRef` дүрслэх функцийг аргумент болгон хүлээн авдаг. React  энэ функцийг нь `props` болон `ref` хоёр аргументуудаар дууддаг. Энэ функц нь React зангилаа буцаадаг.

`embed:reference-react-forward-ref.js`

Дээрх жишээнд React `ref`-г `<FancyButton ref={ref}>` элемент руу хоёрдах аргумент болгон дамжуулж дүрслэх функцийн дотор талд `React.forwardRef` дуудалтаар ашиглаж байна. Энэ дүрслэх функц нь `ref`-г `<button ref={ref}>` элемент руу дамжуулж байна.

Үр дүнд React ref-г хавсаргасны дараа, `ref.current` нь DOM элементийн `<button>` тохиолдол руу заах болно.

Илүү дэлгэрэнгүй [forwarding refs](/docs/forwarding-refs.html) хэсгээг харна уу.

### `React.lazy` {#reactlazy}

`React.lazy()` компонентийг динамикаар ачаалдаг.  Энэ нь эхний дүрслэл дээр хэрэглэгдэхгүй компонентуудын дараа нь ачаалан багцын хэмжээг багасгадаг.

Та үүнийг хэрхэн ашиглахийг бидний [код салгах баримтжуулалт](/docs/code-splitting.html#reactlazy)-аас харна уу. Мөн та энэ [нийтлэлийг](https://medium.com/@pomber/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d) уншин хэрхэн ашиглахийг илүү дэлгэрэнгүй тайлбарласныг уншиж болно.

```js
// This component is loaded dynamically
const SomeComponent = React.lazy(() => import('./SomeComponent'));
```

Дүрслэлтийн модондоо `lazy` компонентийг дүрслэхэд  `<React.Suspense>` дээд талд байх ёстойг анхаарах хэрэгтэй. Энэ нь танд ачаалж буй мэдээлэл дүрсэлдэг.

<<<<<<< HEAD
> **Анхаар**
>
> `React.lazy`-г динамик импорт дээр хэрэглэгч Жаваскрипт орчинд Promise хүчин төгөлдөр байх шаардлагатай. IE11 болон түүнээс доош хувилбарт polyfill шаарддаг.

### `React.Suspense` {#reactsuspense}

`React.Suspense` таньд уншиж байгаа мэдээдэл модонд байгаа компонент хараахан бэлэн болоогүй үед дүрслэх боломжийг олгоно. Одоогоор `<React.Suspense>` **зөвхөн** залхуу тохиолдолд дэмжигдэнэ:
=======
### `React.Suspense` {#reactsuspense}

`React.Suspense` lets you specify the loading indicator in case some components in the tree below it are not yet ready to render. In the future we plan to let `Suspense` handle more scenarios such as data fetching. You can read about this in [our roadmap](/blog/2018/11/27/react-16-roadmap.html).

Today, lazy loading components is the **only** use case supported by `<React.Suspense>`:
>>>>>>> 07dbd86ca421c262157af673a2584a40fd3b2450

```js
// Энэ компонент динамикаар ачаалагдсан
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    // Displays <Spinner> until OtherComponent loads
    <React.Suspense fallback={<Spinner />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}
```

Энэ бидний [код салгах заавар](/docs/code-splitting.html#reactlazy) баримтжуулагдсан. `lazy` компононеь нь `Suspense` модны гүнд байж болох ба тэдгээрийг нэг бүрчлэн хүрээлүүлэх шаардлагагүй. Хамгийн сайн `<Suspense>`-г байршуулах байршил бол таний ачаалаж байгаа мэдээлэл харах газар ч `lazy()`-г код салгахдаа хүссэн газраа ашигла.

<<<<<<< HEAD
 Одоогоор дэмжигдээгүй байгаа ч ирээдүйд бид өгөгдөл дуудах гэх мэт өөр тохиолдлууд `Suspense`-р удирдахийг дэмжих болно. Та энэ талаар [бидний төлөвлөгөөнөөс](/blog/2018/11/27/react-16-roadmap.html) харж болно.

>Анхаар:
>
>`React.lazy()` болон `<React.Suspense>` нь `ReactDOMServer`-р хараахан дэмжигдээгүй байна. Энэ бидний мэдэж байгаа хязгаарлалт бөгөөд ирээдүйд шийдэгдэх болно.
=======
> Note
> 
> For content that is already shown to the user, switching back to a loading indicator can be disorienting. It is sometimes better to show the "old" UI while the new UI is being prepared. To do this, you can use the new transition APIs [`startTransition`](#starttransition) and [`useTransition`](/docs/hooks-reference.html#usetransition) to mark updates as transitions and avoid unexpected fallbacks.

#### `React.Suspense` in Server Side Rendering {#reactsuspense-in-server-side-rendering}
During server side rendering Suspense Boundaries allow you to flush your application in smaller chunks by suspending.
When a component suspends we schedule a low priority task to render the closest Suspense boundary's fallback. If the component unsuspends before we flush the fallback then we send down the actual content and throw away the fallback.

#### `React.Suspense` during hydration {#reactsuspense-during-hydration}
Suspense boundaries depend on their parent boundaries being hydrated before they can hydrate, but they can hydrate independently from sibling boundaries. Events on a boundary before its hydrated will cause the boundary to hydrate at 
a higher priority than neighboring boundaries. [Read more](https://github.com/reactwg/react-18/discussions/130)

### `React.startTransition` {#starttransition}

```js
React.startTransition(callback)
```
`React.startTransition` lets you mark updates inside the provided callback as transitions. This method is designed to be used when [`React.useTransition`](/docs/hooks-reference.html#usetransition) is not available.

> Note:
>
> Updates in a transition yield to more urgent updates such as clicks.
>
> Updates in a transitions will not show a fallback for re-suspended content, allowing the user to continue interacting while rendering the update.
>
> `React.startTransition` does not provide an `isPending` flag. To track the pending status of a transition see [`React.useTransition`](/docs/hooks-reference.html#usetransition).
>>>>>>> 07dbd86ca421c262157af673a2584a40fd3b2450
