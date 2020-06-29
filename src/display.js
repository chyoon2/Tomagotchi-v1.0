import $ from 'jquery';

export function displayStat (pet) {
  let food = pet.foodLevel;
  let sleep = pet.sleepLevel;
  let play = pet.playLevel;

  setInterval(() => {
    food--;
    $('.food').text(food);
  }, 2000);

  setInterval(() => {
    play--;
    $('.play').text(play);
  }, 2000);

  setInterval(() => {      
    sleep--;
    $('.sleep').text(sleep);
  }, 2000);

  // setInterval(() => {
    
  //   if (food === 0) {
  //     return alert("Ya Ded");
  //   }
  //   if (sleep === 0) {
  //     return alert("Ya Ded");
  //   }
  //   if (play === 0) {
  //     return alert("Ya Ded");
  //   }
  // }, 1000);
}

// warn() {
//   if (this.foodLevel <= 5) {
    
//   }
//   if (this.sleepLevel <= 5) {
  
//   }
//   if (this.playLevel <= 5) {
    
//   }
// }


//   if (pet.warn() === 1) {
//     alert("food low!");
//   } else if (pet.warn() === 2){
//     alert("sleep low!");
//   }else if (pet.warn() === 3){
//     alert("play low!");
// } 