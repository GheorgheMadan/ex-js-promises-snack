const getPost = (id) => {
    // La funzione deve restituire una promise che concatena due fetch
    const promessa = new Promise((resolve, reject) => {
        // Utilizza fetch per recuperare il post dal link fornito
        fetch(`https://dummyjson.com/posts/${id}`)
            // Transforma la risposta in json
            .then(res => res.json())
            // Recupera l'utente associato al post
            .then(post => {
                // Utilizza l'id dell'utente per fare un secondo fetch
                fetch(`https://dummyjson.com/users/${post.userId}.`)
                    // Trasforma la risposta in json
                    .then(res => res.json())
                    // Risolve la promise con un oggetto che contiene il post e l'utente
                    .then(user => {
                        // Restituisce un oggetto che contiene il post e l'utente
                        resolve({ ...post, user })
                    })
                    // Gestisce eventuali errori del secondo fetch
                    .catch(reject)
            })
            // Gestisce eventuali errori del primo fetch
            .catch(reject)
    })
    return promessa
}
getPost(1)
    .then(data => console.log(data))
    .catch(error => console.error(error))