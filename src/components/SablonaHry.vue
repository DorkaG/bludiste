<template>
    <div class="sablona-kontejner"> 
        <hra1 
        v-bind:vyhra="vyhra"
        v-bind:prohra="prohra"
        v-bind:znovuNacist="znovuNactiHru"

        v-on:vyhrani="vyhrat"
        v-on:prohrani="prohrat"
        v-on:prestan-nacitat="prestanNacitat"
        />
        <!-- PRIDAT ELEMENT, NA KTEREM BUDOU PROPS VYHRA PROHRA PRO KAZDOU HRU -->
    

        <div class="tlacitka"> 
            <div class="hlavniTlacitka"> </div>
                <button class="pryc" v-on:click="pryc" v-bind:class="{neaktivni: vyhra === true}"> pryč </button>
                <button class="obnov" v-on:click="obnov"> obnov </button>
                <button class="dal" v-on:click="dal" v-bind:class="{neaktivni: vyhra === false}"> dál </button>
            <div class="zvukoveTlacitko"> </div>
                <button class="zvuk"> zvuk </button>
        </div> 

    </div>
</template>

<script>
import Hra1 from "./Hra1.vue"       //NAIMPORTOVAT KAZDOU HRU

export default {
    components: {
        hra1: Hra1
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


<style>
.tlacitka {
    /* width: 755px; */
    border: solid grey 2px;
    margin: 20px;   
    height: 60px;
    display: flex;
    justify-content: space-between;
}


.pryc {
  background-color: red;  

}

.obnov {
    background-color: orange;

}

.dal {

background-color: green;
}

.zvuk {
    background-color: aqua;
}

.neaktivni {
    background-color: silver;

}
</style>