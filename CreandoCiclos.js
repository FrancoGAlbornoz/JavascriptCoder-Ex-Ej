let userName= prompt("Ingrese nombre");
let userLastName= prompt("Ingrese apellido");
let id= Number(prompt("Ingrese su ID"));


let productoN=Number(prompt("Ingrese el producto que desea comprar. 0 Para finalizar\n Producto 1:Teclado MarvoScorpion \nProducto 2: Mouse Logitech MX Anyw \nProducto 3: Mouse XPGamer \nProducto 4: Auriculares Gamemax G200 \nProducto 5: Microfono HyperX QuadCast \nProducto 6: Teclado Redragon K552 Kumara"));


while(productoN != 0){

switch(productoN){
    case 1:

        console.log(producto1)
        
        break;
    case 2:
        console.log(producto2)
        
        break;
    case 3:
        console.log(producto3)
        
        break;
    case 4:
        console.log(producto4)
        
        break;
    case 5:
        console.log(producto5)
        
        break;
    case 6:
        console.log(producto6)
        break;

    default:

        alert("Ingrese su opcion");
        break;


}
productoN=Number(prompt("Ingrese el producto que desea comprar. 0 Para finalizar"));


}