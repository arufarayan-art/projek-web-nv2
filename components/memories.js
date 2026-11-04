const MemoriesComponent = {
  init({ photo, caption, counter, prev, next, continueBtn, data, done }) {
    let a = [];
    let i = 0;

    function render() {
      a = data();

      if (!a.length) {
        caption.textContent = 'No memories yet.';
        counter.textContent = '0 / 0';
        photo.textContent = '📸';
        return;
      }

      const current = a[i];

      caption.textContent = current.caption || '';
      counter.textContent = `${i + 1} / ${a.length}`;

      // Kalau ada gambar
      if (current.image) {
        photo.innerHTML = '';

        const img = document.createElement('img');

        img.src = current.image;
        img.alt = current.caption || 'Memory';

        photo.appendChild(img);
      } 
      // Kalau tidak ada gambar, tampilkan emoji
      else {
        photo.textContent = current.emoji || '📸';
      }
    }

    prev.onclick = () => {
      if (!a.length) return;

      i = (i - 1 + a.length) % a.length;

      render();
    };

    next.onclick = () => {
      if (!a.length) return;

      i = (i + 1) % a.length;

      render();
    };

    continueBtn.onclick = () => {
      done();
    };

    render();
  }
};