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
  
}

  setPlay() {
    setInterval(() => {
      this.playLevel--;
    }, 15000);
  }

  setSleep() {
    setInterval(() => {
      this.sleepLevel--;
    }, 600000);
  }
}