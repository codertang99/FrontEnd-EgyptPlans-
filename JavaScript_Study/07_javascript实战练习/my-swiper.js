import { BaseElement } from "./base-element";

class MySwiper extends BaseElement {
  
  _pictures = [];
  _autoplay = true;
  _interval = 10000;

  constructor(width, height, background,visiable, pictures, autoplay, interval) {
    super(width, height, background, visiable);
    this.pictures = pictures
    this.autoplay = autoplay
    this.interval = interval
  }

  get pictures() {
    return this._pictures
  }

  set pictures(pictures) {
    this._pictures = pictures
  }

  get autoplay() {
    return this._autoplay
  }

  set autoplay(autoplay) {
    this._autoplay = autoplay
  }

  get interval() {
    return this._interval
  }

  set interval(interval) {
    this._interval = interval
  }

}