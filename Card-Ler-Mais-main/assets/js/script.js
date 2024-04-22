var buttom = document.getElementById('read');

buttom.addEventListener('click', function(){
    var card = document.querySelector('.card');
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        return buttom.textContent = 'Leia menos';
    }
}

)