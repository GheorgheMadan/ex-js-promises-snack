// Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".

function creaLanciaDado() {

    // variabile per memorizzare l'ultimo risultato, inizializzata a null perche non abbiamo ancora lanciato il dado
    let lastResult = null

    return function () {
        return new Promise((resolve, reject) => {
            // Genera un numero casuale tra 1 e 6
            const random = Math.floor(Math.random() * 3) + 1

            // stampo il messaggio di attesa della generazione del numero
            console.log('in attesa del risultato...');

            // setTimeout per simulare il tempo di attesa
            setTimeout(() => {
                // stampo un numro rtandom che simula il 20% di probabilità di errore
                const probability = Math.random()
                // se il numero casuale è minore di 0.2 che equivale al 20% di probabilità di errore, la promise va in reject
                if (probability < 0.2) {
                    ultimoRisultato = null // resetto l'ultimo risultato
                    reject('Il dado si è incastrato!')
                } else {
                    let message = `il dado ha generato il numero: ${random}`
                    if (random === lastResult) {
                        console.log("Incredibile!");
                    }
                    lastResult = random // aggiorno l'ultimo risultato
                    resolve(message)
                }
            }, 1000)

        })
    }
}

const lancioDado = creaLanciaDado()


lancioDado()
    .then(res => {
        console.log(res)
        lancioDado()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))