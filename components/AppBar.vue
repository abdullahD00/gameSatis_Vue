<template>
  <div>
    <v-app-bar color="#191919">
      <v-container>
        <div class="d-flex flex-column mt-5">
          <div class="d-flex">
            <span class="Appbaraciklama">
              Türkiye'nin En Kaliteli Epin ve Oyun Alışveriş Sitesi
            </span>
            <v-spacer></v-spacer>
            <div class="d-flex flex-row">
              <NuxtLink class="linktürbir" style="color: #9ca0a4" to="/"
                >Yorumlar</NuxtLink
              >
              <v-divider class="mx-2" vertical></v-divider>
              <NuxtLink
                class="linktürbir"
                style="color: #9ca0a4"
                to="/"
                @click="magazamethod"
                >Mağaza</NuxtLink
              >
              <v-divider class="mx-2" vertical></v-divider>
              <NuxtLink class="linktürbir" style="color: #9ca0a4" to="/"
                >Blog</NuxtLink
              >
              <v-divider class="mx-2" vertical></v-divider>
              <NuxtLink class="linkturiki" style="color: purple" to="/"
                >Donate</NuxtLink
              >
              <v-divider class="mx-2" vertical></v-divider>
              <NuxtLink class="linktürüc" style="color: green" to="/"
                >+Bakiye Yükle</NuxtLink
              >
            </div>
          </div>
          <v-divider class="my-5"></v-divider>
        </div>
      </v-container>
    </v-app-bar>
  </div>
</template>

<style>
.Appbaraciklama {
  font-size: 12px;
  font-family: roboto, sans-serif;
  text-decoration: none;
}
.linktürbir {
  font-size: 12px;
  font-family: roboto, sans-serif;
  width: 400;
  text-decoration: none;
  font-weight: 600;
}
.linkturiki {
  font-size: 12px;
  font-family: roboto, sans-serif;
  width: 400;
  text-decoration: none;
  font-weight: 600;
}
.linktürüc {
  font-size: 12px;
  font-family: roboto, sans-serif;
  width: 400;
  text-decoration: none;
  font-weight: 600;
}
</style>

<script>
export default {
  methods: {
    magazamethod() {
      this.$router.push('/')
    },
  },
}
</script>
