// ## Recupero elementi dal DOM
const cardContainer = document.getElementById("card-container");

// ## Ciclo l'array e recuper i dati
for (let member of team) {
  let memberImg = member.image;
  let memberName = member.name;
  let memberRole = member.role;

  cardContainer.innerHTML += `
  <div class="col-4">
    <div class="card text-center">
        <img src="./img/${memberImg}" class="card-img-top" alt="${memberName}">
        <div class="card-body">
            <span class="card-title fs-2">${memberName}</span>
            <span class="card-text d-block">${memberRole}</span>
        </div>
  </div>
  `;
}
