import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

import {
  // stateControl,
  blueFood,
  feed,
  hydrate,
  superWater,
  plantControl,
  plantControl2,
} from "./js/plant.js";

$(document).ready(function () {
  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

  $("#blue-food").click(function () {
    const newState = plantControl(blueFood);
    $("#soil-value").text(`Soil: ${newState.soil}`);
  });

  $("#feed").click(function () {
    const newState = plantControl(feed);
    $("#soil-value").text(`Soil: ${newState.soil}`);
  });

  $("#hydrate").click(function () {
    const newState = plantControl(hydrate);
    $("#water-value").text(`Water: ${newState.water}`);
  });

  $("#super-water").click(function () {
    const newState = plantControl(superWater);
    $("#water-value").text(`Water: ${newState.water}`);
  });
  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  $("#show-state").click(function () {
    // We just need to call plantControl() without arguments to see our current state.
    const currentState = plantControl();
    $("#soil-value").text(`Soil: ${currentState.soil}`);
    $("#water-value").text(`Water: ${currentState.water}`);
  });
});
