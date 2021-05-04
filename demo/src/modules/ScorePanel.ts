// 定义表示计分牌的类
class ScorePanel {
  // score和level用来记录分数和登记
  score = 0;
  level = 1;
  // 分数和等级所在的元素，在构造函数中进行初始化
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  // 设置一个变量限制等级
  maxLevel: number;
  // 设置一个变量表示多少分数时升级
  upScore: number;


  
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore
  }


  // 设置一个加分方法
  addScore() {
    // 分数自增
    this.scoreEle.innerHTML = ++this.score+ '';
    // 判断分数多少
    if(this.score % this.upScore === 0) {
      this.levelUp();
    }
  }

  // 设置提升等级的方法
  levelUp() {
    if(this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}

export default ScorePanel;
// test code
// const  scorePanel =  new ScorePanel(100,2);
// for(let i = 0; i<200; i++){
//   scorePanel.addScore();
// }