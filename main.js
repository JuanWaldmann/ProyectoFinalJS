// ===============================================================================
//  BASE DE DATOS
// ===============================================================================
// TODO - MIGRAR A UN NUEVO ARCHIVO.
let personajeElegido = {};
let enemigoElegido = {};
let armaElegida = {};
let multiplier = 0;

const personajesPrincipales = [
    {
        id: 1,
        name: "Legolas",
        class: "Elfo Warrior",
        description: "Powerful Elf archer with great attack, and weak defense",
        pAtk: 85,
        pDef: 65,
        healthPoints: 50,
        speed: 7,
    },
    {
        id: 2,
        name: "Aragorn",
        clase: "Human Warrior",
        description:
            "Legendary melee warrior, sword mastery, very strong defense weaker base attack",
        pAtk: 70,
        pDef: 80,
        healthPoints: 120,
        speed: 5,
    },
    {
        id: 3,
        name: "Gandalf",
        class: "Gray Wizard",
        description:
            "The gray wizard, very strong attack, low health points and very low defense",
        pAtk: 80,
        pDef: 55,
        healthPoints: 35,
        speed: 6,
    },
];
// base de datos de enemigos
const enemigosPrincipales = [
    {
        id: 1,
        name: "Saruman",
        class: "White Wizard",
        description:
            "The white wizard, few character need such little introduction, strong enemy. Bigger rewards.",
        pAtk: 90,
        pDef: 60,
        healthPoints: 55,
        element: "Agua",
    },
    {
        id: 2,
        name: "Azog",
        class: "Infernal Orc",
        description:
            "Created to cause death and destruction, beware with this beast it has very strong attack",
        pAtk: 80,
        pDef: 70,
        healthPoints: 75,
        element: "Fuego",
    },
    {
        id: 3,
        name: "Cursed Gimli",
        class: "Dead Dwarf",
        description:
            "Dwarves are normally pretty peaceful, unfortunately this enemy was attacked by a necromancer and got cursed for life",
        pAtk: 75,
        pDef: 75,
        healthPoints: 95,
        element: "Tierra",
    },
    {
        id: 4,
        name: "Ugluk",
        class: "Uruk-hai",
        description:
            "Strongest orc archer in the kingdom, be careful of its pearcing arrow",
        pAtk: 65,
        pDef: 70,
        healthPoints: 95,
        element: "Planta",
    },
];

//finaliza base de datos de enemigos, comienza base de datos de armas.

const armasMedievales = [
    {
        id: 1,
        name: "Espada infernal",
        description:
            "Poderosa espada creada en mordor, super efectiva contra enemigos bosque",
        pAtk: 30,
        element: "Fuego",
    },
    {
        id: 2,
        name: "Arco del bosque",
        description:
            "Arco y flecha encantados con el poder del bosque, super efectivo contra enemigos tierra",
        pAtk: 45,
        element: "Planta",
    },
    {
        id: 3,
        name: "Baculo de agua",
        description:
            "Un arma de hechicero con el poder del agua encantado, super efectivo contra enemigos Fuego",
        pAtk: 40,
        element: "Agua",
    },
    {
        id: 4,
        name: "Hacha elemento tierra",
        description:
            "Hacha legendaria creada por el pueblo enano especialmente encantada con el poder de la tierra, super efectiva contra enemigos agua",
        pAtk: 40,
        element: "Tierra",
    },
];

// Finaliza base de datos

// ===============================================================================
//  1. FUNCIONALIDAD.
// ===============================================================================

// === show CARDS PERSONAJES ===
personajesPrincipales.forEach((personajes) => {
    document.getElementById("namePersonajes").innerHTML += `   
    <div class="single-card-container" id=${personajes.id}> 
            <div class="cards-char"><div>
            <img src="https://dummyimage.com/150x150/000/fff" alt="...">
            <div>
                <h5>${personajes.name}</h5>
                <p>${personajes.description}</p>
            </div>
            <ul class="stats">
                <label class="p-atk">Power Atack</label><li>${
                                    personajes.pAtk
                                }</li>
                <label class="p-def">Defense</label><li>${personajes.pDef}</li>
                <div class="pos-rel">
                    <label class="hp">Health Points</label>
                    <div class="contenedorHp">
                        <input 
                            type="range" 
                            id="hpPersonaje${personajes.id}" 
                            class="inputRange" 
                            style="width: ${
                                                            personajes.healthPoints * 2
                                                        }px; border: none; outline: none;"
                            disabled 
                            min=0
                            max=180>
                    </div>
                    <label class="hpNegro">${personajes.healthPoints}</label>
                </div>
            </ul>
                <div>
                    <button class="primary-btn btn-choose" id="boton-elegir${
                                            personajes.id
                                        }">Choose</button>
                    <button class="primary-btn btn-equip">Equip Weapon</button>
                </div>        
            </div>
        </div>
    </div>`;
});

// === show CARDS ENEMIGOS ===
enemigosPrincipales.forEach((enemigos) => {
    document.getElementById(
        "cards-enemigos"
    ).innerHTML += `<div class="single-card-containerEne" id="${enemigos.id}"
    <div class="cards-enemys"><div>
    <img src="https://dummyimage.com/150x150/000/fff" alt="...">
    <div>
        <h5>${enemigos.name}</h5>
        <p>${enemigos.description}</p>
      </div>
      <ul class="stats">
        <label class="p-atk">Power Atack</label><li>${enemigos.pAtk}</li>
        <label class="p-def">Defense</label><li>${enemigos.pDef}</li>
        <div class="pos-rel"><label class="hp">Health Points</label><div class="contenedorHp"><input type="range" id="hpPersonaje${
                    enemigos.id
                }" class="inputRange" style="width: ${
        enemigos.healthPoints * 2
    }px"; disabled min=0 max=180></div><label class="hpNegro">${
        enemigos.healthPoints
    }</label></div>
      </ul>
      <div>
        <button class="primary-btn btn-choose" id="boton-elegir-enemigos${
                    enemigos.id
                }">Choose</button>
        <button class="primary-btn btn-equip">Equip Weapon</button>
      </div>
</div></div>
</div>`;
});

// === show CARDS WEAPONS ===
armasMedievales.forEach((armas) => {
    document.getElementById(
        "inventario"
    ).innerHTML += `<div class="armas-container"><div class="card cardsss" style="width: 18rem;">
    <div class="foto-container">
        <img src="..." class="" alt="...">
    </div>
    <div class="">
        <h5 class="">${armas.name}</h5>
        <p class="">${armas.description}</p>
    </div>
    <ul class="statsArmas">
        <label>Power Atack</label><li class="">${armas.pAtk}</li>
        <label>Elemento</label><li class="">${armas.element}</li>
    </ul>
    <div class="">
        <button>Choose</button>
        <button class="" id="boton-elegir-arma${armas.id}">Equip Weapon</button>
    </div>
    </div></div>`;
});

//====== show PERSONAJE ELEGIDO ========
function showCharacter() {
    document.getElementById(
        "personaje-elegido"
    ).innerHTML = `<div class="char-container"><div class="foto-char">
<div class="foto-name">
  <h3 class="name-char">${personajeElegido.name}</h3>
  <img src="https://dummyimage.com/150x150/000/fff" alt="">
</div>
</div>
<div class="info-char">
<ul class="stats">
        <label class="p-atk">Power Atack</label><li>${
                    personajeElegido.pAtk
                }</li>
        <label class="p-def">Defense</label><li>${personajeElegido.pDef}</li>
        <div class="elegido">
            <label class="hp">Health Points</label>
            <div class="contenedorHp">
            <input 
            type="range" 
            id="hpPersonaje${personajeElegido.id}" 
            class="inputRange" 
            style="width: ${
                            personajeElegido.healthPoints * 2
                        }px; border: none; outline: none;"
            disabled 
            min=0
            max=180>
            </div>
            <label class="hpNegro">${personajeElegido.healthPoints}</label>
        </div>
      </ul>
    </div>
</div>
</div>`;
}


    
        /* <div id="showWeapon" class="weapon-container">
<h5></h5>
</div>
<div id="show-enemy" class="enemy-container">
<h5></h5> */
 

// ===============================================================================
//  2. SELECTORS
// ===============================================================================

let botonInventario = document.querySelector(".botonInv");
let inventario = document.getElementById("inventario");
let botonCloseInventario = document.querySelector(".contenedor-btn");
let botonElegirWeapon = document.querySelectorAll(".btn-equip");
let barraParry = document.getElementById("barraParry");
let equipWeap = document.querySelectorAll(".equip-weapon");
let showChar = document.querySelectorAll(".single-card-container");
let showEne = document.querySelectorAll(".single-card-containerEne");
let btnElegir = document.querySelectorAll(".cards-char");

botonElegirWeapon.forEach((singleBtn) => {
    singleBtn.addEventListener("click", () => {
        showInventario();
    });
});

botonCloseInventario.addEventListener("click", () => {
    inventario.style.transform = "translateY(100%)";
});


// Displays Personaje en Section-
showChar.forEach((cardContainer) => {
    cardContainer.addEventListener("click", () => {
        // Tomar ID:
        const personajeAMostrar = cardContainer.id;

        // Settear Personaje:
        personajesPrincipales.map((personaje) => {
            if (personaje.id == personajeAMostrar) {
                personajeElegido = personaje;
            }
        });

        // Mostar:
        showCharacter();
    });
});
// Displays Enemigo en Section-
showEne.forEach((cardContainer) => {
    cardContainer.addEventListener("click", () => {
        // Tomar ID:
        const enemigoAMostrar = cardContainer.id;

        // Settear Personaje:
        enemigosPrincipales.map((enemigos) => {
            if (enemigos.id == enemigoAMostrar) {
                enemigoElegido = enemigos;
            }
        });

        // Mostar:
        showEnemy();
    });
});

document.getElementById("pelea").addEventListener("click", () => {
    pelea();
});

// === CHOOSE MAIN CHARACTER ===

personajesPrincipales.forEach((personaje) => {
    const btnElegir = `boton-elegir${personaje.id}`;
    document.getElementById(btnElegir).addEventListener("click", () => {
        // const nodo = e.target;
        // nodo.getAttribute = "data-id";
        personajeElegido = personaje;
        console.log(
            `Has elegido a ${personajeElegido.name} como heroe para luchar`
        );
        console.info("[240] Tu Personaje: ");
        console.log(personajeElegido);
    });
});

///////////////

/// === EQUIPPED WEAPON ===
function showWeapon() {
    document.getElementById(
        "personaje-elegido"
    ).innerHTML += `<div class="weapon-container"><div class="foto-char">
    <div class="foto-name">
      <h3 class="name-char">${armaElegida.name}</h3>
      <img src="https://dummyimage.com/150x150/000/fff" alt="">
    </div>
    </div>
    <div class="info-weapon">
    <ul class="stats">
            <label class="p-atk">Power Atack</label><li>${armaElegida.pAtk}</li>
            <label class="p-def">Element</label><li>${armaElegida.element}</li>            
          </ul>
        </div>
        </div>    
        `;
}

// === SHOw CHOSEN ENEMY READY TO BATTLE ===
function showEnemy() {
    const getDom = document.getElementById ('personaje-elegido')
    const getString = document.getElementById("showId")
        if (getString !== null){ 
            getDom.removeChild(getString)
        }
        getDom.insertAdjacentHTML('beforeend',  `<div class="enemy-container" id="showId">
    <div class="foto-char">
    <div class="foto-name">
    <h3 class="name-char">${enemigoElegido.name}</h3>
    <img src="https://dummyimage.com/150x150/000/fff" alt="">
    </div>
    </div>
    <div class="info-weapon">
    <ul class="stats">
    <label class="p-atk">Power Atack</label><li>${enemigoElegido.pAtk}</li>
    <label class="p-def">Element</label><li>${enemigoElegido.element}</li>
    <div class="elegido"><label class="hp">Health Points</label><div class="contenedorHp"><input type="range" id="hpPersonaje${enemigoElegido.id}" class="inputRange" style="width: ${enemigoElegido.healthPoints}px"; disabled min=0 max=180>
    </div>
    <label class="hpNegro">${enemigoElegido.healthPoints}</label>
    </div>
    </ul>
    </div>
    </div>`)        
        
}



    

// === CHOOSE ENEMY ===
enemigosPrincipales.forEach((enemigos) => {
    const btnElegirEnemigos = `boton-elegir-enemigos${enemigos.id}`;
    document.getElementById(btnElegirEnemigos).addEventListener("click", (e) => {
        const nodo = e.target;
        nodo.getAttribute("data-id");
        enemigoElegido = enemigos;
        console.log(
            `Has elegido a ${enemigoElegido.name} para atacar, mucha suerte`
        );
    });
});

// === GENERA NUMERO RANDOM PARA AGREGAR A LA BATALLA ===
const generadorRoll = () => {
    let numero = Math.round(Math.random() * 30);
    console.log("roll personaje" + numero);
    return numero;
};
const generadorRollEnemigo = () => {
    let numero = Math.round(Math.random() * 20);
    console.log("roll enemigo" + numero);
    return numero;
};

// === BATTLE SIMULATOR ===
function pelea() {
    let personajeElegidoPelea = personajeElegido;
    let enemigoElegidoPelea = enemigoElegido;
    console.log("hpInicial: " + enemigoElegidoPelea.healthPoints);
    enemigoElegidoPelea.healthPoints -=
        Math.abs(
            multiplier *
                (generadorRoll() + personajeElegidoPelea.pAtk + armaElegida.pAtk)
        ) - enemigoElegidoPelea.pDef;
    personajeElegidoPelea.healthPoints -= Math.abs(
        generadorRollEnemigo() +
            enemigoElegidoPelea.pAtk -
            personajeElegidoPelea.pDef
    );
    if (enemigoElegidoPelea.healthPoints <= 0) {
        console.log("Felicitaciones ganaste la pelea");
    } else if (
        enemigoElegidoPelea.healthPoints > 0 &&
        personajeElegidoPelea.healthPoints > 0
    ) {
        console.log(
            "El enemigo sigue vivo, le queda " +
                enemigoElegidoPelea.healthPoints +
                " de HP y a ti te quedan " +
                personajeElegidoPelea.healthPoints +
                " sigue peleando!"
        );
    } else {
        console.log("Oh no! has perdido la batalla, mejor suerte la proxima.");
    }
}

//============================ funcion equipar work in progress. todavia no anda.

// === CHOOSE WEAPON ===
armasMedievales.forEach((armas) => {
    const btnElegirArma = `boton-elegir-arma${armas.id}`;
    document.getElementById(btnElegirArma).addEventListener("click", () => {
        armaElegida = armas;
        personajeElegido.element = armaElegida.element;
        console.log(
            "Has equipado " +
                armaElegida.name +
                ", tu poder de Ataque base es de " +
                personajeElegido.pAtk +
                " y ahora tu elemento es " +
                personajeElegido.element
        );
        inventario.style.transform = "translateY(100%)";
        calcularMultiplier();
        showWeapon();
    });
});

//batalla con multiplicador por elemento. work in progress.

function calcularMultiplier() {
    if (
        (personajeElegido.element === "Tierra" &&
            enemigoElegido.element === "Agua") ||
        (personajeElegido.element === "Agua" &&
            enemigoElegido.element === "Fuego") ||
        (personajeElegido.element === "Fuego" &&
            enemigoElegido.element === "Planta") ||
        (personajeElegido.element === "Planta" &&
            enemigoElegido.element === "Tierra")
    ) {
        multiplier = 1.25;
        return console.log(
            "Super efectivo atacas con un multiplicador de " + multiplier
        );
    } else if (
        (personajeElegido.element === "Agua" &&
            enemigoElegido.element === "Tierra") ||
        (personajeElegido.element === "Fuego" &&
            enemigoElegido.element === "Agua") ||
        (personajeElegido.element === "Planta" &&
            enemigoElegido.element === "Fuego") ||
        (personajeElegido.element === "Tierra" &&
            enemigoElegido.element === "Planta")
    ) {
        multiplier = 0.75;
        console.log(
            "Not very efective, penalizacion activada, atacas con un multiplicador de" +
                multiplier
        );
    } else {
        multiplier = 1;
        console.log("meh, times " + multiplier + " multiplier.");
    }
}

// ===============================================================================
//  3. HELPERS FUNCTIONS
// ===============================================================================

function showInventario() {
    document.getElementById("inventario").style.transform = "translateY(0)";
}

// ===============================================================================
//  4. ANIMATION FUNCTIONS
// ===============================================================================

function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 5);
    elem.addEventListener("keydown", () => {
        if (pos >= 125 && pos <= 135) {
            clearInterval(id);
        } else {
            console.log("error");
        }
    });

    function frame() {
        if (pos == 250) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos * 2 + "px";
        }
    }
}
