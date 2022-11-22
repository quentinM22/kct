<script setup>
import NavbarDashboard from '../components/NavbarDashboard.vue'

</script>
<template>
    <header>
        <NavbarDashboard />
        <div class="jumbotron">

            <h1>Bienvenue {{ user.firstName }} sur l'administation du Site</h1>
            <p class="lead">Ici vous pourrez gerer votre profil ainsi que les sujet du site.</p>
            <hr class="my-4">
            <p>Pour tout problème lier a l'administation du site contactez le support et toute demande <a
                    class='btn btn-primary' href="mailto:quentin.meunierpro22@gmail.com">Ici</a></p>
        </div>
    </header>
</template>
<script>
import axios from "axios";

export default {

    data() {
        return {
            user:[]
            //   id: ""
        }
    },
    async created() {
        const id = this.$route.params.id
        let token = localStorage.getItem("token");
        await axios
            .get(`http://127.0.0.1:3000/api/user/dashboard/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    token: token
                }
            })

            .then((res) => {
                // console.log(res.data);
                this.user = res.data
            })
    }
}
</script>