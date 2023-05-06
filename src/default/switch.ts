export default class Switch {
  private switchEl: HTMLElement;
  private document: Document;
  constructor(document: Document) {
    this.document = document;
  }

  public createHtml() {
    this.switchEl = this.document.createElement("label");
    this.switchEl.innerHTML = `<input type="checkbox" />
    <span class="slider round"></span>`;
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
