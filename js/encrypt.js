// Passphrases reside in our private ds.... repo.
// https://stackoverflow.com/questions/18279141/javascript-string-encryption-and-decryption

var encrypted = CryptoJS.AES.encrypt("https://somelocation.com", "Secret Passphrase");
//U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=

var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
//4d657373616765


document.getElementById("demo1").innerHTML = encrypted;
document.getElementById("demo2").innerHTML = decrypted;
document.getElementById("demo3").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);