/*
Írj  egy függvényt `validateMACAddress`, ami paraméterként egy MAC címet vár stringként!   
A függvény egy `bollean` értékben visszaadja, hogy a paraméterként megadott MAC cím megfelelő formátumú e, vagy sem.
*/

const pattern = /^[a-fA-F0-9]{2}(:[a-fA-F0-9]{2}){5}$/;
const validateMACAddress = (value) => {
    return pattern.test(value);
}
export default validateMACAddress;
