export class Pet {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.playLevel = 10;
    this.sleepLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 300000);
    this.death();
  }

  setPlay() {
    setInterval(() => {
      this.playLevel--;
    }, 15000);
    this.death();
  }

  setSleep() {
    setInterval(() => {
      this.sleepLevel--;
    }, 600000);
    this.death();
  }

  death() {
    if (this.foodLevel === 0) {
      return true;
    }
    if (this.sleepLevel === 0) {
      return true;
    }
    if (this.playLevel === 0) {
      return true;
    }
    return false;
  }

  feed() {
    this.foodLevel++;
    console.log(this.foodLevel);
    return this.foodLevel;
  }
}