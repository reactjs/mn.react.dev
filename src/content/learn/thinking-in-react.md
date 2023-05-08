---
title: React сэтгэлгээ
---

<Intro>

React таны програм болон дизайнаа хэрхэн бүтээх талаарх ойлголтыг өөрчлөх болно. React ашиглан UI-аа бүтээхдээ эхлээд *компонент* гэж нэрлэгддэг жижиг хэсгүүдэд хуваах шаардлагатай. Тэрний дараа компонент бүрд тус бүрийн дотоод стэйтүүдийг тодорхойлж өгнө. Эцэст нь компонентүүдийг холбож дундуур нь өгөгдөл дамжуулах хэрэгтэй. Дараах жишээгээр бид танд React ашиглан хэрхэн "хайлттай бүтээгдэхүүний жагсаалт харуулдаг" програм бичих талаар гүнзгий ойлголт өгөх болно.

</Intro>

## Mockup загвартай эхэлцгээе {/*start-with-the-mockup*/}

Та аль хэдийн JSON API-тай ба мөн mockup загвараа дизайнераасаа авчихсан гэж төсөөлье.

JSON API дараах байдалтай өгөгдөл буцаадаг:

```json
[
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]
```

Mockup дараах байдлаар харагдана:

<img src="/images/docs/s_thinking-in-react_ui.png" width="300" style={{margin: '0 auto'}} />

React дээр UI-аа бүтээхдээ дараах 5 алхамыг дагах хэрэгтэй.

## Алхам 1: UI ыг компонент болгон хуваая {/*step-1-break-the-ui-into-a-component-hierarchy*/}

Эхлээд бүх компонент болон дэд компонентуудыг mockup загварын дагуу зурж тэдгээрийг нэрлэнэ. Хэрвээ та дизайнертайгаа ажиллаж байгаа бол тэд аль хэдийн диэайн зурдаг хэрэгсэл дээрээ нэрлэсэн байж магадгүй. Тэднээс асуугаарай.

Таны юу хийдгээс хамааран өөр, өөр арга замаар хуваасан байж магадгүй юм.

* **Програмчилалын**--Шинээр функц болон объект үүсгэхдээ нэгэн ижил текник ашиглаарай. Нэг санал болгох текник нь [single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle) ба энэ нь компонент бүр нэгээс илүү үйлдэл хийхгүй гэсэн санаа юм. Хэрвээ цаашид томрохоор болвол дэд компонентүүдэд задлах хэрэгтэй. 
* **CSS**--Класс селектор-оо юунд ашиглахааа шийдэх.
* **Дизайн**--Дизайны давхаргуудаа хэрхэн зохион байгуулахаа шийдэх.

Хэрвээ таны JSON маш сайн бүтэцлэгдсэн бол таны UI компонентуудтай шууд холбогдож ажиллаж чадна. Энэ нь UI болон өгөгдлийн загварууд (data model) ижил бүтэцтэй байх хэрэгтэй шалтгаан юм.

Дараах дэлгэцэнд 5 компонент байна:

<FullWidth>

<CodeDiagram flip>

<img src="/images/docs/s_thinking-in-react_ui_outline.png" width="500" style={{margin: '0 auto'}} />

1. `FilterableProductTable` (саарал) бүтэн апп-ыг багтаасан.
2. `SearchBar` (цэнхэр) хэрэглэгчийн оролтын хүлээж авах.
3. `ProductTable` (лаванда) хэрэглэгчийн оролтын дагуу жагсаалтыг шүүж харуулах.
4. `ProductCategoryRow` (ногоон) ангилал бүрийн толгой харуулах.
5. `ProductRow`	(шар) бүтээгдэхүүний мөрийг харуулах.

</CodeDiagram>

</FullWidth>

Хэрвээ `ProductTable` (лаванда)-г харах юм бол, та хүснэгтийн толгой ("Name" ба "Price") нь тусдаа компонент биш байгааг анзаарна. Энэ нь гэхдээ сонголтын асуудал юм. Энэ жишээнд энэ нь `ProductTable` -ын нэг хэсэг юм. Гэхдээ хэрвээ толгой хэсэг цаашид нэмэгдэхээр бол (жишээ нь эрэмбэлэгдэх хэсэг) та тусдаа `ProductTableHeader` гэдэг нэртэй компонент шинээр үүсгэж болох юм.

Одоо mockup дизайн дээрх компонентүүдийг шаталсан бүтцээр харуулцгаая. Компонент доторх компонент нь доорх догол мөрөнд харагдана.

* `FilterableProductTable`
    * `SearchBar`
    * `ProductTable`
        * `ProductCategoryRow`
        * `ProductRow`

## Алхам 2: React дээр статик хувилбараар хийцгээе {/*step-2-build-a-static-version-in-react*/}

Бид компонентын шаталсан бүтцээ гаргаад авсан одоо апп-аа хийж эхэлцгээе. Хамгийн хялбар арга нь ямар нэгэн интерактив үйлдэлгүйгээр өгөгдлийн загвараасаа UI-аа үүсгэх юм... эхлээд статик хувилбарыг үүсгээд дараа нь интерактив үйлдлийг гүйцэтгэх нь илүү хялбар байдаг. Статик хувилбарыг үүсгэх нь илүү их бичихийг шаарддаг бол интерактив үйлдэл нь бага бичиж их бодохыг шаарддаг.

Статик хувилбараа үүсгэхдээ та ахин ашиглагдах боломжтой [компонентүүд](/learn/your-first-component) үүсгэж [пропууд](/learn/passing-props-to-a-component) ашиглан өгөгдлөө дамжуулах хэрэгтэй. Пропууд бол эцэг компонентоос хүү компонент руу өгөгдөл дамжуулах арга юм. (Хэрвээ та [стэйт](/learn/state-a-components-memory)-ийн талаар ойлголттой бол статик хувилбарыг үүсгэхдээ битгий ашиглаарай. Стэйт зөвхөн интерактив үйлдлүүд дээр ашиглагдах ба статик хувилбар хийж байх үед шаардлагагүй юм.)

Та "дээрээс доошоо" буюу `FilterableProductTable` компонентоос эсвэл "доороос дээшээ" буюу `ProductRow`-оос эхлэн хийж болно. Жижгэвтэр жишээн дээр дээрээс доошоо чиглэл илүү тохиромжтой бол том төсөл дээр доороос дээшээ чиглэл илүү тохиромжтой.

<Sandpack>

```jsx App.js
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
```

```css
body {
  padding: 5px
}
label {
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
}
th {
  padding-top: 10px;
}
td {
  padding: 2px;
  padding-right: 40px;
}
```

</Sandpack>

(Хэрвээ энэ код ойлгомжгүй бол эхлээд [Хурдан эхлэх](/learn/) хэсэг рүү очно уу!)

Компонентуудаа үүсгэсэний дараа та ахин ашиглагдах компонентуудтай болсон байх болно. Яагаад гэвэл энэ статик хувилбарын компонентууд зөвхөн JSX буцаана. Шаталсан бүтцийн дээр байгаа (`FilterableProductTable`) компонент пропууд-аараа өгөгдлийн загвар хүлээн авна. Үүнийг нэг чиглэлт өгөгдлийн урсгал гэж нэрлэдэг ба өгөгдөл зөвхөн дээрээс доошоо дамжина.

<Pitfall>

Та энэ удаад стэйт ашиглах хэрэггүй юм.

</Pitfall>

## Алхам 3: UI төлвийг минимал (гэхдээ бүрэн) мэдэх нь {/*step-3-find-the-minimal-but-complete-representation-of-ui-state*/}

Та UI интерактив болгохын тулд хэрэглэгчиддээ өгөгдлийн загварыг өөрчлөх боломжийг олгох хэрэгтэй. Энэ зорилгод та *стэйт* ашиглана.

Стэйтийг хэрэглэхдээ хамгийн чухал зарчим бол [DRY (Don't Repeat Yourself)](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) дагах хэрэгтэй юм. Аль болох бага өгөгдөл стэйт-д хадгалах хэрэгтэй гэсэн үг. Жишээ нь та барааны сагс хөгжүүлж байна гэж үзвэл барааны жагсаалтыг стэйт-д хадгална. Хэрвээ барааны тоог харуулахыг хүсвэл барааны тоог өөр стэйд-д хадгалах хэрэггүй юм. Оронд нь барааны жагсаалтын уртыг харуулахад л хангалттай.

Одоо энэ жишээ програм-д байгаа бүх өгөгдлийн талаар бодоцгооё:

1. Бүтээгдэхүүний оригнал жагсаалт
2. Хэрэглэгчийн оруулсан хайлтын текст
3. Checkbox-ын утга
4. Шүүгдсэн барааны жагсаалт

Эдгээрийн аль нь стэйт вэ? Аль нь биш вэ гэдгийг тодорхойлцгооё:

* Энэ нь **өөрчлөгдөхгүй үлдэх үү**? Хэрэв тийм бол энэ стэйт биш.
* Аль нь **эцгээс** пропууд-аар дамжин ирэх вэ? Хэрэв тийм бол энэ стэйт биш.
* Тухайн компонентын стэйт болон пропууд-ын тусламжтайгаар **тооцоолох боломжтой юу**? Хэрэв тийм бол энэ *огтхон ч* стэйт биш!

Тэгвэл яг аль нь стэйт вэ?

Тэдгээрээр ахин нэг удаа явцгаая:

1. Бүтээгдэхүүний оригнал жагсаалт бол **пропууд-аар дамжин ирсэн тиймээс энэ стэйт биш юм.** 
2. Хайлтын текст стэйт байж болно яагаад гэвэл энэ нь ирээдүйд өөрчлөгдөх боломжтой ба стэйт болон пропууд-аар тооцоологдох боломжгүй.
3. Checkbox-ийн утга стэйт байж болно яагаад гэвэл энэ нь ирээдүйд өөрчлөгдөх боломжтой ба стэйт болон пропууд-аар тооцоологдох боломжгүй.
4. Шүүгдсэн бүтээгдэхүүний жагсаалт **стэйт биш яагаад гэвэл** энэ нь оригнал бүтээгдэхүүнийн жагсаалт, хайлтын текст болон checkbox-ийн утгуудаар **тооцоологдох боломжтой**.

Иймээс хайлтын текст болон checkbox-ийн утгууд л зөвхөн стэйт юм.

<DeepDive>

#### Пропууд vs Стэйт {/*props-vs-state*/}

React-д загвар өгөгдлийн хоёр төрөл бий: пропууд болон стэйт. Тэд маш их ялгаатай.

* [**Пропууд** нь функц руу дамжих аргумент-тэй төстэй юм](/learn/passing-props-to-a-component). Тэд эцэг компонентоос хүү компонент руу өгөгдөл дамжуулах ба түүний харагдацыг өөрчлөх боломжийг олгодог. Жишээ нь `Form` `color` проп-ыг `Button` руу дамжуулна.
* [**Стэйт** нь компонентын санах ой шиг.](/learn/state-a-components-memory) Энэ нь зарим мэдээллийг төлвийг хадгалах болон интеракшиан хийх үед боломжийг олгодог. Жишээ нь `Button` компонентын `isHovered` стэйт нь програмын төлвийг хадгалж байдаг.

Пропс-ууд болон стэйтүүд хоорондоо өөр гэхдээ хамтдаа хоршиж ажилладаг. Эцэг компонент ихэвчлэн стэйтдээ мэдээлэл хадгалдаг (мөн өөрчилж чадна) ба түүнийг хүү компонент руугаа пропууд-аараа дамжуулдаг. Хэрвээ эхлээд уншихад энэ нь тийм ч тодорхой биш байвал зүгээр юм. Энийг ойлгоход бага зэрэг хугацаа хэрэгтэй.

</DeepDive>

## Алхам 4: Стэйт хаана байх хэрэгтэйг тодорхойл {/*step-4-identify-where-your-state-should-live*/}
Мининал стэйтийг тодорхойлсоныхоо дараа аль компонент аль стэйтийг өөрчлөх хэрэгтэйг тодорхойлох хэрэгтэй. Санамж: React нэг чиглэлт өгөгдлийн урсгалыг (one-way data flow) хэрэгжүүлдэг ба өгөгдлийг дээрээс доошоо буюу эцгээс хүү рүү дамжуулдаг. Энэ нь магадгүй аль компонент аль стэйтийг эзэмших нь эхэндээ тодорхой биш байж магадгүй. Хэрэв та энэ ойлголттой дөнгөж танилцаж байвал эхэндээ ярвигтай байх ч дараах алхмуудыг дагаж хийснээр бүх зүйл илүү тодорхой болно.

Аппликэйшн доторх стэйтийн хэсэг тус бүрт:

1. Тухайн стэйт хамаарах компонент *бүрийг* тодорхойл.
2. Тэдгээрийн хамгийн ойрын нийтлэг эцэг компонентыг ол.
3. Стэйт хаана байхыг шийд:
    1. Ихэвчлэн тэдгээрийн нийтлэг эцэг компонент дээр стэйтийг нэмдэг.
    2. Та тэдгээр эцэг компонентуудын дээгүүрх зарим компонент-д нэмж болно.
    3. Хэрвээ та стэйтээ хаана тавихаа мэдэхгүй бол стэйтийг удирдах шинэ компонентыг үүсгээд нийтлэг эцэг компонентын дээр хаа нэгтээ нэмнэ. 

Өмнөх алхамд та энэ аппликэйшнд хэрэгтэй хоёр стэйтийг олсон: хайлтын текст болон checkbox-ын утга. Энэ жишээнд тэд үргэлж хамтдаа харагдах болохоор нэг газар байсан нь зөв юм.

Одоо стратегиа хэрэгжүүлцгээе:

1. **Стэйтийг хэрэглэх компонентуудаа тодорхойл:**
    * `ProductTable` бүтээгдэхүүний жагсаалтыг стэйтээр (хайлтын текст болон checkbox утга) шүүх.
    * `SearchBar` стэйтийг харуулах хэрэгтэй (хайлтын текст болон checkbox утга).
2. **Тэдгээрийн нийтлэг эцгийг ол:** Эхний нийтлэг эцэг компонент `FilterableProductTable`.
3. **Стэйт хаана байхыг шийд**: Бид дараах компонент-д `FilterableProductTable` стэйтүүдийг байрлуулна.

`FilterableProductTable` компонент-д стэйт байрлана гэсэн үг. 

[`useState()` хүүк](/reference/react/useState)-ээр стэйтийг зарлана. Хүүк бол React-тай холбогдох боломж олгодог онцгой төрлийн функц юм. Хоёр стэйтийг `FilterableProductTable` компонент дээр нэмж өгөх ба тэдгээрт анхдагч утга өгнө:

```js
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);  
```

Тэгээд, `filterText` болон `inStockOnly` пропуудыг `ProductTable` ба `SearchBar` компонентууд руу дамжуулна:

```js
<div>
  <SearchBar 
    filterText={filterText} 
    inStockOnly={inStockOnly} />
  <ProductTable 
    products={products}
    filterText={filterText}
    inStockOnly={inStockOnly} />
</div>
```

Та одоо аппликэйшн хэрхэн ажиллахыг харж болно. `filterText`-ийн анхдагч утгыг доорх сэндбокс дотор `useState('')`-аас `useState('fruit')`-руу болгож өөрчил.

<Sandpack>

```jsx App.js
import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} />
      <ProductTable 
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({ filterText, inStockOnly }) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} 
        placeholder="Search..."/>
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
```

```css
body {
  padding: 5px
}
label {
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
}
th {
  padding-top: 5px;
}
td {
  padding: 2px;
}
```

</Sandpack>

Бидний өөрчлөлт одоохондоо хараахан ажиллахгүй. Сэндбокс дотор дараах консол алдаа гарах болно.

<ConsoleBlock level="error">

You provided a \`value\` prop to a form field without an \`onChange\` handler. This will render a read-only field.

</ConsoleBlock>

Дээрх сэндбок дотор `ProductTable` ба `SearchBar` компонентууд `filterText` ба `inStockOnly` пропуудыг уншиж байна. Жишээ нь энд `SearchBar` оролтын утгыг хэрхэн хүлээж авч байгааг харж болно:

```js {1,6}
function SearchBar({ filterText, inStockOnly }) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} 
        placeholder="Search..."/>
```

Гэхдээ та бичих гэх мэт хэрэглэгчийн үйлдэлд хариу өгөх кодыг хараахан нэмээгүй байна. Энэ нь эцсийн шат байх болно.

## Алхам 5: Урвуу өгөгдлийн урсгал нэмэх {/*step-5-add-inverse-data-flow*/}

Одоогоор аппликэйшн шаталсан бүтцийн дагуу дээрээс доошоо пропууд болон стэйтийг зөв дамжуулж байгаа. Гэхдээ хэрэглэгчийн оролтын дагуу стэйтийг өөрчлөхийн тулд өөр аргаар өгөгдлийн урсгалыг явуулах хэрэгтэй: шаталсан бүтцийн хамгийн гүнд байгаа компонентууд `FilterableProductTable`-ийн стэйтүүдийг өөрчлөх хэрэгтэй.

React өгөгдлийн урсгалын тодорхой болгосон гэхдээ энэ нь хоёр чиглэлтэй өгөгдлийн урсгалаас (two-way data binding) арай илүү их бичиглэлийг шаарддаг. Хэрвээ та доорх жишээнд бичих эсвэл check-лэх гэж оролдох юм бол ажиллахгүй.

Энэ нь учиртай. Энэнээс харахад `<input value={filterText} />`, `FilterableProductTable`-ээс ирж буй стэйтийн утга `input`-ийн `filterText`-тэй үргэлж тэнцүү байна. Тийм учраас `filterText` стэйт хэзээ ч өөрчлөгдөхгүй.

Та хэрэглэгч өөрчлөлт хийх үед үүнийг шууд харахыг хүсч байгаа. Стэйт эдгээрийг өөрчлөх юм. `FilterableProductTable` стэйтийг эзэмшдэг ба энэ компонент зөвхөн `setFilterText` ба `setInStockOnly` нарыг дуудаж чадна. `SearchBar`-ийг `FilterableProductTable`-ийн стэйтийг өөрчлөх боломж олгохын тулд `SearchBar`-луу эдгээр функцуудыг дамжуулах хэрэгтэй:

```js {2,3,10,11}
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
```

`SearchBar` дотор `onChange`-д эцгээс дамжиж ирсэн функцыг оноож өгнө:


```js {5}
<input 
  type="text" 
  value={filterText} 
  placeholder="Search..." 
  onChange={(e) => onFilterTextChange(e.target.value)} />
```

Одоо аппликэйшн бүрэн ажиллаж байна!

<Sandpack>

```jsx App.js
import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
```

```css
body {
  padding: 5px
}
label {
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
}
th {
  padding: 4px;
}
td {
  padding: 2px;
}
```

</Sandpack>

Та эвентийг хэрхэн барьсан болон стэйтийг хэрхэн өөрчлөх талаар [интерактивийг нэмэх](/learn/adding-interactivity) хэсгээс илүү ихийг мэдэж авч болно.

## Одоо эндээс хаашаа явах вэ {/*where-to-go-from-here*/}

Танд React-аар хэрхэн сэтгэх талаар багахан мэдээлэлийг өглөө. Хүсвэл та одоо [react төсөл эхлүүлэх](/learn/installation) эсвэл энэ жишээн дээр ашигласан [бүх синтаксыг гүнзгий сурч](/learn/describing-the-ui) болно.
