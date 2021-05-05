 /**
  * @desc: 食物类
  */

 export default class Food {
   constructor(public element:HTMLElement){ };
    /**
     * @desc: 获取食物X坐标
     * @param {null}
     * @return {number}
     */
    
    get X(): number {
      return this.element.offsetLeft;
    }

    /**
     * @desc: 获取食物Y坐标
     * @param {null}
     * @return {number}
     */
    get Y(): number {
      return this.element.offsetTop;
    }

    /**
     * @desc: 修改食物的位置
     * @param {null}
     * @return {null}
     */
    change(): void {
      // 生成随机位置 区间[0, 290]
      // 蛇移动一次是10px 随机位置必须是10的倍数
      const left = Math.round(Math.random() * 29) * 10;
      const top = Math.round(Math.random() * 29) * 10;
      this.element.style.left = left + 'px';
      this.element.style.top = top + 'px';
    }
 }
