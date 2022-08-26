const menu = [
  {
    id: 1,
    title: "Geleli Kebabı",
    category: "Malatya",
    link: "https://www.nefisyemektarifleri.com/malatyadan-nefis-geleli-kebabi/",
    img: "https://www.ardaninmutfagi.com/wp-content/uploads/2019/05/geleli-kebabi-3.jpg",
    desc: `Közlenmiş patlıcanın, kuşbaşı et ve bol domatesle fırınlanmasıyla hazırlanır.`,
  },
  {
    id: 2,
    title: "Kiraz Yaprağı Sarması",
    category: "Malatya",
    link: "https://www.nefisyemektarifleri.com/kiraz-yapragi-sarmasi-malatya-kiraz-yapragi-sarmasi-yoresel-tarifler/",
    img: "https://i.pinimg.com/564x/a9/d2/40/a9d240db420ef6869d65546f0f529751.jpg",
    desc: `Yaprağın orta damarı sert ise çekerek çıkardıktan sonra hamurdan fındık veya nohuttan az büyük bir parça koparıp, yaprağın ortasına yayarak kalem gibi uçları açık bir şekilde sarın. `,
  },
  {
    id: 3,
    title: "Gırık",
    category: "Malatya",
    link: "https://www.nefisyemektarifleri.com/girik-6685964/",
    img: "https://cdn.yemek.com/uploads/2015/09/sulu-kofte-girik1.jpg",
    desc: `Görünüm ve lezzet olarak ekşili sulu köfteyi anımsatan bir tarif Malatya yöresel yemeklerinden, gırık!`,
  },
  {
    id: 4,
    title: "Analıkızlı",
    category: "Malatya",
    link: "https://www.nefisyemektarifleri.com/malatya-usulu-anali-kizli-kofte/",
    img: "https://im.haberturk.com/2019/10/31/ver1572526596/anali-kizli_2536157_810x458.jpg",
    desc: `Malatya, Bitlis, Adana, Gaziantep ve daha birçok ilde meşhur olan analı kızlı yemeğini bir de Malatyalılar'dan dinleyin.`,
  },
  {
    id: 5,
    title: "Eli Böğründe",
    category: "Maraş",
    link: "https://www.nefisyemektarifleri.com/eli-bogrunde-kahramanmaras-yemegi/",
    img: "https://cdn.ye-mek.net/App_UI/Img/out/650/2022/04/eli-bogrunde-resimli-yemek-tarifi(9).jpg",
    desc: `Kahramanmaraş'ın yöresel yemekleri arasında yer alan eli böğründe yemeği, bir kebap çeşididir.`,
  },
  {
    id: 6,
    title: "Maraş Tava",
    category: "Maraş",
    link: "https://yemek.com/tarif/maras-tava/",
    img: "https://i4.hurimg.com/i/hurriyet/75/750x422/622765634e3fe01bfcb3cc0e.jpg",
    desc: `Patlıcan, soğan, domates ve kırmızı et ile hazırlanan Maraş tava, yörenin en sevilen yemeklerinden biridir.`,
  },
  {
    id: 7,
    title: "Sömelek Köfte",
    category: "Maraş",
    link: "https://yemek.com/tarif/somelek-kofte/",
    img: "https://blog.biletbayi.com/wp-content/uploads/2017/07/somelek-koftesi.jpg",
    desc: `Sömelek köfte Maraş bölgesinde çok tüketilen bir köftedir. Üstelik yapılışı da çok kolaydır.`,
  },
  {
    id: 8,
    title: "Mumbar Dolması",
    category: "Maraş",
    link: "https://www.nefisyemektarifleri.com/maras-usulu-orijinal-mumbar-dolmasi/",
    img: "https://blog.biletbayi.com/wp-content/uploads/2017/07/mumbar-dolmasi.jpg",
    desc: `Mumbar dolması bumbar dolması olarak da bilinir. Daha önce tatmış olduğunuz yemeklere göre oldukça farklı olan bu yemek, koyunun kalın bağırsağının iç harç ile doldurularak yapılan bir yemek türüdür.`,
  },
  {
    id: 9,
    title: "Maraş Tarhanası",
    category: "Maraş",
    link: "https://www.kulturportali.gov.tr/turkiye/kahramanmaras/neyenir/maras-tarhana-corbasi",
    img: "https://blog.biletbayi.com/wp-content/uploads/2017/07/maras-tarhanasi.jpg",
    desc: `Yörelere göre yapılış şekli değişmekte olan bu çorba türü, Kahramanmaraş’ta oldukça sık yapılıyor..`,
  },
];

let allButtons = `
<button id="All" class="btn btn-outline-dark btn-item">Hepsi</button>
<button id="Malatya" class="btn btn-outline-dark btn-item">Malatya</button>
<button id="Maraş" class="btn btn-outline-dark btn-item">Maraş</button>
`;

//Oluşturulan butonların içeriğe eklenmesi
document.querySelector(".btn-container").innerHTML = allButtons;
//İçerik alanının seçilmesi
let section = document.querySelector(".section-center");
//sayfa yüklenince allItem fonksiyonunu çalıştırıyoruz
document.addEventListener("DOMContentLoaded", allItem);
//idsi All olan elemente tıklandığında allItem fonksiyonu çalışıyor
document.getElementById("All").addEventListener("click", allItem);

//idsi Malatya olan elemente tıklandığında çalışacak fonksiyon
document.getElementById("Malatya").addEventListener("click", () => {
  //İlk başta içeriği temizliyoruz
  section.innerHTML = "";
  //forEach ile tüm menüyü dolaşıyoruz ve categorysi Malatya olan itemleri aliyoruz
  menu.forEach((item) => {
    if (item.category === "Malatya") {
      //Categorysi Malatya olan itemleri section'un innerHTML ine product(item) fonksiyonu ile ekliyoruz
      section.innerHTML += product(item);
    }
  });
});
document.getElementById("Maraş").addEventListener("click", () => {
  section.innerHTML = "";
  menu.forEach((item) => {
    if (item.category === "Maraş") {
      section.innerHTML += product(item);
    }
  });
});

const product = (food) => {
  let html = `
  <div class="menu-items col-lg-6 col-sm-12">
  <img src="${food.img}" alt="${food.title}" class="photo">
  <div class="menu-info">
  <div class="menu-title">
  <h4>${food.title}</h4>
  <h4><a href="${food.link}" target="_blank">Tarife Git</a></h4>
  </div>
  <div class="menu-text">
  ${food.desc}
  </div>
  </div>
  </div> 
  `;
  return html;
};

function allItem() {
  section.innerHTML = "";
  menu.forEach((item) => {
    section.innerHTML += product(item);
  });
}
