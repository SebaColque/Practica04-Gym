document.getElementById('usuario').addEventListener('click', ()=>{
    document.querySelector('.menu').classList.toggle('show')
})

document.querySelector('.bicep').addEventListener('click', ()=>{
    document.querySelector('.info-musculo-bicep').classList.toggle('show-info')
})

document.querySelector('.info-musculo-bicep').addEventListener('mouseleave', ()=>{
    document.querySelector('.info-musculo-bicep').classList.remove('show-info')
} )

document.querySelector('.cerrar').addEventListener('click', ()=>{
    document.querySelector('.info-musculo-bicep').classList.remove('show-info')
} )