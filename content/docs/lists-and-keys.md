---
id: lists-and-keys
title: Жагсаалт ба түлхүүрүүд
permalink: docs/lists-and-keys.html
prev: conditional-rendering.html
next: forms.html
---

Эхлээд Жаваскриптэд хэрхэн жагсаалтыг хувиргадаг талаар эргэн саная.

Доорх өгөгдсөн кодод бид [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) функц ашиглах `тоон` жагсаалтын утгыг хоёр дахин нэмэгдүүлж байна.
Бид шинэ жагсаалтад `map()` функцээс буцсан `хоёр дахин нэмэгдүүлсэн` оноон мөн лог бичилт хийлээ:

```javascript{2}
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
```

Энэ код `[2, 4, 6, 8, 10]` утгын консоль руу лог хийлээ.

React дээр жагсаалтыг [элементүүд](/docs/rendering-element.html)-ийн жагсаалт болгон хөрвүүлэх нь их төстэй байдаг.

### Олон компонентүүдийг дүрслэх {#rendering-multiple-components}

You can build collections of elements and [include them in JSX](/docs/introducing-jsx.html#embedding-expressions-in-jsx) using curly braces `{}`.

Та `{}` угалзан хаалт ашиглан элементүүдийн 

Доор бид Жаваскриптийн [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) функц ашиглан `тоон` жагсаалтаар давтан элэмент бүр дээр `<li>` буцаасан.
Эцэст нь `listItems`-д утгуудаа оноосон байна:

```javascript{2-4}
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
```

<<<<<<< HEAD
Бид `listItems`-аа `<ul>` элэмент дотор багтаан [DOM руу дүрсэлсэн](/docs/rendering-elements.html#rendering-an-element-into-the-dom):
=======
Then, we can include the entire `listItems` array inside a `<ul>` element:
>>>>>>> 4808a469fa782cead9802619b0341b27b342e2d3

```javascript{2}
<ul>{listItems}</ul>
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/GjPyQr?editors=0011)

Энэ код 1-ээс 5 хүртэлх тоон утгыг суман жагсаалтаар(bullet list) дүрсэлдэг.

### Энгийн жагсаалт компонент {#basic-list-component}

Usually you would render lists inside a [component](/docs/components-and-props.html).
Ихэвчлэн та жагсаалтыг [компонент](/docs/components-and-props.html) дотор дүрсэлдэг.

Бид өмнөх жишээг `тоонуудын` жагсаалт хүлээн авж, элэментүүдийн жагсаалт болгон гаргадаг компонент болгон сайжруулж чадна.

```javascript{3-5,7,13}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers} />);
```

Чи энэ кодыг ажиллуулах үед түлхүүр жагсаалтын хэсэгт олгохийг зөвлөсөн анхааруулга харна. "Түлхүүр" бол тусгай тэмдэгт төрөлтэй шинж чанар бөгөөд чи үүнийг элэментүүдийн жагсаалт үүсгэж үедээ ашиглах хэрэгтэй. Энэ нь яагаад чухал болох талаар дараагийн хэсэгт ярилцах болно.

`Түлхүүр`-г `numbers.map()` дотор оноогоод түлхүүр байхгүй байгаа анхааруулгыг засцгаая.

```javascript{4}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/jrXYRR?editors=0011)

##  Түлхүүрүүд {#keys}

Түлхүүрүүд нь React-д ямар хэсэг өөрчлөгдсөн, нэмэгдсэн эсвэл устгагдсан талаар танихад тусалдаг. Түлхүүрүүд жагсаалтын дотор байгаа элэментүүдэд өгөгдөх нь найдвартай таних тэмдэг болдог:

```js{3}
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

Тэмдэгт төрөл ашиглан бусад утгуудаас ялгах нь түлхүүр сонгох сайн арга юм. Ихэвчлэн та өөрийн өгөгдлөө ID-г түлхүүр болгон ашиглана:

```js{2}
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

Танд утгаа хангалттай тодорхойлж чадах түлхүүр дүрслэгдсэн утгууд дотор чинь байхгүй бол та жагсаалтын индексийг ашиглах нь сүүлийн сонголт байж болох юм:

```js{2,3}
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

<<<<<<< HEAD
Хэрэв жагсаалтын эрэмбэ өөрчлөгдөх бол бид индексийг түлхүүр болгон ашиглахийг зөвлөдөггүй. Энэ нь ажиллагааны хурд сөргөөр нөлөөлөх болон компонентийн төлөвт асуудал үүсгэж болзошгүй. [Индексийг түлхүүр болгон ашиглахийн сөрөг нөлөөг илүү тайлбарласан](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318) Robin Pokorny-н нийтлэлийг уншиж болно. Хэрэв та жагсаалтын утгууддаа тусгайлан түлхүүр зааж өгөхгүй бол React индексийг анхны төлөв(default)-р түлхүүр болгон ашиглана.
=======
We don't recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state. Check out Robin Pokorny's article for an [in-depth explanation on the negative impacts of using an index as a key](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/). If you choose not to assign an explicit key to list items then React will default to using indexes as keys.
>>>>>>> 4808a469fa782cead9802619b0341b27b342e2d3

Хэрэв та илүү нарын сонирхвол [түлхүүр яагаад чухал талаар илүү гүнзгий тайлбар](/docs/reconciliation.html#recursing-on-children) нийтлэлийг уншина уу.

### Extracting Components with Keys {#extracting-components-with-keys}

Түлхүүрүүд нь жагсаалтын үед л илүү ойлгомжтой.

Жишээлбэл, Хэрэв та `ListItem` компонент [гаргаж авах](/docs/components-and-propts.html#extracting-components) бол түлхүүрийг `ListItem />` элэмэнтүүд дээр хэрэглэх нь `ListItem`-н `<li>` элементэд хэрэглэх нь илүү тохиромжтой.

**Жишээ: Түлхүүрийн буруу ашиглалт**

```javascript{4,5,14,15}
function ListItem(props) {
  const value = props.value;
  return (
    // Буруу! Энд түлхүүр тодорхойлох шаардлагагүй:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Буруу! Түлхүүр энд тодорхойлох ёстой:
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

**Жишээ: Түлхүүрийн зөв ашиглалт**

```javascript{2,3,9,10}
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/ZXeOGM?editors=0010)

A good rule of thumb is that elements inside the `map()` call need keys.
`map()` дуудалт доторх элэментүүдэд түлхүүр хэрэглэх нь хэрэгжүүлж болох зөвлөмж юм.

###  Түлхүүрүүд зөвхөн харалдаа утгууддаа л дахин давтагдашгүй байх ёстой {#keys-must-only-be-unique-among-siblings}

Жагсаалтад ашиглагдаж байгаа түлхүүрүүд нь жагсаалт доторх утгуудаасаа л ялгагдахад болно. Тэдгээр нь нэгдсэн хүрээнд дахин давтагдашгүй байх албагүй бөгөөд бид хоёр өөр жагсаалтад адилхан түлхүүрүүд ашиглаж болно:

```js{2,5,11,12,19,21}
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Blog posts={posts} />);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/NRZYGN?editors=0010)

Түлхүүрүүд нь React-д туслах үүрэг гүйцэтгэдэг бөгөөд таны компонент-руу илгээгдэхгүй. Хэрэв танд түлхүүртэй ижил компонент дотор чинь хэрэгтэй бол өөр нэрээр шинж чанар(prop) тусгайлан илгээх хэрэгтэй:

```js{3,4}
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
```

Дээрх жишээнд `Post` компонент нь `props.id`-г уншиж чадах боловч `props.key`-г уншиж чадахгүй.

### Embedding map() in JSX {#embedding-map-in-jsx}

Өмнөх жишээнүүдэд `listItems` хувьсагчийг тусад нь зарлаж JSX дотор ашигласан:


```js{3-6}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

JSX угалзан хаалт ашиглан [ямар ч илэрхийлэл залгах](/docs/introducing-jsx.html#embedding-expressions-in-jsx)-ийг зөвшөөрдөг учир `map()`-г үр дүн дотор нь ашиглаж болно:

```js{5-8}
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/BLvYrB?editors=0010)

Заримдаа энэ нь илүү цэвэрхэн код бичих боломжийг олгодог ч энэ хэвшил нь ойлгомжгүй болгож болзошгүй. Жаваскрипттэй адилаар кодыг уншихад амархан байлгах үүднээс хувьсагчийг гаргаж авах нь таны шийдвэр юм. Гэхдээ `map()`-н доторх код чинь хэтэрхий олон дамжсан(nested) бол [компонент гаргаж авах](/docs/components-and-props.html#extracting-components) нь илүү дээр байж магадгүй.
