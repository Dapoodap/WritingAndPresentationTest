
# MSIB SKILVUL #TECH4IMPACT BATCH 4

## Data diri  :rocket:
Nama		:	Daffa Radhitya Pratama Wina. P
NIM			:	A11202012648
Univ.		:	Dian Nuswantoro
Email		:	111202012648@mhs.dinus.ac.id
Track		: Frontend Development
Kel.		: FEBE 13 / FE 2

## Resume week 1
### Unix Command Line

 - SHELL merupakan sebuah program yang mana memungkinkan user untuk memerintah atau berkomunikasi dengan sistem
 - CLI atau kepanjangannya *Command Line Interface* merupakan jenis SHELL yang berupa teks
 - Untuk kita bisa melakukan menuliskan command, kita perlu platform. Terminal emulator merupakan salah satu aplikasi untuk mengakses CLI 
 - File System adalah suatu metode untuk memberikan nama pada sebuah folder dan meletakkannya pada media penyimpanan 
 - Pada file sistem tersebut ada strukturnya yang membuat penyimpanan lebih teratur, hal tersebut dinamakan file system structure
 - Pada sistem operasi windows & unix  -like media penyimpannnya hampir mirip, yaitu seperti bentuk tree 
**![](https://lh4.googleusercontent.com/8AB-1gsdCbkRUjTMT2ZDUd0Mgh_Zz9Xno-ZtMunzCs3d7PCf017A06D4iLS_C7MP73sWlujzdAREvirFp2NsWysbT0sOp83SCgo3GbJmHvW6_QwjW1T832c92xaTA6_BiFHHtgUiHM3C48AWBrDDPWD6coNMuggaj31eIKHqegtI5NBkSPVdxZnmBQIN8dTYpQeb)**
 - Terdapat command atau perintah perintah yang bisa kita gunakan untuk melakukan aksi atau manipulasi, antara lain :
	 - **PWD (*Print Working Directory*)** Command pwd merupakan sebuiah perintah untuk mengetahui dimana path kita berada, ex.

	  	![PWD command](/gambar/pwd.jpg)

	 -  **ls (*Lists*)** Merupakan sebuah command untuk melihat apa saja sih file yang ada pada folder yang sedang kita buka, ex.

	 	![ls command](/gambar/ls.jpg)
	 - **cd (*change directory*)** Merupakan command yang sangat sering digunakan karena digunakan untukberpindah folder / direktori, ex.

		![Tux, the Linux mascot](/gambar/cd.jpg)
		
	- **touch** Command touch merupakan perintah untuk membuat sebuah file baru pada direktori, ex.
	![touch command](/gambar/touch.jpg)

	- **MKDIR (*Make Directory*)** Merupakan sebuah command untuk membuat suatu direktori baru
	- Ada beberapa command untuk membaca sebuah file yang ada pada suatu direktori yaitu **CAT** dimana **CAT** merupakan command untuk melihat semua isi file. Ada juga **HEAD** untuk melihat isi file yang teratas dan **TAIL** melihat yang berada pada line terbawah.

	- Kita juga bisa mengedit isi file dengan command sesuai editor yang akan kita gunakan, ex

		![nano command](/gambar/nano1.jpg) 
		![nano command](/gambar/nano2.jpg)
	- **cp (*Copy*)** Merupakan sebuah command yang kita gunakan untuk mengcopy atau menyalin file atau directory
	- **mv (*Move*)** Kita gunakan command ini untuk memindahkan file atau directory. Selain itu kita juga bisa rename dengan command ini
	- **rm (*Remove*)** Yang terakhir kita bisa memanipulasi dengan menghapus file atau direktori dengan command rm. untuk menghapus file  `rm -R` sedangkan untuk menghapus direktori menggunakan command `rm -d`
### Git dan Github
 - Saat bekerja bersama dalam suatu programmer membutuhkan suatu tools yang membantunya agar mudah untuk berkolaborasi dengan sesama programmer
 - Git merupakan salah satu tools yang dibuat bagi programmer untuk memudahkan pekerjaan sebagai Version control System
 - Version control system memiliki tugas untuk mencatat setiap change atau perubahan yang dilakukan (termasuk manipulasi perubahan file dan code yang kita buat) pada ruang lingklup kerja individu maupun dengan tim
 - Untuk penyedia layanan penyimpanan version control system git biasanya menggunakan **github**,** gitlab**, atau **bitbucket**.
 - Sebelum kita mengetahui bagaimana cara menggunakan git dan github kita perllu melakukan instalasi dengan beberapa step :
	 -  Mendownload dan install [git](https://stackedit.io/). 
	 - Melakukan configurasi dengan command 
		 `git config global user.name "daffaRadh"` 
		 `git config global user.email"daffasven@gmail.com"`
	- Nantinya kita dapat mengecek hasil config kita dengan command `git config --list`
		![config result command](/gambar/config.jpg) 
- Setelah kita sudah menginstall  git di desktop kita, selanjutnya kita perlu memahami bagaimana cara agar kita bisa membuat repository (direktori penyimpanan file proyek) hingga push ke vendor git hub. command dan stepnya adalah :
	- `git init` command tersebut digunakan untuk menginisialisasi sebuah repository di file lokal
	- `git add .` command yang digunakan untuk menambahkan  file baru pada file lokal tersebut
	- `git commit -m "first commit"`Digunakan untuk menyimpan perubahan yang ada namun masi pada local repository, pada remote repository belum update
	- `git remote ...` Merupakan command untuk mengkoneksikan atau menghubungkan repository local ke repository server lain (in this case menggunakan server git hub)
	- `git branch -b [nama branch]` Merupakan command untuk mengganti nama branch tertentu
	- `git push -u origin master/main` Merupakan langkah terakhir untuk kita dapat push atau mengirimkan perubahan pada repository lokal kita ke remote repository
- hal hal diatas merupakan langkah langkah dan command yang dapat kita gunakan untuk kita dapat menambahkan file projek kita ke repository yang ada pada github. Selain itu ada command command yang dapat membantu kita dalam tracking atau mungkin memcahkan suatu masalah dalam proses mengirimkan ke git hub yaitu antara lain :
	- `git status` merupakan command untuk mengecek dan melihat apakah terjadi perubahan pada git kita
	- `git checkout` command yang digunakan untuk kita pada saat berpindah ke branch lain
	- `git merge` command yang diogunakan untuk menggabungkan (*merged*) branch cabang ke branch master / main 

