<template>
    <div class="okno">
        <div class="sekce">
            <div class="hra">

                <div class="vyskakovaci-okno-vyhra" v-if="vyhra === true"><img class="vesely"
                                                                               v-bind:src="require(`./../assets/images/smile.png`)"
                                                                               alt="Veselá tvář">
                    <div class="vyhodnoceni">
                        <h5>HURÁ</h5>
                        <p> Získáváš BOD a můžeš pokračovat dál. Nebo si klidně zahraj znovu.</p></div>
                </div>
                <audio ref="zvukVyhry" src='./../assets/zvuky/vyhra2.mp3'></audio>
                <div class="vyskakovaci-okno-prohra" v-if="prohra === true"><img class="smutny"
                                                                                 v-bind:src="require(`./../assets/images/neutral.png`)"
                                                                                 alt="Smutná tvář">
                    <div class="vyhodnoceni">
                        <h5>A JÉJE</h5>
                        <p> To se úplně nepovedlo, ale můžeš to zkusit znovu.</p></div>
                </div>
                <audio ref="zvukProhry" src='./../assets/zvuky/prohra.mp3'></audio>


                <img class="ovoce" v-for="(polozka, index) in obrazky"
                     v-bind:key="index"
                     v-bind:src="polozka.obrazek"
                     v-on:click="vyhodnot(index)"
                >

                <p class="cislo">{{hod}}</p>
            </div>
            <div class="pokyny">
                <h4>PALUBNÍ POKYNY</h4>
                <p class="cara">Ovocný koktejl s vesmírnou mlhou.</p>
                <p>Hoď kostkou a podle čísla, které ti padne, vyber kartičku se stejným počtem obrázků.</p>
                <div class="zvukovaStopa">
                    <button class="napoveda" v-on:click="play" >Nápověda</button>
                    <audio ref="audioElm" src='./../assets/zvuky/kostka.mp3'></audio>
               </div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: ["vyhra", "prohra", "znovuNacist"],
        data() {
            return {
                hod: null,
                obrazky: [
                    {obrazek: require(`./../assets/images/1hruska.jpg`), hodnota: 1},
                    {obrazek: require(`./../assets/images/2mrkev.jpg`), hodnota: 2},
                    {obrazek: require(`./../assets/images/3meloun.jpg`), hodnota: 3},
                    {obrazek: require(`./../assets/images/4ananas.jpg`), hodnota: 4},
                    {obrazek: require(`./../assets/images/5kokos.jpg`), hodnota: 5},
                    {obrazek: require(`./../assets/images/6jahoda.jpg`), hodnota: 6},
                ]
            }
        },
        methods: {
            hodKostkou() {
                this.hod = Math.floor(Math.random() * 6 + 1);
            },
            vyhodnot(index) {
                if (this.hod === this.obrazky[index].hodnota) {
                    this.$emit("vyhrani");
                } else {
                    this.$emit("prohrani");
                }
            },
            znovuNactiHru() {
                this.hodKostkou();
                this.$emit("prestan-nacitat");
            },

           play: function(){
                this.$refs.audioElm.play();
            },
            playWinFail: function () {
                if (this.vyhra === true) {
                    this.$refs.zvukVyhry.play();
                    }
                else if (this.prohra === true) {
                    this.$refs.zvukProhry.play();
                    }
            }
        },
        created() {
            this.hodKostkou();
        },  
        watch: {
            znovuNacist(newVal) {
                if (newVal === true) {
                    this.znovuNactiHru()
                }
            },       
            vyhra(newVal) {
                if (newVal === true) {
                    this.playWinFail();
                }
            },
            prohra(newVal) {
                if (newVal === true) {
                    this.playWinFail();
                }
            }
        }     
    }
</script>

<style scoped>

    .ovoce {
        width: 100px;
        padding: 20px 25px 0px 25px;
    }

    .cislo {
        padding: 0px;
        margin: 0px;
        font-size: 50px;
        font-weight: 900;
        color: rgb(59, 163, 233);
    }


</style>
