---
id: events
title: SyntheticEvent
permalink: docs/events.html
layout: docs
category: Reference
---

<<<<<<< HEAD
React Эвентийн Системийн нэг хэсэг болох `SyntheticEvent`-ын тухай энд тайлбарласан болно. 
[Эвент зохицуулалт](/docs/handling-events.html) гэсэн заавраас дэлгэрэнгүйг харна уу. 
=======
> Try the new React documentation.
> 
> These new documentation pages teach modern React and include live examples:
>
> - [Common components (e.g. `<div>`)](https://beta.reactjs.org/reference/react-dom/components/common)
>
> The new docs will soon replace this site, which will be archived. [Provide feedback.](https://github.com/reactjs/reactjs.org/issues/3308)

This reference guide documents the `SyntheticEvent` wrapper that forms part of React's Event System. See the [Handling Events](/docs/handling-events.html) guide to learn more.
>>>>>>> 5647a9485db3426d62b5a8203f4499c01bcd789b

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

### Эвент пүүл хийх {#event-pooling}

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


> Хувилбар 17-оос эхлээд, `e.persist()` ямар нэгэн нөлөө байхгүй. Учир нь `SyntheticEvent` [пүүлд](/docs/legacy-event-pooling.html) орохгүй болсон .

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

```js
DOMEventTarget relatedTarget
```

#### onFocus {#onfocus}

The `onFocus` event is called when the element (or some element inside of it) receives focus. For example, it's called when the user clicks on a text input.

```javascript
function Example() {
  return (
    <input
      onFocus={(e) => {
        console.log('Focused on input');
      }}
      placeholder="onFocus is triggered when you click this input."
    />
  )
}
```

#### onBlur {#onblur}

The `onBlur` event handler is called when focus has left the element (or left some element inside of it). For example, it's called when the user clicks outside of a focused text input.

```javascript
function Example() {
  return (
    <input
      onBlur={(e) => {
        console.log('Triggered because this input lost focus');
      }}
      placeholder="onBlur is triggered when you click this input and then you click outside of it."
    />
  )
}
```

#### Detecting Focus Entering and Leaving {#detecting-focus-entering-and-leaving}

You can use the `currentTarget` and `relatedTarget` to differentiate if the focusing or blurring events originated from _outside_ of the parent element. Here is a demo you can copy and paste that shows how to detect focusing a child, focusing the element itself, and focus entering or leaving the whole subtree.

```javascript
function Example() {
  return (
    <div
      tabIndex={1}
      onFocus={(e) => {
        if (e.currentTarget === e.target) {
          console.log('focused self');
        } else {
          console.log('focused child', e.target);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
          console.log('focus entered self');
        }
      }}
      onBlur={(e) => {
        if (e.currentTarget === e.target) {
          console.log('unfocused self');
        } else {
          console.log('unfocused child', e.target);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
          console.log('focus left self');
        }
      }}
    >
      <input id="1" />
      <input id="2" />
    </div>
  );
}
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

>Note
>
>Starting with React 17, the `onScroll` event **does not bubble** in React. This matches the browser behavior and prevents the confusion when a nested scrollable element fires events on a distant parent.

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
