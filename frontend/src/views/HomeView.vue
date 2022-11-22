<script setup>
import NavbarHome from '../components/NavbarHome.vue'
import FooterHome from '../components/FooterHome.vue'
</script>

<template>
  <header>
    <NavbarHome />
    <div class="jumbotron">
      <h1 class="title">Le Karate Club du Tregor</h1>
      <h2>Vous souhaite la Bienvenue sur son site.</h2>
    </div>
  </header>
  <div class="about">
    <h2 class="title">A Propos</h2>
    <h5 class="description">Le Karaté Club du Trégor est une association sportive affilié à la Féderation
      Francaise de Karaté Shotokan.
      <br>
      Nous proposons des cours pour tout niveau à partir de 13ans <em>(cours Ado/Adultes et
        Sénior)</em> dans les dojos de Plouha et Tréguier dans la convivialité et la bonne humeur.
    </h5>
    <!-- <div class="card">
      <div class="card-img"></div>
      <div class="card-body">
        <div class="card-title">Dojo de Plouha</div>
        <div class="card-map"></div>
        <div class="card-time">
          <ul>
            <li>Mardi: 10h-12h (cours Sénior) - 19h-20h30</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-img"></div>
      <div class="card-body">
        <div class="card-title">Dojo de Tréguier</div>
        <div class="card-map"></div>
        <div class="card-time">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div> -->
  </div>
  <section id="actus">
    <h2 class="title">Actualités</h2>
    <div class="card-content">
      <div :key="index" v-for="(post, index) in posts">
        <div v-if="post.image">
          <div :style="`background:center / cover no-repeat url(http://127.0.1:3000${post.image})`" class="card">
            <div class="card-body">
          <h4 class="card-title">{{ post.title }}</h4>
          <p class="card-description">{{ post.subtitle }}</p>
        </div>
          </div>
        </div>
        <div v-else>
          <div style="background:center / cover no-repeat url(/pexels-photo-96423.jpeg);" class="card">
            <div class="card-body">
          <h4 class="card-title">{{ post.title }}</h4>
          <p class="card-description">{{ post.subtitle }}</p>
        </div></div>
        </div>
        
      </div>
    </div>
    <!-- <div>Voir d'autres Actualités</div> -->
  </section>
  <section id="join">
<h2 class="title">Nous rejoindre</h2>
<div class="card">
  
<h6>Email: <a href="mailto:">test@test.com</a></h6>
  <h6>Numero: <a href="tel:+">+33 7 77 77 77</a></h6>
  <div class="btn">
    <div href="#">Tarif</div>
  <div href="#">Fiche D'inscription</div>
  </div>
  
</div>
 
  
  </section>
  

  <FooterHome />
</template>

<script>

import axios from "axios";
export default {
  data() {
    return {
      posts: null
    }
  },
  async created() {
    const res = await axios.get("http://127.0.0.1:3000/api/post/getThreePost/")
    console.log(res);
    const data = await res.data
    console.log(data);
    this.posts = data
    console.log(this.posts)
  },
}

</script>
<style>
header {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(35deg, rgba(255, 0, 0, 0.4), rgba(0, 119, 255, 0.4)), url("/pexels-belle-co-402028.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background: rgba(47, 53, 66, 0.1);
  text-shadow: 1px 1px 2px var(--gray-dark);
}

nav .nav-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

nav .nav-logo a.title {
  font-family: Osake;
  color: white;

}

nav .nav-logo a.title:hover {
  color: var(--red);
  transition: 0.5s;
}

nav ul.nav-content {
  padding: 0.5rem;
  display: flex;
  flex-flow: row wrap;
}

nav ul.nav-content li.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1em;
  height: 100%;
}
nav ul.nav-content li.nav-item a{
  color: var(--light);
}
nav ul.nav-content li.nav-item:hover a {
  color: var(--red);
  transition: 0.5s;
}

.jumbotron {
  position: absolute;
  top: 40%;
  left: 25%;
  width: 50%;
  color: var(--red);
  text-align: center;
  text-shadow: 1px 1px 2px var(--gray-dark);

}

.jumbotron h1.title {
  font-family: Osake;
  font-size: xxx-large;

}

.jumbotron h2 {
  text-align: center;
}

.about {
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  background-color: var(--light);
}

.title {
  margin: 1rem 0 1rem 0;
  color: var(--red);
  text-shadow: 1px 1px 1px var(--gray-dark);
}

section#actus {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: var(--gray-dark);
}

section#actus .title {
  text-shadow: 1px 1px 1px var(--gray);
  padding-bottom: 1rem;
  text-align: center;
}

section#actus .card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

section#actus .card-content .card {
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 20rem;
  align-items: flex-end;
  justify-content: flex-end;
  background: white;
  margin-bottom: 2rem;
  border-top-right-radius:15px ;
  border-top-left-radius:15px ;
  box-shadow: 7px -5px var(--red);
}

section#actus .card-content .card-body  {
  background-color: var(--light);
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 1rem;
  text-align: center;
}
section#join{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background:linear-gradient(35deg, rgba(233, 66, 0, 0.418),rgba(0, 81, 255, 0.336)), url(/black-belt-g93ce139f5_1920.jpg)center / cover no-repeat fixed;
  width: 100%;
  height: 25vh;
  flex-direction: column;
}
section#join .card{
  background: var(--light);
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 1rem;
  padding: 1rem;
  border-radius: 15px;
}
section#join .card .btn{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1rem;
}
/* section#join .card .btn:hover {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1rem;
} */
</style>