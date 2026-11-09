# Pendaki Bakteri 🦠⛰️

Game kuis 2D: karakter memanjat gunung (berjalan ke kanan) sambil menjawab 10 soal tentang bakteri.

## Cara main
- Player mengisi **nama** dan memilih **kelas (X-1 s.d. X-10)**.
- **Kontrol:** `A`/`D` (atau panah) jalan, `W`/`Spasi` loncat, `W` di dekat tangga untuk memanjat, `J`/`K`/klik untuk menembak. Di HP ada tombol sentuh di layar.
- **Obby:** sebelum tiap tangga/virus ada rintangan: tembok rendah, duri, jurang, batu melayang, dan platform bergerak. Jatuh ke jurang = kembali ke checkpoint 🚩. Kena duri = kehilangan 1 nyawa (3 nyawa).
- 🪜 **Tangga:** soal muncul di depan tangga. Benar → tangga terbuka dan dipanjat sendiri dengan `W`. Salah → tangga runtuh, harus lewat jalan miring yang panjang.
- 🦠 **Virus:** soal muncul saat virus menghadang. Jawab benar → **senjata terbuka** (Semprotan Disinfektan, Pistol Antibiotik, Laser UV, Meriam Vaksin) dan kamu bertarung. Jawab salah → tidak dapat senjata baru; kalau sudah punya senjata lama tetap bertarung, kalau belum punya virus mendorongmu mundur lalu kabur.
- Virus punya bar nyawa dan menembak balik. Nyawa habis saat bertarung → virus kabur (soal tetap dihitung terjawab).
- Pojok kiri atas menampilkan **progress %**, nyawa, dan senjata aktif. Pojok kanan atas menampilkan **stopwatch** waktu bermain.
- Total ada 10 kejadian (6 tangga + 4 virus), tiap kejadian = 1 soal, jadi ke-10 soal pasti muncul. Ada rintangan terakhir sebelum bendera puncak.
- **Nilai** akhir skala 0-100 (10 soal x 10 poin). Leaderboard menampilkan **nama, kelas, nilai, dan waktu finish**, diurutkan berdasarkan nilai (jika sama, yang lebih cepat di atas).

## Mengganti soal
Edit `questions.js` (format ada di dalam file). Game memakai 10 soal pertama (diacak tiap permainan, bisa dimatikan di `config.js`).

## Hosting di GitHub Pages
1. Buat repository baru di GitHub, upload semua file ini (`index.html`, `style.css`, `game.js`, `questions.js`, `config.js`).
2. Buka **Settings → Pages**, pilih Branch `main` dan folder `/ (root)`, lalu Save.
3. Tunggu 1-2 menit, game bisa dibuka di `https://USERNAME.github.io/NAMA-REPO/`.

## Leaderboard yang bisa disimpan
GitHub Pages hanya hosting statis (tidak ada server), jadi ada dua mode:

**1. Lokal (default)** - nilai tersimpan di browser pemain (localStorage). Papan hanya terlihat di perangkat yang sama.

**2. Online bersama (disarankan untuk satu sekolah)** - pakai Firebase Realtime Database (gratis):
1. Buka https://console.firebase.google.com → buat project → **Build → Realtime Database → Create Database** (pilih lokasi Singapore).
2. Tab **Rules**, tempel aturan berikut lalu Publish:
```json
{
  "rules": {
    "leaderboard": {
      ".read": true,
      "$id": {
        ".write": "!data.exists()",
        ".validate": "newData.hasChildren(['name','kelas','score','benar','time']) && newData.child('score').isNumber() && newData.child('score').val() >= 0 && newData.child('score').val() <= 100 && newData.child('name').isString() && newData.child('name').val().length <= 20"
      }
    }
  }
}
```
3. Salin URL database (contoh `https://nama-proyek-default-rtdb.asia-southeast1.firebasedatabase.app`) ke `FIREBASE_DB_URL` di `config.js`, commit, selesai.

Catatan: karena nilai dihitung di browser, murid yang paham developer tools secara teknis bisa memalsukan nilai. Untuk kuis kelas biasanya cukup; untuk penilaian resmi, pakai backend dengan verifikasi.
