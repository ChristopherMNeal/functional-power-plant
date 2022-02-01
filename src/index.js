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
  fullSun,
  partialSun,
  plantControl,
  plantControl2,
  dailyMaintenance,
  replant,
  dayPasses,
} from "./js/plant.js";

$(document).ready(function () {
  $("#day-passes").click(function () {
    const newState = dayPasses(plantControl);
    const newState2 = dayPasses(plantControl2);
    $("#soil-value").text(`Soil: ${newState.soil}`);
    $("#water-value").text(`Water: ${newState.water}`);
    $("#light-value").text(`Light: ${newState.light}`);
    $("#soil-value2").text(`Soil: ${newState2.soil}`);
    $("#water-value2").text(`Water: ${newState2.water}`);
    $("#light-value2").text(`Light: ${newState2.light}`);
  });

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

  $("#full-sun").click(function () {
    const newState = plantControl(fullSun);
    $("#light-value").text(`Light: ${newState.light}`);
  });

  $("#partial-sun").click(function () {
    const newState = plantControl(partialSun);
    $("#light-value").text(`Light: ${newState.light}`);
  });

  $("#daily-maintenance").click(function () {
    const newState = dailyMaintenance(plantControl);
    $("#soil-value").text(`Soil: ${newState.soil}`);
    $("#light-value").text(`Light: ${newState.light}`);
    $("#water-value").text(`Water: ${newState.water}`);
  });

  $("#replant").click(function () {
    const newState = replant(plantControl);
    $("#soil-value").text(`Soil: ${newState.soil}`);
    $("#water-value").text(`Water: ${newState.water}`);
    $("#light-value").text(`Light: ${newState.light}`);
  });

  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  $("#show-state").click(function () {
    // We just need to call plantControl() without arguments to see our current state.
    const currentState = plantControl();
    $("#soil-value").text(`Soil: ${currentState.soil}`);
    $("#water-value").text(`Water: ${currentState.water}`);
    $("#light-value").text(`Light: ${currentState.light}`);
  });

  $("#blue-food2").click(function () {
    const newState = plantControl2(blueFood);
    $("#soil-value2").text(`Soil: ${newState.soil}`);
  });

  $("#feed2").click(function () {
    const newState = plantControl2(feed);
    $("#soil-value2").text(`Soil: ${newState.soil}`);
  });

  $("#hydrate2").click(function () {
    const newState = plantControl2(hydrate);
    $("#water-value2").text(`Water: ${newState.water}`);
  });

  $("#super-water2").click(function () {
    const newState = plantControl2(superWater);
    $("#water-value2").text(`Water: ${newState.water}`);
  });

  $("#full-sun2").click(function () {
    const newState = plantControl2(fullSun);
    $("#light-value2").text(`Light: ${newState.light}`);
  });

  $("#daily-maintenance2").click(function () {
    const newState = dailyMaintenance(plantControl2);
    $("#soil-value2").text(`Soil: ${newState.soil}`);
    $("#light-value2").text(`Light: ${newState.light}`);
    $("#water-value2").text(`Water: ${newState.water}`);
  });

  $("#partial-sun2").click(function () {
    const newState = plantControl2(partialSun);
    $("#light-value2").text(`Light: ${newState.light}`);
  });
  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  $("#replant2").click(function () {
    const newState = replant(plantControl2);
    $("#soil-value2").text(`Soil: ${newState.soil}`);
    $("#water-value2").text(`Water: ${newState.water}`);
    $("#light-value2").text(`Light: ${newState.light}`);
  });

  $("#show-state2").click(function () {
    // We just need to call plantControl2() without arguments to see our current state.
    const currentState = plantControl2();

    $("#soil-value2").text(`Soil: ${currentState.soil}`);
    $("#water-value2").text(`Water: ${currentState.water}`);
    $("#light-value2").text(`Light: ${currentState.light}`);
  });
});
