import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {

  // bookdetails

  bookDetails = [
    {
      id:1,
      bookId:"001",
      titleName:"Pengantar Filsafat Untuk Psikologi",
      pengarang:"Dr. Raja Oloan Tumanggor, Carolus Suharyanto",
      penerbit:"PT. Kanisius",
      synopsis:"Filsafat merupakan induk dari segala ilmu pengetahuan (materscientiarum). Oleh karena itu filsafat yang melahirkan ilmu pengetahuan tetap relevan bagi setiap orang yang menggeluti ilmu itu sendiri. Buku ini berusaha menolong pembaca guna memperoleh gambaran mengenai filsafat, persoalan yang dibahas beserta cabang-cabangnya. Buku ini merupakan materi kuliah pengantar filsafat untuk mahasiswa psikologi. Belajar filsafat menjadi hal penting, baik dalam pengembangan ilmu pengembangan ilmu pengetahuan mauan peradaban manusia",
      tahunTerbit:"2017",
      ISBN:"978-979-21-5456-6",
      bookImg:"/assets/img/1-0.jpg",
      hargaBuku:"Rp.60.000",
      stock:"7"
    },
    {
      id:2,
      bookId:"002",
      titleName:"Sejarah Terlengkap Peradaban Dunia",
      pengarang:"Rizem Aizid",
      penerbit:"Noktah ",
      synopsis:"Buku ini menyajikan pembahasan secara detail dan komprehensif mengenai peradaban-peradaban besar manusia dari masa sebelum Masehi hingga modern. Total terdapat sembilan peradaban besar dunia yang disajikan di dalam buku ini, yakni peradaban Mesopotamia, peradaban Mesir Kuno, peradaban India Kuno, peradaban Tiongkok Kuno, peradaban Mesoamerika, peradaban Persia, peradaban Yunani Kuno, peradaban Romawi Kuno, dan peradaban Islam. Kesembilan peradaban tersebut dibahas dengan bahasa lugas dan sederhana sehingga dapat dipahami oleh semua kalangan pembaca. Penyajiannya pun sistematis, mulai dari awal mula berdirinya peradaban, suku bangsa yang membangun peradaban, kerajaan-kerajaan yang pernah berkuasa, raja-raja yang memerintah, perkembangan di semua bidang, hingga peninggalan-peninggalan sejarahnya. Plus gambar-gambar pendukung. Karenanya, dapat dikatakan bahwa buku ini adalah buku sejarah peradaban besar dunia terlengkap",
      tahunTerbit:"2018",
      ISBN:"978-602-5781-01-8",
      bookImg:"/assets/img/19.01.1117.jpg",
      hargaBuku:"Rp.80.000",
      stock:"15"
    },
    {
      id:3,
      bookId:"003",
      titleName:"Nusantara Sejarah Indonesia",
      pengarang:"Vlekke, Bernard H.M.",
      penerbit:"Kepustakaan Populer Gramedia",
      synopsis:"Buku ini menyajikan pembahasan secara detail dan komprehensif mengenai peradaban-peradaban besar manusia dari masa sebelum Masehi hingga modern. Total terdapat sembilan peradaban besar dunia yang disajikan di dalam buku ini, yakni peradaban Mesopotamia, peradaban Mesir Kuno, peradaban India Kuno, peradaban Tiongkok Kuno, peradaban Mesoamerika, peradaban Persia, peradaban Yunani Kuno, peradaban Romawi Kuno, dan peradaban Islam. Kesembilan peradaban tersebut dibahas dengan bahasa lugas dan sederhana sehingga dapat dipahami oleh semua kalangan pembaca. Penyajiannya pun sistematis, mulai dari awal mula berdirinya peradaban, suku bangsa yang membangun peradaban, kerajaan-kerajaan yang pernah berkuasa, raja-raja yang memerintah, perkembangan di semua bidang, hingga peninggalan-peninggalan sejarahnya. Plus gambar-gambar pendukung. Karenanya, dapat dikatakan bahwa buku ini adalah buku sejarah peradaban besar dunia terlengkap",
      tahunTerbit:"2008",
      ISBN:"9789799101075",
      bookImg:"/assets/img/167689320_285205969722594_3047226137751876657_n.jpg",
      hargaBuku:"Rp.65.000",
      stock:"5"
    },
    {
      id:4,
      bookId:"004",
      titleName:"Hujan",
      pengarang:"Tere Liye",
      penerbit:"PT. Gramedia Pustaka Utama",
      synopsis:"Buku ini menceritakan kisah cinta dan perjuangan hidup seorang gadis bernama Lail. Saat usianya baru menginjak 13 tahun ia harus menjadi yatim piatu. Pada hari pertamanya sekolah, bencana gunug meletus dan gempa dahsyat telah menghancurkan kota tempat tinggalnya dan membunuh ibu serta ayahnya. Letusan gunung api purba yang melebihi letusan gunung api Tambora dan gunung Krakatau. Beruntung ia diselamatkan oleh seorang anak berusia 15 tahun bernama Esok, ibu Esok tidak meninggal namun kedua kakinya harus diamputasi.",
      tahunTerbit:"2016",
      ISBN:"978-602-03-2478-4",
      bookImg:"/assets/img/2MA8DwAAQBAJ.jpeg",
      hargaBuku:"Rp.85.000",
      stock:"10"
    },
    {
      id:5,
      bookId:"005",
      titleName:"Asyiknya Belajar Grammar Dari Kisah-Kisah",
      pengarang:"Diyan Yulianto",
      penerbit:"Diva Press",
      synopsis:"Percayakah Anda bahwa humor dapat dimanfaatkan untuk pembelajaran bahasa asing? Anda mungkin telah mengetahui bahwa tersenyum atau tertawa dapat menurunkan tingkat ketegangan sekaligus menyehatkan. Adapun dalam mempelajari bahasa asing, Anda tentu perlu meiasa nyaman agar materi lebih mudah dicerna. Perasaan nyaman atau rileks ini salah satunya bisa dibentuk melalui humor. Elemen humor dapat berwujud lelucon (jokes), sindiran (satire), cerita lucu (funny stories), teka teki (funny riddles), dan juga anekdot (anecdotes). Melalui buku ini, Anda akan diajak menerapkan cara baru dalam belajar bahasa Inggris, yakni memanfaatkan cerita lucu (funny stories). Setidaknya, ada 45 cerita pendek ringan dan segar bertema kehidupan sehari-hari di dalam buku ini. Setiap cerita lucu diiringi dengan penjelasan unsur humor dengan gaya bahasa penulis yang khas. Dari cerita-cerita tersebut, diambil sejumlah elemen untuk menjelaskan materigrammarbahasa Inggris secara ringkas dan mudah dimengerti.",
      tahunTerbit:"2018",
      ISBN:"978-602-391-491-3",
      bookImg:"/assets/img/ASYIKNYA_BELAJAR_GRAMMAR_DARI_KISAH-KISAH_JENAKA.jpg",
      hargaBuku:"Rp.55.000",
      stock:"2"
    },
    {
      id:6,
      bookId:"006",
      titleName:"Sejarah Ideologi Dunia",
      pengarang:"Nur Sayyid Santoso Kristeva",
      penerbit:"Lentera Kreasindo",
      synopsis:"Penulis buku ni kan mengantarkan kita pada ideologi-ideologi Besar yang telah mengakar dan tersebar di berbagai belahan dunia.Mulai dari pengertian, prinsip-prinsip dasar,sejarah, dinamika perjalanan dan perkembangannya,hingga para tokoh yang berada di balik ideologi tersebut.      ",
      tahunTerbit:"2018",
      ISBN:"978-602-1090-11-4",
      bookImg:"/assets/img/download.jpeg",
      hargaBuku:"Rp.70.000",
      stock:"11"
    },
    {
      id:7,
      bookId:"007",
      titleName:"Buku Manajemen Basis Data Menggunakan MySQL",
      pengarang:"Robi Yanto",
      penerbit:"Deepublish",
      synopsis:"Sekarang ini kita dapat melihat betapa pentingnya sistem basis data dalam kehidupan kita sehari-hari, hampir semua aktivitas yang kita lakukan tidak terlepas dari namanya data. Misalnya mahasiswa melakukan aktivitas dari rumah menuju kampus untuk melihat jadwal perkuliahan, nilai, materi-materi pembelajaran dan lainnya yang tidak terlepas dari data, begitu juga dengan aktivitas kerja di perkantoran banyak pegawai melakukan pengolahan data baik tercatat dalam lembar kertas maupun menggunakan sistem komputer kemudian ke semua data tersebut akan diarsipkan dengan pola pengarsipan ataupun pola yang sudah terkomputerisasi.",
      tahunTerbit:"2013",
      ISBN:"978-602-401-204-5",
      bookImg:"/assets/img/Manajemen-Basis-Data-MySQL.depan_.jpg",
      hargaBuku:"Rp.87.000",
      stock:"4"
    },
    {
      id:8,
      bookId:"008",
      titleName:"Manajemen Teknik (Untuk Praktisi Dan Mahasiswa Teknik)",
      pengarang:"Sriyono D. Siswoyo, Meutia Sistarani",
      penerbit:"DCV. Budi Utama",
      synopsis:"Buku ini menguraikan tentang penerapan ilmu manajemen yang perlu dipahami oleh para praktisi teknik dan mahasiswa teknik. Penulis sebagai seorang dosen di Perguruan Tinggi yang mengajar mata kuliah manajemen teknik menemukan kurangnya buku bacaan manajemen teknik yang dapat dipelajari oleh mahasiswa teknik dengan mudah. Karena itu penulis menguraikan ilmu manajemen dalam buku ini secara sederhana yang merupakan kumpulan kuliah yang diberikan oleh penulis didalam kelas. Dalam uraian di buku ini, pada Bab I Penulis menguraikan sejarah dan pengertian manajamen dalam bahasa yang mudah dimengerti oleh mahasiswa. Selanjutnya pada Bab II Penulis menguraikan perkembangan ilmu teknik serta diperkenalkannya istilah manajemen teknik dalam Dunia pendidikan tinggi. Dari uraian tersebut dijelaskan keselarasan perkembangan ilmu manajemen dan ilmu teknik sebagai inti pembentuk ilmu manajemen teknik. Pada Bab selanjutnya Penulis menggunakan siklus manajemen POAC Planning Organizaing Actuating dan Controlling yang diperkenalkan oleh Prof George Terry dalam menguraikan manajemen serta keterikatannya dalam ilmu teknik. Pada masing-masing Bab akan diawali dengan sebuah cerita sederhana sebagai pengantar yang akan mendorong minat mahasiswa dalam belajar ilmu manajemen.",
      tahunTerbit:"2020",
      ISBN:"978-623-02-1631-2",
      bookImg:"/assets/img/Manajemen-Teknik_Sriyono-rev-1.0-Convert-depan-scaled.jpg",
      hargaBuku:"Rp.87.000",
      stock:"9"
    }
  ]

  // kategoriBuku = [
  //   {
  //     id:1,
  //     kategori:"Sejarah"
  //   },
  //   {
  //     id:2,
  //     kategori:"Bahasa"
  //   },
  //   {
  //     id:3,
  //     kategori:"Umum"
  //   },
  //   {
  //     id:4,
  //     kategori:"Filsafat dan Psikologi"
  //   },
  //   {
  //     id:5,
  //     kategori:"Agama"
  //   },
  //   {
  //     id:6,
  //     kategori:"Sosial"
  //   },
  //   {
  //     id:7,
  //     kategori:"Teknologi"
  //   }

  // ]

  profileData = [
    {
      bgProfil:"/assets/img/bg-profil.png",
      ftProfil:"/assets/img/fotoProfil.png",
      userName:"Dwi",
      name:"Dwi Kurniawati",
      gender:"Perempuan",
      email:"dwikurniawati@gmail.com",
      alamat:"Jl.kenanga Timur, Kec.Clincing, Jakarta Utara"
    }
  ]

  bookKategori = [
    {
      id:1,
      kategori:"All",
    },
    {
      id:2,
      kategori:"Fiksi",
    },
    {
      id:3,
      kategori:"Nonfiksi",
    },
    {
      id:4,
      kategori:"Agama",
    },
    {
      id:5,
      kategori:"Sejarah",
    },
    {
      id:6,
      kategori:"Kesehatan",
    },
    {
      id:7,
      kategori:"Pendidikan",
    }
  ]
  Order = [
    {
      id:1,
      judulBuku:"Nusantara Sejarah Indonesia",
      jumlahBuku:"1",
    },
    {
      id:2,
      judulBuku:"Hujan",
      jumlahBuku:"1",
    },
    {
      id:3,
      judulBuku:"Pengantar Filsafat Untuk Psikologi",
      jumlahBuku:"1",
    },
  ]

}
