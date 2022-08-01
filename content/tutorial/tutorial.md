---
id: tutorial
title: "Хичээл: React-н танилцуулга"
layout: tutorial
sectionid: tutorial
permalink: tutorial/tutorial.html
redirect_from:
  - "docs/tutorial.html"
  - "docs/why-react.html"
  - "docs/tutorial-ja-JP.html"
  - "docs/tutorial-ko-KR.html"
  - "docs/tutorial-zh-CN.html"
---

Энэхүү зааварчилгаа нь таныг өмнө нь React-ийн мэдлэггүй гэж тооцсон болно.

## Зааварчилгааг эхлүүлэхийн өмнө {#before-we-start-the-tutorial}

Энэхүү зааварчилгаагаар бид нэг жижигхэн тоглоом хийх болно. **Та тоглоом хийхгээгүй учраас алгасах гэж байж магадгүй юм -- гэхдээ үүнээс өмнө түр азнаарай.** Энэхүү зааварчилгаанаас сурах арга ажиллагаа нь ямар ч React апп хийхэд суурь болохоос гадна сайн сурвал React-ийн талаар гүнзгий ойлголттой болно.

>Зөвлөмж
>
>Энэхүү зааварчилгаа нь **хийнгээ суралцах**-г эрхэмлэдэг хүмүүст зориулагдсан. Хэрэв та зарчмыг нь сууриас нь эхлэн суралцахыг хүсвэл манай [алхам-алхмаар заасан зааврыг](/docs/hello-world.html) уншаарай. Та энэхүү зааварчилгаа нь нөгөө заавартай харилцан бие биенээ нөхөж бүхэл цогц болохыг ойлгоно.

Энэхүү зааварчилгаа нь хэдэн хэсэгт хуваагдана:

* [Зааварчилгаанд бэлдэх нь](#setup-for-the-tutorial) хэсгээс зааварчилгааг **эхлүүлнэ**
* [Ерөнхий мэдээлэл](#overview) хэсгээс React-ийн component, props болон state зэрэг **суурь ойлголт**-уудыг сурах болно.
* [Тоглоомоо хөгжүүлж дуусгах нь](#completing-the-game) хэсгээс React хөгжүүлэлтийн үеийн **хамгийн чухал арга аргачлалыг** сурах болно.
* [Цаг хугацаагаар аялах нь](#adding-time-travel) хэсгээс React-ийн онцлог, давуу талыг **илүү гүн гүнзгий** сурч ойлгох болно.

Энэхүү зааварчилгааг үр дүнтэй ашиглахыг тулд та заавал нэг дор бүх хэсгийг дуусгах алба байхгүй. Нэг эсвэл хоёр хэсэг байсан ч хамаагүй өөрийнхөө хүрч чадах хэсэг хүртэл явахад л болно.

### Юу бүтээх вэ? {#what-are-we-building}

Энэ зааварчилгаанд React ашиглан хэрхэн tic-tac-toe (икс бөөрөнхий) тоглоомыг бүтээхийг үзүүлэх болно.

**[Эцсийн бүтээл](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)**-с бид юу бүтээх гэж байгааг харж болно. Хэрэв код танд ойлгомжгүй санагдах эсвэл кодын бичлэг нь танил биш харагдвал санаа зовох хэрэггүй. Энэхүү зааварчилгааны зорилго нь танд React болон түүнийг бичиглэлийг ойлгоход туслах билээ.

Энэхүү зааварчилгааг үргэлжлүүлэхээсээ өмнө танд дээрх tic-tac-toe тоглоом уруу орж үзэхийг зөвлөж байна. Нэг анзаарвал зохих тоглоомын боломж нь тоглоомын хөлгийн баруун талд байгаа дугаарласан жагсаалт юм. Энэхүү жагсаалтаас тоглоомын туршид хийгдсэн бүх нүүдлийн түүхийг харж болох бөгөөд тоглох явцад шинэчлэгдэж байна.

Тоглоомтой танилцсан бол түүнийг хааж болно. Учир нь бид илүү энгийн загвараас эхэлнэ. Бидний дараагийн алхам бол таныг тоглоомыг хийж эхлэхэд бэлдэх юм.

### Өмнөх шаардлага {#prerequisites}

Ерөнхийдөө таныг HTML болон Javascript-ийн талаар мэдлэгтэй гэж тооцож байгаа боловч өөр програмчлалын хэлнээс шилжин орж байгаа байсан ч та зааврыг дагаж ажиллах боломжтой байх хэрэгтэй. Мөн таныг функц, объект, массив зэрэг үгүй бол ядаж класс гэх зэрэг програмчлалын ойлголттой гэж тооцсон.

Javascript-ийн мэдлэгээ бататгамаар байвал [энэ зааврыг](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) уншихыг зөвлөж байна. Мөн бид Javascript-ийн сүүлийн үеийн хувилбар болох ES6-ийн зарим боломжийг ашиглаж байгааг анзаараарай. Энэхүү зааварт [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), and [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) зэрэг бичиглэлийн боломжийг ашиглах болно. Мөн [Babel REPL](babel://es5-syntax-example) уруу орж ES6 кодыг ямар болгож хөрвүүлэлт хийдгийг харж болох юм.

## Зааварчилгаанд бэлдэх нь{#setup-for-the-tutorial}

Энэхүү зааварчилгааг ажиллах хоёр арга байгаа нь кодоо хөтөч дээрээ бичих эсвэл өөрийн компьютер дээрээ хөгжүүлэлтийн орчин үүсгэх юм.

### Бэлтгэл Сонголт 1: Хөтөч дээрээ кодоо бичих {#setup-option-1-write-code-in-the-browser}

Энэ бол эхлэх хамгийн хурдан арга!

Эхлээд **[Суурь код](https://codepen.io/gaearon/pen/oWWQNa?editors=0010)** -г шинэ тааб дээр нээ. Тэрхүү шинэ тааб дээр хоосон tic-tac-toe тоглоомын хөлөг болон React код харагдах болно. Бид энэ зааварчилгаан дээр тэр React кодыг засаж явна.

Та одоо хоёрдох сонголтыг алгасаад шууд [Ерөнхий мэдээлэл](#overview) хэсгээс React талаар ерөнхий мэдээлэл авах боломжтой.

### Бэлтгэл Сонголт 2: Хөгжүүлэлтийн дотоод орчин {#setup-option-2-local-development-environment}

Энэ хэсэг нь зааварчилгааг дуусгахад зайлшгүй шаардлагатай биш бөгөөд хүсвэл та хийхгүй ч байж болно!

<br>

<details>

<summary><b>Заавал биш: Өөрийн дуртай текст засварлагч дээр өөрийн компьютер дээр дагаж хийх заавар.</b></summary>

Энэ аргаар бэлдэх нь зааварчилгааг дуусгахын тулд илүү их ажил хийх шаардлагатай болох боловч өөрийн чинь дуртай эдитор ашиглах боломж олгоно. Доорх хэдэн алхмыг дагаж хийгээрэй:

1. [Node.js](https://nodejs.org/en/)-ийн сүүлийн хувилбарыг суулгасан эсэхээ шалгаж баталгаажуул.
2. [Create React App суулгах зааврыг](/docs/create-a-new-react-app.html#create-react-app) дагаж суулгаад шинэ төсөл үүсгээрэй.

```bash
npx create-react-app my-app
```

1. Шинэ үүссэн төслийн `src/` хавтас дахь бүх файлыг устга.

> Анхаарах:
>
>**Бүхэл `src` хавтсыг устгаж болохгүй, зөвхөн түүн доторх эх файлуудыг устгах хэрэгтэй.** Бид дараах алхмууд дахь жишээ төслийг гүйцэтгэхдээ энэ эх файлуудыг сольж бичих болно.

```bash
cd my-app
cd src

# If you're using a Mac or Linux:
rm -f *

# Or, if you're on Windows:
del *

# Then, switch back to the project folder
cd ..
```

1. `src/` хавтаст `index.css` нэртэй файлыг [энд бичсэн CSS кодтойгоор](https://codepen.io/gaearon/pen/oWWQNa?editors=0100) үүсгээрэй.

2. `src/` хавтаст `index.js` файлыг [энд бичсэн JS кодтойгоор](https://codepen.io/gaearon/pen/oWWQNa?editors=0010) үүсгээрэй.

3. `src/` хавтас дахь `index.js` файлын дээд талд доорх 3 мөр кодыг бич:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
```

Одоо хэрэв `npm start` гэж төслийн хавтсанд ажиллуулаад хөтөч дээрээ `http://localhost:3000` хаягийг нээвэл хоосон tic-tac-toe тоглоомын хөлөг гарч ирэх болно.

Бид танд [энэ зааврыг](https://babeljs.io/docs/editors/) дагаж хийгээд өөрийн эдитор дээр бичиглэлийн тодруулалтыг тохируулахыг зөвлөж байна.

</details>

### Туслаарай, Би гацчихлаа! {#help-im-stuck}

Хэрэв гацчихаад байвал энэхүү [олон нийтийн тусламжийн сувгаар](/community/support.html) орж үзээрэй. Ялангуяа, [Reactiflux Chat](https://discord.gg/reactiflux) бол хурдан хугацаанд тусламж авах гайхалтай арга байх болно. Хэрэв чи хариулт авч чадахгүй, ямар нэгэн байдлаар гацсан хэвээр л байвал issue үүсгээрэй, тэгвэл бид танд тусална.

## Ерөнхий мэдээлэл {#overview}

Одоо та бэлтгэлээ хангачихсан бол React-ийн талаар ерөнхий мэдлэг олж авцгаая!

### React гэж юу вэ? {#what-is-react}

React бол user interface хийхэд зориулсан үр дүнтэй, ямар нэгэн журамд баригдаагүй, уян хатан JavaScript сан юм. Энэ нь чамд бүрэн цогц UI-үүдийг "components" гэх бие даасан кодуудаас бүрэлдүүлэх боломжийг олгоно.

React нь хэдэн төрлийн ялгаатай компонентуудтай боловч `React.Component` дэд классаас эхэлцгээе:

```javascript
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
```

Удахгүй дээрх XML төрлийн бичиглэлийг тайлбарлана. Бид нар компонентыг React-д дэлгэц дээр юу гаргахыг хүсэж байгаагаа хэлэхэд ашигладаг. Өгөгдөл өөрчлөгдөх үед React үр дүнтэйгээр компонентыг шинэчилж, дахин үзүүлдэг (render).

Дээр буй ShoppingList бол **React компонентын класс**, буюу **React компонентын төрөл** юм. Компонент нь `props` ("properties" гэдгийн товчлол) гэсэн параметр аваад `render` методоор шаталсан бүтэцтэй үзүүлэх зүйлийг буцаана.

`render` метод нь дэлгэц дээр юу гаргахыг хүсэж байгаа зүйлийн чинь *тайлбар тодорхойлолт* буцаадаг. React тэр тайлбар тодорхойлолтыг аваад үр дүнг харуулна. Тодруулбал `render` метод нь юуг үзүүлэхийг л тодорхойлсон **React element** буцаадаг байх нь. Ихэнх React хөгжүүлэгчид үзүүлэх зүйлийг хялбар бичих боломжтой болгодог "JSX" гэх тусгай бичиглэлийг ашигладаг бөгөөд `<div />` бичиглэл нь хөрвүүлэлтийн шатанд `React.createElement('div')` уруу хөрвүүлэгдэж байгаа. Тиймээс дээрх жишээ нь доорх кодтой ижил гэсэн үг:

```javascript
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
```

[Дэлгэрэнгүй кодыг ийшээ орж хараарай .](babel://tutorial-expanded-version)

Хэрэв сонирхож байвал `createElement()` функцийн тайлбар нь [API reference](/docs/react-api.html#createelement)-т дэлгэрэнгүй байгаа боловч энэхүү зааварчилгаанд хэрэглэгдэхгүй. Түүний оронд бид JSX ашиглах болно.

JSX нь Javascript-ийн бүх боломжийг ашиглах боломжтой байдаг тул та *ямар ч* JavaScript илэрхийллийг JSX-ийн дотор угалзан хаалтад(`{...}`) бичин ашиглаж болно. React элемент нь хувьсагчид утга оноон эсвэл өөрийнхөө програм дотроо нэгээс нөгөөд дамжуулан ашиглаж болох JavaScript объект юм.

Дээрх `ShoppingList` компонент нь зөвхөн `<div />` болон `<li />` гэх анхнаасаа байдаг DOM компонентуудыг render хийж байна. Гэхдээ та хүссэн React компонентоо үүсгэж, render хийх боломжтой. Жишээ нь бид одоо `<ShoppingList />` гэж бичин бүтэн дэлгүүрийн барааны жагсаалт (shopping list)-г оруулж ирэх боломжтой. React компонентууд нь encapsulated бөгөөд бие даан ажилладаг. Энэ нь цогц үйлдэлтэй UI-уудыг энгийн компонентуудаас үүсгэх боломж олгоно.

## Суурь кодыг ойлгох нь{#inspecting-the-starter-code}

Хэрэв энэхүү зааварчилгааг **хөтөч дээрээ** даган ажиллахаар болсон бол дараах кодыг шинэ тааб дээр нээ: **[Суурь код](https://codepen.io/gaearon/pen/oWWQNa?editors=0010)**. Хэрэв зааварчилгааг өөрийн **дотоод орчинд** даган ажиллах болсон бол төслийн хавтас дахь `src/index.js` -г нээгээрэй. ([бэлдцийн](#setup-option-2-local-development-environment) үед энэ файлыг үүсгэсэн байх ёстой.).

Энэхүү суурь код нь бидний хийж байгаа зүйлийн эхлэл болох юм. Таныг зөвхөн React сурах болон tic-tac-toe програмчлахад төвлөрөхөд туслах зорилгоор CSS хэвбэржүүлэлтийн кодыг бэлдэж өгсөн.

Кодыг хараад та бидэнд гурван React компоненттой байгааг анзаарна:

* Square (дөрвөлжин)
* Board (хөлөг)
* Game (тоглоом)

Square компонент нь нэг ширхэг `<button>` render хийх бөгөөд Board нь 9 дөрвөлжин нүд render хийнэ. Game компонент нь хөлгийг зарим тодорхойгүй утгатай зурж render хийж байгаа бөгөөд тэр утгуудыг бид сүүлд өөрчлөх болно. Одоохондоо ямар ч харилцан үйлчлэлцдэг компонент байхгүй байгаа.

### Props-р өгөгдөл дамжуулах {#passing-data-through-props}

Эхлээд Board компонентоос Square компонент уруу өгөгдөл дамжуулах гэж оролдъё.

Таныг зааварчилгааг ажиллах явцдаа кодуудыг copy/paste хийхгүйгээр өөрөө бичихийг санал болгож байна. Энэ нь таны биед ой санамж үүсгэхээс гадна, илүү ойлгоход тусалдаг.

Board-ийн `renderSquare` методын кодыг `value` гэх props-г Square уруу дамжуулахаар өөрчилье:

```js{3}
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}
```

Square-ийн `render`-д тэрхүү утга (value)-г үзүүлэхийн тулд `{/* TODO */}`-г `{this.props.value}`-ээр сольж бичье:

```js{5}
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```

Өмнө нь:

![React Devtools](../images/tutorial/tictac-empty.png)

Дараа нь: Дөрвөлжин бүрд одоо тоо харагдах ёстой.

![React Devtools](../images/tutorial/tictac-numbers.png)

**[Яг одоо код ямар байгааг ийшээ орж хараарай](https://codepen.io/gaearon/pen/aWWQOG?editors=0010)**

Баяр хүргэе! Та дөнгөж сая эцэг Board компонентоос хүү Square компонент уруу "prop" дамжуулчихлаа. React програмд эцэг компонентоос хүү компонент уруу props өгч мэдээллийг дамжуулдаг.

### Харилцан үйлчлэлцдэг компонент хийх {#making-an-interactive-component}

Одоо Square компонентыг дарах үед түүнийг "X"-ээр бөглөе.
Эхлээд Square компонентын `render()` функцийн буцааж байгаа button таагийг доорх байдлаар өөрчилье:

```javascript{4}
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={function() { console.log('click'); }}>
        {this.props.value}
      </button>
    );
  }
}
```

Хэрэв одоо Square(дөрвөлжин) дээр дарах юм бол хөтөч дээр чинь alert өгөх болно.

>Анхаарах
>
>Бичиглэл бага байлгах болон [`this`-ийн ойлгомжгүй байдлаас](https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/) зайлс хийхийн тулд, event handler-таа энд болон цаашид [arrow function бичиглэл](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)-г ашиглалаа:
>
>```javascript{4}
>class Square extends React.Component {
>  render() {
>    return (
>      <button className="square" onClick={() => console.log('click')}>
>        {this.props.value}
>      </button>
>    );
>  }
>}
>```
>
>`onClick={() => alert('click')}`-аар хэрхэн `onClick` prop-т *функц* дамжуулж байгааг анзаараарай. React энэ функцийг зөвхөн click хийсний дараа дуудна. `() =>` гэхээ мартаж `onClick={alert('click')}` гэж бичих нь түгээмэл алдаа бөгөөд нь энэ нь компонентыг дахин үзүүлэх (render хийх) болгонд alert гаргадаг.

Дараагийн алхамд Square компонент биднийг click хийснийг "санаж" өөрийгөө "X" тэмдэглэгээгээр бөглөх ёстой. Ямарваа юмыг "санахын" тулд компонент **state**(төлөв байдал) ашигладаг.

React компонентын байгуулагч(constructor)-т `this.state`-ийн утгыг оноосноор компонентыг state-тэй болгодог. `this.state` нь түүнийг тодорхойлсон React компонент дотор private байх учиртай. Одоо Square-ийн `this.state` дэх анхны утгыг тодорхойлоод түүнийг дараа нь Square-д click хийгдэх үед өөрчилье.

Эхлээд state-г үүсгэхийн тулд класст constructor(байгуулагч) нэмж өгье:

```javascript{2-7}
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => console.log('click')}>
        {this.props.value}
      </button>
    );
  }
}
```

>Анхаарах
>
>[JavaScript класст](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) дэд(хүү) классын байгуулагчийг тодорхойлж байгаа үед заавал `super` функцийг дуудаж байх ёстой. Тиймээс бүх `constructor`-тай React компонентуудын байгуулагч нь `super(props)` гэж эхэлж байх ёстой болно.

Одоо click хийх үед state-ийн утгыг харуулахын тулд Square-ийн `render` методыг өөрчилцгөөе:

* `<button>` тааг доторх `this.props.value`-г `this.state.value`-ээр соль.
* `onClick={...}` эвент хандлерыг `onClick={() => this.setState({value: 'X'})}`-ээр соль.
* `className` болон `onClick` props-г тусдаа мөрөнд бичиж уншигдах байдлыг сайжруулъя.

Энэхүү өөрчлөлтийг хийсний дараа Square-ийн `render`  методоос буцан ирж буй `<button>` тааг доорх байдлаар харагдана:

```javascript{12-13,15}
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}
```

Square-ийн `render` метод дотор `onClick` handler -с `this.setState`-г дуудсанаар React-д Square-ийн `<button>` click хийгдэх болгонд түүнийг дахин render хийхийг даалгаж байгаа юм. Шинэчлэгдсэний дараа Square-ийн `this.state.value` нь `'X'` болох бөгөөд тиймээс тоглоомыг хөлөг дээр `X`-г үзүүлэх болно. Хэрэв ямар нэгэн Square дээр дарвал `X` гарч ирнэ.

Компонентын `setState`-г дуудах үед React тэрхүү компонент болон түүний доторх дэд компонентуудыг ч бас шинэчилнэ.

**[Яг одоо код ямар байгааг ийшээ орж хараарай](https://codepen.io/gaearon/pen/VbbVLg?editors=0010)**

### Хөгжүүлэгчийн хэрэгсэл {#developer-tools}

[Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) болон [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)-т зориулсан хөгжүүлэгчийн хэрэгсэл React Devtools нэмэлтийг суулгаснаар хөтөчийнхөө хөгжүүлэгчийн хэрэгсэл хэсгээс React компонентын бүтцийг харж болдог.

<img src="../images/tutorial/devtools.png" alt="React Devtools" style="max-width: 100%">

React DevTools-ээр мөн React компонентын props болон state-г харж болно.

React DevTools суулгасны дараа хуудасны дурын элемент дээр right-click хийн "Inspect" дээр даран хөгжүүлэгчийн хэрэгслийг нээх бөгөөд React тааб ("⚛️ Components" and "⚛️ Profiler") хамгийн баруун талд гарч ирсэн байх болно. "⚛️ Components" ашиглан компонент мод бүтцийг шинжилж болно.

**Гэхдээ CodePen дээр үүнийг ажиллуулахын тулд нэмж хэдэн зүйл хийх хэрэгтэй:**

1. Нэвтэрч орох юм уу бүртгүүлээд и-мэйл хаягаа баталгаажуулах (спам-с сэргийлэхэд хэрэгтэй).
2. "Fork" товч дээр дар.
3. "Change View" дээр дараад "Debug mode"-г сонго.
4. Одоо шинэ тааб нээх үед хөгжүүлэгчийн хэрэгсэл чинь React таабтай болсон байх ёстой.

## Тоглоомоо дуусгая {#completing-the-game}

Одоо бид tic-tac-toe тоглоомын суурийг өрчихсөн байгаа. Тоглоомыг дуусгахын тулд бид одоо "X" болон "O"-г сольж нүүдэг мөн ялагчийг тодорхойлдог болгох ёстой.

### State-г дээш дамжуулах {#lifting-state-up}

Одоогоор Square компонент бүр тусдаа тоглоомын төлөв(state)-г хадгалж байна. Ялагчийг шалгаруулахын тулд 9 square бүрийн утгыг нэг цэгт удирдах хэрэгтэй.

Яахав Board нь Square бүрээс түүний state-ийн утгыг асууж болох юм гэж бодож байна уу. Хэдийгээр React дээр ингэж хийх боломжтой боловч ингэж хийснээр код нь ойлгоход хэцүү, алдаа гарах магадлалтай, засварлахад хүнд болох учраас тэгэхгүй байхыг зөвлөж байна. Түүний оронд хамгийн сайн хандлага бол тоглоомын state-г Square бүрт хадгалахын оронд эцэг Board компонент дээр хадгалах юм. Board компонент нь Square бүрт [өмнө нь Square бүрт тоо дамжуулж байсан шиг](#passing-data-through-props) юуг үзүүлэхийг prop-р дамжуулан хэлж болно.

**Олон хүү компонентоос өгөгдөл цуглуулахын тулд эсвэл хоёр хүү компонент хоорондоо харилцахын тулд тэдний эцэг компонентод дундын state зарлах хэрэгтэй. Эцэг компонент нь state-г эргээд хүү компонентууд уруу props-р дамжуулах бөгөөд энэ нь хүү компонентуудыг бусад хүүнүүд болон эцэг компоненттой нэгэн зэрэг ажилладаг болгоно.**

State-г дээш эцэг компонент уруу дамжуулах нь React компонентыг дахин шинэчлэх үед түгээмэл хийгддэг үйлдэл бөгөөд үүнийг өөрсдөө одоо хийж үзэцгээе.

Board-д байгуулагч нэмээд Board-ийн state-ийн анхны утгыг 9 нүд бүрд харгалзан 9 null агуулах хүснэгт байдлаар онооё:

```javascript{2-7}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value={i} />;
  }
```

Дараа нь бид хөлгийг харгалзах утгаар бөглөх үед  `this.state.squares` хүснэгт нь доорх байдлаар болно:

```javascript
[
  'O', null, 'X',
  'X', 'X', 'O',
  'O', null, null,
]
```

Board-ийн `renderSquare` метод одоо ийм байдлаар харагдана:

```javascript
  renderSquare(i) {
    return <Square value={i} />;
  }
```

Эхлээд бид Square бүрт 0-с 8 хүртэл тоо гаргахын тулд Board-с [`value` prop-г доош дамжуулж өгсөн](#passing-data-through-props). Дараагийн алхамд бид [Square-г өөрийн state-с хамаарч](#making-an-interactive-component) тоонуудыг "X" тэмдгээр сольдог болгосон. Тиймээс одоо Square нь Board-с дамжуулж өгч байгаа `value` prop-ийн утгыг ашиглахгүй байгаа.

Одоо бид prop дамжуулах механизмыг дахин ашиглах болно. Бид Board-г Square бүрт түүнийг одоогийн утгыг(`'X'`, `'O'`, эсвэл `null`) зааж өгдөг болгож өөрчилнө. Өмнө нь Board-ийн байгуулагчид `squares` array үүсгэсэн байгаа бөгөөд одоо Board-ийн `renderSquare` методыг тэр array-с утга авдаг болгож өөрчилнө:

```javascript{2}
  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }
```

**[Яг одоо код ямар байгааг ийшээ орж хараарай](https://codepen.io/gaearon/pen/gWWQPY?editors=0010)**

Одоо Square бүр `'X'`, `'O'`, эсвэл хоосон нүдний хувьд `null` утгыг `value` prop-р авах болно.

Дараа нь бид Square дээр дарахад хийгдэх үйлдлийг солих ёстой. Одоо Board компонент аль нүд бөглөгдөж байхыг шийдэх учраас бидэнд Square нь Board-ийн state-г өөрчлөх арга зам хэрэгтэй болох юм. State нь түүнийг тодорхойлсон компонентын хувьд private тул Board-ийн state-г шууд Square-с өөрчилж чадахгүй.

Түүний оронд бид Board-с Square уруу функц дамжуулж өгөх бөгөөд Square дээр дарахад тэр функцийг Square дуудаж байх болно. Тиймээс Board-ийн `renderSquare` методыг доорх байдлаар өөрчилье:

```javascript{5}
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
```

>Анхаарах
>
>Бид уншихад тохиромжтойг нь бодож буцах элементийг олон мөрт хувааж бичсэн бөгөөд Javascript `return`-ийн ард цэгтэй таслал (;) оруулж улмаар бидний кодыг эвдүүлэхээс сэргийлж хаалт нэмж өглөө.

Одоо Board-с Square уруу хоёр prop дамжуулж өгч байна: `value` болон `onClick`. `onClick` prop нь Square дээр дарахад дуудаж өгөх функц юм. Мөн доорх өөрчлөлтийг Square-т оруулна:

* Square-ийн `render` метод доторх `this.state.value`-г `this.props.value`-ээр солино.
* Square's `render` метод доторх `this.setState()`-г `this.props.onClick()`-ээр солино
* Square нь state удирдахаа больсон тул Square-ийн байгуулагч `constructor` функцийг устгана.

Өөрчлөлтийн дараа Square компонент доорх байдлаар харагдана:

```javascript{1,2,6,8}
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
```

Square дээр дарахад Board-с дамжуулж өгч байгаа `onClick` функц дуудагдах бөгөөд хэрхэн энэ үйлдэл явагдахыг доорх байдлаар тайлбарлаж болно:

<<<<<<< HEAD
1. Анхнаасаа байдаг DOM компонент `<button>`-ийн `onClick` prop нь React-д click event-ийн listener-г бэлдэхийг даалгадаг.
2. button дарагдах үед React нь Square-ийн `render()` метод дотор тодорхойлогдсон`onClick` event handler-г дуудах болно.
3. Тэр event handler нь `this.props.onClick()`-г дуудах бөгөөд энэ Square-ийн `onClick` prop-г Board тодорхойлж өгсөн байгаа.
4. Board нь Square уруу `onClick={() => this.handleClick(i)}` гэж дамжуулсан учраас Square нь дарагдах үедээ `this.handleClick(i)` гэж дуудна.
5. Бид одоогоор `handleClick()` методыг тодорхойлж өгөөгүй байгаа учраас хэрэв та square дээр дарвал кодонд асуудал үүсэж, "this.handleClick is not a function" (this.handleClick нь функц биш) гэсэн улаан алдааны мэдээлэл гарах болно.
=======
1. The `onClick` prop on the built-in DOM `<button>` component tells React to set up a click event listener.
2. When the button is clicked, React will call the `onClick` event handler that is defined in Square's `render()` method.
3. This event handler calls `this.props.onClick()`. The Square's `onClick` prop was specified by the Board.
4. Since the Board passed `onClick={() => this.handleClick(i)}` to Square, the Square calls the Board's `handleClick(i)` when clicked.
5. We have not defined the `handleClick()` method yet, so our code crashes. If you click a square now, you should see a red error screen saying something like "this.handleClick is not a function".
>>>>>>> 8223159395aae806f8602de35e6527d35260acfb

>Анхаарах
>
>DOM `<button>` компонент нь анхнаасаа байдаг цаанаасаа тодорхойлж өгсөн компонент учраас `onClick` атрибут нь React-ийн хувьд онцгой байдалтай юм. Харин Square зэрэг өөрийн хийсэн компонентын хувьд хэрхэн нэрлэхийг та өөрөө шийднэ. Бид Square-ийн `onClick` prop юм уу Board-ийн `handleClick` методыг дурын байдлаар нэрлэж болох бөгөөд тэгсэн ч код яг ижилхэн ажиллах болно. React-ийн хувьд event-г илэрхийлж байгаа prop-г `on[Event]`, event-г боловсруулах методыг `handle[Event]` гэж нэрлэх нь уламжлал болсон байдаг.

Бид одоогоор `handleClick`-г тодорхойлж өгөөгүй байгаа учраас Square-г дарах үед алдаа гарах болно. Одоо `handleClick`-г Board class-т нэмж өгье:

```javascript{9-13}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```

**[Яг одоо код ямар байгааг ийшээ орж хараарай](https://codepen.io/gaearon/pen/ybbQJX?editors=0010)**

Энэхүү өөрчлөлтийн дараа бид өмнөхийн адил Square дээр дарах боломжтой болно. Гэхдээ state нь тус тусдаа Square нүднүүдэд биш Board-д хадгалагдаж байгаа. Board-ийн state өөрчлөгдөх үед Square компонентууд автоматаар дахин зурагдаж render хийгдэх болно. Бүх нүдний state-г Board компонентод хадгалснаар бид дараа нь ялагчийг тогтоох боломжтой болж байгаа юм.

Square компонент state-г удирдахаа больсон учраас Square нь Board компонентоос утгаа авч, түүнийг дарах үед Board компонент уруу эргээд мэдээлж байна. React-д Square шиг компонентыг  **удирдагдсан компонент** гэж хэлдэг. Board нь түүнийг одоо бүрэн удирдах болно.

Бид `handleClick` функц дотор хэрхэн `.slice()` функцийг дуудаж `squares` array-ийн өмнөх хувилбарыг өөрчлөхгүйгээр шинээр хуулбар үүсгэж байгааг анхаараарай. Бид яагаад ийнхүү `squares` array-ийн хуулбарыг үүсгэж байгааг одоо тайлбарлая.

### Хувиршгүй байдал(Immutability) яагаад чухал болох нь {#why-immutability-is-important}

<<<<<<< HEAD
Өмнөх жишээнд өөрчлөх ёстой `squares` array-ийн хуулбарыг `.slice()` оператор ашиглан үүсгэхийг билээ. Одоо бид хувиршгүй байдал гэж болох тухай болон яагаад хувиршгүй байдал чухал талаар ярих болно.
=======
In the previous code example, we suggested that you create a copy of the `squares` array using the `slice()` method instead of modifying the existing array. We'll now discuss immutability and why immutability is important to learn.
>>>>>>> 8223159395aae806f8602de35e6527d35260acfb

Ерөнхийдөө өгөгдлийг өөрчлөх хоёр хандлага байдаг. Эхнийх нь өгөгдлийн утгыг шууд өөрчлөх замаар өгөгдлийг *хувиргах*. Нөгөөх нь өгөгдлийг хүсэж байгаа өөрчлөлт хийгдсэн хуулбар өгөгдлөөр солих арга байна.

#### Хувиргалтаар өгөгдлийг өөрчлөх {#data-change-with-mutation}
```javascript
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// одоо player нь {score: 2, name: 'Jeff'} болно
```

#### Хувиргалтгүй өгөгдлийг өөрчлөх {#data-change-without-mutation}
```javascript
var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// Одоо player нь өөрчлөгдөөгүй боловч newPlayer нь {score: 2, name: 'Jeff'} болно

<<<<<<< HEAD
// Эсвэл объектыг тархаах бичиглэл ашиглавал доорхоор бичиж болно:
=======
// Or if you are using object spread syntax, you can write:
>>>>>>> 8223159395aae806f8602de35e6527d35260acfb
// var newPlayer = {...player, score: 2};
```

Эцсийн үр дүн ижил боловч шууд хувиргалтгүйгээр (эсвэл гол өгөгдлийг өөрчлөхгүйгээр) доор дурдсан давуу байдлыг олж болж байгаа юм.

#### Төвөгтэй шаардлагыг хялбарчлах {#complex-features-become-simple}

Хувиршгүй байдал нь төвөгтэй шаардлагыг хийхэд энгийн болгож өгдөг. Энэхүү зааварчилгааны төгсгөлд tic-tac-toe тоглоомын түүхийг харж, өмнөх нүүдэл уруу "ухрах" боломжийг олгох "цаг хугацааны аялал"-н боломжийг хөгжүүлэх болно. Энэхүү үйлдэл нь зөвхөн тоглоом битгий хэл угаасаа л тодорхой үйлдлийг ухраах, урагшлуулах нь хэрэглээний програмын түгээмэл шаардлага билээ. Өгөгдлийг шууд өөрчлөхөөс зайлс хийх нь бидэнд тоглоомын түүхийн өмнөх хувилбаруудыг бүхлээр нь хадгалах мөн тэднийг дараа дахин ашиглах боломж олгоно.

#### Өөрчлөлтийг илрүүлэх {#detecting-changes}

Хувирахуйц(Mutable) объектын утгуудыг шууд хувиргаад явчихдаг учраас өөрчлөгдсөн эсэхийг илрүүлэх нь хүнд байдаг. Өөрчлөлтийг илрүүлэхийн тулд хувируйц объектийг өмнөх хувилбартай нь жиших хэрэгтэй болохоос гадна бүтэн объектын модоор нэг бүрчлэн орж шалгах хэрэгтэй болдог.

Харин хувиршгүй объектын өөрчлөлтийг илрүүлэх нь хамаагүй хялбар. Хувиршгүй объектын заалт нь өөрчлөгдсөн бол объект өөрчлөгдсөн гэсэн үг.

#### React хэзээ дахин render хийхийг тодорхойлох {#determining-when-to-re-render-in-react}

Хувиршгүй байдлын гол давуу тал нь React-д _pure components_ үүсгэхэд тусалдаг. Хувиршгүй өгөгдлийг өөрчлөгдсөн эсэхийг хялбар мэдэж болдог бөгөөд улмаар компонентыг хэзээ дахин зурахыг тодорхойлоход хялбар болгодог.

[Гүйцэтгэлийг оновчлох нь ](/docs/optimizing-performance.html#examples) хэсгээс `shouldComponentUpdate()`-ийн талаар болон хэрхэн *pure components* хийхийг уншаарай.

### Функцэн компонент {#function-components}

Одоо бид Square-г **функцэн компонент** болгон засах болно.

React-д **функцэн компонент** нь өөрийн state-гүй зөвхөн `render` функцийг агуулдаг компонент бичих энгийн арга юм. `React.Component`-с удамшсан класс тодорхойлохын оронд зөвхөн `props` аваад юуг render хийхийг буцаадаг функц бичиж болдог. Функцэн компонент нь класс бичихээс ажил багатай бөгөөд олон төрлийн компонент энэ аргаар бичигдэж болдог.

Square классыг доорх функцээр сольё:

```javascript
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```

`this.props`-г `props` болгож өөрчилсөн болно.

**[Яг одоо код ямар байгааг ийшээ орж хараарай](https://codepen.io/gaearon/pen/QvvJOv?editors=0010)**

>Анхаарах
>
>Square-г функцэн компонент болгон өөрчлөх үед `onClick={() => this.props.onClick()}`-г илүү богинохон `onClick={props.onClick}` болгон мөн өөрчиллөө. (*хоёр* талд нь хаалтгүй болсон байгааг назгайраарай).

### Ээлжлэх нь {#taking-turns}

Одоо бид тоглоом дээрээ "O" тэмдэглэгдэхгүй байгаа мэдээжийн алдааг засах болно.

Бид эхний нүүдлийг "X" гэж тохируулах бөгөөд үүнийг Board-ийн байгуулагчид state-ийн анхны утга оноохдоо зааж өгөх болно:

```javascript{6}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
```

Тоглогч нүүх бүрд `xIsNext` (boolean) утга нь солигдож дараагийн удаа аль тоглогч нүүхийг тодорхойлох бөгөөд тоглоомын state-д хадгалагдана. Board-ийн `handleClick` функцийг засаж `xIsNext`-ийн утгыг сольдог өөрчлөлтийг хийе:

```javascript{3,6}
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
```

Одоо энэ өөрчлөлтөөр "X" болон "O"-ийн утга ээлжлэх юм. Оролдоод ч үзэж болно!

Одоо мөн Board-ийн `render` доторх "status" текстийг сольсноор дараагийн удаа аль тоглогч нүүхийг дэлгэц дээр харуулна:

```javascript{2}
  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      // the rest has not changed
```

Энэ бүгдийг хийсний дараа Board компонент маань ийм болж хувирна:

```javascript{6,11-16,29}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```

**[Яг одоо код ямар байгааг ийшээ орж хараарай](https://codepen.io/gaearon/pen/KmmrBy?editors=0010)**

### Ялагчийг зарлах нь {#declaring-a-winner}

Одоо бид дараагийн нүүдэл аль тоглогчийнх гэдгийг харуулж байгаа бөгөөд түүнээс гадна тоглоом хожилцсоныг эсвэл нүүх нүүдэл үлдээгүй гэдгийг мөн харуулах учиртай. Доорх туслах функцийг хуулаад файлынхаа хамгийн төгсгөлд буулгаарай:

```javascript
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```

9 нүдтэй array-ийн хувьд энэ функц нь ялагчийг шалгаж аль тохиромжтой `'X'`, `'O'`, эсвэл `null` утгыг буцаадаг.

Бид аль нэг тоглогч хожсон эсэхийг шалгахдаа Board-ийн `render` функц дотор `calculateWinner(squares)`-г дуудах болно. Хэрэв аль нэг нь хожвол бид "Winner: X" эсвэл "Winner: O" гэсэн текст үзүүлэх юм. Board-ийн `render` функц доторх `status`-ийн зарлалтыг доорх кодоор сольё:

```javascript{2-8}
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      // the rest has not changed
```

Одоо Board-ийн `handleClick` функцийг хэрэв аль нэг тоглогч хожсон юм уу тухайн нүд нь аль хэдийн дарагдсан байвал дахиж дарахад хариу үйлдэл үзүүлэхгүй шууд return хийдэг болгож засъя:

```javascript{3-5}
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
```

**[Яг одоо код ямар байгааг ийшээ орж хараарай](https://codepen.io/gaearon/pen/LyyXgK?editors=0010)**

Баяр хүргэе! Одоо чи ажилладаг tic-tac-toe хийж чадлаа. Мөн чи React-ийн үндсийг сурсан. Тиймээс энэ тоглоомонд *чи* жинхэнэ ялагч боллоо.

## Цаг хугацааны аялал нэмэх нь {#adding-time-travel}

Сүүлийн дасгал болгож бүгдээрээ тоглоомын өмнөх нүүдлүүд уруу "цаг хугацааг ухраах" боломжийг бүрдүүлцгээе.

### Нүүдлүүдийн түүхийг хадгалах нь {#storing-a-history-of-moves}

Хэрэв бид `squares` array-г хувиргах(mutate) юм бол цаг хугацааны аялал хийх нь үнэхээр хэцүү болох болно.

Гэхдээ бид `slice()` функц ашиглан `squares` array-ийн хуулбарыг нүүдэл бүрийн дараа үүсгэж байгаа бөгөөд [хувиршгүй гэж тооцсон байгаа](#why-immutability-is-important). Энэ нь бидэнд `squares` array-ийн өмнөх хувилбар бүрийг хадгалах, өмнө болсон нүүдэл бүрийн хооронд явах боломжийг олгоно.

Хуучин `squares` array-г өөр `history` гэсэн array-д хадгалъя. `history` нь эхний нүүдлээс эцсийн нүүдэл хүртэлх Board-ийн бүх state-г хадгалах бөгөөд доорх байдлаар харагдана:

```javascript
history = [
  // Before first move
  {
    squares: [
      null, null, null,
      null, null, null,
      null, null, null,
    ]
  },
  // After first move
  {
    squares: [
      null, null, null,
      null, 'X', null,
      null, null, null,
    ]
  },
  // After second move
  {
    squares: [
      null, null, null,
      null, 'X', null,
      null, null, 'O',
    ]
  },
  // ...
]
```

Одоо бид аль компонент `history` state-г өөртөө агуулахыг шийдэх хэрэгтэй.

### Дахиад State-г дээш дамжуулах нь {#lifting-state-up-again}

Бид нар дээд талын Game компонент өнгөрсөн нүүдлийн жагсаалтыг харуулахыг хүсэж байгаа. Тэгэхийн тулд энэ компонент `history` уруу хандах хэрэгтэй бөгөөд тиймээс `history` state-г дээд талын Game компонентод байрлуулъя.

`history` state-г Game компонентод байрлуулах нь биднийг `squares` state-г түүнийг хүү Board компонентоос устгах нөхцөл бүрдүүлнэ. Яг өмнө нь Square компонентоос Board компонент уруу ["state дээш дамжуулж "](#lifting-state-up) байсан шиг бид одоо Board компонентоос дээд талын Game компонент уруу дээш дамжуулах болно. Ингэснээр Game компонент нь Board-ийн өгөгдлийг бүрэн удирдах бөгөөд `history`-с өмнөх нүүдлийг авч Board-р үзүүлэх боломжтой болгох юм.

Эхлээд Game компонентын state-г түүний байгуулагч дотор үүсгэе:

```javascript{2-10}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
```

Дараа нь Board компонентыг `squares` болон `onClick` props-г Game компонентоос авдаг болгоё. Board компонентод бүх Square-т зориулж ганц л click handler байгаа учраас бид аль Square дарагдсаныг мэдэгдэхийн тулд Square тус бүрийн байрлалыг `onClick` handler уруу дамжуулах ёстой. Тиймд Board компонентод дараах өөрчлөлтийг хийх хэрэгтэй болно:

* Board доторх `constructor`-г устгана.
* Board-ийн `renderSquare` доторх `this.state.squares[i]`-г `this.props.squares[i]`-ээр солино.
* Board-ийн `renderSquare` доторх `this.handleClick(i)`-г `this.props.onClick(i)`-ээр солино.

Board компонент одоо доорх байдалтай болно:

```javascript{17,18}
class Board extends React.Component {
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```

Тоглоомын төлөвийг тодорхойлох улмаар үзүүлэхэд хамгийн сүүлийн history бүртгэлийг ашиглах гэж Game компонентын `render` функцийг доорх байдлаар засъя:

```javascript{2-11,16-19,22}
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
```

Game компонент нь одоо тоглоомын төлөвийг үзүүлж байгаа учир бид Board компонентын `render` методоос харгалзах кодыг устгаж болно. Тэгсний дараа Board-ийн `render` функц ийм байдалтай болно:

```js{1-4}
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
```

Эцэст нь `handleClick` методыг Board компонентоос Game компонент уруу зөөх хэрэгтэй. Game компонентын state нь өөр бүтэцтэй тул бид `handleClick`-г бага зэрэг засах хэрэгтэй болно. Game-ийн `handleClick` метод дотор бид шинэ history бүртгэлийг `history` уруу залгаж(concat) өгье.

```javascript{2-4,10-12}
  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
    });
  }
```

>Анхаарах
>
>Бидний илүү танил array `push()` методоос ялгаатай нь `concat()` метод нь үндсэн array-г хувиргадаггүй учраас бид үүнийг ашигласан шүү.

Board компонентод одоо зөвхөн `renderSquare` болон `render` методууд л хэрэг болно. Тоглоомын төлөв байдал болон `handleClick` метод нь Game компонентод байвал илүү тохиромжтой.

**[Яг одоо код ямар байгааг ийшээ орж хараарай](https://codepen.io/gaearon/pen/EmmOqJ?editors=0010)**

### Хуучин нүүдлүүдийг харуулах нь {#showing-the-past-moves}

tic-tac-toe тоглоомын түүхийг тэмдэглэж авч байгаа учраас бид тоглогчдод түүнийг хуучин нүүдлийн жагсаалт байдлаар харуулах боломжтой.

Бид өмнө нь React элементүүдийг first-class JavaScript objects учраас тэдгээрийг аппликейшн дотроо дамжуулж болно гэдийг мэдэж авсан. React-д олон юм render хийхийн тулд React элементийн array ашиглаж болдог.

JavaScript-т array нь өгөгдлийг нь өөр өгөгдөлд map(буулгалт) хийдэг [`map()` методтой](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map):

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2); // [2, 4, 6]
```

`map` методыг ашиглаад нүүдлүүдийн түүхийг тус бүр нь дэлгэц дээр button гаргах React элементүүд уруу буулгалт хийж хуучин нүүдэл уруу буцах button-ийн жагсаалт үзүүлье.

Game-ийн `render` метод дахь`history`-г `map` хийвэл:

```javascript{6-15,34}
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
```

**[Яг одоо код ямар байгааг ийшээ орж хараарай](https://codepen.io/gaearon/pen/EmmGEa?editors=0010)**

<<<<<<< HEAD
tic-tac-toe-ийн өмнө гарсан нүүдэл бүрд `<button>` элемент агуулах жагсаалтын `<li>` элемент үүсгэлээ. Товч бүрт нь `this.jumpTo()` методыг дууддаг `onClick` handler бичиж өгсөн. Одоогоор `jumpTo()` методыг хөгжүүлж өгөөгүй байгаа болно. Одоо тоглоомын туршид болсон бүх нүүдлийн жагсаалт дэлгэц дээр харагдаад харин developer tools console дээр доорх анхааруулга гарсан байх ёстой.
=======
As we iterate through `history` array, `step` variable refers to the current `history` element value, and `move` refers to the current `history` element index. We are only interested in `move` here, hence `step` is not getting assigned to anything.

For each move in the tic-tac-toe game's history, we create a list item `<li>` which contains a button `<button>`. The button has a `onClick` handler which calls a method called `this.jumpTo()`. We haven't implemented the `jumpTo()` method yet. For now, we should see a list of the moves that have occurred in the game and a warning in the developer tools console that says:
>>>>>>> 8223159395aae806f8602de35e6527d35260acfb

>  Warning:
>  Each child in an array or iterator should have a unique "key" prop. Check the render method of "Game".

>Анхааруулга:
>array юм уу iterator-ийн бүх хүү нь давхардахгүй "key" prop-той байх хэрэгтэй. "Game"-ийн render методыг шалгана уу.

Одоо дээрх анхааруулга ямар утгатайг тайлбарлая.

### Key-г сонгох нь {#picking-a-key}

Ямар нэгэн жагсаалт(list) render хийхдээ React жагсаалтын нэгж(item) бүрийн тухай зарим мэдээллийг хадгалж авдаг. Тэгээд жагсаалт шинэчлэгдэх үед React юу өөрчлөгдсөн гэдгийг тодорхойлох ёстой. Бид нар жагсаалтын нэгжийг шинээр нэмж, устгаж, дахин эрэмбэлж эсвэл шинэчилж болох л юм.

Гэхдээ доорхыг

```html
<li>Alexa: 7 tasks left</li>
<li>Ben: 5 tasks left</li>
```

ийм болгож

```html
<li>Ben: 9 tasks left</li>
<li>Claudia: 8 tasks left</li>
<li>Alexa: 5 tasks left</li>
```

өөрчилж байна гэж бодоод үздээ.

Үүнийг харсан хүн тоог шинэчлэхээс гадна Alexa болон Ben хоёрын байрлалыг солиод Claudia-г дундуур нь хийсэн байна гэж хэлж болох байх. Гэхдээ React нь компьютерын програм учраас биднийг зорилгыг тааж мэдэхгүй, тиймд бид жагсаалтын нэгж бүрийг түүний хүүгээс ялгаруулахын тулд жагсаалтын нэгж бүрд *key* property-г тодорхойлж өгөх хэрэгтэй. Нэг сонголт нь `alexa`, `ben`, `claudia` string-үүдийг ашиглах юм. Хэрэв өгөгдлөө сангаас татаж харуулж байгаа бол Alexa, Ben, болон Claudia-н өгөгдлийн сан дахь ID-г key-р ашиглаж болно.

```html
<li key={user.id}>{user.name}: {user.taskCount} tasks left</li>
```

Одоо жагсаалтыг дахин render хийх үед React жагсаалтын нэгж бүрийн key-г авч өмнөх жагсаалтын нэгжээс key нь таарч байгааг хайна. Хэрэв одоогийн жагсаалт нь өмнө нь байгаагүй key-г агуулж байвал React тухайн харгалзах компонентыг үүсгэнэ. Хэрэв одоогийн жагсаалт өмнө байсан key-г агуулаагүй бол харгалзах компонентыг устгах болно. Хэрэв хоёр key давхцаж байгаа бол харгалзах компонентыг байх ёстой байрлалд нь зөөнө. Key нь React-н компонентыг таних тэмдэг бөгөөд тэр нь React-д дахин render хийх хооронд state-г зохицуулах боломж олгодог. Хэрэв компонентын key өөрчлөгдөх юм бол тэр компонент устгаад шинэ state-тай дахин шинээр үүсэх болно.

`key` нь React-ийн тусгай, хадгалсан property юм. (мөн `ref` адил бөгөөд илүү дээд түвшины хэрэглээнд ашиглагддаг.). Элементийг үүсгэх үед `key` property-г ялгаж аваад шууд буцаж байгаа элементэд хадгалдаг. Хэдийгээр `key` нь `props`-т харьяалагдаж байгаа мэт боловч `key`-г `this.props.key`-р авч болохгүй. React нь автоматаар аль компонентыг шинэчлэхийг шийдэхэд `key`-г ашигладаг. Компонент нь өөрийнхөө `key`-г асуух боломжгүй байдаг.

**Аливаа өөрчлөгдөх жагсаалт үүсгэхдээ зөв зүйтэй key оноож өгөх нь маш чухал байдгийг байнга санах хэрэгтэй.** Хэрэв тохиромжтой key байхгүй байвал өгөгдлөө дахин зохион байгуулж key-тэй болгосон нь дээр.

Хэрэв key оноож өгөөгүй бол React анхааруулга гаргаад array-ийн index-г key-ээр ашигладаг. Харин array-ийн index-г key-аар ашиглах нь жагсаалтын нэгжүүдийн байрлалыг өөрчлөх, дундаас нь устгах, дунд нь шинээр оруулах зэргийг хийх үед асуудал үүсгэдэг. `key={i}` гэж дамжуулах нь анхааруулгыг гаргахгүй болгох боловч array-ийн index ашигласантай ижил асуудал үүсгэх бөгөөд тэгэхгүй байхыг зөвлөж байна.

Key нь бүх програмын хувьд давхардахгүй байх албагүй зөвхөн компонент дотор жагсаалтын нэгж компонент нь болон түүний хөрш компонентын хувьд л давхардахгүй байх ёстой.

### Цаг хугацааны аялалыг хэрэгжүүлэх нь {#implementing-time-travel}

tic-tac-toe тоглоомын түүхийн хувьд өнгөрсөн бүх нүүдэл нь түүний нүүдлийн дарааллын дугаар болох давхардаагүй ID-тай. Нүүдлүүдийг хэзээ ч байрлалыг нь өөрчилж, устгаж эсвэл дундуур нь шинийг оруулахгүй учраас нүүдлийн дугаарыг key-ээр ашиглахад асуудал байхгүй.

Game компонентын `render` метод дотор method, `<li key={move}>` гэж key-г нэмэхэд React-ийн анхааруулга арилах болно:

```js{6}
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
```

**[Яг одоо код ямар байгааг ийшээ орж хараарай](https://codepen.io/gaearon/pen/PmmXRE?editors=0010)**

`jumpTo` методыг тодорхойлоогүй байгаа учраас жагсаалтын аль ч хэсэгт дарсан алдаа гарах болно. `jumpTo` методыг хөгжүүлэхээс өмнө Game компонентод бид аль нүүдлийг одоо үзэж байгааг тодорхойлох `stepNumber` state-г нэмж өгье.

Эхлээд `stepNumber: 0`-г Game компонентын байгуулагч `constructor`-н дотор анхны state-д нэмж өгье:

```js{8}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }
```

Дараа нь Game компонентод `stepNumber`-г шинэчилж байх `jumpTo` методыг зарлаж өгнө. Мөн хэрэв `stepNumber`-г өөрчилж байгаа тоо нь тэгш бол `xIsNext`-г true болгож утга оноох ёстой:

```javascript{5-10}
  handleClick(i) {
    // this method has not changed
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    // this method has not changed
  }
```

<<<<<<< HEAD
Одоо Game-ийн нүднүүд дээр дарахад ажиллах `handleClick` методод зарим өөрчлөлт хийе.
=======
Notice in `jumpTo` method, we haven't updated `history` property of the state. That is because state updates are merged or in more simple words React will update only the properties mentioned in `setState` method leaving the remaining state as is. For more info **[see the documentation](/docs/state-and-lifecycle.html#state-updates-are-merged)**.

We will now make a few changes to the Game's `handleClick` method which fires when you click on a square.
>>>>>>> 8223159395aae806f8602de35e6527d35260acfb

Одоо бидний нэмсэн `stepNumber` state нь хэрэглэгчид үзүүлж байгаа нүүдлийн утгаас хамаарч өөрчлөгдөнө. Бид дараагийн нүүдлийг хийх үед `stepNumber`-ийн утгыг `this.setState`-ийн аргумент болгож `stepNumber: history.length` гэх байдлаар шинэчлэх хэрэгтэй. Энэ нь шинэ нүүдэл хийгдсэний дараа бидэнд ижил нүүдэл харагдуулаад байхгүй гэсэн баталгааг өгч байгаа юм.

<<<<<<< HEAD
Бид мөн `this.state.history`-г `this.state.history.slice(0, this.state.stepNumber + 1)`-ээр солих болно. Энэ нь хэрэв бид өнгөрсөн нүүдэл уруу очоод тэр цэгээс эхлэн дахин шинээр нүүдэл хийвэл одоо хэрэггүй болсон дараагийн нүүдлүүдийг байхгүй болгох юм.
=======
We will also replace reading `this.state.history` with `this.state.history.slice(0, this.state.stepNumber + 1)`. This ensures that if we "go back in time" and then make a new move from that point, we throw away all the "future" history that would now be incorrect.
>>>>>>> 8223159395aae806f8602de35e6527d35260acfb

```javascript{2,13}
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
```

Эцэст нь Game компонентын `render` методыг байнга сүүлийн нүүдлийг render хийхийг болиулж `stepNumber`-ийн дагуу сонгогдсон нүүдлийг render хийдэг болгож өөрчилнө:

```javascript{3}
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    // the rest has not changed
```

Одоо хэрэв тоглоомын өмнөх түүх дээр дарах юм бол tic-tac-toe-ийн хөлөг нь тухайн нүүдэл хийгдсэний дараа хөлөг ямар харагдаж байсан тийм харагдахаар даруй өөрчлөгдөнө.

**[Яг одоо код ямар байгааг ийшээ орж хараарай](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)**

### Дүгнэж үзье {#wrapping-up}

Баяр хүргэе! Та доорх үйлдлийг хийдэг tic-tac-toe тоглоом хийж чадлаа:

* tic-tac-toe тоглоом тоглох боломжтой,
* Тоглогч хожилцвол түүнийг тодорхойлдог,
* Тоглоом явагдахад түүний түүхийг хадгалдаг,
* Тоглогч нар тоглоомын түүхийг харж, тоглоомын хөлөгийн өмнөх хувилбаруудыг үзэж болдог.

Одоо таныг React хэрхэн ажилладаг талаар сайн ойлголттой болсон гэж итгэж байна.

Эцсийн үр дүнг дараах хуудаснаас үзээрэй: **[Эцсийн үр дүн](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)**.

Хэрэв танд шинээр сурсан React чадвараа дадлагажуулах цаг, сонирхол байвал tic-tac-toe тоглоомондоо хийж болох дараах сайжруулалтын санааг хэрэгжүүлээд үзээрэй. Эдгээрийг хүндрэлийнх түвшингээр нь жагсаасан болно:

1. Нүүдлийн түүхийн жагсаалтад (багана, мөр) хэлбэрээр нүүдэл бүрийн байрлалыг харуулах.
2. Нүүдлийн жагсаалтад одоо сонгогдсон хэсгийг тодруулах.
3. Board-ийн нүднүүдийг нэг бүрчлэн кодчилохын оронд хоёр давхар давталтаар хэвлэх.
4. Нүүдлийн жагсаалтыг өсөх эсвэл буурах эрэмбээр жагсаадаг товчлуур нэмэх.
5. Хэрэв хэн нэгэн хожвол хожлыг илтгэсэн 3 нүдийг тодруулдаг болгох.
6. Хэрэв аль нь ч хожоогүй бол гарч ирсэн үр дүнг гаргасан мэдээлэл үзүүлэх.

Энэхүү зааварчилгааны турш бид элемент, компонент, props болон state гэсэн React-ийн ухагдахуунуудтай ашиглалаа. Эдгээр сэдвүүдийн талаар илүү дэлгэрэнгүй тайлбарыг [гарын авлагын бусад хэсгээс](/docs/hello-world.html) үзээрэй. Компонент тодорхойлох талаар илүү сурахыг хүсвэл [`React.Component` API reference](/docs/react-component.html)-г үзээрэй.
