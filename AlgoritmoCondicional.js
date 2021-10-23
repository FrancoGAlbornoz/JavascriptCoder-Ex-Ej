let nombreI= prompt("Ingrese su nombre")
console.log(nombreI)

let edadI= prompt("Ingresa tu edad")
let edad=parseInt(edadI)

if(edad>18){
    alert("Bienvenido.")
}else{
    alert("No puedes ingresar a esta pagina")
}

alert("Su compra debe superar los $2000")

let vcompraI = prompt("Ingrese el valor de su compra")
let compra= parseInt(vcompraI)

if(compra>2000){
    alert("Disfrute su producto")
}else{
    alert("Su compra no supera el limite")
}