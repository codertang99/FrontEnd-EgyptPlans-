import {  BaseWithBackground} from "./BaseClass";
import { MySwiper } from "./MySwiper";
import { MyImg } from "./MyImg";
import { MyClickable } from "./MyClickable";
type children = MySwiper | MyImg | MyClickable;

class MyDiv extends BaseWithBackground{
    protected _children: children[];
    protected _myself: HTMLElement;
    constructor(...args : [string, number, number, boolean]){
        super(...args);
        this._children = [];
        this.myself = super.createSelf({type: 'div', background: this.background});
    }

    get myself(): HTMLElement{
        return this._myself;
    }

    set myself(myself: HTMLElement){
        this._myself = myself;
    }

    get children(): children[]{
        return this._children;
    }

    append(...ele){
        for (let i = 0; i < ele.length; i++) {
            if(ele[i].constructor.name === 'MyImg'|| ele[i].constructor.name === 'MyClickable' || ele[i].constructor.name === 'MySwiper'){
                this.myself.appendChild(ele[i].myself);
                this._children.push(ele[i]);
                ele[i]._parent = this.myself;  
            }
                      
        }
    };

    remove(...ele){
        for(let i = 0; i < this._children.length; i++){ 
            for (let j = 0; j < ele.length; j++){          
                if(this._children[i] === ele[j]){             
                    ele[j].myself.remove();
                    ele[j]._parent = null;
                    this._children.splice(i, 1);
                }
            }
        }
    };
}

export { children, MyDiv };