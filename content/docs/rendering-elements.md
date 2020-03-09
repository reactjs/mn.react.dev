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
React элемент эх DOM зангилаа дээр дүрслэхдээ `ReactDOM.render()` эх зангилаа болон элементээ дамжуулах хэрэгтэй:
=======
To render a React element into a root DOM node, pass both to [`ReactDOM.render()`](/docs/react-dom.html#render):
>>>>>>> fb382ccb13e30e0d186b88ec357bb51e91de6504

`embed:rendering-elements/render-an-element.js`

[](codepen://rendering-elements/render-an-element)

Энэ код хуудас дээр "Hello, world" текст дүрслэх болно.

## Дүрслэгдсэн элэмент шинэчлэх {#updating-the-rendered-element}

React элементүүд нь [хувиршгүй(immutable)](https://en.wikipedia.org/wiki/Immutable_object). Элемент үүсгэсний дараа та шинж чанар болон дэд элементийг нь өөрчилж чадахгүй. Элемент бол киноны нэг агшин шиг: тухайн агшинд дэлгэцийн загварыг(UI) төлөөлөнө.

<<<<<<< HEAD
Бидний мэдэж байгаагаар дэлгэцийн загварын өөрчлөх ганц арга зам бол шинэ элемент үүсгэн `ReactDOM.render()` рүү дамжуулах юм.
=======
With our knowledge so far, the only way to update the UI is to create a new element, and pass it to [`ReactDOM.render()`](/docs/react-dom.html#render).
>>>>>>> fb382ccb13e30e0d186b88ec357bb51e91de6504

Дараах цаг заагч жишээг авая:

`embed:rendering-elements/update-rendered-element.js`

[](codepen://rendering-elements/update-rendered-element)

<<<<<<< HEAD
Энэ нь `ReactDOM.render`-г [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) дуудалт дээр секунд болгон дуудаж байна.
=======
It calls [`ReactDOM.render()`](/docs/react-dom.html#render) every second from a [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) callback.
>>>>>>> fb382ccb13e30e0d186b88ec357bb51e91de6504

>**Анхаар:**
>
<<<<<<< HEAD
>Амьдрал дээр ихэнх React програмууд `ReactDOM.render()`-г ганцхан удаа дууддаг. Дараагийн бүлэгт бид иймэрхүү код хэрхэн [төлөвт компонентууд](/docs/state-and-lifecycle.html) капсул болдгийг(encapsulation) үзэх болно.
=======
>In practice, most React apps only call [`ReactDOM.render()`](/docs/react-dom.html#render) once. In the next sections we will learn how such code gets encapsulated into [stateful components](/docs/state-and-lifecycle.html).
>>>>>>> fb382ccb13e30e0d186b88ec357bb51e91de6504
>
>Бид дараах сэдвийг алгасахгүй байхийг зөвлөж байгаа шалтгаан нь эдгээр хоёр нь хамтран бичигддэг.

## React зөвхөн хэрэгтэйгээ шинэчилдэг {#react-only-updates-whats-necessary}

React DOM элемент болон дэд элементийг нь өмнөхтэй нь харьцуулан DOM-г хүссэн төлөвт нь оруулахийн тулд DOM дээр зөвхөн шаардлагатай өөрчлөлтийг л хэрэгжүүлдэг.

Та [өмнөх жишээг](codepen://rendering-elements/update-rendered-element) хөтчийн хэрэгсэл ашиглан шинжилж мэдэж болно:

![DOM inspector showing granular updates](../images/docs/granular-dom-updates.gif)

Хэдийгээр бид секунд цохилох болгонд дэлгэцийн загварыг тодорхойлж байгаа модыг тодорхойлох элементийг үүсгэж байгаа ч зөвхөн текст зангилааны агуулга өөрчлөгдөж React DOM-р шинэчлэгдэнэ.

<<<<<<< HEAD
Бидний туршлагаас тухайн агшинд дэлгэцийн загвар хэрхэн харагдахийг бодохоос илүү хэрхэн алдаа мадаггүй өөрчлөхийг бодох нь үр дүнтэй.
=======
In our experience, thinking about how the UI should look at any given moment, rather than how to change it over time, eliminates a whole class of bugs.
>>>>>>> fb382ccb13e30e0d186b88ec357bb51e91de6504
