<template>
  <v-container>
    <div class="d-flex" style="justify-content: center">
      <v-avatar class="mx-3 avatar" size="100">
        <img
          src="https://images.gamesatis.com/favorite_products/images/000/000/005/original/pubg_uc1.jpg"
          alt="pubg"
        />
      </v-avatar>
      <v-avatar class="mx-3 avatar" size="100">
        <img
          src="https://images.gamesatis.com/favorite_products/images/000/000/311/original/product_story_v1_lol_rp.jpg"
          alt="lolrp"
        />
      </v-avatar>
      <v-avatar class="mx-3 avatar" size="100">
        <img
          src="https://images.gamesatis.com/favorite_products/images/000/000/310/original/val_vp.jpg"
          alt="valvp"
        />
      </v-avatar>
      <v-avatar class="mx-3 avatar" size="100">
        <img
          src="https://images.gamesatis.com/favorite_products/images/000/000/003/original/bdo_acoin1.jpg"
          alt="bdoacoin"
        />
      </v-avatar>
      <v-avatar class="mx-3 avatar" size="100">
        <img
          src="https://images.gamesatis.com/favorite_products/images/000/000/742/original/ko_goldbar.jpg"
          alt="kogoldbar"
        />
      </v-avatar>

      <v-avatar class="mx-3 avatar" size="100">
        <img
          src="https://images.gamesatis.com/favorite_products/images/000/000/004/original/product_story_v1ko_precash2.jpg"
          alt="storyv1koprecash"
        />
      </v-avatar>
      <v-avatar class="mx-3 avatar" size="100">
        <img
          src="https://images.gamesatis.com/favorite_products/images/000/000/827/original/product_story_v1_ko_item.jpg"
          alt="storyv1koitem"
        />
      </v-avatar>
      <v-avatar class="mx-3 avatar" size="100">
        <img
          src="https://images.gamesatis.com/favorite_products/images/000/000/538/original/product_story_v1_csgo_skin.jpg"
          alt="csgoskin"
        />
      </v-avatar>
      <v-avatar class="mx-3 avatar" size="100">
        <img
          src="https://images.gamesatis.com/favorite_products/images/000/000/725/original/product_story_v1_freefire_elmas.jpg"
          alt="freefireelmas"
        />
      </v-avatar>
      <v-avatar class="mx-3 avatar" size="100">
        <img
          src="https://images.gamesatis.com/favorite_products/images/000/000/008/original/product_story_v1metin_ejder2.jpg"
          alt="metin2ejder"
        />
      </v-avatar>
    </div>

    <v-spacer></v-spacer>
    <div class="d-flex">
      <div class="my-8 flex-column">
        <v-sheet
          class="sheetbir my3"
          color="#1919 darken-7"
          elevation="50"
          height="150"
          width="260"
        ></v-sheet>

        <v-sheet
          class="sheetiki my-3"
          color="#1919 darken-7"
          elevation="50"
          height="150"
          width="260"
        ></v-sheet>
        <v-sheet
          class="sheetuc my-3"
          color="#1919 darken-7"
          elevation="50"
          height="150"
          width="260"
        ></v-sheet>
      </div>
      <div class="my-8 mx-5">
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
.sheetbir {
  background-image: url('https://images.gamesatis.com/favorite_products/images/000/000/733/original/product_web_banner_v3_csgo.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.sheetiki {
  background-image: url('https://images.gamesatis.com/favorite_products/images/000/000/732/original/product_web_banner_v3_ko.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.sheetuc {
  background-image: url('https://images.gamesatis.com/favorite_products/images/000/000/737/original/product_web_banner_v3_lol.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.corousel {
  height: auto;
  width: 25cm;
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/slider/images/000/000/618/small/Cadılar-Bayramı-indirim.jpg',
        },
        {
          src: 'https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/slider/images/000/000/620/small/banner-gpay-0-komisyon.jpg',
        },
        {
          src: 'https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/slider/images/000/000/627/small/ANGER-POWER-SPIN-PUBG-banner.jpg',
        },
        {
          src: 'https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/slider/images/000/000/628/small/banner-cs-major.jpg',
        },
      ],
    }
  },
}
</script>
