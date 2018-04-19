var i = 0, ri = 1, m = "" , p=""; 



function agregar(){
	i++;

	var Cliente = document.getElementById("Cliente").value ;
    document.getElementById("nombre2").innerHTML = Cliente; 

	var tb= document.getElementById("data");
	var Producto =document.getElementById("Producto").value ;
	var Cantidad = document.getElementById("Cantidad").value;
	var Precio = document.getElementById("Precio").value;

	var Total = parseInt(parseInt(Cantidad)*parseInt(Precio));
	var fila = "<tr><td>"+i+"</td><td>"+Producto+"</td><td >"+Cantidad+"</td><td>"+Precio+"</td><td>"+Total+"</td><td><a href='#' onclick='Guardar_Edicion()'><img src='imagenes/e.png'><a href='#' onclick='eliminar(this)'><img src='imagenes/d.png'></tr>";
	var fil =document.createElement("tr");
	fil.innerHTML=fila;
	tb.appendChild(fil);
	mensaje("Registro Guardado");
	limpiar();

}
function mensaje(x){
	alert(x);

}

function eliminar(p){   
    var option = confirm("¿Desea Eliminar...?");
    if (option == true) {
        var i = p.parentNode.parentNode.rowIndex;
        document.getElementById("data").deleteRow(i++);
        mensaje("Registro Eliminado correctamente...!");        
    } else {
        mensaje("Registro no se eliminó...!");     
    }
}
function limpiar(){
    document.getElementById("Cantidad").value = "";
    document.getElementById("Precio").value = "";
    document.getElementById("Cliente").focus();
}
function Guardar_Edicion()
{   var opcion = confirm("¿Desea Modificar...?");
    if (opcion == true) {
        data.rows[ri].cells[2].innerHTML = document.getElementById("Cantidad").value;
        data.rows[ri].cells[3].innerHTML = document.getElementById("Precio").value;
        data.rows[ri].cells[4].innerHTML = document.getElementById("Total").value;
        var Total= parseInt(parseInt(Cantidad)*parseInt(Precio));

        mensaje("Registro Modificado Correctamente...!");
        limpiar();
    } else {
        mensaje("Registro no se Modificó...!");               
    }
 }
 function editar(p){
ri = p.parentNode.parentNode.rowIndex(ri++);
document.getElementById("Cantidad").value = document.getElementById("data").rows[ri].cells[2].innerText;
document.getElementById("Precio").value = document.getElementById("data").rows[ri].cells[3].innerText;
document.getElementById("Total").value = document.getElementById("data").rows[ri].cells[4].innerText;
limpiar();
}  






