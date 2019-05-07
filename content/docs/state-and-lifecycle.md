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

The `render` method will be called each time an update happens, but as long as we render `<Clock />` into the same DOM node, only a single instance of the `Clock` class will be used. This lets us use additional features such as local state and lifecycle methods.

`render` method нь шинэчлэгдэх бүрт дуудагдах ба DOM -дотор нэг л `<Clock />` компонент рендэрлэж байгаа тул нэг л instance үүснэ. Ингэснээр нэмэлт боломжууд, state, болон мѳчлѳгийн method-уудыг ашиглах боломжтой болно.

## Класст state оруулах нь {#adding-local-state-to-a-class}

We will move the `date` from props to state in three steps:
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

Note how we save the timer ID right on `this`.

While `this.props` is set up by React itself and `this.state` has a special meaning, you are free to add additional fields to the class manually if you need to store something that doesn’t participate in the data flow (like a timer ID).

We will tear down the timer in the `componentWillUnmount()` lifecycle method:

```js{2}
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
```

Finally, we will implement a method called `tick()` that the `Clock` component will run every second.

It will use `this.setState()` to schedule updates to the component local state:

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

Now the clock ticks every second.

Let's quickly recap what's going on and the order in which the methods are called:

1) When `<Clock />` is passed to `ReactDOM.render()`, React calls the constructor of the `Clock` component. Since `Clock` needs to display the current time, it initializes `this.state` with an object including the current time. We will later update this state.

2) React then calls the `Clock` component's `render()` method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the `Clock`'s render output.

3) When the `Clock` output is inserted in the DOM, React calls the `componentDidMount()` lifecycle method. Inside it, the `Clock` component asks the browser to set up a timer to call the component's `tick()` method once a second.

4) Every second the browser calls the `tick()` method. Inside it, the `Clock` component schedules a UI update by calling `setState()` with an object containing the current time. Thanks to the `setState()` call, React knows the state has changed, and calls the `render()` method again to learn what should be on the screen. This time, `this.state.date` in the `render()` method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

5) If the `Clock` component is ever removed from the DOM, React calls the `componentWillUnmount()` lifecycle method so the timer is stopped.

## Using State Correctly {#using-state-correctly}

There are three things you should know about `setState()`.

### Do Not Modify State Directly {#do-not-modify-state-directly}

For example, this will not re-render a component:

```js
// Wrong
this.state.comment = 'Hello';
```

Instead, use `setState()`:

```js
// Correct
this.setState({comment: 'Hello'});
```

The only place where you can assign `this.state` is the constructor.

### State Updates May Be Asynchronous {#state-updates-may-be-asynchronous}

React may batch multiple `setState()` calls into a single update for performance.

Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.

For example, this code may fail to update the counter:

```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

To fix it, use a second form of `setState()` that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

```js
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

We used an [arrow function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) above, but it also works with regular functions:

```js
// Correct
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

### State Updates are Merged {#state-updates-are-merged}

When you call `setState()`, React merges the object you provide into the current state.

For example, your state may contain several independent variables:

```js{4,5}
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
```

Then you can update them independently with separate `setState()` calls:

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
