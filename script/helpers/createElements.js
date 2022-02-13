function createCard({ title, image, readyInMinutes, preparationMinutes, id }) {
  const card = document.createElement('div');

  card.className = 'card';
  card.style.width = '33%';
  card.innerHTML = `
    <img
      src="${
        image ||
        'https://www.dirtyapronrecipes.com/wp-content/uploads/2015/10/food-placeholder.png'
      }"
      class="card-img-top"
      alt="${title}"
    />
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title truncate">${title}</h5>
      <div>
        <p class="card-text">
          Ready in ${readyInMinutes || preparationMinutes} minutes
        </p>
        <button class="btn btn-primary" target="_blank" onclick="seeDetails('${id}')">See details</a>
      </div>
    </div>
  `;

  main.appendChild(card);
}
