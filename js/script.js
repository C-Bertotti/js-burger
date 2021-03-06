//Creo le variabili
var calculate = document.getElementById('btn__calculate');
var burgerName = document.getElementById('burger__name');
var ingredients = document.getElementsByClassName('ingredient');

var total = document.getElementById('total');
var coupon = document.getElementById('coupon');
var couponCode = ['12354ABCDEF', 'PROMO20', 'SCONTOSTUDENTI'];

//Creo l'evento al click del bottone
calculate.addEventListener('click',
    function() {
        //controllo che il nome del burger sia stato inserito
        if ( burgerName.value != '' ) {
            //controllo quali caselle sono checkate
            var sum = 50;
            for (var i = 0; i < ingredients.length; i++ ) {
                //se le caselle sono checkate devo sommare il loro valore
                if ( ingredients[i].checked ) {
                    sum += parseInt(ingredients[i].value);
                }
            }
            //controllo se è stato inserito un codice sconto
            if ( couponCode.includes(coupon.value) ) {
                sum -= sum * 0.2;
            }

            //stampa la somma
            total.innerHTML = sum.toFixed(2);
            
        } else {
            alert('Ricordati di dare un nome al tuo burger!');
        }
    }   
);