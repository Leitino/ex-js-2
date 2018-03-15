var Lista = ['casa', 'ciao', 'penna', 'mucca', 'ambarabacciccicocco', 'samurai'];
var casuale = Lista[Math.floor(Math.random()*Lista.length)];
console.log(casuale)

function contatore() {
  x=casuale.length
  alert('la parola è composta da ' + x + ' lettere')
  return(alert) ;

}
contatore()
