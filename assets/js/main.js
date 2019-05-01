
// Quand le document est ready
////////// On fait la verification si les saisies sont fien faite a l'aide du fichier css avec input valid ou invalid
$(function () {
    // Faire de la validation de formulaire ///////////////////////////::
    // lorsque le formulaire va etre soumis
    $('#calcul').click(function () {
        //on recupere toutes las inputs; je les mets dans une seule variable
        // on va creer comme "query selecteur all"
        var notes = $('input');
        var sum = 0;
        // on va parcourir ce tableau pour traiter chaque colonne du tableau
        // cette methode (.each) permet de parcourir mon tableau
        $.each(notes, function () {
            sum += Number($(this).val());
        });
        var moyenneCalcul = (sum / notes.length).toFixed(2);
        if (moyenneCalcul >= 0 && moyenneCalcul < 10) {
            $result = "En dessous de la moyenne";
        }
        if (moyenneCalcul >= 10 && moyenneCalcul < 13) {
            $result = "Moyen";
        }
        if (moyenneCalcul >= 13 && moyenneCalcul < 16) {
            $result = "Bien";
        }
        if (moyenneCalcul >= 16 && moyenneCalcul < 20) {
            $result = "Très Bien";
        }
        if (moyenneCalcul == 20) {
            $result = "Excellent";
        }
        $('#moyenne').html("Votre moyenne est de : " + moyenneCalcul + "/20");
        $('#appreciation').html("Appréciation : " + $result );
    });
})

/////// plus bas c'est une posibilité de verifier si les saisies sont bien faite a l'aide de JS est HTML FORM NOVALIDATE

// // Quand le document est ready
// $(function () {
//     // Faire de la validation de formulaire ///////////////////////////::
//     // lorsque le formulaire va etre soumis
//     $('form').submit(function(){
//         //on recupere toutes las inputs; je les mets dans une seule variable
//         // on va creer comme "query selecteur all"
//         var inputs = $('input');
//         // on va parcourir ce tableau pour traiter chaque colonne du tableau
//         // cette methode (.each) permet de parcourir mon tableau
//         $.each(inputs,function(){
//             let input = this;
//             // on verifie que nos champs respectent les contraintes ( requires, maxlength, etc.) qu'on a defini dans notre HTML
//             if (!input.validity.valid){
//                 alert('Saisir un nombre entre 0 et 20');
//             }
//         });
//     });
// })
