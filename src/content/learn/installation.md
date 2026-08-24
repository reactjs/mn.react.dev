---
title: Суулгах
---

<Intro>

React нь анхнаасаа хэрэглээнд алгуурхнаар нэвтрэх зорилгоор бүтээгдсэн бөгөөд та React-г их, бага хүссэн хэмжээгээрээ хэрэглэх боломжтой. Та React-г дөнгөж сонирхож байгаа эсэх, HTML хуудсаа интерактив болгох эсвэл React-дээр ажилдаг цогц програм хийхийг хүсэж байгаа бол энэхүү хэсэг танд туслах болно.

</Intro>

## Оролдоод үз {/*try-react*/}

Та React-г туршиж үзэхэд юу ч суулгах шаардлагагүй. Доорх sandbox-ыг өөрчлөөд үз!

<Sandpack>

```js
function Greeting({ name }) {
  return <h1>Сайн байна уу, {name}</h1>;
}

export default function App() {
  return <Greeting name="Ертөнц минь" />
}
```

</Sandpack>

Дээрх кодыг шууд засварлах боломжтой ба баруун дээд булан дахь "Fork" товчлуурыг дарж шинэ тааб-нд нээж болно.

Reacт гарын авлагын ихэнх хуудсанд дээрх шиг sandbox байна. React гарын авлагаас гадуур React-г дэмждэг зөндөө онлайн sandbox байдаг: жишээ нь [CodeSandbox](https://codesandbox.io/s/new), [StackBlitz](https://stackblitz.com/fork/react) болон [CodePen.](https://codepen.io/pen?template=QWYVwWN)

### Дотоод орчиндоо React турших {/*try-react-locally*/}

React-г дотоод орчиндоо өөрийн компьютер дээрээ туршиж үзэхийг хүсвэл [энэхүү HTML хуудсыг татна уу.](https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html) Тэгээд өөрийн эдитор болон веб хөтөчдөө нээгээд үз!

## React апп үүсгэх {/*creating-a-react-app*/}

Хэрэв та шинэ React апп бүтээхийг хүсвэл санал болгосон фреймворк ашиглан [React апп үүсгэж](/learn/creating-a-react-app) болно.

## React аппыг эхнээс нь бүтээх {/*build-a-react-app-from-scratch*/}

Хэрэв фреймворк таны төсөлд тохирохгүй, өөрийн фреймворкийг бүтээхийг хүсэж байгаа эсвэл React аппын үндсийг сурахыг хүсвэл [React аппыг эхнээс нь бүтээж](/learn/build-a-react-app-from-scratch) болно.

## Байгаа прожектдээ React нэмэх {/*add-react-to-an-existing-project*/}

Та React-г одоо байгаа апп эсвэл вебсайтдаа ашиглахыг хүсвэл [ одоо байгаа прожектдээ React-ийг нэмээрэй.](/learn/add-react-to-an-existing-project)


<Note>

#### Create React App ашиглах хэрэгтэй юу? {/*should-i-use-create-react-app*/}

Үгүй. Create React App хуучирсан тул ашиглах шаардлагагүй. Илүү дэлгэрэнгүй мэдээллийг [Sunsetting Create React App](/blog/2025/02/14/sunsetting-create-react-app) нийтлэлээс үзнэ үү.

</Note>

## Дараагийн алхам {/*next-steps*/}

[Хурдан Эхлэх](/learn) хэсэгрүү очиж өдөр бүр тааралддаг хамгийн чухал React-ийн ойлголтуудтай танилцаарай.
