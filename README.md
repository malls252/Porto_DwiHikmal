# Dwi Hikmal A.R — Portfolio Website (AI-Assisted)

Website ini adalah **portofolio personal** Dwi Hikmal A.R (Junior Web Developer dengan pendekatan *AI-Assisted*). Konten utamanya berisi perkenalan, ringkasan tentang diri, daftar proyek pilihan, serta informasi kontak.

## Features

- **Hero section**: ringkasan profil + CTA ke bagian Project & Contact.
- **About section**: deskripsi singkat minat dan pengalaman.
- **Selected Projects**:
  - 3 proyek unggulan dengan detail deskripsi
  - tombol **See Project** (link live) dan **GitHub** (jika tersedia)
  - **Lightbox** untuk menampilkan gambar proyek lebih besar
- **Contact section**:
  - tombol **Email** dan **WhatsApp**
  - tombol **CV** (file `public/cv.pdf`)
  - tautan sosial (Instagram, TikTok, GitHub, LinkedIn)
- **SEO meta**: title dan description sudah diatur di route beranda.

## Tech Stack

- **React** (v19) + **TypeScript**
- **Vite**
- **TanStack Router / React Start**
- **Tailwind CSS v4**
- UI/komponen: **Radix UI** + util styling

## Prerequisites

- Node.js (LTS disarankan)
- npm (atau bun—tetap bisa menggunakan npm sesuai package.json)

## Cara Menjalankan (Development)

```bash
npm install
npm run dev
```
Setelah itu buka alamat yang ditampilkan di terminal (umumnya `http://localhost:<port>`).

## Build untuk Produksi

```bash
npm run build
```

## Preview Build

```bash
npm run preview
```

## Struktur Proyek (Ringkas)

- `src/routes/` : halaman/route, termasuk beranda di `src/routes/index.tsx`
- `src/components/` : kumpulan komponen UI (mis. accordion, card, dialog, dll)
- `src/assets/` : aset gambar (portrait, mockup proyek, dll)
- `public/` : aset publik yang di-*serve* langsung, termasuk `cv.pdf`

## Konfigurasi Penting

- Metadata SEO dan konten utama beranda berada di:
  - `src/routes/index.tsx`
- Router dan QueryClient TanStack berada di:
  - `src/router.tsx`
- Konfigurasi server entry TanStack Start ada di:
  - `vite.config.ts`

## Catatan Deployment

Proyek ini berbasis Vite/TanStack Start. Umumnya bisa dideploy ke platform yang mendukung build web Vite/SSR framework yang dipakai. Pastikan environment/adapter deployment sesuai kebutuhan platform.

## Lisensi

MIT (silakan sesuaikan dengan kebutuhan project).

