---
id: fragments
title: Хэлтэрхий
permalink: docs/fragments.html
prev: context.html
next: portals.html
---

React компонент нь олон элементийг харуулахдаа заавал багц байдлаар буцаах шаардлагатай. Харин Фрагмент нь нэмэлт DOM нүдний шаардлагагүйгээр олон элементийг нэг багц болгон харуулдаг.

```js
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

Мѳн тэдгээрийг зарлах шинэ [богиносгосон хувилбар](#short-syntax) байдаг.

## Сэдэл {#motivation}

Компонент нь олон элементийг жагсаалт болгон харуулдаг. Доорх React жишээг харъя:

```jsx
class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}
```

`<Columns />` нь олон `<td>` элементийг зѳв HTML харуулахын тулд буцаана. Хэрвээ `<Columns />` компонентийн `render()` функц div ашиглавал харагдах HTML нь буруу гарна.

```jsx
class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
  }
}
```

`<Table />` харагдах үр дүн:

```jsx
<table>
  <tr>
    <div>
      <td>Hello</td>
      <td>World</td>
    </div>
  </tr>
</table>
```

Фрагмент нь энэ асуудлыг шийднэ.

## Хэрэглээ {#usage}

```jsx{4,7}
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}
```

Ингэснээр зѳв `<Table />` үр дүн үзүүлнэ:

```jsx
<table>
  <tr>
    <td>Hello</td>
    <td>World</td>
  </tr>
</table>
```

### Богино синтакс {#short-syntax}

Фрагмент ашиглахдаа шинэ богиносгосон хувилбарыг ашиглаж болно. Яг хоосон таг юм шиг харагдана:

```jsx{4,7}
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```

`<></>` -ыг яг л бусад элементүүд ашигладаг шиг ашиглана. Гэхдээ энэ нь keys эсвэл бусад аттрибутуудыг дэмжихгүй.

### Key-тэй фрагмент {#keyed-fragments}

Фрагмент нь `<React.Fragment>` хэлбэрээр зарлагдсан бол key агуулж болдог. Array -ыг олон фрагмент болгон харуулах гэх мэт нѳхцѳлд ашиглана -- жишээ нь:

```jsx
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```

`key` нь `Фрагментэд` авч болох цорын ганц аттрибут юм. Цаашдаа бид бусад аттрибутууд болох event handler мэтийг дэмжих боломжтой болгоно.

### Live Demo {#live-demo}

Фрагментийг энд туршиж болно. [CodePen](https://codepen.io/reactjs/pen/VrEbjE?editors=1000).
