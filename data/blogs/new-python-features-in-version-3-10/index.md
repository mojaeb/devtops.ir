---
slug: python-new-features-in-version-3.10-part-1-matches
title:  قابلیت های جدید پایتون در نسخه 3.10 قسمت اول - الگو های مرتبط (matches)
created_at: 4-8-2021
type: 'post'
category: python
tags: 
    - python
author: mojaeb
datetime: "6 اردیبهشت 1400"
pinned: true
thumbnail: ./cover.jpg
description: بررسی ویژگی های جدید پایتون در نسخه 3.10 که در این قسمت به بررسی الگو های مرتبط یا "matches patterns" در پایتون میپردازم

---


شاید در ابتدای نسخه 3 پایتون هیچ کس فکرشو نمیکرد این نسخه بتونه تا این حد پیشرفت کنه، بروزرسانی های مداوم و اضافه کردن قابلیت های متنوع تونست زبان پایتون رو به زبان برنامه نویسی قدرتمندی تبدیل کنه

تو این مجموعه سعی دارم تا قابلیت های جدید نسخه 3.10 رو باهاتون به اشتراک بزارم و امیدوارم مثل من ، برای شما هم کاربردی و هیجان انگیز باشه 🤩


<br/>

Match
قابلیتی مشابه عملگر switch ، که عبارت مورد نظر رو با الگو ها و عبارت هایی که درون case ها قرار میگیرن بررسی میکنه.


حالت کلی استفاده از match
```python
match subject:
    case <pattern_1>:
        <action_1> 
    case <pattern_2>: 
        <action_2> 
    case <pattern_3>:
        <action_3> 
    case _: 
        <action_wildcard>
```
در اینجا یک پیاده سازی ساده از match هارو داریم

```python
def http_error(status):
    match status:
        case 400: 
            return "Bad request" 
        case 404: 
            return "Not found" 
        case 418: 
            return "I'm a teapot" 
        case _: 
            return "Something's wrong with the Internet"
```

میتونید الگوهایی که پاسخ مشابه دارن رو هم به این صورت بنویسید
```python
case 401 | 403 | 404: 
    return "Not allowed"
``` 


شما میتونید از بقیه ساختار داده ها مثل تاپل هم استفاده کنید

```python
match point: 
    case (0, 0): 
        print("Origin") 
    case (0, y): 
        print(f"Y={y}") 
    case (x, 0): 
        print(f"X={x}") 
    case (x, y): 
        print(f"X={x}, Y={y}") 
    case _: 
        raise ValueError("Not a point")
```
