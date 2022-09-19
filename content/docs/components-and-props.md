---
id: components-and-props
title: Компонент болон Пропс
permalink: docs/components-and-props.html
redirect_from:
  - "docs/reusable-components.html"
  - "docs/reusable-components-zh-CN.html"
  - "docs/transferring-props.html"
  - "docs/transferring-props-it-IT.html"
  - "docs/transferring-props-ja-JP.html"
  - "docs/transferring-props-ko-KR.html"
  - "docs/transferring-props-zh-CN.html"
  - "tips/props-in-getInitialState-as-anti-pattern.html"
  - "tips/communicate-between-components.html"
prev: rendering-elements.html
next: state-and-lifecycle.html
---

Компонент нь таньд дэлгэцийн загварыг бие даасан дахин ашиглаж боломжтой хэсгүүд болгодог болгож тусад нь бодож хийхэд амар болгодог. Энэ хуудас нь танд компонентын агуулгыг товч танилцуулна. Та [API reference-г компонентын дэлгэрэнгүйг](/docs/react-components.html) харж болно.

Үндсэндээ компонентууд бол Жаваскриптийн функцууд юм. Тэд оролт("props" гэж дууддаг) хүлээж аван дэлгэц дээр харагдах React элементүүд буцаадаг.

## Функц болон Класс компонентууд {#function-and-class-components}

Компонент тодорхойлох энгийн арга бол Жаваскрипт функц бичих юм:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Энэ функц нь нэг "props" объект аргумент өгөгдөл хүлээн авч React элемент буцааж байгаа учир зөв React компонент юм. Бид үүнийг "функц компонентууд" гэж дууддаг учир нь эдгээр нь зүгээр л Жаваскрипт функцууд юм.

Мөн түүнчлэн та [ES6 класс](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) ашиглан компонент тодорхойлж болно:


```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Дээрх хоёр компонент React-н хувьд яг ижил юм.

Функц болон Класс нь зарим нэмэлт боломжууд агуулж болох ба бид үүнийг [дараагийн бүлгүүдэд](/docs/state-and-lifecycle.html) судална.

## Компонентыг дүрслэх нь {#rendering-a-component}

Өмнө бид зөвхөн DOM тагийг төлөөлөх React элементийг харсан:

```js
const element = <div />;
```

Мөн түүнчлэн элемтентүүд хэрэглэгчийн тодорхойлсон компонентыг төлөөлж болно:

```js
const element = <Welcome name="Sara" />;
```

Хэрвээ хэрэглэгчийн бичсэн компонент бол, React, JSX атрибут болон дотор нь гарах компонентыг энэ компонентруу нэг бүхэл объект болгон дамжуулдаг. Үүнийг "props" гэж нэрлэдэг.

Жишээлбэл, энэ код нь "Hello, Sara"-г хуудас дээр дүрсэлнэ:

```js{1,6}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);
```

**[Try it on CodePen](https://codepen.io/gaearon/pen/YGYmEG?editors=1010)**

Энэ жишээнд юу болж байгаа тоймлоё:

<<<<<<< HEAD
1. Бид `ReactDOM.render()` функцийг `<Welcome name="Sara" />` элементээр дуудсан.
2. React `Welcome` компонентыг `{name: 'Sara'}` шинж чанартайгаар(props) дуудсан.
3. Бид `Welcome` компонент `<h1>Hello, Sara</h1>` элементийг үр дүн болгон буцаасан.
4. React DOM маш үр дүнтэйгээр `<h1>Hello, Sara</h1>`-д харгалзах DOM-г шинэчилсэн.
=======
1. We call `root.render()` with the `<Welcome name="Sara" />` element.
2. React calls the `Welcome` component with `{name: 'Sara'}` as the props.
3. Our `Welcome` component returns a `<h1>Hello, Sara</h1>` element as the result.
4. React DOM efficiently updates the DOM to match `<h1>Hello, Sara</h1>`.
>>>>>>> 841d3d1b75491ce153a53d1887ab020458090bbd

>**Анхаар:** Компонентын нэрийг үргэлж том үсгээр эхэлж бай.
>
>React жижиг үсгээр эхэлсэн компонентыг DOM таг гэж ойлгодог. Жишээлбэл, `<div />` нь HTML div тагийг төлөөлөх, `<Welcome />` нь компонентыг төлөөлөх ба `Welcome` компонентыг үйлчлэлийн хүрээнд байхийг шаарддаг.
>
>Энэ нийтлэг дүрмийн цаана байгаа шалтгааныг дэлгэрэнгүй судлах бол [JSX In Depth](/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized) хуудсыг уншина уу.

## Компонентыг нэгтгэх(compose) нь {#composing-components}

Компонентууд нь өөр компонентын гаралтыг заасан байж болно. Энэ нь бидэнд компонент хийсвэрлэл ашиглах боломжийг ямар ч дэлгэрэнгүй түвшинд олгож байна. Товч, форм, диалог, screen: эдгээр бүгд нь React дээр компонент болдог.

Жишээлбэл, та `App` компонент дотор `Welcome`-г олон удаа дүрсэлж болно:

```js{8-10}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

**[Try it on CodePen](https://codepen.io/gaearon/pen/KgQKPr?editors=1010)**

Ерөнхийдөө шинэ React програмууд `App` компонент хамгийн дээд талдаа байлгадаг. Гэхдээ та байгаа програм дээр React залгах(integrate) гэж байгаа бол `Button` гэх мэтчилэн доод талын жижиг хэсгээс дээшээ гэхчлэн явах нь зүйтэй байж болно.

## Компонент гаргаж авах {#extracting-components}

Компонентыг илүү жижиг компонентууд болгон салгахаас битгий ай.

Жишээлбэл дараах `Comment` компонент байя:

```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

**[Try it on CodePen](https://codepen.io/gaearon/pen/VKQwEo?editors=1010)**

Энэ `author` (объект), `text` (тэмдэгт), `date` (огноо)-уудыг шинж чанар болгон хүлээн авч сошиал вебсайт дээр сэтгэгдлийг тодорхойлсон байна.

Энэ компонент нь хэт олон доошоо задарсан(nested) учраас өөрчлөхөд хэцүү мөн түүнчлэн доторх хэсгүүдийг нь дахин ашиглахад хэцүү юм. Эндээс хэдэн компонент гаргаж авъя.

Эхлээд бид `Avatar`-г гаргаж авъя:

```js{3-6}
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

`Avatar` нь `Comment` дотор дүрслэгдэж байгаа зүйлийг мэдэх шаардлагагүй юм. Учир нь бид шинж чанараар ерөнхий нэр өгсөн: `user` нь `author` гэснээс илүү.

Бид шинж чанарыг нэрлэхдээ компонентийн өөрийн харах өнцгөөр нэрлэх нь хаана хэрэглэгдэж байгаагаас хамааран нэрлэхээс илүүд үздэг.

Бид одоо `Comment`-г бага зэрэг хялбарчилж чадна:

```js{5}
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

Дараа нь бид хэрэглэгчийн нэрийн дараа `Avatar`-г дүрслэх `UserInfo` компонентыг салгаж авъя:

```js{3-8}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```

Энэ бидний `Comment`-г улам л энгийн болгоно:

```js{4}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

**[Try it on CodePen](https://codepen.io/gaearon/pen/rrJNJY?editors=1010)**

Компонентыг энэ мэтчилэн салгах нь эхэндээ их ажил шаардах ч томоохон програмуудын хувьд эдгээр дахин ашиглагдах компонентууд нь үр дүнгээ сайн өгдөг. Таны дэлгэцийн загварын хэсэг олон удаа ашиглагдах(`Button`, `Panel`, `Avatar`) эсвэл өөрөө хангалттай цогц болсон(`App`, `FeedStory`, `Comment`) бол дахин ашиглагдах боломжтой компонентууд болгон салгах нь хамгийн түрүүнд зөвлөх зөвлөмж юм.

## Шинж чанарууд(Props) бол зөвхөн унших горимтой {#props-are-read-only}

[Класс эсвэл функц](#function-and-class-components) бүтцийн алинаар ч компонент тодорхойлсон бай та хэзээ шинж чанарыг нь өөрчилж болохгүй. Дараах `sum` функц байя:

```js
function sum(a, b) {
  return a + b;
}
```

Иймэрхүү функцуудыг ["цэвэр"](https://en.wikipedia.org/wiki/Pure_function) гэж нэрлэдэг нь тэдгээр нь оролтоор орж ирсэн утгуудыг өөрчлөхийг оролддоггүй ба ижилхэн оролтод дандаа ижилхэн үр дүн буцаадаг.

Үүнтэй харьцуулахад энэ функц нь цэвэр бус(impure) гэж бөгөөд өөрийн оролтын утгаа өөрчилж байна:

```js
function withdraw(account, amount) {
  account.total -= amount;
}
```

React харьцангуй уян хатан нэг хатуу дүрэмтэй:

**Бүх React компонентууд өөрийн шинж чанарууддаа цэвэр функц байдлаар ажиллах ёстой**

Мэдээж програмын дэлгэцийн загвар хувирамтгай өөрчлөгдөхүйц юм.[Дараагийн бүлэгт](/docs/state-and-lifecycle.html) "төлөв" хэмээх шинэ ойлголт танилцуулах болно. Төлөв React компонентуудыг хэрэглэгчийн үйлдэл, сүлжээнээс ирсэн өгөгдөл, өөр бусад утгуудаас хамааран энэ дүрмийг зөрчихгүйгээр гаралтаа өөрчлөх боломжийг олгодог.
