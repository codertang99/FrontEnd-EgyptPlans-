import {BaseClassWithSrc} from "./BaseClass";
class MyImg extends BaseClassWithSrc{
    protected _myself: HTMLImageElement;
    constructor(...args : [string, number, number, boolean]){
        super(...args);
        this.myself = super.createSelf({type: 'img', src: this.src});
    }

    get myself(): HTMLImageElement{
        return this._myself;
    }

    set myself(myself: HTMLImageElement){
        this._myself = myself;
    }

    get src(): string{
        return this._src;
    }

    set src(src: string){
        this._src = src;
        if(this.myself){
            if(typeof src === 'string'){
                this.myself.src = src;
            }
        }
    }
}

export {MyImg};