<template>
<div>
    <v-card class="elevation-2 card" v-for="(item, i) in items" :key="i">
        <v-card-title>
            {{item.title}}
            <img :src="item.url" :style="item.style" />
        </v-card-title>
        <br>

        <v-card-subtitle>
            {{item.date}}
        </v-card-subtitle>

        <v-card-text class="white text--primary text">
            <pre><br><b>{{item.position}}</b><br>{{item.text}}</pre>
        </v-card-text>
        <v-container class="container hidden-sm-and-down">
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
import csa from '@/assets/CSA/csa.png';
import lbah from '@/assets/lbah.jpeg';
import matrox from '@/assets/Matrox/matrox.png';
import fonex from '@/assets/fonex.png';

export default {
    name: 'Work',
    data() {
        return {
            items: [{
                    title: 'Canadian Space Agency',
                    url: csa,
                    style: {
                        height: '5em',
                        width: '7em'
                    },
                    date: 'May 2021 - August 2021',
                    position: 'SOFTWARE ENGINEERING INTERN\n',
                    text: "• Implemented features in my team's EGI Tools Support application using Vue.js, Javascript, Java and Spring\n" +
                        "\n• Refactored the application's unit tests using Junit for the backend as well as Jest in the frontend.\n" +
                        "\n• Assisted with the implementation and design of a MariaDB MySQL database using the DBeaver software application.\n",
                    images: [vuejs, java, js, spring, mariadb, hibernate, junit, jest, gitlab],
                },
                {
                    title: 'Matrox Electronic Systems',
                    url: matrox,
                    style: {
                        height: '3em',
                        width: '5em'
                    },
                    date: 'September 2020 - December 2020',
                    position: 'SOFTWARE QUALITY ASSURANCE INTERN\n',
                    text: "• Worked in the SQA department where I performed quality checks on company video cards",
                    images: [testrail, jira, linux],
                },
                {
                    title: 'La Boite aux Huîtres',
                    url: lbah,
                    style: {
                        height: '3em',
                        width: '6em'
                    },
                    date: 'May 2019 - April 2020',
                    position: 'CASHIER/WAITRESS\n',
                    text: "• Operated the cash register\n \n• Fulfilled customer orders (shucked and served oysters)",
                },
                {
                    title: 'Fonex Data Systems',
                    url: fonex,
                    style: {
                        height: '4em',
                        width: '7em'
                    },
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
    font-size: 1rem;
}

.v-card__title {
    margin-top: 3em;
}

pre {
    overflow: hidden;
    white-space: pre-wrap;
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
