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
    if (this.X === value) return;
    this.isDead(value);
    this.head.style.left = value + 'px';
  }
  set Y(value:number) {
    if (this.Y === value) return;
    this.isDead(value);
    this.head.style.top =  value + 'px';
  }
  // 判断是否生死
  isDead(value:number) {
    if(value < 0 || value > 290) {
      throw new Error('🐍撞🧱了');
    }
  }
  // 蛇增加身体的方法
  addBody() {
    let tempDiv = document.createElement('div');
    // 向element中添加一个div mdn文档有
    this.element.insertAdjacentElement('beforeend',tempDiv);
  }
}

export default Snake;