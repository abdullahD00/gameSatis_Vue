<template>
  <v-container>
    <div class="ust_menu">
      <ul>
        <li><a href="http://localhost:3000/">Ana Sayfa</a></li>
        <li style="border-style: none">
          <img
            src="https://image.prntscr.com/image/sDQqUAOSTwqt9glWz_Lskw.png"
          />
        </li>
        <li><a href="">Tüm Oyunlar</a></li>
        <li style="border-style: none">
          <img
            src="https://image.prntscr.com/image/sDQqUAOSTwqt9glWz_Lskw.png"
          />
        </li>
        <li><a href="">PUBG Mobile</a></li>
        <li style="border-style: none">
          <img
            src="https://image.prntscr.com/image/sDQqUAOSTwqt9glWz_Lskw.png"
          />
        </li>
        <li><a href="">PUBG Mobile UC</a></li>
        <li style="border-style: none">
          <img
            src="https://image.prntscr.com/image/sDQqUAOSTwqt9glWz_Lskw.png"
          />
        </li>
        <li>PUBG Mobile Royale Pass M4 Proje T</li>
      </ul>
      <v-spacer></v-spacer>
      <button class="buton">
        <div class="d-flex ml-4">
          <img
            style="width: 20px; height: 20px"
            src="https://i.hizliresim.com/rcvnwi7.png"
          />
          <span> Paylaş</span>
        </div>
      </button>
    </div>
    <div class="urun_bolumu flex-column d-flex">
      <div class="d-flex">
        <div>
          <img
            src="https://images.gamesatis.com/products/images/000/075/083/big/product-pubgmobile_uc_600_60.jpg"
            class="urun_resmi"
          />
        </div>
        <div>
          <div class="flex-column d-flex">
            <h1 class="mx-5" style="font-size: 25px">
              PUBG Mobile Royale Pass M4 Proje T
            </h1>
            <span class="mx-5" style="color: red; font-size: 20px"
              >Royale Pass</span
            >
            <span id="ilanno" class="mx-5" style="color: #01a4ea"
              >İlan No: #293260</span
            >
          </div>
          <div class="d-flex flex-column fiyatdiv">
            <del style="color: red; font-size: 20px">100,00₺</del>
            <span style="font-size: 25px">82,50₺</span>
            <v-btn @click="satinalmethod" color="#01A4EA">
              <img id="urunfoto" src="https://i.hizliresim.com/2f1airz.png" />
              SATIN AL
            </v-btn>
          </div>
        </div>
      </div>
      <div class="genelbilgi">
        <div id="urunadi" class="urun_baslik">
          <h>PUBG Mobile Royale Pass M4 Proje T Ürün Açıklaması</h><h />
        </div>
        <v-divider class="my-0.5"></v-divider>
        <div id="urunyazi" class="urun_yazi my-8">
          <p>
            <strong>PUBG Mobile Sezon Royale Pass</strong> hemen satıl al.
            Verilen görevleri tamamladıkça daha hızlı yükselmenin tadını çıkar!
            <strong>Royale Pass</strong> değerinde teslim edilen
            <a href="">Pubg Mobile UC</a> kodunu hemen hesabına yükle ve
            rakiplerinin önüne geç!
          </p>
          <p>
            PUBG Mobile 600+60 UC Epin kodu olarak teslim edilir. Yüklemenin
            ardından 360 UC karşılığında <strong>M4 Royale Pass</strong>'i
            aktife edebilirsiniz. Hesabınızda 300 UC fazladan kalmış olur.
          </p>
          <p>
            Her hafta yapılan yarışmaları bitirip etkinliklere katıldıktan sonra
            RP Puan Kartı alarak RP Puanı kazanabilirsin.
          </p>
          <p>Sandık açtığın taktirde RP Puanı kazanma imkanın olur.</p>
          <p>Oyun içi etkinliklerde kazacanağın RP Puanı daha fazla olur.</p>
          <p>
            600 UC satın alan oyuncuların kazandıkları ödüller daha iyidir ve
            Elit Görevler sayesinde rütbe atlamak daha hızlı olur.
          </p>
          <p>
            En ucuz fiyatlara <strong>PUBG Mobile Royale Pass</strong> satın al
            ve PUBG Mobile'ın ayrıcaklıklı dünyasında yerini al.
          </p>
        </div>
      </div>
    </div>
    <v-spacer class="my-8"></v-spacer>
    <div
      style="
        background-color: #191919;
        width: 1300px;
        height: 285px;
        box-shadow: 0 0 2px 0.1px white;
      "
    >
      <span
        style="font-size: 25px; color: #ced4da; padding-top: 200px"
        class="my-10"
        >Bunlar da İlginizi Çekebilir</span
      >
      <div class="d-flex">
        <div class="flex-column mx-5">
          <img
            src="https://images.gamesatis.com/products/images/000/043/457/medium/product-pubgmobile_uc_60.jpg"
          />
          <h4>PUBG Mobile Elite Royale Pass M4 Proje T</h4>
          <h5>Elite Royal Pass</h5>
          <h6>100,00₺</h6>
          <h7>82,50₺</h7
          ><a
            href=""
            class="incele"
            style="text-decoration: none; color: white"
          >
            İNCELE</a
          >
        </div>
        <div class="mx-5">
          <img
            src="https://images.gamesatis.com/products/images/000/043/457/medium/product-pubgmobile_uc_60.jpg"
          />
          <h4>Pubg Mobile 60 UC (Unknown Cash)</h4>
          <h5>60 Unknown Cash</h5>
          <h6>10,00₺</h6>
          <h7>8,25₺</h7
          ><a
            href=""
            class="incele"
            style="text-decoration: none; color: white"
          >
            İNCELE</a
          >
        </div>
        <div class="mx-5">
          <img
            src="https://images.gamesatis.com/products/images/000/105/186/medium/product-pubgmobile_uc_300_25.jpg"
          />
          <h4>Pubg Mobile 300 + 25 UC (Unknown Cash)</h4>
          <h5>325 Unknown Cash</h5>
          <h6>50,00</h6>
          <h7>41,25₺</h7
          ><a href="" class="incele" style="text-decoration: none; color: white"
            >İNCELE</a
          >
        </div>
        <div class="mx-5">
          <img
            src="https://images.gamesatis.com/products/images/000/075/083/medium/product-pubgmobile_uc_600_60.jpg"
          />
          <h4>Pubg Mobile 600 + 60 UC (Unknown Cash)</h4>
          <h5>660 Unknown Cash</h5>
          <h6>100,00₺</h6>
          <h7>82,50₺</h7
          ><a href="" class="incele" style="text-decoration: none; color: white"
            >İNCELE</a
          >
        </div>
      </div>
    </div>

    <div>
      <span style="font-size: 25px; color: #ced4da; padding-top: 200px"
        >YORUMLAR (5)</span
      >
      <div
        style="
          background-color: #191919;
          width: 1300px;
          box-shadow: 0 0 2px 0.1px white;
        "
        class="yorumdivbir d-flex"
      >
        <div>
          <img
            src="https://images.gamesatis.com/products/images/000/043/457/medium/product-pubgmobile_uc_60.jpg"
          />
        </div>
        <div class="flex-column d-flex">
          <span style="color: #01a4ea; padding-left: 8px">EMİR K. </span>
          <div class="d-flex">
            <span style="color: white; padding-left: 8px"
              >Arkadaşlar bu site en güvendiğim site ve sitenin kendi sattığı
              oyun parası kodları tamamen güvenli.</span
            >
            <v-spacer style="width: 110px"></v-spacer>
            <div class="d-flex flex-column">
              <v-rating value="5" class="ml-10"></v-rating>
              <span class="ml-15"> 11/07/2021</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style="
          background-color: #191919;
          width: 1300px;
          box-shadow: 0 0 2px 0.1px white;
        "
        class="yorumdivbir d-flex mt-3"
      >
        <div>
          <img
            src="https://images.gamesatis.com/products/images/000/043/457/medium/product-pubgmobile_uc_60.jpg"
          />
        </div>
        <div class="flex-column d-flex">
          <span style="color: #01a4ea; padding-left: 8px">HARUN D. </span>
          <div class="d-flex">
            <span style="color: white; padding-left: 8px">Teşekkür ederim</span>
            <v-spacer style="width: 680px"></v-spacer>
            <div class="d-flex flex-column">
              <v-rating value="5" class="ml-10"></v-rating>
              <span class="ml-15"> 21/06/2021</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style="
          background-color: #191919;
          width: 1300px;
          box-shadow: 0 0 2px 0.1px white;
        "
        class="yorumdivbir d-flex mt-3"
      >
        <div>
          <img
            src="https://images.gamesatis.com/products/images/000/043/457/medium/product-pubgmobile_uc_60.jpg"
          />
        </div>
        <div class="flex-column d-flex">
          <span style="color: #01a4ea; padding-left: 8px">MEHMET A. </span>
          <div class="d-flex">
            <span style="color: white; padding-left: 8px"
              >Teşekkür ederim. Çok güzel oyun oldu.</span
            >
            <v-spacer style="width: 550px"></v-spacer>
            <div class="d-flex flex-column">
              <v-rating value="5" class="ml-10"></v-rating>
              <span class="ml-15"> 23/05/2021</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style="
          background-color: #191919;
          width: 1300px;
          box-shadow: 0 0 2px 0.1px white;
        "
        class="yorumdivbir d-flex mt-3"
      >
        <div>
          <img
            src="https://images.gamesatis.com/products/images/000/043/457/medium/product-pubgmobile_uc_60.jpg"
          />
        </div>
        <div class="flex-column d-flex">
          <span style="color: #01a4ea; padding-left: 8px">ABDULLAH D. </span>
          <div class="d-flex">
            <span style="color: white; padding-left: 8px"
              >Siteyi ben yaptım ki.</span
            >
            <v-spacer style="width: 650px"></v-spacer>
            <div class="d-flex flex-column">
              <v-rating value="5" class="ml-10"></v-rating>
              <span class="ml-15"> 31/10/2021</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style="
          background-color: #191919;
          width: 1300px;
          box-shadow: 0 0 2px 0.1px white;
        "
        class="yorumdivbir d-flex mt-3"
      >
        <div>
          <img
            src="https://images.gamesatis.com/products/images/000/043/457/medium/product-pubgmobile_uc_60.jpg"
          />
        </div>
        <div class="flex-column d-flex">
          <span style="color: #01a4ea; padding-left: 8px">MÜCAHİT S. </span>
          <div class="d-flex">
            <span style="color: white; padding-left: 8px"
              >Siteyi ben de yaptım</span
            >
            <v-spacer style="width: 700px"></v-spacer>
            <div class="d-flex flex-column">
              <v-rating value="5" class="ml-10"></v-rating
              ><span class="ml-15"> 31/10/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
import { mdiBagCarryOnCheck, mdiMagnify } from '@mdi/js'

export default {
  data() {
    return {
      icons: {
        mdiBagCarryOnCheck,
        mdiMagnify,
      },
    }
  },
  methods: {
    satinalmethod() {
      this.$router.push('Sepet')
    },
  },
}
</script>
<style>
.ust_menu {
  width: 1300px;
  height: 20px;
  background-color: #1f2327;
  font-family: roboto, sans-serif;
  font-size: 14px;
  object-position: center;
  padding: 30px 0;
}
.ust_menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.ust_menu ul li {
  position: relative;
  float: left;
  width: auto;
  bottom: 13px;
  margin-left: 20px;
  border-style: ridge;
  border-color: #01a4ea;
  border-radius: 5px;
  color: #01a4ea;
  padding: 2px;
}

.a {
  color: #01a4ea;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  font-size: 13px;
}
.buton {
  position: relative;
  bottom: 13px;
  right: 5px;
  float: right;
  background-color: #01a4ea;
  width: 110px;
  font-display: center;
  border-radius: 5px;
  color: #f8f9fa;
  padding: 3px;
}
.urun_bolumu {
  width: 1300px;
  background-color: #191919;
  font-family: roboto, sans-serif;
}
.urun_resmi {
  width: 650;
  height: auto;
  margin: 15px 0 0 15px;
  padding-bottom: 10px;
}
.urun_baslik {
  color: #f8f9fa;
  margin: 5px 0 0 15px;
  padding-bottom: 30px;
}
.urun_yazi {
  color: #f8f9fa;
  margin-left: 10px;
  margin-bottom: 25px;
}
.genelbilgi {
  width: 1300px;
}
.fiyatdiv {
  position: absolute;
  right: 200px;
  bottom: 1450px;
}
.h4 {
  color: #e9ecef;
  font-size: 12px;
}
h5 {
  color: #ff293d;
  font-size: 12px;
}
h6 {
  color: #ff293d;
  font-size: 12px;
  text-decoration: line-through;
  font-weight: 100;
}
.h7 {
  color: #e9ecef;
  font-size: 14px;
  font-weight: 600;
}
.incele {
  background: #01a4ea;
  margin-left: 100px;
  padding: 10px;
  text-decoration: none;
  color: #e9ecef;
  border-radius: 8px;
}
</style>
