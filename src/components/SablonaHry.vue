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


        <!-- <hra1 
        v-bind:vyhra="vyhra"
        v-bind:prohra="prohra"
        v-bind:znovuNacist="znovuNactiHru"

        v-on:vyhrani="vyhrat"
        v-on:prohrani="prohrat"
        v-on:prestan-nacitat="prestanNacitat"
        /> -->


        <!-- <hra2 
        v-bind:vyhra="vyhra"
        v-bind:prohra="prohra"

        v-on:vyhrani="vyhrat"
        v-on:prohrani="prohrat"
        />  -->
        <!-- PRIDAT ELEMENT, NA KTEREM BUDOU PROPS a udalosti KAZDOU HRU -->
    

        <div class="tlacitka border-grey palubniDeska"> 
            <div class="hlavniTlacitka"> </div>
                <button class="btn btn-red" v-on:click="pryc" v-bind:class="{'btn-grey': vyhra === true}"> pryč </button>
                <button class="btn btn-yellow" v-on:click="obnov"> obnov </button>
                <button class="btn btn-green" v-on:click="dal" v-bind:class="{'btn-grey': vyhra === false}"> dál </button>
            <div class="sound"> </div>
                <button class="btn btn-blue"> zvuk </button>
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
        // zavod: Zavod
        // hra2: Hra2
    },

    data() {
        return {
           
            vyhra: false,

            prohra: false,

            znovuNactiHru: false
        }
    },

    methods: {
        pryc() {                            //emituje se udalost do modalu v Bludiste.vue, aby se okno zavrelo
            if (this.vyhra === false)
                this.$emit("close");
        },

        dal() {
            if (this.vyhra === true)    //emituje se udalost do modalu v Bludiste.vue, aby se okno zavrelo
                this.$emit("close");
        },

        vyhrat() {
            this.vyhra = true;              //pokud dojde k vyhre ve hre, spusti to udalost, ktera vyvola tuto fci; ta prepise vyhru na true a prohru na false (coz je jako props poslano zase zpatky do hry)
            // console.log(this.vyhra)
            this.prohra = false;
            this.$emit("vyhrat");
        },


        prohrat() {             //pokud dojde k prohre ve hre, spusti to udalost, ktera vyvola tuto fci; ta prepise prohru na true a vyhru na false (coz je jako props poslano zase zpatky do hry)
            this.prohra = true;
            // console.log(this.prohra)
            this.vyhra = false;
        },

        obnov() {                       //NEFUNGUJE, DODELAT vyresetuje vyhru a prohru na false, znovuNactiHru da na true, coz bude jako props i ve hre. Tam, pokud je toto props true, se znovu nactou obrazky a pak se vyvola udalost, ktera zavola fci prestan Nacitat
            this.vyhra = false;
            this.prohra = false;
            this.znovuNactiHru = true;
            console.log(this.znovuNactiHru);
        },


        prestanNacitat() {                  //NEFUNGUJE, DODELAT znovuNacistHru se vyresetuje na false
            this.znovuNactiHru = false;
        }
    }
    
}
</script>


<style scoped>
.tlacitka {
    /* width: 755px; */
    margin: 0;   
    height: 60px;
    display: flex;
    justify-content: space-between; 
}


/* .neaktivni {
    background-color: silver; 

}*/
</style>