const btnSwitch = document.getElementById('switch');
let root = document.documentElement;

btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    //Guardar en local estorage
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-Mode', true);
    } else {
        localStorage.setItem('dark-Mode', false);
    }
});

/* Obtener el modo actual */

if (localStorage.getItem('dark-Mode') === 'true') {
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
}else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}