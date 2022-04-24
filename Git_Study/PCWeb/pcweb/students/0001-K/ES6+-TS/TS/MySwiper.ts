import {IPicture, BaseWithBackground} from "./BaseClass";

class MySwiper extends BaseWithBackground{
    _picture: IPicture[];
    _autoPlay: boolean;
    _interval: number;
    protected _myself: HTMLElement;
    constructor(picture: IPicture[], autoPlay: boolean, interval: number, ...args : [string, number, number, boolean]){
        super(...args);
        this.picture = picture;
        this.autoPlay = autoPlay;
        this.interval = interval;
        this.myself = this.createSwiper(this.width, this.height, this.background, this.autoPlay, this.interval, this.picture);
    }

    get picture(): IPicture[]{
        return this._picture;
    }

    set picture(picture: IPicture[]){
        this._picture = picture;
        if(this.myself){
            this.myself = this.createSwiper(this.width, this.height, this.background, this.autoPlay, this.interval, this.picture);
        }
    }

    get autoPlay(): boolean{
        return this._autoPlay;
    }

    set autoPlay(autoPlay: boolean){
        this._autoPlay = autoPlay;
        if(this.myself){
            this.myself = this.createSwiper(this.width, this.height, this.background, this.autoPlay, this.interval, this.picture);
        }
    }get interval(): number{
        return this._interval;
    }

    set interval(interval: number){
        this._interval = interval;
        if(this.myself){
            this.myself = this.createSwiper(this.width, this.height, this.background, this.autoPlay, this.interval, this.picture);
        }
    }

    createSwiper(width: number, height:number, backgroundColor: string, autoPlay: boolean, INTERVAL: number, picture: IPicture[]){
        // ========条件==========
        let LINTERVAL: number = 3000;   
        let DURATION: number  = 500;
        let banner: HTMLElement = document.createElement('div');
        banner.className = 'banner';
        banner.innerHTML = `
            <div class="window">
                <div class="list">
                </div>
                <span class="left"> <</span>
                <span class="right">></span>
            </div>
        `	
        banner.style.cssText = `
            position: relative;
            width: ${width}px;
            height: ${height}px;
            background-color: ${backgroundColor};
            `;
            
        let bannerWindow: HTMLElement = banner.querySelector('.window');
        bannerWindow.style.cssText = `
            width: ${width}px;
            height: ${height}px;				
            border: 6px solid skyblue;
            z-index: 5;
            position: absolute;
            left: 50%;
            margin-left: -${width/2}px;	
            overflow: hidden;
        `;
        
        let btnSpans:NodeListOf<HTMLElement> = banner.querySelectorAll('.window>span');
        btnSpans[0].style.cssText = `
            position: absolute;
            display: inline-block;
            font-size: 30px;
            color: #fff;
            line-height: 30px;
            width: 25px;
            height: 30px;
            margin: 0 5px;
            background-color: #333;
            opacity: 0.8;
            z-index: 5;
            left: -5px;
            top: 50%;
            margin-top: -15px;
        `;
        
        btnSpans[1].style.cssText = `
            position: absolute;
            display: inline-block;
            font-size: 30px;
            color: #fff;
            line-height: 30px;
            width: 25px;
            height: 30px;
            margin: 0 5px;
            background-color: #333;
            opacity: 0.6;
            z-index: 5;
            right: -5px;
            top: 50%;
            margin-top: -15px;
        `;
            
        let list: HTMLElement = banner.querySelector('.list');
        list.style.cssText = `
            width: 650%;
            position: absolute;
            left: 0px;
        `;
        
    
        function addImg(picture: IPicture[]){
            for(let i = 0; i < picture.length; i++){
                list.innerHTML += `<div><img src="${picture[i].src}"></div>`;
            }
            
            let lisDivs:NodeListOf<HTMLElement> = banner.querySelectorAll('.list>div ');
            let lisDivsImgs:NodeListOf<HTMLElement> = banner.querySelectorAll('.list>div>img');
            for(let i = 0; i < lisDivs.length; i++){
                lisDivs[i].style.cssText = `
                    width: ${width}px;
                    height: ${height}px;
                    text-align: center;
                    line-height: 200px;
                    font-size: 58px;
                    float: left;
                `;
                lisDivsImgs[i].style.cssText = `
                    width: ${width}px;
                    height: ${height}px;
                `;						
            }						
        }
        
        addImg(picture);
        interface HTMLElementWithTimer extends HTMLElement{
            timer: any;
        }
        
        // ================== animation里element不能用 : HTMLElement 会报错  类型“void”的参数不能赋给类型“number”的参数。
        function animation(element: HTMLElementWithTimer, leftEnd: number, duration: number, interval: number){
            let leftStart: number = element.offsetLeft;
            let stepTmp: number = (leftEnd - leftStart)/(duration/interval);
            let step: number = Math.floor(stepTmp);
            if(step === 0){
                step = stepTmp > 0 ? 1 : -1;
            }
            element.timer && clearInterval(element.timer);
            // ??????????????????
            element.timer = setInterval(function(){
    
                if(Math.abs(leftEnd - element.offsetLeft) <= Math.abs(step)){
                    element.style.left = leftEnd + 'px';												
                }else{
                    element.style.left = (element.offsetLeft + step) + 'px';
                }
            }, interval);
        }														
    
    // ==================================核心===============================================================
    // =====================================================================================================
    
        // ----------------------右移 (实际上块要左 left -1 * width <---  0px )-------------------
        function moveRight(move:HTMLElementWithTimer, imgs: NodeListOf<Element>): void{
            // ???????????????????????
            let nowLeft: number  = Math.floor(move.offsetLeft);
            // 2. 在-1 * width 位置时,把第一块移到为最后一块,并把left瞬间变为0px;
            // 			达到运行步骤 1 的条件
            if(nowLeft  <= -1 * width){
                move.appendChild(imgs[0]);
                move.style.left  = '0px';						
            }												
            // 1. 0px -----> -1 * width位置				
            animation(move, -1*width,DURATION, INTERVAL);
            timeriInt = setTimeout(scroll, LINTERVAL + INTERVAL);
            }
        
        // ---------------------------左移 (实际上块要向右 left -1 * width --->  0px )----------------
        function moveLeft(move:HTMLElementWithTimer, imgs: NodeListOf<Element>): void{
            let nowLeft: number  = Math.floor(move.offsetLeft);
            let imgLength: number  = imgs.length;				
            // 1. 当为第一格在框内时,把最后一块移到为第一块,并把left瞬间变为-1 * width;
                    // 达到运行  步骤 2 的条件
            if(nowLeft >= 0){
                let tmp: Element = move.removeChild(imgs[imgLength - 1]);
                move.insertBefore(tmp, imgs[0]);
                move.style.left  = -width + 'px';						
            }
            // 2. 再把-1 * width 移到 0px
            animation(move, 0,DURATION, INTERVAL);					
            timeriInt = setTimeout(scroll, LINTERVAL + INTERVAL);
            
        }
        
    // ==================================核心   END===============================================================
    // =====================================================================================================
        
        // 清除前面的事件
        function clearTimer(){
            clearTimeout(timeriInt);
        }
    
        function scroll(){
            // 获取 
            let move: HTMLElementWithTimer = banner.querySelector('.list');
            let imgs:NodeListOf<Element> = banner.querySelectorAll('.list>div');
            moveRight(move, imgs);
        }
        
        
        // ===========================运行模块==========================
    
        let left:HTMLElement  = banner.querySelector('.window>.left');
        let right:HTMLElement = banner.querySelector('.window>.right');
        let timeriInt: number;
        // ========轮播=========
        if(autoPlay){
            timeriInt = setTimeout(scroll, LINTERVAL);					
        }
        
        // ========右移=========
        right.onclick = function(){				
            clearTimer();
            let move: HTMLElementWithTimer = banner.querySelector('.list');
            let imgs: NodeListOf<Element> = banner.querySelectorAll('.list>div');
            moveRight(move, imgs);
        }
        
        // ========左移=========
        left.onclick= function(){
            clearTimer();
            let move: HTMLElementWithTimer = banner.querySelector('.list');
            let imgs: NodeListOf<Element> = banner.querySelectorAll('.list>div');
            moveLeft(move, imgs);
        }
        
        return banner;
    }
    
}

export {MySwiper};