// Referenz auf die "Yes"- und "No"-Buttons aus dem HTML holen
const buttonYes = document.querySelector(".yes");
const buttonNo = document.querySelector(".no");

// Startgrößen für die Schrift beider Buttons festlegen
let buttonYesFontSize = 2;
let buttonNoFontSize = 2;

// Event-Listener: Wenn "No" geklickt wird, wird doYesMore() aufgerufen
buttonNo.addEventListener("click", doYesMore);

// Event-Listener: Wenn "Yes" geklickt wird, wird buttonYesPushed() aufgerufen
buttonYes.addEventListener("click", buttonYesPushed);

// Funktion vergrößert den "Yes"-Button und verkleinert den "No"-Button
function doYesMore() {
  buttonYesFontSize += 0.4; // "Yes"-Schriftgröße vergrößern
  buttonYes.style.fontSize = buttonYesFontSize + "em";

  buttonNoFontSize -= 0.2; // "No"-Schriftgröße verkleinern
  buttonNo.style.fontSize = buttonNoFontSize + "em";
}

// Funktion leitet zur zweiten Seite weiter, wenn "Yes" geklickt wird
function buttonYesPushed() {
  location.href = "./page2.html"; // Weiterleitung auf die Seite mit der positiven Nachricht
}
