---
title: Суулгах
---

<Intro>

React нь анхнаасаа хэрэглээнд алгуурхнаар нэвтрэх зорилгоор бүтээгдсэн бөгөөд та React-г их, бага хүссэн хэмжээгээрээ хэрэглэх боломжтой. Та React-г дөнгөж сонирхож байгаа эсэх, HTML хуудсаа интерактив болгох эсвэл React-дээр ажилдаг цогц програм хийхийг хүсэж байгаа бол энэхүү хэсэг танд туслах болно.

</Intro>

<YouWillLearn isChapter={true}>

* [Шинэ React прожект эхлүүлэх](/learn/start-a-new-react-project)
* [Одоо байгаа прожектдээ React нэмэх](/learn/add-react-to-an-existing-project)
* [Эдитороо тохируулах](/learn/editor-setup)
* [React Developer Tools суулгах](/learn/react-developer-tools)

</YouWillLearn>

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

Reacт гарын авлагын ихэнх хуудсанд дээрх шиг sandbox байна. React гарын авлагаас гадуур React-г дэмждэг зөндөө онлайн sandbox байдаг: жишээ нь [CodeSandbox](https://codesandbox.io/s/new), [StackBlitz](https://stackblitz.com/fork/react) болон [CodePen.](https://codepen.io/pen?&editors=0010&layout=left&prefill_data_id=3f4569d1-1b11-4bce-bd46-89090eed5ddb)

### Дотоод орчиндоо React турших {/*try-react-locally*/}

React-г дотоод орчиндоо өөрийн компьютер дээрээ туршиж үзэхийг хүсвэл [энэхүү HTML хуудсыг татна уу.](https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html) Тэгээд өөрийн эдитор болон веб хөтөчдөө нээгээд үз! 

## Шинэ React прожект эхлүүлэх {/*start-a-new-react-project*/}

Хэрэв та React ашиглан шинэ апп эсвэл вебсайт бүтээхийг хүсвэл [шинэ React прожект эхлүүлээрэй.](/learn/start-a-new-react-project)

## Байгаа прожектдээ React нэмэх {/*add-react-to-an-existing-project*/}

Та React-г одоо байгаа апп эсвэл вебсайтдаа ашиглахыг хүсвэл [ одоо байгаа прожектдээ React-ийг нэмээрэй.](/learn/add-react-to-an-existing-project)

## Дараагийн алхам {/*next-steps*/}

[Хурдан Эхлэх](/learn) хэсэгрүү очиж өдөр бүр тааралддаг хамгийн чухал React-ийн ойлголтуудтай танилцаарай.