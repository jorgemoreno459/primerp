let estudiante = {
	nombre: 'juan',
	edad: 10,
	notas : {
		matematicas:3,
		ingles: 2,
		programacion:5
	}
};

let calcularpromedio = (n1,n2,n3)=> ((n1+n2+n3)/3);

module.exports = {
	estudiante,
	calcularpromedio
};