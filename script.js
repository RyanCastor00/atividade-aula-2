function somar(){
    let num
    let num1
    num = parseInt (document.getElementById('1').value)
    num1 = parseInt (document.getElementById('2').value)
    document.getElementById('resultado').innerText = num+num1
    console.log(num+num1)
}
function subtrair(){
    let num3
    let num4
    num3 = parseInt (document.getElementById('3').value)
    num4 = parseInt (document.getElementById('4').value)
    document.getElementById('resultado2').innerText = num3-num4
    console.log(num3-num4)
}
function multiplicar(){
    let num5
    let num6
    num5 = parseInt (document.getElementById('5').value)
    num6 = parseInt (document.getElementById('6').value)
    document.getElementById('resultado3').innerText = num5*num6
    console.log(num5*num6)
}
function area(){
    let num7
    let num8
    num7 = parseInt (document.getElementById('7').value)
    num8 = parseInt (document.getElementById('8').value)
    document.getElementById('resultado4').innerText = num7*num8/2
    console.log(num7*num8/2)
}