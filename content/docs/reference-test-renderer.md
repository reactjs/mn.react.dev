---
id: test-renderer
title: Test Renderer
permalink: docs/test-renderer.html
layout: docs
category: Reference
---

**Импорт хийх**

```javascript
import TestRenderer from 'react-test-renderer'; // ES6
const TestRenderer = require('react-test-renderer'); // ES5 with npm
```

## Тойм {#overview}

Уг пакэжэд React компонентыг DOM эсвэл натив мобайл орчноос үл хамааран, цэвэр Javascript объект руу рендэр хийхэд ашиглагдах React Renderer байгаа. 

React DOM эсвэл React Native компонентын рендэр хийсэн платформын харагдацыг дэс дараалалтай яг тухайн үеийнхээр харахад тусална. 

React DOM эсвэл React Native компонентын рендэр хийсэн платформын харагдацыг хөтөч, [jsdom](https://github.com/tmpvar/jsdom) ашиглахгүйгээр,  дэс дарааллаар харахад уг пакэж тусална (DOM салбар модны нэгэн адил)

Жишээ:

```javascript
import TestRenderer from 'react-test-renderer';

function Link(props) {
  return <a href={props.page}>{props.children}</a>;
}

const testRenderer = TestRenderer.create(
  <Link page="https://www.facebook.com/">Facebook</Link>
);

console.log(testRenderer.toJSON());
// { type: 'a',
//   props: { href: 'https://www.facebook.com/' },
//   children: [ 'Facebook' ] }
```

Та Jest-ын snapshot тест хийх функцыг ашиглан автоматаар файлын JSON tree-ын хуулбарыг хадгалах боломжтой ба өөрчлөлт орсон эсэхийг шалгах боломжтой: [Дэлгэрэнгүйг](https://jestjs.io/docs/en/snapshot-testing).

Та мөн үр дүн дотроос нь тодорхой node-ыг олох хайн олж, баталгаажуулах(assertion) боломжтой. 

```javascript
import TestRenderer from 'react-test-renderer';

function MyComponent() {
  return (
    <div>
      <SubComponent foo="bar" />
      <p className="my">Hello</p>
    </div>
  )
}

function SubComponent() {
  return (
    <p className="sub">Sub</p>
  );
}

const testRenderer = TestRenderer.create(<MyComponent />);
const testInstance = testRenderer.root;

expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);
```

### TestRenderer {#testrenderer}

* [`TestRenderer.create()`](#testrenderercreate)
* [`TestRenderer.act()`](#testrendereract)

### TestRenderer instance {#testrenderer-instance}

* [`testRenderer.toJSON()`](#testrenderertojson)
* [`testRenderer.toTree()`](#testrenderertotree)
* [`testRenderer.update()`](#testrendererupdate)
* [`testRenderer.unmount()`](#testrendererunmount)
* [`testRenderer.getInstance()`](#testrenderergetinstance)
* [`testRenderer.root`](#testrendererroot)

### TestInstance {#testinstance}

* [`testInstance.find()`](#testinstancefind)
* [`testInstance.findByType()`](#testinstancefindbytype)
* [`testInstance.findByProps()`](#testinstancefindbyprops)
* [`testInstance.findAll()`](#testinstancefindall)
* [`testInstance.findAllByType()`](#testinstancefindallbytype)
* [`testInstance.findAllByProps()`](#testinstancefindallbyprops)
* [`testInstance.instance`](#testinstanceinstance)
* [`testInstance.type`](#testinstancetype)
* [`testInstance.props`](#testinstanceprops)
* [`testInstance.parent`](#testinstanceparent)
* [`testInstance.children`](#testinstancechildren)

## Reference {#reference}

### `TestRenderer.create()` {#testrenderercreate}

```javascript
TestRenderer.create(element, options);
```

React-ын дамжуулсан элементийг агуулсан `TestRenderer` instance үүсгэнэ. Жинхэнэ DOM ашиглахгүй хэрнээ компонентын салбар модыг санах ойд бүрэн рендэр хийдэг. Тэгэхээр нь та баталгаажуулах боломжтой. [TestRenderer instance](#testrenderer-instance) буцаана.

### `TestRenderer.act()` {#testrendereract}

```javascript
TestRenderer.act(callback);
```

Similar to the [`act()` helper from `react-dom/test-utils`](/docs/test-utils.html#act), `TestRenderer.act` prepares a component for assertions. Use this version of `act()` to wrap calls to `TestRenderer.create` and `testRenderer.update`.

```javascript
import {create, act} from 'react-test-renderer';
import App from './app.js'; // The component being tested

// render the component
let root; 
act(() => {
  root = create(<App value={1}/>)
});

// make assertions on root 
expect(root.toJSON()).toMatchSnapshot();

// update with some different props
act(() => {
  root.update(<App value={2}/>);
})

// make assertions on root 
expect(root.toJSON()).toMatchSnapshot();
```

### `testRenderer.toJSON()` {#testrenderertojson}

```javascript
testRenderer.toJSON()
```
Рендэр хийсэн салбар модын объектыг буцаана. Уг мод нь `<div>`, `<View>` гэх мэт зөвхөн тухайн нэг платформд зориулсан node агуулсан байдаг. Гэхдээ хэрэглэгчийн үүсгэсэн компонент энд байдаггүй. [Snapshot testing](https://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest) хийхэд ашиглахад дөхөм байдаг. 

### `testRenderer.toTree()` {#testrenderertotree}

```javascript
testRenderer.toTree()
```
Рендэр хийсэн салбар модны объектыг буцаана. `toJSON()`-ын үүсгэсэн нэгэнтэй харьцуулахад илүү нарийвчилсан харагдах ба хэрэглэгчийн бичсэн компонент байдаг. Test renderer-ээс гадна та өөрийн сан үүсгэн бичээгүй л бол уг метод танд төдийлөн хэрэг болохгүй болов уу. 

### `testRenderer.update()` {#testrendererupdate}

```javascript
testRenderer.update(element)
```
Шинэ үндсэн элементийг агуулсан санах ой дахь модыг дахин рендэр хийнэ. Ингэснээр React-ын update-ыг бүр үндсээр нь хийгдэх боломж өгнө. Хэрэв шинэ элемент нь ижил төрлийнх байгаад, өмнөх элемент шиг чухал гол элемент мөн бол салбар мод нь шинэчлэгдэнэ. Үгүй бол шинэ салбар модыг дахин mount хийнэ.


### `testRenderer.unmount()` {#testrendererunmount}

```javascript
testRenderer.unmount()
```
Санах ой дахь салбар модыг unmount хийнэ. Энэ нь холбогдох амьдралын мөчлөг эвент эхлүүлнэ. 

### `testRenderer.getInstance()` {#testrenderergetinstance}

```javascript
testRenderer.getInstance()
```
Хэрэв үндсэн элементэд холбогдох instance байвал түүн рүү буцна. Тухайн үндсэн элемент нь функц компонент бол ажиллахгүй. Яагаад гэвэл instance байхгүй. 

### `testRenderer.root` {#testrendererroot}

```javascript
testRenderer.root
```

Салбар мод дахь тодорхой node-ыг баталгаажуулахад туслах "test instance" бүхий үндсэн объект руу буцна. Та үүнийг ашиглан салбар модны бүтцийн доогуур байгаа бусад "test instances"-ыг олж болно. 

### `testInstance.find()` {#testinstancefind}

```javascript
testInstance.find(test)
```
`test(testInstance)` нь `true` гэж буцах удамшсан, дан test instance-ыг олно. Хэрэв тухайн нэг test instance-д `test(testInstance)` нь `true` гэж гарахгүй бол алдаа гарна. 

### `testInstance.findByType()` {#testinstancefindbytype}

```javascript
testInstance.findByType(type)
```

Тухайн `type`-т зохих удамшсан, дан test instance-ыг олно. Хэрэв тухайн `type`-т таарах нэг test instance байхгүй бол алдаа гарна. 

### `testInstance.findByProps()` {#testinstancefindbyprops}

```javascript
testInstance.findByProps(props)
```

Тухайн `props`-т зохих удамшсан, дан test instance-ыг олно. Хэрэв тухайн `props`-т таарах нэг test instance байхгүй бол алдаа гарна. 

### `testInstance.findAll()` {#testinstancefindall}

```javascript
testInstance.findAll(test)
```

`test(testInstance)` нь `true` гэж буцах бүх удамшсан test instance-уудыг олно. 

### `testInstance.findAllByType()` {#testinstancefindallbytype}

```javascript
testInstance.findAllByType(type)
```

Тухайн `type`-д нийцэх бүх удамшсан test instance-ыг олно. 

### `testInstance.findAllByProps()` {#testinstancefindallbyprops}

```javascript
testInstance.findAllByProps(props)
```

Тухайн `props`-т нийцэх бүх удамшсан test instance-ыг олно.

### `testInstance.instance` {#testinstanceinstance}

```javascript
testInstance.instance
```

Уг test instance-т холбогдох компонент instance. Функц компонентууд instance байхгүй учраас зөвхөн класс компонентууд л байна. Өгөгдсөн компонентын доторх `this` утгатай таардаг. 

### `testInstance.type` {#testinstancetype}

```javascript
testInstance.type
```

Уг test instance-т холбогдох компонентын төрөл. Жишээ нь `<Button />` компонент нь `Button` гэсэн төрөлтэй. 

### `testInstance.props` {#testinstanceprops}

```javascript
testInstance.props
```

Уг test instance-т холбогдох пропс. Жишээ нь `<Button size="small" />` компонент нь `{size: 'small'}` гэсэн пропстой. 

### `testInstance.parent` {#testinstanceparent}

```javascript
testInstance.parent
```

Тухайн test instance-ын эцэг test instance. 

### `testInstance.children` {#testinstancechildren}

```javascript
testInstance.children
```

Тухайн test instance-ын хүү test instance. 

## Ideas {#ideas}


Та `createNodeMock` функцийг `TestRenderer.create`-руу сонголтоор өгч, дамжуулж болно. Тэгвэл тусгай mock refs үүсэх боломжтой болно. `createNodeMock` нь одоогийн элементийг хүлээн авах ба mock ref объектыг буцаана. Refs-ээс хамаарал бүхий компонентыг тест хийхэд хэрэг болдог. 

```javascript
import TestRenderer from 'react-test-renderer';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.input = null;
  }
  componentDidMount() {
    this.input.focus();
  }
  render() {
    return <input type="text" ref={el => this.input = el} />
  }
}

let focused = false;
TestRenderer.create(
  <MyComponent />,
  {
    createNodeMock: (element) => {
      if (element.type === 'input') {
        // mock a focus function
        return {
          focus: () => {
            focused = true;
          }
        };
      }
      return null;
    }
  }
);
expect(focused).toBe(true);
```
