---
id: dom-elements
title: DOM Elements
layout: docs
category: Reference
permalink: docs/dom-elements.html
redirect_from:
  - "docs/tags-and-attributes.html"
  - "docs/dom-differences.html"
  - "docs/special-non-dom-attributes.html"
  - "docs/class-name-manipulation.html"
  - "tips/inline-styles.html"
  - "tips/style-props-value-px.html"
  - "tips/dangerously-set-inner-html.html"
---

React хөтөч бүр дээр нийцтэй болон хурдан ажиллах үүднээс хөтчөөс хамааралгүй DOM систем хэрэгжүүлсэн. Бид хөтөч дээрх DOM хэрэгжүүлэлтийн талаар ярих боломж олдлоо.

React дээр бүх DOM шинж чанарууд болон аттрибутууд нь(эвэнтийн удирдлагыг багтаагаад) camelCased байх ёстой. Жишээбэл, HTML аттрибут `tabindex` нь React дээр `tabIndex` аттрибуттай харгалзана. Онцгой тохиолдлууд болох `aria-*` болон `data-*` аттрибутууд нь lowercased байх хэрэгтэй. Жишээбэл, `aria-label`-г хэвээр нь үлдээнэ.

## Аттрибутуудын ялгаанууд {#differences-in-attributes}

React болон HTML-н хооронд өөрөөр ажилладаг зөндөө аттрибутууд бий:

### checked {#checked}

`checked` аттрибут бол `checkbox` эсвэл `radio` төрлийн <input> дээр дэмжигддэг. Та үүнийг компонент чагтлагдасан эсэхийг тохируулахад ашиглаж болно. Энэ нь удирдагдсан компонентууд бичихэд хэрэгтэй байдаг. `defaultChecked` бол удирдагдаагүй бөгөөд компонент анх үүсэхэд чагтлах эсэх талаар тохируулдаг.

### className {#classname}

CSS класс зааж өгөхдөө `className` аттрибутыг ашиглана. Энэ нь бүх энгийн DOM болон SVG элементүүд болох `<div>`, `<a>` болон бусдад адилхан мөрдөгдөнө.

Хэрэв та React-г Web компонентуудтай хэрэглэвэл(тийм ч түгээмэл биш) `class` аттрибутыг оронд нь ашиглана.

### dangerouslySetInnerHTML {#dangerouslysetinnerhtml}

`dangerouslySetInnerHTML` бол React-н `innerHTML`-г хөтчийн DOM дээр орлох зүйл юм. Ерөнхийдөө HTML code тохируулах нь хэрэглэгчийг [cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) халдлагад өртөх эсрдэл дагуулдаг. Тэгэхээр React-с HTML тохируулахдаа `dangerouslySetInnerHTML` ашиглан `__html` түлхүүр дамжуулан өөртөө энэ нь аюултайг сануулж болно. Жишээлбэл:

```js
function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```

### htmlFor {#htmlfor}

`for` нь Жаваскрипт дээр нөөцлөгдсөн түлхүүр үг учир React элементүүд `htmlFor`-г оронд нь ашигладаг.

### onChange {#onchange}

`onChange` эвент нь форм дээр талбар өөрчлөгдөхөд дуудагдах юм. Бид `onChange`-н ажиллагаа нь нэрнээсээ гажсан гэж үздэг учраас албаар хөтчүүд дээр байдаг ажиллагааг нь ашигладагггүй бөгөөд React энэ эвентэд хэрэглэгчийн оролтыг цаг тухайд нь удирдахийг даалгадаг.

### selected {#selected}

<<<<<<< HEAD
`selected` аттрибут бол `<option>` компонентууд дээр дэмжигддэг. Та үүнийг компонент сонгогдсон байдлаар тохируулахад ашиглаж болно. Энэ нь удирдагдсан компонентууд бичихэд хэрэгтэй.
=======
If you want to mark an `<option>` as selected, reference the value of that option in the `value` of its `<select>` instead.
Check out ["The select Tag"](/docs/forms.html#the-select-tag) for detailed instructions.
>>>>>>> d16f1ee7958b5f80ef790265ba1b8711d4f228d6

### style {#style}

>Анхаар
>
>Зарим баримтжуулалт дээр байгаа жишээнүүд `style`-г амархан байх үүднээс ашигласан ч **`style` аттрибутыг элементийн загварын утгаар хэрэглэх тохиромжгүй.** Ихэнх тохиолдлуудад, [`className`](#classname) нь CSS дээр ашиглагдах заалт класс болон ашиглах нь дээр байдаг. `style` нь ихэвчлэн React програмууд дээр динамикаар тооцоологдсон загваруудыг дүрслэхэд ашиглагддаг. Илүүг [FAQ: Styling and CSS](/docs/faq-styling.html).

`style` аттрибут нь camelCased шинж чанаруудтай Жаваскрипт объектыг CSS string-н оронд хүлээж авахыг илүүд үздэг.Энэ нь илүү үр дүнтэй бөгөөд DOM `style`-н Жаваскрипт шинж чанартай нийцтэй. Мөн XSS аюулгүй байдлын цоорхой үүсэхээс сэргийлдэг. Жишээлбэл:

```js
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```

Загварууд нь угтвар ашиглаагүйг анзаарж болно. Хуучин хөтчүүд дэмжихийн тулд харгалзах стайл шинж чанаруудыг нь нэмж өгөх хэрэгтэй:

```js
const divStyle = {
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

function ComponentWithTransition() {
  return <div style={divStyle}>This should work cross-browser</div>;
}
```

Жаваскриптээс DOM зангилаануудыг шинж чанар руу хандахад нийцтэй байх үүднээс стайл түлхүүрүүд нь camelCased байдаг(e.g. `node.style.backgroundImage`). [`ms`-с бусад](https://www.andismith.com/blogs/2012/02/modernizr-prefixed/) vendor угтварууд том үсгээр эхлэх нь зүйтэй. Энэ нь `WebkitTransition` нь том "W" үсгээр эхэлсэн шалтгаан.

React автоматаар "px" дагаварыг тоон загварын шинж чанар дээр залгадаг. Хэрэв та "px"-ээс өөр хэмжээсийн нэгж ашиглаж бол, хүссэн утгаа тэмдэгт байдлаар тодорхойлж өгнө. Жишээлбэл:

```js
// Result style: '10px'
<div style={{ height: 10 }}>
  Hello World!
</div>

// Result style: '10%'
<div style={{ height: '10%' }}>
  Hello World!
</div>
```

Бүх стайл шинж чанарууд пиксел тэмдэгт руу хөрвүүлэгддэггүй. Зарим нэг нь нэгжгүй чигээр үлддэг(eg `zoom`, `order`, `flex`). Нэгжгүй хэвээр үлддэг шинж чанаруудын бүрэн жагсаалтыг [эндээс](https://github.com/facebook/react/blob/4131af3e4bf52f3a003537ec95a1655147c81270/src/renderers/dom/shared/CSSProperty.js#L15-L59) харж болно.

### suppressContentEditableWarning {#suppresscontenteditablewarning}

Энгийнээр хүүтэй элемент нь `contentEditable`-р тэмдэглэхэд анхааруулга өгдөг учир нь ажилладаггүй юм. Энэ аттрибут нь энэ анхааруулгыг дардаг. Та [Draft.js](https://facebook.github.io/draft-js/) шиг `contentEditable`-г гараар удирддаг жаваскрипт сан бичээгүй л бол үүнийг ашиглаад хэрэггүй.

### suppressHydrationWarning {#suppresshydrationwarning}

Хэрэв та сервер талын React дүрслэл ашиглаж байгаа бол энгийнээр сервер болон хэрэглэгч нь ялгаатай зүйл дүрслэхэд анхааруулга өгдөг. Гэсэн хэдий ч маш ховор тохиолдлуудад яг цав таарсан эсэхийг нягтлах нь хэцүү эсвэл боломжгүй байдаг. Жишээлбэл цагын стамп нь сервер болон хэрэглэгч дээр зөрөх ёстой байдаг.

Хэрэв та `suppressHydrationWarning`-г `true` болгон тохируулбал, React нь таны элементийн аттрибут болон агуулгын ялгаатай байдалд анхааруулахгүй. Энэ нь зөвхөн гүн түвшинд ажилладаг бөгөөд зугтах гарц болон зориулагдсан. Үүнийн хэтрүүлэн хэрэглэх хэрэггүй. Та үүний талаар дэлгэрэнгүйг [`ReactDOM.hydrate()` documentation](/docs/react-dom.html#hydrate)-с уншиж болно.

### value {#value}

<<<<<<< HEAD
`value` аттрибут нь `<input>` болон `<textarea>` компонентууд дээр дэмжигддэг.  Та үүнийг компонентийн утгыг тохируулахдаа ашиглана. Энэ удирдагдсан компонент бичихэд хэрэг болно. `defaultValue` бол компонент анх үүсэхэд тохируулагдах удирдагдахгүй утга юм.
=======
The `value` attribute is supported by `<input>`, `<select>` and `<textarea>` components. You can use it to set the value of the component. This is useful for building controlled components. `defaultValue` is the uncontrolled equivalent, which sets the value of the component when it is first mounted.
>>>>>>> d16f1ee7958b5f80ef790265ba1b8711d4f228d6

## Бүх дэмжигдсэн HTML аттрибутууд {#all-supported-html-attributes}

React 16-д ямар ч стандарт [эсвэл сustom](/blog/2017/09/08/dom-attributes-in-react-16.html) DOM аттрибутууд бүрэн дэмжигдсэн байдаг.

React нь JavaScript-төвтэй API DOM руу олгодог. React компонентууд нь custom болон DOM-д хамааралтай шинж чанарууд хэрэглэгдэг учир `camelCase` convention DOM API-ууд шиг хэрэглэдэг:

```js
<div tabIndex="-1" />      // Just like node.tabIndex DOM API
<div className="Button" /> // Just like node.className DOM API
<input readOnly={true} />  // Just like node.readOnly DOM API
```

Эдгээр шинж чанарууд харгалзах HTML аттрибутууд шигээ ажилладаг ч зарим тусгай тохиолдлуудыг доор баримтжуулав.

Дараах DOM аттрибутууд React дээр дэмжигддэг:

```
accept acceptCharset accessKey action allowFullScreen alt async autoComplete
autoFocus autoPlay capture cellPadding cellSpacing challenge charSet checked
cite classID className colSpan cols content contentEditable contextMenu controls
controlsList coords crossOrigin data dateTime default defer dir disabled
download draggable encType form formAction formEncType formMethod formNoValidate
formTarget frameBorder headers height hidden high href hrefLang htmlFor
httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list
loop low manifest marginHeight marginWidth max maxLength media mediaGroup method
min minLength multiple muted name noValidate nonce open optimum pattern
placeholder poster preload profile radioGroup readOnly rel required reversed
role rowSpan rows sandbox scope scoped scrolling seamless selected shape size
sizes span spellCheck src srcDoc srcLang srcSet start step style summary
tabIndex target title type useMap value width wmode wrap
```

Мөн адилаар бүх SVG аттрибутууд нь бүрэн дэмжигддэг:

```
accentHeight accumulate additive alignmentBaseline allowReorder alphabetic
amplitude arabicForm ascent attributeName attributeType autoReverse azimuth
baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight
clip clipPath clipPathUnits clipRule colorInterpolation
colorInterpolationFilters colorProfile colorRendering contentScriptType
contentStyleType cursor cx cy d decelerate descent diffuseConstant direction
display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground
end exponent externalResourcesRequired fill fillOpacity fillRule filter
filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize
fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy
g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef
gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic
imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength
kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor
limitingConeAngle local markerEnd markerHeight markerMid markerStart
markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode
numOctaves offset opacity operator order orient orientation origin overflow
overlinePosition overlineThickness paintOrder panose1 pathLength
patternContentUnits patternTransform patternUnits pointerEvents points
pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits
r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions
requiredFeatures restart result rotate rx ry scale seed shapeRendering slope
spacing specularConstant specularExponent speed spreadMethod startOffset
stdDeviation stemh stemv stitchTiles stopColor stopOpacity
strikethroughPosition strikethroughThickness string stroke strokeDasharray
strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity
strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor
textDecoration textLength textRendering to transform u1 u2 underlinePosition
underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic
vHanging vIdeographic vMathematical values vectorEffect version vertAdvY
vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing
writingMode x x1 x2 xChannelSelector xHeight xlinkActuate xlinkArcrole
xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlns xmlnsXlink xmlBase
xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan
```

Мөн түүнчлэн та өөрийн аттрибутыг бүрэн жижиг үсэг ашиглан зохиож болно.
