<template>
    <div id="app">
        <!-- <router-link to='/'>Domů</router-link>
        <router-link to='/hra1'>Hra1</router-link>
        <router-link to='/hra2'>Hra2</router-link>
        <router-link to='/zavod'>Zavod</router-link>
        <router-link to='/kostka'>Kostka</router-link>|
        <router-link to='/pohadka'>Pohadka</router-link>| --> <!-- Tlačítka pro vývoj -->
        <img class="rybar" v-bind:src="require(`./../assets/images/rybar.png`)" alt="Vesmírný rybář">

        <div class="supercontainer">
            <div class="container">
                <div class="pocet-bodu">{{pocetBodu}}</div>
                <div class="ramec">
                    <img class="raketa obrazek" alt="raketa"
                         v-bind:src="raketa.obrazek"
                         v-bind:style="umistiObjekt(raketa)">

                    <img v-for="(objekt, index) in objekty" class="obrazek" alt="saturn"
                         v-bind:key="'a' + index"
                         v-bind:src="objekt.obrazek"
                         v-bind:style="umistiObjekt(objekt)"

                    >

                    <div class="radek" v-for="(radek, indexRadku) in bludiste"
                         v-bind:key="indexRadku">
                        <div class="ctverecek" v-for="(ctverec, indexCtverce) in bludiste[indexRadku]"
                             v-bind:key="indexCtverce"
                             v-bind:class="{zed : ctverec === 1, cesta : ctverec === 0}">
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <modals-container
                v-on:close="zavriHru"
                v-on:vyhrat="vyhra"
                v-on:dalsi-level="dalsiLevel"
        />


    </div>
</template>


<script>
    import pole from "./../assets/data.js"
    import SablonaHry from "./../components/SablonaHry.vue"
    import SablonaCile from "./../components/SablonaCile.vue"

    export default {

        data() {
            return {
                level: 0,
                zdi: [],
                hraOtevrena: false,
                typHry: "",
                pocetBodu: 0,
                raketa: {   // pocatecni souradnice rakety museji odpovidat souradnicim ctverecku
                    x: 60,
                    y: 120,
                    sirka: 60,
                    vyska: 60,
                    obrazek: require("./../assets/images/raketa_doprava60_2.png"),
                    zobrazen: true
                },
                objekty: [
                    {
                        x: 0,
                        y: 0,
                        sirka: 60,
                        vyska: 60,
                        nazevHry: "hra1",
                        obrazek: require("./../assets/images/slunecnisoustava.png"),
                        zobrazen: true,
                        id: 2
                    },
                    {
                        x: 0,
                        y: 0,
                        sirka: 60,
                        vyska: 60,
                        nazevHry: "hra2",
                        obrazek: require("./../assets/images/planeta.png"),
                        zobrazen: true,
                        id: 3
                    },
                    {
                        x: 0,
                        y: 0,
                        sirka: 60,
                        vyska: 60,
                        nazevHry: "zavod",
                        obrazek: require("./../assets/images/kometa.png"),
                        zobrazen: true,
                        id: 4
                    },
                    {
                        x: 0,
                        y: 0,
                        sirka: 60,
                        vyska: 60,
                        nazevHry: "kostka",
                        obrazek: require("./../assets/images/uforuzove.png"),
                        zobrazen: true,
                        id: 5
                    },
                    {
                        x: 0,
                        y: 0,
                        sirka: 60,
                        vyska: 60,
                        nazevHry: "pohadka",
                        obrazek: require("./../assets/images/kokos.png"),
                        zobrazen: true,
                        id: 6
                    },
                    {
                        x: 0,
                        y: 0,
                        sirka: 60,
                        vyska: 60,
                        cil: true,
                        obrazek: require("./../assets/images/zeme.png"),
                        zobrazen: true,
                        id: 9
                    },
                ],
                hvezda: {
                    x: 0,
                    y: 100,
                    sirka: 90,
                    vyska: 51,
                    obrazek: require("./../assets/images/hvezda.png")
                },
                hvezda2: {
                    x: 900,
                    y: 530,
                    sirka: 90,
                    vyska: 51,
                    obrazek: require("./../assets/images/hvezda.png")
                },
            }
        },
        computed: {
            bludiste() {
                return pole[this.level].mapa;

            }
        },
        methods: {
            posunRaketu(event) {
                if (this.hraOtevrena) {         //pokud je hraOtevrena true, fce se ukonci, nejde hybat s raketou
                    return
                }
                if (event.code === "ArrowRight") {
                    this.posun(60, -60, "doprava60_2", "x")
                    this.kontrolaObjektu();
                } else if (event.code === "ArrowLeft") {
                    this.posun(-60, 60, "doleva60_2", "x")
                    this.kontrolaObjektu();
                } else if (event.code === "ArrowUp") {
                    this.posun(-60, 60, "nahoru60_2", "y")
                    this.kontrolaObjektu();
                } else if (event.code === "ArrowDown") {
                    this.posun(60, -60, "dolu60_2", "y")
                    this.kontrolaObjektu();
                }
            },
            kontrolaObjektu() {
                for (let i = 0; i < this.objekty.length; i++) {
                    if (this.objekty[i].zobrazen) {
                        this.potkejObjekt(this.objekty[i])
                    }
                }
            },
            posun(cisloPosunu, cisloKolize, smer, osa) {
                this.raketa[osa] += cisloPosunu;
                this.raketa.obrazek = require(`./../assets/images/raketa_${smer}.png`);
                for (let zed of this.zdi) {
                    if (this.jeKolize(this.raketa, zed)) {
                        this.raketa[osa] += cisloKolize;
                    }
                }
            },
            potkejObjekt(objekt) {              // kontroluje, zda doslo ke kolizi rakety s objektem. Pokud ano, otevre se modalni okno, zobrazen se u objektu prehodi na false (tj. objekt se uz nebude zobrazovat, osetreno pomoci v-if) a hraOtevrena se nastavi na true (tj. nejde hybat s raketou -  funkce posunRaketu je ukoncena pomoci return, pokud je hraOtevrena true)
                if (this.jeKolize(this.raketa, objekt)) {
                    if (objekt.cil === true) {                                     //pokud dojde ke kolizi s cilovym objektem, otevre se cilovy modal. S tlacitkem pokracovat do dalsiho levelu, pokud soucasny level neni posledni
                        var neniposledni = (pole[this.level + 1] !== undefined)
                        this.$modal.show(SablonaCile, {body: this.pocetBodu, jeDalsiLevel: neniposledni})
                        this.pocetBodu = 0;
                        objekt.zobrazen = false;
                        this.hraOtevrena = true;
                    } else {
                        this.$modal.show(SablonaHry, {nazevHry: objekt.nazevHry});

                        objekt.zobrazen = false;
                        this.hraOtevrena = true;
                    }
                }
            },
            zavriHru() {                  //fce reagujici na udalost v-on:close, ktera je pridana na modalu. Dojde k ni tehdy, kdyz se v SabloneHry klikne na tlacitko pryc nebo dal(emit). Zavre se okno s hrou, hraOtevrena je false, tj. jde znovu hybat raketou
                this.$modal.hide(SablonaHry);
                this.hraOtevrena = false;
            },
            zjistiSouradniceZdi() {
                for (let i = 0; i < this.bludiste.length; i++) {
                    for (let a = 0; a < this.bludiste[i].length; a++) {
                        if (this.bludiste[i][a] === 1) {
                            let souradniceX = 0 + (a * 60);
                            let souradniceY = 0 + (i * 60);
                            this.zdi.push({x: souradniceX, y: souradniceY, sirka: 60, vyska: 60});

                        }
                    }
                }
            },
            zjistiSouradniceObjektu(cislo, objekt) {
                for (let i = 0; i < this.bludiste.length; i++) {
                    for (let a = 0; a < this.bludiste[i].length; a++) {
                        if (this.bludiste[i][a] === cislo) {
                            let souradniceX = 0 + (a * 60);
                            let souradniceY = 0 + (i * 60);
                            objekt.x = souradniceX;
                            objekt.y = souradniceY;


                        }
                    }
                }
            },
            jeKolize(objektA, objektB) {
                return (!(objektA.x + objektA.sirka <= objektB.x
                    || objektB.x + objektB.sirka <= objektA.x
                    || objektA.y + objektA.vyska <= objektB.y
                    || objektB.y + objektB.vyska <= objektA.y))

            },
            umistiObjekt(objekt) {
                let vis = '';
                if (objekt.zobrazen === true) {
                    vis = 'visible'

                } else {
                    vis = 'hidden'
                }
                return {left: objekt.x + 'px', top: objekt.y + 'px', visibility: vis};
            },
            vyhra() {
                this.pocetBodu++;
            },
            dalsiLevel() {
                this.$modal.hide(SablonaCile);
                this.level++
                this.raketa.x = 60;
                this.raketa.y = 120;
                this.zdi = []
                this.zjistiSouradniceZdi()
                for (let i = 0; i < this.objekty.length; i++) {
                    this.objekty[i].zobrazen = true;
                    this.zjistiSouradniceObjektu(this.objekty[i].id, this.objekty[i])

                }
            }
        },
        created() {
            window.addEventListener("keydown", this.posunRaketu),
            this.zjistiSouradniceZdi()
            for (let i = 0; i < this.objekty.length; i++) {
                this.zjistiSouradniceObjektu(this.objekty[i].id, this.objekty[i])
            }
        }
        
    }

</script>

<style scoped>

    #app {
        overflow: hidden;
        background-image: url("./../../src/assets/images/pozadi4.jpg");
        height: 98vh;
        width: 100%;
    }

    .supercontainer {
        width: 1500px;
        height: 800px;
        margin: 0 auto;
    }

    .container {
        position: relative;
        left: calc((100% - 1055px) / 2);
        top: 1%;
    }

    .ramec {
        position: absolute;
        border: 4px double rgb(59, 163, 233); 
    }

    .ctverecek {
        background: rgb(241, 229, 159);
        width: 60px;
        height: 60px;
    }

    .radek {
        display: flex;
    }

    .zed {
        background-color: rgb(48, 48, 94);
        opacity: 0;
    }

    .cesta {
        background-color: rgb(241, 229, 159);
    }

    .obrazek {
        background-color: rgb(241, 229, 159);
        position: absolute;
    }

    .pocet-bodu {
        font-size: 100px;
        position: absolute;
        top: 55px;
        left: -180px;
        color: rgb(59, 163, 233);
        font-weight: 900;     
    }

    .rybar {
        position: absolute;
        width: 200px;
        margin-top: 21%;
        margin-left: 2%;
    }


</style>
