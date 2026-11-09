// Pengaturan game. Edit sesuai kebutuhan.
window.CONFIG = {
  // Kosongkan = leaderboard hanya tersimpan di browser pemain (localStorage).
  // Isi dengan URL Firebase Realtime Database agar SEMUA pemain berbagi satu leaderboard.
  // Contoh: "https://nama-proyek-default-rtdb.asia-southeast1.firebasedatabase.app"
  FIREBASE_DB_URL: "",

  SHUFFLE_QUESTIONS: true, // acak urutan soal tiap permainan
  SHUFFLE_OPTIONS: true    // acak urutan pilihan jawaban
};
