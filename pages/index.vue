<template id="page">
  <v-container>
    <Avat ar />
    <v-spacer></v-spacer>
    <div class="d-flex">
      <Sheets />
      <div class="my-8 mx-5" style="cursor: pointer">
        <v-carousel hide-delimiters>
          <v-carousel-item
            class="corousel"
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </div>
    </div>

    <div
      class="one_cikanlar1 d-flex"
      style="
        background-color: #121212;
        width: 1200px;
        height: 250px;
        padding-bottom: 30px;
      "
    >
      <div class="box">
        <img
          src="https://images.gamesatis.com/products/images/000/075/088/medium/product-pubgmobile_uc_3000_850.jpg"
        />
        <h4><a style="color: white"> PUBG Mobile Royale Pass M4 Pr...</a></h4>
        <h6>100,00₺</h6>
        <h7>82,50₺</h7>
        <a
          class="incele"
          style="text-decoration: none; color: white"
          @click="incelemethod"
        >
          İNCELE</a
        >
      </div>
      <div class="box">
        <img
          src="https://images.gamesatis.com/products/images/000/075/089/medium/product-pubgmobile_uc_6000_2100.jpg"
        />
        <h4><a style="color: white">PUBG Mobile Elite Royale Pass...</a></h4>
        <h6>250,00₺</h6>
        <h7>206,25₺</h7
        ><a href="" class="incele" style="text-decoration: none; color: white">
          İNCELE</a
        >
      </div>
      <div class="box">
        <img
          src="https://images.gamesatis.com/products/images/000/792/338/medium/product_fifa22_standart_origin.jpg"
        />
        <h4><a style="color: white"> Fifa 22 Origin</a></h4>
        <h6>502,15₺</h6>
        <h7>409,80₺</h7
        ><a href="" class="incele" style="text-decoration: none; color: white">
          İNCELE</a
        >
      </div>
      <div class="box">
        <img
          src="https://images.gamesatis.com/products/images/000/000/061/medium/steam-100-tl.jpg"
        />
        <h4><a style="color: white">100 TL Steam Cüzdan Kodu</a></h4>
        <h6>100,00₺</h6>
        <h7>97,00₺</h7
        ><a href="" class="incele" style="text-decoration: none; color: white">
          İNCELE</a
        >
      </div>
    </div>
    <div
      class="one_cikanlar2 d-flex"
      style="
        background-color: #121212;
        width: 1200px;
        height: 350px;
        padding-top: 45px;
      "
    >
      <div class="box">
        <img
          src="https://images.gamesatis.com/products/images/000/153/970/medium/Valorant-300-vp.jpg"
        />
        <h4><a style="color: white"> Valorant 300 VP</a></h4>
        <h6>19,00₺</h6>
        <h7>15,99₺</h7
        ><a href="" class="incele" style="text-decoration: none; color: white">
          İNCELE</a
        >
      </div>
      <div class="box">
        <img
          src="https://images.gamesatis.com/products/images/000/153/974/medium/Valorant-600-vp.jpg"
        />
        <h4><a style="color: white">Valorant 600 VP</a></h4>
        <h6>38,00₺</h6>
        <h7>31,98₺</h7
        ><a href="" class="incele" style="text-decoration: none; color: white">
          İNCELE</a
        >
      </div>
      <div class="box">
        <img
          src="https://images.gamesatis.com/products/images/000/153/975/medium/Valorant-1250-vp.jpg"
        />
        <h4><a style="color: white">Valorant 1250 VP</a></h4>
        <h6>50,00</h6>
        <h7>41,25₺</h7
        ><a href="" class="incele" style="text-decoration: none; color: white">
          İNCELE</a
        >
      </div>
      <div class="box">
        <img
          src="https://images.gamesatis.com/products/images/000/153/976/medium/valorant-2500-vp.jpg"
        />
        <h4><a style="color: white">Valorant 2500 VP</a></h4>
        <h6>149,54₺</h6>
        <h7>125,85₺</h7
        ><a href="" class="incele" style="text-decoration: none; color: white">
          İNCELE</a
        >
      </div>
    </div>
  </v-container>
</template>

<style>
.avatar {
  border-top-color: aquamarine;
  border-right-color: teal;
  border-left-color: #28a745;
  border-bottom-color: green;
  border-style: solid;
  border-width: 2.5px;
}

.corousel {
  height: auto;
  width: 25cm;
}
.one_cikanlar1 {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: roboto, sans-serif;
}
.one_cikanlar2 {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: roboto, sans-serif;
}
.box {
  width: 256px;
  height: 250px;
  margin: 20px;
  box-sizing: border-box;
  background: #191919;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  box-shadow: 0 0 2px 0.1px white;
}
.box:hover {
  transform: translate(-50px, -100px);
  -webkit-transform: translate(-0.001px, -6px);
}
.h4 {
  color: #e9ecef;
  font-size: 15px;
  margin-left: 10px;
}
.h6 {
  color: #ff293d;
  font-size: 12px;
  text-decoration: line-through;
  font-weight: 100;
  margin-left: 10px;
}
.h7 {
  color: #e9ecef;
  font-size: 15px;
  font-weight: 600;
  margin-left: 10px;
}
.incele {
  background: #01a4ea;
  margin-left: 125px;
  padding: 8px;
  text-decoration: none;
  color: #e9ecef;
  border-radius: 8px;
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/slider/images/000/000/656/small/banner-mobile-legends.jpg',
        },
        {
          src: 'https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/slider/images/000/000/655/small/banner-pubg-cyber.jpg',
        },
        {
          src: 'https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/slider/images/000/000/653/small/ff-poker-banner.jpg',
        },
        {
          src: 'https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/slider/images/000/000/645/small/Valorant-New-Champions-2021-banner.jpg',
        },
      ],
    }
  },

  methods: {
    incelemethod() {
      this.$router.push('Urundetay')
    },
  },
}
</script>
