formulario.inputNumero.addEvenListener('keyup', (e) =>{
let valorInput = e.target.value;
formulario.inputNumero.value = valorInput
//* elimina espacio en blanco
.replace(/\s/g, '')
//elimiar letras
.replace(/\D/g, '')
//* agrupar de a  4 numeros 
.replace(/([0-9]{4})/g, '$1 ')
//*elimina los espacios al final 
.trim();
}); 