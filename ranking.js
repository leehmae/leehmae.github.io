function ranking() {
    let sum = 0;
    let answered = true;
    for( let i = 0; i < 11; i++) {
        let answer = 0;
        for( let j = 1; j < 5; j++){
            let label = document.getElementById("label" + i + "" + j);
            if(label.checked) {
                answer = parseInt(label.value);
            }
        }
        if( answer === 0){
            alert("Die Frage " + (i+1) + " wurde nicht ausgefüllt.");
            answered = false;
        } 
        else{
            sum += answer;
        }
    }
    if(answered){
        if(sum < 15){
            document.getElementById("AuswertungText").innerHTML = 'Absatz durch JavaScript geändert, Amethyst';
        }
        else if(sum < 20){
            alert("Du hast einen Score von: " + sum + " bekommen, somit bist du ein absoluter NOOB!");
        }
        else if(sum < 35){
            alert("Du hast einen Score von: " + sum + " bekommen, mit dir möchte ich nicht im Team sein!");
        }
        else if(sum < 50){
            alert("Du hast einen Score von: " + sum + " bekommen, hast schon ein Paar mal gespielt, aber gut bist du nicht!");
        }
        else if(sum < 60){
            alert("Du hast einen Score von: " + sum + " bekommen, du bist ein durchschnitts Spieler!");
        }
        else if(sum < 70){
            alert("Du hast einen Score von: " + sum + " bekommen, ein guter, erfahrener Bierpongspieler!");
        }
        else if(sum < 80){
            alert("Du hast einen Score von: " + sum + " bekommen, du bist gut, aber für die Elite reicht es nicht!");
        }
        else if(sum < 95){
            alert("Du hast einen Score von: " + sum + " bekommen, somit bist du eine Bierponlegende!");
        }
        else if(sum < 100){
            alert("Du hast einen Score von: " + sum + " bekommen, somit bist BIERPONGGOTT!");
        }
    }
    else{
    }
}