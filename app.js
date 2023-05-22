//Modulos:
const argv=require(`process`).argv;
const calculadora=require(`./calculadora`);
//Variables:
const operacion= argv[2];
const numeroA= argv[3];
const numeroB=argv [4]

let resultado=0;

console.log(argv)

//funcionalidades:
if(typeof numeroA ===`undefined`|| typeof numeroB===`undefined`){
    console.log(`Por favor ingrese Dos numeros`);

}else{

     if (operacion===`sumar`){
    resultado=calculadora.sumar(+numeroA,+numeroB)
    console.log(`El resultado de la suma es ${resultado}`);
   }

   if (operacion ===`restar`){
    resultado=calculadora.restar(+numeroA,+numeroB)
    console.log(`El resultado de la restar es ${resultado}`);
  }
   if (operacion ===`multiplicar`){
    resultado=calculadora.multiplicar (+numeroA,+numeroB)
    console.log(`El resultado de la multiplicacion es ${resultado}`);
   }

    if (operacion ===`dividir`){
    resultado=calculadora.dividir(+numeroA,+numeroB)
    if(numeroA===0&& numeroB===0){
        return console.log(`0`)
    }
    console.log(`El resultado de la division es ${resultado}`)
    console.log("****************************");
}  
}///////////////////////////////