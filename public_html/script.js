//DIRECCIONS dels jugadors i fantasmes
// 1 a dalt     ^
// 2 dreta      >
// 3 a baix     v
// 4 esquerra   <

//Array Jugador, es donen valors mes endavant:
//X i Y al tauler. Direccio actual. Direccio desitjada.
var j1 = new Array();

//Array Fantasma, es donen valors mes endavant:
//X i Y al tauler. Direccio actual.
var f1 = new Array();
var f2 = new Array();
var f3 = new Array();

//variables de suport a les iteracions
var iterar;
var acabat = false;
var colisio = false;
var tempsJoc = 0;
var direccions = new Array();

//variable tauler
var tauler = new Array();
tauler = [
    tauler[42] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    tauler[41] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    tauler[40] = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    tauler[39] = [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    tauler[38] = [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    tauler[37] = [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    tauler[36] = [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    tauler[35] = [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    tauler[34] = [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    tauler[33] = [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    tauler[32] = [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
    tauler[31] = [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    tauler[30] = [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    tauler[29] = [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    tauler[28] = [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    tauler[27] = [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
    tauler[26] = [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    tauler[25] = [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    tauler[24] = [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    tauler[23] = [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    tauler[22] = [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    tauler[21] = [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    tauler[20] = [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    tauler[19] = [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    tauler[18] = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    tauler[17] = [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    tauler[16] = [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    tauler[15] = [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    tauler[14] = [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    tauler[13] = [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    tauler[12] = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    tauler[11] = [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    tauler[10] = [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
    tauler[9] = [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    tauler[8] = [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    tauler[7] = [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
    tauler[6] = [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    tauler[5] = [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    tauler[4] = [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    tauler[3] = [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    tauler[2] = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    tauler[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    tauler[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

];

//---------------------------------"Main"---------------------------------

//Funcio encarregada de posar en marxa el joc
//DONE:
//- Mostra per pantalla tots els elements
//- Que el joc comensi
//- Bucle de temps
//- Que el joc acabi
//- TODO: Restart?
function start() {
    dadesInicialsJugador(j1);
    dadesInicialsFantasma(f1);
    dadesInicialsFantasma(f2);
    dadesInicialsFantasma(f3);
    pintar();
    setInterval(iteracio, 130);
    //restart();
}

//Funcio encarregada de fer les iteracions

function iteracio() {
    //if(acabat) clearInterval(iterar);
    //moureJugador(j1);
    moureFantasma(f1);
    moureFantasma(f2);
    moureFantasma(f3);
    tempsJoc++;
    //comprovarColisio();
    //comprovarTemps();
    pintar();
}

//Funcio encarregada de pintar el tauler
//DONE:
//mostra tota la info de TAULER per pantalla
//NOT DONE (EXTRA):
//- Colocar-ho en una taula HTML (Punt 5)
//- Mostrar parets en comptes de lletres (Punt 5)
function pintar() {
    var laberint = "";
    for (var i = 0; i < 43; i++) {
        for (var j = 0; j < 29; j++) {
            if (tauler[i][j] == 1) {
                laberint += "&nbsp;";
            } else if (tauler[i][j] == 2) {
                laberint += "<span class='jugador'>C</span>";
            } else if (tauler[i][j] == 3) {
                laberint += "<span class='fantasma'>M</span>";
            } else laberint += "X";
        }
        laberint += "<br>";
    }

    document.getElementById("tauler").innerHTML = laberint;
}

//---------------------------------Dades Inicials---------------------------------

//Funcio encarregada d'assignar les dades inicials al jugador
//- assigna dades inicials a l'element jugador
//- TODO: Que no estigui en la mateixa posicio que un fantasma, ni a prop!
//- TODO: Direccio inicial a la que vol anar?
//- TODO: que despres de moures el tauler marqui una altre cop buit(1)
function dadesInicialsJugador(jugador) {
    var x, y;

    do {
        x = Math.floor((Math.random() * 29) + 0);
        y = Math.floor((Math.random() * 42) + 0);
    } while (!comprobarPosicio(y, x))


    //donem valors al jugador
    jugador[1] = x;
    jugador[2] = y;
    jugador[3] = direccioInicial(y, x);
    jugador[4] = direccioInicial(y, x);

    //introduim el jugador al tauler
    tauler[y][x] = 2;

}

//Funcio encarregada d'assignar les dades inicials al jugador
//- assigna dades inicials a l'element fantasma
//-TODO: separats
//-TODO: que despres de moures el tauler marqui una altre cop buit(1)
function dadesInicialsFantasma(fantasma) {
    var x, y;
    var separats = false;

    do {
        x = Math.floor((Math.random() * 29) + 0);
        y = Math.floor((Math.random() * 42) + 0);
    } while (!comprobarPosicio(y, x))

    //donem valors al fantasma
    fantasma[1] = x;
    fantasma[2] = y;
    fantasma[3] = direccioInicial(y, x);

    //introduim el fantasma al tauler
    tauler[y][x] = 3;
}

//Funcio encarregada de comprobar la posicio d'un element
//- comproba que la posicio dun element sigui valida
function comprobarPosicio(Y, X) {
    var ok = false;
    if (tauler[Y][X] == 1) {
        ok = true;
    }
    return ok;
}

//Funcio encarregada d'assignar la direccio inicial d'un element
//- assigna una direccio inicial aleatoria a un element
function direccioInicial(Y, X) {
    var direccions = new Array();
    var trobada = false;
    var dirIni;
    var aux;

    //comprovem si podem anar a cada una de les direccions
    if (comprobarPosicio(Y + 1, X) == 1) direccions[1] = 1;
    else direccions[1] = 0;
    if (comprobarPosicio(Y, X + 1) == 1) direccions[2] = 1;
    else direccions[2] = 0;
    if (comprobarPosicio(Y - 1, X) == 1) direccions[3] = 1;
    else direccions[3] = 0;
    if (comprobarPosicio(Y, X - 1) == 1) direccions[4] = 1;
    else direccions[4] = 0;

    //Assignem una direccio aleatoria de les disponibles, a una var auxiliar
    do {
        aux = Math.floor((Math.random() * 4) + 1);
        if (direccions[aux] == 1) {
            trobada = true;
            dirIni = aux;
        }
    } while (!trobada)

    //retornem la direccio inicial
    return dirIni;
}

//---------------------------------Moviment Elements---------------------------------

//Funcio encarregada d'assignar una nova direccio a un fantasma
//- Comprova les direccions a les que pot anar un fantasma
//- En cas d'estar a una cruilla tria una direccio que no sigui l'actual a la inversa
//- En el cas d'una paret, que trii qualsevol
function novaDireccioFantasma(fantasma) {
    var trobada = false;
    var novaDir;
    var aux;
    var numDir = 0;

    comprovarDireccions(fantasma, direccions);

    //calculem el numero de direccions possibles
    for (var i = 1; i < 5; i++) {
        if (direccions[i] === 1) numDir++;
    }

    //en el cas de que sigui una cruilla, que no torni enrere
    if (numDir > 2) {
        do {
            aux = Math.floor((Math.random() * 4) + 1);
            if ((direccions[aux] == 1) && (fantasma[3] != contrari(fantasma))) {
                trobada = true;
                novaDir = aux;
            }
        } while (!trobada)
    }

    //dues direccions possibles
    if(numDir <= 2) {
        do {
            aux = Math.floor((Math.random() * 4) + 1);
            if(direccions[aux] == 1){
                //si estem en un tunel, nomes poden seguir recte
                if(tunel(direccions)){
                    trobada = true;
                    novaDir = fantasma[3];
                   }
                //si ens trobem una paret, qualsevol de les dues direccions es bona
                else{
                    trobada = true;
                    novaDir = aux;
                }
            }
        } while (!trobada)
    }

    //assignem la nova direccio al fantasma
    fantasma[3] = novaDir;
}

//Funcio encarregada de comprovar si un fantasma va enrere
//- Retorna la direccio contraria a la que va el fantasma
function contrari(fantasma){
    var vContrari;
    if(fantasma[3] == 1) vContrari = 3;
    if(fantasma[3] == 2) vContrari = 4;
    if(fantasma[3] == 3) vContrari = 1;
    if(fantasma[3] == 4) vContrari = 2;
    return vContrari;
}

//Funcio encarregada de comprovar si un fantasma esta en un tunel
//- Comprova si a l'array direccions hi ha els dos sentits d'una direccio
//- Retorna un boolea
function tunel(direccions){
    var vTunel = false;
    if ((direccions[1] == 1) && (direccions[3] == 1)) vTunel = true;
    if ((direccions[2] == 1) && (direccions[4] == 1)) vTunel = true;
    return vTunel;
}

//Funcio encarregada de comprovar totes les direccions a les que pot anar un element
//- Per a cada direccio, comprova si la seguent posicio es valida i, per tant, la direccio
//  en la que se situa aquella posicio respecte l'element
//- Retorna l'array direccions completat
function comprovarDireccions(element, direccions){
    var x = element[2];
    var y = element[1];
    //comprovem si podem anar a cada una de les direccions
    if (comprobarPosicio(x + 1, y) == 1) direccions[1] = 1;
    else direccions[1] = 0;
    if (comprobarPosicio(x, y + 1) == 1) direccions[2] = 1;
    else direccions[2] = 0;
    if (comprobarPosicio(x - 1, y) == 1) direccions[3] = 1;
    else direccions[3] = 0;
    if (comprobarPosicio(x, y - 1) == 1) direccions[4] = 1;
    else direccions[4] = 0;
}

//Funcio encarregada de moure el fantasma
//- Aconseguir una nova direccio
//- Pintar el fantasma al tauler
function moureFantasma(fantasma) {
    novaDireccioFantasma(fantasma);
    
    if (fantasma[3] === 1) {
        tauler[fantasma[2]][fantasma[1]] = 1;
        fantasma[2] += 1;
        tauler[fantasma[2]][fantasma[1]] = 3;
    }
    if (fantasma[3] === 2) {
        tauler[fantasma[2]][fantasma[1]] = 1;
        fantasma[1] += 1;
        tauler[fantasma[2]][fantasma[1]] = 3;
    }
    if (fantasma[3] === 3) {
        tauler[fantasma[2]][fantasma[1]] = 1;
        fantasma[2] += -1;
        tauler[fantasma[2]][fantasma[1]] = 3;
    }
    if (fantasma[3] === 4) {
        tauler[fantasma[2]][fantasma[1]] = 1;
        fantasma[1] += -1;
        tauler[fantasma[2]][fantasma[1]] = 3;
    }
}


//BUGS: (coses completades)
//- Hi ha vegades en que es coloca, inicialment, un fantasma o jugador sobre un mur



//punt4
//quan el jugador estigui en la mateixa casella que un fantasma DONE
//Pero: si la diferencia es parella, no estaran mai a la mateixa casella
//Moviment propi: detectar tecles: estar al github de la assignatura, no esta acabada
//
//punt5
//canvas esta al github de lassignatura
