export class Pet {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.playLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 300000);
  }
}