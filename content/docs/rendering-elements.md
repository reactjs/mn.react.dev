---
id: rendering-elements
title: Элементүүдийг дүрслэх
permalink: docs/rendering-elements.html
redirect_from:
  - "docs/displaying-data.html"
prev: introducing-jsx.html
next: components-and-props.html
---

Элементүүд бол React app-н хамгийн жижиг хэсэг юм.

Элемент нь таны дэлгэц дээр юу харахийг хүсэж байгааг тодорхойлно:

```js
const element = <h1>Hello, world</h1>;
```

Интернет хөтөчийн DOM элементүүдтэй харьцуулахад React элементүүд нь үүсгэхэд хялбар энгийн объектууд юм. React DOM хөтөч дээр React элементийг харгалзуулан дүрсэлдэг.

>**Note:**
>
> Заримдаа элементүүдийг "компонентуудтай" хольж ойлгох тохиолдол байдаг. Бид компонентуудыг [дараагийн бүлэгт](/docs/components-and-props.html) танилцуулна. Элементүүд бол компонент юунаас бүрдэхийг заана.

## Элементийг DOM руу дүрслэх нь {#rendering-an-element-into-the-dom}

Чиний HTML файлын хаа нэгтээ `<div>` байсан гэж бодоё:

```html
<div id="root"></div>
```

Бид үүнийг "эх" DOM зангилаа гэдэг бөгөөд React DOM-р зохицуулагдаж байгаа бүх зангилаа үүнд багтана.

Зөвхөн React дээр хийгдсэн програмууд(applications) ихэвчлэн ганц эх DOM зангилаатай байдаг. Хэрэв хийгдсэн(existing) програм дээр React програм нэмж(integrate) байгаа бол та магадгүй олон эх DOM зангилаатай байж болно.

<<<<<<< HEAD
React элементийг эх DOM зангилаа дээр дүрслэхдээ хоёуланг нь [`ReactDOM.render()`](/docs/react-dom.html#render)-рүү дамжуулах хэрэгтэй:
=======
To render a React element, first pass the DOM element to [`ReactDOM.createRoot()`](/docs/react-dom-client.html#createroot), then pass the React element to `root.render()`:
>>>>>>> e77ba1e90338ff18f965c9b94c733b034b3ac18f

`embed:rendering-elements/render-an-element.js`

**[Try it on CodePen](https://codepen.io/gaearon/pen/ZpvBNJ?editors=1010)**

Энэ код хуудас дээр "Hello, world" текст дүрслэх болно.

## Дүрслэгдсэн элэмент шинэчлэх {#updating-the-rendered-element}

React элементүүд нь [хувиршгүй(immutable)](https://en.wikipedia.org/wiki/Immutable_object). Элемент үүсгэсний дараа та шинж чанар болон дэд элементийг нь өөрчилж чадахгүй. Элемент бол киноны нэг агшин шиг: тухайн агшинд дэлгэцийн загварыг(UI) төлөөлөнө.

<<<<<<< HEAD
Бидний мэдэж байгаагаар дэлгэцийн загварын өөрчлөх ганц арга зам бол шинэ элемент үүсгэн [`ReactDOM.render()`](/docs/react-dom.html#render) рүү дамжуулах юм.
=======
With our knowledge so far, the only way to update the UI is to create a new element, and pass it to `root.render()`.
>>>>>>> e77ba1e90338ff18f965c9b94c733b034b3ac18f

Дараах цаг заагч жишээг авая:

`embed:rendering-elements/update-rendered-element.js`

**[Try it on CodePen](https://codepen.io/gaearon/pen/gwoJZk?editors=1010)**

<<<<<<< HEAD
Энэ нь [`ReactDOM.render`](/docs/react-dom.html#render)-г [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) дуудалт дээр секунд болгон дуудаж байна.
=======
It calls [`root.render()`](/docs/react-dom.html#render) every second from a [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) callback.
>>>>>>> e77ba1e90338ff18f965c9b94c733b034b3ac18f

>**Анхаар:**
>
<<<<<<< HEAD
>Амьдрал дээр ихэнх React програмууд [`ReactDOM.render()`](/docs/react-dom.html#render)-г ганцхан удаа дууддаг. Дараагийн бүлэгт бид иймэрхүү код хэрхэн [төлөвт компонентууд](/docs/state-and-lifecycle.html) дээр хэрэгжиж болдгийг(encapsulation) үзэх болно.
=======
>In practice, most React apps only call `root.render()` once. In the next sections we will learn how such code gets encapsulated into [stateful components](/docs/state-and-lifecycle.html).
>>>>>>> e77ba1e90338ff18f965c9b94c733b034b3ac18f
>
>Бид дараах сэдвийг алгасахгүй байхийг зөвлөж байгаа шалтгаан нь эдгээр хоёр нь хамтран бичигддэг.

## React зөвхөн хэрэгтэйгээ шинэчилдэг {#react-only-updates-whats-necessary}

React DOM элемент болон дэд элементийг нь өмнөхтэй нь харьцуулан DOM-г хүссэн төлөвт нь оруулахийн тулд DOM дээр зөвхөн шаардлагатай өөрчлөлтийг л хэрэгжүүлдэг.

<<<<<<< HEAD
Та [өмнөх жишээг](codepen://rendering-elements/update-rendered-element) хөтчийн хэрэгсэл ашиглан шинжилж мэдэж болно:
=======
You can verify by inspecting the [last example](https://codepen.io/gaearon/pen/gwoJZk?editors=1010) with the browser tools:
>>>>>>> e77ba1e90338ff18f965c9b94c733b034b3ac18f

![DOM inspector showing granular updates](../images/docs/granular-dom-updates.gif)

Хэдийгээр бид секунд цохилох болгонд дэлгэцийн загварыг тодорхойлж байгаа модыг тодорхойлох элементийг үүсгэж байгаа ч зөвхөн текст зангилааны агуулга өөрчлөгдөж React DOM-р шинэчлэгдэнэ.

Бидний туршлагаас тухайн агшинд дэлгэцийн загвар хэрхэн харагдахийг бодохоос илүү хэрхэн алдаа мадаггүй өөрчлөхийг бодох нь үр дүнтэй.
