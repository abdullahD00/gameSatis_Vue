<template>
  <body>
    <v-app-bar color="#191919">
      <v-container>
        <div class="menu d-flex">
          <ul>
            <li><a href="">OYUNLAR</a></li>
            <li><a href="">OYUNCU PAZARI</a></li>
            <li>
              <a href="">SKIN</a>
              <ul>
                <li><a href="">CS:GO Skin</a></li>
                <li><a href="">DOTA2 Skin</a></li>
                <li><a href="">RUST Skin</a></li>
              </ul>
            </li>
            <li>
              <a href="">ITEM</a>
              <ul>
                <li><a href="">Knight Online Item</a></li>
                <li><a href="">Knight Online Ring</a></li>
              </ul>
            </li>
            <li>
              <a href="">HESAP SATIŞI</a>
              <ul>
                <li><a href="">PUBG Mobile Hesap Satışı</a></li>
                <li><a href="">LOL Hesap Satışı</a></li>
                <li><a href="">CS:GO Mobile Hesap Satışı</a></li>
                <li><a href="">Valorant Hesap Satışı</a></li>
                <li><a href="">Steam Hesap Satışı</a></li>
              </ul>
            </li>
            <li>
              <a href="">OYUN PARASI</a>
              <ul>
                <li><a href="">Knight Online Goldbar</a></li>
                <li><a href="">Metin2 Yang</a></li>
              </ul>
            </li>
            <li>
              <a href="">BOOST</a>
              <ul>
                <li><a href="">CS:GO Övgü Boost</a></li>
                <li><a href="">Diğer Boost İlanları</a></li>
              </ul>
            </li>
            <li><a href="">AÇIK ARTTIRMA</a></li>
          </ul>
        </div>
      </v-container>
    </v-app-bar>
  </body>
</template>

<style type="text/css">
.menu {
  width: 1500px;
  position: fixed;
  z-index: 50;
}
.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.menu ul li {
  position: relative;
  float: left;
  width: 150px;
  border-left-style: ridge;
  border-left-width: thin;
  border-left-color: #f8f9fa;
}
.menu ul li ul {
  display: none;
}
.menu ul li:hover ul {
  display: block;
}
.menu ul li a {
  text-decoration: none;
  background-color: #191919;
  display: block;
  color: #f8f9fa;
  font-family: roboto, sans-serif;
  font-weight: 700;
  font-size: 12px;
  padding: 5px;
  text-align: center;
}
</style>
}
