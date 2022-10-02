
# MSIB SKILVUL #TECH4IMPACT BATCH 3

## Data diri  :rocket:
#### Nama : Daffa Radhitya PWP
#### EMAIL : 111202012648@mhs.dinus.ac.id
#### Univ. Asal : Universitas Dian Nuswantoro
#### Track : Frontend Web Developer
#### Group : FEBE 13 /FE 2
---

## Resume week 2
### Javascript Dasar (Function dan Scope)

 - Javascript sendiri memiliki yang namanya scope. Scope merupakan suatu konsep flow data variabel. Maksudnya konsep itu adalah kita dapat menentukan apakah suatu variabel dapat di akses pada scope tertentu atau tidak.
 - Kalo di analogikan, kita dari berbagai kota di indonesia dapat melihat matahari yang sama namun kita dari berbagai kota di indonesia tidak mungkin melihat salah satu monumen atau bangunan nasional di kota lain dari kota kita asal.
 - Sebelum kita memasuki tentang scope, ada yang namanya `{ }` dinamakan braces.  Nah code yang berada didalam braces terebut dinamakan **block**. Pada looping, dan conditional kemarin kita menggunakan block ini lalu nantinya pada function kita juga akan menggunakan si block ini.
 - Kita masuk pada global scope. Global scope artinya suatu variabel yang bisa kita akses secara bebas didalam suatu file. Nah bagaimana cara kita dapat mendklarasikan global scope ? kita harus mendeklarasikan variabel di luar block tadi agar bisa diakses secara bebas dan termasuk pada global scope.
 - global scope di analogikan seperti tadi di berbagai kota yang berbeda kita dapat melihat matahari yang sama. Jika diimplementasikan dalam codingan javascript, kita dapat mengakses suatu variabel secara bebas bisa untuk function atau cinditional atau proses lainnya.
 - ![global coop](global.jpg)
 - Selanjutnya selain ada global, javascript juga memiliki local (Local Scope). Local scope sendiri adalah lawan dari global scope tadi yang mana variabel yang kita buat hanya bisa diakses terbatas, bisa khusus hanya di function tertentu, conditional tertentu, atau looping statement tertentu.
 - Berlawanan dengan global scope, local scope berarti kita harus mendeklarasikan didalam block dan tidak akan bisa di akes diluar block.
 - ![local scope](local.jpg)
 - Setelah kita mengetahui tentang scope, kita akan implementasikan penggunaannya pada function.  Nah function sendiri merupakan sebuah blok code yang menampung suatu intruksi yang nantinya dapat kita gunakan berkali kali
 - ![tanpa function](tanpa%20function.jpg)
 - Nah dari gambar diatas sekilas tidak ada masalah dan kita bisa paham bahwa contextnya adalah kita membuat luas PP yaitu panjang x lebar. Nah apabila kita melakukan 3 kali atau lebih dari 3 kali perhitungan luas PP akan memakan banyak line serta membuat kita lelah dan tidak efektif. Maka dari itu function juga membantu kita untuk memudahkan dalam mencoding suatu proses
 - ![func](function.jpg)
 - Lebih ringkas, dan efisien apabila digunakan berkali kali dari gambar diatas menggunakan function
 - Function diatas bisa terlihat terdiri dari beberapa komponen pada syntaxnya yaitu
	 - `function` merupakan keyword function yang menandakan bahwa code ini merupakan function
	 - `luasPP()` yaitu sebuah 	identifier sebagai penamaan function
	 - `{
	 console.log(...)}` merupakan sebuah function body letak statement dan intruksi dimuat 
 - Kita bisa menuliskan identifiernya ketika kita ingin memanggil function, contohnya `luasPP()` atau jika tanpa retun console.log bisa `console.log(luasPP())`
 - 	 Selanjutnya kita akan membahas hal yang tidak kalah penting dalam function, yaitu parameter dan argumen
 - ![PWD command](function.jpg)
 - Dari contoh tadi yang merupakan parameter adalah `(p,l)` lalu argumen salah satunya `luasPP(10,6)` yang mana 10,6 merupakan argumen.
 - Parameter berfungsi untuk menerima sebuah inputan yang nantinya diolah oleh interuksi lanjut.
 - Dari gambar tadi kita bisa tahu bahwa paframeter **p,l** digunakan kembali di function body. Itu yang saya maksud nantinya diolah oleh intruksi lebih lanjut
 - Sedangkan argumen bertindak sebagai inputan dari function sebagai pengisi tempat parameter tadi. Dalam kata lain argumen adalah nilai yang digunakan saat memanggil function
 - Hal yang harus diperhatikan adalah jumlah argumen harus sama dengan jumlah paramater awalnya
 - ![PWD command](default.png)
 - Lalu pada function juga ada default parameter, bisa terlihat di gambar defaultnya adalah phi = 0 apabila log kan tanpa argumen dia akan menampilkan 0, tapi jika isi argumen 3,14 maka dia akan mengeluarkan nilai 3,14
 - Selain default parameter kita juga bisa melakukan yang dinamakan dengan function helper. Artinya kita bisa menggunakan funsi lain untuk fungsi yang berbeda, contohnya 
 - ![PWD command](helper.png)
 - Bisa terlihat function phiNumber bisa digunakan untuk function luasLingkaran
 - Selanjutnya kita akan mengetahui bagaimana saja pembuatan function
	- function biasa
	![PWD command](function.jpg)
	- Function variabel
	![PWD command](func%20variabel.png)
	- Arrow Function
	![PWD command](arrow.png)
 - Mengapa kita harus menggunakan function ? Dengan menggunakan function akan memudahkan kita dalam melakukan debugging atau mentrack letak error pada code kita.
--- 
### Javascript Dasar (Data tipe, Built in method/propertise, and prototipe)
 - Seperti bahasa pemograman lainnya, javascript juga memiliki tipe data yang bermacam
 - Tipe data juga terbagi menjadi 2 yaitu primitive dan non - primitive
 - Tipe data primitive artinya tipe data yang hanya bisa menyimpan sebuah nilai tidak berbagai macam, contohnya 

	![PWD command](primitiv.png)
 - Sedangkan non primitive yaitu tipe data yang dapat menyimpan banyak data, contohnya
 
	![PWD command](non.png)
 - Lalu selanjutnya kita akan membahas tenntang method/propertise built in pada javascript. Jadi di javascript sudah ada beberapa method yang dibuatkan dari sananya untuk membantu kita dalam membuat sebuah program. JAdi kita tidak harus menuliskan ulang beberapa functionnya.
 - Selain method ada juga properties built ini, apa bedanya ?. Propertise adalah yang disimpan adalah sebuah data sedangankan method yang disimpan sebuah logika atau intruksi. Sedangkan built in artinya bawaan dari bahasa pemograman terkait, kita akan contohkan biar tidak pusing :
	- ![PWD command](propnmeth.png)
- Masih banyak propertise dan method built in d i javascript seperti 
	- `isNaN()`
	- `Math._` 
	- `Date()`
	- `toUpperCase()` dan `toLowerCase()`
	- `toFixed()`
	- dsb
- Nah bagaimana jika kita membutuhkan sebuah method atau properties yang ternyata tidak tersedia atau tidak built in. Jawabnya kita menggunakan prototipe.
- Jaadi protipe sendiri merupakan cara kita menambahkan sebuah method atau properties yang tidak desediakan dengan cara kita menulis instruksi sendiri, contoh
- Pada javascript tidak memiliki yang namanya method reverse string, padahal saya butuh sekali kita bisa :
![PWD command](proto.png)
---
### Javascript Dasar (DOM intro, traversing)
- Seperti niatnya, javascript dapat membantu kita dalam membuat html kita bisa lebih interaktif dan juga membantu manipulasi yang ada pada html
- Dengan DOM memungkinkan hal itu terjadi. Lalu apa itu DOM ? DOM (*Document Object Model*) merupakan sebuah jembatan atau perantara antara bahasa pemograman dengan html yang nantinya kita memilih suatu elemen html dengan berbagai cara yang nantinya kita bisa ambil atau manipulasi datanya
-  Pada kali ini kita gak akan belajar langsung tentang cara manipulasi tapi kita akab belajar dulu bagaimana cara ambil atau menghubungkan elemen html dengan DOM yang kita buat,  traversing
- ![PWD command](travsers.png)
- Dari gambar diatas bisa terlihat bahwa traversing ada 3 macam, ke atas, ke bawah, ke samping.
	- Ke bawah
		
		![PWD command](ke%20bawah.png) 
	- ke atas

		![PWD command](ke%20atas.png)
	- ke samping

		![PWD command](ke%20samping.png)
- Pada pengaksesan DOM yang menggunakan indeks array berati dia berupa HTMl collection, sedangkan yang tidak menggunakan indeks array maka dia menggunakan yang namanya nodelist
---
### Javascript Dasar (DOM Manipulation)
- Pada javascript kita bisa menggunakan DOM untuk manipulasi seperti menambah element di HTMl, create element, append ke sebuah element, remove, dsb
- `innerText` dan `innerHTML` merupakan cara untuk kita menyuruh DOM memberikan element kepada html.
- Bedanya **innerText** dan **innerHTML**  adalah, jika **innerText** hanya menambahkan text sedangkan **innerHTML** dapat menambahkan berupa element html juga, contoh 
![PWD command](inner.png)
- Kita juga bisa mengcreate elemen baru ke dalam HTML kita dengan `createElement()`.  Contoh 
![PWD command](createE.png)
- Kita juga bisa menambahkan element ke dalam parent sebagai childnya menggunakan `append()` dan `appendChild()`
![PWD command](append.png)
- Lalu kapan kita harus menggunakan **append** atau **appendChild**. append bisa input string saja tidak harus element, tapi appendChild harus element tidak bisa hanya string. Jadi jika ingin menambahkan string doang yang tanpa element bisa menggunakan append tapi jika dengan element kita bisa menggunakan appenChild
- Kurang lengkap membahas manipulation tanpa menghilangkan elemen, kita bisa menggunakan `remove()` untuk menghilangkan element, contoh
![PWD command](remove.png)
- Selain itu kita juga bisa mengambil attribut yang ada pada elemen html. Untuk mengambil kita bisa menggunakan `getAttribute()` untuk mengset attribut bisa menggunakan `setAttribute()`
![PWD command](attribute.png)
- Selain yang semua tadi kita juga bisa menggunakan manipulasi DOM untuk yang berhubungan dengan stylling yaitu menggunakan syntax  `elemen.style.propertiesStyling = value`

	![PWD command](style.png)
- Selain set style kita juga bisa mendapatkan style apasih yang dipakai menggunakan `getComputedStyle()`
![PWD command](computed.png)
---
### Javascript Dasar (DOM event)
- Di dalam DOM juga ada yang dinamakan event, event sendiri adalah suatu kejadian atau kegiatan yang terjadi saat user website kita trigger sesuatu yang membuat terjadi.
- Ada 3 cara mengimplemntasikan event DOM, antara alin :
	- HTML Attribute

		![PWD command](cara1.png)
	- Event Properti

		![PWD command](cara2.png)
	- addEventListener

		![PWD command](cara3.png)
- untuk type submit biasanya akan melakukan refresh page saat kita click kita bisa gunakan `preventDefault` agar tidak refresh page dan juga apabila kita ingin mengambil value kita bisa menggunakan `.value`. Contoh
![PWD command](preventdanvalue.png)