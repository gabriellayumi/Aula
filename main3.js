var temperatura = 10
var tipoTemperatura = "C"
var temperaturaConvertida = 0

if (tipoTemperatura =="C"){
    console.log("voce escolheu celsius!")
    temperaturaConvertida = ((temperatura * 1.8) + 32)
}else {
    console.log("Voce escolheu Fahrenheiti!")
    temperaturaConvertida = ((temperatura- 32 )* (5/9))
}
console.log("o valor convertido é: "+ temperaturaConvertida)    