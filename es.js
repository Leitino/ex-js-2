var numero = Math.round(100*Math.random()+1)
alert(numero)
a=0;
while (a != numero) {
  a=prompt('indovina il mio numero compreso tra 1 e 100');
  if (a > numero) {
    alert('il numero da indovinare è più piccolo di ' + a)
  }
  if (a < numero) {
    alert('il numero da indovinare è più grande di ' + a)

  }

  if (numero == a) {
  alert('Bravo! Hai indovinato il mio numero!');
  }
}
