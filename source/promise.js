
/*
* 异步：操作之前没有联系。同时进行多个操作，代码变复杂，回调地狱
* 同步：同时只能做一件事儿，代码简单
* promise 同步方法写异步代码
*
*
* */
function creartPromise() {
    return new Promise()
}
let p1 = new Promise(function(resolve,reject){
    //resolve 成功
    //reject 失败
    http({
        url:'url',
        dataType:'json',
        success(arr){
            resolve(arr)
        },
        error(err){
            reject(err)
        }
    })

});
let p2 = new Promise(function(resolve,reject){
    //resolve 成功
    //reject 失败
    http({
        url:'url',
        dataType:'json',
        success(arr){
            resolve(arr)
        },
        error(err){
            reject(err)
        }
    })

});

Promise.all([
    p1,p2
]).then(function(arr){
    let [arr1,arr2] = arr;//解构赋值
},function (){
    console.log('失败了')
})
/*
* 谁返回快用谁
* */
Promise.race([
    p1,p2
])


