import { BaseElement } from "./base-element"

class MyImg extends BaseElement {
  _src;
  constructor(width, height, background,visiable, src) {
    super(width, height, background, visiable);
    this.src = src;
  }

  get src() {
    return this._src;
  }

  set src(src) {
    this._src = src;
  }

}