class Snake {
  // 表示蛇的元素
  // 蛇头
  head: HTMLElement;
  // 蛇身包括「蛇头」
  bodies: HTMLCollection;
  // 获取蛇的容器
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement; // 只取一个
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
  }
  
  // 获取蛇的坐标（蛇头坐标）
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }

  set X(value:number) {
    this.head.style.left = value + 'px';
  }
  set Y(value:number) {
    this.head.style.top =  value + 'px';
  }
  // 蛇增加身体的方法
  addBody() {
    let tempDiv = document.createElement('div');
    // 向element中添加一个div mdn文档有
    this.element.insertAdjacentElement('beforeend',tempDiv);
  }
}

export default Snake;