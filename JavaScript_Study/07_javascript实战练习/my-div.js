import { BaseElement } from "./base-element.js"

class MyDiv extends BaseElement {
  
  _children;
  _MyImg;
  _MyClickable;
  _MySwiper;

  constructor(width, height, background, visiable, type) {
    super(width, height, background, visiable, type)
    this._children = [];
    this._MyImg = [];
    this._MyClickable = [];
    this._MySwiper = [];
  }

  get children() {
    return this._children;
  }

  get MyImg() {
    return this._MyImg;
  }

  get MyClickable() {
    return this._MyClickable;
  }

  get MySwiper() {
    return this._MySwiper;
  }

  append(...args) {
    args.forEach(el => {
      if(el instanceof MyImg) {
        this._MyImg.push(el)
      } else if(el instanceof MyClickable) {
        this._MyClickable.push(el);
      } else if(el instanceof MySwiper) {
        this._MySwiper.push(el)
      }
      this.children.push(el);
      this.el.append(el);
      el.parent = this.el;
    })
  }

  remove(...args) {
    args.forEach(el => {
      let index = this.children.indexOf(el)
      if(index !== -1) {
        this.children.splice(index, 1)
      }
      index = this.MyImg.indexOf(el)
      if(index !== -1) {
        this._MyImg.splice(index, 1)
      }
      index = this.MyClickable.indexOf(el)
      if(index !== -1) {
        this._MyClickable.splice(index, -1)
      }
      index = this.MySwiper.indexOf(el)
      if(index !== -1) {
        this._MySwiper.splice(index, -1)
      }
      this.el.remove(el);
      el.parent = null;
    })
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
  MyDiv
}