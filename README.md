# InputTag 组件

## 简介

InputTag 组件。按回车键(Enter)生成标签！按回退键(Backspace)删除标签！



## 效果

[在线演示](https://www.jq22.com/yanshi23961)

![Snipaste_2021-07-29_13-02-44.png](https://i.loli.net/2021/07/29/MzX4t78ej2xfqYH.png)



![Video_20210729130431 00_00_00-00_00_30.gif](https://i.loli.net/2021/07/29/TzVSvQGpqH5LZlY.gif)



## 示例

**JQuery 方式引入**

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JQuery标签输入框</title>
    <!-- 引入css -->
    <link rel="stylesheet" href="./inputTag.css">
</head>
<body>
<div>
    <div class="fairy-tag-container">
        <input type="text" class="fairy-tag-input tag1" autocomplete="off" value="">
    </div>

    <div id="tag1"></div>

    <div class="fairy-tag-container">
        <input type="text" class="fairy-tag-input tag2" autocomplete="off" value="">
    </div>

    <div id="tag2"></div>
</div>
<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
<!-- 引入js -->
<script src="./inputTag.js"></script>
<script>
    inputTag.render({
        elem: '.tag1',
        data: ['hello', 'world', 'tom', 'jerry'],//初始值
        permanentData: ['hello'],//不允许删除的值
        onChange: function (value) {
            console.log(value);
            $('#tag1').text(JSON.stringify(value));
        }
    });

    inputTag.render({
        elem: '.tag2',
        data: ['你好', '世界', '汤姆', '杰瑞'],
        permanentData: ['世界'],
        onChange: function (value) {
            console.log(value);
            $('#tag2').text(JSON.stringify(value));
        }
    });
</script>
</body>
</html>
```



**Layui 方式引入**

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Layui标签输入框</title>
    <!-- 引入css -->
    <link rel="stylesheet" href="./inputTag.css">
</head>
<body>
<div>
    <div class="fairy-tag-container">
        <input type="text" class="fairy-tag-input tag1" autocomplete="off" value="">
    </div>

    <div id="tag1"></div>

    <div class="fairy-tag-container">
        <input type="text" class="fairy-tag-input tag2" autocomplete="off" value="">
    </div>

    <div id="tag2"></div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/layui/2.6.8/layui.js" integrity="sha512-lH7rGfsFWwehkeyJYllBq73IsiR7RH2+wuOVjr06q8NKwHp5xVnkdSvUm8RNt31QCROqtPrjAAd1VuNH0ISxqQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<!-- 引入js -->
<script>
    layui.config({
        base: './'
    }).use(['inputTag', 'jquery'], function () {
        var $ = layui.jquery, inputTag = layui.inputTag;

        inputTag.render({
            elem: '.tag1',
            data: ['hello', 'world', 'tom', 'jerry'],//初始值
            permanentData: ['hello'],//不允许删除的值
            onChange: function (value) {
                console.log(value);
                $('#tag1').text(JSON.stringify(value));
            }
        });

        inputTag.render({
            elem: '.tag2',
            data: ['你好', '世界', '汤姆', '杰瑞'],
            permanentData: ['世界'],
            onChange: function (value) {
                console.log(value);
                $('#tag2').text(JSON.stringify(value));
            }
        });
    })
</script>
</body>
</html>
```

