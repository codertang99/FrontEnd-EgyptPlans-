import React, { Component, createRef } from "react"

class PicTab extends Component {
  static defaultProps =  {
    dataJson: {}
  }
  constructor() {
    super()
    this.state = {
      index: 0,
      rotateX: [],
      left: []
    }
    this.outUlRef = createRef()
  }

  render() {
    const { pic, text, end } = this.props.dataJson
    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: this.style()}}></style>
        <ul className="out-ul" ref={this.outUlRef}>
          {
            pic.map((item, index) => {
              return (
                <li className="pic-li"
                  style={{transform: `rotate(${this.state.rotateX[index]}deg)`, left: `${this.state.left[index]}`, transition: `${Math.random()*2 - 0.3}s` }}
                  key={item}>
                  <div className="end">{end[index]}</div>
                  <div className="front">
                    <img className="pic-li-img" src={item} alt="" />
                    <div className="text">{text[index]}</div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <ul className="dot-ul">
          {pic.map((item, i) => {
            return (
              <li 
              className={this.state.index === i ? "active": ""}
              key={item}
              onClick={this.changeDotIndex.bind(this, i)}></li>
            )
          })}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.random(0)
  }

  random(i) {
    const newArr = []
    const leftArr = []
    this.props.dataJson.pic.forEach((item, index) => {
      if(i === index) {
        newArr.push(0)
        this.outUlRef.current.children[index].classList.add("active")
        leftArr.push("calc(50% - 175px)")
      } else {
        this.outUlRef.current.children[index].classList.remove("active")
        newArr.push(Math.random()*-720 + 360)
        leftArr.push(Math.random()*window.innerWidth-180 + "px")
        this.outUlRef.current.children[index].classList.remove("hover")
      }
    })

    this.setState({
      rotateX: newArr,
      left: leftArr
    })
  }

  changeDotIndex(index, e) {
    console.log(e.target.classList.contains("active"));
    if(e.target.classList.contains("active")) {
      if(this.outUlRef.current.children[index].classList.contains("hover")) {
        this.outUlRef.current.children[index].classList.remove("hover")
      } else {
        this.outUlRef.current.children[index].classList.add("hover")
      }
    } else {
      this.setState({
        index: index
      })
      
      this.random(index)
    }
    
  }

  style() {
    return `
      #root, .App {height: 100%;}
      html, body { overflow: hidden; margin: 0; padding: 0; width: 100%; height: 100%;}
      body { background-color: #ccc; }
      ul {list-style: none;}
      .text{text-align: center; position: absolute; left: 50%; top: 50%; margin-top: 100px;}
      .pic-li-img { position: absolute; left: 50%; top: 50%; transform: translate(-150px, -150px); width: 300px; height:200px }
      .pic-li { position: absolute; background-color: #ffffff; width: 350px; height: 400px; }
      .pic-li.active { z-index: 1; }
      .out-ul {position: relative; left: 50%; top: 50%; transform: translate(-50%, -50%);}
      .dot-ul { position: absolute; left: 50%; bottom: 10%; transform: translateX(-50%); }
      .dot-ul>li { transition: .7s; cursor: pointer; border-radius: 50%; margin: 0 20px; float: left; width: 30px; height: 30px; background-color: #fff; }
      .dot-ul>li.active { background-color: #f5f; transform: scale(2); }
      .front { transform: translateZ(1px); width: 100%; height: 100%; position: absolute; top: 0; left: 0; }
      .end { text-align: center; display: none; transform: translateZ(-1px) rotateY(180deg) ; width: 100%; height: 100%; position: absolute; top: 0; left: 0; }
      .pic-li.hover{transform: perspective(400px) rotateY(180deg) !important; transform-style: preserve-3d;}
      .pic-li.hover .end{ display: block; }
    `
  }

}

export default PicTab