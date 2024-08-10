let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length;
let active = 0;

// Função para atualizar a classe ativa
function updateActiveItem() {
    let activeOld = document.querySelector('.active');
    if (activeOld) {
        activeOld.classList.remove('active');
    }
    list[active].classList.add('active');
}

// Navegar para o próximo item
next.onclick = () => {
    active = (active + 1) % count;
    updateActiveItem();
}

// Navegar para o item anterior
prev.onclick = () => {
    active = (active - 1 + count) % count;
    updateActiveItem();
}

// Inicialmente, exiba o primeiro item
updateActiveItem();
