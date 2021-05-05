/**
 * @desc: 计分面板
 */

export default class ScorePanel {
  private score = 0;
  public level = 1;
  
  /**
   * @desc: 计分面板构造函数
   * @param {*} public 分数节点
   * @param {*} public 等级节点
   * @param {*} private 最高等级
   * @return {*} void 
   */
  constructor(public scoreEle: HTMLElement, public levelELe: HTMLElement, private maxLevel = 10) {}
  /**
   * @des: 加分
   * @param {*}
   * @return {*}
   */
  addScore(): void {
    this.scoreEle.innerHTML = ++this.score + '';
    this.score % 10 === 0 && this.levelUp();
  }
  /**
   * @desc: 增加等级
   * @param {*}
   * @return {*}
   */
  levelUp(): void {
    if (this.level < this.maxLevel) {
      this.levelELe.innerHTML = ++this.level + '';
    }
  }
}
