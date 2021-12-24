<template>
  <v-container>
    <div>
      <v-stepper alt-labels width="1000px" height="auto">
        <v-stepper-header style="background-color: #191919">
          <v-stepper-step step="1" color="#01A4EA">Üyel Ol </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="2"> Aktivasyon </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3"> Üyelik Tamamlandı </v-stepper-step>
        </v-stepper-header>
      </v-stepper>
    </div>
    <div class="sidebar1">
      <h1 class="title">Üye Ol</h1>
      <h2>
        Zaten üye misin?<a href="Girisyapp" class="register">Giriş yap</a>
      </h2>
      <form action="" method="POST">
        <div class="login-form">
          <div class="form-group">
            <input class="form-control" type="text" placeholder="AD*" />
          </div>
          <div class="form-group">
            <input class="form-control" type="text" placeholder="SOYAD*" />
          </div>
          <div class="form-group">
            <input class="form-control" type="text" placeholder="E-POSTA**" />
          </div>
          <div class="form-group">
            <input class="form-control" type="password" placeholder="ŞİFRE*" />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="password"
              placeholder="ŞİFRE (TEKRAR)*"
            />
          </div>
          <div class="form-group">
            <input class="form-control" type="text" />
            <td>
              <input class="catcha" name="" type="text" placeholder="H75N" />
            </td>
          </div>
          <div class="form-group">
            <input type="radio" /><a href="" class="sozlesme"
              >Kullanıcı sözleşmesi</a
            ><td2> ve şartlarını okudum.</td2>
            <button class="buton">Üye ol</button>
          </div>
        </div>
      </form>
    </div>
    <div class="siderbar2">
      <div class="d-flex">
        <v-avatar
          class="my-auto"
          color="transparent"
          style="border-style: dashed; border-color: black"
        >
          <img
            src="https://cdn.discordapp.com/attachments/300367298152366081/916697950032371762/unknown.png"
          />
        </v-avatar>
        <div class="flex-column">
          <h4 class="title2">Tüm Oyun İhtiyaçlarınız</h4>
          <p>
            Oynadığınız tüm oyunlarda satın almak istediğiniz epin, gold, skin,
            item, yada diğer oyun içi ürünleri GameSatış üzerinden güvenle satın
            alabilirsiniz. Tüm oyun ihtiyaçlarınız GameSatış'da sizi bekliyor!
          </p>
        </div>
      </div>
      <div class="d-flex">
        <v-avatar
          class="my-auto mr-3"
          color="transparent"
          style="border-style: dashed; border-color: black"
        >
          <img
            src="https://image.prntscr.com/image/JHe0JOTSSvmvAraLXdZOGA.png"
          />
        </v-avatar>
        <div class="flex-column">
          <h4 class="title2">Ödeme Kolaylığı</h4>
          <p>
            Hızlı ve kolay ödeme yöntemlerinden size en uygun olanı seçerek
            bakiyenizi yükleyebilirsiniz.
          </p>
        </div>
      </div>
      <div class="d-flex">
        <v-avatar
          class="my-auto mr-3"
          color="transparent"
          style="border-style: dashed; border-color: black"
        >
          <img
            src="https://image.prntscr.com/image/j4ZwHTDiTxaAONTMZ3muuw.png"
          />
        </v-avatar>
        <div class="flex-column">
          <h4 class="title2">Canlı Destek</h4>
          <p>
            Sabah 09:00 ile gece 02:00 arasında GameSatış canlı desteğine tüm
            sorularınız için danışabilirsiniz.
          </p>
        </div>
      </div>
      <div class="d-flex">
        <v-avatar
          class="my-auto mr-3"
          color="transparent"
          style="border-style: dashed; border-color: black"
        >
          <img
            src="https://image.prntscr.com/image/EXSZFJepRcymCxYpGixIVA.png"
          />
        </v-avatar>
        <div class="flex-column">
          <h4 class="title2">Oyuncu Pazarı</h4>
          <p>
            GameSatış oyuncu pazarı sayesinde oynadığınız oyunlarda item, skin,
            ve diğer oyun ürünlerinin satışını yaparak gelir elde edebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import {
  mdiControllerClassicOutline,
  mdiHandCoinOutline,
  mdiFaceAgent,
  mdiBagCarryOnCheck,
} from '@mdi/js'

export default {
  data() {
    return {
      icons: {
        mdiControllerClassicOutline,
        mdiHandCoinOutline,
        mdiFaceAgent,
        mdiBagCarryOnCheck,
      },
    }
  },
}
</script>

<style>
.sidebar1 {
  text-align: left;
  background-color: #191919;
  top: 0;
  left: 0;
  width: 500px;
  height: 600px;
  padding: 75px 0;
  float: left;
  font-family: roboto, sans-serif;
  border-right-style: ridge;
  border-right-color: white;
  border-right-width: thin;
  box-shadow: 0 0 2px 0.1px white;
}
.title {
  text-decoration: underline;
  color: #f8f9fa;
  font-weight: 400;
  font-size: 1.5rem;
  margin: 25px 0 0 50px;
}
h2 {
  color: #f8f9fa;
  font-size: 15px;
  margin-left: 50px;
}
.register {
  color: #01a4ea;
  font-weight: 700;
  text-decoration: none;
  margin-left: 5px;
}
.register:hover {
  text-decoration: underline;
  font-weight: 200;
}
.login-form {
  display: table;
  margin: auto;
}
.form-group {
  margin: 15px 0;
}
.form-control {
  background-color: #191919;
  width: 400px;
  border-style: ridge;
  border-radius: 5px;
  height: 25px;
  color: white;
  margin-left: 45px;
}
.catcha {
  text-align: center;
  color: #0f17b1;
}
.td2 {
  color: #01a4ea;
  font-size: 12px;
  margin-left: 10px;
}
.buton {
  background-color: #01a4ea;
  color: #f8f9fa;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 335px;
  height: 40px;
  width: 100px;
}
h3 {
  margin-left: 70px;
  font-size: 16px;
}
.account {
  color: #f8f9fa;
  font-weight: 600;
}
.account:hover {
  font-weight: 100;
  color: #01a4ea;
}
.sozlesme {
  text-decoration: underline;
  color: #01a4ea;
  font-size: 16px;
  margin-left: 10px;
}
.siderbar2 {
  text-align: left;
  background-color: #191919;
  width: 500px;
  height: 600px;
  padding: 40px 0;
  float: left;
  font-family: roboto, sans-serif;
  box-shadow: 0 0 2px 0.1px white;
}
.title2 {
  color: #01a4ea;
  font-size: 20px;
  padding-left: 150px;
  padding-right: 25px;
}
p {
  color: #f8f9fa;
  padding-left: 150px;
  padding-right: 25px;
}
</style>
