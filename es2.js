var Lista = ['ciao', 'penna', 'mucca', 'ambarabacciccicocco', 'samurai', 'armadio'];//creata la array (lista)
var casuale = Lista[Math.floor(Math.random()*Lista.length)];//prende un elemento casuale della lista.
alert(casuale)

function contatore() {
  x=casuale.length//conta quanti caratteri ha la parola casuale selezionata
  alert('la parola è composta da ' + x + ' lettere')
  return(alert) ;

}
contatore()//richiamo della funzione

for (var i = 0; i < 7; i++) {//inizio del ciclo for
  a=prompt('indovina la parola')
  if (a==casuale) {
    alert('hai indovinato')
  }
}
if (i==7) {
  alert('hai perso')

}
