const {estudiante, calcularpromedio} = require ('./practica');
const fs = require('fs');

let {nombre,edad,notas:{matematicas,ingles,programacion}} = estudiante;

let crearArchivo = (estudiante)=>{
	texto = 'el nombre es '+ nombre +'\n'+ 
			'promedio '+ calcularpromedio(matematicas, ingles, programacion);
	fs.writeFile('promedio.txt',texto,(err)=>{
		if(err) throw(err);
		console.log('creo');
	});

}

crearArchivo(estudiante);