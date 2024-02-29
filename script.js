let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirme Kursu";

// 1- url kaç karakterlidir?

let sonuc;
sonuc = url.length;
console.log(sonuc);

// 2- kursAdi kaç kelimeden oluşmaktadır?

let sonuc2;
sonuc2 = kursAdi.length;
console.log(sonuc2);

// 3- url https ile mi başlıyor?

let sonuc3;
sonuc3 = url.startsWith("https");

if (sonuc3) {
    console.log("evet başlıyor")
} else {
    console.log("hayır başlamıyor")
}

// 4- kursAdi içerisinde Eğitimi kelimesi var mı?

if (kursAdi.indexOf("Eğitimi") > -1) {
    console.log("evet var");
} else {
    console.log("hayır yok")
}


// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.

// https://www.sadikturan.com/komple-web-gelistirme-kursu

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" " , "-");
kursAdi = kursAdi.replace("ş", "s").replace("ı","i");

sonuc4 = `${url}/${kursAdi}`;

console.log(sonuc4);




