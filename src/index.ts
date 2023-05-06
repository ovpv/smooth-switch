import DayNightSwitch from "./day-night-switch/DayNightSwitch";
import "./index.scss";

const dayNightSwitch = new DayNightSwitch(document);
dayNightSwitch
  .createHtml()
  .addCss()
  .addJs()
  .addToDocument(document.querySelector("body"));
