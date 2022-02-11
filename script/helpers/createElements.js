function createCard({ title, image, readyInMinutes, id }) {
  const card = document.createElement('div');

  card.className = 'card';
  card.style.width = '15rem';
  if (readyInMinutes) {
  card.innerHTML = `
    <img
      src="${image}"
      class="card-img-top"
      alt="${title}"
    />
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">
        Ready in ${readyInMinutes} minutes
      </p>
      <a href="/recipe?id=${id}" id=${id} class="btn btn-primary" target="_blank">See details</a>
    </div>
  `;
  } else {
    card.innerHTML = `
    <img
      src="${image}"
      class="card-img-top"
      alt="${title}"
    />
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <a href="/recipe?id=${id}" id=${id} class="btn btn-primary" target="_blank">See details</a>
    </div>
  `;
  }


  main.appendChild(card);
}
