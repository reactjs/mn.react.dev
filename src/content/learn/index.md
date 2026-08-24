---
title: Хурдан Эхлэх
---

<Intro>

React-ийн баримт бичигт тавтай морил! Энэ хуудсаар та өдөр тутам ашиглах React-ийн ойлголтуудын 80%-тай танилцана.

</Intro>

<YouWillLearn>

- Хэрхэн компонент үүсгэж, нэгтгэх
- Хэрхэн markup болон загвар нэмэх
- Хэрхэн өгөгдөл харуулах
- Хэрхэн нөхцөл болон жагсаалт нэмэх
- Үйл явдалд хэрхэн хариу үйлдэл үзүүлж дэлгэцийг шинэчлэх
- Хэрхэн компонент хооронд өгөгдөл хуваалцах

</YouWillLearn>

## Хэрхэн компонент үүсгэж, нэгтгэх вэ {/*components*/}

React аппууд нь *компонент*-уудаас буюу бүтэц хэсгүүдээс бүтдэг. Компонент гэдэг нь өөрийн гэсэн логик, харагдах байдалтай UI (user interface) хэсэг юм. Компонент нь жижигхэн товч эсвэл бүтэн хуудас ч байж болдог.

React component нь markup буцаадаг JavaScript функц юм:

```js
function MyButton() {
  return (
    <button>Товч</button>
  );
}
```

Ингэснээр та `MyButton` нэртэй товч компонентоо зарлалаа. Одоо үүнийг өөр компонент дотор ашиглая:

```js {5}
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

`<MyButton />` том үсгээр эхэлж байгааг анзаараарай. Ингэснээр React үүнийг компонент гэж танина. React компонентийн нэр заавал том үсгээр, харин HTML tag жижиг үсгээр эхлэх ёстойг санаарай.

Одоо үр дүнг нь үзье:

<Sandpack>

```js
function MyButton() {
  return (
    <button>
      Товч
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>React апп-д тавтай морил</h1>
      <MyButton />
    </div>
  );
}
```

</Sandpack>

`export default` нь файлын үндсэн компонентийг зааж өгдөг. Хэрэв JavaScript-ийн энэ syntax-ийн талаар сайн мэдэхгүй бол [MDN](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) болон [javascript.info](https://javascript.info/import-export) сайтаас дэлгэрүүлэн уншаарай.

## JSX ашиглан markup бичих нь {/*writing-markup-with-jsx*/}

Markup syntax нь таны харж байгаачлан *JSX* гэж нэрлэгддэг. Ашиглах эсэх нь таны дур боловч ихэнх React төслүүд тохиромжтой байх үүднээс JSX ашигладаг. Мөн бүх [local хөгжүүлэлтэд санал болгох хэрэгслүүд](/learn/installation) нь JSX-г дэмждэг юм.

JSX нь HTML-ыг бодвол арай хатуу дүрэмтэй. Жишээ нь `<br />` гэх мэт tag-уудыг хаах ёстой. Мөн компонент нь нэгээс дээш JSX tag буцааж болохгүй. Аль нэг parent-д оруулах хэрэгтэй, жишээ нь `<div>...</div>` эсвэл хоосон `<>...</>` wrapper-т:

```js {3,6}
function AboutPage() {
  return (
    <>
      <h1>Нүүр</h1>
      <p>Сайн байна уу?<br />Хэр байна даа?</p>
    </>
  );
}
```

Хэрэв танд JSX руу хувиргах HTML их байгаа бол [online converter](https://transform.tools/html-to-jsx) хувиргагчийг ашиглаарай.

## Загвар нэмэх нь (styles) {/*adding-styles*/}

React дээр CSS class-аа `className` гэж зааж өгнө. Энэ нь HTML-ийн [`class`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)-тай ижил зарчмаар ажилладаг. Жишээ нь:

```js
<img className="avatar" />
```

Дараа нь CSS файлдаа CSS дүрмээ бичнэ.

```css
/* CSS */
.avatar {
  border-radius: 50%;
}
```

React нь CSS файлуудыг хэрхэн нэмэхийг заадаггүй. Энгийнээр бол [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) tag-ыг HTML дээрээ зааж өгч болно. Хэрэв тусгай хэрэглүүр эсвэл framework ашиглах бол тухайн заавар, documentation-ээс суулгаж ашиглах зааврыг олоорой.

## Өгөгдөл дүрслэх нь {/*displaying-data*/}

JSX нь JavaScript дотор markup бичих боломж олгодог. Угалзан хаалт ашиглан JavaScript руу шилжиж, кодын хувьсагчийг оруулан хэрэглэгчид харуулж болно. Жишээлбэл, доорх код `user.name`-ийг дүрсэлнэ:

```js {3}
return (
  <h1>
    {user.name}
  </h1>
);
```

Та мөн JSX атрибутаас "JavaScript руу шилжиж" болно. Үүний тулд хашилтын оронд угалзан хаалт ашиглана. Жишээлбэл, `className="avatar"` нь `"avatar"` мөрийг CSS class болгон дамжуулдаг бол `src={user.imageUrl}` нь JavaScript-ийн `user.imageUrl` хувьсагчийн утгыг уншиж, `src` атрибут болгон дамжуулдаг:

```js {3,4}
return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
```

Та JSX-ийн угалзан хаалтад үүнээс ч илүү төвөгтэй илэрхийлэл оруулж болно. Жишээлбэл, [string concatenation](https://javascript.info/operators#string-concatenation-with-binary):


<Sandpack>

```js
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
```

```css
.avatar {
  border-radius: 50%;
}

.large {
  border: 4px solid gold;
}
```

</Sandpack>

Дээрх жишээн дэх `style={{}}` нь онцгой syntax биш, харин `style={ }` JSX угалзан хаалт доторх ердийн `{}` объект юм. Таны загвар (style) JavaScript хувьсагчдаас хамаарах үед `style` атрибутыг ашиглаж болно.


## Нөхцөлт дүрслэл {/*conditional-rendering*/}

React дээр нөхцөл бичих тусгай синтакс байдаггүй. Та ердийн JavaScript код бичихдээ ашигладаг арга барилаа ашиглаж болно. Жишээлбэл, JSX-г нөхцөлтэйгээр оруулахын тулд [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement-ийг ашиглаж болно:


```js
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
```

Хэрэв та илүү авсаархан кодыг илүүд үзвэл [conditional `?` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)  ашиглаж болно.`if`-ээс ялгаатай нь JSX дотроо нөхцөл тавьж болдог:


```js
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```

Танд `else` сонголт хэрэггүй бол та цомхон [logical `&&` syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/) ашиглаж болно:

```js
<div>
  {isLoggedIn && <AdminPanel />}
</div>
```

Эдгээр бүх аргууд нь мөн нөхцөлт атрибутуудыг тодорхойлоход ажилладаг. Хэрэв дээр дурьдсан JavaScript-н зарим синтаксийг ойлгомжгүй байгаа бол зөвхөн `if...else`-г дагнаж ашиглаж болно.

## Жагсаалт дүрслэх нь {/*rendering-lists*/}

Та компонентуудын жагсаалт гаргахад[`for` давталт](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) болон [array `map()` функц](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) зэрэг JavaScript функцуудад найдаж болно.

Жишээлбэл, танд олон төрлийн бүтээгдэхүүн байна гэж бодъё:


```js
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
```

Компонент дотроо `map()` функцийг ашиглан бүтээгдэхүүний жагсаалтыг `<li>` жагсаалт болгон хувиргаарай:

```js
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```

`<li>` хэрхэн `key` аттрибут агуулж буйг анхаарна уу. Жагсаалтын нэгж бүрийн хувьд та тухайн нэгжийг жагсаалт дундаас нь онцгойлон таних тэмдэгт мөр эсвэл тоог дамжуулах ёстой. Ихэвчлэн өгөгдлийн сангийн ID гэх мэт таны өгөгдлөөс `key` ирдэг байх ёстой. Ингэснээр React таны `key`-үүдийг өгөгдөл оруулах, устгах эсвэл дахин эрэмбэлэх тохиолдолд юу болсныг мэдэхийн тулд ашиглах боломжтой болно.

<Sandpack>

```js
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```

</Sandpack>

## Event-д хариу үйлдэл үзүүлэх {/*responding-to-events*/}

Та компонент дотроо *event handler* функц зарлаж өгснөөр Event-д хариу үйлдэл өгөх боломжтой:

```js {2-4,7}
function MyButton() {
  function handleClick() {
    alert('Дарчихлаа!');
  }

  return (
    <button onClick={handleClick}>
      Над дээр дар
    </button>
  );
}
```

`onClick={handleClick}`-ийн төгсгөлд хаалт байхгүй байгааг анзаараарай! Event зохицуулагч функцийг дуудах шаардлагагүй: та зүгээр л *үүнийг дамжуулахад* болно. Хэрэглэгч товч дээр дарахад React өөрөө Event зохицуулагчийг дуудна.

## Дэлгэц шинэчлэх нь {/*updating-the-screen*/}

Зарим тохиолдолд та өөрийн зарим мэдээллийг "санаж", харуулах компонент үүсгэхийг хүсэж магадгүй. Жишээлбэл, та товчыг хэдэн удаа дарж байгааг тоолмоор байж болно. Үүнийг хийхийн тулд өөрийн компонентэд *төлөв* буюу *state* нэмнэ.

Эхлээд React-аас [`useState`](/reference/react/useState) импортлох хэрэгтэй:

```js
import { useState } from 'react';
```

Одоо та компонент дотроо *state variable* зарлаж болно:

```js
function MyButton() {
  const [count, setCount] = useState(0);
  // ...
```

Та `useState`-ээс хоёр зүйлийг авах болно: одоогийн төлөв (`count`) болон үүнийг шинэчлэх боломжийг олгодог функц (`setCount`). Та тэдэнд ямар ч нэр өгч болно, гэхдээ дүрэм нь `[yamarnegzvil, setYamarnegzvil]` гэж бичих юм.

Товч анх үзэгдэх үед `count` нь `0` байх болно, учир нь та `useState()` руу `0`-г дамжуулсан. Төлөвийг өөрчлөхийг хүсвэл `setCount()`-ыг дуудаж түүнд шинэ утгыг дамжуулаарай. Товчийг дарснаар тоолуур нэмэгдэнэ:

```js {5}
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Товчыг {count} удаа дарлаа
    </button>
  );
}
```

React таны компонентийн функцийг дахин дуудна. Товчин дээр дарах үед тоо нь `1` болно, дараа нь `2` болно гэх мэт.

Хэрэв компонентоо 2 удаа дуудвал тус тус өөрийн төлөвтэй байх болно. Аль аль товчыг нь дараад үзээрэй.

<Sandpack>

```js
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Тусдаа шинэчлэгддэг тоолуур</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Товчыг {count} удаа дарлаа
    </button>
  );
}
```

```css
button {
  display: block;
  margin-bottom: 5px;
}
```

</Sandpack>


Товч тус бүр өөрийн `тоолох` төлөвийг хэрхэн "санаж", нөгөө тоолууртаа нөлөөлөхгүй байгааг анзаараарай.

## Hooks ашиглах нь {/*using-hooks*/}

`use`-ээр эхэлсэн функцуудыг ерөнхийд нь *Hooks* гэж нэрлэдэг. Жишээ нь `useState` гэхэд React-ийн бэлдэж суурилуулсан Hook бөгөөд бусад React-ийн бэлдэж суурилуулсан Hook-уудыг [API лавлагаа](/reference/react) дотроос олох боломжтой. Та мөн бэлдсэн Hook-уудыг ашиглан нэгтгэж өөрийн гэсэн hook бичих боломжтой.

Hooks нь бусад функцуудээ бодвол арай хязгаарлагдмал байдаг. Та hook дуудахдаа зөвхөн компонентийн дээд хэсэгт дуудах ёстой. Хэрэв та нөхцөл эсвэл давталтанд `useState`-г ашиглахыг хүсвэл шинэ компонент задалж, тэнд байрлуулаарай.

## Компонентууд дунд өгөгдөл хуваалцах нь {/*sharing-data-between-components*/}

Өмнөх жишээн дээр `MyButton` тус бүр өөрийн гэсэн бие даасан `count`-тай байсан бөгөөд товч дарахад зөвхөн дарсан товчны `count` буюу тоолуур нь өөрчлөгдөж байсан:

<DiagramGroup>

<Diagram name="sharing_data_child" height={367} width={407} alt="Diagram showing a tree of three components, one parent labeled MyApp and two children labeled MyButton. Both MyButton components contain a count with value zero.">

Эхэндээ ль аль `MyButton`-уудын `count` буюу тоон төлөв `0` байна

</Diagram>

<Diagram name="sharing_data_child_clicked" height={367} width={407} alt="The same diagram as the previous, with the count of the first child MyButton component highlighted indicating a click with the count value incremented to one. The second MyButton component still contains value zero." >

Эхний  `MyButton`-ий тоон төлөв буюу `count`нь `1` болчихлоо

</Diagram>

</DiagramGroup>

Гэсэн хэдий ч танд өгөгдөл хуваалцдаг, үргэлж хамт шинэчлэгддэг компонентууд хэрэг болно

Хоёр `MyButton` компонентод ижил `count` харуулж, хамтад нь шинэчлэхийн тулд тус тусын товч доторх төлөвийг тэдгээрийг агуулдаг хамгийн ойрын компонент руу дээш шилжүүлэх хэрэгтэй.

Доорхи жишээн дээр `MyApp` компонент дотор байрлуулав:

<DiagramGroup>

<Diagram name="sharing_data_parent" height={385} width={410} alt="Diagram showing a tree of three components, one parent labeled MyApp and two children labeled MyButton. MyApp contains a count value of zero which is passed down to both of the MyButton components, which also show value zero." >

Эхэндээ, `MyApp`ийн `count` төлөв нь `0` байх ба хоёр товч аль аль руу нь дамжуулж байна

</Diagram>

<Diagram name="sharing_data_parent_clicked" height={385} width={410} alt="The same diagram as the previous, with the count of the parent MyApp component highlighted indicating a click with the value incremented to one. The flow to both of the children MyButton components is also highlighted, and the count value in each child is set to one indicating the value was passed down." >

Дарах үед, `MyApp`-ийн `count` нь`1` болж хувирч байгаа ба аль аль товчруу нь шинэчлэлтийг дамжуулна.

</Diagram>

</DiagramGroup>

Одоо та аль нэг товч дээр дарахад `MyApp` доторх `count` төлөв өөрчлөгдөх бөгөөд энэ нь `MyButton`-ий тоонуудыг хоёуланг нь өөрчлөх болно. Үүнийг кодоор хэрхэн илэрхийлж болохыг доорхи жишээнээс үзнэ үү.

Эхлээд *state*-ийг `MyButton` дотроос `MyApp` руу шилжүүлье:

```js {2-6,18}
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Тусдаа шинэчлэгддэг тоолуур</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  // ... state маань эндээс нүүж байгаа шүү :D ...
}

```

Дараа нь, `MyApp`-аас `MyButton`-руу ижил төлөв болон click handler дамжуулна. Та `<img>` гэх мэт built-in tag ашигладаг шигээ JSX буржгар хаалт ашиглан `MyButton` руу мэдээлэл дамжуулах боломжтой:


```js {11-12}
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Хамт шинэчлэгддэг тоолуур</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
```

Ингэж дамжуулж буй мэдээллийг _props_ гэж нэрлэдэг. Одоо `MyApp` компонент нь `count` төлөв болон `handleClick` event handler-ийг агуулж байгаа бөгөөд *хоёуланг нь props болгон* товч тус бүрт дамжуулж байна.

Эцэст нь, `MyButton`-г үндсэн компонентээс нь дамжуулах props-ийг *унших* болгож өөрчилье:


```js {1,3}
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Товчыг {count} удаа дарлаа
    </button>
  );
}
```

Товчийг дарахад `onClick` handler ажиллана. Товч бүрийн `onClick` prop-ийг `MyApp` доторх `handleClick` функцээр тохируулсан тул уг функцийн код ажиллана. Тэр код `setCount(count + 1)`-ыг дуудаж, `count` төлөвийн хувьсагчийг нэмэгдүүлнэ. Шинэ `count` утгыг товч бүрт prop болгон дамжуулдаг тул бүгд шинэ утгыг харуулна. Үүнийг "төлөвийг дээш өргөх" (lifting state up) гэж нэрлэдэг. Ингэснээр төлөвийг компонентууд хоорондоо хуваалцана.

<Sandpack>

```js
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Хамт шинэчлэгддэг тоолуур</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Товчыг {count} удаа дарлаа
    </button>
  );
}
```

```css
button {
  display: block;
  margin-bottom: 5px;
}
```

</Sandpack>

## Дараагийн алхам {/*next-steps*/}

Ингээд та React кодын анхан шатны мэдлэгтэй боллоо!

Сурсан мэдлэгээ практик дээр туршин анхны mini-app аа React дээр хийж туршаарай. [Tutorial](/learn/tutorial-tic-tac-toe)
