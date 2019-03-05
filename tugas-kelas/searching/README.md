## Binary search 
---
- Worst case time complexity is O(log n)
- The given array need to be sorted first

### Algoritma
- Pada dasarnya setengah dari elemen diabaikan setelah satu perbandingan.

- Bandingkan x dengan elemen tengah.
- Jika x cocok dengan elemen tengah, kami mengembalikan indeks tengah.
- Jika x lebih besar dari elemen tengah, maka x hanya bisa terletak di setengah subarray kanan setelah elemen tengah. Jadi, prulang hanya untuk setengah yang atas/kanan.
- Jika tidak, (x lebih kecil) berulang untuk setengah bawah/kiri.

## Linear search through array of number
---
- Worst case complexity is O(n)
- Waktu yang diperlukan untuk mencari elemen selalu meningkat

### Algoritma
- Lakukan perulangan dari index 0 sampai index terakhir.
- Di dalam loop, jika ditemukan `key` sama dengan nilai dari index, maka break loop dan return index yang ditemukan tersebut.

## Comparison
---
Hasil _benchmarking_ dapat dilihat pada file `benchmark.txt`. Benchmark dilakukan dengan menggunakan fungsi `console.time` untuk tiap eksekusi. Data untuk _benchmark_ didapat menggunakan module `faker`.

Berikut adalah hasil _benchmark_ dalam bentuk grafik

![benchmark](https://raw.githubusercontent.com/miun173/analgo-01/master/tugas-kelas/searching/image/benchmark-chart.png)

Kami melakukan pengujian sebanyak 10 kali dengan jumlah data yang beragam, mulai dari 10 hingga 100.000 data. Berdasarkan grafik di bawah, pada pengujian yang melibatkan 10 data, binary search membutuhkan waktu yang lebih lama dibandingkan linear search. Namun pada pengujian yang melibatkan lebih dari 50 data, justru performa binary search lebih stabil dibandingkan linear search. Oleh karena itu, dapat dikatakan bahwa kompleksitas waktu linear search lebih besar dibandingkan binary search