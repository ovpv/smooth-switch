## SmartSwitch 
The Switch component with magical css transistions

### Default
`
    import DayNightSwitch from "./day-night-switch/DayNightSwitch";

    const dayNightSwitch = new DayNightSwitch(document);
    
    dayNightSwitch
    .createHtml()
    .addCss()
    .addJs()
    .addToDocument(document.querySelector("body"));
`