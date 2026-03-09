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
function areaq(){
    let num9
    num9 = parseInt (document.getElementById('9').value)
    document.getElementById('resultado5').innerText = num9*num9
    console.log(num9*num9)
}
function arear(){
    let num10
    let num11
    num10 = parseInt (document.getElementById('10').value)
    num11 = parseInt (document.getElementById('11').value)
    document.getElementById('resultado6').innerText = num10*num11
    console.log(num10*num11)
}
function areat(){
    let num12
    let num13
    let num14
    num12 = parseInt (document.getElementById('12').value)
    num13 = parseInt (document.getElementById('13').value)
    num14 = parseInt (document.getElementById('14').value)
    document.getElementById('resultado7').innerText = (num12+num13)*num14
    console.log((num12+num13)*num14)
}
function areal(){
    let num15
    let num16
    num15 = parseInt (document.getElementById('15').value)
    num16 = parseInt (document.getElementById('16').value)
    document.getElementById('resultado8').innerText = num15*num16/2
    console.log((num12+num13)*num14)
}
