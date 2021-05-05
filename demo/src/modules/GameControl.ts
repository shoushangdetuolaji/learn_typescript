// 引入其他类
import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

// 游戏控制器，控制其他的所有类
class GameControl {
  // 定义三个属性
  // 蛇
  snake: Snake;
  // 食物
  food: Food;
  // 计分牌
  scorelPanel: ScorePanel;
  
  // 创建一个属性来储存蛇的移动方向「也就是按键方向」
  direction: string = '';

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorelPanel = new ScorePanel();

    this.init();
  }
  // 游戏的初始化方法，调用后游戏即将开始
  init()  {
    // 绑定键盘按键按下的事件
    document.addEventListener('keydown',this.keydownHandler.bind(this));
    this.run();
  }
  // 创建一个键盘按下的响应函数
  keydownHandler(event:KeyboardEvent) {
    // 需要检查event.key的值是否合法
    //console.log(event.key)
    this.direction = event.key;
    this.run();
  }

  // 创建一个控制蛇移动的方法
  run() {
    // 获取蛇现在坐标
    let X = this.snake.X;
    let Y = this.snake.Y;
    
    switch(this.direction) {
      case "ArrowUp":
      case "Up":
        // 向上移动top减少
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }
    // update
    this.snake.X = X;
    this.snake.Y = Y;
  }
}

export default GameControl;