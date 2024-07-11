const firstName = prompt('Quale è il tuo nome?');
console.log("Il nome dell utente è:", firstName);

const lastName = prompt('Quale è il tuo cognome?');
console.log("Il cognome dell utente è:", lastName);

const color = prompt('Quale è il tuo colore preferito?');
console.log("Il colore preferito dell utente è:", color);


const password = firstName + lastName + color + '130'
console.log("La password è:", firstName + lastName + color + '130');


document.getElementById('password-container').innerHTML = password;

