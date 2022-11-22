<template>
<main class="login-page sidebar-collapse">

<div class="page-header clear-filter" filter-color="orange">

    <div class="page-header-image" style="background-image:url(/pexels-photo-96423.jpeg)"></div>

    <div class="content">
        <h2 class="mt-5 text-center text-light">Connexion Administration</h2>
        <div class="container">
            <div class="col-md-4 ml-auto mr-auto">
                <div class="card card-login card-plain">
                    <form class="form" @submit.prevent="Login">

                        <div class="card-body">
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" v-model="email" placeholder="test@test.fr">
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email
                                    with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"
                                    v-model="password" placeholder="********">
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <input class="btn btn-primary btn-round btn-lg btn-block" type="submit"
                                value="Connexion">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</main>
</template>
    

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const email = ref('')
const password = ref('')
const Login = async () => {
    const res = await fetch("http://127.0.0.1:3000/api/user/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    }).then(res => res.json())
    if (res.success) {
        localStorage.setItem('token', res.token)
        localStorage.setItem('userId', res.userId)
        console.log(res.token);
        console.log(res.userId);
        router.push(`/dashboard/${res.userId}`)
    } else {
        alert(res.message)
    }
}


</script>