<template>
    <div class="okno">

        <div class="sekce">
            <div class="hra">
                <div class="vyskakovaci-okno-vyhra" v-if="vyhra === true">Jupi, sikulka</div>
                <!--PRIDAT DO KAZDE HRY-->
                <div class="vyskakovaci-okno-prohra" v-if="prohra === true">Zkus to znovu</div>
                <!--PRIDAT DO KAZDE HRY -->

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
                <p>Najdi šipku, která ukazuje stejným směrem, jako tvoje raketa.</p>
            </div>

        </div>
    </div>

</template>


<script>
    export default {
        props: ["vyhra", "prohra", "znovuNacist"],
        data() {
            return {
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
                console.log(kopieSipky);
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
                console.log(predvybraneRakety);
                this.vybranaRaketa = predvybraneRakety[Math.floor(Math.random() * predvybraneRakety.length)]     //do vybranaRaketa se ulozi nahodne vygenrovana raketa z pole predvybraneRakety
                console.log(this.vybranaRaketa);
            },
            vyhodnot(index) {                               //PRIDAT DO KAZDE HRY
                if (this.vybraneSipky[index].smer === this.vybranaRaketa.smer) {
                    this.$emit("vyhrani");
                    console.log("vyhra")
                } else {
                    this.$emit("prohrani");
                    console.log("prohra")
                }
            },
            znovuNactiHru() {
                this.vybraneSipky = [];
                this.vyberSipky();
                this.vyberRaketu();
                this.$emit("prestan-nacitat");
            }
        },
        watch: {
            znovuNacist(newVal) {
                if (newVal === true) {
                    this.znovuNactiHru()
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
        margin-left: 230px;
    }


</style>
