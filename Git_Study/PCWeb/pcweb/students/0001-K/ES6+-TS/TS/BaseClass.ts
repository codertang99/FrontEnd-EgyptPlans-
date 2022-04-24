interface ICreateSelfArgs {
    type: string;
    background?: string;
    src?: string;
    backgroundImg?: string;
}
interface IPicture{
    src: string;
    onclick: () => any;
}
type HTMLSelf = HTMLDivElement | HTMLImageElement | HTMLElement;
type argsType = number | boolean | string;

abstract class BaseClass {
    _width: number;
    _height: number;
    _visiable: boolean;
    protected _parent: HTMLElement;
    protected abstract _myself: HTMLSelf;
    constructor(width: number, height:number, visiable: boolean){
        this.width = width;
        this.height = height;
        this.visiable = visiable;
        this.myself = null;
        this._parent = null;
    }
    get parent(): HTMLElement{
        return this._parent;
    } 

    get myself(){
        return this._myself;
    }

    set myself(myself){
        this._myself = myself;
    }

    get width(): number{
        return this._width;
    }

    set width(width: number){
        this._width = width;
        if(this.myself){
            this.myself.style.width = this.width + 'px';  
        }
    }

    get height(): number{
        return this._height;
    }

    set height(height: number){
        this._height = height;
        if(this.myself){
            this.myself.style.height = this.height + 'px';  
        }
    }

    get visiable(): boolean{
        return this._visiable;
    }

    set visiable(visiable: boolean){
        this._visiable = visiable;
        if(this.myself){
            if(typeof this.visiable === 'boolean'){
                if(this.visiable){
                    this.myself.style.visibility = 'visiable';
                }else{
                    this.myself.style.visibility = 'hidden';
                }
            }
        }
    }

    appendTo(HTMLElement: HTMLElement): void{
        let parent;
        if(typeof HTMLElement === 'string'){
            parent = document.querySelector(HTMLElement);
            this._parent = parent;
        }else if(HTMLElement.nodeType === 1){
            parent = HTMLElement; 
            this._parent = parent;         
        }
        parent.appendChild(this.myself);
 
    }

    takeOff(): void{
        this.myself.remove();
        this._parent = null;
    } 

    createSelf({type, background, src, backgroundImg}: ICreateSelfArgs){
            let myself:any = document.createElement(type);
            
            if((<any>Number).isInteger(this.width)){
                myself.style.width = this.width + 'px';
            }

            if((<any>Number).isInteger(this.height)){
                myself.style.height = this.height + 'px';
            }

            let regExp = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;

            if(regExp.test(background)){
                myself.style.backgroundColor = background;
            }
            
            if(typeof this.visiable === 'boolean'){
                if(this.visiable){
                    myself.style.visibility = 'visiable';
                }else{
                    myself.style.visibility = 'hidden';
                }
            }

            if(typeof src === 'string'){
                // ====?????????????????????????
                // let myself: HTMLImageElement;
                myself.src = src;
            }

            if(typeof backgroundImg === 'string'){
                myself.style.backgroundImage = backgroundImg;
                myself.style.backgroundRepeat = 'no-repeat';
            }
            
            return myself;
        }
}

abstract class BaseWithBackground extends BaseClass{
    _background: string;
    constructor(background: string, ...args : [number, number, boolean]){
        super(...args);
        this.background = background;
    }

    get background(): string{
        return this._background;
    }

    set background(background: string){
        if(this.myself){
            this._background = background;
            let regExp = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
                if(regExp.test(background)){
                    this.myself.style.backgroundColor = background;
                }
        }
    }

}

abstract class BaseClassWithSrc extends BaseClass{
    _src: string;
    constructor(src: string, ...args : [number, number, boolean]){
        super(...args);
        this._src = src;
    }
    
    abstract get src(): string;

    abstract set src(src: string);
}

export {ICreateSelfArgs, IPicture, HTMLSelf, argsType, BaseClass, BaseWithBackground, BaseClassWithSrc};