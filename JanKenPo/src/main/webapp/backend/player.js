import { enemies } from './enemies.js';

const MIN_DAMAGE = 5;
const ATTACKS = [
  { name: '', beats: '', aiOptions: ['rock', 'paper', 'scissors'] },
  { name: 'rock', beats: 'scissors', aiOptions: ['rock', 'paper', 'paper', 'scissors', 'scissors'] },
  { name: 'paper', beats: 'rock', aiOptions: ['rock', 'rock', 'paper', 'scissors', 'scissors'] },
  { name: 'scissors', beats: 'paper', aiOptions: ['rock', 'rock', 'paper', 'paper', 'scissors'] },
];

export default class Player {
  //Constructor for the player and the AI
  constructor(username, hp, power, def) {
    this.username = username;
    this.hp = hp;
    this.power = power;
    this.def = def;
  }

  //Method for dealing damage
  static dealDamageTo(winner, loser) {
    const damage = winner.power - loser.def;
    if (damage <= MIN_DAMAGE) {
      return MIN_DAMAGE;
    }
    return damage;
  }

  //Method for checking who beat who
  static beats(player1, player2) {
    const isWin = ATTACKS.some(attack => attack.name === player1 && attack.beats === player2);
    return isWin;
  }

  static foeAttack(previousEnemyAttack) {
    const enemyAttacks = ATTACKS.find(attack => attack.name === previousEnemyAttack);
    const randomNumber = Math.floor(Math.random() * enemyAttacks.aiOptions.length);
    return enemyAttacks.aiOptions[randomNumber];
  }

  static setStats(count) {
    const ran = Math.floor(Math.random() * enemies.length);
    const enemy = enemies.find(enemy => {
      if (count >= enemy.count.min && count <= enemy.count.max) return enemy;
    });
    console.log(enemy);
    return new Player(enemy?.name[ran], enemy?.stats.life, enemy?.stats.power, enemy?.stats.defense) || undefined;
  }
}
