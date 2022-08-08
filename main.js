// base de datos de los personajes principales del juego.
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
    element: 'Planta'},
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
    name: 'una Espada infernal',
    weaponPwr: 30,
    element: 'Fuego'
},{
    id: 2,
    name: 'el Arco del bosque',
    weaponPwr: 45,
    element: 'Planta'
},{
    id: 3,
    name: 'un Baculo de agua',
    weaponPwr: 40,
    element: 'Agua'
},{
    id: 3,
    name: 'un Hacha elemento tierra',
    weaponPwr: 40,
    element: 'Tierra'
}]
// Finaliza base de datos 

// mostrar personajes en cards
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
        <a href="#" class="card-link" id="boton-elegir${personajes.id}">Choose</a>
        <a href="#" class="card-link">Equip Weapon</a>
      </div>
</div>`
})
// mostrar enemigos en cards
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
        <label>Health Points</label><li class="list-group-item">${enemigos.healthPoints}</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link" id="boton-elegir-enemigos${enemigos.id}">Choose Enemy</a>
        <a href="#" class="card-link">Fight</a>
      </div>
</div>`
})

//eligiendo personaje principal.
let personajeElegido = []

personajesPrincipales.forEach((personajes) =>{
    const btnElegir = `boton-elegir${personajes.id}`
    document.getElementById(btnElegir).addEventListener('click', (event) => {
        const nodo = event.target;
        nodo.getAttribute('data-id')
        
        personajeElegido = personajes
        console.log(personajeElegido)
        console.log(`Has elegido a ${personajeElegido.name} como heroe para luchar`)
    })
})
// eligiendo enemigo para luchar.
let enemigoElegido = []
enemigosPrincipales.forEach((enemigos) =>{
    const btnElegirEnemigos = `boton-elegir-enemigos${enemigos.id}`
    document.getElementById(btnElegirEnemigos).addEventListener('click', (event) => {
        const nodo = event.target;
        nodo.getAttribute('data-id')
        enemigoElegido = enemigos
        console.log(`Has elegido a ${enemigoElegido.name} para atacar, mucha suerte`)
    })
})


// Logica para un roll random entre 0 y 30 para agregar al P.atk
const generadorRoll = () => {
    return Math.round(Math.random() * 30 )
}
const generadorRollEnemigo = () => {
    return Math.round(Math.random() * 20 )
}
//battle simulator
let fight = function pelea() {
    let personajeElegidoPelea = personajeElegido 
    let enemigoElegidoPelea = enemigoElegido
    enemigoElegidoPelea.healthPoints -= Math.abs(multiplier * (generadorRoll() + personajeElegidoPelea.pAtk)) - enemigoElegidoPelea.pDef
    personajeElegidoPelea.healthPoints -= Math.abs(generadorRollEnemigo() + enemigoElegidoPelea.pAtk - personajeElegidoPelea.pDef)
    
    if (enemigoElegidoPelea.healthPoints <= 0 ){
        console.log('Felicitaciones ganaste la pelea')
    }else if (enemigoElegidoPelea.healthPoints > 0 && personajeElegidoPelea.healthPoints > 0) {
        console.log('El enemigo sigue vivo, le queda ' + enemigoElegidoPelea.healthPoints + ' de HP y a ti te quedan ' + personajeElegidoPelea.healthPoints + ' sigue peleando!')    
    }else { 
        console.log('Oh no! has perdido la batalla, mejor suerte la proxima.')
        
}}

document.getElementById('pelea').addEventListener('click', fight)
//equip item.

function equip(){
    personajesPrincipales[0].pAtk += armasMedievales[0].weaponPwr
    personajesPrincipales[0].element = armasMedievales[0].element
    console.log('Has equipado ' + armasMedievales[0].name + ', tu poder de Ataque base es de ' + personajesPrincipales[0].pAtk + ' y ahora tu elemento es el ' + personajesPrincipales[0].element)
}

//batalla con multiplicador por elemento.
var multiplier = 0

function peleaConArma(){
    
    if ((personajesPrincipales[0].element === 'Tierra' && enemigosPrincipales[0].element === 'Agua') || (personajesPrincipales[0].element === 'Agua' && enemigosPrincipales[0].element === 'Fuego') || (personajesPrincipales[0].element === 'Fuego' && enemigosPrincipales[0].element === 'Planta') || (personajesPrincipales[0].element === 'Planta' && enemigosPrincipales[0].element === 'Tierra')) {
        multiplier = 1.25
        return console.log('Super efectivo atacas con un multiplicador de ' + multiplier)
    }else if ((personajesPrincipales[0].element === 'Agua' && enemigosPrincipales[0].element === 'Tierra') || (personajesPrincipales[0].element === 'Fuego' && enemigosPrincipales[0].element === 'Agua') || (personajesPrincipales[0].element === 'Planta' && enemigosPrincipales[0].element === 'Fuego') || (personajesPrincipales[0].element === 'Tierra' && enemigosPrincipales[0].element === 'Planta')){
        multiplier = 0.75
        console.log('Not very efective, penalizacion activada, atacas con un multiplicador de' + multiplier)
    } else {
        multiplier = 1
        console.log('meh, times ' + multiplier + ' multiplier.')}
}
peleaConArma()

