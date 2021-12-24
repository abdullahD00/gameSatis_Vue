<template>
  <v-container>
    <div class="sidebar1 mx-2">
      <h1 class="title">Giriş Yap</h1>
      <h2>
        Üye değil misin?<a @click="uyelolmethod" class="register">Üye ol</a>
      </h2>
      <form action="" method="POST">
        <div class="login-form">
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              placeholder="E-posta adresi"
            />
          </div>
          <div class="form-group flex-column my-3">
            <input class="form-control" type="password" placeholder="Şifre*" />
          </div>
          <div class="form-group">
            <input class="form-control" type="text" />
            <td>
              <input class="catcha" name="" type="text" placeholder="H75N" />
            </td>
          </div>
          <div class="form-group pl-10">
            <input type="radio" /><td2>Bu cihaz güvenilir.</td2>
            <button class="buton">Giriş Yap</button>
          </div>
        </div>
      </form>
      <h3>
        <a href="" class="account">Şifremi Unuttum!</a>
        <a href="" class="account">Üyelik Doğrulama!</a>
      </h3>
    </div>
    <div class="siderbar2">
      <div class="d-flex">
        <v-avatar
          class="my-auto"
          color="transparent"
          style="border-style: dashed; border-color: black"
          height="auto"
          width="50px"
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
  methods: {
    uyelolmethod() {
      this.$router.push('/Uyeol')
    },
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
  margin-left: 280px;
  height: 40px;
  width: 125px;
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
  padding-left: 50px;
  padding-right: 25px;
}
</style>
