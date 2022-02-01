import {
  plantControl,
  plantControl2,
  feed,
  hydrate,
} from "./../src/js/plant.js";

describe("stateControl", () => {
  test("should return an empty object when no function is passed in", () => {
    expect(plantControl()).toEqual({});
  });
  test("should return an object with soil = 1", () => {
    const plant = plantControl(feed);
    expect(plant).toEqual({ soil: 1 });
  });
  test("should return an object with soil = 2", () => {
    const plant = plantControl(feed);
    expect(plant).toEqual({ soil: 2 });
  });
  test("should return an object with water = 1", () => {
    const plant2 = plantControl2(hydrate);
    expect(plant2).toEqual({ water: 1 });
  });
  test("should return an object with water = 1 and soil = 3", () => {
    let plant = plantControl(hydrate);
    plant = plantControl(feed);
    expect(plant).toEqual({ water: 1, soil: 3 });
  });
});
