const crypto = require('crypto'); // Librería incluida en Node.js

// Define las palabras o frases base para generar la clave secreta
const secret = 'vivo en malaga';
const secret2 = 'volarrrrrrrrrrrrrrrrrr';

// Genera el hash con el algoritmo SHA-256
const hash = crypto.createHmac('sha256', secret).update(secret2).digest('hex');

// Muestra el hash en la terminal
console.log('Tu palabra secreta es:', hash);

//terminal node secret.js y ejecutamos dos veces 
