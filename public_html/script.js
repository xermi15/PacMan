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

//DONE:
//- Mostra per pantalla tots els elements
//NOT DONE:
//- Que el joc comensi
//- Bucle de temps perque el joc acabi
//- Altres?
function start(){
    dadesInicialsJugador(j1);
    dadesInicialsFantasma(f1);
    dadesInicialsFantasma(f2);
    dadesInicialsFantasma(f3);
    pintar();
}

//DONE:
//mostra tota la info de TAULER per pantalla
//NOT DONE (EXTRA):
//- Colocar-ho en una taula HTML (Punt 5)
//- Mostrar parets en comptes de lletres (Punt 5)
function pintar() {
    for (var i = 0; i < 43; i++) {
        for (var j = 0; j < 29; j++) {
            if (tauler[i][j] == 1) {
                document.write("&nbsp;");
            }
            else if(tauler[i][j] == 2) {
                document.write("C");
            }
            else if(tauler[i][j] == 3) {
                document.write("M");
            }
            else document.write("X");
        }
        document.write("<br>");
    }
}

//DONE
//- assigna dades inicials a l'element jugador
//NOT DONE
//- Direccio inicial a la que vol anar?
function dadesInicialsJugador(jugador) {
    var x, y, dir1, dir2;

    do {
        x = Math.floor((Math.random() * 29) + 0);
        y = Math.floor((Math.random() * 42) + 0);
    } while (!comprobarPosicio(y, x))

    dir1 = direccioInicial(y, x);
    dir2 = dir1;
    
    //introduim el jugador al tauler
    tauler[y][x] = 2;
}

//DONE
//- assigna dades inicials a l'element fantasma
//NOT DONE
//-
function dadesInicialsFantasma(fantasma) {
    var x, y, dir1;

    do {
        x = Math.floor((Math.random() * 29) + 0);
        y = Math.floor((Math.random() * 42) + 0);
    } while (!comprobarPosicio(y, x))

    dir1 = direccioInicial(y, x);
    //introduim el jugador al tauler
    tauler[y][x] = 3;
}

//DONE
//- comproba que la posicio dun element sigui valida
//NOT DONE
//-
function comprobarPosicio(Y, X) {
    var ok = false;
    if (tauler[Y][X] == 1) {
        ok = true;
    }
    return ok;
}

//DONE
//assigna una nova direccio aleatoria a un element
//NOT DONE
//-
function direccioInicial(Y, X) {
    var direccions = new Array();
    var trobada = false;
    var dirIni;
    var x;
    
    //comprovem si podem anar a cada una de les direccions
    if(comprobarPosicio(Y+1, X) == 1) direccions[1] = 1;
    else direccions[1] = 0;
    if(comprobarPosicio(Y, X+1) == 1) direccions[2] = 1;
    else direccions[2] = 0;
    if(comprobarPosicio(Y-1, X) == 1) direccions[3] = 1;
    else direccions[3] = 0;
    if(comprobarPosicio(Y, X-1) == 1) direccions[4] = 1;
    else direccions[4] = 0;

    //Assignem una direccio aleatoria de les disponibles, a una var auxiliar
    do {
        x = Math.floor((Math.random() * 4) + 1);
        if(direccions[x] == 1) {
            trobada = true;
            dirIni = x;
        }
    } while (!trobada)

    //retornem la direccio inicial
    return dirIni;
}

//DONE
//assigna una nova direccio aleatoria a un element
//NOT DONE
//- Que la direccio no sigui aleatoria
function novaDireccio(Y, X) {
    var direccions = new Array();
    var trobada = false;
    var novaDir;
    var x;

    //comprovem si podem anar a cada una de les direccions
    if(comprobarPosicio(Y+1, X) == 1) direccions[1] = 1;
    else direccions[1] = 0;
    if(comprobarPosicio(Y, X+1) == 1) direccions[2] = 1;
    else direccions[2] = 0;
    if(comprobarPosicio(Y-1, X) == 1) direccions[3] = 1;
    else direccions[3] = 0;
    if(comprobarPosicio(Y, X-1) == 1) direccions[4] = 1;
    else direccions[4] = 0;

    //Assignem una direccio aleatoria de les disponibles, a una var auxiliar
    do {
        x = Math.floor((Math.random() * 4) + 1);
        if(direccions[x] == 1) {
            trobada = true;
            novaDir = x;
        }
    } while (!trobada)

    //retornem la direccio inicial
    return novaDir;
}
