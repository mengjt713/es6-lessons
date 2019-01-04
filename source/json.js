/*
* json
* 对象
* 字符串
* 简写 名字和值一样，留一个就好
*
* */
let json = {
    a:12,
    b:25
};
let str = "sssss"+JSON.stringify(json);
console.log(str);
let a = 12;
let b = 2;
let json ={a,b}; //简写
console.log(json);
