<template>
<div>

    <v-col class="grid">
        <v-row v-for="(item, i) in items" :key="i" class="d-flex col child-flex">

            <v-img :src=item.url aspect-ratio="1" class="img grey lighten-2">

                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </template>
            </v-img>

            <!-- Dialog Button-->
            <v-btn text @click.stop="dialogConUHacks = true" height="inherit" class="buttonDialog">
                {{item.name}}
            </v-btn>

            <!-- Dialog -->
            <v-dialog v-model="dialogConUHacks" transition="dialog-bottom-transition" max-width="50em">
                <v-card>
                    <v-card-title> {{item.name}}
                        </v-card-title>
                        <v-card-subtitle> {{item.date}}
                        </v-card-subtitle>
                    <v-card-text>
                        <div class="pa-12">{{item.text}}</div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                        <v-btn text @click="dialogConUHacks = false">Close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

        </v-row>
    </v-col>

</div>
</template>

<script>
import conuhacks from "../assets/conuhacks.jpeg"
import muhc from "../assets/muhc.jpeg"
import mfat from "../assets/mfat.jpeg"
import costarica from "../assets/costarica.jpeg"

export default {
    name: 'VolunteerWorkandAwards',
    methods: {
        openDialog() {

            this.dialogConUHacks = true;

        },
    },
    data() {
        return {
            dialogConUHacks: false,
            items: [{
                    url: conuhacks,
                    name: "ConUHacks V",
                    date: "Janurary 2020",
                    text: "My team's Augmented Reality game app called Towar was awarded at Concordia University's Fifth hackathon, the biggest of its kind in Quebec. \n\n TowAR was created using the Unity game engine and ARCore kit.",
                },
                {
                    url: muhc,
                    name: "Montreal Children's Hospital",
                    date: "2018-2019",
                    text: "• Managed the distribution of toys to children in the emergency waiting room \n\n• Interacting with children and keeping them company in the waiting area",
                },
                {
                    url: mfat,
                    name: "Marianopolis First Aid Team",
                    date: "2017-2019",
                    text: "• Monitor activities in the gymnasium and fitness centre in case of accidents and be available in the first aid room to help with minor injuries",
                },
                {
                    url: costarica,
                    name: "Costa Rica Service Trip",
                    date: "February 2017",
                    text: "• Raised $4500 in Montreal to purchase goods for distribution in Costa Rica \n\n• Volunteered at the Asociación Obras del Espíritu Santo orphanage \n\n• Planted trees and entertained the children at Chachagua Primary School",
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

.col {
    max-width: 75%;
    margin: auto;
    overflow: hidden;
    justify-content: center;
}

.img {
    max-width: 70%;
    max-height: 70%
}

.grid {
    display: grid !important;
    grid-template-columns: 100%;
}

.buttonDialog {
    padding-top: inherit ;
    margin-top: 1em ;
    background-color: lightgrey ;
    min-height: 2em;
    max-width: 85%;
}

@media (max-width: 600px) {
    .buttonDialog {
        font-size: 0.5rem !important;
    }
}
</style>
