// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
    return new Promise((resolve, reject) => {

        // Genera un numero casuale tra 1 e 6
        const random = Math.floor(Math.random() * 6) + 1

        // stampo il messaggio di attesa della generazione del numero
        console.log('in attesa del risultato...');

        // setTimeout per simulare il tempo di attesa
        setTimeout(() => {
            // stampo un numro rtandom che simula il 20% di probabilità di errore
            const probability = Math.random()

            // se il numero casuale è minore di 0.2 che equivale al 20% di probabilità di errore, la promise va in reject
            if (probability < 0.2) {
                reject('Il dado si è incastrato!')
            } else {
                // altrimenti la promise va in resolve con il numero generato
                resolve(`il dado ha generato il numero: ${random}`)
            }
        }, 1000)

    })
}

lanciaDado()
    .then(res => console.log(res))
    .catch(err => console.log(err))
