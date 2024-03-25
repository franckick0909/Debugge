/**
 * 
 */

describe("Date helper", () => {
    describe("When getMonth is called", () => {  // Quand getMonth est appelé
        it("the function return janvier for 2022-01-01 as date", () => { // la fonction retourne janvier pour 2022-01-01 comme date
            // to implement
        });
        it("the function return juillet for 2022-07-08 as date", () => {  // la fonction retourne juillet pour 2022-07-08 comme date
            // to implement
        });
    });
})

// J'ai utilisé les tests unitaires pour résoudre le problème de l'erreur de la date dans le composant Slider
// La fonction getMonth retourne le mois de la date passée en paramètre, mais elle ne fonctionne pas correctement et c'est là que j'ai compris que le problème venait de la fonction getMonth.
// Lorsque j'ai vu le tableau MONTHS, j'ai réalisé que le mois de janvier était à l'index 1, mais la fonction getMonth renvoie le mois de janvier à l'index 0.
