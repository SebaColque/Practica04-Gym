// Arreglos
const ejerciciosHombro = [
    new Musculo('hombro', 'Press de hombros con mancuerna', 'css/hombro/press-hombro-mancuerna.webp'),
    new Musculo('hombro', 'Elevaciones laterales', 'css/hombro/elevaciones-laterales.webp'),
    new Musculo('hombro', 'Levantamientos frontales con mancuerna alterno', 'css/hombro/elevaciones-laterales.webp'),
    new Musculo('hombro', 'Press militar', 'css/hombro/press-militar.webp'),
    new Musculo('hombro', 'Remo al mentón', 'css/hombro/remo-menton.jpg'),
    new Musculo('hombro', 'Encogimiento de hombros', 'css/hombro/encogimiento-hombro.jpg'),
];

const ejerciciosBicep = [
    new Musculo('bicep', 'Curl con cable', 'css/bicep/curl-cable.jpg'),
    new Musculo('bicep', 'Curl con barra', 'css/bicep/curl-con-barra.webp'),
    new Musculo('bicep', 'Curl concentrado', 'css/bicep/curl-concentracion.jpg'),
    new Musculo('bicep', 'Curl inclinado con mancuernas', 'css/bicep/curl-inclinado-mancuernas.jpg'),
    new Musculo('bicep', 'Curl martillo', 'css/bicep/curl-martillo.webp'),
    new Musculo('bicep', 'Curl predicador con barra ez', 'css/bicep/curl-predicador-barra-ez.jpg'),
    new Musculo('bicep', 'Dominada con agarre invertido', 'css/bicep/dominada-agarre-invertido.jpg'),
];

const ejerciciosCuadricep = [
    new Musculo('cuadriceps', 'Extenciones de cuadriceps', 'css/cuadriceps/extencion-cuadriceps.jpg'),
    new Musculo('cuadriceps', 'Prensa para piernas', 'css/cuadriceps/prensa-piernas.webp'),
    new Musculo('cuadriceps', 'Sentadilla con barra', 'css/cuadriceps/sentadilla-barra.jpg'),
    new Musculo('cuadriceps', 'Peso muerto', 'css/cuadriceps/peso-muerto.jpg'),
];

const ejerciciosPectoral = [
    new Musculo('pectoral', 'Apertura en máquina', 'css/pectoral/aperturas-maquina.jfif'),
    new Musculo('pectoral', 'Cruces en polea alta', 'css/pectoral/cruces-polea-alta.jpg'),
    new Musculo('pectoral', 'Flexiones para pecho', 'css/pectoral/flexiones-pecho.webp'),
    new Musculo('pectoral', 'Press banca plano', 'css/pectoral/press-banca.png'),
    new Musculo('pectoral', 'Press con mancuernas en banco inclinado', 'css/pectoral/press-mancuernas-banco-inclinado.png'),
];

const ejerciciosTricep = [
    new Musculo('tricep', 'Extension de tricep en polea alta con barra', 'css/tricep/extension-tricep-polea-alta.jpg'),
    new Musculo('tricep', 'Extension de codo sentado', 'css/tricep/extensiones-codo-sentado.webp'),
    new Musculo('tricep', 'Fondos para tricep', 'css/tricep/fondos-tricep.jpg'),
    new Musculo('tricep', 'Patada de tricep con mancuerna', 'css/tricep/patada-tricep-mancuerna.jpg'),
    new Musculo('tricep', 'Extension de tricep en polea alta con cuerda', 'css/tricep/tricep-polea-alta-cuerda.jpg'),
];

const ejerciciosEspalda = [
    new Musculo('espalda', 'Dominadas', 'css/espalda/dominada.jpg'),
    new Musculo('espalda', 'Polea al pecho', 'css/espalda/polea-pecho.jpg'),
    new Musculo('espalda', 'Pull over en polea alta con barra', 'css/espalda/pull-over-polea-alta-barra.jpg'),
    new Musculo('espalda', 'Remo barra T', 'css/espalda/remo-barra-t.jpg'),
    new Musculo('espalda', 'Remo barra', 'css/espalda/remo-barra.jpg'),
    new Musculo('espalda', 'Remo horizontal con mancuerna', 'css/espalda/remo-horizontal-mancuerna.webp'),
    new Musculo('espalda', 'Remo en polea baja', 'css/espalda/remo-polea-baja.jpg'),
];

const ejerciciosGluteos = [
    new Musculo('gluteos', 'Hip Thrust', 'css/gluteos/hip-thrust.jpg'),
    new Musculo('gluteos', 'Peso muerto', 'css/gluteos/peso-muerto.jpg'),
    new Musculo('gluteos', 'Sentadilla con barra', 'css/gluteos/sentadilla-barra.jpg'),
];

const ejerciciosIsquios = [
    new Musculo('isquios', 'Curl femoral acostado', 'css/isquios/curl-femoral-acostado.webp'),
    new Musculo('isquios', 'Curl femoral sentado', 'css/isquios/curl-femoral-sentado.jpg'),
    new Musculo('isquios', 'Glute ham raise', 'css/isquios/glute-ham-raise.jpg'),
    new Musculo('isquios', 'Peso muerto rumano', 'css/isquios/peso-muerto-rumano.jpg'),
];

const ejerciciosGemelos = [
    new Musculo('gemelos', 'Elevaciones de talon de pie', 'css/gemelos/elevaciones-talon-pie.jpg'),
    new Musculo('gemelos', 'Elevaciones de talon sentado', 'css/gemelos/elevaciones-talones-sentado.webp')
];

const ejerciciosAbdomen = [
    new Musculo('abdomen', 'Elevaciones de tronco en banco inclinado', 'css/abdomen/elevaciones-tronco-banco-inclinado.webp'),
];

const arregloDeejercicios = [
    ejerciciosBicep, ejerciciosHombro, ejerciciosCuadricep, ejerciciosPectoral, ejerciciosTricep, 
    ejerciciosEspalda, ejerciciosGluteos, ejerciciosIsquios, ejerciciosGemelos, ejerciciosAbdomen,
];

// Funciones
const cargarApp= ()=>{
    cargarejercicios();
}

const cargarejercicios = ()=>{
    for(let m of ejerciciosBicep){
        continue
    }
    
    for(let grupo of arregloDeejercicios){
        let ejerciciosHTML = `
    <div class="info-musculo-carta ${grupo[0].nombre}-carta">
        <div class="contenedor-info-musculo">
            <div class="texto-info-musculo">
                <h3>${grupo[0].nombre.toUpperCase()}</h3>
                <span class="material-symbols-outlined cerrar">
                close
                    </span>
        </div>
        <div class="imagenes-ejercicio">
    `;
        for(let musculo of grupo){
            ejerciciosHTML += crearMusculoHTML(musculo);
        }

        ejerciciosHTML += `
        </div>
        </div>
        </div>
        `;
        document.getElementById('lista-ejercicios').innerHTML += ejerciciosHTML;
    }
}

const crearMusculoHTML = (musculo)=>{
    let musculoHTML = `
    <div class="card">
        <div class="face front">
            <img src="${musculo.imagen}" alt="${musculo.descripcion}" class="img-ejer">
        </div>
        <div class="face back">
            <div class="back-info">
                <h4>${musculo.descripcion}</h4>
            </div>
            <img src="${musculo.imagen}" alt="${musculo.descripcion}" class="img-ejer">
        </div>
    </div>
    `;

    return musculoHTML
}

const cerrar = ()=>{
    document.querySelector('.info-musculo-carta').classList.remove('show-info')
}

// Eventos
// usuario
document.getElementById('usuario').addEventListener('click', ()=>{
    document.querySelector('.menu').classList.toggle('show')
})

// ejercicios
document.addEventListener('click', (e)=>{
    if(e.target.classList[0] === 'musculo' || e.target.classList[0] === 'musculo-titulo'){
        document.querySelector('.lista-ejercicios').classList.add('show-lista-ejercicios');
        if(e.target.classList[0] === 'musculo'){
            document.querySelector(`.info-musculo-carta.${e.target.classList[1]}-carta`).classList.add('show-info')
        }
        else if(e.target.classList[0] === 'musculo-titulo'){
            document.querySelector(`.info-musculo-carta.${e.target.innerHTML.toLowerCase()}-carta`).classList.add('show-info')
        }
    }
    
    let tipoMusculo = e.target.parentNode.parentNode.parentNode.classList[1]
    if(e.target.matches('.cerrar')){
        document.querySelector(`.info-musculo-carta.${tipoMusculo}`).classList.remove('show-info')
        document.querySelector('.lista-ejercicios').classList.remove('show-lista-ejercicios');
    }

})

// document.addEventListener('scroll', (e)=>{
//     console.log(document.querySelector('.lista-ejercicios'))

// })

// document.querySelector('.lista-ejercicios').addEventListener('mouseover', (e)=>{
//     if(e.target.matches('.detector-lista-ejercicios')){
//         let hijos = e.target.parentNode.children
//         console.log(hijos)
//         for(let h of hijos){
//             let clasesHijo = h.classList
//             console.log(h.classList)
//             document.querySelector(`${h}`).classList.remove('show-info')
//         }
//         document.querySelector(`.lista-ejercicios`).classList.remove('show-lista-ejercicios')
//     }
// })


document.getElementById('calcular').addEventListener('click', (e)=>{

    document.querySelector('.tapar-rayo.p25').classList.remove('mostrar-rayo')
    document.querySelector('.tapar-rayo.p50').classList.remove('mostrar-rayo')
    document.querySelector('.tapar-rayo.p75').classList.remove('mostrar-rayo')
    document.querySelector('.tapar-rayo.p100').classList.remove('mostrar-rayo')

    
    let forma = document.forms['forma'];
    let genero = forma['genero'].value;
    let peso = parseFloat(forma['peso'].value);
    let altura = parseFloat(forma['altura'].value);
    let edad = parseFloat(forma['edad'].value);
    let factor = parseFloat(forma['factor'].value);
    let cantidadInfo = [peso, altura, edad, factor];
    
    let vacio = false;
    let cantidadHTML = '';

    if(genero == ''){
        vacio = true;
    }
    for(let info of cantidadInfo){
        if(isNaN(info)){
            vacio = true;
        }
    }

    if(vacio){
        cantidadHTML = 'Complete todos los campos';
    }
    else{
        let cantidad = 0;
        if(genero === 'mujer'){
            cantidad = ((655 + (9.6 * peso)) + ((1.8 * altura) - (4.7 * edad))) * factor;
            
        }
        else if(genero === 'hombre'){
            cantidad = ((66 + (13.7 * peso)) + ((5 * altura) - (6.8 * edad))) * factor;
        }
        cantidadHTML = `Calorias necesarias aproximadamente:<br><br> 
        Ganar peso: ${Math.trunc(cantidad*1.2)} cal.<br>
        Manter peso: ${Math.trunc(cantidad)} cal.<br>
        Perder peso: ${Math.trunc(cantidad*0.8)} cal.`
        
        if(cantidad > 0 && cantidad < 1500){
            document.querySelector('.tapar-rayo.p25').classList.add('mostrar-rayo')
        }
        else if(cantidad >= 1500 && cantidad < 2000){
            document.querySelector('.tapar-rayo.p50').classList.add('mostrar-rayo')
        }
        else if(cantidad >= 200 && cantidad < 3000){
            document.querySelector('.tapar-rayo.p75').classList.add('mostrar-rayo')
        }
        else if(cantidad >= 3000){
            document.querySelector('.tapar-rayo.p100').classList.add('mostrar-rayo')
        }
    }
    
    document.querySelector('.cantidad-calorias').innerHTML = cantidadHTML;
    
})