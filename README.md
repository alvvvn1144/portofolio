# Portofolio — Cara Pakai

## Struktur folder
```
portofolio/
├── index.html      (Home / Hero)
├── about.html       (Tentang Saya)
├── skills.html      (Keahlian)
├── projects.html    (Proyek)
├── contact.html     (Kontak)
├── css/style.css
├── js/script.js
└── images/          (gambar placeholder)
```

## Cara menjalankan
1. Extract zip, buka foldernya di VS Code.
2. Install ekstensi **Live Server** (kalau belum ada), lalu klik kanan pada
   `index.html` → **Open with Live Server**. Atau cukup buka `index.html`
   langsung di browser.

## Yang perlu diganti
Semua bagian yang perlu diisi dengan data asli kamu ditandai dengan
komentar `<!-- GANTI: ... -->` di kode HTML. Cara cepat menemukannya:
gunakan fitur **Find in Files** di VS Code (Ctrl+Shift+F / Cmd+Shift+F)
lalu cari kata `GANTI`.

Yang paling penting untuk diganti:
- Nama, NIM, kampus, dan bio di `index.html` & `about.html`
- Data skill & tools di `skills.html`
- Isi proyek (nama, deskripsi, tag, link demo/repo) di `projects.html`
- Email, nomor WhatsApp, dan link sosial media di `contact.html` & footer semua halaman
- Gambar di folder `images/` (foto-profil.svg, project1.svg, project2.svg, project3.svg)
  — ganti dengan foto/screenshot asli (jpg/png), lalu update path `src` di HTML

## Catatan
- Form kontak di `contact.html` masih tampilan saja (belum terhubung ke
  server mana pun). Untuk membuatnya benar-benar mengirim email, kamu bisa
  pakai layanan seperti Formspree atau Getform, atau buat backend sendiri.
- Warna, font, dan spacing bisa diatur lewat variabel di bagian paling atas
  `css/style.css` (`:root { ... }`).
