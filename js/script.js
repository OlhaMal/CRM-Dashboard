document.addEventListener('DOMContentLoaded', function() {
  const sideMenuToggle = document.getElementById('side-menu__toggle');
  const body = document.body;

  function updateBodyScroll() {
    if (sideMenuToggle && !window.matchMedia('(min-width: 1280px)').matches) {
      if (sideMenuToggle.checked) {
        body.classList.add('no-scroll');
      } else {
        body.classList.remove('no-scroll');
      }
    } else {
      body.classList.remove('no-scroll');
    }
  }

  updateBodyScroll();

  if (sideMenuToggle) {
    sideMenuToggle.addEventListener('change', updateBodyScroll);
  }

  window.addEventListener('resize', updateBodyScroll);
});
