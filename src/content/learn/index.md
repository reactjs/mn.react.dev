---
title: Хурдан Эхлэх
---

<Intro>

React documentation-д тавтай морил! Энэ хуудсанд таны өдөр тутам хэрэглэх React-ийн 80%-ийн ойлголтуудыг танилцуулах болно.

</Intro>

<YouWillLearn>

- Хэрхэн компонент бүтээж нэгтгэх
- Хэрхэн Markup болон styles нэмэх
- Хэрхэн өгөгдөл харуулах
- Хэрхэн нөхцөл болон жагсаалт нэмэх
- Үйл явдалд хэрхэн хариу үйлдэл үзүүлж дэлгэцийг шинэчлэх
- Хэрхэн компонент хооронд өгөгдөл хуваалцах 

</YouWillLearn>

## Creating and nesting components {/*components*/}

React apps are made out of *components*. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

React components are JavaScript functions that return markup:

```js
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```

Now that you've declared `MyButton`, you can nest it into another component:

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

Компонент нэгтгэх, зарлах нь том үсгээр эхлэж байгааг анзаараарай `<MyButton />`. Ингэснээр та үүнийг React component гэж таних боломжтой. React component нь заавал том үсгээр эхлэх ёстой ба HTML tag-ууд нь жижиг үсэг байх ёстой гэдгийг санаарай.

Одоо үр дүнг нь үзье:

<Sandpack>

```js
function MyButton() {
  return (
    <button>
      I'm a button
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

The `export default` keywords specify the main component in the file. If you're not familiar with some piece of JavaScript syntax, [MDN](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) and [javascript.info](https://javascript.info/import-export) have great references.

## Writing markup with JSX {/*writing-markup-with-jsx*/}

Markup syntax нь таны харж байгаачлан *JSX* гэж нэрлэгддэг. Ашиглах эсэх нь таны дур боловч ихэнх React төслүүд тохиромжтой байх үүднээс JSX ашигладаг. Мөн бүх [local хөгжүүлэлтэнд санал болгох хэрэгслүүд](/learn/installation) нь JSX-г дэмждэг юм.

JSX нь HTML-ыг бодвол арай хатуу дүрэмтэй. Жишээ нь `<br />` гэх мэт tag-уудыг хаах ёстой. Мөн компонент нь нэгээс дээш JSX tag буцааж болохгүй. Аль нэг parent-д оруулах хэрэгтэй, жишээ нь `<div>...</div>` эсвэл хоосон `<>...</>` гэх wrapper-т:

```js {3,6}
function NvvrHuudas() {
  return (
    <>
      <h1>Нүүр</h1>
      <p>Сайн байна уу?<br />Хэр байна даа?</p>
    </>
  );
}
```

Хэрэв танд JSX руу хувиргах HTML их байгаа бол, [online converter](https://transform.tools/html-to-jsx) хувиргагчыг ашиглаарай

## Загвар нэмэх нь (styles) {/*adding-styles*/}

React дээр, та CSS class-аа `className` гэж зааж өгөөрэй. Энэ нь HTML дээрхи[`class`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)-тай ижил замаар ажилладаг. Жишээ нь:

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

React нь CSS файлуудыг хэрхэн нэмэхийг заадаггүй. Энгийнээр бол [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) tag-ыг HTML дээрээ зааж өгж болно. Хэрэв тусгай хэрэглүүр эсвэл framework ашиглах бол тухайн заавар, documentation-ээс суулгаж ашиглах зааврыг олоорой.

## Өгөгдөл дүрслэх нь {/*displaying-data*/}

JSX lets you put markup into JavaScript. Curly braces let you "escape back" into JavaScript so that you can embed some variable from your code and display it to the user. For example, this will display `user.name`:

```js {3}
return (
  <h1>
    {user.name}
  </h1>
);
```

You can also "escape into JavaScript" from JSX attributes, but you have to use curly braces *instead of* quotes. For example, `className="avatar"` passes the `"avatar"` string as the CSS class, but `src={user.imageUrl}` reads the JavaScript `user.imageUrl` variable value, and then passes that value as the `src` attribute:

```js {3,4}
return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
```

You can put more complex expressions inside the JSX curly braces too, for example, [string concatenation](https://javascript.info/operators#string-concatenation-with-binary):


<Sandpack>

```js
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
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

Дээрхи жишээнд, `style={{}}` нь онцгой синтакс биш, харин `style={ }` JSX буржгар хаалт доторх ердийн `{}` объект юм. Таны загвар(style) JavaScript хувьсагчдаас хамаарах үед та `style` атрибутыг ашиглаж болно.


## Нөхцөлт дүрслэл {/*conditional-rendering*/}

## Conditional rendering {/*conditional-rendering*/}


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

When you don't need the `else` branch, you can also use a shorter [logical `&&` syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation):

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

Notice how `onClick={handleClick}` has no parentheses at the end! Do not _call_ the event handler function: you only need to *pass it down*. React will call your event handler when the user clicks the button.

## Дэлгэц шинэчлэх нь {/*updating-the-screen*/}

Often, you'll want your component to "remember" some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add *state* to your component.

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

The first time the button is displayed, `count` will be `0` because you passed `0` to `useState()`. When you want to change state, call `setCount()` and pass the new value to it. Clicking this button will increment the counter:

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

React will call your component function again. This time, `count` will be `1`. Then it will be `2`. And so on.

Хэрэв компонентоо 2 удаа дуудвал тус тус өөрийн төлөвтэй байх болно. Аль аль товчыг нь дараад үзээрэй

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

Notice how each button "remembers" its own `count` state and doesn't affect other buttons.

## Hooks ашиглах нь {/*using-hooks*/}

`use`-ээр эхэлсэн функцуудыг ерөнхийд нь *Hooks* гэж нэрлэдэг. Жишээ нь `useState` гэхэд React-ийн бэлдэж суурилуулсан Hook бөгөөд Бусад React-ийн бэлдэж суурилуулсан Hook-уудийг [API лавлагаа.](/reference/react) дотроос олох боломжтой. Та мөн бэлдсэн Hook-уудийг ашиглан нэгтгэж өөрийн гэсэн hook бичих боломжтой.

Hooks нь бусад функцуудээ бодвол арай хязгаарлагдмал байдаг. Та hook дуудахдаа зөвхөн компонентийн дээд хэсэгт дуудах ёстой. Хэрэв та нөхцөл эсвэл давталтанд `useState`-г ашиглахыг хүсвэл шинэ компонент задалж, тэнд байрлуулаарай.

## Компонентууд дунд өгөгдөл хуваалцах нь {/*sharing-data-between-components*/}

In the previous example, each `MyButton` had its own independent `count`, and when each button was clicked, only the `count` for the button clicked changed:

<DiagramGroup>

<Diagram name="sharing_data_child" height={367} width={407} alt="Diagram showing a tree of three components, one parent labeled MyApp and two children labeled MyButton. Both MyButton components contain a count with value zero.">

Эхэндээ ль аль `MyButton`-уудын `count` буюу тоон төлөв `0` байна

</Diagram>

<Diagram name="sharing_data_child_clicked" height={367} width={407} alt="The same diagram as the previous, with the count of the first child MyButton component highlighted indicating a click with the count value incremented to one. The second MyButton component still contains value zero." >

Эхний  `MyButton`-ий тоон төлөв буюу `count`нь `1` болчихлоо

</Diagram>

</DiagramGroup>

Гэсэн хэдий ч танд өгөгдөл хуваалцдаг, үргэлж хамт шинэчлэгддэг компонентууд хэрэг болно

To make both `MyButton` components display the same `count` and update together, you need to move the state from the individual buttons "upwards" to the closest component containing all of them.

Тусдаа орших хоёр `MyButton` компонентийн тоолуурийг ижил болгохын тулд, Тоолуурын функцээ хамгийн эхэнд байрлах буюу үндсэн компонентийн дотор байрлуулах хэрэгтэй.

Доорхи жишээн дээр `MyApp` компонент дотор байрлуулав:

<DiagramGroup>

<Diagram name="sharing_data_parent" height={385} width={410} alt="Diagram showing a tree of three components, one parent labeled MyApp and two children labeled MyButton. MyApp contains a count value of zero which is passed down to both of the MyButton components, which also show value zero." >

Эхэндээ, `MyApp`ийн `count` төлөв нь `0` байх ба хоёр товч аль аль руу нь дамжуулж байна

</Diagram>

<Diagram name="sharing_data_parent_clicked" height={385} width={410} alt="The same diagram as the previous, with the count of the parent MyApp component highlighted indicating a click with the value incremented to one. The flow to both of the children MyButton components is also highlighted, and the count value in each child is set to one indicating the value was passed down." >

Дарах үед, `MyApp`-ийн `count` нь`1` болж хувирч байгаа ба аль аль товчруу нь шинэчлэлтийг дамжуулна.

</Diagram>

</DiagramGroup>

Now when you click either button, the `count` in `MyApp` will change, which will change both of the counts in `MyButton`. Here's how you can express this in code.

Эхлээд, *State ээ*  `MyButton` дотроос авж `MyApp`-руу нүүлгье:

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

Then, *pass the state down* from `MyApp` to each `MyButton`, together with the shared click handler. You can pass information to `MyButton` using the JSX curly braces, just like you previously did with built-in tags like `<img>`:

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

The information you pass down like this is called _props_. Now the `MyApp` component contains the `count` state and the `handleClick` event handler, and *passes both of them down as props* to each of the buttons.


```js {1,3}
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Товчыг {count} удаа дарлаа
    </button>
  );
}
```

When you click the button, the `onClick` handler fires. Each button's `onClick` prop was set to the `handleClick` function inside `MyApp`, so the code inside of it runs. That code calls `setCount(count + 1)`, incrementing the `count` state variable. The new `count` value is passed as a prop to each button, so they all show the new value. This is called "lifting state up". By moving state up, you've shared it between components.

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