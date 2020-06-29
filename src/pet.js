export class Pet {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.playLevel = 10;
    this.sleepLevel = 10;
  }

  // setAttributes() {
  //   setInterval(() => {
  //     this.foodLevel--;
  //   }, 300000);
  //   setInterval(() => {
  //     this.playLevel--;
  //   }, 15000);
  //   setInterval(() => {      
  //     this.sleepLevel--;
  //   }, 600000);
  //   setInterval(() => {
  //     this.warn();
  //     this.death();
  //   }, 15000);
  // }

  feed() {
    if ( this.foodLevel === 10){
      return true;
    } else {
      this.foodLevel++;
    }
  }

  sleep() {
    if ( this.sleepLevel === 10){
      return true;
    } else {
      this.sleepLevel++;
    }
  }
  play() {
    if ( this.playLevel === 10){
      return true;
    } else {
      this.playLevel++;
      this.sleepLevel--;
    }
  }

}

