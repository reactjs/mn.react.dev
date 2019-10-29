---
id: add-react-to-a-website
title: React-г веб сайтдаа нэмэх
permalink: docs/add-react-to-a-website.html
redirect_from:
  - "docs/add-react-to-an-existing-app.html"
prev: getting-started.html
next: create-a-new-react-app.html
---

React-г их, бага хүссэн хэмжээгээрэй хэрэгэл.

React нь анхнаасаа аажмаар хэрэглээнд оруулхад зориулагдсан ба их, **бага гэхгүй та хүссэн хэмжээгээрэй хэрэглэж болно**. Магадгүй та зөвхөн хэсэгхэн харилцан үйлчлэл бүхий зүйл одоо байгаа хуудсандаа оруулхыг хүсэж болно. React компонентууд түүнийг хийхэд маш тохиромжтой.

Веб сайтуудын дийлэнх нь single-page app биш эсвэл байх шаардлагагүй. **Цөөн хэдэн мөр код болон build багажгүй** React-г өөрийн вевсайтын жижигхэн хэсэгт туршаж үзээрэй. Та цаашид хэрэглээгээ алгуурхан нэмээд явж болно эсвэл цөөн динамик виджет-д хянаад явах ч боломжтой.

---

- [React-г нэг минутанд оруулах](#add-react-in-one-minute)
- [Заавал биш: React-г JSX-тэй турших](#optional-try-react-with-jsx) (багцлах шаардлагагүй!)

## React-г нэг минутанд оруулах {#add-react-in-one-minute}

Энэ хэсэгт React компонентыг хэрхэн одоо байгаа HTML-г хуухдсанд нэмхийг харуулна. Өөрийн веб сайт дээрээ буулгаад явах эсвэл шинээр хоосон HTML файл үүсгээд фрактик хийсэн ч болно.

**Энэ хэсгийг хийж дуусгахад** ямар нэг төвөгтэй багаж эсвэл шаалдагатай суулгац огт хэрэггүй, **зөвхөн интернет холболт болон өөрийн цагаас нэг минут байхад л хангалттай.**

Заавал биш: [Бүтэн жишээг татаж авах (2KB zipped)](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/f6c882b6ae18bde42dcf6fdb751aae93495a2275.zip)

### Алхам 1: HTML дотор ДОМ агуулагч нэмэх {#step-1-add-a-dom-container-to-the-html}

Эхлээд засах гэж буй HTML хуудсаа нээнэ. React-р харуулах гэж байгаа хэсэгээ тэмдэглэх зорилгоор хоосон `<div>` таг нэмнэ. Жишээ нь:

```html{3}
<!-- ... одоо байгаа HTML ... -->

<div id="like_button_container"></div>

<!-- ... одоо байгаа HTML ... -->
```

Бид энэ `<div>`-д онцгой `id` HTML аттрибут өгсөн. Энэ нь бидэнд үүнийг дараа JavaScript кодоос олж React компонентыг дотор нь харуулах боломжтой болгох юм.

>Зөвлөгөө
>
>`<div>` агуулагчыг `<body>` таг дотор хаана ч хамаагүй хүссэн хэсэгтээ байршуулна. Нэг хуудсан дотор өөрийн хэрэгцээндээ тааруулаад хэдэн ч DOM агуулагчтай байх боломжтой. Тэдгээр нь ихэнхдээ хоосон байх ба DOM агуулагчууд доторх байрлах ямар контентыг React дарах юм.

### Алхам 2: Script тагууд нэмэх {#step-2-add-the-script-tags}

Дараа нь гурван `<script>` таг HTML хуудсан дотор хаалтын `</body>` тагын яг өмнө оруулна:

```html{5,6,9}
  <!-- ... бусад HTML ... -->

  <!-- Load React. -->
  <!-- Тэмдэглэл: deploy хийхдээ "development.js"-г "production.min.js"-р солих хэрэгтэй. -->
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

  <!-- Load our React component. -->
  <script src="like_button.js"></script>

</body>
```

Эхний хоёр таг React-г дуудна. Гуравдах нь бол таны компонентыг дуудах юм.

### Алхам 3: React компонент үүсгэх {#step-3-create-a-react-component}

`like_button.js` нэртэй файл HTML файлын зэргэлдээ үүсгэнэ.

**[Энэ эхлэх кодыг](https://gist.github.com/gaearon/0b180827c190fe4fd98b4c7f570ea4a8/raw/b9157ce933c79a4559d2aa9ff3372668cce48de7/LikeButton.js)** нээгээд үүсгэсэн файл дотроо хуулж оруулна.

>Зөвлөгөө
>
>Энэ код `LikeButton` гэх React компонент зарлаж байгаа. Хэрвээ ойлгохгүй бол санаа зовох хэрэггүй [практик хичээл](/tutorial/tutorial.html) болон [үндсэн агуулгын заавар](/docs/hello-world.html) дээр React блокуудыг бүтээх талаар харах юм. Одоохондоо зүгээр үүнийг дэлгэцэн дээр харуулцгаая!

`like_button.js` дотор **[Эхлэх кодын](https://gist.github.com/gaearon/0b180827c190fe4fd98b4c7f570ea4a8/raw/b9157ce933c79a4559d2aa9ff3372668cce48de7/LikeButton.js)** ард 2 мөр нэмнэ:

```js{3,4}
// ... хуулж тавьсан эхлэх код ...

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
```

Энэ 2 мөр код нь бидний эхний алхамд HTML дотор нэмсэн `<div>`-г олоод "Like" React компонент товчыг түүн дотор харуулах юм.

### Ингээд болоо! {#thats-it}

Энд ямар ч алхам дөрөв байхгүй. **Та дөнгөж сая анхны React компонентыг өөрийн веб сайтдаа нэмчихлээ.**

Дараагийн хэсгийг React-г оруулах талаар нэмэлт зөвөлгөө авах зорилгоор үзээрэй.

**[Бүтэн жишээ кодыг харах](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605)**

**[Бүтэн жишээг татаж авах (2KB zipped)](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/f6c882b6ae18bde42dcf6fdb751aae93495a2275.zip)**

### Зөвлөгөө: Компонентыг дахин ашиглах {#tip-reuse-a-component}

Ихэнхдээ, React компонентыг HTML хуудсанд олон газар харуулхыг хүсэж болох юм. Энд жишээнд "Like" товчид хэсэг дата дамжуулаад гурван удаа харуулж байгаа жишээ байна:

[Бүтэн жишээ кодыг харах](https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda)

[Бүтэн жишээг татаж авах (2KB zipped)](https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda/archive/9d0dd0ee941fea05fd1357502e5aa348abb84c12.zip)

>Тэмдэглэл
>
>Энэ стратеги нь бие биеэсээ үл хамаарал бүхий React дээр суурилсан хуудсын хэсгүүдэд илүү тохиромжтой. React код дотор бол [нэгтгэсэн компонентыг](/docs/components-and-props.html#composing-components) ашиглах нь илүү хялбар.

### Зөвлөгөө: Production орчинд JavaScript-г багасгах {#tip-minify-javascript-for-production}

Production-руу веб сайтаа оруулхын өмнө багасгаагүй JavaScript нь хэрэглэгчидэд хуудас нь маш их удаан дуудагддагийг санаж байх хэрэгтэй.

Хэрвээ аппликешн скриптүүдээ хэзээний багасгасан мөн React хувилбараа HTML дотороо дуудахдаа `production.min.js`-р дууссаныг ашиглаж байгааг нягталсан бол таны сайт production-д бэлэн гэсэн үг:

```js
<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
```

Хэрвээ танд скриптүүдээ багасгах алхам баидаггүй бол [энд хийх нэг аргачлал байна](https://gist.github.com/gaearon/42a2ffa41b8319948f9be4076286e1f3).

## Заавал биш: React-г JSX-тэй турших {#optional-try-react-with-jsx}

Дээр дурдсан жишээнүүд зөвхөн броузеруудад шууд дэмжигддэг боломжуудад суурилсан. Энэ нь яагаад бид JavaScript функц дуудаж ашиглан React-г юу харуулах вэ гэдгийг хэлж байгаа шалтгаан юм:

```js
const e = React.createElement;

// Display a "Like" <button>
return e(
  'button',
  { onClick: () => this.setState({ liked: true }) },
  'Like'
);
```

Гэсэн хэдий ч React мөн [JSX](/docs/introducing-jsx.html) ашиглах боломжыг олгодог:

```js
// Display a "Like" <button>
return (
  <button onClick={() => this.setState({ liked: true })}>
    Like
  </button>
);
```

Эдгээд хоёр код нь хоорондоо ягаагүй. **JSX нь [заавал шаардлагатай биш]((/docs/react-without-jsx.html))** ч гэсэн олон хүмүүс үүнийг UI код бичхэд ашигтай гэж хардаг, React болон кодын санд аль альнд нь.

[Энэ онлайн хөрвүүлэгчээр](https://babeljs.io/en/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwIwrgLhD2B2AEcDCAbAlgYwNYF4DeAFAJTw4B88EAFmgM4B0tAphAMoQCGETBe86WJgBMAXJQBOYJvAC-RGWQBQ8FfAAyaQYuAB6cFDhkgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.4.3) JSX-г туршиж үзэх боломжтой.

### JSX-г түргэхэн турших {#quickly-try-jsx}

JSX-г өөрийн прожектдоо түргэхэн турших арга бол энэ `<script>` тагийг хуудсандаа нэмэх:

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

Одоо ямар ч `<script>` таг дотор `type="text/babel"` гэсэн аттрибут өгөөд JSX-г ашигаж болно. Энэ бол та татаж аваад туршиж үзэх боломжтой [JSX-тэй HTML файл жишээ](https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html).

Энэ аргачлал нь суралцах болон энгийн жишээ үүсгэхэд зүгээр юм. Гэхдээ энэ нь вебсайтыг удаашруулдаг тул production орчинд тохиромжгүй. Цааш явахад бэлэн болмогцоо энэ хүү `<script>` таг болон нэмсэн `type="text/babel"` аттрибутуудаа устгана. Оронд нь дараа хэсэгт `<script>` тагуудыг автоматаар хувиргадаг JSX уридчилан боловсоруулагчыг оруулна.

### JSX прожектдээ нэмэх {#add-jsx-to-a-project}

JSX прожектод нэмэх нь хөгжүүлэлтийн сервер эсвэл багцлагч зэрэг төвөгтэй багажууд шаардлаггүй. Үндсэндээ JSX нэмэх нь **CSS уридчилан боловсруулагч нэмж байгаатай маш төстэй.** Ганчан шаардлага нь [Node.js](https://nodejs.org/)-г төхөөрөмждөө суулгасан байх хэрэгтэй.

Прожектын хавтасруугаа терминалаас ороод эдгээр хоёр командыг хуулна:

1. **Алхам 1:** Ажиллуулах `npm init -y` (хэрвээ алдаа гарвал [энд засах арга](https://gist.github.com/gaearon/246f6380610e262f8a648e3e51cad40d))
2. **Алхам 2:** Ажиллуулах `npm install babel-cli@6 babel-preset-react-app@3`

>Зөвлөгөө
>
>Бид **энд npm-г зөвхөн JSX уридчилан боловсруулагч нэмхэд ашиглаж байгаа;** ба бусад зүйлс огт хэрэггүй юм. Үүний дараа React болон аппликейшн код хоёуул `<script>` таг дотроо ямар ч өөрчөлөлт шаадахгүй.

Баяр хүргэе! Та дөнгөж сая прожектдоо **production-д бэлэн JSX суулгац** оруулчихлаа.


### JSX уридчилан боловсруулагчыг ажиллуулах {#run-jsx-preprocessor}

`src` гэсэн нэртэй хавтас үүсгээд энэхүү терминал командыг ажиллуул:

```
npx babel --watch src --out-dir . --presets react-app/prod
```

>Тэмдэглэл
>
>`npx` бичгийн алдаа биш -- энэ нь [npm 5.2+ дээр нэмэгдсэн багц ажлуулах багаж](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).
>
>Хэрвээ "You have mistakenly installed the `babel` package" гэсэн алдаа гарч байвал та магадгүй [өмнөх алхамыг](#add-jsx-to-a-project) алгассан байх. Үүнийг ижил хавтасанд хийгээд дахин энэ командаа ажлуулаад үзээрэй.

Үүнийг дуусхыг хүлээх хэрэггүй -- Энэ команд нь JSX автомат шалгагчыг эхлүүлдэг.

Хэрвээ одоо та `src/like_button.js` гэсэн файл энэ **[JSX эхлэх кодтой](https://gist.github.com/gaearon/c8e112dc74ac44aac4f673f2c39d19d1/raw/09b951c86c1bf1116af741fa4664511f2f179f0a/like_button.js)** үүсгэх юм бол автомат шалгагч боловсоруулагдсан `like_button.js` гэдэг броузер дээр ажиллахад зориулагдсан цэвэр JavaScript код бүхий файл үүсгэх юм. JSX-тэй эх файлд өөрчөлөлт орох үед энэхүү хувиргагч дахин автоматаар ачааллана.

Бонусанд энд хийсэн зүйлс маань орчин үеийн JavaScript бичиглэлийн боломжууд болох class-уудыг хуучин броузерт эвдэрэхвий гэх айдасгүй ашиглах боломжтой болгож байгаа. Бидний нэмсэн `Babel` гэх багажын талаар илүү ихийг [өөрийн баримтжуулалтаас](https://babeljs.io/docs/en/babel-cli/) мэдэх боломжтой.

Хэрвээ та багцлах багажуудтай илүү ажиллахад амар санагдаж мөн тэдгээрийг илүү өргөн хүрээнд ашиглахыг хүсвэл [дараагийн хэсэгт](/docs/create-a-new-react-app.html) зарим түгээмэл болон ашиглахад дөхөм багажны цуцлуулгийн талаар тайлбарлах юм. Хэрвээ үгүй бол эдгээр скрипт тагууд нь асуудалгүй!
