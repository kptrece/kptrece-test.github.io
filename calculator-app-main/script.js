let btn = document.getElementById('btn')
let themeTogglee = document.getElementById('theme-toggle')
let themeToggle = document.getElementById('theme-toggle')

let dot = document.getElementById('dot')
let bodyy = document.body
let keys = document.getElementsByClassName('keys')
let screen = document.getElementById('screen')
let screenTop = document.getElementById('screen1')
let calculator = document.getElementById('calculator')

firstNumber = ""
secondNumber = ""
operation = ""

operationClick = 0
equalClick = 0

for (key of keys) {
    key.onclick =  function (){

        // if number was click
        if(this.innerHTML == "1" || this.innerHTML == "2" || this.innerHTML == "3" 
        || this.innerHTML == "4" || this.innerHTML == "5" || this.innerHTML == "6"
        || this.innerHTML == "7" || this.innerHTML == "8" || this.innerHTML == "9"
        || this.innerHTML == "0" || this.innerHTML == ".") {
            
            
            if(operationClick == 1){
                screen.innerHTML = ""
                operationClick = 0
            }

            screen.innerHTML += this.innerHTML
        
        }

        // if operation was click
        else if(this.innerHTML == "+" || this.innerHTML == "-" || this.innerHTML == "x"
        || this.innerHTML == "/") {

            
            if(operationClick == 0){

            if(equalClick == 1){
                firstNumber = screen.innerHTML
                secondNumber = ""
            }

            // kapag nagclick ng operation ng walang laman yung first number
            else if(firstNumber == "" && screen.innerHTML != ""){
                firstNumber = screen.innerHTML
            }
            // kapag nagclick ng operation tapos walang laman yung second number
            else if(firstNumber != "" && screen.innerHTML != ""){
                secondNumber = screen.innerHTML
                screen.innerHTML = (firstNumber = eval(firstNumber + operation + secondNumber))
                secondNumber = ""
            }
            
            // defines the operation
            this.innerHTML == "x" ? operation = "*" : operation = this.innerHTML
        
            operationClick = 1
        }
        }
        // if equal sign was click
        else if(this.innerHTML == "="){

            if(operationClick == 1){
                // screen.innerHTML = ""
                operationClick = 0
            }

            // kapag naglick ng equal tapos parehong may laman yung first and second number
            if(firstNumber != "" && screen.innerHTML != ""){
                secondNumber = screen.innerHTML
                screen.innerHTML = eval(firstNumber + operation + secondNumber)
                // firstNumber = ""
                // secondNumber = ""
                equalClick = 1
            }
            
        
            
        
        }
        // if del was click
        else if(this.innerHTML == "DEL"){
            equalClick = 0
        }

        // if reset was click
        else if(this.innerHTML == "RESET"){

        }

    }

    // operation 
    var solve = {
        
    }
}

themeTogglee.addEventListener('click', ()=>{
    // themeTogglee.classList.add('theme2')
    marginLeft = getComputedStyle(dot).marginLeft
    
    // alert(marginLeft)
    if(marginLeft == "0px") {
        themeTogglee.classList.add('theme2')
        bodyy.classList.add('theme2-bg')
        calculator.classList.add('theme-2')
        // bodyy.classList.add('theme-2')
    }
    if(marginLeft == "20px") {
        themeTogglee.classList.add('theme3')
        bodyy.classList.add('theme3-bg')
        calculator.classList.add('theme-3')
    }
    if(marginLeft == "40px") {
        themeTogglee.classList.remove('theme2', 'theme3')
        bodyy.classList.remove('theme3-bg', 'theme2-bg')
        calculator.classList.remove('theme-2', 'theme-3')
    }
})

themeToggle.addEventListener('click', ()=> {
    // this.style.display = "none"
    // alert(themeToggle.style.clientX)

    let jc = window.getComputedStyle(themeToggle).justifyContent  

    marginLeft = getComputedStyle(dot).marginLeft
    
    if(marginLeft == '0px'){
        // dot.classList.add('move-theme2')add
        // dot.classList.replace('bg-theme2', 'bg-theme2')
        dot.classList.replace('move-theme1', 'move-theme2')
        dot.style.backgroundColor = "hsl(25, 98%, 40%)"
        // bodyy.classList.add('bg-theme2')
    }
    if(marginLeft == "20px"){
        dot.classList.replace('move-theme2','move-theme3')
        dot.style.backgroundColor = "hsl(176, 100%, 44%)"
        // bodyy.classList.toggle('bg-theme3')
    }
    if(marginLeft == "40px"){
        dot.classList.replace('move-theme3','move-theme1')
        dot.style.backgroundColor = "hsl(176, 100%, 44%)"
        //  bodyy.classList.toggle('bg-theme1')
    }
    // if(leftax == 0){
    //     alert(leftax)
    // }
    // if(leftax == )
    // document.body.classList.toggle('theme4')
    // if(jc == 'normal') {
    //     alert(themeToggle.style.justifyContent = 'center')
        //change the theme to theme 2
    //     document.body.classList.add('bg-theme2')
    //     document.body.classList.remove('bg-theme1')
    // } else if(jc == 'center') {
    //     alert(themeToggle.style.justifyContent = 'end')
    //     document.body.classList.remove('bg-theme2')
    //     document.body.classList.add('bg-theme3')

    // } else if(jc == 'end') {
    //     alert(themeToggle.style.justifyContent = 'normal')
    //     document.body.classList.remove('bg-theme3')
    //     document.body.classList.add('bg-theme1')
    // }
})


