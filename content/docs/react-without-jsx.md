---
id: react-without-jsx
title: JSX үгүй React
permalink: docs/react-without-jsx.html
---

JSX нь React-д заавал шаардлагатай биш. React-г JSX-гүй ашиглах нь build орчинд компайл байршуулах сонирхолгүй бол онцгойлон тохиримжтой юм.

JSX-н бүх элемент бол зүгээр `React.createElement(component, props, ...children)`-г дуудаж хялбарчилсан зүйл юм. Тиймээс JSX-р хийж чадаж байгаа бүх зүйл цэвэр JavaScript-р гүйцэтгэгдэх боломжтой юм.

Жишээ нь, JSX-р бичигдсэн энэ код:

```js
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
);
```

JSX ашиглаагүй дараах кодтой хөрвүүлэгдэх боломжтой:

```js
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);
```

Хэрвээ JSX хэрхэн JavaScript-руу хөрвүүлэгдсэн талаар илүү жишээ хархаар сонирхож байвал [онлайн Babel compiler](babel://jsx-simple-example)-г туршиж үзэх боломжтой.

Компонент нь текст, эсвэл `React.Component`-н хүүхэд класс, эсвэл төлөвгүй компонентын энгийн функц гээд аль ч байж болно.

`React.createElement`-г байнга ашиглах нь хүндрэлтэй байвал, нэг түгээмэл арга бол товчлолт ашиглах:

```js
const e = React.createElement;

ReactDOM.render(
  e('div', null, 'Hello World'),
  document.getElementById('root')
);
```

Хэрвээ `React.createElement`-д товчлолт ашиглавал, React-г JSX-гүй ашиглахад маш их хялбар болох юм.

Өөрөөр [`react-hyperscript`](https://github.com/mlmorg/react-hyperscript) болон [`hyperscript-helpers`](https://github.com/ohanhi/hyperscript-helpers) зэрэг илүү тохиромжтой синтакс санал болгож буй прожектуудыг анхаарч үзэж болно.
