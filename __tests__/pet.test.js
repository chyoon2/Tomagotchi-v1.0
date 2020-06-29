import { Pet } from './../src/pet.js';


describe('pet', () => {
  jest.useFakeTimers();
  let pet;

  beforeEach(function() {
    pet = new Pet("pet");
    pet.setHunger();
    pet.setPlay();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10 when it is created', () => {
    expect(pet.name).toEqual("pet");
    expect(pet.foodLevel).toEqual(10);
  });

  test('should have a food level of 9 after 300001 milliseconds', () => {
    jest.advanceTimersByTime(300001);
    expect(pet.foodLevel).toEqual(9);
  });

  test('should have a play level of 10 when created', () => {
    expect(pet.playLevel).toEqual(10);
  });

  test('should have a play level of 9 after 15000 milliseconds', () => {
    jest.advanceTimersByTime(15000);
    expect(pet.playLevel).toEqual(9);
  });

  test('should have a sleep level of 10 when created', () => {
    expect(pet.sleepLevel).toEqual(10);
  });

  // test('should have a sleep level of 9 after 15000 milliseconds', () => {
  //   jest.advanceTimersByTime(15000);
  //   expect(pet.playLevel).toEqual(9);
  // });
});