import './style/index.less';
import GameController from './modules/GameControl';

const game = new GameController({ food: '#food', snake: '#snake', score: '#score', level: '#level' });
