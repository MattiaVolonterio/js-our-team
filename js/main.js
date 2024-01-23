// ## Recupero elementi dal DOM
const stringResult = document.getElementById("string-result");

// ## Ciclo l'array e recuper i dati
for (let member of team) {
  let memberName = member.name;
  let memberRole = member.role;
  let memberImg = member.image;

  stringResult.innerHTML += `
  Il nome del membro è: ${memberName}, 
  il suo ruolo è: ${memberRole} 
  e la sua immagine è: ${memberImg} 
  </br>
  </br>`;
}
