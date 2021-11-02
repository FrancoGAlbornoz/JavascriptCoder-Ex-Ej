
alert("Producto 1: $5000\n Producto 2: $8500\n Producto 3: $5500\n Producto 4: $6000\n Producto 5: $7000\n Producto 6: $9000\n")
let productoN=Number(prompt("Ingrese el producto que desea comprar. 0 Para finalizar\n Producto 1:Teclado MarvoScorpion \nProducto 2: Mouse Logitech MX Anyw \nProducto 3: Mouse XPGamer \nProducto 4: Auriculares Gamemax G200 \nProducto 5: Microfono HyperX QuadCast \nProducto 6: Teclado Redragon K552 Kumara"));
let precioP=0
let precioT=0

function sumar(){

	precioT=precioT+precioP

}

function desc(){
	if(precioT>=30000){
		precioT=precioT*0.15
		alert("Recibiras un descuento del 15%. Gracias")
	}

}


function promo(){
	if(precioT>=30000){
		desc()
		alert("Recibe promocion");
	}
	else{
		alert("No alcanza para la promocion");
	}
}


while(productoN != 0){

	switch(productoN){
		case 1:
			let prod1=5000
			precioT=precioT+prod1
			//console.log(producto1)
			
			
		case 2:
			let prod2=8500
			precioT=precioT+prod2
			//console.log(producto2)
			
		case 3:
			let prod3=5500
			precioT=precioT+prod3
			//console.log(producto3)
			
		case 4:
			let prod4=6000 
			precioT=precioT+prod4
			//console.log(producto4)
			
		case 5:
			let prod5=7000
			precioT=precioT+prod5
			//console.log(producto5)
			
		case 6:
			let prod6=9000
			precioT=precioT+prod6

			//console.log(producto6)
		

		default:

			alert("Ingrese su opcion")

	}


	sumar();
	alert("Producto 1: $5000\n Producto 2: $8500\n Producto 3: $5500\n Producto 4: $6000\n Producto 5: $7000\n Producto 6: $9000\n")
	productoN=Number(prompt("Ingrese el producto que desea comprar. 0 Para finalizarProducto 1:Teclado MarvoScorpion \nProducto 2: Mouse Logitech MX Anyw \nProducto 3: Mouse XPGamer \nProducto 4: Auriculares Gamemax G200 \nProducto 5: Microfono HyperX QuadCast \nProducto 6: Teclado Redragon K552 Kumara"));
}

alert("El precio total de sus productos es: " +precioT)
promo();
