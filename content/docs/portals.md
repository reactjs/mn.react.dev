---
id: portals
title: Портал
permalink: docs/portals.html
---

<<<<<<< HEAD
Портал нь хүүхэд компонентуудтыг ДОМ-руу эцэг компонентын ДОМ доторх байрлалаас гадна талд байршуулах сонгомол аргачилал юм.
=======
> Try the new React documentation.
> 
> These new documentation pages teach modern React and include live examples:
>
> - [`createPortal`](https://beta.reactjs.org/reference/react-dom/createPortal)
>
> The new docs will soon replace this site, which will be archived. [Provide feedback.](https://github.com/reactjs/reactjs.org/issues/3308)

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
>>>>>>> 19aa5b4852c3905757edb16dd62f7e7506231210

```js
ReactDOM.createPortal(child, container)
```

Эхний аргумент (`child`) бол ямар нэг [рендерлэх боломжтой React хүүхэд](/docs/react-component.html#render), элемент, текст, эсвэл хэлтэрхий гэх мэт. Хоёр дахь аргумент (`container`) нь ДОМ элемент.

## Хэрэглээ {#usage}

Ихэвчлэн, компонент-н рендер мэтодоос элемент буцаахад, энэ нь ДОМ байдлаар хамгийн ойрын эцэг node-д хүүхэд болон ордог:

```js{4,6}
render() {
  // React шинэ div үүсгээд children-г түүн дотор рендер хийнэ.
  return (
    <div>
      {this.props.children}
    </div>
  );
}
```

Харин зарим тохиолдолд, ДОМ-ын өөр хаа нэгтээ хүүхэд болгон оруулах хэрэгцээ гардаг:

```js{6}
render() {
  // React шинэ div *үүсгэхгүй*. `domNode` дотор children-г рендер хийидэг.
  // `domNode` нь DOM доторх байрлалаас үл хамаарсан ямар нэг бодит DOM node байна.
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}
```

Порталын нийтлэг хэрэглээ бол эцэг компонент нь `overflow: hidden` эсвэл `z-index` загвар ашигласан хэдий ч үүнээс үл хамаараад хүүхэд компонентоо харуулах шаардлагатай үе юм. Жишээ нь: dialogs, hovercards, and tooltips.

> Тэмдэглэл:
>
> Порталтай ажиллаж байхдаа [гарын фокус зохицууалт](/docs/accessibility.html#programmatically-managing-focus) маш чухал болхыг санаарай.
>
<<<<<<< HEAD
> Модал диалогын хувьд бүх хүн [WAI-ARIA Модал Зөвшөөрөгдсөн Практик](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal)-н дагуу харилцах боломжтой байгааг хянаарай.
=======
> For modal dialogs, ensure that everyone can interact with them by following the [WAI-ARIA Modal Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/).
>>>>>>> 19aa5b4852c3905757edb16dd62f7e7506231210

[**CodePen дээр турших**](https://codepen.io/gaearon/pen/yzMaBd)

## Порталын Эвент Бөмбөлөгүүд {#event-bubbling-through-portals}

Хэдий портал ДОМ-н модны хаана ч байх боломжтой ч бусад талаараа энгийн React хүүхэдтэй ижил хэвийн ажиллагаатай. Контекст зэрэг боломжууд child нь портал эсэхээс үл хамаараад яг ижилхэн, учир нь портал нь *ДОМ мод*-ы хаана байгаагаас хамааралгүй *React мод*-нд оршиж байгаа юм.

Энэ нь эвент бөмбөлөгт мөн ижил. Портал дотроос эвент нь дуудагдaхад, тэдгээр элементүүд нь *ДОМ мод* дотор дээд үе биш байсан ч, *React мод* доторх өөрийн дээд үеүүдрүү түүнийг тараадаг. Дараах HTML бүтцийн дагуу:

```html
<html>
  <body>
    <div id="app-root"></div>
    <div id="modal-root"></div>
  </body>
</html>
```

`#app-root` доторх `эцэг` компонент нь ижил түвшний `#modal-root` node-с ирэх чөлөөтэй, эвент хөөсийг барих боломжтой.

```js{28-31,42-49,53,61-63,70-71,74}
// Эдгээр конэйнерүүд нь ДОМ дотор ижил түвшинд байгаа
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // Портал элемент нь Модалын хүүхдүүд суурилагдсаны
    // дараа ДОМ модонд ордог, өөрөөр хэлбэл хүүхдүүд нь
    // тусдаа ДОМ node-д суурилагдана. Хэрвээ хүүхэд
    // компонент дөнгөж суурилаад ДОМ модонд залгагдах
    // шаардлатай бол, жишээ нь ДОМ node-г хэмжих,
    // `autoFocus`-г удамдаа ашиглах зэрэг шалтгаанаар,
    // Модал дээр state оруулаад Модал ДОМ модонд орход
    // зөвхөн хүүхдүүдийг рендер хийх хэрэгтэй.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Хүүхэд доторх товчыг дарагдахад энэ дуудагдана,
    // ДОМ-н шууд удамд тухайн товч нь байхгүй байсан ч
    // Эцгийн state-г шинэчилнэ.
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  // Энэ товчны дарах эвент нь эцэгрүү дамжих ба учир нь
  // `onClick` аттрибут тодорхойлогдоогүй юм
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

const root = ReactDOM.createRoot(appRoot);
root.render(<Parent />);
```

[**CodePen дээр турших**](https://codepen.io/gaearon/pen/jGBWpE)

Портал-с ирэх эвент-г эцэг компонент дээр барих нь портал-с шууд хамааралгүй илүү уян хатан abstraction хөгжүүлэлт хийх боломж олгодог. Жишээ нь: `<Modal />` компонентыг рендер хийхэд эцэг компонент нь түүний эвентүүдийг портал ашиглаж хийгдсэн үгүйгээс хамаарахгүй барьж авах боломжтой юм.
