function loadPage(url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.querySelector('main'). innerHTML = data;
    })
  catch(error => {
    console.error('Ошибка при загрузке страницы:', error);
  });
}
document.querySelectorAll('.cell a').forEach(link => {
  link.addEventListener('click', finction (event) {
    event.preventDefault();
    const url = this.getAttribute('href');
    loadPage(url);
  });
});
