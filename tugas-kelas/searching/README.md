## Binary search 
- Worst case time complexity is O(log n)
- The given array need to be sorted first

### Algoritma
- Pada dasarnya setengah dari elemen diabaikan setelah satu perbandingan.

- Bandingkan x dengan elemen tengah.
- Jika x cocok dengan elemen tengah, kami mengembalikan indeks tengah.
- Jika x lebih besar dari elemen tengah, maka x hanya bisa terletak di setengah subarray kanan setelah elemen tengah. Jadi, prulang hanya untuk setengah yang atas/kanan.
- Jika tidak, (x lebih kecil) berulang untuk setengah bawah/kiri.

## Linear search through array of number
- Worst case complexity is O(n)
- Waktu yang diperlukan untuk mencari elemen selalu meningkat

### Algoritma
- Lakukan perulangan dari index 0 sampai index terakhir.
- Di dalam loop, jika ditemukan `key` sama dengan nilai dari index, maka break loop dan return index yang ditemukan tersebut.
