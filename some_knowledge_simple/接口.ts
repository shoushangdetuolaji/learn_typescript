(function(){
  // 描述一个对象的类型
  type myType = {
    name: string,
    age: number,
  };

  /**
   * 接口用来定义一个类机构,用来定义一个类中应该包含哪些属性和方法
   *    同时接口也可以当成类型声明去使用
   *    
   */
  interface myInterface {
    name:string;
    age:number;
  }
  interface myInterface {
    gender:string;
  }
  // 写2个接口 会自动合并

  const obj: myInterface = {
    name: 'sss',
    age: 111,
    gender: '男'
  }

  /**
   * 接口可以在定义类的时候去限制类的结构
   *  接口中的所有的属性都不能有实际的值
   *  接口只定义对象的结构，而不考虑实际值
   *    在接口中所有的方法都是抽象方法。
   */
  interface myInter {
    name:string;
    sayHello(): void;
  }

  /**
   * 定义类时，可以使类实现一个接口
   */
  class MyClass implements myInter {
    name: string;
    constructor(name:string) {
      this.name = name;
    }
    sayHello(): void {
      console.log('hii everone')
    }
  }

  const cls1 = new MyClass('54');
  cls1.sayHello();
})()