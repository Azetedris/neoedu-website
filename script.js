// LocalStorage yoxlaması
if (localStorage.getItem("neoedu")) {
  document.getElementById("msg").innerText = "✨ Yenidən xoş gəldin!";
}

// Başla düyməsi və kurslar bölməsi
const startButton = document.getElementById('startButton');
const coursesSection = document.getElementById('courses');
const courseButtons = document.querySelectorAll('.show-info');

startButton.addEventListener('click', () => {
  // Kursları göstər
  coursesSection.style.display = 'grid';
  setTimeout(() => coursesSection.classList.add('show'), 50);

  // Başla düyməsini gizlə
  startButton.style.display = 'none';

  // LocalStorage qeyd et
  localStorage.setItem("neoedu", "visited");
});

// Kurs düymələrinə klik funksiyası
courseButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.parentElement;
    const name = card.querySelector('h3').textContent;
    const price = card.getAttribute('data-price');
    const desc = card.getAttribute('data-desc');
    const info = card.querySelector('.info');

    // Məlumat göstər
    info.textContent = `${name} kursunun qiyməti: ${price}. ${desc}`;
  });
});
