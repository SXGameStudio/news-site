// Пошук на сайті
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const articles = document.querySelectorAll('.mdc-card');

searchButton.addEventListener('click', () => {
  const searchText = searchInput.value.toLowerCase();

  articles.forEach(article => {
    const title = article.querySelector('.mdc-card__title--large').textContent.toLowerCase();
    const subtitle = article.querySelector('.mdc-card__subtitle').textContent.toLowerCase();
    const content = article.querySelector('.mdc-card__secondary').textContent.toLowerCase();

    if (title.includes(searchText) || subtitle.includes(searchText) || content.includes(searchText)) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
});

// Коментування новин
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

commentForm.addEventListener('submit', event => {
  event.preventDefault();

  const nameInput = document.getElementById('name-input');
  const messageInput = document.getElementById('message-input');

  const name = nameInput.value;
  const message = messageInput.value;

  const comment = document.createElement('li');
  comment.innerHTML = `
    <h3>${name}</h3>
    <p>${message}</p>
  `;
  commentList.appendChild(comment);

  nameInput.value = '';
  messageInput.value = '';
});
