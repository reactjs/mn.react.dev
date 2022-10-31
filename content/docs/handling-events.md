---
id: handling-events
title: Эвентүүдийг удирдах
permalink: docs/handling-events.html
prev: state-and-lifecycle.html
next: conditional-rendering.html
redirect_from:
  - "docs/events-ko-KR.html"
---

React элементүүд дээр эвент удирдах нь DOM элемент дээр удирдахтай тун адилхан. Эдгээрт бага зэрэг синтаксийн ялгаа л бий:

* React эвентүүд бүгдийг жижгээр бичихийн оронд үгийн эхний үсэг болгоныг(camelCase) стандартаар бичигддэг.
* JSX-р тэмдэгтийн оронд эвент удирдах функц дамжуулж болдог.

Жишээлбэл, дараах HTML:

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

React дээр бага зэрэг өөр:


```js{1}
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

Өөр нэг ялгаа бол React дээр үндсэн ажиллагааг нь зогсоохын тулд `худал` буцааж болдоггүй. Та `preventDefault`-г тусгайлан дуудах хэрэгтэй. Жишээлбэл, энгийн HTML дээр линк дээр дарахад шинэ хуудас дууддаг ажиллагаа болиулахдаа дараах байдлаар бичдэг бол:

```html
<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>
```

React дээр дараах байдалтай бичигдэнэ:

```js{3}
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

Энд `e` нь синтетик эвент юм. React эдгээр синтетик эвэнтүүдийг [W3C тодорхойлолт](https://www.w3.org/TR/DOM-Level-3-Events/)-н дагуу тодорхойлдог учир та хөтөч хооронд зохицон ажиллах тал дээр санаа зовохгүй байж болно. Илүү дэлгэрэнгүй [`SyntheticEvent`](/docs/events.html)-н талаар илүү мэдмээр байвал баримтжуулалтыг нь үзнэ үү.

React ашиглаж байхад DOM элемент руу `addEventListener` сонсогчийг дуудах шаардлагагүй байдаг. Үүний оронд сонсогчоо элементийг анх дүрслэхэд олгох хэрэгтэй.

[ES6 класс](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) ашиглан компонент тодорхойлж байгаа бол эвент удирдагч нь класс дотор байгаа функц байдаг нь нийтлэг хэвшил юм. Жишээлбэл, энэ `Toggle` компонент товч дүрслээд хэрэглэгчийг "ON" ба "OFF" төлөвт шилжих боломжийг олгож байна:

```js{6,7,10-14,18}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

[**CodePen дээр турших**](https://codepen.io/gaearon/pen/xEmzGg?editors=0010)

JSX дуудалт дээр `this`-г ашиглахдаа болгоомжтой байх хэрэгтэй. Жаваскрипт дээр классийн функцууд нь [холбогдоогүй(bind)](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind) байдаг. Хэрэв та `this.handleClick`-г холбоод `onClick`-д дамжуулахаа мартвал `this` нь функц дуудагдах үед `тодорхойлогдоогүй` байх болно.

Энэ нь React-д зориулсан ажиллах зарчим биш; [функцууд Жаваскрипт дээр хэрхэн ажилладаг талаарх](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/) нэг хэсэг юм. Ерөнхийдөө та функцийг ардаа `()`-гүй заахад, жишээлбэл `onClick={this.handleClick}`, та энэ функцийг холбох юм.

<<<<<<< HEAD
`Холбох` дуудалт танд хэцүү санагдаж байвал өөрөөр хийх хоёр арга бий. Хэрэв та туршилтын [public class fields syntax](https://babeljs.io/docs/plugins/transform-class-properties/) ашиглаж байгаа бол, холбох дуудалтыг классын талбар ашиглаж хийж болно:

```js{2-6}
class LoggingButton extends React.Component {
  // Энэ синтакс нь `this`-г handleClick-тэй холбох болно.
  // Анхаар: Энэ бол *туршилтын* бичиглэл юм.
=======
If calling `bind` annoys you, there are two ways you can get around this. You can use [public class fields syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields#public_instance_fields) to correctly bind callbacks:

```js{2-6}
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
>>>>>>> e21b37c8cc8b4e308015ea87659f13aa26bd6356
  handleClick = () => {
    console.log('this is:', this);
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

Энэ бичиглэл [Create React App](https://github.com/facebookincubator/create-react-app) дээр анхнаасаа идэвхжүүлэгдсэн байдаг.

Хэрэв та классын талбар бичиглэлийг ашиглахгүй бол та [суман функц](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) дуудалт дотор ашиглаж болно:

```js{7-9}
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // Энэ синтакс нь `this`-г handleClick-тэй холбох болно.
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

Энэ бичиглэлийн асуудал нь `LogginButton`-г дүрслэх болгонд өөр өөр дуудалт үүсгэх юм. Ихэнх тохиолдолд энэ нь зүгээр байдаг ч энэ дуудалт нь доод түвшний компонент руу шинж чанар болон дамжуулагдахад эдгээр компонентууд нь нэмэлт дахин дүрслэлт(re-rendering) хийж болзошгүй. Энэ мэтчилэн хурдны асуудлаас сэргийлэхийн тулд бид ихэвчлэн холболтыг байгуулагч дотор эсвэл классын талбар бичиглэл ашиглах хийхийг зөвлөдөг.

## Эвент удирдагч руу аргумент дамжуулах нь {#passing-arguments-to-event-handlers}

Давталт дотор эвент удирдагч руу нэмэлт аргумент дамжуулахийг хүсэх нь элбэг. Жишээлбэл, хэрэв `id` нь мөрийн ID бол дараах хоёр хоёулаа ажиллана:

```js
<button onClick={(e) => this.deleteRow(id, e)}>Мөр устгах</button>
<button onClick={this.deleteRow.bind(this, id)}>Мөр устгах</button>
```

Дээрх хоёр мөрүүд нь ижилхэн бөгөөд [суман функц](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) болон [`Function.prototype.bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) ашигласан байна.


Аль ч тохиолдолд `e` аргумент нь React-н эвентийг төлөөлөх бөгөөд ID-н дараа хоёрдох аргумент болон дамжуулагдана. Суман функцэд бид тусгайлан зааж өгөх бол `bind`-д автоматаар дамжих болно.
