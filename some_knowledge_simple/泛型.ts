// function fn(a:number):number {
//   return a
// }
// let result = fn(1);
// console.log(result);

/**
 * 在定义函数或是类时，如果遇到类型不明确可以使用泛型
 */

function fn<T>(a: T): T{
  return  a;
}

// 直接调用具有泛型的函数
let res1 = fn(10); // 不指定泛型、ts可以自动对类型进行推断
let res2 = fn<string>('hello'); // 指定泛型

function fn2<T,K>(a:T, b:K):T {
  console.log(b);
  return a;
}

fn2<number,string>(123,'hello'); // 建议手动指定变量类型

// 

interface Inter {
  length: number;
}
// T extends Inter表示泛型T必须时Inter实现类（子类）
function fn3<T extends Inter>(a: T):number{
  return a.length;
}

fn3({length:10});


class MyClass<T> {
  name: T;
  constructor(name: T){
    this.name = name;
  }
}
const mc = new MyClass<string>('孙悟空');