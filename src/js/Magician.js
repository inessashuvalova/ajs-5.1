import Character from './Character';

export default class Madician extends Character {
  constructor(name) {
    super(name, 'Madician');
    this.attack = 10;
    this.defence = 40;
  }
}