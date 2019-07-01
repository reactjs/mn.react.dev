---
id: fragments
title: Fragments
permalink: docs/fragments.html
---

React компонент нь олон элементийг харуулахдаа заавал грүпп байдлаар буцаах шаардлагатай. Харин Фрагмент нь нэмэлт DOM нүдний шаардлагагүйгээр олон элементийг нэг групп болгон харуулдаг.

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

<<<<<<< HEAD
Мѳн шинэ [богиносгосон хувилбар](#short-syntax) ашиглаж болох боловч одоогоор бүх хэрэгсэл үүнийг дэмжээгүй байгаа.
=======
There is also a new [short syntax](#short-syntax) for declaring them.
>>>>>>> c024001caf50180a896c09467d06b2ad7b2fb8f4

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

<<<<<<< HEAD
Анхаарах зүйл нь **[маш олон хэрэгслүүд үүнийг дэмжиж эхлээгүй](/blog/2017/11/28/react-v16.2.0-fragment-support.html#support-for-fragment-syntax)** тиймээс бусад хэрэгслүүд бүрэн дэмжих хүртэл заавал тусд нь `<React.Fragment>` ашиглах шаардлага гарна.

### Key-тэй фрагмент {#keyed-fragments}
=======
### Keyed Fragments {#keyed-fragments}
>>>>>>> c024001caf50180a896c09467d06b2ad7b2fb8f4

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

`key` is the only attribute that can be passed to `Fragment`. In the future, we may add support for additional attributes, such as event handlers.
`key` нь `Фрагментэд` авч болох цорын ганц аттрибут юм. Цаашдаа бид бусад аттрибутууд болох event handler мэтийг дэмжих боломжтой болгоно.

### Live Demo {#live-demo}

Фрагментийг энд туршиж болно. [CodePen](https://codepen.io/reactjs/pen/VrEbjE?editors=1000).
