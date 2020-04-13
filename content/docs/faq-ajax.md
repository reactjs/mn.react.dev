---
id: faq-ajax
title: AJAX болон API-ууд
permalink: docs/faq-ajax.html
layout: docs
category: FAQ
---

### Хэрхэн AJAX дуудалт хийх вэ? {#how-can-i-make-an-ajax-call}

React-тай өөрийн хүссэн AJAX санг ашиглах боломжтой. Зарим түгээмэл хэрэглээг дурдвал [Axios](https://github.com/axios/axios), [jQuery AJAX](https://api.jquery.com/jQuery.ajax/), болон броузерт байрлах [window.fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

### Компонентын мѳчлѳгийн аль хэсэг дээр AJAX-г дуудах хэрэгтэй вэ? {#where-in-the-component-lifecycle-should-i-make-an-ajax-call}

AJAX-г [`componentDidMount`](/docs/react-component.html#mounting) мөчлөгийн метод дотор дуудаж датаг авах нь зүйтэй. Тэгснээр дата нь буцаж ирэхэд `setState`-г ашиглаж компонентоо шинэчлэх юм.

### Жишээ: AJAX хариуг ашиглаж дотоод төлөвийг оноох {#example-using-ajax-results-to-set-local-state}

Доорх компонент хэрхэн `componentDidMount` дотор AJAX дуудалт хийж компонентын дотоод төлөвийг шинэчлэх тухай харуулж байна.

Жишээ API нь үүнтэй ижил JSON объект буцаадаг:

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
        // алдааг барьж авах нь чухал. Тэгснээр компонент
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

Here is the equivalent with [Hooks](https://reactjs.org/docs/hooks-intro.html): 

```js
function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

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
```
