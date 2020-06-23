<template>
    <div class="sablona-kontejner">
        <component :is="nazevHry"
                   v-bind:vyhra="vyhra"
                   v-bind:prohra="prohra"
                   v-bind:znovuNacist="znovuNactiHru"

                   v-on:vyhrani="vyhrat"
                   v-on:prohrani="prohrat"
                   v-on:prestan-nacitat="prestanNacitat"

        />

        <div class="tlacitka border-grey palubniDeska">
            
            <button class="btn btn-red" v-on:click="pryc" v-bind:class="{'btn-grey': vyhra === true}"> pryč</button>
            <button class="btn btn-yellow" v-on:click="obnov" v-bind:class="{'btn-grey': nazevHry === 'pohadka', 'btn-kostka': nazevHry === 'kostka'}" 
            ></button>
            <button class="btn btn-green" v-on:click="dal" v-bind:class="{'btn-grey': vyhra === false}"> dál</button>

         
            
        </div>

    </div>
</template>

<script>
    import Hra1 from "./Hra1.vue"       //NAIMPORTOVAT KAZDOU HRU
    import Hra2 from "./Hra2.vue"
    import Zavod from "./Zavod.vue"
    import Kostka from "./Kostka.vue"
    import Pohadka from "./Pohadka.vue"


    export default {
        props: ["nazevHry"],
        components: {
            hra1: Hra1,
            hra2: Hra2,
            zavod: Zavod,
            kostka: Kostka,
            pohadka: Pohadka
        },
        data() {
            return {
                vyhra: false,
                prohra: false,
                znovuNactiHru: false,
                tlacitka: [
                    {label: "btn-grey", icona: "mdi-island"},
                    {label: "K sousedovi", icona: "mdi-ferry"},
                    {label: "O mě", icona: "mdi-information-outline"},
                    {label: "Do mě", icona: "mdi-coffee"}]

            }
        },
        methods: {
            pryc() {                            //emituje se udalost do modalu v Bludiste.vue, aby se okno zavrelo
                if (this.vyhra === false) {
                    this.$emit("close");
                }
            },
            dal() {
                if (this.vyhra === true) {    //emituje se udalost do modalu v Bludiste.vue, aby se okno zavrelo
                    this.$emit("close");
                }
            },
            vyhrat() {
                this.vyhra = true;              //pokud dojde k vyhre ve hre, spusti to udalost, ktera vyvola tuto fci; ta prepise vyhru na true a prohru na false (coz je jako props poslano zase zpatky do hry); plus emituje udalost vyhrat, ktera pak v Bludiste.vue spusti funkci na pricteni bodu
                this.prohra = false;
                this.$emit("vyhrat");
            },
            prohrat() {             //pokud dojde k prohre ve hre, spusti to udalost, ktera vyvola tuto fci; ta prepise prohru na true a vyhru na false (coz je jako props poslano zase zpatky do hry)
                this.prohra = true;
                this.vyhra = false;
            },
            obnov() {                       //vyresetuje vyhru a prohru na false, znovuNactiHru da na true, coz bude jako props i ve hre. Tam, pokud je toto props true, se znovu nactou obrazky a pak se vyvola udalost, ktera zavola fci prestan Nacitat
                this.vyhra = false;
                this.prohra = false;
                this.znovuNactiHru = true;
            },
            prestanNacitat() {                  //znovuNactiHru se vyresetuje na false
                this.znovuNactiHru = false;
            },

        }
    }
</script>


<style scoped>
    .tlacitka {
        /* width: 755px; */
        margin: 0;
        padding: 0;
        height: 60px;
        display: flex;
        justify-content: space-evenly;

    }


    /* .neaktivni {
        background-color: silver;

    }*/
</style>
