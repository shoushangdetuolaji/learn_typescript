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
    if(value < 0 || value > 290) {
      throw new Error('🐍撞🧱了');
    }
    // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然。
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      console.log('你已经掉头了---水平');
      // 如果发生了改变，让蛇头反方向继续移动
      if(value > this.X) {
        // 说明蛇在向右走
        value = this.X - 10;
      }else {
        value = this.X +10 ;
      }
    }

    // 移动身体
    this.moveBody();

    this.head.style.left = value + 'px';
    this.checkHeadBody();
  }
  set Y(value:number) {
    if (this.Y === value) return;
    if(value < 0 || value > 290) {
      throw new Error('🐍撞🧱了');
    }
    // 修改y时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然。
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      console.log('你已经掉头了---水平');
      // 如果发生了改变，让蛇头反方向继续移动
      if(value > this.Y) {
        // 说明蛇在向右走
        value = this.Y - 10;
      }else {
        value = this.Y +10 ;
      }
    }

    // 移动身体 
    this.moveBody();

    this.head.style.top =  value + 'px';
    this.checkHeadBody();
  }
  // // 判断是否生死
  // isDead(value:number) {
  //   if(value < 0 || value > 290) {
  //     throw new Error('🐍撞🧱了');
  //   }
  // }
  // 蛇增加身体的方法
  addBody() {
    let tempDiv = document.createElement('div');
    // 向element中添加一个div mdn文档有
    this.element.insertAdjacentElement('beforeend',tempDiv);
  }
  // 添加一个蛇身体移动的方法
  moveBody() {
    /**
     * 将后边的身体设置为前边身体的位置
     *  举例子：
     *    第4节 = 第3节的位置
     *    第3节 = 第2节的位置
     *    第2节 = 蛇头的位置
     */
    // 便利获取所有的身体
    for(let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前边身体的位置
      // 需要类型断言处理
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

      // 将值设置到当前身体上
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }
  // 检查蛇头是否撞到身体;
  checkHeadBody() {
    // 获取所有的身体，检查是否和蛇头的坐标发生重叠
    for(let i=1; i<this.bodies.length; i++) {
      let  bd = this.bodies[i] as HTMLElement;
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        // 进入判断说明蛇头撞到了身体，gameover
        throw new Error('撞到自己了');
      }
    }
  }
}

export default Snake;