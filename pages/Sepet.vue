<template>
  <v-container>
    <span
      style="
        font-size: 25px;
        color: #ced4da;
        padding-top: 200px;
        padding-top: 15px;
      "
      class="my-10"
      >Alışveriş Sitesi</span
    >
    <div style="padding-top: 15px" class="d-flex">
      <div
        class="d-flex"
        style="width: 800px; height: 300px; background-color: #191919"
      >
        <div>
          <div class="d-flex">
            <span
              style="
                background-color: #01a4ea;
                color: white;
                width: 400px;
                text-align: center;
              "
              >ÜRÜN</span
            >
            <span
              style="
                background-color: #191919;
                color: white;
                width: 400px;
                text-align: center;
              "
              >SATICI</span
            >
          </div>
          <img
            height="120px"
            width="800px"
            src="https://i.hizliresim.com/smexiem.png"
          />
          <v-btn
            style="
              background-color: #01a4ea;
              color: white;
              position: absolute;
              right: 630px;
              bottom: 50px;
            "
          >
            <a
              @click="alisverisedevametmethod"
              style="position: absolute; right: 580px; bottom: -5px"
              >Alışverişe Devam Et</a
            >
            İndirim Kodu Kullan
          </v-btn>
        </div>
        <div class="d-flex flex-column"></div>
      </div>
      <div>
        <div
          class="mx-10"
          style="
            background-color: #00a4ea;
            width: 450 px;
            height: 75px;
            border-top-left-radius: 7px;
            border-top-right-radius: 7px;
          "
        >
          <div style="padding-top: 5px">
            <span style="color: white; padding-left: 30px; padding-top: 2px"
              >SEPET TOPLAM:</span
            >
          </div>

          <div class="d-flex flex-column" style="padding-left: 180px">
            <span><del>20.00₺</del></span>
            <span>12.00₺</span>
          </div>
        </div>
        <div
          class="mx-10 d-flex flex-column"
          style="background-color: #191919; width: 350px; height: 220px"
        >
          <div class="d-flex" style="height: 80px">
            <v-avatar
              class="my-auto mr-3"
              color="transparent"
              style="border-style: dashed; border-color: black"
              height="85px"
              width="70px"
            >
              <img src="https://i.hizliresim.com/aydkx42.png" />
            </v-avatar>
            <span class="mt-7">Güvenli Ödeme ve Kolay Alışveriş</span>
          </div>
          <div class="d-flex" style="height: 80px">
            <v-avatar
              class="my-auto mr-3"
              color="transparent"
              style="border-style: dashed; border-color: black"
              height="85px"
              width="70px"
            >
              <img src="https://i.hizliresim.com/mr55l9o.png" />
            </v-avatar>
            <span class="mt-7">Hızlı Teslimat</span>
          </div>
          <div class="d-flex" style="height: 80px">
            <v-avatar
              class="my-auto mr-3"
              color="transparent"
              style="border-style: dashed; border-color: black"
              height="60px"
              width="70px"
            >
              <img src="https://i.hizliresim.com/lk74dki.png" />
            </v-avatar>
            <span class="mt-5">Bize Ulaşın: 08505324263</span>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </v-container>
</template>

<script>
import { mdiWalletTravel, mdiTruckCargoContainer, mdiPhone } from '@mdi/js'

export default {
  data() {
    return {
      icons: {
        mdiWalletTravel,
        mdiTruckCargoContainer,
        mdiPhone,
      },
    }
  },
  methods: {
    alisverisedevametmethod() {
      this.$router.push('/')
    },
  },
}
</script>
