<template>
<div>
    <v-row justify="center" align-content="center">
        <v-avatar class="justify-center ma-15" color="grey" size="200" rounded="160">
            <img class="profile" src="../assets/profile.png" alt="avatar">
        </v-avatar>
    </v-row>
    <v-container class="card">

        <h1 style="display:inline">Alexia Sousa</h1><br>
        <a style="display:inline" href="mailto:alexialsousa@hotmail.com" target="_blank">alexialsousa@hotmail.com</a>
        <v-divider />
        <h4 style="color: black">I'm a passionate Software Engineering Student at Concordia University
            looking to gain knowledge and hands on experience in the programming world.
        </h4>
        <v-btn class="ma-5 btn-grad" outlined href="Alexia_Sousa's_Resume.pdf" download>
            Download Resume
        </v-btn>
    </v-container>

    <v-row width="75%" justify="center">
        <v-btn class="mx-2 ma-2" icon href="https://www.linkedin.com/in/alexiasousa/" target="_blank">
            <v-icon size="30">fab fa-linkedin</v-icon>
        </v-btn>
        <v-btn class="mx-2 ma-2" icon href="https://github.com/alexialsousa" target="_blank">
            <v-icon size="30">fab fa-github</v-icon>
        </v-btn>
    </v-row>

</div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style>
* {
    font-family: sans-serif;
}

.profile {
    width: 19em;
    height: 19em;
}

.card {
    color: black !important;
    text-align: center;
    width: 100%;
    display: inherit;
    border: 0;
    position: static;
    margin-top: 0.5em;
}

.btn-grad {
    background-image: linear-gradient(to right, #ff6e7f 0%, #bfe9ff 51%, #ff6e7f 100%)
}

.btn-grad {
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: inline-flex;
}

.btn-grad:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
}
</style>
