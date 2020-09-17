---
id: conditional-rendering
title: Нѳхцѳлд тулгуурласан дүрслэл
permalink: docs/conditional-rendering.html
prev: handling-events.html
next: lists-and-keys.html
redirect_from:
  - "tips/false-in-jsx.html"
---

React дээр та өөрийн тусгай үйлдэл агуулсан онцгой компонентийг үүсгэж болно. Үүний дараа програмынхаа төлөвөөс хамааруулан дүрсэлж болно.

Нөхцөлд тулгуурласан дүрслэл React дээр Жаваскрипт дээр нөхцөл хэрхэн ажилладаг зарчмаар л ажиллана. Жаваскриптийн [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) [conditional operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) ашиглан элэмент үүсгэхдээ одоогийн төлвийг нь тодорхойлж, төлөвт нь тохирсон дэлгэцийн загварыг React-р зуруулж болно.

Дараах хоёр компонент байя:

```js
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
```

Бид `Greeting` компонент үүсгэн хэрэглэгч нэвтэрсэн эсэхээс нь хамааран дээрх компонентуудыг дүрслэе:

```javascript{3-7,11,12}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

[**CodePen дээр туршина уу**](https://codepen.io/gaearon/pen/ZpVxNq?editors=0011)

Энэ жишээ нь ялгаатай мэндчилгээ `isLoggedIn` шинж чанарын утгаас хамааран дүрсэлнэ.

### Элемент хувьсагчууд {#element-variables}

Та элементийг хадгалахдаа хувьсагч ашиглаж болно. ЭнЭ нь таньд нөхцөлд тулгуурлан компонентийн тодорхой хэсгийг өөрчлөн үлдсэн хэсэг нь өөрчлөгдөхгүй үлдэх боломжийг олгоно.

Нэвтрэх болох Гарах гэсэн товчтой дараах хоёр шинэ компонент байя:

```js
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
```

Доорх жишээнд бид `LoginControl` нэртэй [нөхцөл компонент](/docs/state-and-lifecycle.html#adding-local-state-to-a-class) үүсгэе.

Энэ нь `<LoginButton />` эсвэл `<LogoutButton />` хоёрын нэгийг одоогийн төлвөөсөө хамааран дүрсэлнэ. Мөн өмнөх жишээний `<Greeting />`-г бас дүрсэлнэ:

```javascript{20-25,29,30}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
```

[**CodePen ашиглан туршина уу**](https://codepen.io/gaearon/pen/QKzAgB?editors=0010)

Хувьсагч зарлан `if` илэрхийлэл ашиглан нөхцөлд тулгуурлан компонентоо дүрслэх нь сайн арга ч гэсэн заримдаа та илүү бага синтаксаар бичмээр санагдаж магадгүй. Энэ тохиолдолд JSX дотроо нөхцөл бичих цөөн хэдэн аргууд байдгийг дор тайлбарлав.

### Мөр доторхи If нөхцөл болон логик && оператор {#inline-if-with-logical--operator}

Та угалзан хаалт ашиглан [ямар ч илэрхийллүүдийг JSX шигтгэж](/docs/introducing-jsx.html#embedding-expressions-in-jsx) болно. Энэ нь мөн Жаваскриптийн `&&` операторыг агуулна. Энэ нь нөхцөлд тулгуурлан элементийг нэмэхэд хэрэг болно.

```js{6-10}
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```

[**CodePen дээр туршина уу**](https://codepen.io/gaearon/pen/ozJddz?editors=0010)

Жаваскрипт дээр `үнэн && илэрхийлэл` нь үргэлж `илэрхийлэл` байдаг ба `худал && илэрхийлэл` нь үргэлж `худал` байдаг учир ажиллана.

Тодруулбал, хэрэв нөхцөл нь `үнэн` байвал `&&` операторын арийн элемент гаралт болон харагдана. Хэрэв нөхцөл `худал` бол React тоолгүй алгасан өнгөрдөг.

### Мөр доторх If-Else нөхцөлт оператортой хамт {#inline-if-else-with-conditional-operator}

Өөр нэг нөхцөлд тулгуурлан элемент дүрслэх арга нь Жаваскриптийн нөхцөл оператор [`нөхцөл ? үнэн: худал`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) ашиглах юм.

Доорх жишээнд бид жижиг хэмжээний текстийг нөхцөл дээр тулгуурлан дүрсэлнэ.

```javascript{5}
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

Мөн түүнчлэн илүү том илэрхийлэл дээр ашиглагдаж болох ч ойлгоход төвөгтэй болгодог:

```js{5,7,9}
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
  );
}
```

Яг л Жаваскрипт шиг та болон танай багийхан аль нь илүү уншихад эвтэйхэн байна түүнийгээ сонгох нь таний шийдвэр юм. Мөн нөхцөл нь хэтэрхий төвөгтэй цогц болвол [компонент болгон салгах](/docs/components-and-props.html#extracting-components) нь илүү сайн сонголт гэдийг санах хэрэгтэй.

### Компонентийг дүрслэхээс сэргийлэх {#preventing-component-from-rendering}

Маш цөөн тохиолдолд та өөрийн компонентоо өөр компонентоор дамжин дүрслэгдсэн байсан ч нуухийг хүсч болох юм. Ингэхийн тулд `null` утга дүрслэх гаралтынхаа оронд буцаана.

Доорх жишээнд `<WarningBanner />` `warn` нэртэй шинж чанараасаа хамааран дүрслэгдэх юм. Хэрэв шинж чанарын утга `худал` бол компонент дүрслэгдэхгүй:

```javascript{2-4,29}
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
```

[**CodePen дээр туршина уу**](https://codepen.io/gaearon/pen/Xjoqwm?editors=0010)

`null` утга `render` функцээс буцаах нь компонентийг амьдралын циклийн функцээс чөлөөлөн ажиллагаагүй болгоно гэсэн үг биш юм. Үнэндээ `componentDidUpdate` функц дуудагдсаар л байх болно.
