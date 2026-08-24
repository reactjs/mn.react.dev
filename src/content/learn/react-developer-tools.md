---
title: React Хөгжүүлэгчийн хэрэгсэл
---

<Intro>

React Хөгжүүлэгчийн хэрэгслийг ашиглан [component](/learn/your-first-component)-үүдийг хянах, [props](/learn/passing-props-to-a-component) болон [state](/learn/state-a-components-memory)-үүдийг засварлах, гүйцэтгэлийн асуудлуудыг тодорхойлох боломжтой.

</Intro>

<YouWillLearn>

* React Хөгжүүлэгчийн хэрэгслийг хэрхэн суулгах талаар

</YouWillLearn>

## Вэб хөтчийн өргөтгөл {/*browser-extension*/}

React ашиглан бүтсэн вэб сайтуудыг дибаг хийх хамгийн хялбар арга бол React Хөгжүүлэгчийн хэрэгсэл өргөтгөлийг суулгах явдал юм. Үүнийг та хэд хэдэн түгээмэл ашиглагддаг вэб хөтчүүд дээр ашиглах боломжтой:

* [**Chrome**-д суулгах](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
* [**Firefox**-д суулгах](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
* [**Edge**-д суулгах](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

Суулгасны дараагаар, хэрэв та **React ашиглан бүтсэн** вэб сайтад зочилбол _Components_ болон _Profiler_ самбаруудыг харах болно.

![React Developer Tools extension](/images/docs/react-devtools-extension.png)

### Safari болон бусад хөтчүүд {/*safari-and-other-browsers*/}
Бусад хөтчүүдийн хувьд (жишээ нь Safari) [`react-devtools`](https://www.npmjs.com/package/react-devtools) npm package суулгана уу:
```bash
# Yarn
yarn global add react-devtools

# Npm
npm install -g react-devtools
```

Дараа нь терминалаас хөгжүүлэгчийн хэрэгслийг нээнэ үү:
```bash
react-devtools
```

Дараа нь вэб сайтынхаа `<head>`-ийн эхэнд дараах `<script>` тагийг нэмж вэб сайтаа холбоно уу:
```html {3}
<html>
  <head>
    <script src="http://localhost:8097"></script>
```

Одоо харин хөгжүүлэгчийн хэрэгслээр үзэхийн тулд вэб сайтаа хөтөч дээр дахин ачаална уу.

![React Developer Tools standalone](/images/docs/react-devtools-standalone.png)

## Mobile (React Native) {/*mobile-react-native*/}

[React Native](https://reactnative.dev/) ашиглан бүтээсэн аппуудыг шалгахын тулд React Developer Tools-тэй гүнзгий уялдсан суурилагдсан debugger болох [React Native DevTools](https://reactnative.dev/docs/react-native-devtools)-ийг ашиглаж болно. Native элементийг тодруулах болон сонгох зэрэг бүх боломж нь browser extension-тэй ижил ажиллана.

[React Native дээр debugging хийх талаар дэлгэрэнгүй уншина уу.](https://reactnative.dev/docs/debugging)

> React Native-ийн 0.76-аас өмнөх хувилбаруудад дээрх [Safari болон бусад browser](#safari-and-other-browsers) зааврыг дагаж React DevTools-ийн standalone хувилбарыг ашиглана уу.
