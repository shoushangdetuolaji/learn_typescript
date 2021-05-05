/**
 * @desc: 蛇类
 */

export default class Snake {
  snake: HTMLElement;
  head: HTMLElement;
  // 蛇身 包括蛇头
  bodies: HTMLCollection;
  positions: { left: number, top: number}[] = [];

  /**
   * @desc: 蛇类构造函数
   * @param {string} snake 蛇类选择器
   * @return {*}
   */
  constructor(snake: string) {
    this.snake = document.querySelector(snake)!;
    this.bodies = this.snake.children;
    this.head = this.snake.querySelector('div')!;
  }

  get X(): number {
    return this.head.offsetLeft;
  }
  get Y(): number {
    return this.head.offsetTop;
  }
  set X(value: number) {
    if (this.X === value) return;
    this.isDead(value);
    this.head.style.left = value + 'px';
  }
  set Y(value: number) {
    if (this.Y === value) return;
    this.isDead(value);
    this.head.style.top = value + 'px';
  }
  
  private isDead(value: number): void {
    if (value < 0 || value > 290) {
        throw new Error('蛇撞墙了');
    }
  }

  /**
   * @desc: 蛇长身体
   * @return {*}
   */
  addBody(): void {
    let tempDiv = document.createElement('div');
    // 向element中添加一个div mdn文档有
    this.snake.insertAdjacentElement('beforeend',tempDiv);
  }

  /**
   * @desc: 蛇移动时，检测是否撞墙和吃到自己
   * @param {number} x
   * @param {number} y
   * @return {*}
   */
  move(x: number, y:number) {
    this.moveBody(x, y);
    this.hitSelf();
  }
  
  /**
   * @desc 蛇移动 动作
   * @param {number} x
   * @param {number} y
   * @return {*}
   */
  private moveBody(x: number, y: number) {
    [...this.bodies].reverse().forEach((d, i, bodies) => {
      if(i < bodies.length - 1) {
        // 
        (d as HTMLElement).style.left = (bodies[i + 1] as HTMLElement).offsetLeft + 'px';
        (d as HTMLElement).style.top = (bodies[i + 1] as HTMLElement).offsetTop + 'px';
      }
    })
    this.X = x;
    this.Y = y;
  }

  /**
   * @desc: 检测蛇是否吃到了自己
   * @param {*}
   * @return {*}
   */
  private hitSelf() {
    this.positions = [...this.bodies].map(d => ({ left: (d as HTMLElement).offsetLeft, top: (d as HTMLElement).offsetTop }));
    const head = this.positions[0];
    this.positions.forEach((p, i) => {
        if (i && p.left === head.left && p.top === head.top) {
            throw new Error('蛇吃到了自己');
        }
    })
  }
}
