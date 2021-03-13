let input = document.getElementById('color-gradient')
let result = document.getElementById('result')


let color1 = "#04c7a2"
let color2 = "#0d5390"

result.style.background  = "linear-gradient(90deg, "+ color1 +", " + color2 +")"

input.addEventListener('change', (x) => {
    
    result.style.background  = "linear-gradient("+input.value+"deg, "+ color1 +", " + color2 +")"
})