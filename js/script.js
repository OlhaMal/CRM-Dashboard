document.addEventListener('DOMContentLoaded', function() {
    const sideMenuToggle = document.getElementById('side-menu__toggle');
      if (sideMenuToggle) {
      sideMenuToggle.addEventListener('change', function() {
        const body = document.body;
        if (sideMenuToggle.checked) {
          body.classList.add('no-scroll');
        } else {
          body.classList.remove('no-scroll');
        }
      });
    }
  });