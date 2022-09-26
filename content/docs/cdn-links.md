---
id: cdn-links
title: CDN линк
permalink: docs/cdn-links.html
prev: create-a-new-react-app.html
next: release-channels.html
---

React болон ReactDOM -ыг CDN ээс ашиглах боломжтой.

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

Дээрх хувилбарууд зѳвхѳн хѳгжүүлэлтэд зориулагдсан, жинхэнэ бүтээгдэхүүнд тохиромжгүй. Багасгасан бэлэн болсон хувилбарууд нь:

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```

<<<<<<< HEAD
Тодорхой хувилбар ашиглах бол `react` болон `react-dom` дээрх `17` гэснийг ѳѳрийн ашиглах хувилбараар солино.

=======
To load a specific version of `react` and `react-dom`, replace `18` with the version number.
>>>>>>> e3073b03a5b9eff4ef12998841b9e56120f37e26

### Why the `crossorigin` Attribute? {#why-the-crossorigin-attribute}

Хэрвээ React -ыг CDN -ээс ашиглаж байгаа бол, [`crossorigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) тохируулах хэрэгтэй:
```html
<script crossorigin src="..."></script>
```

Мѳн таны ашиглаж буй CDN нь `Access-Control-Allow-Origin: *` HTTP толгой ашиглаж байх шаардлагатай:

![Access-Control-Allow-Origin: *](../images/docs/cdn-cors-header.png)

Ингэснээр React 16 болон түүнээс хойшхи хувилбарууд [алдаа илрүүлэхэд](/blog/2017/07/26/error-handling-in-react-16.html) илүү ойлгомжтой болно.
