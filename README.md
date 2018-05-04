# js-vigenere-cipher
Versi web / JavaScript dari Vigenere Cipher yang pernah saya buat.

### Vigenere Cipher
Menurut [Wikipedia](https://en.wikipedia.com), **Vigenere Cipher** adalah suatu metode penyandian teks alfabet dengan menggunakan deretan  *Caesar ciphers* berdasarkan huruf-huruf pada *keyword*.

### Algorithm
Vigenere Cipher menggunakan [tabel Vigenere]() untuk meng-*encode* suatu pesan. Tabel berisi Alfabet dari *A* ke *Z* di baris pertama, kemudian di baris berikutnya setiap huruf digeser satu posisi ke kiri, hingga baris ke-26.

![Tabel Vigenere](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vigen%C3%A8re_square_shading.svg/800px-Vigen%C3%A8re_square_shading.svg.png)

### Implementasi
Pada setiap karakter *plain text* akan di-*encode* dengan *key*. Misalkan kata yang akan di-*encode* adalah GITHUB sedangkan kata kuncinya adalah CODE. Kata kunci akan diulang berdasarkan panjang dari plain text. Jadi kata kuncinya adalah CODECO. Secara matematika untuk mendapatkan *cipher text*-nya digunakan rumus: **C = (P + K) mod 26**. C, P, dan K adalah urutan alfabet dari *cipher text*, *plain text*, dan *key*, dan 26 adalah jumlah dari alfabet secara keseluruhan.

Namun, karena pada dunia komputasi ada standar penulisan karakter ([Unicode](https://en.wikipedia.org/wiki/Unicode)), rumusnya dimodifikasi sedikit menjadi: **C = (P + K) mod 26 + _65_**. Angka 65 merupakan bentuk desimal dari huruf 'A'.

---------------------

##### Implementasi yang saya buat dengan JavaScript, saat ini hanya bisa meng-*encode*, selanjutnya akan ditambahkan *decode*.
