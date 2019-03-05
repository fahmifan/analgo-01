# Modul 1 Analisis Algortima
# Pertanyaan
1. Apakah jawaban anda di Worksheet 1 sama persis dengan di program ?
  - Ya, sama

2. Teorema 1.3 
  - Saat WHILE loop, Man melamar seorang Woman baru. Dengan ini, paling banyak ada n^2 kemungkinan lamaran.

3. Teorema 1.4
  - Misalkan ada seorang pria "bebas" di beberapa titik (bukan titik awal) dan telah melamar semua wanita, dengan ini setiap wanita setidaknya telah dilamar satu kali. Padahal ketika wanita dilamar dia akan memiliki pasangan. Kita punya _n_ wanita terlamar dan _n_ pria telah memiliki pasangan. Sehingga __tidak mungkin__ ada wanita yang belum di lamar. Pernyataan ini kontradiksi, sehingga pernyataan 1.4 benar.

4. Teorema 1.5 
- Misalkan ada pria _m_ yang belum memiliki pasangan saat terminasi. Karena ada _n_ pria dan _n_ wanita, maka ada wanita _w_ yang belum memiliki pasangan juga. Ketika seorang wanita memiliki pasangan, ia tidak pernah free lagi, ia hanya bertukar pasangan. Berarti jika ada _w_ free maka belum ada yang melamar _w_. Padahal _m_ seharusnya telah melamar semua wanita. Maka pernyataan ini kontradiksi. Jadi asumsi diatas (1.5) benar.

5. Teorema 1.6 
  - Misalkan pasangan yang bukan anggota himpunan Gale-Shapley _S_ 
  - Kasus 1: _m_ tidak pernah melamar _w_
    - kemungkinan:
      - _m_ lebih memilih _w'_ dibanding _w_
      - dengan ini, _S_ stabil

  - Kasus 2: _m_ pernah melamar _w_
    - kemungkinan:
      - _w_ menolak lamaran _m_ sekarang/nanti
      - _w_ lebih memilih _m'_ dibanding _m_
      - dengan ini, _S_ stabil
