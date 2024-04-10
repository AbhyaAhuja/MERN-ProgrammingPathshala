const b = new Buffer.from('ABHCDEFGH')
console.log(b); //prints hexadecimal

console.log(b.toString());
b.write('Other'); //overwrites
console.log(b.toString());
// buffer need?
// helps in file handling (of binary data)
// (bigger file into smaller) 