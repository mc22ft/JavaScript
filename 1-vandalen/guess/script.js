"use strict";

//Hade lite problem med uppladningen till git. har försökt ställa in git till vs12 men funkar nu perfekt till vs13.


window.onload = function () {

    //var secret = 50; // Detta tal behöver bytas ut mot ett slumpat tal.

    var secret = Math.floor(Math.random() * 100) + 1;
    var count = 0;
    // I denna funktion ska du skriva koden för att hantera "spelet"
    var guess = function (number) {
        console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
        console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.			

        // Plats för förändring.

        //räknare
        count += 1;

        if (isNaN(number)) {
            //inget nummer som kan hanteras
            return [false, "Ingen korrekt gissning, försök igen!"];
        }
        else {
            //if sats som kontrollerar talet
            if (number < 1 || number > 100) {
                return [false, "Talet är utanför intervallet 0 - 100"];
            }
            else if (number == secret) {
                alert("det kom in i lika med number blocket");
                return [true, "Grattis du vann! Det hemliga talet var " + secret + " och du behövde " + count + " gissningar för att hitta det."];
            }
            else if (number > secret) {
                return [false, "Det hemliga talet är lägre!"];
            }
            else if (number < secret) {
                return [false, "Det hemliga talet är högre!"];
            }
        }
    };

    // ------------------------------------------------------------------------------



    // Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
    var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
    var input = document.querySelector("#number");
    var submit = document.querySelector("#send");

    // Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
    submit.addEventListener("click", function (e) {
        e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

        var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
        p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

        if (answer[0] === true) {				// Om spelet är slut, avaktivera knappen.
            submit.disabled = true;
        }

    });
};