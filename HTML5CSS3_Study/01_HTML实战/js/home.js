window.addEventListener("scroll", function(e) {
  var inputBox = this.document.querySelector(".search")
  var input = this.document.querySelector(".search-input")
  if(this.scrollY > inputBox.offsetTop) {
    if(!(/ search-input-fixed/.test(input.className)))
      input.className += " search-input-fixed"
      input.firstElementChild.className = "search-box-flux"
      input.firstElementChild.firstElementChild.style.display = "block"
  } else {
    input.className = input.className.replace(" search-input-fixed", "")
    input.firstElementChild.className = ""
    input.firstElementChild.firstElementChild.style.display = "none"
  }
})

var inputBox = document.querySelector(".search-box")
var inputs = document.querySelector(".search-box>input[type=text]")
var ulElement = document.querySelector(".search-box .input-focus-div")
inputs.addEventListener("focus", function(e) {
  for(var i=0; i< 10; i++) {
    var li = document.createElement("li")
    li.innerHTML = "message" + i
    li.innerHTML += "<span style='float: right;'>删除</span>"
    li.setAttribute("class", "li")
    li.addEventListener("mouseover", function(e) {
      this.style.backgroundColor = "#f5f5f5"
      inputs.removeEventListener("blur", inputBlur)

    })
    li.addEventListener("mouseout", function(e) {
      this.style.background = "none"
      inputs.addEventListener("blur", inputBlur)
    })

    li.addEventListener("click", function() {
      inputs.value = this.innerText.replace("删除", "")
      inputs.addEventListener("blur", inputBlur)
      inputBlur()
    })

    li.lastElementChild.addEventListener("click", function(e) {
      this.parentElement.remove()
      e.stopPropagation()
    })


    ulElement.appendChild(li)
  }

  ulElement.style.display = "block"
  var deleteLi = document.createElement("li")
  deleteLi.innerHTML = "<span>全部删除</span>"
  deleteLi.setAttribute("class", "li")
  deleteLi.style["textAlign"] = "right"
  deleteLi.firstElementChild.addEventListener("click", function() {
    inputBlur()
  })
  ulElement.appendChild(deleteLi)
})

function inputBlur(e) {
  ulElement.innerHTML = ""
  ulElement.style.display = "none"
}

inputs.addEventListener("blur", inputBlur)