export class Collapse {
  constructor(obj) {
    this.obj = obj;
    this.makeButton();
  }

  onclick() {
    if (this.obj.computedStyleMap().get("display") == "none") {
      this.obj.style["display"] = "block";
      this.obj.style["height"] = this.obj.scrollHeight + "px";
    } else {
      this.obj.style["height"] = "0px";
      setTimeout(() => {
        this.obj.removeAttribute("style");
      }, 300);
    }
  }

  makeButton() {
    const button = document.createElement("button");
    button.textContent = "Collapse";
    this.obj.before(button);
    button.addEventListener("click", () => this.onclick());
  }
}
