# Birthday Experience — Full Package

## Alur
1. Password Gate 🔒
2. Surprise Gift 🎁
3. Make a Wish 🕯️
4. Birthday Letter 💌
5. Digital Bouquet 💐
6. Memories 📸
7. Our Little Story 📖
8. Wish Jar 🫙
9. Ending ✨

## Creator Mode
Buka `customizer/index.html` untuk mengubah password, nama, surat, bunga, story, wishes, dan ending. Klik Save Project lalu Open Experience.

## Password demo
`27092026`

## Cara menjalankan
Extract ZIP, lalu buka `customizer/index.html` atau langsung `index.html`.

## Penjelasan arsitektur
- `index.html`: semua screen experience.
- `style.css`: UI/UX, responsive, animasi.
- `script.js`: controller dan data project.
- `components/*.js`: tiap fitur dipisah agar mudah dirawat.
- `customizer/`: creator dashboard yang menyimpan data ke localStorage dengan key `wishcraft-project`.
- `assets/`: tempat foto/musik jika nanti fitur upload ditambahkan.

## Catatan keamanan
Password masih frontend-only dan bukan keamanan sungguhan. Orang yang membuka source/developer tools dapat melihat kode. Untuk versi online yang aman, validasi password dan penyimpanan project perlu dipindahkan ke PHP/MySQL/server.
# projek-web-nv2
