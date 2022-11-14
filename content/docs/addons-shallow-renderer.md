---
id: shallow-renderer
title: Shallow Renderer
permalink: docs/shallow-renderer.html
layout: docs
category: Reference
---

**Импорт хийх**

```javascript
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6
var ShallowRenderer = require('react-test-renderer/shallow'); // ES5 with npm
```

## Тойм {#overview}

Unit тест бичихэд өнгөц рендэр (shallow render) тус болдог. Өнгөц рендэр хийнэ гэдэг нь "нэг түвшин доогуур" компонентыг рендэр хийж, рендэр метод юу буцаасан тухай мэдээллийг баталгаажуулахыг хэлнэ. Энэ нь Instance үүсээгүй, рендэр хийгдээгүй хүү компонентын үйлдлээс үл хамаарна. DOM шаардахгүй. 

Жишээ нь хэрэв танд доорх компонет байгаа бол:

```javascript
function MyComponent() {
  return (
    <div>
      <span className="heading">Title</span>
      <Subcomponent foo="bar" />
    </div>
  );
}
```

Ингэж баталгаажуулна:

```javascript
import ShallowRenderer from 'react-test-renderer/shallow';

// in your test:
const renderer = new ShallowRenderer();
renderer.render(<MyComponent />);
const result = renderer.getRenderOutput();

expect(result.type).toBe('div');
expect(result.props.children).toEqual([
  <span className="heading">Title</span>,
  <Subcomponent foo="bar" />
]);
```

Refs дэмждэггүй гэхчлэн зарим нэг сул тал өнгөц тест хийх функцэд бий.

> Тэмдэглэл:
>
> Enzyme-ийн [Өнгөц рендэрийн API](https://airbnb.io/enzyme/docs/api/shallow.html)-ыг уншихыг зөвлөе. Ажиллагаа нь ижил боловч илүү ахисан түвшний, сайн API санал болгодог. 

## Reference {#reference}

### `shallowRenderer.render()` {#shallowrendererrender}

shallowRenderer-ыг та тест хийж буй компонентоо рендэр хийх "газар" гээд ойлгочиход болно. Түүнээсээ компонентын үр дүнг харах юм.

<<<<<<< HEAD

`shallowRenderer.render()` нь [`ReactDOM.render()`](/docs/react-dom.html#render)-тай төстэй. Гэхдээ DOM шаардахгүй, нэг түвшин доогуур рендэр хийдэг гэдгээрэЭ ялгаатай. Энэ нь юу гэсэн үг вэ гэхээр та хүү компонентуудын ажиллагаанаас ангид компонентуудыг тест хийж болно гэсэн үг юм. 
=======
`shallowRenderer.render()` is similar to [`root.render()`](/docs/react-dom-client.html#createroot) but it doesn't require DOM and only renders a single level deep. This means you can test components isolated from how their children are implemented.
>>>>>>> 3bba430b5959c2263c73f0d05d46e2c99c972b1c

### `shallowRenderer.getRenderOutput()` {#shallowrenderergetrenderoutput}

`shallowRenderer.render()`-ыг дуудсаны дараа та өнгөц рендэр хийсэн үр дүнгээ харахдаа `shallowRenderer.getRenderOutput()`-ыг ашиглана.

Тэгээд та үр дүнг нь assert хийн баталгаажуулж болно. 
