---
id: add-react-to-a-website
title: React-г веб сайтдаа нэмэх
permalink: docs/add-react-to-a-website.html
redirect_from:
  - "docs/add-react-to-an-existing-app.html"
prev: getting-started.html
next: create-a-new-react-app.html
---

React-г их, бага хүссэн хэмжээгээрээ хэрэглэ.

React нь анхнаасаа аажмаар хэрэглээнд оруулахад зориулагдсан ба их, **бага гэхгүй та хүссэн хэмжээгээрээ хэрэглэж болно**. Магадгүй та зөвхөн хэсэгхэн харилцан үйлчлэл бүхий зүйл одоо байгаа хуудсандаа оруулахыг хүсэж болно. React компонентууд түүнийг хийхэд маш тохиромжтой.

Веб сайтуудын дийлэнх нь single-page app биш эсвэл байх шаардлагагүй. **Цөөн хэдэн мөр код болон build багажгүй** React-г өөрийн вебсайтын жижигхэн хэсэгт туршиж үзээрэй. Та цаашид хэрэглээгээ алгуурхан нэмээд явж болно эсвэл цөөн динамик виджет-д хянаад явах ч боломжтой.

---

- [React-г нэг минутад оруулах](#add-react-in-one-minute)
- [Заавал биш: React-г JSX-тэй турших](#optional-try-react-with-jsx) (багцлах шаардлагагүй!)

## React-г нэг минутад оруулах {#add-react-in-one-minute}

Энэ хэсэгт React компонентыг хэрхэн одоо байгаа HTML-г хуудсанд нэмэхийг харуулна. Өөрийн веб сайт дээрээ буулгаад явах эсвэл шинээр хоосон HTML файл үүсгээд практик хийсэн ч болно.

**Энэ хэсгийг хийж дуусгахад** ямар нэг төвөгтэй багаж эсвэл шаардлагатай суулгац огт хэрэггүй, **зөвхөн интернет холболт болон өөрийн цагаас нэг минут байхад л хангалттай.**

<<<<<<< HEAD
Заавал биш: [Бүтэн жишээг татаж авах (2KB zipped)](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/f6c882b6ae18bde42dcf6fdb751aae93495a2275.zip)
=======
Optional: [Download the full example (2KB zipped)](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/87f0b6f34238595b44308acfb86df6ea43669c08.zip)
>>>>>>> e50e5634cca3c7cdb92c28666220fe3b61e9aa30

### Алхам 1: HTML дотор DOM агуулагч нэмэх {#step-1-add-a-dom-container-to-the-html}

Эхлээд засах гэж буй HTML хуудсаа нээнэ. React-р харуулах гэж байгаа хэсгээ тэмдэглэх зорилгоор хоосон `<div>` таг нэмнэ. Жишээ нь:

```html{3}
<!-- ... одоо байгаа HTML ... -->

<div id="like_button_container"></div>

<!-- ... одоо байгаа HTML ... -->
```

Бид энэ `<div>`-д онцгой `id` HTML аттрибут өгсөн. Энэ нь бидэнд үүнийг дараа JavaScript кодоос олж React компонентыг дотор нь харуулах боломжтой болгох юм.

>Зөвлөгөө
>
>`<div>` агуулагчийг `<body>` таг дотор хаана ч хамаагүй хүссэн хэсэгтээ байршуулна. Нэг хуудсан дотор өөрийн хэрэгцээндээ тааруулаад хэдэн ч DOM агуулагчтай байх боломжтой. Тэдгээр нь ихэнхдээ хоосон байх ба DOM агуулагчууд доторх байрлах ямар контентыг React дарах юм.

### Алхам 2: Script тагууд нэмэх {#step-2-add-the-script-tags}

Дараа нь гурван `<script>` таг HTML хуудсан дотор хаалтын `</body>` таг-н яг өмнө оруулна:

```html{5,6,9}
  <!-- ... бусад HTML ... -->
  <!-- Load React. -->
<<<<<<< HEAD
  <!-- Тэмдэглэл: deploy хийхдээ "development.js"-г "production.min.js"-р солих хэрэгтэй. -->
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
=======
  <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
>>>>>>> e50e5634cca3c7cdb92c28666220fe3b61e9aa30


  <!-- Load our React component. -->
  <script src="like_button.js"></script>

</body>
```

Эхний хоёр таг React-г дуудна. Гуравт нь бол таны компонентыг дуудах юм.

### Алхам 3: React компонент үүсгэх {#step-3-create-a-react-component}

`like_button.js` нэртэй файл HTML файлын зэргэлдээ үүсгэнэ.

**[Энэ эхлэх кодыг](https://gist.github.com/gaearon/0b180827c190fe4fd98b4c7f570ea4a8/raw/b9157ce933c79a4559d2aa9ff3372668cce48de7/LikeButton.js)** нээгээд үүсгэсэн файл дотроо хуулж оруулна.

>Зөвлөгөө
>
>Энэ код `LikeButton` гэх React компонент зарлаж байгаа. Хэрвээ ойлгохгүй бол санаа зовох хэрэггүй [практик хичээл](/tutorial/tutorial.html) болон [үндсэн агуулгын заавар](/docs/hello-world.html) дээр React блокуудыг бүтээх талаар харах юм. Одоохондоо зүгээр үүнийг дэлгэцэн дээр харуулцгаая!

<<<<<<< HEAD
`like_button.js` дотор **[Эхлэх кодын](https://gist.github.com/gaearon/0b180827c190fe4fd98b4c7f570ea4a8/raw/b9157ce933c79a4559d2aa9ff3372668cce48de7/LikeButton.js)** ард 2 мөр нэмнэ:

```js{3,4}
// ... хуулж тавьсан эхлэх код ...
=======
After **[the starter code](https://gist.github.com/gaearon/0b180827c190fe4fd98b4c7f570ea4a8/raw/b9157ce933c79a4559d2aa9ff3372668cce48de7/LikeButton.js)**, add three lines to the bottom of `like_button.js`:

```js{3,4,5}
// ... the starter code you pasted ...
>>>>>>> e50e5634cca3c7cdb92c28666220fe3b61e9aa30

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
```

<<<<<<< HEAD
Энэ 2 мөр код нь бидний эхний алхамд HTML дотор нэмсэн `<div>`-г олоод "Like" React компонент товчыг түүн дотор харуулах юм.
=======
These three lines of code find the `<div>` we added to our HTML in the first step, create a React app with it, and then display our "Like" button React component inside of it.
>>>>>>> e50e5634cca3c7cdb92c28666220fe3b61e9aa30

### Ингээд болоо! {#thats-it}

Энд ямар ч алхам дөрөв байхгүй. **Та дөнгөж сая анхны React компонентыг өөрийн веб сайтдаа нэмчихлээ.**

Дараагийн хэсгийг React-г оруулах талаар нэмэлт зөвлөгөө авах зорилгоор үзээрэй.

**[Бүтэн жишээ кодыг харах](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605)**

<<<<<<< HEAD
**[Бүтэн жишээг татаж авах (2KB zipped)](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/f6c882b6ae18bde42dcf6fdb751aae93495a2275.zip)**
=======
**[Download the full example (2KB zipped)](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/87f0b6f34238595b44308acfb86df6ea43669c08.zip)**
>>>>>>> e50e5634cca3c7cdb92c28666220fe3b61e9aa30

### Зөвлөгөө: Компонентыг дахин ашиглах {#tip-reuse-a-component}

Ихэнхдээ, React компонентыг HTML хуудсанд олон газар харуулахыг хүсэж болох юм. Энд жишээнд "Like" товчид хэсэг дата дамжуулаад гурван удаа харуулж байгаа жишээ байна:

[Бүтэн жишээ кодыг харах](https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda)

<<<<<<< HEAD
[Бүтэн жишээг татаж авах (2KB zipped)](https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda/archive/9d0dd0ee941fea05fd1357502e5aa348abb84c12.zip)
=======
[Download the full example (2KB zipped)](https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda/archive/279839cb9891bd41802ebebc5365e9dec08eeb9f.zip)
>>>>>>> e50e5634cca3c7cdb92c28666220fe3b61e9aa30

>Тэмдэглэл
>
>Энэ стратеги нь бие биеэсээ үл хамаарал бүхий React дээр суурилсан хуудсын хэсгүүдэд илүү тохиромжтой. React код дотор бол [нэгтгэсэн компонентыг](/docs/components-and-props.html#composing-components) ашиглах нь илүү хялбар.

### Зөвлөгөө: Production орчинд JavaScript-г багасгах {#tip-minify-javascript-for-production}

Production-руу веб сайтаа оруулахын өмнө багасгаагүй JavaScript нь хэрэглэгчдэд хуудас нь маш их удаан дуудагддагийг санаж байх хэрэгтэй.

Хэрвээ аппликешн скриптүүдээ хэзээний багасгасан мөн React хувилбараа HTML дотроо дуудахдаа `production.min.js`-р дууссаныг ашиглаж байгааг нягталсан бол таны сайт production-д бэлэн гэсэн үг:

```js
<script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
```

Хэрвээ танд скриптүүдээ багасгах алхам байдаггүй бол [энд хийх нэг аргачлал байна](https://gist.github.com/gaearon/42a2ffa41b8319948f9be4076286e1f3).

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

Гэсэн хэдий ч React мөн [JSX](/docs/introducing-jsx.html) ашиглах боломжийг олгодог:

```js
// Display a "Like" <button>
return (
  <button onClick={() => this.setState({ liked: true })}>
    Like
  </button>
);
```

Эдгээд хоёр код нь хоорондоо ялгаагүй. **JSX нь [заавал шаардлагатай биш]((/docs/react-without-jsx.html))** ч гэсэн олон хүмүүс үүнийг UI код бичихэд ашигтай гэж хардаг, React болон кодын санд аль алинд нь.

<<<<<<< HEAD
[Энэ онлайн хөрвүүлэгчээр](https://babeljs.io/en/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwIwrgLhD2B2AEcDCAbAlgYwNYF4DeAFAJTw4B88EAFmgM4B0tAphAMoQCGETBe86WJgBMAXJQBOYJvAC-RGWQBQ8FfAAyaQYuAB6cFDhkgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.4.3) JSX-г туршиж үзэх боломжтой.
=======
You can play with JSX using [this online converter](https://babeljs.io/en/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwIwrgLhD2B2AEcDCAbAlgYwNYF4DeAFAJTw4B88EAFmgM4B0tAphAMoQCGETBe86WJgBMAXJQBOYJvAC-RGWQBQ8FfAAyaQYuAB6cFDhkgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.15.7).
>>>>>>> e50e5634cca3c7cdb92c28666220fe3b61e9aa30

### JSX-г гялс турших {#quickly-try-jsx}

JSX-г өөрийн прожектдоо гялс турших арга бол энэ `<script>` тагийг хуудсандаа нэмэх:

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

Одоо ямар ч `<script>` таг дотор `type="text/babel"` гэсэн аттрибут өгөөд JSX-г ашиглаж болно. Энэ бол та татаж аваад туршиж үзэх боломжтой [JSX-тэй HTML файл жишээ](https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html).

Энэ аргачлал нь суралцах болон энгийн жишээ үүсгэхэд зүгээр юм. Гэхдээ энэ нь вебсайтыг удаашруулдаг тул production орчинд тохиромжгүй. Цааш явахад бэлэн болмогцоо энэ хүү `<script>` таг болон нэмсэн `type="text/babel"` аттрибутуудаа устгана. Оронд нь дараа хэсэгт `<script>` тагуудыг автоматаар хувиргадаг JSX урьдчилан боловсруулагчыг оруулна.

### JSX прожектдээ нэмэх {#add-jsx-to-a-project}

JSX прожектод нэмэх нь хөгжүүлэлтийн сервер эсвэл багцлагч зэрэг төвөгтэй багажууд шаардлагагүй. Үндсэндээ JSX нэмэх нь **CSS урьдчилан боловсруулагч нэмж байгаатай маш төстэй.** Ганц шаардлага нь [Node.js](https://nodejs.org/)-г төхөөрөмждөө суулгасан байх хэрэгтэй.

Прожектын хавтасруугаа терминалаас ороод эдгээр хоёр командыг хуулна:

1. **Алхам 1:** Ажиллуулах `npm init -y` (хэрвээ алдаа гарвал [энд засах арга](https://gist.github.com/gaearon/246f6380610e262f8a648e3e51cad40d))
2. **Алхам 2:** Ажиллуулах `npm install babel-cli@6 babel-preset-react-app@3`

>Зөвлөгөө
>
>Бид **энд npm-г зөвхөн JSX урьдчилан боловсруулагч нэмэхэд ашиглаж байгаа;** ба бусад зүйлс огт хэрэггүй юм. Үүний дараа React болон аппликейшн код хоёул `<script>` таг дотроо ямар ч ѳѳрчлѳлт шаардахгүй.

Баяр хүргэе! Та дөнгөж сая прожектдоо **production-д бэлэн JSX суулгац** оруулчихлаа.


### JSX урьдчилан боловсруулагчыг ажиллуулах {#run-jsx-preprocessor}

`src` гэсэн нэртэй хавтас үүсгээд энэхүү терминал командыг ажиллуул:

```console
npx babel --watch src --out-dir . --presets react-app/prod
```

>Тэмдэглэл
>
>`npx` бичгийн алдаа биш -- энэ нь [npm 5.2+ дээр нэмэгдсэн багц ажиллуулах багаж](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).
>
>Хэрвээ "You have mistakenly installed the `babel` package" гэсэн алдаа гарч байвал та магадгүй [өмнөх алхмыг](#add-jsx-to-a-project) алгассан байх. Үүнийг ижил хавтсанд хийгээд дахин энэ командаа ажиллуулаад үзээрэй.

Үүнийг дуусахыг хүлээх хэрэггүй -- Энэ команд нь JSX автомат шалгагчийг эхлүүлдэг.

Хэрвээ одоо та `src/like_button.js` гэсэн файл энэ **[JSX эхлэх кодтой](https://gist.github.com/gaearon/c8e112dc74ac44aac4f673f2c39d19d1/raw/09b951c86c1bf1116af741fa4664511f2f179f0a/like_button.js)** үүсгэх юм бол автомат шалгагч боловсруулагдсан `like_button.js` гэдэг броузер дээр ажиллахад зориулагдсан цэвэр JavaScript код бүхий файл үүсгэх юм. JSX-тэй эх файлд өөрчлөлт орох үед энэхүү хувиргагч дахин автоматаар ачаалагдана.

Бонусанд энд хийсэн зүйлс маань орчин үеийн JavaScript бичиглэлийн боломжууд болох class-уудыг хуучин броузерт эвдрэх байх гэх айдасгүй ашиглах боломжтой болгож байгаа. Бидний нэмсэн `Babel` гэх багажны талаар илүү ихийг [өөрийн баримтжуулалтаас](https://babeljs.io/docs/en/babel-cli/) мэдэх боломжтой.

Хэрвээ та багцлах багажуудтай илүү ажиллахад амар санагдаж мөн тэдгээрийг илүү өргөн хүрээнд ашиглахыг хүсвэл [дараагийн хэсэгт](/docs/create-a-new-react-app.html) зарим түгээмэл болон ашиглахад дөхөм багажны цуглуулгын талаар тайлбарлах юм. Хэрвээ үгүй бол эдгээр скрипт тагууд нь асуудалгүй!
