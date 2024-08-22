// Seleciona todos os itens do carrossel e os botões de navegação
let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length; // Número total de itens
let active = 0; // Índice do item ativo

// Função para atualizar o item ativo
function updateActiveItem() {
    let activeOld = document.querySelector('.item.active');
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

// Inicialmente, exibe o primeiro item
updateActiveItem();
