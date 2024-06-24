// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


// miles 1 "// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data."

    // 1 step

    // Salviamo in una variabile locale la funzione createApp, presa dalla variabile globale Vue.

    const {createApp}= Vue

    // 2 step
        // Inizializziamo un'instanza dell'applicazione Vue,invocando la funzione createApp
    
    createApp ({
        data(){
            return{
                message: 'Hello Massimo & Simone!',
                
            }
        }
        // step 3
     // Invochiamo il metodo .mount() per connettere l'istanza al tag HTML con id #app e renderizzare l'app

    }).mount('#app')
        