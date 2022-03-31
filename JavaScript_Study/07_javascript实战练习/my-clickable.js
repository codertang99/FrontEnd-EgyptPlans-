import { BaseElement } from "./base-element";

class MyClickable extends BaseElement {
  _src;
  constructor(width, height, background,visiable, src, onclick) {
    super(width, height, background, visiable);
    this.src = src;
    this.onclick = onclick
  }

  get src() {
    return this._src;
  }

  set src(src) {
    this._src = src;
  }
}