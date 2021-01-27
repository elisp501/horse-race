'use strict'
// --------------------------------------- Pagina 1 ---------------------------------------
function addNumber() {
    document.getElementById("page1").classList.remove('display-block');
    document.getElementById("page1").classList.add('display-none');
    document.getElementById("page2").classList.remove('display-none');
    document.getElementById("page2").classList.add('display-block');
}

// --------------------------------------- Pagina 2 ---------------------------------------
// Definición de variables

let oHorse1 = '';
let oHorse2 = '';
let oHorse3 = '';
let oHorse4 = '';
let chosenHorses = [];

// Clase de cada uno de los caballos.
class Horse {
    constructor(name, cuota, breed, speed, gambler, gambles, image, gif) {
        this.pName = name;
        this.pCuota = cuota;
        this.pBreed = breed;
        this.pSpeed = speed;
        this.pGambler = gambler;
        this.pGambles = gambles;
        this.pArrivalTime = 0;
        this.pImage = image;
        this.pGif = gif;
    }
    // Método (Función) para determinar la velocidad de cada caballo.
    timeRace(timeIni, timefin) {
        return (Math.random() * timefin) + timeIni + 's';
    }
}

// Instanciar el objeto para cada uno de los caballos
oHorse1 = new Horse('Cinamon', 3, 'Caballo Árabe', '92 km/h', "", 0, "", "./styles/images/horse1.gif");
oHorse2 = new Horse('Champ', 2, 'Purasangre', '88 km/h', "", 0, "", "./styles/images/horse2.gif");
oHorse3 = new Horse('Autum', 3, 'Shire', '100 km/h', "", 0, "", "./styles/images/horse3.gif");
oHorse4 = new Horse('Rapunzel', 2, 'Caballo Andaluz', '89 km/h', "", 0, "", "./styles/images/horse4.gif");


// Insertar información de los objetos
// Caballo 1
document.getElementById("idName1").innerHTML = oHorse1.pName;
document.getElementById("idBreedH1").innerHTML = oHorse1.pBreed;
document.getElementById("idSpeedH1").innerHTML = oHorse1.pSpeed;

// Caballo 2
document.getElementById("idName2").innerHTML = oHorse2.pName;
document.getElementById("idBreedH2").innerHTML = oHorse2.pBreed;
document.getElementById("idSpeedH2").innerHTML = oHorse2.pSpeed;

// Caballo 3
document.getElementById("idName3").innerHTML = oHorse3.pName;
document.getElementById("idBreedH3").innerHTML = oHorse3.pBreed;
document.getElementById("idSpeedH3").innerHTML = oHorse3.pSpeed;

// Caballo 4
document.getElementById("idName4").innerHTML = oHorse4.pName;
document.getElementById("idBreedH4").innerHTML = oHorse4.pBreed;
document.getElementById("idSpeedH4").innerHTML = oHorse4.pSpeed;

// Elegir un caballo
function chooseHorse1() {
    document.getElementById("betOnHorse1").classList.remove('btn-disabled');
    chosenHorses.push(oHorse1);
    console.log(chosenHorses)
}
function chooseHorse2() {
    document.getElementById("betOnHorse2").classList.remove('btn-disabled');
    chosenHorses.push(oHorse2);
    console.log(chosenHorses)
}
function chooseHorse3() {
    document.getElementById("betOnHorse3").classList.remove('btn-disabled');
    chosenHorses.push(oHorse3);
    console.log(chosenHorses)
}
function chooseHorse4() {
    document.getElementById("betOnHorse4").classList.remove('btn-disabled');
    chosenHorses.push(oHorse4);
    console.log(chosenHorses)
}

//Apostarle a un caballo
function betOnHorse1() {
    document.getElementById("page2").classList.remove('display-block');
    document.getElementById("page2").classList.add('display-none');
    document.getElementById("betsHorse1").classList.remove('display-none');
    document.getElementById("betsHorse1").classList.add('display-block');
}
function betOnHorse2() {
    document.getElementById("page2").classList.remove('display-block');
    document.getElementById("page2").classList.add('display-none');
    document.getElementById("betsHorse2").classList.remove('display-none');
    document.getElementById("betsHorse2").classList.add('display-block');
}
function betOnHorse3() {
    document.getElementById("page2").classList.remove('display-block');
    document.getElementById("page2").classList.add('display-none');
    document.getElementById("betsHorse3").classList.remove('display-none');
    document.getElementById("betsHorse3").classList.add('display-block');
}
function betOnHorse4() {
    document.getElementById("page2").classList.remove('display-block');
    document.getElementById("page2").classList.add('display-none');
    document.getElementById("betsHorse4").classList.remove('display-none');
    document.getElementById("betsHorse4").classList.add('display-block');
}

// Botón para siguiente página
function goToTracks() {
    document.getElementById("page2").classList.remove('display-block');
    document.getElementById("page2").classList.add('display-none');
    document.getElementById("page3").classList.remove('display-none');
    document.getElementById("page3").classList.add('display-block');
}

// --------------------------------------- Pagina 2.1 ---------------------------------------
function addBet1() {
let name1 = document.getElementById("name1").value
let bet1 = document.getElementById("bet1").value

oHorse1.pGambler = name1;
oHorse1.pGambles = bet1;

document.getElementById("betsTable1").innerHTML += 
            `<tbody>
                <tr>
                    <td>${name1}</td>
                    <td>$ ${bet1}</td>
                </tr>
            </tbody>`
}

// Botón de regresar
function goBack1() {
    document.getElementById("betsHorse1").classList.remove('display-block');
    document.getElementById("betsHorse1").classList.add('display-none');
    document.getElementById("page2").classList.remove('display-none');
    document.getElementById("page2").classList.add('display-block');
}

// --------------------------------------- Pagina 2.2 ---------------------------------------
function addBet2() {
let name2 = document.getElementById("name2").value
let bet2 = document.getElementById("bet2").value
console.log(bet2);

oHorse2.pGambler = name2;
oHorse2.pGambles = bet2;

document.getElementById("betsTable2").innerHTML += 
            `<tbody>
                <tr>
                    <td>${name2}</td>
                    <td>$ ${bet2}</td>
                </tr>
            </tbody>`
}

// Botón de regresar
function goBack2() {
    document.getElementById("betsHorse2").classList.remove('display-block');
    document.getElementById("betsHorse2").classList.add('display-none');
    document.getElementById("page2").classList.remove('display-none');
    document.getElementById("page2").classList.add('display-block');
}

// --------------------------------------- Pagina 2.3 ---------------------------------------
function addBet3() {
let name3 = document.getElementById("name3").value
let bet3 = document.getElementById("bet3").value
console.log(bet3);

oHorse3.pGambler = name3;
oHorse3.pGambles = bet3;

document.getElementById("betsTable3").innerHTML += 
            `<tbody>
                <tr>
                    <td>${name3}</td>
                    <td>$ ${bet3}</td>
                </tr>
            </tbody>`
}

// Botón de regresar
function goBack3() {
    document.getElementById("betsHorse3").classList.remove('display-block');
    document.getElementById("betsHorse3").classList.add('display-none');
    document.getElementById("page2").classList.remove('display-none');
    document.getElementById("page2").classList.add('display-block');
}

// --------------------------------------- Pagina 2.4 ---------------------------------------
function addBet4() {
let name4 = document.getElementById("name4").value
let bet4 = document.getElementById("bet4").value
console.log(bet4);

oHorse4.pGambler = name4;
oHorse4.pGambles = bet4;

document.getElementById("betsTable4").innerHTML += 
            `<tbody>
                <tr>
                    <td>${name4}</td>
                    <td>$ ${bet4}</td>
                </tr>
            </tbody>`
}

// Botón de regresar
function goBack4() {
    document.getElementById("betsHorse4").classList.remove('display-block');
    document.getElementById("betsHorse4").classList.add('display-none');
    document.getElementById("page2").classList.remove('display-none');
    document.getElementById("page2").classList.add('display-block');
}
// --------------------------------------- Pagina 3 ---------------------------------------

// Definición de variables
let arrival = [];
let winnings = 0;

function fstartButton() {
    fhowManyHorses(chosenHorses);
    document.getElementById("startButton").classList.add('display-none');
}

// Agregar los gifs a los objetos
document.getElementById("horse1").src = oHorse1.pGif;
document.getElementById("horse2").src = oHorse2.pGif;
document.getElementById("horse3").src = oHorse3.pGif;
document.getElementById("horse4").src = oHorse4.pGif;

// Aplicar velocidades

document.getElementById("horse1").style.animationDuration = oHorse1.timeRace(3, 7); 
document.getElementById("horse2").style.animationDuration = oHorse2.timeRace(3, 7);
document.getElementById("horse3").style.animationDuration = oHorse3.timeRace(3, 7);
document.getElementById("horse4").style.animationDuration = oHorse4.timeRace(3, 7);

// Inicio de la carrera

//Función que hace visible cada uno de los caballo en el arreglo de caballos elegidos en la página 2
function fhowManyHorses(chosenHorses) {
    document.querySelector(".all-tracks-hidden").style.display = 'block';
    chosenHorses.forEach((horse)=>{
        if (horse.pName === 'Cinamon') {
            document.getElementById("track1").classList.remove('track-hidden');
            document.getElementById("track1").classList.add('track-active');
        }
        if (horse.pName === 'Champ') {
            document.getElementById("track2").classList.remove('track-hidden');
            document.getElementById("track2").classList.add('track-active');
        }
        if (horse.pName === 'Autum') {
            document.getElementById("track3").classList.remove('track-hidden');
            document.getElementById("track3").classList.add('track-active');
        }
        if (horse.pName === 'Rapunzel') {
            document.getElementById("track4").classList.remove('track-hidden');
            document.getElementById("track4").classList.add('track-active');
        }
    })
}

document.addEventListener('animationend', (infoEnd) => {
    let arrivalId = infoEnd.srcElement.id
    switch (arrivalId) {
        case 'horse1':
            document.getElementById("horse1").classList.add('horse-hidden');
            oHorse1.pArrivalTime = infoEnd.elapsedTime.toFixed(2);
            arrival.push(oHorse1);
            break;
        case 'horse2':
            document.getElementById("horse2").classList.add('horse-hidden');
            oHorse2.pArrivalTime = infoEnd.elapsedTime.toFixed(2);
            arrival.push(oHorse2);
            break;
        case 'horse3':
            document.getElementById("horse3").classList.add('horse-hidden');
            oHorse3.pArrivalTime = infoEnd.elapsedTime.toFixed(2);
            arrival.push(oHorse3);
            break;
        case 'horse4':
            document.getElementById("horse4").classList.add('horse-hidden');
            oHorse4.pArrivalTime = infoEnd.elapsedTime.toFixed(2);
            arrival.push(oHorse4);
            break;
        
    }

    if (arrival.length === chosenHorses.length) {
        document.getElementById("page3").classList.remove('display-block');
        document.getElementById("page3").classList.add('display-none');
        document.getElementById("page4").classList.remove('display-none');
        document.getElementById("page4").classList.add('display-block');

        winnings = Number(arrival[0].pGambles) * arrival[0].pCuota;

        arrival.forEach((eachHorse, i) => {
            document.getElementById("winners").innerHTML += 
            `<tbody>
                <tr>
                    <td>${i+1}</td>
                    <td>${eachHorse.pName}</td>
                    <td>${eachHorse.pArrivalTime} segundos</td>
                    <td>${eachHorse.pGambler}</td>
                    <td>$ ${eachHorse.pGambles}</td>
                    <td>$ ${winnings}</td>
                </tr>
            </tbody>`
            winnings = 0;
        })
    }   
});

function actualizar(){location.reload(true);}



