---
id: react-component
title: React.Component
layout: docs
category: Reference
permalink: docs/react-component.html
redirect_from:
  - "docs/component-api.html"
  - "docs/component-specs.html"
  - "docs/component-specs-ko-KR.html"
  - "docs/component-specs-zh-CN.html"
  - "tips/UNSAFE_componentWillReceiveProps-not-triggered-after-mounting.html"
  - "tips/dom-event-listeners.html"
  - "tips/initial-ajax.html"
  - "tips/use-react-with-other-libraries.html"
---

Энэ хуудсанд React компонент классын тодорхойлолтод зориулсан нарийвчилсан API reference-ын тухай мэдээлэл багтсан. Мэдээлэл нь[Компонент ба Пропс](/docs/components-and-props.html), [Төлөв ба Амьдралын мөчлөг](/docs/state-and-lifecycle.html) гэх мэт React-ын үндсэн ойлголттой хүмүүст зориулсан. Эдгээрийг мэдэхгүй бол эхлээд уншиж судлахыг зөвлөе.


## Тойм {#overview}

React-д та компонентыг класс эсвэл функц гэж тодорхойлж болно. Класс гэж тодорхойлогдсон компонентууд нь илүү онцлог шинжтэй ба тэдгээрийн тухай энд дэлгэрэнгүй өгүүлсэн. React компонентын классыг тодорхойлохын тулд та `React.Component`-ыг өргөтгөх хэрэгтэй:

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

`React.Component` дэд класс дотор *заавал* тодорхойлох ёстой метод нь [`render()`](#render) юм. Бусад методын хувьд бол тодорхойлох эсэх нь таны сонголт.

**Өөрийн гэсэн суурь компонентуудын класс үүсгэхгүй байхыг бид зөвлөх байна.** React компонентод [кодыг дахин ашиглахдаа 
удамших ашиглахаас илүү найруулж дахин бичдэг](/docs/composition-vs-inheritance.html).

>Тэмдэглэл:
>
>ES6 класс синтакс ашиглахыг React заавал шаардахгүй. Үүнээс зайлсхийхийг хүсвэл `create-react-class`  модуль ашиглах эсвэл үүнтэй төстэй хийсвэрлэл ашиглаж болно. Лавшруулж судлахыг хүсвэл [ES6-гүйгээр React-ыг ашиглах](/docs/react-without-es6.html) гэдгийг уншина уу. 

### Компонентын амьдралын мөчлөг {#the-component-lifecycle}

Компонент тус бүр нь явцын дунд тухайн нэг цаг үед кодыг дарж тодорхойлон ажиллуулах боломжтой хэд хэдэн "lifecycle methods"-той байна.  **Илүү хялбар аргаар гэвэл [амьдралын мөчлөгийн энэ диаграмм](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)-ыг ашиглаж болно.** Доорх жагсаалтад түгээмэл ашиглагддаг амьдралын мөчлөгийн методуудыг **тод**-оор тэмдэглэсэн байгаа. Бусад нь ховор ашиглагддаг. 

#### Mount хийх {#mounting}

Аливаа нэг компонентын instance үүсэх үед эдгээр метод нь дарааллаараа дуудагдаж, DOM руу ордог:

- [**`constructor()`**](#constructor)
- [`static getDerivedStateFromProps()`](#static-getderivedstatefromprops)
- [**`render()`**](#render)
- [**`componentDidMount()`**](#componentdidmount)

>Тэмдэглэл:
>
>Методууд нь эцэг гэж тодорхойлогдох бөгөөд шинэ кодондоо эдгээрээс [зайлсхийх](/blog/2018/03/27/update-on-async-rendering.html) хэрэгтэй:
>
>- [`UNSAFE_componentWillMount()`](#unsafe_componentwillmount)

#### Шинэчлэх {#updating}

Пропст эсвэл төлөвт өөрчлөлт орох үед шинэчлэл хийгдэх болдог. Аливаа нэг компонентыг дахин рендэр хийх үед эдгээр методууд нь дарааллаараа дуудагдана:

- [`static getDerivedStateFromProps()`](#static-getderivedstatefromprops)
- [`shouldComponentUpdate()`](#shouldcomponentupdate)
- [**`render()`**](#render)
- [`getSnapshotBeforeUpdate()`](#getsnapshotbeforeupdate)
- [**`componentDidUpdate()`**](#componentdidupdate)

>Тэмдэглэл:
>
>Методууд нь эцэг гэж тодорхойлогдох бөгөөд шинэ код дээрээ эдгээрээс [зайлсхийх](/blog/2018/03/27/update-on-async-rendering.html) хэрэгтэй:
>
>- [`UNSAFE_componentWillUpdate()`](#unsafe_componentwillupdate)
>- [`UNSAFE_componentWillReceiveProps()`](#unsafe_componentwillreceiveprops)

#### Unmount хийх {#unmounting}

DOM-оос компонентыг хасах үед энэ методыг дуудна:

- [**`componentWillUnmount()`**](#componentwillunmount)

#### Алдаа зохицуулах {#error-handling}

Рендэр хийж байх үед, амьдралын мөчлөг методын үед эсвэл хүү компонентын байгуулагчид ямар нэг алдаа гарсан үед энэ методыг дуудна. 

- [`static getDerivedStateFromError()`](#static-getderivedstatefromerror)
- [`componentDidCatch()`](#componentdidcatch)

### Бусад API-ууд {#other-apis}

Компонент тус бүрт өөр API-ууд байна:

  - [`setState()`](#setstate)
  - [`forceUpdate()`](#forceupdate)

### Class Properties {#class-properties}

  - [`defaultProps`](#defaultprops)
  - [`displayName`](#displayname)

### Instance Properties {#instance-properties}

  - [`props`](#props)
  - [`state`](#state)

* * *

## Reference {#reference}

### Түгээмэл ашиглагддаг Амьдралын мөчлөг методууд {#commonly-used-lifecycle-methods}. **[Амьдралын мөчлөгийн тухай энэхүү диаграммаас](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) харна уу.**

### `render()` {#render}

```javascript
render()
```

Аливаа класс компонентод зайлшгүй шаардлагатай байдаг нэг метод нь `render()` юм.

Дуудагдахдаа  `this.props`, `this.state` -ыг шалгаад доорх хоёр төрлийн аль нэгэн рүү нь буцна:

- **React элементүүд.** Ихэвчлэн [JSX](/docs/introducing-jsx.html) ашиглан үүсдэг. Жишээ нь  `<div />` болон `<MyComponent />` нь React элементүүд бөгөөд  DOM node-ыг эсвэл өөр хэрэглэгчийн тодорхойлсон компонентыг рендэр хийх зааврыг React-д өгөх гэх мэт.

- **Массив ба фрагментууд.** рендэрээс олон элемент рүү буцаадаг. Дэлгэрэнгүйг [фрагментууд](/docs/fragments.html) гэснээс харна уу. 
- **Порталууд**. Хүү компонентуудыг өөр DOM салбарт рендэр хийхэд тусална. Дэлгэрэнгүйг [порталууд](/docs/portals.html) гэснээс харна уу.
- **Стринг ба тоонууд.** DOM-д эдгээр нь текст нод шиг рендэр хийдэг. 
- **Booleans эсвэл `null`**. Юуг ч рендэр хийхгүй. (`test` нь boolean байх үед `return test && <Child />` төлөвийг дэмжих зорилгоор ер нь бол байдаг.)

`render()` функц нь цэвэр байх хэрэгтэй. Цэвэр гэдэг нь компонентын төлөвийг өөрчилдөггүй, дуудагдах бүртээ ижил үр дүн үзүүлдэг, бусад хөтөчтэй шууд интекраци хийдэггүй байхыг хэлж байгаа юм. 

Хэрэв та өөр хөтөчтэй интекраци хийдэг байлгахыг хүсвэл `componentDidMount()`  дээр ажлаа хийх эсвэл амьдралын мөчлөгийн өөр метод ашиглах хэрэгтэй. `render()` функцыг цэвэр байлгавал компонентуудад амар байдаг. 

> Тэмдэглэл
>
> Хэрэв [`shouldComponentUpdate()`](#shouldcomponentupdate) нь false гэж буцвал `render()` дуудагдахгүй.

* * *

### `constructor()` {#constructor}

```javascript
constructor(props)
```

**Төлөв эхлүүлэн, методоо холбохгүй бол та React компонентдоо байгуулагч ажиллуулах шаардлагагүй.**

React компонентын байгуулагч нь mount хийхээс өмнө дуудагддаг. `React.Component` дэд класст зориулж байгуулагч ажиллуулахдаа та `super(props)`-ыг бусдаас түрүүлж дуудах нь зүйтэй. Тэгэхгүй бол `this.props` нь байгуулагч дотор тодорхойлогдохгүй үлдэх бөгөөд алдаа гарч болзошгүй. 

Ер нь бол React байгуулагчийг зөвхөн хоёр зорилгоор ашиглагддаг:

* Объектыг `this.state` руу оруулж, [Локал төвлийг](/docs/state-and-lifecycle.html) эхлүүлэх
* [Эвент зохицуулагч](/docs/handling-events.html) методуудыг instance-тай холбох.

Та `constructor()` дотор **`setState()`-ыг дуудаж болохгүй**. Оронд нь таны компонент локал төлөв ашиглах хэрэгтэй бол шууд байгуулагч дотор **эхний төлөвийг `this.state` руу оруулна**:

```js
constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```
`this.state`-ыг шууд өгөх ганц байгуулагчид л өгч болно. Өөр бусад бүх метод дээр бол `this.setState()`-ыг ашиглах хэрэгтэй. 
Байгуулагч дотор төлөв өөрчлөх эсвэл захиалга гаргахаас зайлсхийх хэрэгтэй. Оронд нь `componentDidMount()`  ашигла. 


>Тэмдэглэл
>
>**Төлөв рүү пропс хуулахаас сэрэмжил! Түгээмэл гардаг алдаа нь энэ:**
>
>```js
>constructor(props) {
>  super(props);
>  // Don't do this!
>  this.state = { color: props.color };
>}
>```
>
>Ингэх шаардлагагүй бөгөөд (та `this.props.color`-ыг оронд нь шууд ашиглаж болно), алдаа үүсгэдэг (`color` пропт орсон шинэчлэл нь төлөвт нөлөөлөхгүй).
>
>**Та хэрэв пропт орсон шинэчлэлийг зориуд  үл хайхрахыг хүсвэл ингэж болно.** Тийм тохиолдолд пропыг `initialColor` эсвэл `defaultColor`  гэж нэрийг нь өөрчилж болно. Та тэгээд шаардлагатай бол компонентын [ `key`-г өөрчлөн](/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) дотоод төлөвийг нь хүчээр "reset" хийж болно. 
>
>Хэрэв та зарим төлөв нь пропоос хамаарч байна гэж үзвэл хэрхэх тухай [Төлөв удамшихаас сэргийлэх тухай блог нийтлэлээс](/blog/2018/06/07/you-probably-dont-need-derived-state.html) уншаарай.


* * *

### `componentDidMount()` {#componentdidmount}

```javascript
componentDidMount()
```

Компонент mount хийгдсэний дараа тэр даруй `componentDidMount()` дуудагддаг. DOM nodes шаардах эхлэх процесс энд явагдах учиртай. Хэрэв та remote endpoint-оос өгөгдөл ачаалах бол энд сүлжээний хүсэлтийг instance болгох хэрэгтэй6

Аливаа subscription тохиргоо хийхэд уг метод тохиромжтой. Энэ тохиолдолд `componentWillUnmount()`-тоо unsubscribe  хийхээ мартуузай. 

Та `componentDidMount()` дотор **`setState()`-ыг шууд дуудаж болно**. Илүү рендэр хийгдэх боловч хөтөч дэлгэц дээрхийг шинэчлэхээс өмнө болоод өнгөрнө. Энэ тохиолдолд `render()` хоёр удаа дуудагдах боловч хэрэглэгч дундын төлөвийг нь харахгүй гэсэн үг юм. Үүнийг тэгэхдээ ашиглахдаа сэрэмжтэй байх хэрэгтэй. Яагаад гэвэл заримдаа ажиллагаанд саатал гарах нь бий. Ихэнх тохиолдолд бол та оронд нь`constructor()` дотор эхний төлвийг оруулж болно. Хэмжээ, байрлалаас хамааралтай зүйлсийг рендэр хийхийн өмнө DOM node-ыг хэмжих үед модалууд, tooltips гэх мэтэд энэ нь шаардлагатай байдаг. 

* * *

### `componentDidUpdate()` {#componentdidupdate}

```javascript
componentDidUpdate(prevProps, prevState, snapshot)
```

Шинэчлэгдсэний дараа тэр даруйд  `componentDidUpdate()` дуудагдана. Эхний рендэр хийх үед уг метод дуудагддаггүй. 

Компонент шинэчлэгдсэн үед DOM дээр ажиллах боломж гэж ашиглах хэрэгтэй. Мөн одоогийн пропсыг өмнөх пропстой харьцуулж байгаа тохиолдолд сүлжээний хүсэлт илгээхэд тохиромжтой (пропс өөрчлөгдөөгүй бол сүлжээний хүсэлт явуулаад байх шаардлагагүй ).

```js
componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

Та `componentDidUpdate()`-д  **`setState()`-ыг тэр дор нь дуудаж болох ч** дээрх жишээ шиг **нөхцөлтэй байх ёстой** гэдгийг анхаарна уу. Тэгэхгүй бол эцэс төгсгөлгүй loop үүснэ. Мөн дахин рендэр хийх илүү үйлдэл гарах бол хэрэглэгчид харагдахгүй ч гэсэн компонентын ажиллагаанд нөлөөлөх болно. Хэрэв та дээрээс ирэх пропт зарим төлвийг "яг хуулах" гэж байгаа бол пропыг оронд нь шууд ашиглах хэрэгтэй.[Пропсийг төлөв рүү хуулах үед яагаад bugs үүсдэг вэ?](/blog/2018/06/07/you-probably-dont-need-derived-state.html) гэдгээс дэлгэрэнгүй уншина уу.

Хэрэв таны компонент `getSnapshotBeforeUpdate()` амьдралын мөчлөгийг (тун ховор тохиолдол) ажиллуулбал буцаах утга нь `componentDidUpdate()`-т гуравдагч "snapshot" параметр бол дамжуулагдана. Тэгэхгүй бол уг параметр нь тодорхойлогдохгүй. 

> Тэмдэглэл
>
> [`shouldComponentUpdate()`](#shouldcomponentupdate)  нь false гэвэл `componentDidUpdate()` нь дуудагдахгүй. 

* * *

### `componentWillUnmount()` {#componentwillunmount}

```javascript
componentWillUnmount()
```

Компонент unmount хийгдэж, устгагдахын өмнө `componentWillUnmount()` дуудагддаг. Хугацаа хэмжигчийг ажиллахгүй болгох, сүлжээний хүсэлтийг цуцлах, `componentDidMount()`-т үүсгэсэн subscription-уудыг цэвэрлэх гэх мэт хэрэгтэй цэвэрлэгээний ажлаа хийгээрэй.

Тухайн компонент хэзээ ч дахин рендэр хийгдэхгүй тул `componentWillUnmount()` дахь  **`setState()`-ыг дуудах хэрэггүй**
Компонентын instance нь unmount болсон бол дахин mount хийж болохгүй.

* * *

### Ховор ашиглагддаг Амьдралын мөчлөгийн Методууд {#rarely-used-lifecycle-methods}

Энэ хэсэгт ховор ашиглагддаг методуудын тухай өгүүлнэ. Зарим метод хааяа нэг хэрэг болдог ч ихэнхдээ нь хэрэг болохгүй байх нь бий. . **Та эдгээр методуудын ихэнхийг [энэхүү амьдралын мөчлөг диаграм](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)-аас харж болно. Дээд хэсэгт байх "Show less common lifecycles" гэсэн дээр дараад харна**


### `shouldComponentUpdate()` {#shouldcomponentupdate}

```javascript
shouldComponentUpdate(nextProps, nextState)
```

Төлөв эсвэл пропс дахь өөрчлөлт компонентын үр дүнд нөлөөлөөгүй тухай React-д мэдэгдэхдээ `shouldComponentUpdate()`  ашиглаарай. Төлөв өөрчлөгдөх бүрт дахин рендэр хийх нь ойлгомжтой үйлдэл ба ихэнхдээ энэ нь ч дээр байдаг. 

Шинэ пропс эсвэл төлөв хүлээн авах үед рендэр хийхийн өмнө `shouldComponentUpdate()` дуудагддаг. `true` гэвэл буцаж шилждэг. Анхны удаа рендэр хийхэд эсвэл `forceUpdate()` ашиглагдаж байгаа үед уг метод дуудагддаггүй.

Уг метод нь **[performance optimization](/docs/optimizing-performance.html).** хэлбэрээр байна. Рендэр хийхээс "сэргийлнэ" гэж найдаад хэрэггүй. Учир нь bugs үүсгэх магадлалтай. `shouldComponentUpdate()` гэж гараар бичихийн оронд  **built-in [`PureComponent`](/docs/react-api.html#reactpurecomponent) ашиглаарай**. `PureComponent` нь пропс, төлөвийн өнгөц харьцуулалт (shallow comparison) мэт ажилладаг ба хэрэгтэй update-ыг алгасахгүй байхад тусална.  

Хэрэв та гараар бичнэ гэдэгтээ өөртөө итгэлтэй байгаа бол `this.props`-ыг `nextProps`-той, `this.state`-ыг `nextState`-тай харьцуулж, React-д тухайн update-ыг алгасаж болно гэдгийг мэдэгдэхдээ `false`-руу буцна. `false` руу буцах нь хүү компонентыг *тэдний* төлөв өөрчлөгдөх үед дахин рендэр хийхийг хориглохгүй гэдгийг анхаарна уу. 

Эн тэнцүү байгаа эсэхийг шалгах эсвэл `shouldComponentUpdate()`-д `JSON.stringify()` ашиглахгүй байхыг зөвлөе. Үр дүнгүй бөгөөд ажиллагаанд сөргөөр нөлөөлдөг.

Одоо бол `shouldComponentUpdate()`  нь  `false` байвал [`UNSAFE_componentWillUpdate()`](#unsafe_componentwillupdate), [`render()`](#render), [`componentDidUpdate()`](#componentdidupdate) нар дуудагдахгүй. Цаашид React нь `shouldComponentUpdate()`-ыг хатуу директив биш сануулга гэж хардаг болох байх. Гэхдээ компонентыг дахин рендэр хийх үед `false`  гарч ирнэ. 

* * *

### `static getDerivedStateFromProps()` {#static-getderivedstatefromprops}

```js
static getDerivedStateFromProps(props, state)
```

<<<<<<< HEAD
Эхний mount хийх гэж байхад дараа нь update хийх үед аль алинд нь рендэр методыг дуудахын өмнө `getDerivedStateFromProps` дуудагддаг. Төлөвийг шинэчлэхээр объектыг буцаана эсвэл юу ч шинэчлэлт хийхгүй, хүчингүй байна.
=======
`getDerivedStateFromProps` is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or `null` to update nothing.
>>>>>>> 954a16f1d358009505ae881afaefe463dc6388a5

Төлөв нь пропст орох өөрчлөлтөөс хамаарах [ховор тохиолдолд ашиглагдах](/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state) зориулалттай. Жишээ нь, өмнө болон дараагийн хүүг харьцуулж, алийг нь хөдөлгөөнд оруулж, алийг нь хасах вэ гэдгийг шийдэхэд туслах `<Transition>` компонентыг ажиллуулахад хэрэг болж болно. 

Төлөвийг удамшуулбал код нуршуу болох ба компонент ажиллахад бэрх болгодог. 
[Илүү энгийн өөр боломжуудыг хараад үзээрэй:](/blog/2018/06/07/you-probably-dont-need-derived-state.html)

* Хэрэв та пропст орсон өөрчлөлтөөс болж **төлөв өөрчлөх** (өгөгдөл хүлээн авах, анимейшн г.м) хэрэг гарвал [`componentDidUpdate`](#componentdidupdate) lifecycle-ыг ашиглаарай.

* Хэрэв та **проп өөрчлөгдөх үед зарим өгөгдлийг дахин тооцоолох хэрэг гарвал**, [memoization helper ашиглаарай](/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization).

* Хэрэв та **проп өөрчлөгдөх үед зарим төлвийг "reset" хийх хэрэгтэй бол**,  компонентыг [бүрэн удирдлагатай болгох](/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component) эсвэл [`key` ашиглан бүрэн удирдлагагүй болгоод](/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) үзээрэй .

Энэ метод нь компонентын instance-д хандаж чадахгүй. Хэрэв хүсвэл та классын тодорхойлолтын гадна компонентын пропс болон төлөвийн функцыг салгаж, `getDerivedStateFromProps()` болон бусад классын методын хооронд кодоо дахин ашиглаж болно. 

Ямар шалтгаанаар хамаагүй рендэр хийх *бүрт* уг метод нь ажиллана гэдгийг анхаарна уу. Эсрэгээрээ `UNSAFE_componentWillReceiveProps` нь локал `setState`-ын үр дүнд биш, эцэг нь дахин рендэр хийхийг шаардсан болохоор ажилладаг. 


* * *
v
### `getSnapshotBeforeUpdate()` {#getsnapshotbeforeupdate}

```javascript
getSnapshotBeforeUpdate(prevProps, prevState)
```

Хамгийн сүүлийн рендэр хийсэн үр дүн нь DOM г.м руу орохын яг өмнө `getSnapshotBeforeUpdate()`  дуудагддаг.  Энэ нь таны компонентыг өөрчлөлт орохоос өмнө DOM-оос зарим мэдээлэл (байрлалыг гүйлгэх г.м) авахад тусалдаг. Уг амьдралын мөчлөгийн буцаасан ямар ч утга `componentDidUpdate()` параметр руу дамжих болно. 

Хэдий ховор тохиолдох ч position scroll хийхэд тусгай арга шаарддаг чат thread гэхчлэн хэрэглэгчийн интерфэйст хэрэг болдог. 

Яг тухайн үеийн утга (эсвэл `null`) буцах учиртай. 

Жишээ нь:

`embed:react-component-reference/get-snapshot-before-update.js`


Дээрх жишээнүүд дээр "render" хийх үеийн амьдралын мөчлөг (`render` гэхчлэн) хооронд саатал үүсэж магадгүй тул  `getSnapshotBeforeUpdate` доторх `scrollHeight` проперти болон "commit" үеийн амьдралын мөчлөгийг (`getSnapshotBeforeUpdate`, `componentDidUpdate` г.м) унших нь чухал. .

* * *

### Error boundaries {#error-boundaries}

[Error boundaries](/docs/error-boundaries.html) гэдэг нь хүү компонентын модны хаа ч Javascript-ын алдааг барьж олж, алдаа гарсан компонентод биш fallback хэрэглэгчийн интерфэйс харуулдаг React компонентууд юм. Error boundaries нь рендэр хийх үед, амьдралын мөчлөгийн үед болон өөрөөс доошх бүтцийн бүх байгуулагч дахь алдааг олдог. 

Хэрэв амьдралын мөчлөгийн методуудын аль нэг нь (эсвэл хоёулаа) `static getDerivedStateFromError()` эсвэл `componentDidCatch()` байх юм бол error boundary нь класс компонент болдог. Эдгээр амьдралын мөчлөгөөс төлөвийг шинэчлэх юм бол доошх бүтэц дэх Javascript-ын засаагүй алдаануудыг олж, fallback UI-аар харуулдаг. 

Урьдчилан тооцоолоогүй нөхцөлд л дахин сэргээх зорилгоор error boundaries-ыг ашиглаарай; **компонент ажиллуулах зорилгоор ашиглаж болохгүй.**

Дэлгэрэнгүйг [*React 16-д алдаа засах нь*](/blog/2017/07/26/error-handling-in-react-16.html) гэснээс харна уу.

> Тэмдэглэл
> 
> Error boundaries нь зөвхөн бүтцийн модонд өөрөөс **доош** байгаа компонентуудад байгаа алдааг олдог. Өөрт байгаа алдааг error boundary олж чадахгүй. 


### `static getDerivedStateFromError()` {#static-getderivedstatefromerror}
```javascript
static getDerivedStateFromError(error)
```
Удамших компонентод  алдаа гарсны дараа уг амьдралын мөчлөг дуудагдана.
Параметрийн гаргасан алдааг мөн хүлээн авах ба төлөвийг шинэчлэх утгыг буцаадаг.

```js{7-10,13-16}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```

> Тэмдэглэл
>
> Рендэр хийх үед `getDerivedStateFromError()` дуудагддаг. Тиймээс төлөвийг өөрчилж болохгүй. 

Энэ тохиолдолд оронд нь `componentDidCatch()` ашиглаарай.

* * *

### `componentDidCatch()` {#componentdidcatch}

```javascript
componentDidCatch(error, info)
```

Удамшсан компонентоос алдаа гарсан тохиолдолд энэхүү амьдралын мөчлөг дуудагддаг. 
Хоёр параметр хүлээн авдаг:

1. `error` - Гарсан алдаа нь.
2. `info` -[алдаа гаргасан компонентын тухай мэдээлэл](/docs/error-boundaries.html#component-stack-traces) агуулсан  `componentStack` түлхүүртэй объект

"commit"  хийх үед `componentDidCatch()`  дуудагддаг. Тиймээс төлөв өөрчлөхийг зөвшөөрдөг. 

Алдаа бүртгэх зэрэгт ашиглаж болно:

```js{12-19}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    logComponentStackToMyService(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```

> Тэмдэглэл
> 
> Алдаа гарсан үед та `setState` дуудан `componentDidCatch()` ашиглан fallback UI-ыг рендэр хийж болно. Гэхдээ дараа дараагийн шинэ хувилбарт нь ингэж хийж болохгүй болчихно.


> Оронд нь fallback рендэрийн үед `static getDerivedStateFromError()` ашиглаарай.

* * *

### Legacy Lifecycle Methods {#legacy-lifecycle-methods}

Доорх амьдралын мөчлөгийн методууд нь "legacy" гэсэн тэмдэглэгээтэй байгаа. Хэдийгээр ажилладаг ч гэсэн шинэ кодонд тэднийг ашиглахгүй байхыг зөвлөж байна. Та [энэхүү блог нийтлэлээс](/blog/2018/03/27/update-on-async-rendering.html) legacy lifecycle methods-оос хэрхэн зайлсхийж болох тухай уншаарай. 


### `UNSAFE_componentWillMount()` {#unsafe_componentwillmount}

```javascript
UNSAFE_componentWillMount()
```

> Тэмдэглэл
>
> Энэхүү амьдралын мөчлөг нь өмнө `componentWillMount` гэсэн нэртэй байсан. Хувилбар 17 хүртэл энэ нэрээр ажиллах боломжтой. Компонентуудаа автоматаар шинэчлэхийн тулд [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) ашиглаарай.


Mount хийхээс өмнө `UNSAFE_componentWillMount()` дуудагдана. `render()` хийхээс өмнө дуудагдах тул энэ метод дээр `setState()`-ыг зэрэг дуудахад дахин нэмэлт рендэр хийгдэхгүй гэсэн үг. Ерөнхийдөө төлөв ажиллуулж эхлэхийн оронд `constructor()`  буюу байгуулагч ашиглахыг бид зөвлөдөг. 

Уг метод дээр төлөв өөрчлөх эсвэл subscription хийхээс зайлсхий. Хэрэгтэй бол оронд нь `componentDidMount()` ашиглаарай.

Сервер рендэр дээр дуудагддаг цор ганц амьдралын мөчлөг нь энэ юм. 

* * *

### `UNSAFE_componentWillReceiveProps()` {#unsafe_componentwillreceiveprops}

```javascript
UNSAFE_componentWillReceiveProps(nextProps)
```

> Тэмдэглэл
>
> Энэхүү амьдралын мөчлөг нь өмнө `componentWillReceiveProps` гэсэн нэртэй байсан. Хувилбар 17 хүртэл энэ нэрээр ажиллах боломжтой. Компонентуудаа автоматаар шинэчлэхийн тулд [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles)ашиглаарай.

> Тэмдэглэл:
>
> Амьдралын мөчлөгийн уг методыг ашиглах нь алдаа гарч, тогтворгүй ажиллагаанд хүргэж болзошгүй
>
> * Хэрэв та пропст гарсан өөрчлөлтөөс болж **төлөв өөрчлөх** (жишээ нь өгөгдөл авах, анимейшн хийх) хэрэгтэй бол [`componentDidUpdate`](#componentdidupdate) амьдралын мөчлөгийг ашиглаарай.
> * Хэрэв та **аливаа нэг проп өөрчлөгдөх үед зарим өгөгдлийг дахин тооцоолох** зорилгоор `componentWillReceiveProps`-ыг ашигласан бол [memoization helper-ыг оронд нь ашиглаарай](/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization)

> * Хэрэв та **проп өөрчлөгдөх үед зарим төлөвийг "reset" хийхдээ** `componentWillReceiveProps` ашигласан бол компонентыг  [бүрэн удирдлагатай болгох](/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component)  эсвэл [`key` ашиглан бүрэн удирдлагагүй болгоод](/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) үзээрэй .

>
> Бусад тохиолдолд [удамшсан төлвийн тухай энэхүү блог нийтлэл дэх зааврыг дагана уу](/blog/2018/06/07/you-probably-dont-need-derived-state.html).

Mount хийсэн компонент шинэ пропс хүлээн авахын өмнө `UNSAFE_componentWillReceiveProps()` дуудагддаг. Хэрэв пропт өөрчлөлт орсны улмаас төлөвийг шинэчлэх хэрэгтэй бол (жишээ нь reset хийх) та `this.props`-ыг `nextProps`-тай харьцуулан, уг методдоо `this.setState()` ашиглан төлөвийг шилжүүлээрэй. 

Хэрэв эцэг компонент таны компонентыг дахин рендэр хийлгэвэл пропс өөрчлөгдөөгүй ч гэсэн уг метод дуудагдах болно. Зөвхөн өөрчлөлтийнх нь учрыг олох гэж байгаа бол одоогийн болон дараагийн утгыг харьцуулахаа мартуузай.

React[mount](#mounting) хийж байх үед эхний проптой `UNSAFE_componentWillReceiveProps()`-ыг дууддаггүй. Зарим компонентуудын пропс нь шинэчлэгдэх шаардлагатай бол методыг дууддаг. `this.setState()`-ыг дуудах нь ер нь бол `UNSAFE_componentWillReceiveProps()`-ыг өдөөхгүй.

* * *

### `UNSAFE_componentWillUpdate()` {#unsafe_componentwillupdate}

```javascript
UNSAFE_componentWillUpdate(nextProps, nextState)
```

> Тэмдэглэл
>
> Уг амьдралын мөчлөг нь өмнө `componentWillUpdate` гэсэн нэртэй байсан. Хувилбар 17 хүртэл энэ нэрээр ажиллах боломжтой. Компонентуудаа автоматаар шинэчлэхийн тулд [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) ашиглаарай.

Шинээр төлөв, пропс хүлээн авах үед рендэр хийхийн өмнөхөн `UNSAFE_componentWillUpdate()`  дуудагддаг. Шинэчлэл хийгдэхээс өмнө бэлтгэл ажил хийх боломж болгон ашиглах хэрэгтэй. Эхний удаа рендэр хийхэд уг метод дуудагддаггүй.

 `UNSAFE_componentWillUpdate()` буцахаас өмнө React-ын компонентыг шинэчлэхийг шаарддаг ямар нэг үйлдэл (Redux үйлдэл г.м) хийх эсвэл `this.setState()`-ыг та дуудаж болохгүй.

Уг методыг `componentDidUpdate()`-оор орлуулж болно. Хэрэв та уг методыг ашиглахдаа DOM-оос уншуулж байсан бол (scroll-ын байрлалыг хадгалах г.м) та яг адилханаар `getSnapshotBeforeUpdate()` ашиглан хийх боломжтой.

> Тэмдэглэл
>
> Хэрэв [`shouldComponentUpdate()`](#shouldcomponentupdate) буцах утга нь худал байх юм бол `UNSAFE_componentWillUpdate()` дуудагдахгүй. 

* * *

## Бусда API-ууд {#other-apis-1}

Доор дурдах методуудын хувьд *та* өөрийн компонентоосоо дуудаж болдгоороо өмнө дурдсан амьдралын мөчлөг методуудаас өөр юм. 

`setState()`, `forceUpdate()` гэсэн хоёр янз л байна.


### `setState()` {#setstate}

```javascript
setState(updater, [callback])
```

`setState()`  нь компонентод орсон өөрчлөлтийг дараалуулан нэмж, төлөв шинэчлэгдсэн үед компонент болон хүүхдүүд нь дахин рендэр хийх хэрэгтэй гэдгийг React-д мэдэгддэг. Та эвент зохицуулагч, серверийн хариу үйлдлийн улмаас хэрэглэгчийн интерфэйсийг шинэчлэхийг хүсвэл нэн тэргүүнд ашиглах чухал метод юм. 

 `setState()`-ыг компонентыг шинэчлэх шуурхай команд гэхээс илүүтэй *хүсэлт* гэж ойлгон. Ажиллагааг илүү байлгахын тулд React 
магадгүй хүсэлтийг сааруулж, нэг дамжуулалтаараа хэд хэдэн компонент шинэчлэх боломжтой. Төлөвт орсон өөрчлөлтүүд нь шууд орно гэсэн баталгаа React-д байхгүй. 

`setState()`  нь дандаа компонентыг шууд шинэчлэхгүй. Update-ыг хойшлуулах, хадгалаад байлгаад байдаг. `setState()` дуудсаны дараа тэр даруй `this.state`-ыг уншуулбал алдаа гарч болзошгүй. Оронд нь `componentDidUpdate` эсвэл `setState`  callback (`setState(updater, callback)`) ашиглаарай. Update орсны дараа баталгаатай ажиллана. Хэрэв та өмнөх төлөв дээр үндэслэн одоогийн төлөвийг тохируулах гэж байгаа бол доорх `updater` аргументын тухай уншаарай.

`shouldComponentUpdate()` нь `false` гэж гарахгүй л бол `setState()` нь дандаа дахин рендэр хийх болно. Хэрэв өөрчлөлт орох объект ашиглах бол `shouldComponentUpdate()`-т нөхцөлт рендэр хийж болохгүй. Шинэ төлөв нь өмнөх төлөвөөс өөр байгаа тохиолдолд 
`setState()` -ыг дуудвал шаардлагагүй дахин рендэр хийхээс сэргийлж чадна. 

Эхний аргумент нь `updater` функц:

```javascript
(state, props) => stateChange
```

Өөрчлөлт орох үед `state` нь компонентын төлөвт reference болж өгдөг. Шууд хувирдаг байж болохгүй. `state`, `props`-т оруулсан өөрчлөлт дээр үндэслэн  шинэ объект бүтээн өөрчлөлт харагдах учиртай. Жишээ нь бид `props.step` ашиглан төлөвт утга нэмэхийг хүсвэл:

```javascript
this.setState((state, props) => {
  return {counter: state.counter + props.step};
});
```
Update хийх функцийн хүлээн авсан `state`, `props` аль аль нь баталгаатай хамгийн сүүлийн үеийн байдаг. Update-ын үр дүн нь `state`-тэй өнгөц нийлдэг. 

`setState()`-ын хоёр дахь параметр нь `setState` бүрэн гүйцэн, тухайн компонент дахин рендэр хийсний дараа ажиллах дурын callback   функц юм. Ер нь бол бид оронд нь `componentDidUpdate()` ашиглахыг зөвлөдөг.

Та `setState()`-т объектыг функцээр биш эхний аргумент болгон дамжуулж болно: 

```javascript
setState(stateChange[, callback])
```

Ингэснээр `stateChange` -ыг шинэ төлөвт нийлүүлэх юм. Сагсанд хийх барааны тоог өөрчлөх г.м:

```javascript
this.setState({quantity: 2})
```

`setState()` нь асинхрон хэлбэртэй ба тухайн мөчлөгт олон дуудлага хийгдвэл хамтад нь нийлүүлдэг. Жишээ нь та нэг мөчлөгт барааны тоог нэгээс олон удаа нэмэх гэж оролдвол үр дүн нь:

```javaScript
Object.assign(
  previousState,
  {quantity: state.quantity + 1},
  {quantity: state.quantity + 1},
  ...
)
```

Нэг мөчлөгт дараагийн дуудлага нь өмнөх  дуудлагын оруулсан утгыг дарж тодорхойлдог. Тэгэхээр тоон мэдээлэл нь нэг удаад л нэмэгдэнэ гэсэн үг. Хэрэв дараагийн төлөв нь одоогийн төлөвөөс хамааралтай бол updater function form-ыг оронд нь ашиглахыг зөвлөе:

```js
this.setState((state) => {
  return {quantity: state.quantity + 1};
});
```

Дэлгэрэнгүйг:

* [Төлөв, Амьдралын мөчлөгийн тухай заавар](/docs/state-and-lifecycle.html)
* [Гүнзгийрүүлж судлах нь: Хэзээ, яагаад `setState()` дуудлага бөөгнөрдөг вэ?](https://stackoverflow.com/a/48610973/458193)
* [Гүнзгийрүүлж судлах нь: Яагаад `this.state` нь шууд шинэчлэгддэггүй вэ?](https://github.com/facebook/react/issues/11527#issuecomment-360199710)

* * *

### `forceUpdate()` {#forceupdate}

```javascript
component.forceUpdate(callback)
```

Компонентын чинь төлөв эсвэл пропс өөрчлөгдвөл цаад тохиргоогоор бол таны компонент дахин рендэр хийнэ. Хэрэв таны `render()` метод нь өөр өгөгдлөөс хамааралтай бол та `forceUpdate()` дуудаж байж тухайн компонент дахин рендэр хийнэ гэдгийг React-д хэлж өгөх хэрэгтэй. 

`forceUpdate()`-ыг дуудвал `shouldComponentUpdate()`-ыг алгасан тухайн компонентод `render()` хийхээр дуудна. Хүү компонентуудын амьдралын мөчлөгийн энгийн компонентуудыг ажиллуулна. Хүү бүрт `shouldComponentUpdate()` метод ажиллана. Тэмдэглэгээ өөрчлөгдсөн ч React нь зөвхөн DOM-ыг шинэчилнэ. 

Энгийн үед та `forceUpdate()`-ыг ашиглахаас аль болох зайлсхийх хэрэгтэй ба `render()`-ын `this.props` болон `this.state`-ыг уншуулбал зүгээр. 

* * *

## Class Properties {#class-properties-1}

### `defaultProps` {#defaultprops}

<<<<<<< HEAD
Класст зориулсан өгөгдмөл пропсыг тохируулахад `defaultProps` нь компонентын классдаа проп гэж тодорхойлогдож болно. Хоосон биш, тодорхойгүй пропст үүнийг ашиглана. Тухайлбал:
=======
`defaultProps` can be defined as a property on the component class itself, to set the default props for the class. This is used for `undefined` props, but not for `null` props. For example:
>>>>>>> 954a16f1d358009505ae881afaefe463dc6388a5

```js
class CustomButton extends React.Component {
  // ...
}

CustomButton.defaultProps = {
  color: 'blue'
};
```

Хэрэв `props.color` байхгүй бол цаанаасаа `'blue'` байна:

```js
  render() {
    return <CustomButton /> ; // props.color will be set to blue
  }
```

<<<<<<< HEAD
Хэрэв `props.color` нь null байвал null хэвээр үлдэнэ:
=======
If `props.color` is set to `null`, it will remain `null`:
>>>>>>> 954a16f1d358009505ae881afaefe463dc6388a5

```js
  render() {
    return <CustomButton color={null} /> ; // props.color will remain null
  }
```

* * *

### `displayName` {#displayname}

Мессежийг дибаг хийхэд `displayName` ашиглана. Тухайн компонентыг тодорхойлох функц эсвэл классын нэрнээс үндэслэн гарах учир та үүнийг тодорхой зааж өгөх хэрэггүй. Хэрэв дибаг хийх зорилгоор эсвэл дээд түвшний компонент үүсгэх гэж байгаа бол та 
тодорхой зааж өгч болно. Дэлгэрэнгүйг [Wrap the Display Name for Easy Debugging](/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging) гэдгээс харна уу. 

* * *

## Instance Properties {#instance-properties-1}

### `props` {#props}


Тухайн компонентыг дуудагчийн тодорхойлсон пропс нь `this.props`-т агуулагдана. Пропсын тухай анхан шатны тайлбар хүсвэл [Компонентууд ба Пропс](/docs/components-and-props.html) гэснийг харна уу.

`this.props.children` нь онцгой нэг проп бөгөөд өөрийн таг биш JSX expression-т хүү таг болж тодорхойлогддог. 

### `state` {#state}

Уг компонентод зориулсан өгөгдлийг агуулсан төлөв нь ирээдүйд өөрчлөгдөх боломжтой. Төлөвийг хэрэглэгч тодорхойлох ба дан Javascript объект байна. 

Хэрэв зарим утга рендэр хийхэд эсвэл өгөгдлийн урсгалд (цаг заагчийн ID) ашиглагдахгүй бол та төлөвт үүнийг оруулахгүй байж болно. Энэ мэт утга нь компонентын instance дээр муж гэж тодорхойлогдоно. 

Төлвийн талаар дэлгэрэнгүй мэдээллийг [Төлөв ба Амьдралын мөчлөг](/docs/state-and-lifecycle.html) гэснээс харна уу.

`this.state` -ыг шууд хувиргаж болохгүй. Дараа нь `setState()`-ыг дуудахад хийсэн өөрчлөлт чинь солигдох болно. `this.state`-ыг хувиргаж өөрчлөх боломжгүй гэж ойлгох нь зүйтэй. 

