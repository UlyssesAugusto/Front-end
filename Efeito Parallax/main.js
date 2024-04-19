
var onda1 = document.getElementById('onda1')
var onda2 = document.getElementById('onda2')
var onda3 = document.getElementById('onda3')
var onda4 = document.getElementById('onda4')

window.addEventListener('scroll', function(){
    var rolagem = window.scrollY

    onda1.style.backgroundPositionX = 400 + rolagem * 4 + 'px'
    onda2.style.backgroundPositionX = 300 + rolagem * -4 + 'px'
    onda3.style.backgroundPositionX = 200 + rolagem * 2 + 'px'
    onda4.style.backgroundPositionX = 100 + rolagem * -2 + 'px'
})