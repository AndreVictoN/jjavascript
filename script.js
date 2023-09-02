var T = prompt('Digite um Tempo:');
var V = prompt('Digite uma velocidade:');
var So = prompt('Digite a distância inicial:');
var Vo = prompt('Digite uma velocidade inicial:');
var A = prompt('Digite uma aceleração:');
var DS = prompt('Digite a distância percorrida:');
var S = parseInt(So) + parseInt(V) * parseInt(T);
var SMRUV = parseInt(So) + (parseInt(Vo) * parseInt(T)) + (parseInt(A) * parseInt(T) * parseInt(T) / 2);
var Vf2 = (Vo * Vo) + (2 * A * DS);
var Vf = Math.sqrt(Vf2);

document.write("MRU: " + S + "<br>" + "MRUV: " + SMRUV + "<br>" + "Torricelli: " + Vf);