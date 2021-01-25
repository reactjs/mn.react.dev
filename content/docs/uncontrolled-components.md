---
id: uncontrolled-components
title: Удирдагдаагүй компонентууд
permalink: docs/uncontrolled-components.html
---

Ихэнх тохиолдолд бид форм хэрэгжүүлэхэд [удирдагдсан компонентууд](/docs/forms.html) хэрэглэхийг зөвлөдөг. Удирдагдсан компонентод формын өгөгдөл нь React компонентоор зохицуулагддаг. Өөр нэг арга нь удирдагдаагүй компонент ашиглах бөгөөд формын өгөгдөл нь DOM-р зохиуцуулагддаг.

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

### Анхын утгууд {#default-values}

<<<<<<< HEAD
React-н дүрслэх амьдралын мөчлөг дээр формын элементүүдийн `value` аттрибут нь DOM дээрх утгыг дардаг. Удирдагдаагүй компонент дээр та анхны өгөх утгыг нь тодорхойлох хэрэгтэй бөгөөд дараах шинэчлэлтүүд нь удирдагдаагүй хэвээр үлдэнэ. Иймэрхүү тохиолдлыг хэрэгжүүлэхдээ `defaultValue` аттрибутыг `value`-н оронд тодорхойлох нь зүйтэй.
=======
In the React rendering lifecycle, the `value` attribute on form elements will override the value in the DOM. With an uncontrolled component, you often want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a `defaultValue` attribute instead of `value`. Changing the value of `defaultValue` attribute after a component has mounted will not cause any update of the value in the DOM.
>>>>>>> ed88a240d9c97822cc2f02074306965a1a4f4ac4

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

