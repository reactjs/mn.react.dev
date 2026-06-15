---
title: Суулгах
---

<Intro>

React нь анхнаасаа хэрэглээнд алгуурхнаар нэвтрэх зорилгоор бүтээгдсэн бөгөөд та React-г их, бага хүссэн хэмжээгээрээ хэрэглэх боломжтой. Та React-г дөнгөж сонирхож байгаа эсэх, HTML хуудсаа интерактив болгох эсвэл React-дээр ажилдаг цогц програм хийхийг хүсэж байгаа бол энэхүү хэсэг танд туслах болно.

</Intro>

<<<<<<< HEAD
<YouWillLearn isChapter={true}>

* [Шинэ React прожект эхлүүлэх](/learn/start-a-new-react-project)
* [Одоо байгаа прожектдээ React нэмэх](/learn/add-react-to-an-existing-project)
* [Эдитороо тохируулах](/learn/editor-setup)
* [React Developer Tools суулгах](/learn/react-developer-tools)

</YouWillLearn>

## Оролдоод үз {/*try-react*/}
=======
## Try React {/*try-react*/}
>>>>>>> 6ec61348646040795fdaa9de14a9bec603260f87

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

<<<<<<< HEAD
Reacт гарын авлагын ихэнх хуудсанд дээрх шиг sandbox байна. React гарын авлагаас гадуур React-г дэмждэг зөндөө онлайн sandbox байдаг: жишээ нь [CodeSandbox](https://codesandbox.io/s/new), [StackBlitz](https://stackblitz.com/fork/react) болон [CodePen.](https://codepen.io/pen?&editors=0010&layout=left&prefill_data_id=3f4569d1-1b11-4bce-bd46-89090eed5ddb)

### Дотоод орчиндоо React турших {/*try-react-locally*/}
=======
Most pages in the React documentation contain sandboxes like this. Outside of the React documentation, there are many online sandboxes that support React: for example, [CodeSandbox](https://codesandbox.io/s/new), [StackBlitz](https://stackblitz.com/fork/react), or [CodePen.](https://codepen.io/pen?template=QWYVwWN)
>>>>>>> 6ec61348646040795fdaa9de14a9bec603260f87

React-г дотоод орчиндоо өөрийн компьютер дээрээ туршиж үзэхийг хүсвэл [энэхүү HTML хуудсыг татна уу.](https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html) Тэгээд өөрийн эдитор болон веб хөтөчдөө нээгээд үз! 

<<<<<<< HEAD
## Шинэ React прожект эхлүүлэх {/*start-a-new-react-project*/}

Хэрэв та React ашиглан шинэ апп эсвэл вебсайт бүтээхийг хүсвэл [шинэ React прожект эхлүүлээрэй.](/learn/start-a-new-react-project)
=======
## Creating a React App {/*creating-a-react-app*/}

If you want to start a new React app, you can [create a React app](/learn/creating-a-react-app) using a recommended framework.

## Build a React App from Scratch {/*build-a-react-app-from-scratch*/}

If a framework is not a good fit for your project, you prefer to build your own framework, or you just want to learn the basics of a React app you can [build a React app from scratch](/learn/build-a-react-app-from-scratch).
>>>>>>> 6ec61348646040795fdaa9de14a9bec603260f87

## Байгаа прожектдээ React нэмэх {/*add-react-to-an-existing-project*/}

<<<<<<< HEAD
Та React-г одоо байгаа апп эсвэл вебсайтдаа ашиглахыг хүсвэл [ одоо байгаа прожектдээ React-ийг нэмээрэй.](/learn/add-react-to-an-existing-project)
=======
If want to try using React in your existing app or a website, you can [add React to an existing project.](/learn/add-react-to-an-existing-project)


<Note>

#### Should I use Create React App? {/*should-i-use-create-react-app*/}

No. Create React App has been deprecated. For more information, see [Sunsetting Create React App](/blog/2025/02/14/sunsetting-create-react-app).

</Note>
>>>>>>> 6ec61348646040795fdaa9de14a9bec603260f87

## Дараагийн алхам {/*next-steps*/}

[Хурдан Эхлэх](/learn) хэсэгрүү очиж өдөр бүр тааралддаг хамгийн чухал React-ийн ойлголтуудтай танилцаарай.