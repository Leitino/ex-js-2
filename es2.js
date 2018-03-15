var Lista = ['ciao', 'penna', 'mucca', 'ambarabacciccicocco', 'samurai', 'armadio'];//creata la array (lista)
var casuale = Lista[Math.floor(Math.random()*Lista.length)];//prende un elemento casuale della lista.
alert(casuale)

function contatore() {
  x=casuale.length//conta quanti caratteri ha la parola casuale selezionata
  alert('la parola è composta da ' + x + ' lettere')
  return(alert) ;

}
contatore()//richiamo della funzione
a=0
contatore=0
while ((a!=casuale) && (contatore<7)) { //inizio ciclo while
  a=prompt('indovina la parola')
  contatore++;
  if (a==casuale) {
    alert('hai indovinato')
 }
}
if (contatore==7) {
  alert('hai perso')

}
