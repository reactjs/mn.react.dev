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

React элементийг эх DOM зангилаа дээр дүрслэхдээ хоёуланг нь [`ReactDOM.render()`](/docs/react-dom.html#render)-рүү дамжуулах хэрэгтэй:

`embed:rendering-elements/render-an-element.js`

**[Try it on CodePen](https://codepen.io/gaearon/pen/ZpvBNJ?editors=1010)**

Энэ код хуудас дээр "Hello, world" текст дүрслэх болно.

## Дүрслэгдсэн элэмент шинэчлэх {#updating-the-rendered-element}

React элементүүд нь [хувиршгүй(immutable)](https://en.wikipedia.org/wiki/Immutable_object). Элемент үүсгэсний дараа та шинж чанар болон дэд элементийг нь өөрчилж чадахгүй. Элемент бол киноны нэг агшин шиг: тухайн агшинд дэлгэцийн загварыг(UI) төлөөлөнө.

Бидний мэдэж байгаагаар дэлгэцийн загварын өөрчлөх ганц арга зам бол шинэ элемент үүсгэн [`ReactDOM.render()`](/docs/react-dom.html#render) рүү дамжуулах юм.

Дараах цаг заагч жишээг авая:

`embed:rendering-elements/update-rendered-element.js`

**[Try it on CodePen](https://codepen.io/gaearon/pen/gwoJZk?editors=1010)**

Энэ нь [`ReactDOM.render`](/docs/react-dom.html#render)-г [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) дуудалт дээр секунд болгон дуудаж байна.

>**Анхаар:**
>
>Амьдрал дээр ихэнх React програмууд [`ReactDOM.render()`](/docs/react-dom.html#render)-г ганцхан удаа дууддаг. Дараагийн бүлэгт бид иймэрхүү код хэрхэн [төлөвт компонентууд](/docs/state-and-lifecycle.html) дээр хэрэгжиж болдгийг(encapsulation) үзэх болно.
>
>Бид дараах сэдвийг алгасахгүй байхийг зөвлөж байгаа шалтгаан нь эдгээр хоёр нь хамтран бичигддэг.

## React зөвхөн хэрэгтэйгээ шинэчилдэг {#react-only-updates-whats-necessary}

React DOM элемент болон дэд элементийг нь өмнөхтэй нь харьцуулан DOM-г хүссэн төлөвт нь оруулахийн тулд DOM дээр зөвхөн шаардлагатай өөрчлөлтийг л хэрэгжүүлдэг.

<<<<<<< HEAD
Та [өмнөх жишээг](codepen://rendering-elements/update-rendered-element) хөтчийн хэрэгсэл ашиглан шинжилж мэдэж болно:
=======
You can verify by inspecting the [last example](https://codepen.io/gaearon/pen/gwoJZk?editors=1010) with the browser tools:
>>>>>>> 71cc6be6182418dec43b72f2a9ef464619cb7025

![DOM inspector showing granular updates](../images/docs/granular-dom-updates.gif)

Хэдийгээр бид секунд цохилох болгонд дэлгэцийн загварыг тодорхойлж байгаа модыг тодорхойлох элементийг үүсгэж байгаа ч зөвхөн текст зангилааны агуулга өөрчлөгдөж React DOM-р шинэчлэгдэнэ.

Бидний туршлагаас тухайн агшинд дэлгэцийн загвар хэрхэн харагдахийг бодохоос илүү хэрхэн алдаа мадаггүй өөрчлөхийг бодох нь үр дүнтэй.
