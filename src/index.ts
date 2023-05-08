import DayNightSwitch from "./day-night-switch/DayNightSwitch";
import "./styles/index.scss";

const dayNightSwitch = new DayNightSwitch(document);
dayNightSwitch
  .createHtml()
  .addCss()
  .addToDocument(document.querySelector("body"));
