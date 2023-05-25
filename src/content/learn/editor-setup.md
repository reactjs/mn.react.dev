---
title: Editor тохируулах
---

<Intro>

Зөв тохиргоо хийсэн editor кодыг уншихад амар, бичихэд хурдан болгоно. Мөн таныг код бичиж байхад үед алдаа илрүүлэхэд тусална! Хэрвээ та анх удаа editor тохируулж байгаа бол, та одоо байгаа editor-ийнхээ тохиргоог зүгшрүүлэх гэж байгаа бол танд доорх зөвлөмжийг хүргэж байна. 

</Intro>

<YouWillLearn>

* Хамгийн түгээмэл editor-ууд
* Яаж кодоо автоматаар форматлах вэ?

</YouWillLearn>

## Бидний editor {/*your-editor*/}

[VS Code](https://code.visualstudio.com/) бол өнөө үед хамгийн түгээмэл ашиглагддаг editor-уудын нэг юм. VS Code нь  Github шиг олон төрлийн extension-уудыг marketplace-с татаж авч нэмэлтаар суулгах боломжтой. Доор дурдсан ихэнх боломжуудыг extension байдлаар суулгах боломжтой байдаг нь VS Code-ыг хамгийн уян хатан хэрэгсэл болгодог. 

React нэгдлийн хүмүүст түгээмэл ашиглагддаг бусад текст editor-ууд:

* [WebStorm](https://www.jetbrains.com/webstorm/) бол JavaScript зориулсан цогц хөгжүүлэлтийн орчин. 
* [Sublime Text](https://www.sublimetext.com/) нь JSX болон TypeScript хэлийг дэмждэг бөгөөд өөр дээр шууд (төрмөл) байдлаар [кодын бичиглэл тодруулж өгөх (syntax highlighting)](https://stackoverflow.com/a/70960574/458193) болон кодын түлхүүр үг автомат гүйцээлт (autocomplete) хийдэг.
* [Vim](https://www.vim.org/) бол бүх төрлийн бичвэрийг үр ашигтайгаар засахад зориулж бүтээсэн маш уян хатан тохиргоо хийх боломжтой текст editor. Ихэнх UNIX системүүд болон Apple OS X системд "vi" нэрээр суусан байдаг. 

## Санал болгож буй тескт editor-ын онцлогууд {/*recommended-text-editor-features*/}

Зарим editor-уудад төрмөлөөр байдаг онцлогууд нь өөр бусдад нь extension байдлаар нэмж суулгах хэрэгтэй болно. Та өөрийн сонгосон editor алийг нь дэмжиж байгаа шалгаарай!

### Linting {/*linting*/} 

Код linter-үүд нь таныг код бичих үед асуудлыг олж, эрт засахад тусалдаг. JavaScript-д зориулсан нээлттэй эх бүхий [ESLint](https://eslint.org/) бол хамгийн түгээмэл тархсан code linter юм.

* [React-д зориулсан зохистой тохиргоог ESLint-д суулгах нь](https://www.npmjs.com/package/eslint-config-react-app) ([Node суулгасан](https://nodejs.org/en/download/current/) эсэхээ шалгаарай!)
* [VSCode-ын албан ёсны extension-ыг ESLint-тэй холбох нь](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

**Та өөрийн прожект дотроо [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) дүрмүүдийг бүгдийг нь тааруулсан эсэхийг шалгаарай.** Эдгээр нь заавал барих шаардлагатай ихэнх асуудлуудыг эрт илрүүлж өгөх болно. [`eslint-config-react-app`](https://www.npmjs.com/package/eslint-config-react-app) preset нь уг дүрмүүдийг агуулсан байгаа тул санал болгож байна. 

### Код хэвжүүлэх (Formatting) {/*formatting*/} 

Бусад оролцогчидтой кодоо хуваалцах үед тулгардаг хамгийн түгээмэл асуудал бол [tabs уу эсвэл spaces үү](https://www.google.com/search?q=tabs+vs+spaces) гэсэн хэлэлцүүлэг! Азаар энэ асуудлыг шийдэгч бол [Prettier](https://prettier.io/) бөгөөд урьдчилсан бэлдсэн дүрэм, тохиргоогоор таны кодыг хэвжүүлэх болно. Prettier-ийг ажиллуулахад л таны бүх tab-ууд space рүү хөрвөгдөж, мөн мөрийн доголууд, хаалтууд бүгд тохиргооны дагуу өөрчлөгдөнө. Хамгийн оновчтой тохиргоо бол та файлаа хадгалахад Prettier ажиллаад шаардлагатай засваруудыг хийдэг байх юм.

You can install the [Prettier extension in VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) by following these steps:
Та [Prettier-д зориулсан нэмэлт суулгацыг VSCode дээр](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) доорх дарааллын дагуу суулгаж болно. 

1. VS Code-оо нээх. 
2. "Quick Open"-г ашиглах (Ctrl/Cmd+P хослолыг дар)
3. `ext install esbenp.prettier-vscode` хуулж тавих
4. "Enter" товч дарна

#### Formatting on save {/*formatting-on-save*/} Хадгалах үед хэвжүүлэх нь {/*formatting-on-save*/} 

VS Code-д хадгалах бүрд таны кодыг хэвжүүлэх тохиргоо бий бөгөөд танд уг тохиргоог ашиглахыг санал болгож байна. 
Ideally, you should format your code on every save. VS Code has settings for this!

1. VS Code дотор `CTRL/CMD + SHIFT + P` хослолыг дарна. 
2. "settings" гэж бичих
3. "Enter" товч дар
4. Хайлтын хэсэг дээр "format on save" гэж бич
5. "format on save" тохиргоог тэмдэглэгээ идэвхжүүлэх

> Хэрвээ танд ESLint-ийн хэвжүүлэх тохиргооны бэлдэц байдаг бол Prettier-ынхтэй зөрчилдөж магадгүй. Тиймээс бид танд ESLint-ны хэвжүүлэх бүх дүрмүүдийг [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) ашиглаж идэвхгүй болгохыг санал болгож байна. Ингэснээр ESLint *зөвхөн* логик алдааг илрүүлэх тохиргоотой болно. Та "pull request"-ээ нэгтгэхээсээ өмнө бүх файлуудыг хэвжүүлэхийг хүсвэл [`prettier --check`](https://prettier.io/docs/en/cli.html#--check) командыг continuous integration (CI)-дээ оруулаарай.   