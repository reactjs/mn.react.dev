---
id: create-a-new-react-app
title: React апп үүсгэх
permalink: docs/create-a-new-react-app.html
redirect_from:
  - "docs/add-react-to-a-new-app.html"
prev: add-react-to-a-website.html
next: cdn-links.html
---

Цогц хэрэгслүүрүүдийг хэрэглэгч болон хөгжүүлэгчдийн хялбар хэрэглээнд зориулж ашиглана.

Энэ хуудас доорх ажлуулдад тус болох цөөн хэдэн түгээмэл React цогц хэрэглүүрүүдийг тайлбарласан:

* Олон файлууд болон компонентууд болгон томрох.
* Гуравдагч талын сангуудыг npm-с ашиглах.
* Нийтлэг алдааг эрт илрүүлэх.
* Хөгжүүлэлтийн явцад CSS, JS файлуудыг шууд тусгаж засах.
* Гаралтыг production орчинд тохируулах.

Энэ хуудсанд санал болгогдож буй хэрэгслүүрүүд нь **хэрэглэж эхлэхэд ямар нэг тохиргоо шаардахгүй**.

## Чамд цогц хэрэглүүрүүд хэрэггүй байж мэдэх юм {#you-might-not-need-a-toolchain}

Хэрвээ дээр тайлбарласан асуудлуудтай тулгарч байгаагүй болон JavaScript-н хэрэглүүрүүдтэй хараахан дадаагүй байвал, [React-г цул `<script>` тагаар HTML хуудсанд оруулах](/docs/add-react-to-a-website.html) талаар сонирхоорой, нэмэлтээр [JSX-тэй хамт](/docs/add-react-to-a-website.html#optional-try-react-with-jsx).

Энэ нь мөн **одоо байгаа веб сайтдаа React-г оруулах хамгийн энгийн арга юм.** Хэрвээ хэрэгцээтэй гэвэл, хэзээ ч томоохон цогц хэрэглүүр нэмж болно!

## Санал болгож буй цогц хэрэглүүрүүд {#recommended-toolchains}

React баг үндсэндээ эдгээр шийдлүүдийг санал болгодог:

- Хэрвээ **react сурч байвал** эсвэл **шинэ [single-page](/docs/glossary.html#single-page-application) апп үүсгэх бол,** [React апп үүсгэх](#create-react-app)-г ашиглаарай.
- Хэрвээ **Node.js-тэй сервер талын рендертэй веб сайт** хийж байвал, [Next.js](#nextjs)-г туршаарай.
- Хэрвээ **статик контентэд тулгуурласан веб сайт** хийж байвал, [Gatsby](#gatsby)-г туршаад үзээрэй.
- Хэрвээ **компонент сан бүтээх** эсвэл **өмнөх кодтойгоо нэгтгэх** гэж байгаа бол, [Илүү уян цогц хэрэглүүрүүд](#more-flexible-toolchains) туршаарай.

### React апп бүтээх {#create-react-app}

[Create React App](https://github.com/facebookincubator/create-react-app) бол **React сурaхад* хамгийн тохиромжтой орчин ба React дээр **шинээр [single-page](/docs/glossary.html#single-page-application) апп** бүтээхэд хамгийн шилдэг арга юм.

<<<<<<< HEAD
Та [Node >= 14.0.0 болон npm >= 5.6](https://nodejs.org/en/) компьютертээ суулгах шаардлагатай. Create React App нь JavaScript-ын хамгийн сүүлийн үеийн боломжуудыг ашиглах боломжтой хѳгжүүлэлтийн орчин бүрдүүлж ѳгѳхѳѳс гадна, хэрэглэгчид хүрэх үед нэмэлт сайжруулалтуудыг автоматаар хийдэг. Тѳсѳл үүсгэхдээ*:
=======
It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have [Node >= 14.0.0 and npm >= 5.6](https://nodejs.org/en/) on your machine. To create a project, run:
>>>>>>> d483aebbac6d3c8f059b52abf21240bc91d0b96e

```bash
npx create-react-app my-app
cd my-app
npm start
```

>Тэмдэлгэл
>
>Эхний мөрөнд байгаа `npx` нь алдаатай бичиглэл биш -- энэ нь [npm 5.2+ дээр нэмэгдсэн package ажлуулах багаж юм](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).

React апп үүсгэх нь backend-н логик эсвэл дата баазыг хариуцдаггүй. Энэ нь зөвхөн frontend бүтээх орчинг бэлдэж өгдөг, тиймээс үүнийг хүссэн backend-тэйгээ ашиглах боломжтой юм. [Babel](https://babeljs.io/) болон [webpack](https://webpack.js.org/)-г ашиглаж ажилладаг бөгөөд эдгээрийн талаар заавал мэдээд байх шаардлага байхгүй.

Production-уу оруулахдаа бэлэн болход, `npm run build`-г ашигласнаар апп-н тань бэлдсэн хувилбар `build` гэсэн фолдерт үүсгэнэ. React апп үүсгэх талаар илүү ихийг [түүний README](https://github.com/facebookincubator/create-react-app#create-react-app--) болон [хэрэглэгчийн заавараас](https://facebook.github.io/create-react-app/) мэдэж болно.

### Next.js {#nextjs}

[Next.js](https://nextjs.org/) бол **статик болон сервер талын рендертэй апп** React-р бүтээхэд зориулсан түгээмэл, хөнгөн фраймворк юм. Энэ нь **загвар оруулах болон холбоосын шийдлийг** агуулсан бөгөөд [Node.js](https://nodejs.org/)-г сервер талдаа ашиглаж байгаа гэж үзнэ.

Next.js-г [түүний албан ёсны заавараас](https://nextjs.org/learn/) мэдэж болно.

### Gatsby {#gatsby}

[Gatsby](https://www.gatsbyjs.org/) бол React-р **статик веб сайт бүтээхэд** хамгийн тохиромжтой. React компонентууд ашиглах ч уридчилан рендерлэсэн HTML, CSS файлууд үүсдэг нь баталгаатай хамгийн бага унших хугацаатай нь.

Gatsby-н талаар [түүний албан ёсны заавараас](https://www.gatsbyjs.org/docs/) болон [эхлэх багцуудын үзээлэнгээс](https://www.gatsbyjs.org/docs/gatsby-starters/) мэдэх боломжтой.

### Илүү уян цогц хэрэгслүүрүүд {#more-flexible-toolchains}

Дараах цогц хэрэглүүрүүд нь илүү уян өбөгөд олон сонголттой юм. Бид эдгээрийг илүү туршлагажсан хөгжүүлэгчидэд санал болгож байна:

- **[Neutrino](https://neutrinojs.org/)** нь [webpack](https://webpack.js.org/)-н хүчийг хялбарчилсан бэлдэцүүдтэй холбодог ба [React апп-ууд](https://neutrinojs.org/packages/react/) болон [React компонентууд](https://neutrinojs.org/packages/react-components/) гэсэн бэлдэцүүд багтана.

- **[nwb](https://github.com/insin/nwb)** бол [React компонентуудыг npm-р оруулхад](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#developing-react-components-and-libraries-with-nwb) голчилон зориулсагдсан. Үүнийг мөн React app хийхэд [хэрэглэж болно](https://github.com/insin/nwb/blob/master/docs/guides/ReactApps.md#developing-react-apps-with-nwb).

<<<<<<< HEAD
- **[Parcel](https://parceljs.org/)** [React-тай ажилладаг](https://parceljs.org/recipes.html#react) хурдан, тохиргоогүй ажиллах веб апп багцлагч юм.
=======
- **[Parcel](https://parceljs.org/)** is a fast, zero configuration web application bundler that [works with React](https://parceljs.org/recipes/react/).
>>>>>>> d483aebbac6d3c8f059b52abf21240bc91d0b96e

- **[Razzle](https://github.com/jaredpalmer/razzle)** ямар ч тохиргоо шаардлагагүй сервер талын рендер хийх фраймворк бөгөөд Next.js-с илүү уян байдлыг санал болгодог.

## Цогц хэрэгслүүрүүдийг эхнээс нь хийх {#creating-a-toolchain-from-scratch}

Javascript үүсгэх цогц багаж үндсэндээ эдгээрээс бүрддэг:

* **package manager** [Yarn](https://yarnpkg.com/) эсвэл [npm](https://www.npmjs.com/) шиг. Энэ нь маш том гуравдагч package-уудын экосистем-н давуу талыг авч, тэдгээрийг хялбар суулгаж, шинэчилхэд тусална.

* **bundler**, [webpack](https://webpack.js.org/) эсвэл [Parcel](https://parceljs.org/) шиг. Модулар код бичхэд туслах ба тэдгээрийг жижиг package болгон нэгтгэж унших хугацааг багасгахад хэрэглэгдэнэ.

* **compiler** жишээ нь [Babel](https://babeljs.io/). Энэ javascript-н шинэ боломжуудыг ашиглаж код бичихийн зэрэгцээ хуучин броузер дээр ажилах боломж олгодог.

Хэрвээ өөрийн Javascript цогц багжыг эхнээс нь үүсгэхийг илүүд үзэж байвал, React апп үүсгэх-н зарим функцуудыг дахин хийсэн [энэ зааврыг тушаарай](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658).

Өөрийн цогц багажаа [production орчинд зөв суурилагдсан гэдгээ](/docs/optimizing-performance.html#use-the-production-build) шалгаж үзхээ битгий мартаарай
