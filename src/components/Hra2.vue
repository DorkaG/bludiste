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

                <div class="obrazky-hra2">
                    <div class="obrazek-raketa_konetejner-hra2">
                        <img class="obrazek-raketa-hra2" v-bind:src="vybranaRaketa.obrazek">
                    </div>

                    <div class="obrazky-sipek-hra2">
                        <img class="obrazek-sipky-hra2" v-for="(polozka, index) in vybraneSipky"
                             v-bind:key="index"
                             v-bind:src="polozka.obrazek"
                             v-on:click="vyhodnot(index)"
                        >
                    </div>
                </div>

            </div>
            <div class="pokyny">
                <h4>PALUBNÍ POKYNY</h4>
                <p class="cara">Teď nás čeká trocha vesmírné akrobacie.</p>
                <p>Najdi šipku, která ukazuje stejným směrem jako tvoje raketa.</p>
                <div class="zvukovaStopa">
                    <button class="napoveda" v-on:click="play" >Nápověda</button>
                    <audio ref="audioElm" src='./../assets/zvuky/hra2.mp3'></audio>
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
                zvuk: {nahravka: require("./../assets/zvuky/hra2.mp3"), id: "hra2"},
                rakety: [{obrazek: require("./../assets/images/raketa_doprava.png"), smer: "doprava"},
                    {obrazek: require("./../assets/images/raketa_doleva.png"), smer: "doleva"},
                    {obrazek: require("./../assets/images/raketa_nahoru.png"), smer: "nahoru"},
                    {obrazek: require("./../assets/images/raketa_dolu.png"), smer: "dolu"},
                    {obrazek: require("./../assets/images/raketa_dopravanahoru.png"), smer: "dopravanahoru"},
                    {obrazek: require("./../assets/images/raketa_dopravadolu.png"), smer: "dopravadolu"},
                    {obrazek: require("./../assets/images/raketa_dolevanahoru.png"), smer: "dolevanahoru"},
                    {obrazek: require("./../assets/images/raketa_dolevadolu.png"), smer: "dolevadolu"},
                ],
                sipky: [
                    {obrazek: require("./../assets/images/sipka_doprava.png"), smer: "doprava"},
                    {obrazek: require("./../assets/images/sipka_doleva.png"), smer: "doleva"},
                    {obrazek: require("./../assets/images/sipka_nahoru.png"), smer: "nahoru"},
                    {obrazek: require("./../assets/images/sipka_dolu.png"), smer: "dolu"},
                    {obrazek: require("./../assets/images/sipka_dopravanahoru.png"), smer: "dopravanahoru"},
                    {obrazek: require("./../assets/images/sipka_dolevanahoru.png"), smer: "dolevanahoru"},
                    {obrazek: require("./../assets/images/sipka_dopravadolu.png"), smer: "dopravadolu"},
                    {obrazek: require("./../assets/images/sipka_dolevadolu.png"), smer: "dolevadolu"},
                ],
                vybraneSipky: [],
                vybranaRaketa: null,
            }
        },
        methods: {
            vyberSipky() {
                let kopieSipky = JSON.parse(JSON.stringify(this.sipky));
                let x = 1;
                let index = 0;
                do {
                    index = Math.floor(Math.random() * kopieSipky.length);
                    this.vybraneSipky.push(kopieSipky[index]);             //vlozi vybrany obrazek do vybraneSipky
                    kopieSipky.splice(index, 1);                              // z puvodniho pole ho smaze, aby se pak nemohl vybrat znovu
                    x++;
                } while (x <= 4)
            },
            vyberRaketu() {
                let predvybraneRakety = [];                      //do tohoto pole se ulozi ty 4 rakety, ktere maji stejny smer jako 4 vybrane sipky
                for (let vybranaSipka of this.vybraneSipky) {
                    for (let raketa of this.rakety) {
                        if (vybranaSipka.smer === raketa.smer) {
                            predvybraneRakety.push(raketa);
                        }
                    }
                }
                this.vybranaRaketa = predvybraneRakety[Math.floor(Math.random() * predvybraneRakety.length)]     //do vybranaRaketa se ulozi nahodne vygenrovana raketa z pole predvybraneRakety
            },
            vyhodnot(index) {                               //PRIDAT DO KAZDE HRY
                if (this.vybraneSipky[index].smer === this.vybranaRaketa.smer) {
                    this.$emit("vyhrani");
                } else {
                    this.$emit("prohrani");
                }
            },
            znovuNactiHru() {
                this.vybraneSipky = [];
                this.vyberSipky();
                this.vyberRaketu();
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
        },
        created() {
            this.vyberSipky()
            this.vyberRaketu()

        }
    }
</script>


<style scoped>


    .obrazky-hra2 {
        width: 550px;
        height: 100%;
    }

    .obrazky-sipek-hra2 {
        height: 35%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        padding-top: 60px;
    }

    .obrazek-sipky-hra2 {
        width: 80px;
        height: 80px;
        margin: 0 15px;
    }

    .obrazek-raketa_konetejner-hra2 {
        height: 50%;
    }

    .obrazek-raketa-hra2 {
        margin-top: 30px;
        
    }


</style>
