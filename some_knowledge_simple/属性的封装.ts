(function(){
  // 定义一个表示人的类
  class Person{
    // ts可以在属性前天假属性的修饰符
    // public 修饰的属性可以在任意位置访问（修改）默认值
    // private 私有属性，私有属性只能在类内部进行访问（修改）
    //    - 通过在类中添加方法使得私有属性可以被内部访问
    // protected 受包含的属性，只能在当前类和当前类的子类中访问（）


    private _name:string;
    private _age:number;
    constructor(name:string, age:number){
      this._name = name;
      this._age = age;
    }

    // // 定义方法，用来获取name属性
    // getName(){
    //   return this._name;
    // }
    // // 定义方法 用来设置name属性
    // setName(value:string){
    //   this._name = value;
    // }
    // getAge(){
    //   return this._age;
    // }
    // setAge(value:number){
    //   if( value >= 0){
    //     this._age = value;
    //   }
    // }

    // ts中设置getter方法的方式
    get name(){
      return this._name;
    }
    set name(value:string){
      this._name = value;
    }

  }
  const per = new Person('孙悟空',18);
  console.log(per);

  /**
   * 现在属性是在对象中设置的，属性可以任意的被修改
   *  属性可以任意被修改将会导致对象中的数据变得非常不安全
   */

  console.log(per);
})()