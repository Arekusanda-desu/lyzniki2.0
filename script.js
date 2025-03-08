function loadPage(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Страница не найдена')
      }
      return response.text();
  })
  .then(data => {
    document.querySelector('main').innerHTML = data;
})
.catch(error => {
  console.error('Ошибка при загрузке страницы', error)
  document.querySelector('main').innerHTML = '<p>Ошибка при загрузке страницы. Попробуйте позже.</p>';
});
}
document.querySelectorAll('.cell a').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const url = this.getAttribute('href');
    loadPage(url);
  });
});
