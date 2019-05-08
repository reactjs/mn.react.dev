---
id: state-and-lifecycle
title: State and Lifecycle
permalink: docs/state-and-lifecycle.html
redirect_from:
  - "docs/interactivity-and-dynamic-uis.html"
prev: components-and-props.html
next: handling-events.html
---

Энэхүү хуудас нь React компонентийн state болон амьдралын мѳчлѳгийн ойлголтыг ѳгѳх зорилготой. [Илүү дэлгэрэнгүй мэдээллийг эндээс олох боломжтой](/docs/react-component.html)

Consider the ticking clock example from [one of the previous sections](/docs/rendering-elements.html#updating-the-rendered-element). In [Rendering Elements](/docs/rendering-elements.html#rendering-an-element-into-the-dom), we have only learned one way to update the UI. We call `ReactDOM.render()` to change the rendered output:

[Ѳмнѳ нь хийсэн цаг тоолуурыг] жишээ болгоё. [Элемент рендэрлэх](/docs/rendering-elements.html#rendering-an-element-into-the-dom) заавар дээр хэрэглэгчийн интерфэйсыг шинэчлэх нэг арга болох `ReactDOM.render()` ашиглахыг үзсэн билээ.

```js{8-11}
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/gwoJZk?editors=0010)

Харин энэ удаа бид `Clock` компонентийг жинхэнэ утгаар нь дахин ашиглах боломжтой цогц болгоно. Ѳѳрѳѳ цагаа тохируулж ѳѳрѳѳ секунд бүрт шинэчлэгдэнэ гэсэн үг.

Цаг маань хэрхэн харагдахаас эхэлье

```js{3-6,12}
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/dpdoYR?editors=0010)

Дээрхи ѳѳрчлѳлтѳд зайлшгүй шаардлагатай зүйл болох: `Clock` ѳѳрѳѳ цагаа тааруулж хэрэглэгчийн интерфэйсыг секунд тутам шинэчлэх ёстой байдал дутмаг байна.

Ерѳнхийдѳѳ бид үүнийг ганцхан удаа бичээд `Clock` ѳѳрѳѳ шинэчлэгдэх хэрэгтэй байгаа.

```js{2}
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

Дээрх шиг болгохын тулд бид "state" -ыг `Clock` компонентод нэмж ѳгѳх хэрэгтэй

State нь пропстой адил боловч зѳвхѳн компонент нь хэмжээнд л харъяалагдаж, зѳвхѳн компонент нь л удирдах эрхтэй

## Функцыг Class-руу хѳрвүүлж буй нь {#converting-a-function-to-a-class}

Та `Clock` шиг бүтэцтэй компонентийг дараах 5 алхамаар хѳрвүүлнэ:

1. Адил нэртэй `React.Component` -ыг удамшуулсан [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) үүсгэнэ.

2. `render()` гэх нэртэй method зарлана.

3. Функцийн эх бие хэсгийг `render()` method дотор оруулна.

4. `render()` доторх `props` -ыг `this.props` болгож бичнэ.

5. Функцээс үлдсэн хэсгийг устгана.

```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/zKRGpo?editors=0010)

`Clock` одоо функц биш класс боллоо.

`render` method нь шинэчлэгдэх бүрт дуудагдах ба DOM -дотор нэг л `<Clock />` компонент рендэрлэж байгаа тул нэг л instance үүснэ. Ингэснээр нэмэлт боломжууд, state, болон мѳчлѳгийн method-уудыг ашиглах боломжтой болно.

## Класст state оруулах нь {#adding-local-state-to-a-class}

Пропст байгаа `date` -ыг дараах 3 алхамаар state-руу оруулна.

1) `render()` доторх `this.props.date` -ыг `this.state.date` ээр сольж бичнэ:

```js{6}
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

2) Анхны утга оноох `this.state` -ыг [class constructor](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Constructor)-ыг ашиглан нэмж ѳгнѳ:

```js{4}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

Конструкторт хэрхэн `props` дамжуулж байгааг анхаарна уу:

```js{2}
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
```

Класс компонент үргэлж конструктор-ыг `props` той дуудах ёстой.

3) `<Clock />`-ын элементээс `date` prop-ыг устгана:

```js{2}
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

Бид дараа нь timer -ын кодыг оруулж ирнэ.

Үр дүн харагдах байдал:

```js{2-5,11,18}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/KgQpJd?editors=0010)

Дараа нь, `Clock` -ыг ѳѳрѳѳ timer-аа тохируулж ѳѳрѳѳ ѳѳрийгѳѳ секунд тутам шинэчилдэг болгоно.

## Класст амьдралын мѳчлѳгийн method нэмнэ {#adding-lifecycle-methods-to-a-class}

Олон компонент бүхий аппликейшнд, компонент устгагдах үед ашиглагдаж байсан нѳѳцѳѳ суллах нь маш чухал.

Бид `Clock` DOM-д анх рендэрлэх үед нь [цагыг тохируулах](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) шаардлагатай. Үүнийг React-д "mounting" гэж нэрлэдэг.

Мѳн бид DOM дээрээс `Clock` устгагдах үед [цагыг цэвэрлэх](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval) хэрэгтэй. Үүнийг React-д "unmounting" гэдэг.

Бид компонент дотор компонентийг mount, unmount хийгдэх үед зориулсан тусгай method ашиглаж ямар нэг код ажиллуулж болдог:

```js{7-9,11-13}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

Эдгээр method-уудыг "амьдралын мѳчлѳгийн" method-ууд гэнэ.

`componentDidMount()` нь компонент DOM дээр рендэр хийгдсэний дараа ажиллана. Энд цагыг тохируулах нь хамгийн тохиромжтой байх нь:

```js{2-5}
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
```

`this` -д цагын ID хадгалж байгааг сайн анзаарна уу.

`this.props` -ыг React ѳѳрѳѳ хийж байгаа бол `this.state` нь арай илүү давуу талтай буюу та хүссэнээрээ ѳгѳгдѳл хадгалж болдог. Мэдээж энэ нь зѳвхѳн дотроо л зохицуулагдаж болдог бол шүү дээ, яг timerID шиг

Бид `componentWillUnmount()` дээр цагыг устгана:

```js{2}
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
```

Эцэст нь `Clock` компонент секунд тутам `tick()` функцээ дууддаг болгоно.

`this.setState()` ашиглан дотоод state дээ шинэчлэлтийг хийж байна:

```js{18-22}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/amqdNA?editors=0010)

Ингээд цаг маань секунд тутам ажиллаж байна.

Дээр үзсэн зүйлээ дахин нэг базаад хаана нь аль method ашигласан эсэхээ үзье:

1) `<Clock />`-ыг `ReactDOM.render()`-руу дамжуулах үед, React `Clock` компонентийн конструктор функцийг дуудана. `Clock` маань тухайн үеийн цагыг харуулах хэрэгтэй учир, `this.state` тухайн цагыг авч ажиллана. Дараа нь энэ state -ыг шинэчилнэ.

2) React дараа нь `Clock` компонентийн `render()` дуудана. Ингэж React нь дэлгэц дээр юу харуулахаа мэддэг. Дараа нь render -ын гаралтаас хамаарч DOM -ыг шинэчилнэ.

3) `Clock` -ын гаралт DOM -д орох үед, React нь хѳтѳч дээр цаг тааруулах, `tick()` функцыг секунд тутам ажиллуулахаар  `componentDidMount()` амьдралын мѳчлѳг дууддаг.

4) Секунд тутам хѳтѳч `tick()` функцыг дуудна. Дотор нь `Clock` компонент `setState()` ашиглан тухайн үеийн цагийг хадгалж буй state-ыг хэрэглэгчийн интерфэйсыг шинэчлэхээр бэлддэг. `setState()` -ын ачаар React, state ѳѳрчлѳгдснийг мэдэж `render()` method -ыг дуудаж дэлгэц дээр юу харуулахаа мэддэг. Энэ удаа `render()` method доторх `this.state.date` ѳѳрчлѳгдсѳн, тиймээс рендэр хийгдсэн үр дүн шинэчлэгдсэн цагыг харуулж, React үүнээс үүдэн DOM -ыг ѳѳрчлѳнѳ.

5) Хэрвээ `Clock` компонент DOM дээрээс уствал, React `componentWillUnmount()` ийг дуудаж цаг зогсоно.

## State-ыг зѳвѳѳр ашиглах нь {#using-state-correctly}

`setState()`-ын талаар мэдэх шаардлагатай 3 зүйлс бий.

### State-ыг шууд ѳѳрчилж болохгүй {#do-not-modify-state-directly}

For example, this will not re-render a component:
Жишээ нь доорхи нь компонентийг дахин рендэр хийхгүй

```js
// Wrong
this.state.comment = 'Hello';
```

Оронд нь `setState()` ашигла:

```js
// Correct
this.setState({comment: 'Hello'});
```

`this.state`-ыг зааж ѳгѳх цор ганц газар нь конструктор юм.

### State шинэчлэх нь Asynchronous байж болно {#state-updates-may-be-asynchronous}

React хүчин чадал хэмнэх үүднээс олон `setState()`-ыг нэг үйлдэл дотор дуудах шаардлага гардаг

Учир нь `this.props` болон `this.state` зэрэг шинэчлэгдэх боломжтой, тэгэхээр эдгээрийн утга дээр үндэслэн дараагийн state-ыг тооцоолох нь утгагүй болж байна.

Жишээ нь доорхи код тоологчийг шинэчлэхдээ алдаа гарна:

```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

Үүнийг засахын тулд `setState()`-ын нэг боломж болох функцыг аргумент болгон авах боломжыг ашиглая. Функц ѳмнѳх state-ыг эхний аргумент болгож, тухайн шинэчлэгдсэн цагыг 2 дахь аргумент props болгож авна:

```js
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

Бид [arrow function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ашигласан боловч энгийн функц дээр мѳн адил ажиллана:

```js
// Correct
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

### State-ын шинэчлэлтүүд нэгдмэл {#state-updates-are-merged}

`setState()` дуудах үед, React ѳгѳгдсѳн object-ыг одоогийн state-д байгаатай нэгтгэнэ.

Жишээ нь, таны state олон тусдаа хувьсагч агуулсан байна:

```js{4,5}
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
```

Тэгээд та тус тусд нь `setState()` дуудаж шинэчилж болно.

```js{4,10}
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```

The merging is shallow, so `this.setState({comments})` leaves `this.state.posts` intact, but completely replaces `this.state.comments`.

## The Data Flows Down {#the-data-flows-down}

Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn't care whether it is defined as a function or a class.

This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

A component may choose to pass its state down as props to its child components:

```js
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
```

This also works for user-defined components:

```js
<FormattedDate date={this.state.date} />
```

The `FormattedDate` component would receive the `date` in its props and wouldn't know whether it came from the `Clock`'s state, from the `Clock`'s props, or was typed by hand:

```js
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/zKRqNB?editors=0010)

This is commonly called a "top-down" or "unidirectional" data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components "below" them in the tree.

If you imagine a component tree as a waterfall of props, each component's state is like an additional water source that joins it at an arbitrary point but also flows down.

To show that all components are truly isolated, we can create an `App` component that renders three `<Clock>`s:

```js{4-6}
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/vXdGmd?editors=0010)

Each `Clock` sets up its own timer and updates independently.

In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. You can use stateless components inside stateful components, and vice versa.
