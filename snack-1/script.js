// Ottieni il titolo di un post con una Promise.

// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

const getPostTitle = (id) => {
    // La funzione deve restituire una Promise che risolve il titolo del post
    const promessa = new Promise((resolve, reject) => {
        // Utilizza fetch per recuperare il post dal link fornito
        fetch(`https://dummyjson.com/posts/${id}`)
            // transforma la risposta in JSON
            .then(res => res.json())
            // Passa il titolo alla funzione resolve
            .then(data => resolve(data.title))
            // Gestisce gli errori con la funzione reject
            .catch(reject)
    })
    return promessa
}

getPostTitle(1)
    // Chiama la funzione con l'id 1 e stampa il titolo del post
    .then(data => console.log('Questo è il titlo:', data))
    // Gestisce gli errori stampando l'errore in console
    .catch(error => console.error('Errore nella richiesta del post', error));