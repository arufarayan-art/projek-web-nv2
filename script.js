// =====================================================
// 1. DEFAULT PROJECT DATA
// =====================================================

const DEFAULT = {
  security: {
    password: 'kapan-kapan',
    hint: 'tanggal jadian kita'
  },

  person: {
    name: 'nilam'
  },

  letter: {
    title: 'A Little Letter',
    message:
      'Semoga hari ini menjadi salah satu hari terbaik dalam hidupmu.\n\n' +
      'Semoga kamu selalu menemukan alasan untuk tersenyum, berani mengejar hal yang kamu mau, dan dikelilingi orang-orang yang tulus menyayangimu.\n\n' +
      'Happy Birthday ♡'
  },

  bouquet: {
    flowers: [
      {
        emoji: '🌹',
        name: 'Rose',
        message: 'For all the beautiful moments you have created.'
      },
      {
        emoji: '🌷',
        name: 'Tulip',
        message: 'For a future filled with new beginnings.'
      },
      {
        emoji: '🌻',
        name: 'Sunflower',
        message: 'May your days always have a little sunshine.'
      },
      {
        emoji: '🌸',
        name: 'Sakura',
        message: 'For the soft moments worth remembering.'
      },
      {
        emoji: '💐',
        name: 'Bouquet',
        message: 'A little reminder that you are appreciated.'
      }
    ]
  },

  memories: {
    photos: [
      {
        caption: 'Your first memory goes here.',
        emoji: '📸',
        image: 'assets/images/memories/foto1.jpg'
      },
      {
        caption: 'Another little moment to remember.',
        emoji: '🌙',
        image: 'assets/images/memories/foto2.jpg'
      },
      {
        caption: 'One more moment worth keeping.',
        emoji: '✨',
        image: 'assets/images/memories/foto3.jpg'
      }
    ]
  },

  story: {
    chapters: [
      {
        date: 'CHAPTER 01',
        title: 'Where It All Started',
        text:
          'Semuanya berawal dari sebuah pertemuan sederhana. ' +
          'Tidak ada yang menyangka bahwa hari itu akan menjadi awal dari banyak kenangan.'
      },
      {
        date: 'CHAPTER 02',
        title: 'Little Moments',
        text:
          'Hari-hari berikutnya dipenuhi dengan percakapan kecil, tawa, ' +
          'dan berbagai kejadian sederhana yang akhirnya menjadi kenangan berharga.'
      },
      {
        date: 'CHAPTER 03',
        title: 'A New Chapter',
        text:
          'Cerita ini belum selesai. Masih banyak halaman yang belum ditulis, ' +
          'masih banyak tempat yang belum dikunjungi, dan masih banyak kenangan baru yang menunggu.'
      }
    ]
  },

  jar: {
    wishes: [
      'I hope you achieve everything you have been working for.',
      'I hope you always have a reason to smile.',
      'I hope good things find you, even on ordinary days.',
      'I hope you never forget how much you matter.',
      'I hope the next chapter of your life is beautiful.'
    ]
  },

  ending: {
    message:
      'Semoga semua hal baik perlahan menemukan jalannya kepadamu. ' +
      'Keep being you. ♡'
  }
};


// =====================================================
// 2. LOAD PROJECT
// =====================================================

let project = load();


// =====================================================
// 3. HELPER FUNCTIONS
// =====================================================

const $ = (id) => document.getElementById(id);


// Pindah halaman dengan aman
function screen(id) {
  const target = $(id);

  // Jangan sembunyikan halaman aktif jika target tidak ditemukan
  if (!target) {
    console.error(`Halaman dengan ID "${id}" tidak ditemukan.`);
    return;
  }

  document.querySelectorAll('.screen').forEach((element) => {
    element.classList.remove('active');
  });

  target.classList.add('active');
}


// =====================================================
// 4. INITIAL DATA
// =====================================================

if ($('hint')) {
  $('hint').textContent = project.security.hint;
}

if ($('name')) {
  $('name').textContent = project.person.name;
}

if ($('letterTitle')) {
  $('letterTitle').textContent = project.letter.title;
}

if ($('letterMsg')) {
  $('letterMsg').textContent = project.letter.message;
}

if ($('endingMsg')) {
  $('endingMsg').textContent = project.ending.message;
}


// =====================================================
// 5. PASSWORD
// =====================================================

PasswordComponent.init({
  form: $('login'),
  input: $('pass'),
  toggle: $('show'),
  error: $('error'),

  getPassword: () => project.security.password,

  success: () => {
    screen('surprise');
    toast('Unlocked ✦');
  }
});


// =====================================================
// 6. SURPRISE GIFT
// =====================================================

SurpriseComponent.init({
  button: $('gift'),
  label: $('giftText'),

  success: () => {
    screen('wish');
  }
});


// =====================================================
// 7. MAKE A WISH
// =====================================================

WishComponent.init({
  candles: [...document.querySelectorAll('.candle')],
  button: $('wishBtn'),
  result: $('wishResult'),

  done: () => {
    screen('letter');
  }
});


// =====================================================
// 8. BIRTHDAY LETTER
// =====================================================

LetterComponent.init({
  envelope: $('envelope'),
  card: $('letterCard'),
  title: $('letterTitle'),
  msg: $('letterMsg'),
  next: $('letterNext'),

  data: () => project.letter,

  done: () => {
    screen('bouquet');
  }
});


// =====================================================
// 9. DIGITAL BOUQUET
// =====================================================

const bouquet = BouquetComponent.init({
  grid: $('flowers'),
  msg: $('flowerMsg'),
  next: $('flowerNext'),

  data: () => project.bouquet.flowers,

  done: () => {
    screen('memories');
  }
});

bouquet.render();


// =====================================================
// 10. MEMORIES
// =====================================================

MemoriesComponent.init({
  photo: $('photo'),
  caption: $('caption'),
  counter: $('counter'),
  prev: $('prev'),
  next: $('next'),
  continueBtn: $('memoryNext'),

  data: () => project.memories.photos,

  done: () => {
    screen('story');
  }
});


// =====================================================
// 11. WISH JAR
// =====================================================

const jar = JarComponent.init({
  button: $('jarButton'),
  msg: $('jarMsg'),
  next: $('jarNext'),

  data: () => project.jar.wishes,

  done: () => {
    // Tampilkan halaman Ending
    screen('ending');

    // Isi data Ending
    EndingComponent.render({
      name: $('name'),
      msg: $('endingMsg'),
      data: project
    });

    // Jalankan confetti
    createConfetti();
  }
});


// =====================================================
// 12. OUR LITTLE STORY
// =====================================================

StoryComponent.init({
  head: $('storyHead'),
  dots: $('dots'),
  no: $('storyNo'),
  date: $('storyDate'),
  title: $('storyTitle'),
  text: $('storyText'),
  prev: $('storyPrev'),
  next: $('storyNext'),

  data: () => project.story.chapters,

  done: () => {
    screen('jar');

    if (jar && typeof jar.load === 'function') {
      jar.load();
    }
  }
});


// =====================================================
// 13. INITIALIZE JAR
// =====================================================

jar.load();


// =====================================================
// 14. REPLAY EXPERIENCE
// =====================================================

if ($('replay')) {
  $('replay').onclick = () => {
    location.reload();
  };
}


// =====================================================
// 15. TOAST NOTIFICATION
// =====================================================

function toast(message) {
  const toastElement = $('toast');

  if (!toastElement) {
    return;
  }

  toastElement.textContent = message;
  toastElement.classList.add('show');

  clearTimeout(toast.timer);

  toast.timer = setTimeout(() => {
    toastElement.classList.remove('show');
  }, 2000);
}


// =====================================================
// 16. CONFETTI EFFECT
// =====================================================

function createConfetti() {
  const container = $('confetti');

  if (!container) {
    return;
  }

  // Bersihkan confetti sebelumnya
  container.innerHTML = '';

  const totalConfetti = 70;

  for (let i = 0; i < totalConfetti; i++) {
    const piece = document.createElement('span');

    piece.className = 'conf';

    // Posisi horizontal acak
    piece.style.left = `${Math.random() * 100}%`;

    // Durasi animasi acak
    piece.style.setProperty(
      '--d',
      `${3 + Math.random() * 4}s`
    );

    // Jarak gerak horizontal
    piece.style.setProperty(
      '--x',
      `${Math.random() * 200 - 100}px`
    );

    // Warna confetti
    piece.style.background = [
      '#ffd0e9',
      '#c9a7ff',
      '#ffe29a',
      '#ffffff',
      '#b8f2e6'
    ][Math.floor(Math.random() * 5)];

    // Delay agar tidak jatuh bersamaan
    piece.style.animationDelay = `${Math.random() * 1.5}s`;

    container.appendChild(piece);
  }

  // Bersihkan setelah animasi selesai
  setTimeout(() => {
    container.innerHTML = '';
  }, 9000);
}


// =====================================================
// 17. LOAD LOCAL STORAGE
// =====================================================

function load() {
  try {
    const saved = localStorage.getItem('wishcraft-project');

    if (!saved) {
      return structuredClone(DEFAULT);
    }

    const parsed = JSON.parse(saved);

    return merge(
      structuredClone(DEFAULT),
      parsed
    );

  } catch (error) {
    console.warn('Gagal membaca konfigurasi:', error);

    return structuredClone(DEFAULT);
  }
}


// =====================================================
// 18. MERGE DEFAULT + CUSTOMIZER
// =====================================================

function merge(base, custom) {
  Object.keys(custom || {}).forEach((key) => {

    if (
      custom[key] &&
      typeof custom[key] === 'object' &&
      !Array.isArray(custom[key]) &&
      base[key] &&
      !Array.isArray(base[key])
    ) {

      base[key] = merge(
        base[key],
        custom[key]
      );

    } else {

      base[key] = custom[key];

    }

  });

  return base;
}