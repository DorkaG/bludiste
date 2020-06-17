<template>
    <div class="kontejnerHry">
        <div class="hraSPokyny"> 
            <div class="hra"> 
                <div class="obrazky"> 
                    <div class="herniobrazek" v-for="(obrazek, index) in poleObrazku"
                    v-bind:key="index"
                    v-on:click="vyhodnot(index)"
                    >
                        {{obrazek}}</div>
                    
                </div>
            </div>
            <div class="pokyny"> Vyber, který obrázek k ostatním obrázkům nepatří. </div>
        </div>


        <div class="tlacitka"> 
            <div class="hlavniTlacitka"> </div>
                <button class="pryc"> pryč </button>
                <button class="obnov"> obnov </button>
                <button class="dal"> dál </button>
            <div class="zvukoveTlacitko"> </div>
                <button class="zvuk"> zvuk </button>
        </div>

        <modal name="alert" width="400"> 
            <h1> dorci modalni upozorneni</h1>
            <h2> jsi sikulka </h2>
        </modal>
           
    </div>
</template>





<script>
export default {

    data() {
        return {
            patri: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [10, 11, 12, 13, 14, 15, 16, 17, 18],
                [19, 20, 21, 22, 23, 24, 25, 26, 27],
            ],

            nepatri: ["žížala", "křížala", "žoužele", "žížale", "namále"],

            poleObrazku: [],

            indexNepatri: 0
        }
    },

    methods: {
        vyberPoleObrazkuPatri() {           //vygeneruje nahodne pole o trech obrazcich, ktere k sobe tematicky patri

            let indexTematu = Math.floor(Math.random() * this.patri.length);  //nahodny vyber pole v poli
            console.log(indexTematu);

            let x = 1;
            let index = 0;                          //index obrazku ve vybranem poli
            do {
                 index = Math.floor(Math.random() * this.patri[indexTematu].length);
                 this.poleObrazku.push(this.patri[indexTematu][index]);             //vlozi vybrany obrazek do poleObrazku
                 this.patri[indexTematu].splice(index, 1);                              // z puvodniho pole ho smaze, aby se pak nemohl vybrat znovu
                 x++;
             } while (x <= 3)
                 

                 console.log(this.patri[indexTematu]);
                 console.log(this.poleObrazku);          
        },

        pridejObrazekNepatri() {            // nahodne vybere jeden obrazek, co nepatri, a pak ho prida na nhodny index do vygenerovaneho pole obrazku, ktere k sobe patri
            let index = Math.floor(Math.random() * this.nepatri.length);        //nahodne vybere obrazek
            console.log(this.nepatri[index]);

            this.indexNepatri = Math.floor(Math.random() * 4)          //nahodne vybrani indexu, na ktery se obrazek prida
            console.log(this.indexNepatri)

            this.poleObrazku.splice(this.indexNepatri, 0, this.nepatri[index]);    //pridani obrazku, kt. nepatri, do  pole na nahodnou pozici
            console.log(this.poleObrazku);
        },

        vyhodnot(index) {
            if (index === this.indexNepatri) {
                this.$modal.show("alert")
            }

            else {alert("Blbe!")}
        }

    }, 


    created() {
        this.vyberPoleObrazkuPatri()
        this.pridejObrazekNepatri()

    }

    
    
}
</script>



<style>

.kontejnerHry {
    width: 800px;
    height: 500px;
    border: solid blue 5px;
    margin: 0 auto;
}

.hraSPokyny {
    display: flex;
}

.hra {
    border: solid grey 2px;
    margin: 20px;
    width: 550px;
    height: 350px;

}

.pokyny {
    border: solid grey 2px;
    margin: 20px 20px 20px 0;
    width: 200px;
    height: 350px;

}


.tlacitka {
    width: 755px;
    border: solid grey 2px;
    margin: 20px;   
    height: 60px;
    display: flex;
    justify-content: space-between;
}

.herniobrazek {
    width: 100px;
    height: 100px;
    border: solid grey 2px;
    margin: 50px 15px;
}

.obrazky {
    display: flex;
    width: 500px;
    margin: 0 auto;
}





</style>