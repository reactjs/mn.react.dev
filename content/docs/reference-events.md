---
id: events
title: SyntheticEvent
permalink: docs/events.html
layout: docs
category: Reference
---

React Эвентийн Системийн нэг хэсэг болох `SyntheticEvent`-ын тухай энд тайлбарласан болно. 
[Эвент зохицуулалт](/docs/handling-events.html) гэсэн заавраас дэлгэрэнгүйг харна уу. 

## Тойм {#overview}

Эвентийг зохицуулагчид `SyntheticEvent` гэсэн instance-ыг дамжуулна. Энэ нь хөтчийн натив эвентэд ойр байх cross-browser wrapper юм. Бүх хөтөч дээр адилхан ажилладаг эвентээс бусад `stopPropagation()`, `preventDefault()` хөтчийн натив эвенттэй адил интерфэйстэй.

Танд аливаа нэг шалтгаанаар суурь хөтөч олох хэрэгтэй бол `nativeEvent` атрибут ашиглан олж болно. `SyntheticEvent` объект бүрт доорх атрибут байна:

```javascript
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
void persist()
DOMEventTarget target
number timeStamp
string type
```

> Тэмдэглэл:
>
> v0.14 хувилбар дээр бол эвент зохицуулагчаас  `false`  гэсэн утга буцвал эвент цааш тарж ажиллахыг зогсоохоо больсон байгаа. Оронд нь хэрэгтэй үед `e.stopPropagation()` эсвэл `e.preventDefault()`-ыг зориуд өөрөө ажиллуулдаг болсон.

### Эвен пүүл хийх {#event-pooling}

`SyntheticEvent` нь пүүл хийсэн эвент юм. Энэ нь юу гэсэн үг вэ гэхээр `SyntheticEvent` объект нь дахин ашиглагдах ба callback хийгдсэний дараа бүх properties нь хоосон болно. Ингэдэг нь ажиллагаатай холбоотой. Тэгэхээр тан эвент рүү асинхрон хэлбэрээр хандаж чадахгүй гэсэн үг. 

```javascript
function onClick(event) {
  console.log(event); // => nullified object.
  console.log(event.type); // => "click"
  const eventType = event.type; // => "click"

  setTimeout(function() {
    console.log(event.type); // => null
    console.log(eventType); // => "click"
  }, 0);

  // Won't work. this.state.clickEvent will only contain null values.
  this.setState({clickEvent: event});

  // You can still export event properties.
  this.setState({eventType: event.type});
}
```

> Тэмдэглэл:
>
> Хэрэв та event properties-т асинхрон хэлбэрээр хандахыг хүсвэл тухайн эвент дээрээ `event.persist()`-ыг дуудах хэрэгтэй. Ингэвэл пүүлээс таны  synthetic event устгагдаж, хэрэглэгчийн кодоор тухайн эвент рүү reference хийх боломж олгодог. 

## Дэмждэг эвентүүд {#supported-events}

React эвентүүдийг нэг стандартад оруулдаг ба өөр өөр хөтөч дээр properties нь тогтмол байж чаддаг. 

Эвент үүсэн дээш тархах (bubbling phase) доорх эвент зохицуулагчид ажиллаж эхэлнэ. Доош хумигдах шатанд (capture phase)-д эвент зохицуулагчийг хамруулахыг хүсвэл эвентийн нэрэн дээр `Capture` гэж нэмнэ. Жишээ нь `onClick` ашиглахын оронд capture phase-д дарах үйлдлийг зохицуулахын тулд `onClickCapture` ашиглана гэсэн үг юм. 

- [Clipboard Events](#clipboard-events)
- [Composition Events](#composition-events)
- [Keyboard Events](#keyboard-events)
- [Focus Events](#focus-events)
- [Form Events](#form-events)
- [Generic Events](#generic-events)
- [Mouse Events](#mouse-events)
- [Pointer Events](#pointer-events)
- [Selection Events](#selection-events)
- [Touch Events](#touch-events)
- [UI Events](#ui-events)
- [Wheel Events](#wheel-events)
- [Media Events](#media-events)
- [Image Events](#image-events)
- [Animation Events](#animation-events)
- [Transition Events](#transition-events)
- [Other Events](#other-events)

* * *

## Reference {#reference}

### Clipboard events {#clipboard-events}

Эвентийн нэр:

```
onCopy onCut onPaste
```

Properties:

```javascript
DOMDataTransfer clipboardData
```

* * *

### Composition Events {#composition-events}

Эвентийн нэр:

```
onCompositionEnd onCompositionStart onCompositionUpdate
```

Properties:

```javascript
string data

```

* * *

### Keyboard Events {#keyboard-events}

Эвентийн нэр:

```
onKeyDown onKeyPress onKeyUp
```

Properties:

```javascript
boolean altKey
number charCode
boolean ctrlKey
boolean getModifierState(key)
string key
number keyCode
string locale
number location
boolean metaKey
boolean repeat
boolean shiftKey
number which
```

[DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values) дээрх бүх утгыг `key` property авч чадна. 

* * *

### Focus Events {#focus-events}

Эвент нэр:

```
onFocus onBlur
```

Эдгээр фокус эвентүүд нь зөвхөн элемент үүсгэхэд биш React DOM дээрх бүх элемент дээр ажилладаг. 

Properties:

```javascript
DOMEventTarget relatedTarget
```

* * *

### Form Events {#form-events}

Эвент нэр:

```
onChange onInput onInvalid onReset onSubmit 
```
onChange эвентийн талаар дэлгэрэнгүйг [Forms](/docs/forms.html) гэснээс харна уу. 

* * *

### Generic Events {#generic-events}

Event names:

```
onError onLoad
```

* * *

### Mouse Events {#mouse-events}

Эвент нэр:

```
onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp
```

`onMouseEnter` болон `onMouseLeave` эвентүүд нь энгийн тархах эвентүүдийн оронд үлдсэн эвентээс тардаг ба capture phase гэж байхгүй.  


Properties:

```javascript
boolean altKey
number button
number buttons
number clientX
number clientY
boolean ctrlKey
boolean getModifierState(key)
boolean metaKey
number pageX
number pageY
DOMEventTarget relatedTarget
number screenX
number screenY
boolean shiftKey
```

* * *

### Pointer Events {#pointer-events}

Эвент нэр:

```
onPointerDown onPointerMove onPointerUp onPointerCancel onGotPointerCapture
onLostPointerCapture onPointerEnter onPointerLeave onPointerOver onPointerOut
```
`onPointerEnter` болон  `onPointerLeave`  эвентүүд нь энгийн тархах эвентүүдийн оронд үлдсэн эвентээс тардаг ба capture phase гэж байхгүй.  

Properties:

[W3 spec](https://www.w3.org/TR/pointerevents/) тодорхойлсноор pointer events нь [Mouse Events](#mouse-events) руу тархахдаа дараах properties-ыг агуулсан байдаг: 

```javascript
number pointerId
number width
number height
number pressure
number tangentialPressure
number tiltX
number tiltY
number twist
string pointerType
boolean isPrimary
```

Хөтөч хоорондын ажиллагаа дээр нэмж хэлэхэд:

Pointer events-ыг бүх хөтөч дэмждэггүй (Энэхүү тайлбарыг бичих үед бол Chrome, Firefox, Edge, болон Internet Explorer хөтөч дэмжиж байна).  React  зориуд бусад хөтчийг дэмждэггүй байхаар хийсэн учир нь `react-dom`-ын хэмжээг огцом нэмэгдүүлэх магадлалтай учраас тэр юм.

Хэрэв таны аппликейшнд pointer events хэрэгтэй бол гуравдагч талын pointer event нэм гэж зөвлөх байна. 

* * *

### Selection Events {#selection-events}

Эвент нэр:

```
onSelect
```

* * *

### Touch Events {#touch-events}

Эвент нэр:

```
onTouchCancel onTouchEnd onTouchMove onTouchStart
```

Properties:

```javascript
boolean altKey
DOMTouchList changedTouches
boolean ctrlKey
boolean getModifierState(key)
boolean metaKey
boolean shiftKey
DOMTouchList targetTouches
DOMTouchList touches
```

* * *

### UI Events {#ui-events}

Эвент нэр:

```
onScroll
```

Properties:

```javascript
number detail
DOMAbstractView view
```

* * *

### Wheel Events {#wheel-events}

Эвент нэр:

```
onWheel
```

Properties:

```javascript
number deltaMode
number deltaX
number deltaY
number deltaZ
```

* * *

### Media Events {#media-events}

Эвент нэр:

```
onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
onTimeUpdate onVolumeChange onWaiting
```

* * *

### Image Events {#image-events}

Эвент нэр:

```
onLoad onError
```

* * *

### Animation Events {#animation-events}

Эвент нэр:

```
onAnimationStart onAnimationEnd onAnimationIteration
```

Properties:

```javascript
string animationName
string pseudoElement
float elapsedTime
```

* * *

### Transition Events {#transition-events}

Эвент нэр:

```
onTransitionEnd
```

Properties:

```javascript
string propertyName
string pseudoElement
float elapsedTime
```

* * *

### Other Events {#other-events}

Эвентийн нэр:

```
onToggle
```
