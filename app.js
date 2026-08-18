document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const closePanel = document.getElementById('closePanel');
  const sidePanel = document.getElementById('sidePanel');
  const overlay = document.getElementById('overlay');

  const openMenu = () => {
    sidePanel.classList.add('active');
    overlay.classList.add('active');
  };

  const closeMenu = () => {
    sidePanel.classList.remove('active');
    overlay.classList.remove('active');
  };

  menuToggle.addEventListener('click', openMenu);
  closePanel.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidePanel.classList.contains('active')) {
      closeMenu();
    }
  });
});