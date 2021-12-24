<template>
  <v-footer class="footer">
    <v-container class="d-flex">
      <div class="d-flex my-2 divbir">
        <v-avatar
          class="my-auto mr-3"
          color="transparent"
          style="border-style: dashed; border-color: black"
          height="110px"
          width="75px"
        >
          <img src="https://i.hizliresim.com/31a7qi1.png" />
        </v-avatar>

        <div class="d-flex flex-column my-2">
          <span class="footerbaslik mt-70">Hızlı Teslimat</span>
          <span style="color: white"
            >7 gün 24 saat aldığınız kod anında hesabını Oyun içi teslimatlar
            Sabah 09:00 - Gece 02:00 arasında yapılır.
          </span>
        </div>
      </div>
      <div class="d-flex my-2 diviki">
        <v-avatar
          class="my-auto mr-3"
          color="transparent"
          style="border-style: dashed; border-color: black"
          height="110px"
          width="75px"
        >
          <img src="https://i.hizliresim.com/nzlpscq.png" />
        </v-avatar>
        <div class="d-flex flex-column my-2">
          <span class="footerbaslik"> Güvenli Alışveriş</span>
          <span style="color: white"
            >3D Secure ve SSL güvencesiyle dilediğiniz ödeme yöntemi ile ödeme
            yapın.
          </span>
        </div>
      </div>
      <div class="d-flex my-2 divuc">
        <v-avatar
          class="my-auto mr-3"
          color="transparent"
          style="border-style: dashed; border-color: black"
          height="110px"
          width="75px"
        >
          <img src="https://i.hizliresim.com/hcbhj1x.png" />
        </v-avatar>
        <div class="d-flex flex-column my-2">
          <span class="footerbaslik mt-70"> En Uygun Fiyatlar</span>
          <span style="color: white"
            >İndirimli ve en ucuz fiyatlarla alışverişin keyfini çıkarın.
          </span>
        </div>
      </div>
      <div class="d-flex my-2 divdort">
        <v-avatar
          class="my-auto mr-3"
          color="transparent"
          style="border-style: dashed; border-color: black"
          height="110px"
          width="75px"
        >
          <img src="https://i.hizliresim.com/9usonza.png" />
        </v-avatar>
        <div class="d-flex flex-column my-2">
          <span class="footerbaslik mt-70">Müşteri Memnuniyeti</span>
          <span style="color: white"
            >Oyun alışverişlerinizde bizi tercih ettiğiniz için teşekkür ederiz.
          </span>
        </div>
      </div>
      <v-divider></v-divider>

      <div class="gamesatisdivbir">
        <ol>
          GameSatış
          <ul type="disc">
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Hakkımızda</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >İletişim</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Kurumsal</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Yorumsal</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none">Mağaza</a>
            </li>
          </ul>
        </ol>
      </div>
      <div class="kullanıcıdiviki">
        <ol>
          Kullanıcı
          <ul type="disc">
            <li>
              <a href="#" style="color: white; text-decoration: none">Üye ol</a>
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Şifremi Unuttum</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Yayıncı Başvurusu</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Kullanıcı Sözleşmesi</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Ürün Alış Satış Sözleşmesi</a
              >
            </li>
          </ul>
        </ol>
      </div>
      <div class="ödemedivuc">
        <ol>
          Ödeme
          <ul type="disc">
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Ödeme Yöntemleri</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Kredi Kartı</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Havele/EFT</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >İninal Kart</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Mobil Ödeme</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Kredi Kartına Taksit</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >İade-İptal Koşulları</a
              >
            </li>
          </ul>
        </ol>
      </div>
      <div class="destekdivdort">
        <ol>
          Destek
          <ul type="disc">
            <li>
              <a href="#" style="color: white; text-decoration: none">S.S.S.</a>
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Canlı Destek</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Destek Talebi Oluştur</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Öneri ve Şikayet</a
              >
            </li>
          </ul>
        </ol>
      </div>
      <div class="populersafalardivbes">
        <ol>
          Popüler Sayfalar
          <ul type="disc">
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Black Desert Online</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Knight Online</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none">Metin2</a>
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Zula Online</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >League of Legands</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >CS:GO Skin Key</a
              >
            </li>
            <li>
              <a href="#" style="color: white; text-decoration: none"
                >Oyunlar</a
              >
            </li>
          </ul>
        </ol>
      </div>
      <div class="destekveiletisimdivalti flex-column d-flex">
        <span>Destek ve İletişim</span>
        <a
          class="my-1"
          href="#"
          style="color: white; text-decoration: none; font-weight: 800"
        >
          0 850 532 42 63</a
        >
        <a
          class="my-1"
          href="#"
          style="color: white; text-decoration: none; font-weight: 800"
          >destek@gamesatis.com</a
        >
        <div class="d-flex" style="height: 50px; width: 100px">
          <v-avatar
            class="my-auto mr-3"
            color="transparent"
            style="border-style: dashed; border-color: black"
          >
            <img src="https://i.hizliresim.com/s3da5vy.png" />
          </v-avatar>
          <v-avatar
            class="my-auto mr-3"
            color="transparent"
            style="border-style: dashed; border-color: black"
          >
            <img src="https://i.hizliresim.com/rysrmju.png" />
          </v-avatar>

          <v-avatar
            class="my-auto mr-3"
            color="transparent"
            style="border-style: dashed; border-color: black"
          >
            <img src="https://i.hizliresim.com/9ydhjt1.png" />
          </v-avatar>
        </div>
      </div>
      <div class="fixedcanlıdestekbuton text-center">
        <v-btn
          class="ma-2"
          :loading="loading"
          :disabled="loading"
          color="#01A4EA"
          @click="loader = 'loading'"
        >
          <img src="https://i.hizliresim.com/5w3z1nr.png" />

          Canlı Destek
        </v-btn>
      </div>
    </v-container>
  </v-footer>
</template>

<style>
.footer {
  background-image: url('https://images.gamesatis.com/assets/footer-bg.png');
  background-repeat: repeat-y;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 12cm;
  width: auto;
}
.footerbaslik {
  font-size: 20px;
  color: #3fa9f5;
  font-weight: 800;
}
.divbir {
  width: 300px;
  position: absolute;
  top: 50px;
  left: 80px;
}
.diviki {
  width: 300px;
  position: absolute;
  top: 50px;
  left: 450px;
}
.divuc {
  width: 300px;
  position: absolute;
  top: 50px;
  left: 850px;
}
.divdort {
  width: 300px;
  position: absolute;
  top: 50px;
  left: 1200px;
}
.gamesatisdivbir {
  position: absolute;
  left: 52px;
}
.kullanıcıdiviki {
  position: absolute;
  left: 220px;
}
.ödemedivuc {
  position: absolute;
  left: 500px;
}
.destekdivdort {
  position: absolute;
  left: 750px;
}
.populersafalardivbes {
  position: absolute;
  left: 1000px;
}
.destekveiletisimdivalti {
  position: absolute;
  left: 1300px;
}
.fixedcanlıdestekbuton {
  position: fixed;
  right: 10px;
  bottom: 10px;
  border-radius: 50px;
}
</style>

<script>
import {
  mdiMouse,
  mdiLock,
  mdiPiggyBankOutline,
  mdiHandshake,
  mdiFacebook,
  mdiTwitter,
  mdiInstagram,
} from '@mdi/js'
export default {
  data() {
    return {
      icons: {
        mdiMouse,
        mdiLock,
        mdiPiggyBankOutline,
        mdiHandshake,
        mdiFacebook,
        mdiTwitter,
        mdiInstagram,
      },
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
    }
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },
}
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
