enum ISwitchSize {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

enum ISwitchDimesnsions {
  SMALLHEIGHT = "25px",
  SMALLWIDTH = "50px",
}
export default class Switch {
  private size: ISwitchSize;
  public switchEl: HTMLElement;
  private document: Document;
  constructor(document: Document) {
    this.document = document;
  }

  private getSwitchHeight(size: ISwitchSize) {
    switch (size) {
      case ISwitchSize.SMALL:
      default:
        return ISwitchDimesnsions.SMALLHEIGHT;
    }
  }

  private getSwitchWidth(size: ISwitchSize) {
    switch (size) {
      case ISwitchSize.SMALL:
      default:
        return ISwitchDimesnsions.SMALLWIDTH;
    }
  }

  public createHtml(size?: ISwitchSize) {
    this.size = size;
    this.switchEl = this.document.createElement("label");
    this.switchEl.innerHTML = `<input type="checkbox" />
    <span class="slider ${size ?? ISwitchSize.SMALL} round" style=" height: ${
      this.getSwitchHeight(size) ?? "initial"
    }; width: ${this.getSwitchWidth(size) ?? "initial"};"></span>`;
    return this;
  }

  public addCss(
    classNames?: string[],
    style?: string,
    needDefaultStyles: boolean = true
  ) {
    // lets you append your own styles to the switch
    let customStyles = ``;
    if (style && style.length) {
      customStyles += style;
    }

    // lets you decide whether to apply default styles from lib
    if (needDefaultStyles) {
      const classNames = this.switchEl.getAttribute("class");
      this.switchEl.setAttribute("class", `${classNames ?? ""} switch`);
    }

    return this;
  }

  public addJs() {
    return this;
  }

  public addToDocument(el: HTMLElement) {
    el.appendChild(this.switchEl);
    return this;
  }
}
