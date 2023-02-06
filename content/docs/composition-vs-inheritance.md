---
id: composition-vs-inheritance
title: Бүрэлдэхүүн vs Удамшил
permalink: docs/composition-vs-inheritance.html
redirect_from:
  - "docs/multiple-components.html"
prev: lifting-state-up.html
next: thinking-in-react.html
---

React нь хүчирхэг бүрэлдэхүүн загвартай бөгөөд компонентуудын хооронд кодыг дахин ашиглахдаа удамшил ашиглaхын оронд олон зүйлсийг хольж найруулж хэрэглэхийг зөвлөдөг.

Энэ хэсэг React сурч байгаа шинэ хөгжүүлэгчдийн удамшлаар шийддэг асуудлуудыг бүрэлдэхүүн болгон хэрхэн шийдэхийг үзэх болно.

## Агуулалт {#containment}

Зарим компонентууд өөртөө ямар дэд компонент агуулахаа мэдэхгүй. Энэ нь ихэвчлэн `Sidebar` эсвэл `Dialog` гэх мэт ерөнхий "хайрцаг" дүрсэлдэг компонентуудад элбэг тохиолдоно.

Эдгээр компонентуудад бид тусгай `children` шинж чанараар дэд элементээ хүлээн авж гаралтдаа дүрсэлж болно:

```js{4}
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```

Энэ нь бусад компонентыг дэд элемент болгон авж JSX дотор агуулах боломж олгож байна:

```js{4-9}
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```

**[CodePen дээр турших](https://codepen.io/gaearon/pen/ozqNOV?editors=0010)**

`<FancyBorder>` JSX дотор байгаа ямар ч зүйл `FancyBorder` компонент-уу `children` шинж чанар болон дамжуулагдана. `FancyBorder` нь `{props.children}`-г `<div>` дотор дүрсэлж байгаа учир дамжуулагдсан элемент эцсийн үр дүнд харагдах болно.


Энэ нь нэг их түгээмэл биш та компонентдоо олон "нүх" ашиглаж болно. Энэ тохиолдолд `children` шинж чанарын оронд та өөрийн нэрээ ашиглаж болно:

```js{5,8,18,21}
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```

[**CodePen дээр турших**](https://codepen.io/gaearon/pen/gwZOJp?editors=0010)

React элементүүд болох `<Contacts />` болон `<Chat />` нь зүгээр л объектууд учир та үүнийг бусад өгөгдөлтэй адил шинж чанар болгон дамжуулж болно. Энэ арга нь танд өөр сангуудын "slots"-г санагдуулах ч React дээр ямар зүйл шинж чанар болгон дамжуулахад ямар ч хязгаарлалт байхгүй.

## Specialization {#specialization}

Заримдаа компонент нь бусад компонентуудын "тусгай тохиолдол" байж болно. Жишээлбэл, `WelcomeDialog`-г `Dialog`-н тусгай тохиолдол гэж хэлж болно.

React дээр үүнийг мөн л бүрэлдэхүүн ашиглан "тусгай" компонент "ерөнхий" байдлаар дүрслэн шинж чанараар зохицуулагдаж болно:

```js{5,8,16-18}
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
```

[**CodePen дээр турших**](https://codepen.io/gaearon/pen/kkEaOZ?editors=0010)

Бүрэлдэхүүн нь класс байдлаар тодорхойлогдсон компонентууд дээр ч адилхан сайн ажилладаг:

```js{10,27-31}
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}
```

[**CodePen дээр турших**](https://codepen.io/gaearon/pen/gwZbYa?editors=0010)

## За тэгвэл удамшил яах вэ? {#so-what-about-inheritance}

Facebook-д бид React дээр олон мянган компонентууд ашигладаг ч удамшлын шатлалаар хэрэгжүүлэх ямар нэг хэрэглээний тохиолдол одоогоор гарч ирээгүй байна.

Шинж чанарууд болон бүрэлдэхүүн нь компонентын харагдах байдал болон ажиллагааны хувьд өөрчилж болох бүх уян хатан байдлуудыг илүү тодорхой, аюулгүй байдлаар олгодог. Компонент нь шинж чанарыг энгийн төрлийн утгууд, React элементүүд эсвэл функцууд авж болохыг санах хэрэгтэй.

<<<<<<< HEAD
Хэрэв та дэлгэцийн загвартай хамааралгүй ажиллагаа компонентуудын хооронд ашиглахыг хүсвэл эдгээрийг тусад нь Жаваскрипт модуль болгон салгахийг зөвлөж байна. Компонентууд нь эдгээр функц, класс, объектыг өргөтгөлгүйгээр импортлон ашиглаж болох юм.
=======
If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or class, without extending it.
>>>>>>> d4e42ab21f0cc7d8b79d1a619654e27c79e10af6
