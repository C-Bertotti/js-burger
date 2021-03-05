//Creo le variabili
var calculate = document.getElementById('btn__calculate');
var burgerName = document.getElementById('burger__name');
//Creo l'evento al click del bottone
calculate.addEventListener('click',
    function() {
        //controllo che il nome del burger sia stato inserito
        if ( burgerName.value != '' ) {
            console.log('ciao');
        } else {
            alert('Ricordati di dare un nome al tuo burger!');
        }

    }   
);