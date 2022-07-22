// base de datos de los personajes del juego.

const elfoWarrior = {
    name: 'Legolas', 
    pAtk: 25, 
    pDef: 65,
    healthPoints: 75,
    speed: 7
};
const humanWarrior = {
    name: 'Aragorn',
    pAtk: 70,
    pDef: 80,
    heathPoints: 85,
    speed: 5
};
const mageWizard = {
    name: 'Gandalf',
    pAtk: 80,
    pDef: 65,
    healthPoints: 65,
    speed: 6
};
const darkElfWizard = {
    name: 'Saruman',
    pAtk: 90,
    pDef: 60,
    healthPoints: 55,
    element: 'Planta'
};
const orc = {
    name: 'azog',
    pAtk: 80,
    pDef: 70,
    healthPoints: 75,
    element: 'Fuego'
}
const cursedDwarf = {
    name: 'Cursed Gimli',
    pAtk: 75,
    pDef: 75,
    healthPoints: 95,
    element: 'Tierra'
}
const orc2 = {
    name: 'Ugluk',
    pAtk: 65,
    pDef: 70,
    healthPoints: 95,
    element: 'Planta'
}
// Finaliza base de datos de personajes.

//Base de datos de armas medievales
const sword = {
    name: 'una Espada infernal',
    weaponPwr: 30,
    element: 'Fuego'
};
const bow = {
    name: 'el Arco del bosque',
    weaponPwr: 45,
    element: 'Planta'
};
const staff = {
    name: 'un Baculo de agua',
    weaponPwr: 40,
    element: 'Agua'
}

const axe = {
    name: 'un Hacha elemento tierra',
    weaponPwr: 40,
    element: 'Tierra'
};


// Logica para un roll random entre 0 y 20 para agregar al P.atk
const generadorRoll = () => {
    return Math.round(Math.random() * 30 )
}

//battle simulator


function pelea() {
    darkElfWizard.healthPoints -= (multiplier * (generadorRoll() + elfoWarrior.pAtk)  - darkElfWizard.pDef)
    elfoWarrior.healthPoints -= (darkElfWizard.pAtk - elfoWarrior.pDef)
    
    if (darkElfWizard.healthPoints <= 0 ){
        console.log('Felicitaciones ganaste la pelea')
    }else if (elfoWarrior.healthPoints > 0 ) {
        console.log('El enemigo sigue vivo, le queda ' + darkElfWizard.healthPoints + ' de HP y a ti te quedan ' + elfoWarrior.healthPoints + ' sigue peleando!')
    }else {
        console.log('Oh no! has perdido la batalla, mejor suerte la proxima.')} 
}

//equip item.
function equip(){
    elfoWarrior.pAtk += sword.weaponPwr
    elfoWarrior.element = sword.element
    console.log('Has equipado ' + sword.name + ', tu poder de Ataque base es de ' + elfoWarrior.pAtk + ' y ahora tu elemento es el ' + elfoWarrior.element)
}

//batalla con multiplicador por elemento.
var multiplier = 0

function peleaConArma(){
    
    if ((elfoWarrior.element === 'Tierra' && darkElfWizard.element === 'Agua') || (elfoWarrior.element === 'Agua' && darkElfWizard.element === 'Fuego') || (elfoWarrior.element === 'Fuego' && darkElfWizard.element === 'Planta') || (elfoWarrior.element === 'Planta' && darkElfWizard.element === 'Tierra')) {
        multiplier = 1.25
        return console.log('Super efectivo atacas con un multiplicador de ' + multiplier)
    }else if ((elfoWarrior.element === 'Agua' && darkElfWizard.element === 'Tierra') || (elfoWarrior.element === 'Fuego' && darkElfWizard.element === 'Agua') || (elfoWarrior.element === 'Planta' && darkElfWizard.element === 'Fuego') || (elfoWarrior.element === 'Tierra' && darkElfWizard.element === 'Planta')){
        multiplier = 0.75
        console.log('Not very efective, penalizacion activada, atacas con un multiplicador de' + multiplier)
    } else {
        multiplier = 1
        console.log('meh, times ' + multiplier + ' multiplier.')}
}

const edadesJugadores = [15, 25, 30, 45, 18, 17, 16, 18, 20] 
edadesJugadores.push = parseInt(prompt('Cuantos anios tienes?'))

//promedio de edades de los jugadores.


var resultado = 0 
var promedioEdades = 0

function promedio(){
    for (let i = 0 ; i < edadesJugadores.length ; i++){
        
        resultado += edadesJugadores[i]
        promedioEdades = resultado / edadesJugadores.length
    } return promedioEdades
}


console.log(edadesJugadores)
console.log('el promedio de edades de los jugadores es ' + promedio())
//edades de los jugadores ordenados por edad
console.log(edadesJugadores.sort())
equip()
peleaConArma()
pelea()
pelea()
pelea()
console.log(elfoWarrior)
console.log(darkElfWizard)

// CODIGO COMENTADO INTENCIONALMENTE, todavia sigo trabajando en esta opcion, o la otra con if que esta mas arriba, la idea es que el valor del objeto sea modificado durante el proceso logico y no permanentemente. los HP de los enemigos tienen que volver a su valor original. 

/*function pelea() { 
    let enemyHealthPoints = darkElfWizard.healthPoints
    let enemyPDef = darkElfWizard.pDef
    let playerPDef = elfoWarrior.pDef
    let playerHealthPoints = elfoWarrior.healthPoints

    for (let hpRestante = enemyHealthPoints ; hpRestante > 0 ; hpRestante ) {
        if(enemyHealthPoints <= 0){
            console.log('Felicitaciones, has ganado la batalla')
        }else{
        hpRestante -= (multiplier * (generadorRoll() + elfoWarrior.pAtk) - enemyPDef) 
        let playerHpRestante = playerHealthPoints - (darkElfWizard.pAtk - playerPDef)
        
        console.log('el enemigo tiene ' + hpRestante + ' a ti te quedan ' + playerHpRestante + ' sigue peleando') }
    }
    
}*/


