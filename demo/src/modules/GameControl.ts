/**
 * @desc: 游戏控制器 控制其他所有的类
 */

// 引入其他类
import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

interface IProps {
  food: string,
  snake: string,
  score: string,
  level: string,
  maxLevel?: number
}

type direction = 'top' | 'left' | 'bottom' |'right'| '';

export default class GameControl {
  snake: Snake;
  food: Food;
  panel: ScorePanel;
  direction: direction = 'right'; // 默认蛇的运动方向
  isLive: boolean = true; // 游戏是否运行
  constructor(options: IProps) {
    const {food, snake, score, level, maxLevel} = options;
    this.snake = new Snake(snake);
    this.food = new Food(document.querySelector(food)!);
    this.panel = new ScorePanel(document.querySelector(score)!, document.querySelector(level)!, maxLevel);
    this.start();
  }
  /**
   * @desc: 游戏开始
   * @param {*}
   * @return {*}
   */
  start(): void {
    document.addEventListener('keydown', this.keydown.bind(this));
    this.moveSnake(300);
  }
  /**
   * @desc: 键盘按下事件
   * @param {KeyboardEvent} e
   * @return {*}
   */
  keydown(e:KeyboardEvent): void {
    switch (e.key) {
      case 'ArrowUp':
      case 'w':
        if (this.direction !== 'bottom') this.direction = 'top'; break;
      case 'ArrowLeft':
      case 'a':
        if (this.direction !== 'right') this.direction = 'left'; break;
      case 'ArrowDown':
      case 's':
        if (this.direction !== 'top') this.direction = 'bottom'; break;
      case 'ArrowRight':
      case 'd':
        if (this.direction !== 'left') this.direction = 'right'; break;
      case ' ':
        this.direction = '';
        break;
    }
  }
  /**
   * @desc: 让蛇移动
   * @param {*} void
   * @return {*}
   */
  moveSnake(interval: number): void {
    let start = Date.now() // 第一次移动的时间
    const origin = interval; // 记录原时间间隔，方便根据等级调整
    const move = (): void => {
      if (this.isLive && this.direction) {
        let x = this.snake.X;
        let y = this.snake.Y;
        switch (this.direction) {
          case 'top':
            y -= 10; break;
          case 'bottom':
            y += 10; break;
          case 'left':
            x -= 10; break;
          case 'right':
            x += 10; break;
        }
        this.checkEat(x, y);
        try {
          this.snake.move(x, y);
        } catch (error) {
          alert(error.message);
          this.isLive = false;
        }

        let now = Date.now();//此刻时间
        const offset = now - start - interval;//代码阻塞时间
        interval = origin - (this.panel.level - 1) * 30;
        setTimeout(move, interval -= offset);
        start = now;
      }
    }
    move();
  }

  private checkEat(X: number, Y: number): void {
    if ((X === this.food.X && Y === this.food.Y) || this.snake.positions.some(({ left: X, top: Y }) => (X === this.food.X && Y === this.food.Y))) {
      this.snake.addBody();
      this.food.change();
      this.panel.addScore();
    }
  }

}
