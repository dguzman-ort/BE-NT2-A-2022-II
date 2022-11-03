/**
 * ESTRUCTURA de datos
 * 
 * {
 *    firstName,
 *    lastName,
 *    age,
 *    phone
 *  },
 */


 const CANTIDAD_CONTACTOS = 5

 const nombres = ["Carlos", "Gabriel", "Camila", "Helu", "Santiago"]
 const apellidos = ["Landa", "Fiorito", "Pignata", "Romero", "Guzman"]
 
 const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
 
 const generarNombre = () => `${nombres[random(0,nombres.length - 1)]}`
 const generarApellido = () => `${apellidos[random(0,apellidos.length - 1)]}`
 
 
 //Telefono seria: 55-555-555
 const generarTelefono = () => `${random(10,99)}-${random(100,999)}-${random(100,999)}`
 
 
 const crearContacto = () => {
   return {
     nombreCompleto: `${generarApellido()}, ${generarNombre()}`,
     telefono: generarTelefono(),
     edad: random(18,50)
   }
 }
 
 //const prueba = crearContacto()
 //console.log(prueba)
 
 const contactos = Array.from({
   length: CANTIDAD_CONTACTOS
 }, crearContacto).map((item, index) => {
  return { ...item, id: index}
 })




 const getContacts = () => {

  // Ejemplo con FETCH

  // return fetch("https://localhost:3000/api/contacts")

  return new Promise((resolve, reject) => {
    return resolve(contactos)
  })
 }

 const addContact = (contact) => {
  
 }
 
 export default {
    getContacts
 }