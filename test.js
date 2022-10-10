//IMPORTACION DE INSTANCIA
import c from "./index.js";
//PRODUCTO DE TEST
const producto = {
    nombre: "Fanta",
    precio: 500,
    imagen: ""
}
/*
//TEST SAVE
c.save(producto);
*/
/*
//TEST GETBYID
c.getById(2);
*/
/*
//TEST GETALL
c.getAll();
*/
/*
//TEST DELETEBYID
c.deleteById(3);
*/
/*
//TEST DELETEALL
c.deleteAll();
*/
//MOSTRAR RESULTADO
setTimeout(() => {
    c.getAll();
}, 2000);