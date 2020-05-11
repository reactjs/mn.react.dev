---
id: forms
title: Формууд
permalink: docs/forms.html
prev: lists-and-keys.html
next: lifting-state-up.html
redirect_from:
  - "tips/controlled-input-null-value.html"
  - "docs/forms-zh-CN.html"
---

HTML форм элементүүд React дээр байдаг бусад DOM элементүүдээс бага зэрэг өөр ажилладаг учир нь форм элементүүд зарим дотоод төлөв хадгалах хэрэгтэй байдаг. Жишээлбэл, энэ энгийн HTML форм нэг нэр хүлээж авдаг:

```html
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

Энэ форм үндсэн HTML формын үйлдлийг агуулсан хэрэглэгч нэрээ оруулаад товч дарахад шинэ хуудас дуудагдана. Энэ үйлдэл React дээр ч адилхан ажиллана. Гэхдээ ихэнх тохиолдлуудад формыг мэдээлэл дамжуулах үйлдэл нь Жаварскрипт функцээр дамжих нь илүү нийтлэг арга юм. Энэ үйлдлийг стандартаар хийх аргыг "удирдагдсан компонентууд(controlled components)" гэж нэрлэдэг.

## Удирдагдсан Компонентууд {#controlled-components}

HTML дээр формууд элементүүд болох `<input>`, `<textarea>` болон `<select>` нь өөрсдийн төлөвтэй бөгөөд хэрэглэгчийн оролт дээр тулгуурлан төлөвүүдээ шинэчилдэг. React дээр хувирамтгай төлөв нь элементийн төлөв шинж чанарт хадгалагддаг бөгөөд зөвхөн [`setState()`](/docs/react-component.html#setstate) үйлдлээр шинэчлэгдэнэ.

Бид эдгээр хоёрыг нэгтгэн React-н төлөвийг "нэг эх сурвалжтай нь үнэн" байлгадаг. Тэгээд React компонент нь формоо дүрслэх ба мөн форм дахь хэрэглэгчийн оролтоо удирддаг. Input формын элемент нь React-р удирдагдаж байгаа бол энэ нь "удирдагдсан компонент" юм.

Жишээлбэл өмнөх жишээний хүний нэрийг бичээд илгээхэд лог хийх бол бид удирдагдсан компонент бичиж болно:

```javascript{4,10-12,24}
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

[**CodePen дээр туршина уу**](https://codepen.io/gaearon/pen/VmmPgp?editors=0010)

Бидний форм элемент дээр `value` аттрибут нь оноогдож байгаа учир дүрслэгдсэн утга нь `this.state.value` байх ба React-н төлөвийг нэг эх сурвалжтай үнэн болгоно. `handleChange`товчны даралт бүрт ажиллан React-н төлөвийг шинэчлэх учир дэлгэцэнд дүрслэгдэх утга нь хэрэглэгчийн бичсэнээр байх болно.

<<<<<<< HEAD
Удирдагдсан компонентийн бүх төлөвийн хувирал нь харгалзах зохицуулагч функцтэй байх болно.Энэ нь хэрэглэгчийн оролтын зөв бурууг шалгах болон засварлахад амар болно. Хэрэв нэрийг дан том үсгээр оруулахийг шаардах бол `handleChange` функцийг дараах байдлаар бичиж болно:

```javascript{2}
handleChange(event) {
  this.setState({value: event.target.value.toUpperCase()});
}
```
=======
With a controlled component, the input's value is always driven by the React state. While this means you have to type a bit more code, you can now pass the value to other UI elements too, or reset it from other event handlers.
>>>>>>> bc91fe4101420f98454a59ac34c1cf1d4d4f4476

## textarea таг {#the-textarea-tag}

HTML дээр `<textarea>` элемент нь өөрийн текстийг дэд утгаар тодохойлдог:

```html
<textarea>
  Hello there, this is some text in a text area
</textarea>
```

React дээр `<textarea>` `value` аттрибут хэрэглэдэг. Энэ арга замаар форм `<textarea>` ашиглаж байгаа форм маш энгийн мөн нэг мөрт оролттой адилаар бичигдэж болно:

```javascript{4-6,12-14,26}
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

`this.state.value` нь байгуулагч дээр утгаа авсан байгааг анзаарсан бол үүгээр текстийн оролт дээрээ утга агуулж болно.

## select таг {#the-select-tag}

HTML дээр `<select>` нь доошоо урсдаг жагсаалт үүсгэдэг. Жишээ энэ HTML амтнуудын(flavors) доошоо урсдаг жагсаалт үүсгэсэн байна:

```html
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

Энд Наргалын амт нь `selected` аттрибут зааж өгсөн учир анхнаасаа сонгогдсон байгааг анзаарах хэрэгтэй. React дээр `selected` аттрибут ашиглахийн олон `value` аттрибутыг үндсэн `select` таг дээр хэрэглэдэг. Энэ илүү амар арга бөгөөд удирдагдсан компонент дээр ганцхан газар өөрчлөлт хийнэ. Жишээлбэл:

```javascript{4,10-12,24}
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

[**CodePen дээр туршина уу**](https://codepen.io/gaearon/pen/JbbEzX?editors=0010)

Ерөнхийдөө энэ нь `<input type="text">`, `<textarea>`, and `<select>` элементүүдийг ижилхэн байдлаар ажилладаг болгож байна - тэдгээр нь бүр `value` аттрибут хүлээн авдаг удирдагдсан компонентод ашиглагдаж байна.

> Анхаар
>
> `value` аттрибутад жагсаалт утга илгээн `select` тагд олон утга сонгох боломжтой:
>
>```js
><select multiple={true} value={['B', 'C']}>
>```

## Файлын оролтын таг {#the-file-input-tag}

HTML дээр `<input type="file">` нь хэрэглэгчийг нэг эсвэл олон файл өөрийн төхөөрөмжөөс сонгон сервер лүү илгээх эсвэл Жаваскрипт [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)-аар удирдах боломж олгодог.

```html
<input type="file" />
```

Утга нь зөвхөн унших горимд байдаг учир энэ нь React дээр **удирдагдаагүй** компонент болно. Үүнийг бусад удирдагдаагүй компонентуудын хамт [дараа нь өөр баримтжуулалт](/docs/uncontrolled-components.html#the-file-input-tag) ярина.

## Олон оролтыг удирдах {#handling-multiple-inputs}

Нэг зэрэг олон `оролтын` элементүүд удирдах хэрэгтэй үед `name` аттрибутыг элемент бүр дээр нэмэн удирдагч(handler) функцийг `event.target.name`-н утгаар дамжуулан үйлдлээ сонгож болно.

Жишээлбэл:

```javascript{15,18,28,37}
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```

[**CodePen дээр туршина уу**](https://codepen.io/gaearon/pen/wgedvV?editors=0010)

ES6 [тооцоологдсон шинж чанарын нэр](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names) синтакс ашиглан өгөгдсөн оролтын нэрийн харгалзах төлөвийн түлхүүрийг хэрхэн шинэчилж байгааг анзаарч болно:


```js{2}
this.setState({
  [name]: value
});
```

Энэ нь дараах ES5 кодтой ижилхэн:

```js{2}
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```

Мөн түүнчлэн `setState()` автоматаар [хэсэгчилсэн төлөвийг одоогийн төлөв рүү нэгтгэснээр](/docs/state-and-lifecycle.html#state-updates-are-merged) бид зөвхөн өөрчлөгдсөн хэсгүүдийг дуудах хэрэгтэй.

## Удирдагдсан оролтын хоосон утга {#controlled-input-null-value}

[Удирдагдсан компонент](/docs/forms.html#controlled-components) дээр утга шинж чанарт нь тусгайлан утга оноох нь хэрэглэгч хүсээгүй л бол оролтын утгийг өөрчлөгдөхөөс сэргийлдэг. Хэрэв та тусгайлан `value` зааж өгсөн оролт нь засварлах боломжтой байвал та магадгүй санамсаргүйгээр `тодорхойлогдоогүй` эсвэл `хоосон` утга өгсөн байж болно.

Дараах код үүнийг заасан байна. (Оролт нь эхэндээ засварлах боломжгүйгээр цоожлогдсон ба богино хугацааны дараа засварлагдаж боломжтой болж байна.)

```javascript
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);

```

## Удирдагдсан компонентуудаас өөр сонголт {#alternatives-to-controlled-components}

Заримдаа удирдагдсан компонентууд ашиглах төвөгтэй санагдаж болно учир нь React компонент дээр та удирдах(handler) функц өгөгдлийн өөрчлөлт болгонд зохицуулан бичих хэрэгтэй болж байна. Энэ ялангуяа бичигдсэн кодыг React руу шилжүүлэх эсвэл React програмыг React-н бус сан дээр залгахад(integrate) бүр төвөгтэй. Эдгээр тохиолдлуудад та магадгүй оролтын формуудыг хэрэгжүүлэх өөр нэг сонголт болох [удирдагдаагүй компонентууд](/docs/uncontrolled-components.html)-ын талаар унших хэрэгтэй болж магадгүй.

## Бүрэн шийдэгдсэн шийдлүүд {#fully-fledged-solutions}

Хэрэв таньд оролтын өгөгдлийг шалгах, зочилсон талбаруудын мөрийг хөтлөх, формын өгөгдөл илгээлт зэрэг дээр бүтэн шийдэл хэрэгтэй бол [Formik](https://jaredpalmer.com/formik) нь нийтлэг сонголтуудын нэг юм. Энэ нь удирдагдсан компонентууд болон төлөв удирдах зарчимтай ижил зарчмаар бүтээгдсэн ч сурахгүй өнгөрч болохгүй юм.
