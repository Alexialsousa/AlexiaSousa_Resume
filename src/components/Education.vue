<template>
<div>
    <v-card class="elevation-2 card">
        <v-card-title>
            Bachelor of Software Engineering
        </v-card-title>

        <v-card-subtitle>
            2019-2023
        </v-card-subtitle>

        <v-card-text class="white text--primary text">
            <pre><br><b>Concordia University CO-OP</b><br>Montreal, Qc<br>GPA: 3.5<br>
            <div class="container">
            <ul class="list">
              <li>Object Oriented Programming</li>
              <li>Web Programming</li>
              <li>Information Systems Security</li>
            </ul>
            <ul class="list">
              <li>Data Structures and Algorithms</li>
              <li>Operating Systems</li>
              <li>User Interface Design</li>
            </ul>
            </div>
            </pre>
        </v-card-text>
    </v-card>

    <v-card class="elevation-2 card">
        <v-card-title>
            DEC in Pure and Applied Science
        </v-card-title>

        <v-card-subtitle>
            2017-2019
        </v-card-subtitle>

        <v-card-text class="white text--primary text">
            <pre><br><b>Marianopolis College</b><br>Montreal, Qc<br></pre>
        </v-card-text>
    </v-card>

    <v-card class="elevation-2 card">
        <v-card-title>
            High School Diploma
        </v-card-title>

        <v-card-subtitle>
            2012-2017
        </v-card-subtitle>

        <v-card-text class="white text--primary text">
            <pre><br><b>Vincent Massey Collegiate</b><br>Montreal, Qc<br><br>- Graduated with high honours (87% global average)<br> - Obtained bilingual certificate (English and French)</pre>
        </v-card-text>
    </v-card>
</div>
</template>

<script>
export default {
    name: 'Education',
}
</script>

<style scoped>
* {
    font-family: sans-serif;
}

.list {
    display: table;
    text-align: justify;
    margin: auto;
}

li {
    margin-bottom: 1em;
}
.container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
}
</style>
