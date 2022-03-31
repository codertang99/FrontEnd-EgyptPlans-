class BaseElement {
  _width;
  _height;
  _background;
  _parent;
  _visiable;

  constructor(width, height, background, visiable) {
    this.el = document.createElement("div")
    this.width = width;
    this.height = height;
    this.background = background;
    this.visiable = visiable;
    this._parent = []
  }

  get width() {
    return this._width;
  }

  set width(width) {
    this.getResult()
    this._width = width;
  }

  set height(height) {
    this.getResult()
    this._height = height
  }

  get height() {
    return this._height;
  }

  set background(background) {
    this.getResult()
    this._background = background
  }

  get background() {
    return this._background;
  }

  get parent() {
    return this._parent;
  }

  set visiable(visiable) {
    this.getResult()
    this._visiable = visiable;
  }

  get visiable() {
    return this._visiable;
  }

  appendTo(element) {
    let el;
    if(typeof element === "string") {
      el = document.querySelector(element);
    }
    if(element instanceof HTMLElement) {
      el = element;
    }
    this._parent = el;
    this._parent.appendChild(this.getResult());
  }

  takeOff() {
    this._parent.remove(this.getResult());
    this._parent = null;
  }

  getResult() {
    this.el.style["width"] = this.width + "px"
    this.el.style["height"] = this.height + "px"
    this.el.style["background"] = this.background
    this.el.style["overflow"] = this.visiable ? "hidden" : "visible"
    return this.el
  }

}


export {
  BaseElement
}