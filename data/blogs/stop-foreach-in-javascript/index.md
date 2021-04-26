---
slug: how-to-stop-foreach-in-javascript
title:  توقف حلقه foreach در javascript
created_at: 4-8-2021
type: 'post'
category: javascript
tags: 
    - react
    - gatsby
    - javascript
author: mojaeb
datetime: "28 فروردین 1400"
pinned: true
thumbnail: ./cover.jpeg
description: در جاوااسکریپت خارج شدن از foreach کار شاید آسونی نباشه ما تو این مطلب راجب این مبحث توضیح میدیم
---

قبل تر از ساختار تکرار for برای پیمایش در بین اجزای یک آرایه استفاده می کردیم ولی نسبت به سایر زبان های مدرن کمی قدیمی بود. در یک تحول عظیم در EcmaScript6 یا همون es6 یک سری توابع (iterator) مثل map , forEach , filter , reduce به زبان جاواسکریپ اضافه شد . (در یک مطلب به طور مفصل در مورد ویژگی های این توابع صحبت خواهم کرد)

استفاده از توابع تکرار مزیت های خودش رو داره اما کاربرانی که با دستور for کار کردن و میخوان از امروز به بعد ساختار های تکرارشون رو با توابع پیاده سازی کنن ممکنه گاهی اوقات توقعاتشون رو براورده نکنه یا حتی براشون ناکارآمد باشه به طور مثال در کد زیر برای پایان رسوندن حلقه از break استفاده میکنیم

```javascript
const array = [8, 6, 32, 64]

for (let a of array) {
    console.log(a);
    break;
}
```

خب به نظرتون break در forEach هم جواب میده؟

جواب سوال خیر هست

در تصویر زیر ما حلقه بالا رو به forEach تبدیل کردیم

```javascript
const array = [8, 6, 32, 64]

array.forEach(a => {
    console.log(a);
    break;
});
```

دلیل این که break در بالا کار نمیکنه رو در تصویر پایین ببینید

```javascript
const array = [8, 6, 32, 64]

const iterate = a => {
    console.log(a);
    break;
}

array.forEach(iterate);
```
در این تصویر کاملا واضحه که توابع تکرار در جاوا اسکریپت چطور کار میکنن

در واقع هر کدوم فقط callback function هایی رو از ورودی میگیرن و مقادیری رو به اون توابع ارسال میکنن و کمی غیر منطقیه که در جاوااسکریپت بخواهیم در تابعی دستور break رو قرار بدیم.

حالا برای متوقف کردن این توابع سرکش باید چکار کرد؟😐

###روش اول 


طول آرایه را صفر قرار بدهیم

هر آرایه ای که ساخته میشه یک سری ویژگی ها رو همراه خودش داره مثل length که میتونید با override کردن اون از تکرار دوباره حلقه جلوگیری کنید

```javascript
const array = [8, 6, 32, 64]

array.forEach(a => {
    console.log(a);
    array.length = 0;
});
```

### روش دوم

صدور خطا در try…catch

ما میتوانیم با قراردادن حلقه در try…catch و صدور خطا از حلقه خارج شویم حتی میتوانیم دلیل خروج رو هم در یک پیام در exception قرار دهیم تا در ادامه برنامه از آن استفاده نماییم

```javascript
const array = [8, 6, 32, 64]

let BreakException = {};
try {
    array.forEach((a, index) => {
        console.log(a);
        if (index === 0) throw BreakException;
    })
} catch (e) {
  if (e !== BreakException) throw e;
}
```