(() => {
  const modal = document.getElementById('demo-modal');
  const frame = document.getElementById('demo-modal-frame');
  const title = document.getElementById('demo-modal-title');
  const closeBtn = document.getElementById('demo-modal-close');
  if (!modal || !frame || !title || !closeBtn) return;

  const openDemo = (button) => {
    const src = button.dataset.demoSrc;
    if (!src) return;
    title.textContent = button.dataset.demoTitle || 'Project demo';
    frame.src = src;
    modal.classList.add('open');
    document.body.classList.add('modal-open');
    closeBtn.focus();
  };

  const closeDemo = () => {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
    frame.src = 'about:blank';
  };

  document.querySelectorAll('[data-demo-src]').forEach(button => {
    button.addEventListener('click', () => openDemo(button));
  });

  closeBtn.addEventListener('click', closeDemo);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeDemo();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeDemo();
  });
})();