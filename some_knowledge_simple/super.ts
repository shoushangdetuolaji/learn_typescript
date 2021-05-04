(function(){
  class Animal {
    name: string;

    constructor(name:string) {
      this.name = name;
    }
    sayHello() {
      console.log('animal is braking');
    }
  }

  class Dog extends Animal {
    age:number;
    constructor(name:string, age:number){
      super(name);
      this.age = age;
    }
    sayHello() {
      // 在类的方法中 super表示当前的父类
      //super.sayHello();
      console.log('wangwangwang!')
    }
  }

  const dog = new Dog('旺财',18);
  const dog1 = new Dog('来福',18);
  dog.sayHello();
  dog1.sayHello();
})();