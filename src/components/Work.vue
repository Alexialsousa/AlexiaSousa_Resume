<template>
<div>
    <v-card class="elevation-2 card" v-for="(item, i) in items" :key="i">
        <v-card-title>
            {{item.title}}

            <div v-if="item.title=='Canadian Space Agency'">
                <img src="../assets/CSA/csa.png" style="height: 3em" />
            </div>

            <div v-if="item.title=='Matrox Electronic Systems'">
                <img src="../assets/Matrox/matrox.png" />
            </div>

            <div v-if="item.title=='La Boite aux Huîtres'">
                <img src="../assets/lbah.jpeg" />
            </div>

            <div v-if="item.title=='Fonex Data Systems'">
                <img src="../assets/fonex.png" />
            </div>
        </v-card-title>

        <v-card-subtitle>
            {{item.date}}
        </v-card-subtitle>

        <v-card-text class="white text--primary text">
            <pre><br><b>{{item.position}}</b><br>{{item.text}}</pre>
        </v-card-text>
        <v-container class="container">
            <div v-for="image in item.images" :key="image">
                <img v-bind:src="image" alt="picture" class="animate__animated animate__bounce logos" />
            </div>
        </v-container>
    </v-card>

</div>
</template>

<script>
import vuejs from '@/assets/CSA/vuejs.png';
import java from '@/assets/CSA/java.png';
import spring from '@/assets/CSA/spring.png';
import jest from '@/assets/CSA/jest.png';
import junit from '@/assets/CSA/junit.png';
import js from '@/assets/CSA/js.png';
import mariadb from '@/assets/CSA/mariadb.png';
import hibernate from '@/assets/CSA/hibernate.png';
import gitlab from '@/assets/CSA/gitlab.png';
import testrail from '@/assets/Matrox/testrail.png';
import jira from '@/assets/Matrox/jira.png';
import linux from '@/assets/Matrox/linux.jpeg';

export default {
    name: 'Work',
    data() {
        return {
            items: [{
                    title: 'Canadian Space Agency',
                    date: 'May 2021 - August 2021',
                    position: 'SOFTWARE ENGINEERING INTERN\n',
                    text: "• Implemented features in my team's EGI Tools Support application using Vue.js, Javascript, Java and Spring\n" +
                        "\n• Refactored the application's unit tests using Junit for the backend as well as Jest in the frontend.\n" +
                        "\n• Assisted with the implementation and design of a MariaDB MySQL database using the DBeaver software application.\n",
                    images: [vuejs, java, js, spring, mariadb, hibernate, junit, jest, gitlab],
                },
                {
                    title: 'Matrox Electronic Systems',
                    date: 'September 2020 - December 2020',
                    position: 'SOFTWARE QUALITY ASSURANCE INTERN\n',
                    text: "• Worked in the SQA department where I performed quality checks on company video cards",
                    images: [testrail, jira, linux],
                },
                {
                    title: 'La Boite aux Huîtres',
                    date: 'May 2019 - April 2020',
                    position: 'CASHIER/WAITRESS\n',
                    text: "• Operated the cash register\n \n• Fulfilled customer orders (shucked and served oysters)",
                },
                {
                    title: 'Fonex Data Systems',
                    date: 'Summer 2015 & 2016',
                    position: 'OFFICE ASSOCIATE\n',
                    text: "• Assisted production engineers to document processes related to inventory picking and product labeling \n" +
                        "\n• Analyzed production quality using Microsoft Excel to determine defect rate of products produced \n",

                },
            ]
        }
    }
}
</script>

<style scoped>
* {
  font-family: sans-serif;
}

img {
    height: 2em;
    width: 4em;
    margin-left: 1em;
}

.card {
    text-align: center;
    display: contents;
}

.v-card__subtitle,
.v-card__text,
.v-card__title {
    margin-inline: 1em;
}

.v-card__title {
    margin-top: 3em;
}

.logos {
    padding-right: 2em;
    height: 4em;
    width: 100%;
}

.container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
}
</style>
