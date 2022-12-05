---
id: react-without-es6
title: ES6 үгүй React
permalink: docs/react-without-es6.html
---

Энгийнээр та Жаваскрипт класс ашиглан React компонент тодорхойлж болно:

```javascript
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Хэрэв та ES6 ашиглаагүй бол `create-react-class` модулийг оронд нь ашиглаж болох юм:


```javascript
var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
```

ES6-н API нь `createReactClass()` тун төстэй хэдэн зүйл нь өөр.

## Шинж чанарын анхны утга зарлах нь {#declaring-default-props}

Функцууд болон ES6 классуудад `defaultProps` нь компонент дотор шинж чанар болон тодорхойлогддог:

```javascript
class Greeting extends React.Component {
  // ...
}

Greeting.defaultProps = {
  name: 'Mary'
};
```

`createReactClass()`-р та `getDefaultProps()`-г дамжуулагдсан объектийг функц байдлаар тодорхойлно:

```javascript
var Greeting = createReactClass({
  getDefaultProps: function() {
    return {
      name: 'Mary'
    };
  },

  // ...

});
```

## Анхны төлөв тохируулах нь {#setting-the-initial-state}

ES6 классуудад анхны төлвийг `this.state`-г байгуулагч дотор утга оноосноор тодорхойлдог:

```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }
  // ...
}
```

`createReactClass()`-р та тусдаа `getInitialState` анхны төлөв буцаах функц бичих хэрэгтэй:

```javascript
var Counter = createReactClass({
  getInitialState: function() {
    return {count: this.props.initialCount};
  },
  // ...
});
```

## Автомат холболт(autobinding) {#autobinding}

ES6 классаар зарлагдсан React компонентуудад функцууд нь энгийн ES6 классуудтай ижил дүрэм баримталдаг. Өөрөөр хэлбэл тэдгээр нь `this`-г классын тохиолдол(instance) руу автоматаар холбодоггүй. Та тусгайлан `.bind(this)`-г байгуулагч дотор хэрэглэх шаардлагатай:

```javascript
class SayHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
    // This line is important!
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(this.state.message);
  }

  render() {
    // Because `this.handleClick` is bound, we can use it as an event handler.
    return (
      <button onClick={this.handleClick}>
        Say hello
      </button>
    );
  }
}
```

`createReactClass()`-д бүх функцууд автоматаар холбогддог учир ингэх хэрэггүй:

```javascript
var SayHello = createReactClass({
  getInitialState: function() {
    return {message: 'Hello!'};
  },

  handleClick: function() {
    alert(this.state.message);
  },

  render: function() {
    return (
      <button onClick={this.handleClick}>
        Say hello
      </button>
    );
  }
});
```

Энэ нь ES6 классууд нь бага зэрэг илүү урьдчилан бэлдсэн(boilerplate) код эвент удирдлагууд дээр ирдэг нь том програмуудын хурданд бага зэрэг сайн нөлөөтэй.

<<<<<<< HEAD
 Хэрэв таньд урьдчилан бэлдсэн код нь таалагдахгүй бол та Babel дээр санал болгосон **туршилтын** [классын шинж чанарууд](https://babeljs.io/docs/plugins/transform-class-properties/)-н бичиглэлийг идэвхжүүлж болох юм:
=======
If the boilerplate code is too unattractive to you, you may use [ES2022 Class Properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields#public_instance_fields) syntax:
>>>>>>> cb9854a54984ef1288a8a2b8754897b15e75f433


```javascript
class SayHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
  }
  
  // Using an arrow here binds the method:
  handleClick = () => {
    alert(this.state.message);
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        Say hello
      </button>
    );
  }
}
```

<<<<<<< HEAD
Гэхдээ дээрх бичиглэл нь **туршилтынх** учир бичиглэл нь өөрчлөгдөж магадгүй бүр эсвэл санал болгосон бичиглэл нь хэлэнд орохгүй байж магадгүй.

Найдвартай бичихийн тулд тань хэдэн сонголтууд байна:
=======
You also have a few other options:
>>>>>>> cb9854a54984ef1288a8a2b8754897b15e75f433

* Функцуудийг байгуулагч дотор холбох.
* Суман функцууд ашиглах, жишээ. `onClick={(e) => this.handleClick(e)}`.
* `createReactClass`-г ашигласаар байх.

## Холимог(mixins) {#mixins}

>**Анхаар:**
>
>ES6 ямар нэг холимог дэмжихээргүй нэвтрүүлэгдсэн. Тийм учраас ES6 классуудыг React-д ашиглаж байгаа үед ямар нэг холимог дэмжихгүй.
>
>**Мөн түүнчлэн холимог ашиглахад нэлээн хэдэн асуудал байгааг олсон бөгөөд [бид үүнийг шинэ код дээр ашиглахийг зөвлөхгүй](/blog/2016/07/13/mixins-considered-harmful.html).**
>
>Энэ хэсэг нь зүгээр заалт байдлаар үлдэж байна.

Заримдаа огт ялгаатай компонентууд ажил ажиллагаа дундаа хуваалцаж болно. Эдгээрийг [cross-cutting concerns](https://en.wikipedia.org/wiki/Cross-cutting_concern) гэж нэрлэдэг. `createReactClass` нь энэ зорилго `холимог` систем ашиглах боломжийг бүрдүүлдэг.

Ганц нийтлэг тохиолдол бол компонент хугацааны туршид өөрийгөө шинэчлэх юм. Энэ нь `setInterval()`-г хэрэглэн амархан шийдэгдэх ч хугацааны интервалаа санах ой хэмнэх үүднээс хэрэггүй үед цуцлах нь чухал байдаг. React [амьдралын мөчлөгийн функцууд](/docs/react-component.html#the-component-lifecycle) бэлдэж өгсөн бөгөөд хэзээ үүсгэгдэх эсвэл устгагдахийг шийддэг. Энгийн холимог ашиглан `setInterval()` функц нь автоматаар таны компонент устах үед цэвэрлэгдэх код бичье.

```javascript
var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
};

var createReactClass = require('create-react-class');

var TickTock = createReactClass({
  mixins: [SetIntervalMixin], // Use the mixin
  getInitialState: function() {
    return {seconds: 0};
  },
  componentDidMount: function() {
    this.setInterval(this.tick, 1000); // Call a method on the mixin
  },
  tick: function() {
    this.setState({seconds: this.state.seconds + 1});
  },
  render: function() {
    return (
      <p>
        React has been running for {this.state.seconds} seconds.
      </p>
    );
  }
});

const root = ReactDOM.createRoot(document.getElementById('example'));
root.render(<TickTock />);
```

Хэрэв компонент олон холимогууд ашиглах болон олон холимогоор ижилхэн амьдралын мөчлөгийн функц тодорхойлж байгаа бол(жишээ нь нэлээн хэдэн холимогууд компонент устахад цэвэрлэгээ хийхийг хүсвэл), бүх амьдралын мөчлөгийн функцууд дуудагдах нь баталгаатай. Холимог дээр тодорхойлогдсон функцууд холимогууд жагсаагдны дагуу эрэмблэгддэг тэр эрэмбийн дагуу дагана.
