// ===============================================================================
//  BASE DE DATOS          
// ===============================================================================
// TODO - MIGRAR A UN NUEVO ARCHIVO.
const personajesPrincipales = [{
    id: 1,
    name: 'Legolas',
    class: 'Elfo Warrior', 
    description: 'Powerful Elf archer with great attack, and weak defense',
    pAtk: 85, 
    pDef: 65,
    healthPoints: 75,
    speed: 7},
    {
    id: 2,
    name: 'Aragorn',
    clase: 'Human Warrior',
    description: 'Legendary melee warrior, sword mastery, very strong defense weaker base attack',
    pAtk: 70,
    pDef: 80,
    healthPoints: 85,
    speed: 5
    },{
    id: 3,
    name: 'Gandalf',
    class: 'Gray Wizard',
    description: 'The gray wizard, very strong attack, low health points and very low defense',
    pAtk: 80,
    pDef: 55,
    healthPoints: 65,
    speed: 6
    }]
    // base de datos de enemigos
const enemigosPrincipales = [{
    id: 1,
    name: 'Saruman',
    class: 'White Wizard',
    description: 'The white wizard, few character need such little introduction, strong enemy. Bigger rewards.',
    pAtk: 90,
    pDef: 60,
    healthPoints: 55,
    element: 'Agua'},
    {
    id: 2,
    name: 'Azog',
    class: 'Infernal Orc',
    description: 'Created to cause death and destruction, beware with this beast it has very strong attack',
    pAtk: 80,
    pDef: 70,
    healthPoints: 75,
    element: 'Fuego'},
    {
    id: 3,
    name: 'Cursed Gimli',
    class: 'Dead Dwarf',
    description: 'Dwarves are normally pretty peaceful, unfortunately this enemy was attacked by a necromancer and got cursed for life',
    pAtk: 75,
    pDef: 75,
    healthPoints: 95,
    element: 'Tierra'},
    {
    id: 4,
    name: 'Ugluk',
    class: 'Uruk-hai',
    description: 'Strongest orc archer in the kingdom, be careful of its pearcing arrow',
    pAtk: 65,
    pDef: 70,
    healthPoints: 95,
    element: 'Planta'}]

//finaliza base de datos de enemigos, comienza base de datos de armas.

const armasMedievales = [{
    id: 1,
    name: 'Espada infernal',
    description: 'Poderosa espada creada en mordor, super efectiva contra enemigos bosque',
    pAtk: 30,
    element: 'Fuego'
},{
    id: 2,
    name: 'Arco del bosque',
    description: 'Arco y flecha encantados con el poder del bosque, super efectivo contra enemigos tierra',
    pAtk: 45,
    element: 'Planta'
},{
    id: 3,
    name: 'Baculo de agua',
    description: 'Un arma de hechicero con el poder del agua encantado, super efectivo contra enemigos Fuego',
    pAtk: 40,
    element: 'Agua'
},{
    id: 3,
    name: 'Hacha elemento tierra',
    description: 'Hacha legendaria creada por el pueblo enano especialmente encantada con el poder de la tierra, super efectiva contra enemigos agua',
    pAtk: 40,
    element: 'Tierra'
}]
// Finaliza base de datos 


// ===============================================================================
//  1. FUNCIONALIDAD.           
// ===============================================================================

// === MUESTRA CARDS PERSONAJES ===
personajesPrincipales.forEach((personajes) => {
    document.getElementById('namePersonajes').innerHTML += `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${personajes.name}</h5>
        <p class="card-text">${personajes.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <label>Power Atack</label><li class="list-group-item">${personajes.pAtk}</li>
        <label>Defense</label><li class="list-group-item">${personajes.pDef}</li>
        <label>Health Points</label><li class="list-group-item">${personajes.healthPoints}</li>
      </ul>
      <div class="card-body">
        <button class="primary-btn btn-choose" id="boton-elegir${personajes.id}">Choose</button>
        <button class="primary-btn btn-equip">Equip Weapon</button>
      </div>
</div>`
})

// === MUESTRA CARDS ENEMIGOS ===
enemigosPrincipales.forEach((enemigos) => {
    document.getElementById('cards-enemigos').innerHTML += `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${enemigos.name}</h5>
        <p class="card-text">${enemigos.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <label>Power Atack</label><li class="list-group-item">${enemigos.pAtk}</li>
        <label>Defense</label><li class="list-group-item">${enemigos.pDef}</li>
        <label>Elemento</label><li class="list-group-item">${enemigos.element}</li>
        <label>Health Points</label><li class="list-group-item">${enemigos.healthPoints}</li>
      </ul>
      <div class="card-body">
        <button class="primary-btn btn-enemies" id="boton-elegir-enemigos${enemigos.id}">Choose Enemy</button>
      </div>
</div>`
})

// === MUESTRA CARDS WEAPONS ===
armasMedievales.forEach((armas) => {
    document.getElementById('inventario').innerHTML += `<div class="armasMargen"><div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${armas.name}</h5>
        <p class="card-text">${armas.description}</p>
    </div>
    <ul class="list-group list-group-flush">
        <label>Power Atack</label><li class="list-group-item">${armas.pAtk}</li>
        <label>Elemento</label><li class="list-group-item">${armas.element}</li>
    </ul>
    <div class="card-body">
        <button class="card-link">Choose</button>
        <button class="card-link equip-weapon" id="boton-elegir-arma${armas.id}">Equip Weapon</button>
    </div>
    </div></div>`
})
// ===============================================================================
//  2. SELECTORS           
// ===============================================================================

let botonInventario = document.querySelector('.botonInv');
let inventario = document.getElementById('inventario');
let botonCloseInventario = document.querySelector(".contenedor-btn");
let botonElegirWeapon = document.querySelectorAll('.btn-equip');
let barraParry = document.getElementById('barraParry')
let equipWeap = document.querySelectorAll('.equip-weapon')
let personajeElegido = {}
let enemigoElegido = {}
let armaElegida = {}




botonElegirWeapon.forEach((singleBtn) => {
    singleBtn.addEventListener('click', () => {
        showInventario()
    })
})
botonCloseInventario.addEventListener('click', () => {
    inventario.style.transform = 'translateY(100%)'
});

equipWeap.forEach((btnEquip) => {
btnEquip.addEventListener('click', () => {
        equip()
    })
})
document.getElementById('pelea').addEventListener('click', () => {
    pelea();
})

// === CHOOSE MAIN CHARACTER ===
personajesPrincipales.forEach((personajes) =>{
    const btnElegir = `boton-elegir${personajes.id}`
    document.getElementById(btnElegir).addEventListener('click', (event) => {
        const nodo = event.target;
        nodo.getAttribute('data-id')
        
        personajeElegido = personajes
        localStorage.user = JSON.stringify(personajeElegido)
        console.log(`Has elegido a ${personajeElegido.name} como heroe para luchar`)
    })
})

// === CHOOSE ENEMY ===
enemigosPrincipales.forEach((enemigos) => {
    const btnElegirEnemigos = `boton-elegir-enemigos${enemigos.id}`
    document.getElementById(btnElegirEnemigos).addEventListener('click', (event) => {
        const nodo = event.target;
        nodo.getAttribute('data-id')
        enemigoElegido = enemigos
        console.log(`Has elegido a ${enemigoElegido.name} para atacar, mucha suerte`)
    })
})

// === GENERA NUMERO RANDOM PARA AGREGAR A LA BATALLA ===
const generadorRoll = () => {
    let numero = Math.round(Math.random() * 30 )
    console.log('roll personaje' + numero)
    return numero;
}
const generadorRollEnemigo = () => {
    let numero = Math.round(Math.random() * 20 )
    console.log('roll enemigo' + numero)
    return numero;
}

// === BATTLE SIMULATOR ===
function pelea() {
    let personajeElegidoPelea = personajeElegido 
    let enemigoElegidoPelea = enemigoElegido
    console.log('hpInicial: ' + enemigoElegidoPelea.healthPoints);
    enemigoElegidoPelea.healthPoints -= Math.abs(multiplier * (generadorRoll() + personajeElegidoPelea.pAtk)) - enemigoElegidoPelea.pDef
    personajeElegidoPelea.healthPoints -= Math.abs(generadorRollEnemigo() + enemigoElegidoPelea.pAtk - personajeElegidoPelea.pDef)
    if (enemigoElegidoPelea.healthPoints <= 0 ){
        console.log('Felicitaciones ganaste la pelea')
    }else if (enemigoElegidoPelea.healthPoints > 0 && personajeElegidoPelea.healthPoints > 0) {
        console.log('El enemigo sigue vivo, le queda ' + enemigoElegidoPelea.healthPoints + ' de HP y a ti te quedan ' + personajeElegidoPelea.healthPoints + ' sigue peleando!')    
    }else { 
        console.log('Oh no! has perdido la batalla, mejor suerte la proxima.')
        
}}

//============================ funcion equipar work in progress. todavia no anda.

function equip(){
    armasMedievales.forEach((armas) => {
    const btnElegirArma = `boton-elegir-arma${armas.id}`
    document.getElementById(btnElegirArma).addEventListener('click', () => {
        personajeElegido.pAtk += armaElegida.pAtk
        personajeElegido.element = armaElegida.element
        armasElegidaPelea = armaElegida
        console.log('Has equipado ' + armaElegida.name + ', tu poder de Ataque base es de ' + personajeElegido.pAtk + ' y ahora tu elemento es el ' + personajeElegido.element)

    })
})}

//batalla con multiplicador por elemento.
var multiplier = 1

function equipWeapon() {
    if ((personajeElegido.element === 'Tierra' && enemigoElegido.element === 'Agua') || (personajeElegido.element === 'Agua' && enemigoElegido.element === 'Fuego') || (personajeElegido.element === 'Fuego' && enemigoElegido.element === 'Planta') || (personajeElegido.element === 'Planta' && enemigoElegido.element === 'Tierra')) {
        multiplier = 1.25
        return console.log('Super efectivo atacas con un multiplicador de ' + multiplier)
    }else if ((personajeElegido.element === 'Agua' && enemigoElegido.element === 'Tierra') || (personajeElegido.element === 'Fuego' && enemigoElegido.element === 'Agua') || (personajeElegido.element === 'Planta' && enemigoElegido.element === 'Fuego') || (personajeElegido.element === 'Tierra' && enemigoElegido.element === 'Planta')){
        multiplier = 0.75
        console.log('Not very efective, penalizacion activada, atacas con un multiplicador de' + multiplier)
    } else {
        multiplier = 1
        console.log('meh, times ' + multiplier + ' multiplier.')}
}

// ===============================================================================
//  3. HELPERS FUNCTIONS           
// ===============================================================================

function showInventario() {
    document.getElementById('inventario').style.transform = 'translateY(0)'
}

