<script setup>
import NavbarHome from '../components/NavbarHome.vue'
import FooterHome from '../components/FooterHome.vue'
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
            <h1 class="h1-seo">Le Karate Club du Tregor</h1>
            <h3>Vous souhaite la Bienvenue sur son site.</h3>
          </div>
        </div>
      </div>

      <div class="section section-about-us">

        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Qui sommes nous?</h2>
            <h5 class="description">Le Karaté Club du Trégor est une association sportive affilié à la Féderation
              Francaise de Karaté Shotokan.
              <br>
              Nous proposons des cours pour tout niveau à partir de 13ans <em class="text-primary">(cours Ado/Adultes et
                Sénior)</em> dans les dojos de Plouha et Tréguier dans la convivialité et la bonne humeur.
            </h5>
          </div>
        </div>
      </div>
    </main>
  </header>
  <div class="main">
    <div class="section">
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
              <img class="card-img-top" src="" alt="Card image cap">
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
  <div class="section bg-dark ">
    <div class="container">
      <h2 class="title text-center text-light">Actualités</h2>
      <div class="row">
        <div class="col-md-4 text-center" :key="index" v-for="(post, index) in posts">
          <div v-if="post.length > 3"></div>
          <div class="card" style="width: 20rem;">
            <div v-if="post.image">
              <img class="card-img-top" :src="'http://127.0.1:3000' + post.image" :alt="post.image" />
            </div>
            <div class="card-body">
              <h4 class="card-title">{{ post.title }}</h4>
              <p class="card-text">{{ post.subtitle }}</p>
            </div>
          </div>
        </div>
        <div class="btn btn-primary">Voir d'autres Actualités</div>
      </div>
    </div>
  </div>
  <!-- <div class="section ">
      <div class="container">
        <h2 class="title text-center">Hommages</h2>
        <div class="row">
       
          </div>
        </div>
      </div> -->
  <div class="section ">
    <div class="container">
      <h2 class="title text-center">Nous rejoindre</h2>
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="../../public/black-belt-g93ce139f5_1920.jpg" alt="Card image cap" />
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">Email: <a href="mailto:"></a></h6>
              <h6 class="card-subtitle mb-2 text-muted">Numero: <a href="tel:+"></a></h6>
              <div href="#" class=" btn btn-info">Tarif</div>
              <div href="#" class=" btn btn-info">Fiche D'inscription</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterHome />
</template>

<script>
export default {
  data() {
    return {
      posts: null
    }
  },
  async created() {
    const res = await fetch("http://127.0.0.1:3000/api/post/getThreePost/")
    console.log(res);
    const data = await res.json()
    console.log(data);
    this.posts = data
    console.log(this.posts)
  },
  methods: {

  }
}

</script>