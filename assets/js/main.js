// Основные скрипты
document.addEventListener('DOMContentLoaded', function() {
  // Меню для мобильных устройств
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');
  
  if (navToggle && navList) {
    navToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
    });
  }
});