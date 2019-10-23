---
id: faq-ajax
title: AJAX болон API-ууд
permalink: docs/faq-ajax.html
layout: docs
category: FAQ
---

### Хэрхэн AJAX дуудлага хийх вэ? {#how-can-i-make-an-ajax-call}

React-тай өөрийн хүссэн AJAX санг ашиглах боломжтой. Зарим түгээмлийг дурдвал [Axios](https://github.com/axios/axios), [jQuery AJAX](https://api.jquery.com/jQuery.ajax/), болон броузерт байрлах [window.fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

### Компонентын мѳчлѳгийн аль хэсэг дээр AJAX-г дуудах хэрэгтэй вэ? {#where-in-the-component-lifecycle-should-i-make-an-ajax-call}

AJAX дуудлагийг [`componentDidMount`](/docs/react-component.html#mounting) мөчлөгийн метод дотор датагаар дүүргэх хэрэгтэй. Тэгснээр дата нь буцаж ирхэд `setState`-г ашиглаж компонентээ шинэчлэж чадах юм.

### Жишээ: AJAX хариуг ашиглаж дотоод төлвийг оноох {#example-using-ajax-results-to-set-local-state}

Доорх компонент хэрхэн `componentDidMount` дотор AJAX дуудлага хийж компонентын дотоод төлвийг шинэчлэхийг харуулж байна.

Жишээ API нь үүнтэй ижил JSON обьект буцаадаг:

```
{
  "items": [
    { "id": 1, "name": "Apples",  "price": "$2" },
    { "id": 2, "name": "Peaches", "price": "$5" }
  ]
}
```

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Тэмдэглэл: catch() блок ашиглахын оронд энд
        // алдааг бариж авах нь чухал. Тэгснээр компонент
        // доторх өөрийн алдааг уусгахгүй юм.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}
```
