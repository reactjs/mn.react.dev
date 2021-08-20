---
id: test-utils
title: Test Utilities
permalink: docs/test-utils.html
layout: docs
category: Reference
---

**Импорт хийх**

```javascript
import ReactTestUtils from 'react-dom/test-utils'; // ES6
var ReactTestUtils = require('react-dom/test-utils'); // ES5 with npm
```

## Тойм {#overview}

Таны сонгосон тест хийх framework-т React-ын компонентуудыг шалгах ажлыг `ReactTestUtils` хялбарчилж өгдөг. Facebook-т бид [Jest](https://facebook.github.io/jest/) ашиглан зовлон багатайгаар JavaScript-ыг тест хийдэг. Jest-ын вэбсайт дээр [React Tutorial](https://jestjs.io/docs/tutorial-react) гэсэн хэсгээс мэдээлэл аваарай.


> Тэмдэглэл:
>
> [React Testing Library](https://testing-library.com/react)-ыг ашиглахыг бид танд зөвлөж байна. Учир нь таны компонентууд эцсийн хэрэглэгчид ямар байх вэ гэдгийг шалгах тест бичих боломжийг танд олгоно.

>
> Airbnb компани [Enzyme](https://airbnb.io/enzyme/) нэртэй тест хийх үйлчилгээ гаргасан. Энэ нь React компонентын үр дүнг баталгаажуулах, ашиглах, шилжүүлэх ажлыг хялбарчилдаг.


 - [`act()`](#act)
 - [`mockComponent()`](#mockcomponent)
 - [`isElement()`](#iselement)
 - [`isElementOfType()`](#iselementoftype)
 - [`isDOMComponent()`](#isdomcomponent)
 - [`isCompositeComponent()`](#iscompositecomponent)
 - [`isCompositeComponentWithType()`](#iscompositecomponentwithtype)
 - [`findAllInRenderedTree()`](#findallinrenderedtree)
 - [`scryRenderedDOMComponentsWithClass()`](#scryrendereddomcomponentswithclass)
 - [`findRenderedDOMComponentWithClass()`](#findrendereddomcomponentwithclass)
 - [`scryRenderedDOMComponentsWithTag()`](#scryrendereddomcomponentswithtag)
 - [`findRenderedDOMComponentWithTag()`](#findrendereddomcomponentwithtag)
 - [`scryRenderedComponentsWithType()`](#scryrenderedcomponentswithtype)
 - [`findRenderedComponentWithType()`](#findrenderedcomponentwithtype)
 - [`renderIntoDocument()`](#renderintodocument)
 - [`Simulate`](#simulate)

## Reference {#reference}

### `act()` {#act}

Аливаа нэг компонентыг баталгаажуулахаар (assertion) бэлдэхдээ рендэр хийн багцлаад `act()` дуудан шинэчилнэ. Ингэснээр React хөтөч дээр хэрхэн ажиллах вэ гэдгийг илүү хялбар харж, тест хийх боломжтой болох юм.

>Тэмдэглэл
>
>Та хэрэв `react-test-renderer` ашиглавал `act` экспорт мөн байх ба энэ нь адилхан үүрэг гүйцэтгэдэг.

Жишээ нь бидэнд `Counter` компонент байлаа гэж бодъё:

```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }
  handleClick() {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}
```

Тест хийхдээ ингэнэ:

```js{3,20-22,29-31}
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Counter from './Counter';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render and update a counter', () => {
  // Test first render and componentDidMount
  act(() => {
    ReactDOM.render(<Counter />, container);
  });
  const button = container.querySelector('button');
  const label = container.querySelector('p');
  expect(label.textContent).toBe('You clicked 0 times');
  expect(document.title).toBe('You clicked 0 times');

  // Test second render and componentDidUpdate
  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  expect(label.textContent).toBe('You clicked 1 times');
  expect(document.title).toBe('You clicked 1 times');
});
```

- DOM контэйнер нь `document`-д нэмэгдсэн тохиолдолд л DOM эвентийг илгээх боломжтой гэдгийг бүү мартаарай. Та [`react-testing-library`](https://github.com/kentcdodds/react-testing-library) гэх мэтийг ашиглан олон дахин гарч ирээд байдаг кодуудыг багасгаж болно.

- [`recipes`](/docs/recipes.html) документ нь илүү `act()` хэрхэн ажиллах талаар илүү дэлгэрэнгүй мэдээлэл жишээнүүд болон хэрэглээтэй хамт агуулдаг.

* * *

### `mockComponent()` {#mockcomponent}

```javascript
mockComponent(
  componentClass,
  [mockTagName]
)
```

Хэрэг болох методтай нийцүүлэн сайжруулах зорилгоор уг метод руу хуурамч компонент модуль дамжуулан хуулбар React компонентыг дуурайлган ашиглах боломжтой. Зүгээр л рендэр хийхийн оронд уг компонент нь хүүтэй, энгийн `<div>` (эсвэл `mockTagName` байвал өөр нэг таг) болж хувирна.


> Тэмдэглэл:
>
> `mockComponent()` is a legacy API. We recommend using [`jest.mock()`](https://facebook.github.io/jest/docs/en/tutorial-react-native.html#mock-native-modules-using-jestmock) instead.

* * *

### `isElement()` {#iselement}

```javascript
isElement(element)
```

Хэрэв `element` нь React элемент бол `true` гэж буцаана. 

* * *

### `isElementOfType()` {#iselementoftype}

```javascript
isElementOfType(
  element,
  componentClass
)
```

`Element` нь React `componentClass` гэсэн төрлийн React элемент бол `true` гэнэ. 

* * *

### `isDOMComponent()` {#isdomcomponent}

```javascript
isDOMComponent(instance)
```

`Instance` нь  DOM компонент (`<div>`, `<span>` г.м) бол `true` гэнэ.


* * *

### `isCompositeComponent()` {#iscompositecomponent}

```javascript
isCompositeComponent(instance)
```

Хэрэв `instance` нь класс, функц гэх мэт хэрэглэгчийн тодорхойлсон компонент бол `true` гэж буцаана.

* * *

### `isCompositeComponentWithType()` {#iscompositecomponentwithtype}

```javascript
isCompositeComponentWithType(
  instance,
  componentClass
)
```
Хэрэв `instance` нь React `componentClass` гэх төрлийн компонент бол `true` гэж буцаана.

* * *

### `findAllInRenderedTree()` {#findallinrenderedtree}

```javascript
findAllInRenderedTree(
  tree,
  test
)
```

`tree`-ны бүх компонент рүү аялан шилжиж, `test(component)` нь `true` гэх үеийн бүх компонентуудыг цуглуулдаг. Дангаараа ашиглах боломжгүй ч бусад тест хийх ажиллагаанд чухал нөлөөтэй байдаг.

* * *

### `scryRenderedDOMComponentsWithClass()` {#scryrendereddomcomponentswithclass}

```javascript
scryRenderedDOMComponentsWithClass(
  tree,
  className
)
```
Рендэр хийсэн салбар модноос `className`-той тохирсон нэртэй класс бүхий DOM компонентууд болох бүх DOM элементүүдийг олдог.

* * *

### `findRenderedDOMComponentWithClass()` {#findrendereddomcomponentwithclass}

```javascript
findRenderedDOMComponentWithClass(
  tree,
  className
)
```

[`scryRenderedDOMComponentsWithClass()`](#scryrendereddomcomponentswithclass)-тай төстэй. Гэхдээ нэг үр дүн байх ёстой гэж үзэх ба нэг үр дүнг буцаана эсвэл нэгээс өөр тооны таарч буй үр дүн байвал онцгой нэг тохиолдол гэж үздэг.


* * *

### `scryRenderedDOMComponentsWithTag()` {#scryrendereddomcomponentswithtag}

```javascript
scryRenderedDOMComponentsWithTag(
  tree,
  tagName
)
```

Рендэр хийсэн салбар модноос `tagName`-той тохирсон нэртэй таг бүхий DOM компонентууд болох бүх DOM элементүүдийг олдог.

* * *

### `findRenderedDOMComponentWithTag()` {#findrendereddomcomponentwithtag}

```javascript
findRenderedDOMComponentWithTag(
  tree,
  tagName
)
```

[`scryRenderedDOMComponentsWithTag()`](#scryrendereddomcomponentswithtag)-тай төстэй. Гэхдээ нэг үр дүн байх ёстой гэж үзэх ба нэг үр дүнг буцаана эсвэл нэгээс өөр тооны таарч буй үр дүн байвал онцгой нэг тохиолдол гэж үздэг.

* * *

### `scryRenderedComponentsWithType()` {#scryrenderedcomponentswithtype}

```javascript
scryRenderedComponentsWithType(
  tree,
  componentClass
)
```

`componentClass`-тай ижил төрлийн компонентын бүх instance-ыг олдог. 

* * *

### `findRenderedComponentWithType()` {#findrenderedcomponentwithtype}

```javascript
findRenderedComponentWithType(
  tree,
  componentClass
)
```

[`scryRenderedComponentsWithType()`](#scryrenderedcomponentswithtype)-тай адилхан. Гэхдээ нэг үр дүн байх ёстой гэж үзэх ба нэг үр дүнг буцаана эсвэл нэгээс өөр тооны таарч буй үр дүн байвал онцгой нэг тохиолдол гэж үздэг.

***

### `renderIntoDocument()` {#renderintodocument}

```javascript
renderIntoDocument(element)
```

Документ дотор detach хийсэн DOM node руу React элементийг рендэр хийнэ.  **Уг функц нь DOM шаардана** Үр дүн нь үүнтэй ижил:


```js
const domContainer = document.createElement('div');
ReactDOM.render(element, domContainer);
```

> Тэмдэглэл:
>
>`React` импорт хийхээс **өмнө** `window`, `window.document`, `window.document.createElement` нарыг глобал буюу хаанаас ч хандах боломжтой болгох хэрэгтэй. Тэгэхгүй бол DOM-д хандаж чадахгүй, `setState` гэх мэт метод ажиллахгүй гэж React бодно.  

* * *

## Бусад үйлчилгээ {#other-utilities}

### `Simulate` {#simulate}

```javascript
Simulate.{eventName}(
  element,
  [eventData]
)
```

DOM дээр `eventData` гэсэн эвентийн өгөгдөл бүхий эвент илгээж буй мэт болгодог.

`Simulate`-д [React-ын ойлгох бүх эвентэд](/docs/events.html#supported-events) зориулсан метод бий.

**Элемент дээр дарах**

```javascript
// <button ref={(node) => this.button = node}>...</button>
const node = this.button;
ReactTestUtils.Simulate.click(node);
```

**Утга оруулах талбарт байх үр дүнг өөрчлөөд ENTER дарах.**

```javascript
// <input ref={(node) => this.textInput = node} />
const node = this.textInput;
node.value = 'giraffe';
ReactTestUtils.Simulate.change(node);
ReactTestUtils.Simulate.keyDown(node, {key: "Enter", keyCode: 13, which: 13});
```

> Тэмдэглэл
>
> React хийж өгөхгүй учраас та компонентдоо ашиглаж байгаа эвент пропертийн талаар мэдээлэл оруулах ёстой (keyCode нь ингэдэг г.м).

* * *
