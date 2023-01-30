---
id: forwarding-refs
title: Ref дамжуулах
permalink: docs/forwarding-refs.html
---

<<<<<<< HEAD
Ref дамжуулах гэдэг нь [ref](/docs/refs-and-the-dom.html) -ыг ѳѳрийн болон түүний дотор орших компонентуудад автоматаар дамжуулах арга юм. Аппликейшний ихэнх компонентод шаардлагагүй боловч зарим тохиолдолд хэрэгтэй байдаг, тухайлбал дахин ашиглагдах компонент сан үүсгэх үед ч юм уу. Ѳргѳн хэрэглээг доор дурьдав.
=======
> Try the new React documentation.
> 
> These new documentation pages teach modern React and include live examples:
>
> - [Manipulating the DOM with Refs](https://beta.reactjs.org/learn/manipulating-the-dom-with-refs)
> - [`forwardRef`](https://beta.reactjs.org/reference/react/forwardRef)
>
> The new docs will soon replace this site, which will be archived. [Provide feedback.](https://github.com/reactjs/reactjs.org/issues/3308)

Ref forwarding is a technique for automatically passing a [ref](/docs/refs-and-the-dom.html) through a component to one of its children. This is typically not necessary for most components in the application. However, it can be useful for some kinds of components, especially in reusable component libraries. The most common scenarios are described below.
>>>>>>> 5647a9485db3426d62b5a8203f4499c01bcd789b

## Ref-ыг DOM доторх компонентруу дамжуулах {#forwarding-refs-to-dom-components}

`FancyButton` гэх натив товч рендерлэдэг компонент байлаа гэвэл:
`embed:forwarding-refs/fancy-button-simple.js`

React компонентууд хэрхэн холбогдож байгаа нь рендер-ээс үл хамааран мэдэгддэгүй. Ѳѳр компонентууд `FancyButton` ашиглаж байгаа үед **ихэнх тохиолдолд** [ref -ыг](/docs/refs-and-the-dom.html) DOM элементрүү авах шаардлагагүй. Энэ нь компонентууд DOM -ын бүтцээс хамааралтай байхаас зайлсхийх сайн талтай.

Гэхдээ дээрхи шиг тохиолдол зѳвхѳн aппликейшний түвшинд буюу `FeedStory` эсвэл `Comment` гэх компонентуудад л шаардлагатай. Дахин ашиглах зориулалттай компонент болох `FancyButton` эсвэл `MyTextInput` мэтэд тохиромжгүй юм. Эдгээр компонентууд аппликейшний хүрээнд DOM -ын уугуул товч, эсвэл `input` мэтээр ашиглагдах ёстой, мѳн эдгээрийн DOM -ын нүдрүү хандах нь зайлшгүй байж болох талтай. Жишээ нь: focus, selection эсвэл animation хийхэд г.м

**Ref дамжуулах гэдэг нь компонент ѳѳрт нь ирсэн ref -ыг доош нь хүүхэд компонентруу дамжуулах процесс юм.**

Доорх жишээ дээр `FancyButton` `React.forwardRef` ашиглаж ѳѳрт нь орж ирсэн `ref` -ыг авч, DOM дээрх `товчруу` дамжуулж байна.

`embed:forwarding-refs/fancy-button-simple-ref.js`

Ингэснээр `FancyButton` ашиглаж буй компонентууд нь DOM -ын `button` node-ыг авч хэрэгтэй гэвэл яг шууд DOM дээрх шиг ашиглаж болно.

Дээрхи жишээ дээр болсон зүйлсийг алхам алхамаар сийрүүлбэл:

1. Бид `React.createRef` дуудаж `ref` хувьсагчид оноож [React ref](/docs/refs-and-the-dom.html) үүсгэнэ.
1. `ref` -ыг `<FancyButton ref={ref}>` руу JSX аттрибут болгон дамжуулна.
1. React `ref` -ыг `(props, ref) => ...` функцийн доторх `forwardRef` рүү 2 дахь аргумент болгон дамжуулна.
1. Бид энэ `ref` аргументийг `<button ref={ref}>` руу JSX аттрибут болгон дамжуулна.
1. ref бэлэн болоход `ref.current` нь DOM дээрх `<button>` -руу заах юм.

>Тэмдэглэл
>
>2 дахь `ref` аргумент нь зѳвхѳн компонентийг `React.forwardRef` гэж зарласан үед боломжтой. Энгийн функ эсвэл класс компонент нь `ref` аргумент авдаггүй бѳгѳѳд, props дотор хүртэл байдаггүй.
>
>Ref дамжуулах нь DOM компонентоор хязгаарлагдахгүй. Класс компонентруу хүртэл дамжуулж болно.

## Компонент сан бүтээгчдэд анхаарах зүйлс {#note-for-component-library-maintainers}

**Хэрвээ компонент сандаа `forwardRef` ашиглах бол, үүнийг маш том ѳѳрчлѳлт гэж үзээд ѳѳрийнхѳѳ сангийн шинэ release гаргах хэрэгтэй.** Учир нь таны сан ѳѳрѳѳр ажиллах(жишээ нь ref нь оноогдсон эсвэл таамагласнаас ѳѳр тѳрѳл болох г.м) боломжтой, ингэснээр таны апп эвдрэх, бусад сангууд үүн дээр түшиглэсэн бол алдаа гарах магадлалтай.

Нѳгѳѳтэйгүүр `React.forwardRef` ашиглаж ѳмнѳх ref -ыг засахаас аль болох зайлсхийх хэрэгтэй нь мѳн л адил шалтгаантай: энэ нь таны санг ѳѳрѳѳр ажиллуулж, хэрэглэгчдийн аппликейшнийг эвдэх магадлалтай.

## Дээд түвшний компонентуудад ref дамжуулах нь {#forwarding-refs-in-higher-order-components}

Энэхүү техник нь [дээд-түвшний компонент](/docs/higher-order-components.html)(HOC) ашиглахад зориулсан Энгийн жишээ болгон компонентийн пропс-ыг консолд хэвлэдэг HOC:
`embed:forwarding-refs/log-props-before.js`

"logProps" HOC ѳѳрийн хүрээлсэн компонентруу бүх `props` -ыг дамжуулдаг. Ингэснээр рендер хийгдэх гаралт нь адилхан харагдана. Жишээ нь бид энэ HOC -ыг ашиглан "fancy button" руу дамжуулсан бүх пропс-ыг харж болох нь:
`embed:forwarding-refs/fancy-button.js`

Нэг анхаарах зүйл нь: refs дамжуулагдахгүй байгаа. Учир нь `ref` нь проп биш юм. `key` -г React ѳѳрѳѳ зохицуулдаг шиг. Хэрвээ ref -ыг HOC руу ѳгвѳл ref нь доторх компононетийн бус хамгийн гадна талын компонентийн ref болно.

Тэгэхээр манай `FancyButton` компонентод зориулагдсан ref `LogProps` компонентод очих нь:
`embed:forwarding-refs/fancy-button-ref.js`

Аз болж, бид ref-ыг доторх `FancyButton` компонентруу `React.forwardRef` API ашиглан тусд нь дамжуулж болдог. `React.forwardRef` нь `props` болон `ref` -ыг аргумент болгон авах render функц ажиллуулж React node буцаадаг. Жишээ нь:
`embed:forwarding-refs/log-props-after.js`

## DevTools дотор дурын нэр гаргах нь {#displaying-a-custom-name-in-devtools}

`React.forwardRef` нь render функц авдаг. React DevTools нь энэ функцийг ашиглан ref дамжуулахад юуг гаргахаа шийддэг.

Жишээ нь, доорхи компонент нь **ForwardRef** гэж гаргах нь:

`embed:forwarding-refs/wrapped-component.js`

Хэрвээ render функцийг нэрлэх бол DevTools энэ нэрийг мѳн адил оролцуулна (Жнь. "*ForwardRef(myFunction)*"):

`embed:forwarding-refs/wrapped-component-with-function-name.js`

Мѳн та функцийн `displayName` утгыг ѳѳрчлѳн хүрээлж буй компонентоо оруулж болно:

`embed:forwarding-refs/customized-display-name.js`
