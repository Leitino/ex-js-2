var Lista = ['ciao', 'penna', 'mucca', 'ambarabacciccicocco', 'samurai', 'armadio'];
var casuale = Lista[Math.floor(Math.random()*Lista.length)];
alert(casuale)

function contatore() {
  x=casuale.length
  alert('la parola è composta da ' + x + ' lettere')
  return(alert) ;

}
contatore()

for (var i = 0; i < 7; i++) {
  a=prompt('indovina la parola')
  if (a==casuale) {
    alert('hai indovinato')
  }
}
if (i==7) {
  alert('hai perso')

}
