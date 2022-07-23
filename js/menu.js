const hamburguer = document.querySelector('.menu1')
const menu = document.querySelector('.menu-navegacion')


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})


$('.error-page').hide(0);

$('.login-button , .no-access').click(function(){
  $('.login').slideUp(500);
  $('.error-page').slideDown(1000);
});

$('.try-again').click(function(){
  $('.error-page').hide(0);
  $('.login').slideDown(1000);
}); 