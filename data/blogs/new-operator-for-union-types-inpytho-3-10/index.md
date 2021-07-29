---
slug: python-new-features-in-version-3.10-part-2-new-operator-for-union-type
title:  قابلیت های جدید پایتون در نسخه 3.10 قسمت دوم - اپراتور جدید برای انواع union
created_at: 7-29-2021
type: 'post'
category: python
tags: 
    - python
author: mojaeb
datetime: "6 مرداد 1400"
pinned: false
thumbnail: ./cover.jpg
description: بررسی ویژگی های جدید پایتون در نسخه 3.10 که در این قسمت به بررسی اپراتور جدید برای انواع union ها میپردازیم
---



ما میدونیم که در نسخه های قبل پایتون تایپ ها اضافه شدن و تونستن کدهای مارو قابل اطمینان تر و خوانا تر کنن
 نوعی در پایتون 3.9 معرفی شد که شما میتونستین دو یا چند نوع داده را با هم ترکیب کنید به این نوع داده ها union ها گفته میشه و برای این که متغییر رو تو محدوده چند تایپ قرار بدیم باید از typing.union استفاده میکردیم اما الان دیگه نیازی به این کار نیست و کافیه از اپراتور مخصوصش " | " استفاده کنیم


```python
from typing import Union
def divider(number: Union[int, float]) -> Union[int, float]:
    return number / 2
isinstance('3', int | str)

```


```python
def divider(number: int | float) -> int | float:
    return number / 2
isinstance('3', int | str)

```

