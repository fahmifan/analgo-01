## Looping
---
### Algorithm
- Inisialisasi variabel `result <-- 1`
- Lakukan perulangan sebanyak `n`
- Di dalam perulangan, `result <-- result*2`
- setelah loop return `result`

## Recursive
---
### Algorithm
- Inisialisasi `fungsi(n)`
- Jika `n < 1` return 1
- Jika bukan,  return `fungsi(--n)`

## Comparison
---
Hasil _benchmarking_ dapat dilihat pada file `benchmark.txt`. Benchmark dilakukan dengan menggunakan fungsi `console.time` untuk tiap eksekusi. Data untuk _benchmark_ didapat menggunakan module `faker`.

Berikut adalah hasil _benchmark_ dalam bentuk grafik

![benchmark](https://raw.githubusercontent.com/miun173/analgo-01/master/tugas-kelas/dua-pangkat-n/image/benchmark-chart.jpg)