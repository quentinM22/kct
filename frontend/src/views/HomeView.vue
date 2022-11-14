<script setup>
import NavbarHome from '../components/NavbarHome.vue'
</script>

<template>
  <header>

    <main class="wrapper">
      <div class="page-header clear-filter" filter-color="orange">

        <div class="page-header-image" data-parallax="true"
          style="background-image:url('/pexels-belle-co-402028.jpg');">

        </div>
        <NavbarHome />
        <div class="container">

          <div class="content-center brand">
            <img class="n-logo" src="./assets/img/now-logo.png" alt="">
            <h1 class="h1-seo">Le Karaté Club du Trégor</h1>
            <h3>Vous souhaite la Bienvenue sur son site.</h3>
          </div>
        </div>
      </div>

      <div class="section section-about-us">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">Who we are?</h2>
              <h5 class="description">According to the National Oceanic and Atmospheric Administration, Ted, Scambos,
                NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice
                extent in the Pacific and a late drop in ice extent in the Barents Sea.</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="section section-images">
          <div class="container">
            <div class="row">
              <div class="col-md-6 text-center">
                <div class="card" style="width: 20rem;">
                  <img class="card-img-top" src="..." alt="Card image cap">
                  <div class="card-body">
                    <h4 class="card-title">Le DOJO de Tréguier</h4>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Info</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 text-center">
                <div class="card" style="width: 20rem;">
                  <img class="card-img-top" src="..." alt="Card image cap">
                  <div class="card-body">
                    <h4 class="card-title">Le DOJO de Plouha</h4>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Info</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </header>
</template>

<script>
fetch("http://127.0.0.1:3000/api/post/getAllPost/")
.then(res=>console.log(res.json()))
// .then(res=>console.log(res.value))
</script>