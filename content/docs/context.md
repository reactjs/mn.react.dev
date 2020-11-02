---
id: context
title: Контекст
permalink: docs/context.html
---

Контекст нь өгөгдлүүдийг пропс ашиглан компонентын бүх түвшингүүдээр доош дамжуулахгүйгээр шууд компонентын мод ашиглан дамжуулах боломжийг олгодог.

Энгийн React програмд өгөгдлийг дээрээс доош буюу (эцэг компонентоос хүү компонент руу) гэсэн чиглэлтэйгээр пропсуудыг дамжуулдаг. Гэхдээ зарим (locale preference, UI theme) програмд олон компонентуудад дуудагдан ашиглагддаг пропсуудын хувьд энэ арга нь тохиромжгүй юм. Тиймээс контекст ашиглан ийм төрлийн өгөгдлүүдийг шууд компонент модоор компонентууд хооронд дамжуулж болно.

- [Хэзээ контекстыг ашиглах](#when-to-use-context)
- [Контекстыг ашиглахаас өмнө](#before-you-use-context)
- [API](#api)
  - [React.createContext](#reactcreatecontext)
  - [Context.Provider](#contextprovider)
  - [Class.contextType](#classcontexttype)
  - [Context.Consumer](#contextconsumer)
  - [Context.displayName](#contextdisplayname)
- [Жишээ](#examples)
  - [Динамик контекст](#dynamic-context)
  - [Nested компонентоос контекстыг өөрчлөх](#updating-context-from-a-nested-component)
  - [Олон контекст ашиглах](#consuming-multiple-contexts)
- [Сануулга](#caveats)
- [Хуучин API](#legacy-api)

## Хэзээ контекстыг ашиглах {#when-to-use-context}

Контекст нь "global" түвшинд хамаарагдах өгөгдлүүдийг React компонентын модноос шууд авч ашиглах боломжтой болгодог. Тухайлбал current authenticated user, theme болон preferred language гэсэн өгөгдлүүд үүнд хамаарагдана. Жишээ нь доорх код Button компонентыг хэлбэржүүлэхийн тулд "theme" пропсыг дамжуулж өгсөн байна. 

`embed:context/motivation-problem.js`

Контекстыг хэрэглэснээр бид дундын элементүүдээр пропсуудыг дамжуулах шаардлагагүй болно. 

`embed:context/motivation-solution.js`

## Контекстыг ашиглахаас өмнө {#before-you-use-context}

Контекст нь компонентын модны өөр өөр түвшинд байгаа компонентууд тухайн өгөгдлийг ашиглах шаардлагатай болох үед ихэвчлэн хэрэглэгддэг. Гэхдээ үүнийг аль болох бага ашиглах хэрэгтэй, учир нь энэ компонентыг дахин ашиглахад илүү түвэгтэй болгодог.

**Хэрвээ та пропсуудыг зөвхөн олон түвшингүүдээр дамжуулахаас зайлс хийх байгаа бол,  [component composition](/docs/composition-vs-inheritance.html) нь контекстоос илүү хялбар шийдэл юм.**

Жишээ нь `Page` компонент нь `user` болон `avatarSize` гэсэн пропсуудыг доод түвшин рүү дамжуулсанаар `Link` болон `Avatar` гэсэн бүр доод түвшний компонентууд эдгээр пропсуудыг авч ашиглах боломжтой болж байна.

```js
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... which renders ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... which renders ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>
```

Хэрвээ зөвхөн хамгийн сүүлийн `Avatar` компонент л эдгээр `user` болон `avatarSize` пропсуудыг ашиглах шаардлагатай байсан бол дунд талын түвшингүүдээр дамжуулах нь илүү үйлдэл биш гэж үү. Хэрвээ `Avatar` компонент нь дахин өөр пропсуудыг хамгийн дээд түвшний компонентоос авч ашиглах шаардлагатай болвол тэдгээр дунд нь байгаа бүх компонентуудад дахин нэмэх шаардлагатай болно.

**Контекст ашиглахгүй** энэ асуудлыг шийдэх нэг арга нь [`Avatar` компонентыг өөрийг нь шууд дамжуулах юм](/docs/composition-vs-inheritance.html#containment). Ингэснээр дундын компонентууд `user` болон `avatarSize` пропсуудын талаар мэдэх шаардлагагүй болно.  

```js
function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}

// Now, we have:
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout userLink={...} />
// ... which renders ...
<NavigationBar userLink={...} />
// ... which renders ...
{props.userLink}
```

Ингэж өөрчилсөнөөр зөвхөн хамгийн дээд түвшний Page компонент л зөвхөн `Link` болон `Avatar` компонентууд `user` болон `avatarSize` пропсуудыг хэрхэн ашиглаж байгааг мэдэх юм. 

Энэ *inversion of control* загварыг ашигласнаар таны програмд дамжуулагдах пропсуудын хэмжээ багасч үр дүнд нь код тань илүү цэгцтэй болох болно. Мөн үндсэн (root) компонентуудад илүү эрх мэдлийг өгөх болно. Гэхдээ энэ арга нь эцсийн зөв шийдэл биш бөгөөд бүх тохиолдлуудад зөв ажиллахгүй, дээд түвшин рүү хэт их зүйлсийг төвлөрүүлсэнээр дээд түвшний компонентуудыг илүү түвэгтэй, ойлгоход хэцүү болгоно, улмаар доод түвшний компонентуудыг үүндээ нийцүүлэн илүү уян хатан байхыг шаардана. 

Компонент нь зөвхөн нэг хүү компонентоор хязгаарлагдахгүй. Та олон хүү компонентуудыг дамжуулах боломжтой, мөн цаашлаад олон хүү компонентуудыг дамжуулах боломжтой "slots" уудыг дамжуулж болно. [Эндээс харах](/docs/composition-vs-inheritance.html#containment)

```js
function Page(props) {
  const user = props.user;
  const content = <Feed user={user} />;
  const topBar = (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avatar user={user} size={props.avatarSize} />
      </Link>
    </NavigationBar>
  );
  return (
    <PageLayout
      topBar={topBar}
      content={content}
    />
  );
}
```

Энэ загвар (pattern) нь хүү компонентуудыг тэдгээрийг шууд агуулсан эцэг компонентуудаас (immediate parents) салган ашиглах шаардлагатай байгаа бүх тохиолдлуудад ашиглаж болно. Бүр цаашлаад хэрвээ хүү компонент нь рендер хийгдэхээсээ өмнө эцэг компоненттой харилцах шаардлагатай болвол [render props](/docs/render-props.html) той хамт ашиглагдаж болно.  

Заримдаа нэг ижил өгөгдлүүд рүү компонентын модны өөр өөр түвшинд байгаа компонентуудаас хандах шаардлагатай болдог. Контекст нь эдгээр өгөгдлүүдийг доод түвшний компонентуудад түгээх ("broadcast") эсвэл өөрчлөх боломжийг олгодог. Зарим түгээмэл жишээнүүдэд контекст ашигласан нь "managing the current locale, them, эсвэл a data cache" гэсэн бусад аргуудыг ашигласнаас илүү хялбар болдог. 

## API {#api}

### `React.createContext` {#reactcreatecontext}

```js
const MyContext = React.createContext(defaultValue);
```

Контекстын обьектыг үүсгэх. React нь тухайн контекстын обьектыг ашиглахдаа компонентын модны өөрөөс нь дээш хамгийн ойр орших `Provider` оос өгөгдлүүдээ авдаг.


`defaultValue` аргумент нь **зөвхөн** компонентын модонд тухайн компонентод өөрөөс нь дээш байрлах `Provider` олдохгүй байх тохиолдолд ашиглагддаг. Мөн энэ аргумент нь тухайн компонентыг өөр компонентод агуулагдалгүй (without wrapping) хязгаарлагдмал байдлаар тест хийхэд илүү тохиромжтой.  


### `Context.Provider` {#contextprovider}

```js
<MyContext.Provider value={/* some value */}>
```

Бүх контекстын обьект нь React Provider компоненттой холбогдсон байдаг, ба энэ нь тухайн контекстыг ашиглаж байгаа компонентуудад тухайн контекстэд өөрчлөлт хийх боломжийг олгодог. 

<<<<<<< HEAD
`value` пропс нь Provider ийн хүү компонентууд (хэрэглэгч компонентууд) руу дамжуулагддаг. Нэг Provider нь олон хэрэглэгч компоненттэй холбогдож болно. Provider ууд нь нэг нэгэндээ агуулагдаж компонентын модонд дамжуулагдаж буй утгуудыг (values) даран тодорхойлж (override) болно. 
=======
The Provider component accepts a `value` prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
>>>>>>> 30baecf59de28a8cd3c91a2cd878e3822f864061

Тухайн Provider ийн бүх хэрэглэгч компонентууд нь тухайн Provider ийн `value` пропс д өөрчлөлт орох бүрд дахин рендэр хийгддэг. Provider аас хэрэглэгч компонентууд ([`.contextType`](#classcontexttype) болон [`useContext`](/docs/hooks-reference.html#usecontext)-г багтаасан) рендэр хийж байгаа нь `shouldComponentUpdate` функцтай холбоогүй, улмаар эцэг компонент нь өөрчлөлт хийхээ зогсоосон ч хэрэглэгч компонентууд нь өөрчлөгдөх болно.

Өөрчлөлт нь шинэ болон хуучин утгуудыг ижил алгоримтаар [`Object.is`](//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description) харцуулсанаар тодорхойлогддог.

> Тэмдэглэл
> 
> Энэ арга нь `value` пропсыг обьект хэлбэрээр дамжуулах үед зарим нэг асуудал үүсч байгаа. [Анхааруулга](#caveats).

### `Class.contextType` {#classcontexttype}

```js
class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* perform a side-effect at mount using the value of MyContext */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* render something based on the value of MyContext */
  }
}
MyClass.contextType = MyContext;
```

Класс дахь `contextType` проперти нь [`React.createContext()`](#reactcreatecontext) аас үүссэн контекстын обьектоор утга олгогдож байна. Энэ нь хамгийн ойр орших тухайн контекстын утгыг `this.context` ийг ашиглаж авч байна. Энэ `this.context` ийг lifecycle функцууд болон рендер функцад мөн ашиглаж болно.

> Тэмдэглэл:
>
> Та энэ API ийг ашигласнаар зөвхөн single контекстыг зөвшөөрөх боломжтой. Дэлгэрэнгүй мэдээлэл эндээс харна уу [Consuming Multiple Contexts](#consuming-multiple-contexts).
>
> Хэрвээ та туршилтын [public class fields syntax](https://babeljs.io/docs/plugins/transform-class-properties/) ийг ашиглаж байгаа бол, мөн **static** class field ийг ашиглан өөрийн `contextType` ийг зарлах боломжтой.


```js
class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* render something based on the value */
  }
}
```

### `Context.Consumer` {#contextconsumer}

```js
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

React компонент нь контекстын өөрлчлөлтийг дэмждэг. Энэ нь контекстыг [функцианаль компонент (functional component)](/docs/components-and-props.html#function-and-class-components) дотор ашиглах боломжтой болгосон.

Функцыг хүү компонентоор ашиглах нь [function as a child](/docs/render-props.html#using-props-other-than-render). Функц нь тухайн контекстын утгыг хүлээн аваад React node буцаадаг. Функцэд дамжуулагдаж байгаа `value` аргумент нь компонентын модонд байх тухайн контекстээс дээш хамгийн ойр байрлах Provider ийн `value` пропстой тэнцүү байна. Хэрвээ тухайн контекстээс дээш орших ямар ч Provider олдохгүй бол `value` аргумент нь `createContext()` функцээр дамжуулагдсан `defaultValue` тай тэнцүү байна.

> Тэмдэглэл
> 
> Функцыг хүү компонентоор ашиглах загварыг (pattern) эндээс харах [render props](/docs/render-props.html).

### `Context.displayName` {#contextdisplayname}

Контекст нь `displayName` гэх стринг тѳрѳлтэй утга авах нэгжтэй. React DevTools нь энэ стрингийг ашиглан дэлгэцэнд юу харуулахаа шийддэг. 

Жишээ нь, доорхи компонент нь MyDisplayName гэж DevTools дээр харагдана:

```js{2}
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" in DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools
```

## Жишээнүүд {#examples}

### Динамик контекст {#dynamic-context}

Динамик утгуудыг theme д ашигласан илүү түвэгтэй жишээ:

**theme-context.js**
`embed:context/theme-detailed-theme-context.js`

**themed-button.js**
`embed:context/theme-detailed-themed-button.js`

**app.js**
`embed:context/theme-detailed-app.js`

### Агуулагдсан (nested) компонентоос контекстыг өөрчлөх {#updating-context-from-a-nested-component}

Компонентын модны аль нэг түвшинд байрлах дурын компонентоос контекстэд өөрчлөлт хийх шаардлага их гардаг. Энэ нөхцөлд функцыг контекстээр доош дамжуулан хэрэглэгч компонентуудаас контекстыг өөрчилдөг:

**theme-context.js**
`embed:context/updating-nested-context-context.js`

**theme-toggler-button.js**
`embed:context/updating-nested-context-theme-toggler-button.js`

**app.js**
`embed:context/updating-nested-context-app.js`

### Олон контекст хэрэглэх {#consuming-multiple-contexts}

Контекстыг дахин дүрслэлтийг хурдан хийдэг байлгахын тулд React нь бүх контекстын хэрэглэгчдийг компонентын модны салангид node нүүд дээр байрлуулсан байх хэрэгтэй.

`embed:context/multiple-contexts.js`

Хэрвээ хоёр болон түүнээс дээш контекстууд ихэвчлэн хамтдаа хэрэглэгдэж байвал тухайн контекстуудыг хангах өөр өөрийн рендэр пропс компонентыг үүсгэх нь зөв юм. 

## Сануулга {#caveats}

Контекст нь reference identity ийг ашиглан компонентыг дахин рендэр хийхээ шийдэж байгаа учраас эцэг компонент дахин рендэр хийгдэх үед хэрэглэгч компонентуудад шаардлагагүй рендэр хийгдэх тохиолдлууд гарч болно. Жишээ нь доорх код нь Provider ийг дахин рендэр хийх бүрд бүх хэрэглэгч компонентууд дахин рендэр хийгдэх болно, учир нь `value` дотор үргэлж шинэ обьектууд үүсэж байдаг.  

`embed:context/reference-caveats-problem.js`


Үүнийг шийдэхийн тулд утгуудыг (`value`) эцэг компонентын state руу зөөх хэрэгтэй.

`embed:context/reference-caveats-solution.js`

## Хуучин API {#legacy-api}

> Тэмдэглэл
> 
> React шинэ контекст API руу шилжсэн. Хуучин API нь React 16.x хувилбаруудад дэмжигдэж байгаа. Гэхдээ энэ хуучин API ийг ашиглаж байгаа програмууд шинэ хувилбар руу шилжих хэрэгтэй. Хуучин API нь ирээдүйд React ийн хувилбаруудаас хасагдах болно. [Хуучин API ийн талаар унших](/docs/legacy-context.html)
