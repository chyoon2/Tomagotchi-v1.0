import { Pet } from './../src/pet.js';


describe('pet', () => {
  jest.useFakeTimers();
  let pet;

  beforeEach(function() {
    pet = new Pet("pet");
    pet.setAttributes();
    pet.death();
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

  test('should have a sleep level of 9 after 600001 milliseconds', () => {
    jest.advanceTimersByTime(600001);
    expect(pet.sleepLevel).toEqual(9);
  });
  
  test('should any stat reach 0, pet will die', () => {
    pet.foodLevel = 0;
    pet.sleepLevel = 0;
    pet.playLevel = 0;
    expect(pet.death()).toEqual(true);
  });

  test('should increase food pet.foodlevel when fed', () => {
    pet.foodLevel = 4;
    expect(pet.feed()).toEqual(5);
  });

  test('should check to see if food level is equal to 10', () => {
    pet.foodLevel = 10;
    expect(pet.feed()).toEqual(true);
  });

  test('should check to see if sleep level is equal to 10', () => {
    pet.sleepLevel = 10;
    expect(pet.sleep()).toEqual(true);
  });
  
  test('should check to see if play level is equal to 10', () => {
    pet.playLevel = 10;
    expect(pet.play()).toEqual(true);
  });

  test('should warn user when attribute gets low', () => {
    pet.foodLevel = 5;
    expect(pet.warn()).toEqual(true);
  });

  test('should decrease sleep level when played with', () => {
    pet.sleepLevel = 6;
    expect(pet.play()).toEqual(5);
  });
});