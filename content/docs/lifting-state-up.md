---
id: lifting-state-up
title: Тѳлѳвийг ахисан түвшинд  
permalink: docs/lifting-state-up.html
prev: forms.html
next: composition-vs-inheritance.html
redirect_from:
  - "docs/flux-overview.html"
  - "docs/flux-todo-list.html"
---

<<<<<<< HEAD
Ихэвчлэн хэдэн компонентууд ижилхэн өөрчлөгдөж байгаа өгөгдөл дээр ажилладаг. Бид төлѳвөө дээшлүүлэн нийтлэг дээд түвшний компонент руу зөөн хуваалцахийг санал болгодог. Энэ нь хэрхэн ажилладагийг үзэцгээе.
=======
> Try the new React documentation.
> 
> These new documentation pages teach modern React and include live examples:
>
> - [Sharing State Between Components](https://beta.reactjs.org/learn/sharing-state-between-components)
>
> The new docs will soon replace this site, which will be archived. [Provide feedback.](https://github.com/reactjs/reactjs.org/issues/3308)

Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. Let's see how this works in action.
>>>>>>> 63c77695a95902595b6c2cc084a5c3650b15210a

Энэ хэсэг бид ус өгөгдсөн температурт буцлаж эсэх талаар дулаан тоочогч хийх болно.

Бид `BoilingVerdict` нэртэй компонентоос эхэлье. Энэ нь `celsius` температур шинж чанараар хүлээн аваад усыг буцалгахад хангалттай эсэх талаар хэвлэдэг юм:

```js{3,5}
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
```

Дараа нь бид `Calculator` нэртэй компонент үүсгэнэ. Энэ нь `<input>`-г хэрэглэгчийн температурын утгийг оруулан `this.state.temperature` төлөвт хадгална.

Нэмээд энэ нь `BoilingVerdict`-г оролтын утгаа дүрсэлнэ.

```js{5,9,13,17-21}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
```

[**CodePen дээр турших**](https://codepen.io/gaearon/pen/ZXeOBm?editors=0010)

## Хоёр дахь оролт нэмэх {#adding-a-second-input}

Бидний шинэ шаардлагад нэмэлтээр целсийн болон фаренгетийн эсэхийг мэдэх оролт хэрэг болсон бөгөөд нэгнийхээ утгаар нөгөөх нь даган өөрчлөгдөх хэрэгтэй.

Бид `TemperatureInput` компонентийг `Calculator` компонентоос гаргаж авснаар эхэлнэ. Бид шинэ `scale` шинж чанарыг нэмэн утгыг нь `"c"` эсвэл `"f"` байлгана:


```js{1-4,19,22}
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```

Одоо бид `Calculator` компонентоо хоёр өөр температурын оролт дээр үндэслэн дүрслэнэ:

```js{5,6}
class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}
```

[**CodePen дээр турших**](https://codepen.io/gaearon/pen/jGBryx?editors=0010)

Одоо бид хоёр оролттой болсон бөгөөд нэг дээр нь дулааны утга оруулахад нөгөөх нь өөрчдлөгдөхгүй. Энэ нь бидний шаардлагын зөрчиж байна: бид хоёуланг нь хамааралтай даган өөрчлөгдөхөөр(sync) хийхийг хүссэн.

Мөн түүнчлэн бид `BoilingVerdict`-г `Calculator`-с дүрсэлж чадахгүй. `Calculator` нь одоогийн дулааны утгийг мэдэхгүй бөгөөд `TemperatureInput`-г дотор нуугдсан байна.

## Хөрвүүлэх функцууд бичих нь {#writing-conversion-functions}

Эхлээд бид целсиэс фаренгейт руу мөн буцаагаад хөрвүүлэх функцууд бичих болно:

```js
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
```

Эдгээр хоёр функцууд нь тоо хөрвүүлэх юм. Бид өөр нэг функц бичих бөгөөд тэмдэгт төрлөөр `температур` утга болон хөрвүүлэгч функц аван тэмдэгт төрлөөр хөрвүүлэх үйлдэл хийдэг функц байх болно. Бид үүний оролтын утгыг өөр нэг оролт руу хөрвүүлэн гаргахад хэрэглэнэ.

Энэ нь буруу `temperature`-н утгад хоосон тэмдэгт буцаах ба гаралтыг таслалаас хойших гуравдах тоог тэгшилсэн(round) байдалтай гаралт гаргана:

```js
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
```

Жишээлбэл `tryConvert('abc', toCelsius)` нь хоосон тэмдэгт буцаах бол `tryConvert('10.22', toFahrenheit)` нь `'50.396'` утга буцаана.

## Төлвийг өргөх нь {#lifting-state-up}

Одоогоор хоёр `TemperatureInput` компонентууд нь бие даан өөрсдийн дотоод төлвөө хадгалж байна:

```js{5,9,13}
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    // ...  
```

Гэхдээ бид хоёр оролтуудыг хоорондоо шинэчлэгдсэн байхийг хүсэж байна. Бид целсийн оролтыг шинэчлэхэд фаренгетийн оролт шинэчлэгдэн мөн эсрэгээр ч ажиллахийг хармаар байна.

React дээр төлвөө хуваалцахдаа хамгийн ойр нийтлэг эцэг компонентруу зөөн хийдэг. Үүнийг "төлөв өргөх" гэж нэрлэдэг. Бид дотоод төлвийг `TemperatureInput`-с хасан `Calculator`-руу зөөнө.

Хэрэв `Calculator` хуваалцсан төлөв эзэмшвэл, хоёр оролын хувьд "үнэн эх сурвалж" болох юм. Энэ нь тэдгээрийг зааварчлан хоорондоо нийцтэй утгатай байлгана. `TemperatureInput` компонентуудын шинж чанарууд нэг эцэг болох `Calculator` компонентоос ирж байгаа учир тэд хоорондоо үргэлж шинэчлэгдсэн байх болно.

Үүнийг хэрхэн ажиллахийг алхам алхмаар харцгаая.

Эхлээд бид `this.state.temperature`-г `this.props.temperature`-р `TemperatureInput` компонент дээр солино. Одоо бид `this.props.temperature` шинж чанарыг `Calculator` компонентоос дараа нь дамжуулах ч аль хэдийн байгаа мэтээр сэтгэнэ:

```js{3}
  render() {
    // Before: const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    // ...
```

Бид [шинж чанарууд нь унших горим](/docs/components-and-props.html#props-are-read-only)тойг мэднэ. `temperature` дотоод төлөвт байхад `TemperatureInput` нь зүгээр л `this.setState()` дуудан утгийг нь өөрчилж байсан. Гэвч одоо `temperature` нь эцэг компонентоос шинж чанараар ирж байгаа учир `TemperatureInput` нь ямар нэг удирдах боломж байхгүй.

React дээр үүнийг компонентийг "удирдагдсан " болгон шийддэг. DOM `<input>` нь `value` болон `onChange` шинж чанар хүлээн авдаг шиг `TemperatureInput` нь `temperature` бол `onTemperatureChange` шинж чанарууд эцэг `Calculator`-с хүлээн авна.

Одоо `TemperatureInput` өөрийн дулаанаа өөрчлөх бол `this.props.onTemperatureChange`-г дуудна:

```js{3}
  handleChange(e) {
    // Before: this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
    // ...
```

>Анхаар:
>
>Энэ `temperature` эсвэл `onTemperatureChange` тусгай зориулсан утга байхгүй бөгөөд компонентийн нэрүүд юм. Бид үүнийг өөрөөр `value` болон `onChange` шиг яаж ч нэрлэж болох ч энэ нь нийтлэг дүрэм юм.

`onTemperatureChange` шинж чанар нь `temperature` шинж чанарын хамт эцэг `Calculator` компонентоос олгогдоно. Энэ нь өөрчлөлтийг өөрийн дотоод төлвөө өөрчлөн удирдах бөгөөд хоёр оролт дээр шинэ утгаар дахин дүрслэнэ. Бид удахгүй шинэ `Calculator` компонентийг хэрэгжүүлэлтийг харах болно.

`Calculator` компонентийн өөрчлөлт рүү орохоос өмнө `TemperatureInput` компонентийг өөрчлөлтийг тоймлоё. Бид дотоод төлвийг хасан `this.state.temperature`-с уншихийн оронд `this.props.temperature` ашигласан. `this.setState()`-г дуудахийн оронд өөрчлөлт хийхийн тулд `Calculator`-с олгогдсон `this.props.onTemperatureChange()`-г дууддаг болсон:

```js{8,12}
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```

За одоо `Calculator` компонент руугаа орцгооё.

Бид оролтын утга болох `temperature` болон `scale` хоёрыг дотоод төлөвтөө хадгална. Энэ нь оролтоос "өргөгдсөн" төлөв бөгөөд хоёр оролтод "үнэн эх сурвалж" болон үйлчилнэ. Энэ нь бидэнд хэрэгтэй хоёр оролтууд дээр дүрслэх өгөгдлүүдийн хамгийн бага байдлаар дүрсэлсэн юм.

Жишээлбэл целсийн оролт дээр 37 гэж оруулахад `Calculator` компонентийн төлөв дараах байдалтай байна:

```js
{
  temperature: '37',
  scale: 'c'
}
```

Дараа нь фаренгетийн талбар дээр 212 гэж засварлахад `Calculator` компонетийн төлөв дараа байдалтай байна:

```js
{
  temperature: '212',
  scale: 'f'
}
```

Бид хоёр оролтын утгийг хоёуланг нь хадгалж болох байсан ч шаардлагагүй боллоо. Хамгийн сүүлд өөрчлөгдсөн оролтын утгийг ямар хэмжигдэхүүн дээр бичигдсэнийг хадгалахад л хангалттай. Бид `temperature` болон `scale`-н утгаар харгалзах утгийг нь олж чадна.

Оролтууд нь ижил төлвөөс тооцоологдож байгаа учир мэдээллээ шинэчилсэн хэвээр байна:

```js{6,10,14,18-21,27-28,31-32,34}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
```

[**CodePen дээр турших**](https://codepen.io/gaearon/pen/WZpxpz?editors=0010)

Одоо ямар ч оролтыг засварласан `this.state.temperature` болон `this.state.scale` `Calculator` дээр шинэчлэгдэнэ. Аль нэг оролт дээр утга оруулахад нөгөө оролтын утга нь шинээр тооцологдох болно.


Оролт дээр утга засварлахад юу болох талаар тоймлоё:

* React нь DOM `<input>`-н `onChange` дээр тодорхойлогдсон бүх функцуудыг дуудна. Бидний хувьд энэ нь `TemperatureInput` компонентийн `handleChange` функц юм.
* `TemperateInput` компонентийн `handleChange` функц нь `this.props.onTemperatureChange()`-г шинэ утгаар дуудах болно. `onTemperatureChange`-г багтаасан шинж чанарууд нь эцэг компонент болох `Calculator`-с олгогдоно.
* `TemperateInput`-н целсиийн утга өмнө нь дүрслэгдсэн бол `Calculator`-н компонентийн `onTemperatureChange` нь `handleCelsiusChange` функцийг дуудах бөгөөд эсрэгээрээ фаренгет дүрслэгдсэн бол `handleFahrenheitChange` функц дуудагдах юм. Эдгээр хоёр `Calculator`-н функцууд нь аль оролтыг засварласнаас хамааран дуудагдана.
* Эдгээр функцуудын дотод `Calculator` компонент нь `this.setState()`-г шинэ оролтын утга болон сонгосон хэмжигдэхүүнээр дуудснаар Reacт-аас засварласан утгаар дахин дүрсэлж өгөхийг асуудаг.
* React нь `Calculator` компонентийн `render` функцийг дуудан дэлгэцийн загвар хэрхэн харагдахийг суралцдаг. Хоёр оролтын утгууд нь одоогийн байгаа температур болон хэмжигдэхүүн дээр тулгуурлан дахин тооцоологддог бөгөөд температурын хөрвүүлэлт энд хийгдэнэ.
* React нь тус `TemperatureInput` компонентуудын тус тусын `render` функцуудийг `Calculator`-с олгогдсон шинж чанараар дуудна. Ингэснээр тэдгээрийн дэлгэцийн загвар яаж харагдахад суралдцдаг.
* React `BoilingVerdict` компонентийн `render` функцийг целсийн температурыг шинж чанар болгон дамжуулж дуудна.
* React DOM нь ус буцлах цэгийн харгалзах DOM-г шинэ утгаар шинэчилнэ. Бидний засварласан оролт нь одоогийн утгаа хүлээн авахад нөгөө оролт нь температурын утга хөрвүүлэлт хийсний дараа шинэчлэгдэнэ.

Бүх шинэчлэлт нь ижил алхмуудаар хийгдэх бөгөөд оролтууд нь утгуудаа шинэчлэгдсэн байлгана.

## Сурсан зүйлүүд {#lessons-learned}

React програмд өөрчлөгдөж байгаа ямар ч өгөгдөлд ганц л "үнэний эх сурвалж" байх нь зүйтэй. Ихэвчлэн төлөв дүрслэгдэхийн тулд эхлээд компонент руу нэмэгддэг. Дараа нь хэрэв бусад компонентуудад хэрэг болвол дээд түвшний хамгийн ойр эцэг компонент руу төлвөө зөөдөг. Ялгаатай компонентууд  хооронд төлвөө ижилхэн шинэчлэхийг оролдохийн оронд [дээрээс доош өгөгдлийн урсгалд](/docs/state-and-lifecycle.html#the-data-flows-down) найдах хэрэгтэй.

Төлөв өргөх нь илүү "урьдчилан бэлдсэн(boilerplate)" код бичих шаардлагатай болж байгаа ч энэ нь програмын гажуудал(bug) хайж олох болон тусгаарлахад бага ажил шаарддагаараа давуу тал болж болох юм. Ямар ч төлөв компонент дотор "амьдрах"  болон тэр компонент нь ганцаараа өөрчилж байгаа учир гажуудлыг хайх хүрээ нь харьцангуй багасна. Нэмж хэлэхэд та ямар тусгай логик хэрэглэгчийн оролтыг өөрчлөх болон хязгаарлах байдлаа хэрэгжүүлж болно.

Хэрэв ямар нэг зүйл шинж чанар эсвэл төлөвөөс гарч ирж болох бол энэ нь магадгүй төлөв дотор байх хэрэггүй юм. Жишээлбэл, `celsiusValue` болон `fahrenheitValue`-г хадгалахийн оронд бид зөвхөн сүүлд засварлагдсан `температур` болон `хэмжигдэхүүн`-г хадгалж байна. Өөр оролтын утга нь үргэлж `render()` функцээс тооцоологдох болно. Энэ нь бидэнд бусад талбарын таслалаас хойших утгийг цэвэрлэх эсвэл тэгшлэх боломжийг олгож байна.

Та дэлгэцийн загвар дээр ямар нэг буруу зүйл харвал та [React Хөгжүүлэгчийн Хэрэгслүүд](https://github.com/facebook/react-devtools)-г ашиглан шинж чанарыг шинжлэх болон төлвийг нь өөрчилж буй компонентийг олох хүртлээ шатлалын модоор дээш өгсөж болно. Энэ нь бидэнд эх кодын гажиг(bug)-г мөрдөхөд(trace) туслана:

<img src="../images/docs/react-devtools-state.gif" alt="Monitoring State in React DevTools" max-width="100%" height="100%">

