/*
* es面向对象
* 1 class关键字，构造器和类分开
* 2 class直接加方法
* 继承：
* super - 超类 父类
* */


class User{
    constructor(name,pass){
        this.name = name;
        this.pass = pass;
    }
    showName(){
        console.log(this.name)
    }
    showPass(){
        console.log(this.pass)
    }

}

class VipUser extends User{
    constructor(name,pass,level){
        super(name,pass);
        this.level = level;
    }
    showLevel(){
        console.log(this.level)
    }}

let  u1 = new User("meng",'Aa1234');
let  u2 = new VipUser('a',"dddd",'1');
u1.showName();
u1.showPass();

u2.showName();
u2.showLevel();
u2.showPass();

/*
* 应用
* react
*  组件化
*  jsx
*
*
* */
