import Switch from "../default/switch";

interface IPointerEventTarget extends Pick<PointerEvent, "target"> {
  checked: boolean;
}

export default class DayNightSwitch extends Switch {
  constructor(document: Document) {
    super(document);
  }

  private addDayModeBg() {
    this.switchEl.setAttribute("class", `switch with-bg light`);
  }

  private addDarkModeBg() {
    this.switchEl.setAttribute("class", `switch with-bg dark`);
  }

  setDefaultEventListerner = (e: PointerEvent) => {
    const mode = (e.target as unknown as IPointerEventTarget).checked;

    if (mode) {
      this.addDayModeBg();
    } else {
      this.addDarkModeBg();
    }
  };

  private addBackgrounds(
    light: boolean = true,
    dark: boolean = true,
    eventListner?: EventListener
  ) {
    const inputEl = this.switchEl.querySelector("input");

    if (eventListner) {
      inputEl.addEventListener("click", eventListner);
    } else {
      inputEl.addEventListener("click", this.setDefaultEventListerner);
    }
  }

  public addCss(
    classNames?: string[],
    style?: string,
    needDefaultStyles?: boolean
  ) {
    super.addCss();
    this.addBackgrounds();
    return this;
  }
}
