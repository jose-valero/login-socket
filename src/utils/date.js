let reg = new Date('Sun, 5 Jan 2021 18:48:35 GMT');
let log = new Date('Sun, 10 Jan 2021 19:19:08 GMT');

let milisegundosTranscurridos = Math.abs(reg.getDate() - log.getDate());
let diasTranscurridos = Math.round(milisegundosTranscurridos);

console.log(diasTranscurridos);
