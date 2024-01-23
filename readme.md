# js-our-team

## TRACCIA

```
@qui
Ciao ragazzi,
esercizio di oggi: Our Team

Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

MILESTONE 1:
stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
trasformare la stringa foto in una immagine effettiva

BONUS 2:
organizzare i singoli membri in card/schede

Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Buon lavoro!
```

## SVOLGIMENTO

1. Tramite un ciclo for-of scorro negli elementi dell'array team
2. PER OGNI elemento
   - creo una variabile nome, ruolo e foto
   - ci salvo i valori corrispondenti a cui posso accedere.
   - stampo in console le tre variabile
3. Recupero gli elementi HTML
4. Le variabili del punto 2 le stampo all'interno degli elementi corrispondenti
5. Siccome la stringa foto ha lo stesso nome del file corrispondente posso creare un elemento img src="" alt="" in cui all'interno del src passo il valore della stringa
6. Creo per ogni elemento una card a cui assegnerò delle classi CSS per formattarla correttamente
