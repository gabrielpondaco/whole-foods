function createCard({ title, image, readyInMinutes, preparationMinutes, id }) {
  const card = document.createElement('div');

  card.className = 'card';
  card.style.width = '33%';
  card.innerHTML = `
    <img
      src="${image}"
      class="card-img-top"
      alt="${title}"
    />
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">
        Ready in ${readyInMinutes || preparationMinutes} minutes
      </p>
      <a href="/recipe?id=${id}" id=${id} class="btn btn-primary" target="_blank">See details</a>
    </div>
  `;

  main.appendChild(card);
}
