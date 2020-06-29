import { Pet } from './../src/pet.js';


describe('pet', () => {
  jest.useFakeTimers();
  let pet;

  beforeEach(function() {
    pet = new Pet("pet");
    pet.setHunger();
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
});