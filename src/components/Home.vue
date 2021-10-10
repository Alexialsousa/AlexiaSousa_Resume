<template>
<div>
    <v-row justify="center" align-content="center">
        <v-avatar class="justify-center ma-15" color="grey" size="184" rounded="160">
            <img class="profile" src="../assets/profile.png" alt="avatar">
        </v-avatar>
    </v-row>
    <v-container class="card">

        <h1 style="display:inline">Alexia Sousa</h1>

        <v-divider />
        <h4 style="color: black">I'm a passionate Software Engineering Student at Concordia University
            looking to gain knowledge and hands on experience in the programming world.
        </h4>
        <v-btn class="ma-5 button" outlined href="AlexiaSousa_Resume.pdf" download>
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

</style>
