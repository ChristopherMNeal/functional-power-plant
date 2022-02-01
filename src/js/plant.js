import $ from "jquery";
// This function stores our state.

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

// export const stateControl = storeState();
// export const stateControl2 = storeState();

export const plantControl = storeState();
export const plantControl2 = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

export const resetState = (prop) => {
  return (state) => ({
    ...state,
    [prop]: 0,
  });
};

// We create four functions using our function factory. We could easily create many more.

export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(5);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);

export const fullSun = changeState("light")(5);
export const partialSun = changeState("light")(1);

export const resetSoil = resetState("soil");
export const resetWater = resetState("water");
export const resetLight = resetState("light");

export const dailyMaintenance = (func) => {
  func(feed);
  func(hydrate);
  func(partialSun);
  return func();
};

export const replant = (func) => {
  func(resetSoil);
  func(resetWater);
  func(resetLight);
  return func();
};
