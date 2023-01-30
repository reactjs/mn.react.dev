---
id: introducing-jsx
title: JSX танилцуулга
permalink: docs/introducing-jsx.html
prev: hello-world.html
next: rendering-elements.html
---

<<<<<<< HEAD
Дараах хувьсагчийн зарлагаа байя:
=======
> Try the new React documentation.
> 
> These new documentation pages teach modern React and include live examples:
>
> - [Writing Markup with JSX](https://beta.reactjs.org/learn/writing-markup-with-jsx)
> - [JavaScript in JSX with Curly Braces](https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces)
>
> The new docs will soon replace this site, which will be archived. [Provide feedback.](https://github.com/reactjs/reactjs.org/issues/3308)

Consider this variable declaration:
>>>>>>> 5647a9485db3426d62b5a8203f4499c01bcd789b

```js
const element = <h1>Hello, world!</h1>;
```

Хөгжилтэй нь энэ таг синтакс нь тэмдэгч болон HTML биш юм.

Үүнийг JSX гэж нэрлэдэг бөгөөд Жаваскриптийн синтакс өргөтгөл юм. Бид үүнийг React дээр дэлгэцийн загвар тодорхойлохдоо ашиглахийг зөвлөж байна. JSX нь танд загвар(template) хэлийг санагдуулж магадгүй ч энэ Жаваскриптэд байдаг зүйл юм.

JSX нь React "элементүүд" бүтээдэг. Би [дараагийн хэсэгт](/docs/rendering-elements.html) тэдгээрийг хэрхэн DOM руу дүрслэх талаар судална. Доошоо JSX-н үндсэн суурь ухагдахуунуудыг авах болно.

### Яагаад JSX? {#why-jsx}

React нь дүрслэх логикоо хэрхэн эвентүүд удирдагдах, хэрхэн төлвүүд өөрчлөгдөж байгаа, өгөгдөл хэрхэн дүрслэгдэхэд бэлтгэгдэж байгаа гэх мэт бусад дэлгэцийн логиктойгоо цуг байдаг.

*Технологиуд* загвар болон логикоо тусдаа файлд салгадаг React "компонентууд" гэж нэрлэгдэх хоёуланг нь агуулсан нэгж ашиглаж [*хамаарлаа(concern)* салгадаг](https://en.wikipedia.org/wiki/Separation_of_concerns). Бид эргэн компонентуудын талаар [хойшоо бүлэгт](/docs/components-and-props.html) судлана, гэхдээ та загвараа JS дотор бичихтэй санал нийлэхгүй бол [энэ яриа](https://www.youtube.com/watch?v=x7cQ3mrcKaY) таний бодлийг өөрчилж магадгүй юм.

React JSX заавал [ашиглахийг шаарддаггүй](/docs/react-without-jsx.html) ч ихэнх хүмүүс Жаваскрипт код дотор дэлгэцийн загвар байх нь төсөөлөхөд амар болгодог гэж үздэг. Мөн түүнчлэн React хэрэгтэй анхааруулгийн болон алдааны мэдээллүүдийг харуулдаг нь хэрэгтэй.

Сэдвээсээ хазайхаас өмнө эхэлцгээе!

### Илэрхийллийг JSX дотор шигтгэх(embed) {#embedding-expressions-in-jsx}

Доорх жишээнд бид `name` нэртэй хувьсагч зарлан түүнийгээ JSX дотор угалзан хаалтууд хүрээлүүлэн ашигласан байна:

```js{1,2}
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

Та ямар ч зөв [Жаваскрипт илэрхийлэл](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) угалзан хаалтаар хүрээлүүлэн JSX дотор ашиглаж болно. Жишээлбэл `2 + 2`, `user.firstName`, эсвэл `formatName(user)` нь бүр зөв Жаваскрипт илэрхийллүүд юм.

Доорх жишээнд бид `formatName(user)` Жаваскрипт функцийн утгийг `<h1>` элемент рүү шигтгэж өгсөн байна.


```js{12}
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```

**[Try it on CodePen](https://codepen.io/gaearon/pen/PGEjdG?editors=1010)**

Бид кодыг илүү унших байдлыг нь бодон JSX-ээ олон мөр болгон хуваасан. Энэ зайлшгүй хийх ёстой зүйл биш ч хийж байгаа тохиолдолд [автомат цэг таслал нэмэгдэх](https://stackoverflow.com/q/2846283)-ээс сэргийлж дугуй хаалтаар хүрээлүүлэхийг зөвлөж байна.

### JSX бол бас илэрхийлэл юм {#jsx-is-an-expression-too}

Хөрвүүлэлт хийгдсний дараа JSX илэрхийллүүд нь энгийн Жаваскрипт функцийн дуудалтууд болон объектууд болно хөрвөдөг.

Энэ нь `if` нөхцөл болон `for` давталт, хувьсагчуудийн утга олголтууд, функцийн аргументууд хүлээн авах, функцээс утга буцаах үйлдлийг JSX дотор хийж болно гэсэн үг:

```js{3,5}
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### JSX-р аттрибут тодорхойлох нь {#specifying-attributes-with-jsx}

Та аттрибут дээр квот ашиглан тэмдэгт төрлөөр өгөх байх:

```js
const element = <a href="https://www.reactjs.org"> link </a>;
```

Мөн та угалзан хаалтаар Жаваскрипт илэрхийлэл аттрибутад шигтгэж болно:

```js
const element = <img src={user.avatarUrl}></img>;
```

Жаваскрипт илэрхийлэл угалзан хаалт ашиглан аттрибутад шигтгэж өгж байгаа бол квот ашиглахгүй. Та квот (тэмдэгт утгийн хувьд) эсвэл угалзан хаалтын (илэрхийлэлд) аль нэгийг ашиглаж болох ч зэрэг нэг аттрибутад хэрэглэж болохгүй.

>**Анхааруулга:**
>
>JSX нь HTML илүүтэй Жаваскрипттэй төстэй учир React DOM `camelCase` шинж чанарын нэрлэх стандарт HTML аттрибут нэрүүдийн оронд хэрэглэдэг.
>
>Жишээлбэл `class` нь JSX дээр [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className), `tabindex` нь [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex) болдог.

### JSX-д дэд(children) элемент тодорхойлох нь {#specifying-children-with-jsx}

Хэрэв таг хоосон бол яг XML шиг `/>` хаах болно:

```js
const element = <img src={user.avatarUrl} />;
```

JSX тагууд нь дэд элемент агуулж болдог:

```js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### JSX Injection халдлагаас сэргийлдэг {#jsx-prevents-injection-attacks}

JSX дотор хэрэглэгчийн оролтыг шигтгэхэд аюулгүй байдаг:

```js
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

Анхнаасаа React DOM JSX дотор шигтгэгдсэн утгийг дүрслэхийн өмнө [escape хийдэг](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html). Ингэснээр та таны програмд тусгагдаагүй зүйлийг тарилга байдлаар халдах боломжийг хаадаг. Бүх зүйл дэлгэцэнд дүрслэгдэхээсээ өмнө тэмдэгт болон хувирдаг. Энэ нь [XSS (cross-site-scripting)](https://en.wikipedia.org/wiki/Cross-site_scripting) халдлагуудаас сэргийлдэг.

### JSX Объектуудыг төлөөлөх нь {#jsx-represents-objects}

Babel JSX-ыг `React.createElement()` дуудалтууд болгон хөрвүүлдэг.

Доорх хоёр жишээнүүд ижилхэн:

```js
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

`React.createElement()` хэдэн шалгалтууд гүйцэтгэн таньд алдаагүй код бичихэд тусалдаг ч дараах шиг объект үүсгэдэг:

```js
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

Эдгээр объектууд нь "React элементүүд" гэж дуудагддаг. Та үүнийг дэлгэц дээр харахийн хүссэн зүйлийн чинь тайлбар гэж бодож болно. React эдгээр объектуудыг уншаанд DOM шинэчилж байдаг.

Бид [дараагийн бүлэгт](/docs/rendering-elements.html) React элементүүдийг DOM руу хэрхэн дүрслэх талаар судлах болно.

>**Зөвлөмж:**
>
>Бид ["Babel" хэлний тодорхойлолт](https://babeljs.io/docs/editors)-ийг код засварлагчийн сонголт дээрээ ашиглахийг зөвлөдөг ES6 болон JSX код нь хоёулаа зөв тодордог(highlight). Энэ вебсайт [Oceanic Next](https://labs.voronianski.com/oceanic-next-color-scheme/) өнгөний схем хэрэглэдэг зохицолдолгоо сайтай.
