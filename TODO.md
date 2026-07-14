# TODO - Fix Netlify 404 (SPA routing)

- [x] Kumpulkan konteks: baca `netlify.toml`, `src/server.ts`, dan root route untuk memahami SSR/SPA behavior.
- [x] Update `netlify.toml` agar semua route (termasuk path dengan query/hashed) diarahkan ke `/index.html`.

- [ ] Pastikan rule Netlify tidak bertabrakan dengan file statis (assets) dan benar-benar menang untuk semua path app.
- [ ] (Opsional) Jalankan build lokal dan cek `dist`/output untuk memastikan `index.html` ada.

