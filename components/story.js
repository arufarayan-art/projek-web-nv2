const StoryComponent = {
  init: ({ head, dots, no, date, title, text, prev, next, data, done }) => {

    let a = [];
    let i = 0;

    function render() {
      a = data();

      if (!a.length) {
        return;
      }

      const current = a[i];

      // Isi chapter
      head.textContent = current.title || '';
      no.textContent = String(i + 1).padStart(2, '0');
      date.textContent = current.date || '';
      title.textContent = current.title || '';
      text.textContent = current.text || '';

      // Buat titik indikator chapter
      dots.innerHTML = a
        .map((_, n) => {
          return `<i class="dot ${n === i ? 'on' : ''}"></i>`;
        })
        .join('');

      // Tombol next / finish
      if (i === a.length - 1) {
        next.textContent = 'Finish Story →';
      } else {
        next.textContent = 'Next Chapter →';
      }

      // Tombol previous
      prev.disabled = i === 0;
    }

    // Tombol Previous
    prev.onclick = () => {
      if (i > 0) {
        i--;
        render();
      }
    };

    // Tombol Next / Finish
    next.onclick = () => {

      // Kalau sudah chapter terakhir
      if (i === a.length - 1) {
        done();
        return;
      }

      // Kalau masih ada chapter berikutnya
      i++;
      render();
    };

    render();
  }
};