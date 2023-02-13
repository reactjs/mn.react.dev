---
id: uncontrolled-components
title: Удирдагдаагүй компонентууд
permalink: docs/uncontrolled-components.html
---

<<<<<<< HEAD
Ихэнх тохиолдолд бид форм хэрэгжүүлэхэд [удирдагдсан компонентууд](/docs/forms.html) хэрэглэхийг зөвлөдөг. Удирдагдсан компонентод формын өгөгдөл нь React компонентоор зохицуулагддаг. Өөр нэг арга нь удирдагдаагүй компонент ашиглах бөгөөд формын өгөгдөл нь DOM-р зохиуцуулагддаг.
=======
> Try the new React documentation.
> 
> These new documentation pages teach modern React and include live examples:
>
> - [`<input>`](https://beta.reactjs.org/reference/react-dom/components/input)
> - [`<select>`](https://beta.reactjs.org/reference/react-dom/components/select)
> - [`<textarea>`](https://beta.reactjs.org/reference/react-dom/components/textarea)
>
> The new docs will soon replace this site, which will be archived. [Provide feedback.](https://github.com/reactjs/reactjs.org/issues/3308)

In most cases, we recommend using [controlled components](/docs/forms.html#controlled-components) to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.
>>>>>>> 47adefd30c46f486428d8231a68e639d62f02c9e

Удирдагдаагүй компонент бичихдээ төлөв болгоны шинэчлэлт дээр эвентийн удирдлага бичихийн оронд формын утгийг DOM-с авахийн тулд [ref ашигладаг](/docs/refs-and-the-dom.html).

Жишээлбэл, энэ код нь нэг нэрийг удирдагдаагүй компонент дээр хүлээн авж байна

```javascript{5,9,18}
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

[**CodePen дээр турших**](https://codepen.io/gaearon/pen/WooRWa?editors=0010)

Удирдагдаагүй компонент үнэний эх сурвалжийг DOM дээр үлдээж байгаа учир удирдагдаагүй компонент ашиглаж байгаа үед React болон React бус веб програмуудыг хооронд нэгтгэхэд амархан байдаг. Та хурдан хийхийг хүссэн үед энэ арга нь бага бичиглэлтэй байж болно. Бусад тохиолдолд та ихэвчлэн удирдагдсан компонентууд ашиглах нь зүйтэй.

Танд ямар тохиолдолд аль төрлийн компонентийг ашиглах зүйтэй нь эргэлзээтэй байвал [удирдагдсан болон удирдагдаагүй оролтыг харьцуулсан энэ нийтлэл](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/) тус болж мэднэ.

### Анхны утгууд {#default-values}

React-ын render-ийн мѳчлѳгѳд form дээрх `value` атрибут нь DOM-ынхаа утгыг дардаг. Удирдагдаагүй компонентын хувьд анхны утгаа зааж өгөөд, дараагийн шинэчлэлтүүдэд дээр тэрийг солихгүй байх шаардлагатай үед та `value`-ын оронд `defaultValue`-ийг ашиглах боломжтой юм. Компонент mount хийсний дараа `defaultValue`-ийг шинэчилбэл DOM дээр ямар ч утга өөрчлөгдөхгүй болно.

```javascript{7}
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input
          defaultValue="Bob"
          type="text"
          ref={this.input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```

Үүнтэй адилаар `<input type="checkbox">` болон `<input type="radio">` `defaultChecked` аттрибут дэмждэг, мөн `<select>` болон `<textarea>` `defaultValue` аттрибут дэмждэг.

## Файлын оролтын таг {#the-file-input-tag}

HTML дээр `<input type="file">` таг нь хэрэглэгчийг нэг эсвэл олон файлууд өөрийн төхөөрөмжөөс сонгон сервер лүү илгээх эсвэл Жаваскрипт-н [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) дамжин өөрчлөгдөх боломжтой.

```html
<input type="file" />
```

React дээр `<input type="file" />` нь үргэлж удирдагдагдаагүй компонент байдаг бөгөөд програмаар биш хэрэглэгчийн зааж өгсөн утга авдаг учир юм.

Та файлуудтай харилцахийн тулд File API ашиглах хэрэгтэй. Дараах жишээнд хэрхэн [DOM зангилаа дээр ref үүсгэж](/docs/refs-and-the-dom.html) файл руу хандах талаар үзүүлсэн байна:

`embed:uncontrolled-components/input-type-file.js`

[](codepen://uncontrolled-components/input-type-file)

