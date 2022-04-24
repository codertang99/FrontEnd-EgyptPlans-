import { BaseWithBackground } from "./BaseClass";

class MyClickable extends BaseWithBackground{
    _src: string;
    _onclick: () => any;
    protected _myself
    constructor(src: string, onclick: () => any, ...args : [string, number, number, boolean]){
        super(...args);
        this.src = src;
        this.onclick = onclick;
        this.myself = super.createSelf({type: 'div', backgroundImg: this.src, background: this.background});
    }

    get onclick(): () => any{
        return this._onclick;
    }

    set onclick(onclick: () => any){
        if(this.myself){
            this._onclick = onclick;
        }
    }

    get src(): string{
        return this._src;
    }

    set src(src: string){
        this._src = src;
        if(this.myself){
            if(typeof this.src === 'string'){
                this.myself.style.backgroundImage = src;
            }
        }
    }
}

export {MyClickable};