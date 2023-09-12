function menuFeminino() {
    const Mf = document.querySelector('#MenuF');
    if(Mf.style.display === 'none') {
        Mf.style.display = 'block';
    } else {
        Mf.style.display = 'none'
    };
    Mf.style.transitionDuration = '1s';
};

function transicao() {
    Mf.style.transitionDuration = '1s';
    Mf.style.backgroundColor = 'red'
};