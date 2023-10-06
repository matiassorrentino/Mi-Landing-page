const imagenes = document.querySelectorAll('.img-galeria')
const imagenlight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light')
const closeLight = document.querySelector('.close')


imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
});

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenlight){
        contenedorLight.classList.toggle('show')
        imagenlight.classList.toggle('showImage')
        hamburguer.style.opacity = '1';
    }
})


const aparecerImagen = (imagen)=>{
    imagenlight.src = imagen;
    contenedorlight.classList.toggle('show')
    imagenlight.classList.toggle('showImage')
    hamburguer.style.opacity = '0';
}