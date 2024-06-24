// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.


// miles 1 "// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data."

    // 1 step

    // Salviamo in una variabile locale la funzione createApp, presa dalla variabile globale Vue.

    const {createApp}= Vue;

    // 2 step
        // Inizializziamo un'instanza dell'applicazione Vue,invocando la funzione createApp
    
    createApp ({
        data(){
            return{
                message: 'Hello Massimo & Simone!',
                 imageSrc: 'https://nordicapis.com/wp-content/uploads/The-Progressive-JavaScript-Framework.png'

            };
        },
        // step 3
     // Invochiamo il metodo .mount() per connettere l'istanza al tag HTML con id #app e renderizzare l'app

    }).mount('#app')
        

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
